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
    <div className="space-y-3">
      <h3 className="text-2xl md:text-3xl font-black text-amber-100 text-center md:text-left">
        Heavy Duty Clips &amp; Recoveries
      </h3>

      <p className="text-sm md:text-base font-semibold text-amber-100/90 text-center md:text-left">
        Real pulls, real recoveries, and real units from @285302ditchking out of
        West Texas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]"
          >
            {/* Bold, slightly larger title above each TikTok */}
            <div className="px-3 pt-2 pb-1">
              <h4 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
                {video.caption}
              </h4>
            </div>

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
    </div>
  );
}

/* ========================= Payments Bar ========================= */

function PaymentsBar() {
  return (
    <div className="container max-w-7xl py-4 bg-red-900/60 rounded-2xl mt-6">
      <div className="w-full flex justify-center">
        <div className="rounded-2xl p-3 bg-gradient-to-r from-sky-500/30 via-rose-500/30 to-amber-400/30 border border-black/10 max-w-fit">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="font-extrabold text-white text-lg md:text-xl">
              We accept:
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-yellow-50 to-amber-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">Cash</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-sky-50 to-blue-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">
                All Major Credit Cards
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-rose-50 to-red-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M3 6h18l-2 12H5L3 6Z" />
                <path d="M7 10h10M6 14h12" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">
                EFS Services
              </span>
            </div>
          </div>
        </div>
      </div>
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
            {/* LEFT: Steel text box with grey inner shade */}
            <div className="space-y-4 text-white">
              <div className="rounded-[28px] p-[6px] bg-gradient-to-br from-neutral-800 via-neutral-900 to-black border border-yellow-400/70 shadow-[0_10px_28px_rgba(0,0,0,0.6)]">
                <div
                  className="rounded-[22px] p-5 border border-white/10"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(17,17,17,0.88), rgba(17,17,17,0.88)), url("/diamond-plate.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Inner grey shade for the text */}
                  <div className="rounded-2xl bg-neutral-900/85 px-4 py-4 border border-white/10">
                    <h2 className="text-2xl md:text-3xl font-black mb-3">
                      When your work truck can’t work, we move it.
                    </h2>

                    <p className="text-sm md:text-base font-semibold">
                      From loaded one-tons to service trucks and small
                      commercial units, we understand downtime costs money.
                    </p>

                    <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                      <li>• Oilfield and lease road recoveries</li>
                      <li>• Fleet tows to yards and repair shops</li>
                      <li>• Night and weekend calls for working crews</li>
                      <li>• Clear communication with dispatch and safety</li>
                    </ul>

                    <p className="mt-3 text-sm md:text-base font-semibold">
                      Tell us where the unit is, what you’re driving, and where
                      it needs to go. We’ll give straight answers and show up
                      ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Heavy Duty TikTok grid */}
            <HeavyDutyTikTokGrid />
          </div>

          {/* Bottom buttons – blue phone + red text-to-GPS */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>

        {/* Payments bar at bottom, like main page */}
        <PaymentsBar />
      </main>

      <SiteFooter />
    </>
  );
}


