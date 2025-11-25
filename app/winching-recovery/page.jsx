// app/winching-recovery/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  PhoneCTA,
  TextCTA,
} from "../../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Winching / Recovery | A & H Towing & Recovery",
  description:
    "Off-road winching and recovery for mud, sand, soft shoulder, and lease roads across Pecos, Reeves County, and West Texas.",
};

/* ===================== HERO WITH VIDEO ===================== */

function WinchingHero() {
  return (
    <section className="relative isolate bg-neutral-950">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/Videos/heavy-duty-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Light darkening for readability (not a card) */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Centered transparent text box with only a border */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center">
        <div className="inline-flex flex-col items-center justify-center rounded-[22px] border border-black/80 bg-transparent px-6 py-4">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Winching / Recovery
          </h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base font-semibold text-amber-50">
            Off-road, mud, sand, and soft-shoulder recoveries on lease roads,
            ranch tracks, and West Texas highways — planned, not rushed.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========== Winching TikTok Grid (4 videos) =========== */

function WinchingTikTokGrid() {
  const videos = [
    {
      id: "7501393555433262367",
      caption: "CRST Semi Flipped: Practice Makes Perfect",
    },
    {
      id: "7535674790141791519",
      caption: "Recovery: Contractor Rolling in the Deep",
    },
    {
      id: "7471099435775200543",
      caption: "Recovery: Flying Truck in the Ditch",
    },
    {
      id: "7323373707848650015",
      caption: "Winching Job: Unstable Front End Loader CAT 950",
    },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-2xl md:text-3xl font-black text-amber-100 text-center md:text-left">
        Winching &amp; Recovery Clips
      </h3>

      <p className="text-sm md:text-base font-semibold text-amber-100/90 text-center md:text-left">
        Real recoveries and practice pulls from @285302ditchking out of West
        Texas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]"
          >
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

export default function WinchingRecoveryPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO with heavy-duty-bg.mp4 and transparent-outline text box */}
        <WinchingHero />

        {/* MAIN SECTION */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Steel background + shaded yellow text */}
            <div className="space-y-5">
              <div className="rounded-[28px] p-[6px] rb-border">
                <div
                  className="rounded-[22px] border border-yellow-400/85 p-5"
                  style={{
                    backgroundImage: 'url("/diamond-plate.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {/* shaded inner box */}
                  <div className="rounded-2xl bg-black/80 px-4 py-4 border border-white/10 text-amber-100">
                    <h2 className="text-2xl md:text-3xl font-black mb-3 text-amber-200">
                      Stuck doesn&apos;t mean stranded.
                    </h2>

                    {/* YELLOW paragraph 1 */}
                    <p className="text-sm md:text-base font-semibold text-amber-200">
                      Lease roads, caliche, sand, and soft shoulders will
                      humble anyone. We treat recoveries like a job to be{" "}
                      <span className="font-black">planned and executed</span>,
                      not rushed and guessed at.
                    </p>

                    <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                      <li>
                        • Mud, sand, and soft-shoulder recoveries on lease roads
                        and ranch tracks
                      </li>
                      <li>
                        • Off-road pulls with attention to tire ruts, ruts, and
                        ground conditions
                      </li>
                      <li>
                        • Frame-safe attachment points, soft shackles, and
                        rigging awareness
                      </li>
                      <li>
                        • Communication with drivers, company men, or landowners
                      </li>
                    </ul>

                    {/* YELLOW paragraph 2 */}
                    <p className="mt-3 text-sm md:text-base font-semibold text-amber-200">
                      The goal is simple:{" "}
                      <span className="font-black">
                        get you out with as little extra damage as possible
                      </span>{" "}
                      and off the unsafe ground.
                    </p>

                    {/* What helps us plan a recovery */}
                    <div className="mt-4 rounded-2xl border border-yellow-400/85 p-4 text-sm md:text-base font-semibold">
                      <h3 className="text-lg md:text-xl font-black mb-2 text-amber-200">
                        What helps us plan a recovery
                      </h3>
                      <ul className="space-y-1">
                        <li>
                          • Type of vehicle (2WD / 4x4, loaded or empty)
                        </li>
                        <li>
                          • Ground conditions (mud, sand, caliche, shoulder)
                        </li>
                        <li>• How far off the road you are</li>
                        <li>
                          • Any obstacles (ditches, fences, posts, etc.)
                        </li>
                      </ul>

                      {/* YELLOW paragraph 3 */}
                      <p className="mt-2 text-amber-200">
                        The more detail you give us up front, the better we can
                        prepare the truck, gear, and approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Railcar TikTok – smaller to match others */}
              <div className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)] max-w-[360px] mx-auto w-full">
                <div className="px-3 pt-2 pb-1">
                  <h4 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
                    Repo: The Railcar Mover
                  </h4>
                </div>
                <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2">
                  <TikTokEmbed
                    videoId="6896206161771547909"
                    caption="Repo: The Railcar Mover"
                    className="w-full max-w-[320px]"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Winching TikTok grid */}
            <WinchingTikTokGrid />
          </div>

          {/* Bottom buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>

          {/* We accept bar */}
          <PaymentsBar />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

