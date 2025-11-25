// app/heavy-duty-commercial-towing/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Heavy Duty & Commercial Towing | A & H Towing & Recovery",
  description:
    "Oilfield, fleet, and commercial units moved safely out of Pecos, Reeves County, and the West Texas patch.",
};

/* ===================== Hero with video ===================== */

function HeavyDutyHero() {
  return (
    <section className="relative isolate bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero frame */}
        <div className="relative overflow-hidden rounded-[32px] border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)] min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Videos/truckunit.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/80" />

          {/* Centered content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-6">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Heavy Duty &amp; Commercial Towing
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base font-semibold text-amber-100">
              Oilfield, fleet, and commercial units moved safely out of Pecos,
              Reeves County, and the West Texas patch.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========== Heavy Duty TikTok Grid (4 videos) =========== */

function HeavyDutyTikTokGrid() {
  const videos = [
    {
      id: "7403892840364838174",
      caption: "Heavy Duty Tow: We Do It the Right Way",
    },
    {
      id: "7512230159630617887",
      caption: "Commercial Tow: The Flying School Bus",
    },
    {
      id: "7422122230550760734",
      caption: "Safety Tip: Always Check Your Brakes! See Why",
    },
    {
      id: "7415077930256272671",
      caption: "Commercial Tow: Dolly in Action",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
      {videos.map((video) => (
        <div
          key={video.id}
          className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]"
        >
          <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2">
            <TikTokEmbed
              videoId={video.id}
              caption={video.caption}
              className="w-full max-w-[420px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================== Page =========================== */

export default function HeavyDutyCommercialTowingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO with truckunit.mp4 */}
        <HeavyDutyHero />

        {/* MAIN SECTION */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                When your work truck can’t work, we move it.
              </h2>

              <p className="text-sm md:text-base font-semibold">
                From loaded one-tons to service trucks and small commercial
                units, we understand downtime costs money.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Oilfield and lease road recoveries</li>
                <li>• Fleet tows to yards and repair shops</li>
                <li>• Night and weekend calls for working crews</li>
                <li>• Clear communication with dispatch and safety</li>
              </ul>

              <p className="text-sm md:text-base font-semibold">
                Tell us where the unit is, what you’re driving, and where it
                needs to go. We’ll give straight answers and show up ready.
              </p>
            </div>

            {/* RIGHT: Heavy Duty TikTok grid */}
            <HeavyDutyTikTokGrid />
          </div>

          {/* Bottom buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
