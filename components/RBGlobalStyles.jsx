"use client";

/**
 * Global animated red↔blue border + marquee keyframes,
 * injected from a tiny Client Component (safe in app dir).
 */
export default function RBGlobalStyles() {
  return (
    <style jsx global>{`
      @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
      }
      @keyframes rb-rotate {
        to {
          --angle: 360deg;
        }
      }
      .rb-border {
        --angle: 0deg;
        background: conic-gradient(
          from var(--angle),
          #3b82f6 0%,
          #ef4444 50%,
          #3b82f6 100%
        );
        animation: rb-rotate 24s linear infinite;
      }

      /* (Optional) marquee helper if you use it here later */
      @keyframes marquee-x {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee {
        display: inline-flex;
        min-width: 200%;
        animation: marquee-x 100s linear infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .marquee { animation: none !important; }
      }
    `}</style>
  );
}
