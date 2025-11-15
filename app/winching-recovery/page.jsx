import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../components/ServiceLayout";

export const metadata = {
  title: "Winching / Recovery | A & H Towing & Recovery",
  description:
    "Off-road winching and recovery for mud, sand, soft shoulder, and lease roads across Pecos, Reeves County, and West Texas.",
};

export default function WinchingRecoveryPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Winching / Recovery"
          serviceSubtitle="Off-road, mud, sand, and soft shoulder recoveries on lease roads, ranch tracks, and West Texas highways."
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
                  • Off-road pulls with attention to tire ruts, ruts, and
                  ground conditions
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

            {/* RIGHT: TikTok-style gallery / visuals */}
            <div className="space-y-6">
              <TikTokGallery
                images={[
                  "/images/winch-1.jpg",
                  "/images/winch-2.jpg",
                  "/images/winch-3.jpg",
                  "/images/winch-4.jpg",
                ]}
              />

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

