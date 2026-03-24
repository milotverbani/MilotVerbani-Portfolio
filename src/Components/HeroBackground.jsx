import React from "react";

/**
 * Pure CSS hero backdrop: liquid-style blobs, water ripples, soft bounce dots.
 * No WebGL — stays smooth on low-end devices.
 */
export default function HeroBackground() {
  return (
    <div
      className="hero-bg absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950"
      aria-hidden
    >
      {/* Deep base + static mesh */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 100% 80% at 50% -30%, rgba(34, 211, 238, 0.14), transparent 55%),
            radial-gradient(ellipse 70% 50% at 100% 10%, rgba(59, 130, 246, 0.1), transparent 50%),
            radial-gradient(ellipse 60% 45% at 0% 95%, rgba(99, 102, 241, 0.09), transparent 50%)
          `,
        }}
      />

      {/* Slow-moving “liquid” blobs */}
      <div className="hero-blob hero-blob--a" />
      <div className="hero-blob hero-blob--b" />
      <div className="hero-blob hero-blob--c" />
      <div className="hero-blob hero-blob--d" />

      {/* Moving highlight sheen (watery caustic hint) */}
      <div className="hero-sheen" />

      {/* Concentric ripples — droplet-on-water feel */}
      <div className="hero-ripple-hub hero-ripple-hub--primary">
        <span className="hero-ripple-ring" />
        <span className="hero-ripple-ring hero-ripple-ring--delay-1" />
        <span className="hero-ripple-ring hero-ripple-ring--delay-2" />
        <span className="hero-ripple-ring hero-ripple-ring--delay-3" />
      </div>
      <div className="hero-ripple-hub hero-ripple-hub--secondary">
        <span className="hero-ripple-ring hero-ripple-ring--slow" />
        <span className="hero-ripple-ring hero-ripple-ring--slow hero-ripple-ring--slow-stagger" />
      </div>

      {/* Small orbs — gentle bounce */}
      <div className="hero-float-dot hero-float-dot--1" />
      <div className="hero-float-dot hero-float-dot--2" />
      <div className="hero-float-dot hero-float-dot--3" />
      <div className="hero-float-dot hero-float-dot--4" />

      {/* Vignette + readability */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,transparent_32%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/5 via-zinc-950/55 to-zinc-950" />
    </div>
  );
}
