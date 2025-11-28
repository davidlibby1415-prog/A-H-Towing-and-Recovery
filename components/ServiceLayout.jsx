// FILE: components/ServiceLayout.jsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/* ============================ Utilities ============================ */

/**
 * Build an sms: link with prefilled body.
 * (If you use this anywhere else, it’s here and ready.)
 */
export function smsHref(number, body) {
  const encoded = encodeURIComponent(body);
  const isiOS =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const sep = isiOS ? "&" : "?";
  return `sms:${number}${sep}body=${encoded}`;
}

/**
 * Smooth scroll to an element with a header offset.
 * Used on the home page AND when clicking the red TextCTA.
 */
export function scrollToFormWithOffset(targetId = "dispatch-form", offset = 210) {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const el = document.getElementById(targetId);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - offset;
  window.scrollTo({ top, left: 0, behavior: "smooth" });
}

/* ============================ Header / Footer ============================ */

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-black/90 backdrop-blur">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-yellow-300"
        >
          <span className="uppercase tracking-[0.18em] text-[11px] text-red-400">
            A &amp; H
          </span>
          <span className="hidden sm:inline">Towing &amp; Recovery</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/tips-tricks"
            className="hidden sm:inline text-xs uppercase tracking-[0.18em] text-neutral-300 hover:text-yellow-300"
          >
            Tips &amp; Tricks
          </Link>
          <a
            href="tel:"
            className="inline-flex items-center justify-center rounded-full border border-red-500/70 bg-red-700/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-red-900/40 hover:bg-red-500"
          >
            Call Dispatch
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} A &amp; H Towing &amp; Recovery, LLC</p>
        <p className="text-[11px] uppercase tracking-[0.18em]">
          West Texas • Oilfield &amp; Highway Support
        </p>
      </div>
    </footer>
  );
}

/* ============================ CTAs ============================ */

export function PhoneCTA() {
  return (
    <a
      href="tel:"
      className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-lg shadow-yellow-900/40 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400"
    >
      Call dispatch
    </a>
  );
}

/**
 * RED TEXT BUTTON – FIXED BEHAVIOR
 *
 * - On the HOME page (pathname === "/"):
 *     → Smooth scrolls down to #dispatch-form with offset.
 *
 * - On ANY OTHER PAGE:
 *     → Pushes to "/#dispatch-form"
 *     → Home page handles the offset scroll on load.
 */
export function TextCTA() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    // Already on home page: just scroll with offset
    if (pathname === "/") {
      scrollToFormWithOffset("dispatch-form", 210);
      return;
    }

    // Any service page: navigate to home with hash
    router.push("/#dispatch-form");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-red-900/50 hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400"
    >
      Text dispatch instructions
    </button>
  );
}

/* ============================ BrandHero ============================ */

export function BrandHero({
  serviceTitle,
  serviceSubtitle,
  heroVideoSrc,
  fallbackImage = "/tow-hero-fallback.jpg",
}) {
  return (
    <section className="relative border-b border-neutral-800 bg-neutral-950 overflow-hidden">
      {/* subtle radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.10),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,250,252,0.08),_transparent_60%)]" />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-center">
        {/* LEFT: Text bubble */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-red-400 mb-2">
            A &amp; H Towing &amp; Recovery • West Texas
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-300 drop-shadow-[0_0_16px_rgba(0,0,0,0.9)]">
            {serviceTitle}
          </h1>
          {serviceSubtitle && (
            <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-100 max-w-xl">
              {serviceSubtitle}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </div>

        {/* RIGHT: Video / fallback image */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
          {heroVideoSrc ? (
            <video
              className="w-full h-full object-cover aspect-video"
              src={heroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={fallbackImage}
              alt={serviceTitle}
              className="w-full h-full object-cover aspect-video"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ============================ WeAcceptBar ============================ */

export function WeAcceptBar() {
  return (
    <section className="border-t border-neutral-800 bg-neutral-950">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="rounded-2xl border border-emerald-400/70 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90 px-4 py-3 flex-1 shadow-[0_0_22px_rgba(16,185,129,0.35)]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">
            We accept
          </p>
          <p className="mt-1 text-xs sm:text-sm text-amber-100">
            Cash, major credit / debit cards,{" "}
            <span className="text-yellow-300 font-semibold">
              most motor club dispatches
            </span>{" "}
            and{" "}
            <span className="text-yellow-300 font-semibold">
              select fleet / PO work
            </span>{" "}
            when arranged in advance.
          </p>
        </div>

        <div className="text-[11px] sm:text-xs text-neutral-400 text-center sm:text-right">
          <p>Ask dispatch about receipts, invoices, and proof-of-service.</p>
        </div>
      </div>
    </section>
  );
}
