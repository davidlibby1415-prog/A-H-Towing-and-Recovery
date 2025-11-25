// components/WinchingHero.jsx
"use client";

import React from "react";
import { PhoneCTA, TextCTA } from "./ServiceLayout";

export default function WinchingHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-neutral-950">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Videos/heavy-duty-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      {/* Dark vignette over video for readability (kept) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />

      {/* Centered hero content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-4xl w-full text-center">
          {/* 100% transparent card: only a border + text */}
          <div className="rounded-[32px] border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)] px-6 py-6 md:px-10 md:py-8 bg-black/0">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Winching / Recovery
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base font-semibold text-amber-100">
              Off-road winching and recovery for mud, sand, soft shoulder, and
              lease roads across Pecos, Reeves County, and West Texas.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>

            <p className="mt-3 text-xs md:text-sm text-amber-100/90 font-semibold">
              Call or text with your vehicle, location (GPS if possible), and
              what happened. We&apos;ll give you a straight answer on ETA and
              pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
