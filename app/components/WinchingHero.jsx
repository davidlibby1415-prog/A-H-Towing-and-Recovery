"use client";

import React, { useEffect } from "react";
import { PhoneCTA, TextCTA } from "./ServiceLayout";
import { TikTokEmbed } from "./TikTokEmbed";

export default function WinchingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black border-b border-black/40">
      {/* Background TikTok video */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        {/* Constrain width so it’s big but not insane on desktop */}
        <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl opacity-70">
          <TikTokEmbed
            videoId="7501393555433262367"
            caption="Practicing for Perfection"
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Foreground hero content */}
      <div className="relative container max-w-7xl py-10 md:py-16 flex flex-col items-center text-center gap-4 text-amber-100">
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
