"use client";

import React from "react";
import { PhoneCTA, TextCTA } from "./ServiceLayout";
import { TikTokEmbed } from "./TikTokEmbed";

export default function WinchingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black border-b border-black/40 min-h-[420px] md:min-h-[520px]">
      {/* Background TikTok video + overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Make the video very wide so it fills the hero behind content */}
          <div className="w-[140vw] max-w-none md:w-[120vw] lg:w-[100vw] opacity-85">
            <TikTokEmbed
              videoId="7501393555433262367"
              caption="Practicing for Perfection"
            />
          </div>
        </div>

        {/* Slight dark overlay for readability, but keep video visible */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Foreground hero content */}
      <div className="relative z-10 container max-w-7xl py-10 md:py-16 flex flex-col items-center text-center gap-4 text-amber-100">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-lg">
          Winching / Recovery
        </h1>
        <p className="max-w-2xl text-sm md:text-base font-semibold drop-shadow">
          Off-road, mud, sand, and soft-shoulder recoveries on lease roads,
          ranch tracks, and West Texas highways — planned, not rushed.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <PhoneCTA />
          <TextCTA />
        </div>
      </div>
    </section>
  );
}
