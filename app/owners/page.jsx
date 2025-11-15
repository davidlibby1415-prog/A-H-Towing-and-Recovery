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

export default function OwnersPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Meet the Owners"
          serviceSubtitle="Family-owned, Pecos-based towing serving Reeves County and the West Texas oilfield."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                A local family business — not a big-city dispatch.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                A&amp;H Towing &amp; Recovery is rooted in Pecos. We live where
                we work, drive the same roads you do, and raise our kids in the
                same community you call home.
              </p>
              <p className="text-sm md:text-base font-semibold">
                Every tow, winch-out, and roadside call has a name and a story
                behind it. Our goal is simple: get you home safe, treat your
                vehicle with respect, and be the kind of wrecker you don’t mind
                saving in your phone.
              </p>
            </div>

            <TikTokGallery
              images={[
                "/images/owners-1.jpg",
                "/images/owners-2.jpg",
                "/images/owners-3.jpg",
                "/images/owners-4.jpg",
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
