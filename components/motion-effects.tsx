"use client";

import { useEffect, useRef } from "react";

export function MotionEffects() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    // --- Scroll reveal (skipped entirely for reduced motion) ---
    let revealObserver: IntersectionObserver | undefined;
    if (!reduceMotion.matches) {
      root.classList.add("motion-ready");
      revealObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        }
      }, { threshold: 0.12, rootMargin: "0px 0px -6%" });
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => revealObserver?.observe(el));
    }

    // --- Scroll progress line + scroll-driven parallax (transform only) ---
    const scrollTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-scroll]"));
    let scrollQueued = false;
    const onScrollFrame = () => {
      scrollQueued = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      if (reduceMotion.matches) return;
      for (const el of scrollTargets) {
        const speed = Number(el.dataset.speed ?? "0.08");
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (scrollQueued) return;
      scrollQueued = true;
      requestAnimationFrame(onScrollFrame);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScrollFrame();

    // --- Pointer-driven effects (fine pointer only, re-evaluated on media change) ---
    const cleanups: Array<() => void> = [];
    const teardownPointer = () => {
      for (const fn of cleanups.splice(0)) fn();
    };

    const enablePointer = () => {
      if (reduceMotion.matches || !finePointer.matches) return;

      // Spotlight / card glow — element-relative CSS vars
      document.querySelectorAll<HTMLElement>("[data-spotlight], [data-tilt]").forEach((el) => {
        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
          el.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
        };
        el.addEventListener("pointermove", move);
        cleanups.push(() => el.removeEventListener("pointermove", move));
      });

      // Tilt on selected cards
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const max = Number(el.dataset.tilt || "5");
        let frame = 0;
        const move = (event: PointerEvent) => {
          if (frame) return;
          frame = requestAnimationFrame(() => {
            frame = 0;
            const rect = el.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(1100px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateZ(6px)`;
          });
        };
        const reset = () => {
          if (frame) {
            cancelAnimationFrame(frame);
            frame = 0;
          }
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
          reset();
        });
      });

      // Magnetic buttons
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const radius = 90;
        const strength = 0.28;
        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          if (Math.hypot(dx, dy) > radius + Math.max(rect.width, rect.height) / 2) {
            el.style.transform = "";
            return;
          }
          el.style.transform = `translate(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px)`;
        };
        const reset = () => {
          el.style.transform = "";
        };
        window.addEventListener("pointermove", move, { passive: true });
        el.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          window.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
          reset();
        });
      });

      // Hero cursor parallax for decorative / floating layers
      const hero = document.querySelector<HTMLElement>(".hero");
      const layers = Array.from(document.querySelectorAll<HTMLElement>(".hero [data-parallax]"));
      if (hero && layers.length) {
        let frame = 0;
        const move = (event: PointerEvent) => {
          if (frame) return;
          frame = requestAnimationFrame(() => {
            frame = 0;
            const nx = event.clientX / window.innerWidth - 0.5;
            const ny = event.clientY / window.innerHeight - 0.5;
            for (const layer of layers) {
              const depth = Number(layer.dataset.depth ?? "16");
              layer.style.setProperty("--px", `${(nx * depth).toFixed(1)}px`);
              layer.style.setProperty("--py", `${(ny * depth).toFixed(1)}px`);
            }
          });
        };
        const reset = () => {
          for (const layer of layers) {
            layer.style.setProperty("--px", "0px");
            layer.style.setProperty("--py", "0px");
          }
        };
        hero.addEventListener("pointermove", move);
        hero.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          hero.removeEventListener("pointermove", move);
          hero.removeEventListener("pointerleave", reset);
        });
      }
    };

    enablePointer();
    const onPointerPref = () => {
      teardownPointer();
      enablePointer();
    };
    finePointer.addEventListener("change", onPointerPref);
    reduceMotion.addEventListener("change", onPointerPref);

    return () => {
      revealObserver?.disconnect();
      root.classList.remove("motion-ready");
      window.removeEventListener("scroll", onScroll);
      finePointer.removeEventListener("change", onPointerPref);
      reduceMotion.removeEventListener("change", onPointerPref);
      teardownPointer();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>;
}
