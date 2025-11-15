"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../components/ServiceLayout";

export default function WinchingRecoveryPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Winching / Recovery"
          serviceSubtitle="Off-road recoveries for mud, sand, soft shoulders, lease roads, and remote access routes around Pecos and West Texas."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Stuck isn&apos;t the end of the story.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Lease roads, ranch tracks, and soft shoulders can swallow a
                truck quick. We plan the recovery so we don&apos;t make it worse.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Vehicles stuck in mud, sand, or soft shoulder</li>
                <li>• Lease road, pad, and ranch road recoveries</li>
                <li>• Frame-safe rigging with soft shackles and rated gear</li>
                <li>• Careful assessment before pulling to avoid extra damage</li>
              </ul>
              <p className="text-sm md:text-base font-semibold">
                Tell us what you&apos;re driving, how it&apos;s stuck, and where it is.
                Photos and GPS pins help. We&apos;ll talk through a plan before we move
                an inch.
              </p>
            </div>

            <TikTokGallery
              images={[
                "/images/winching-1.jpg",
                "/images/winching-2.jpg",
                "/images/winching-3.jpg",
                "/images/winching-4.jpg",
              ]}
            />
          </div>

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

