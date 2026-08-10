import Image from "next/image";

export function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Full Vibe Coding — início">
      <span className="brand-mark">
        <Image src="/brand/full-vibe-coding-logo.png" width={40} height={40} alt="" aria-hidden="true" />
      </span>
      <span>FULL VIBE <b>CODING</b></span>
    </a>
  );
}
