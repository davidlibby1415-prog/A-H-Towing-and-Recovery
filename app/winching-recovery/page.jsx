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

/* =========================== Page =========================== */

export default function WinchingRecoveryPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO with heavy-duty background video */}
        <BrandHero
          heroVideoSrc="/Videos/heavy-duty-bg.mp4"
          serviceTitle="Winching / Recovery"
          serviceSubtitle="Off-road winching and recovery for mud, sand, soft shoulder, and lease roads across Pecos, Reeves County, and West Texas."
          overlayOpacity={0.45}
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Stuck doesn’t mean stranded.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Lease roads, caliche, sand, and soft shoulders will humble
                anyone. We treat recoveries like a job to be{" "}
                <span className="font-black">planned and executed</span>, not
                rushed and guessed at.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>
                  • Mud, sand, and soft-shoulder recoveries on lease roads and
                  ranch tracks
                </li>
                <li>
                  • Off-road pulls with attention to tire ruts, ruts, and ground
                  conditions
                </li>
                <li>
                  • Frame-safe attachment points, soft shackles, and rigging
                  awareness
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

              {/* Small “what to tell us” box */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  What helps us plan a recovery
                </h3>
                <ul className="space-y-1">
                  <li>• Type of vehicle (2WD / 4x4, loaded or empty)</li>
                  <li>• Ground conditions (mud, sand, caliche, shoulder)</li>
                  <li>• How far off the road you are</li>
                  <li>• Any obstacles (ditches, fences, posts, etc.)</li>
                </ul>
                <p className="mt-2">
                  The more detail you give us up front, the better we can
                  prepare the truck, gear, and approach.
                </p>
              </div>
            </div>

            {/* RIGHT: TikTok grid + safety box */}
            <div className="space-y-6">
              <WinchingTikTokGrid />

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold text-amber-50">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  Safety around a stuck vehicle
                </h4>
                <ul className="space-y-1">
                  <li>• Stay clear of the recovery path and cable line.</li>
                  <li>• Keep bystanders and crew back until we’re rigged.</li>
                  <li>• Don’t spin tires while we’re setting up.</li>
                  <li>
                    • Follow the operator’s directions — they’re watching the
                    angles and risk.
                  </li>
                </ul>
                <p className="mt-2">
                  Recovery work is dangerous when rushed. We’d rather take an
                  extra minute to set it up right than gamble with people or
                  equipment.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons at bottom */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
