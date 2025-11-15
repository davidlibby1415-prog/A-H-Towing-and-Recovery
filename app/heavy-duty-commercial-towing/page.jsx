"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../../components/ServiceLayout";

export default function HeavyDutyCommercialTowingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Heavy Duty & Commercial Towing"
          serviceSubtitle="Oilfield, fleet, and commercial units moved safely out of Pecos, Reeves County, and the West Texas patch."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
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

            <TikTokGallery
              images={[
                "/images/heavy-1.jpg",
                "/images/heavy-2.jpg",
                "/images/heavy-3.jpg",
                "/images/heavy-4.jpg",
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
