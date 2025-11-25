// components/WinchingHero.jsx
"use client";

import React from "react";
import { PhoneCTA, TextCTA } from "./ServiceLayout";

export default function WinchingHero() {
  return (
    <section className="relative isolate bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)] min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Videos/heavy-duty-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          {/* Centered card with VERY light background so video shows through */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-6">
            <div className="rounded-[24px] border border-white/30 bg-black/10 backdrop-blur-sm px-6 py-5 md:px-8 md:py-6">
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Winching / Recovery
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base font-semibold text-amber-100">
                Off-road winching and recovery for mud, sand, soft shoulder,
                and lease roads across Pecos, Reeves County, and West Texas.
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
      </div>
    </section>
  );
}
