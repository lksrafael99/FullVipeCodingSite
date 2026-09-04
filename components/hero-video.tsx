"use client";

import { useEffect, useRef, useState } from "react";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Hero background video, kept off the critical path:
 * - nothing is fetched on first paint (only the tiny SVG poster shows)
 * - the mp4 is attached during idle time, and only on a fine pointer / fast connection
 * - playback pauses whenever the hero is scrolled out of view
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const net = (navigator as Navigator & { connection?: NetworkInfo }).connection;
    const stingyNetwork = net?.saveData === true || (net?.effectiveType ? /2g/.test(net.effectiveType) : false);
    if (reduceMotion || stingyNetwork) return;

    let idleId = 0;
    let cancelIdle: (() => void) | undefined;
    const attach = () => setSrc("/hero.mp4");
    const idle = () => {
      const ric = (window as Window & typeof globalThis).requestIdleCallback;
      if (typeof ric === "function") {
        idleId = ric(attach, { timeout: 2500 });
        cancelIdle = () => window.cancelIdleCallback(idleId);
      } else {
        idleId = window.setTimeout(attach, 1200);
        cancelIdle = () => window.clearTimeout(idleId);
      }
    };

    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });

    const io = new IntersectionObserver(([entry]) => {
      if (!ref.current?.src) return;
      if (entry.isIntersecting) ref.current.play().catch(() => {});
      else ref.current.pause();
    }, { threshold: 0.05 });
    io.observe(video);

    return () => {
      io.disconnect();
      window.removeEventListener("load", idle);
      cancelIdle?.();
    };
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    video.load();
    video.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      className="hero-video"
      src={src ?? undefined}
      muted
      loop
      playsInline
      preload="none"
      poster="/hero-poster.svg"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
