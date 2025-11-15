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

export default function FlatbedRollbackPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Flatbed / Rollback Services"
          serviceSubtitle="Damage-conscious loading for vehicles that sit low, roll funny, or simply need a flat deck."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Some vehicles just belong on a flatbed.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Lowered vehicles, all-wheel-drive units, and certain breakdowns
                do better on a rollback than a wheel-lift.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Lowered cars and specialty vehicles</li>
                <li>• All-wheel-drive and performance units</li>
                <li>• Non-rolling or severely damaged vehicles</li>
                <li>• Careful tie-down and operator attention</li>
              </ul>
              <p className="text-sm md:text-base font-semibold">
                If you’re worried about front bumpers, exhaust, or body damage,
                ask for a flatbed. We’ll walk through what we recommend.
              </p>
            </div>

            <TikTokGallery
              images={[
                "/images/flatbed-1.jpg",
                "/images/flatbed-2.jpg",
                "/images/flatbed-3.jpg",
                "/images/flatbed-4.jpg",
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
