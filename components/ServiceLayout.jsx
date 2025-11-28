"use client";

import React from "react";
import Link from "next/link";

/* ===========================
   Shared helpers
   =========================== */

const DISPATCH_NUMBER = "(432) 842-4578";
const DISPATCH_TEL = "tel:+14328424578";

/* ===========================
   Site Header
   =========================== */

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/60 bg-neutral-950/95 backdrop-blur">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 gap-4">
        {/* Logo / brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-xs font-black tracking-tight text-white">
            A&H
          </div>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-[0.22em] text-yellow-300">
              A&H Towing &amp; Recovery, LLC
            </div>
            <div className="text-[11px] text-neutral-200">
              2712 W 5th Street • Pecos, TX
            </div>
          </div>
        </div>

        {/* Nav + CTA */}
        <div className="flex items-center gap-4 text-sm">
          <nav className="hidden md:flex items-center gap-4 text-neutral-200">
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link href="/heavy-duty-commercial-towing" className="hover:text-yellow-300">
              Services
            </Link>
            <Link href="/coverage" className="hover:text-yellow-300">
              Coverage
            </Link>
            <Link href="/owners" className="hover:text-yellow-300">
              Owners
            </Link>
            <Link href="/tips-tricks" className="hover:text-yellow-300">
              Tips &amp; Tricks
            </Link>
            <Link href="/request-a-tow" className="hover:text-yellow-300">
              Request a Tow
            </Link>
          </nav>

          <a
            href={DISPATCH_TEL}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_18px_rgba(37,99,235,0.6)] hover:bg-blue-500"
          >
            Call 24/7 Dispatch - {DISPATCH_NUMBER}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ===========================
   Site Footer
   =========================== */

export function SiteFooter() {
  return (
    <footer className="border-t border-black/60 bg-neutral-950">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-6 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          &copy; {new Date().getFullYear()} A&H Towing &amp; Recovery, LLC. All
          rights reserved.
        </div>
        <div className="text-xs md:text-sm">
          24/7 Dispatch:&nbsp;
          <a href={DISPATCH_TEL} className="text-yellow-300 hover:text-yellow-200">
            {DISPATCH_NUMBER}
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ===========================
   CTAs
   =========================== */

export function PhoneCTA() {
  return (
    <a
      href={DISPATCH_TEL}
      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_16px_rgba(37,99,235,0.7)] hover:bg-blue-500"
    >
      Call 24/7 Dispatch - {DISPATCH_NUMBER}
    </a>
  );
}

export function TextCTA() {
  // If you already had a special SMS link, you can swap the href back later.
  return (
    <Link
      href="/request-a-tow"
      className="inline-flex items-center justify-center rounded-full border border-yellow-300/80 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-200 hover:bg-yellow-300 hover:text-black"
    >
      Text Dispatch &amp; Share My GPS Location
    </Link>
  );
}

/* ===========================
   Brand Hero
   =========================== */

export function BrandHero({ serviceTitle, serviceSubtitle, heroVideoSrc }) {
  return (
    <section className="relative overflow-hidden border-b border-black/70 bg-neutral-950">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(239,68,68,0.16),_transparent_55%)]" />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-8 items-center">
        {/* LEFT: copy */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-yellow-300 mb-2">
            24/7 West Texas Dispatch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-100 drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
            {serviceTitle}
          </h1>
          {serviceSubtitle && (
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-100 max-w-xl">
              {serviceSubtitle}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </div>

        {/* RIGHT: hero media */}
        {heroVideoSrc && (
          <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
            <video
              className="w-full h-full object-cover aspect-video"
              src={heroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          </div>
        )}
      </div>
    </section>
  );
}

/* ===========================
   We Accept Bar
   =========================== */

export function WeAcceptBar() {
  return (
    <section className="border-t border-black/70 bg-red-900/95">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-sm">
        <div className="text-yellow-100 font-semibold tracking-wide">
          We accept:
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-100">
          <span className="rounded-full bg-black/60 px-3 py-1 border border-white/10">
            Cash
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 border border-white/10">
            All Major Credit Cards
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 border border-white/10">
            EFS Services
          </span>
        </div>
      </div>
    </section>
  );
}
