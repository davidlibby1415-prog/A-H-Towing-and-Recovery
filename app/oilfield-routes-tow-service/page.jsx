"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
  TimeTempBar,
} from "../components/ServiceLayout";

export default function OilfieldRoutesPage() {
  return (
    <>
      <SiteHeader />
      <TimeTempBar />
      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Oilfield Routes Tow Service"
          serviceSubtitle="Lease roads, caliche, mud, sand, and dark two-lanes — we know the routes between Pecos, Orla, Mentone, and beyond."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                The patch is rough. We’re built for it.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Crews get stuck. Trucks break. GPS pins are in the middle of
                nowhere. That’s oilfield life — and we work in it every day.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Tow and recovery on lease roads</li>
                <li>• Sand, mud, and soft-shoulder winch-outs</li>
                <li>• Night runs and odd-hour calls</li>
                <li>• Communication with company men and safety</li>
              </ul>
              <p className="text-sm md:text-base font-semibold">
                Drop a pin, send a gate description, or give us mile markers.
                We’ll talk you through what we need and get a truck headed your
                way.
              </p>
            </div>

            <TikTokGallery
              images={[
                "/images/oilfield-1.jpg",
                "/images/oilfield-2.jpg",
                "/images/oilfield-3.jpg",
                "/images/oilfield-4.jpg",
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
