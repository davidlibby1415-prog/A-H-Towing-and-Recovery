// app/winching-recovery/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  PhoneCTA,
  TextCTA,
  BrandHero,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Winching / Recovery | A & H Towing & Recovery",
  description:
    "Off-road winching and recovery for mud, sand, soft shoulder, and lease roads across Pecos, Reeves County, and West Texas.",
};

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
        Real recoveries, real training moments, and real West Texas jobs from
        @285302ditchking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]"
          >
            {/* Bold title above TikTok */}
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
        {/* HERO with heavy-duty background video and 10% translucent card */}
        <BrandHero
          heroVideoSrc="/Videos/heavy-duty-bg.mp4"
          serviceTitle="Winching / Recovery"
          serviceSubtitle="Off-road winching and recovery for mud, sand, soft shoulder, and lease roads across Pecos, Reeves County, and West Texas."
          overlayOpacity={0.45}
          cardClassName="bg-black/10"
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Steel plate text box with inner shade */}
            <div className="space-y-4 text-amber-50">
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
                  <div className="rounded-2xl bg-neutral-900/85 px-4 py-4 border border-white/10 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-black">
                      Stuck doesn’t mean stranded.
                    </h2>
                    <p className="text-sm md:text-base font-semibold">
                      Lease roads, caliche, sand, and soft shoulders will humble
                      anyone. We treat recoveries like a job to be{" "}
                      <span className="font-black">planned and executed</span>,
                      not rushed and guessed at.
                    </p>
                    <ul className="space-y-2 text-sm md:text-base font-semibold">
                      <li>
                        • Mud, sand, and soft-shoulder recoveries on lease
                        roads and ranch tracks
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
                    <p className="text-sm md:text-base font-semibold">
                      The goal is simple:{" "}
                      <span className="font-black">
                        get you out with as little extra damage as possible
                      </span>{" "}
                      and off the unsafe ground.
                    </p>

                    <div className="mt-4 rounded-2xl border border-yellow-400/80 bg-black/60 p-4 text-sm md:text-base font-semibold">
                      <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
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
                      <p className="mt-2">
                        The more detail you give us up front, the better we can
                        prepare the truck, gear, and approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: TikTok grid + steel safety box */}
            <div className="space-y-6">
              <WinchingTikTokGrid />

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
                  <div className="rounded-2xl bg-neutral-900/85 px-4 py-4 border border-white/10 text-sm md:text-base font-semibold text-amber-50">
                    <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                      Safety around a stuck vehicle
                    </h4>
                    <ul className="space-y-1">
                      <li>• Stay clear of the recovery path and cable line.</li>
                      <li>
                        • Keep bystanders and crew back until we’re rigged.
                      </li>
                      <li>• Don’t spin tires while we’re setting up.</li>
                      <li>
                        • Follow the operator’s directions — they’re watching
                        the angles and risk.
                      </li>
                    </ul>
                    <p className="mt-2">
                      Recovery work is dangerous when rushed. We’d rather take
                      an extra minute to set it up right than gamble with people
                      or equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons at bottom */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>

          {/* Payments bar */}
          <PaymentsBar />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

