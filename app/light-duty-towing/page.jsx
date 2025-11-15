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

export default function LightDutyTowingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Light Duty Towing"
          serviceSubtitle="Cars, SUVs, and pickups moved safely around Pecos, Reeves County, and the West Texas highways."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Daily drivers, family vehicles, and work rigs — handled with
                care.
              </h2>

              <p className="text-sm md:text-base font-semibold">
                A breakdown or no-start doesn&apos;t have to wreck your whole
                day. We focus on{" "}
                <span className="font-black">
                  safe loading, clear communication, and clean drop-offs
                </span>{" "}
                so you know what&apos;s happening from hook to unload.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Cars, SUVs, half-ton and light pickups</li>
                <li>• Local tows across Pecos and surrounding communities</li>
                <li>
                  • Long-distance runs along I-20, US-285, TX-17, TX-302
                </li>
                <li>
                  • Driveable and non-driveable units (flat tires, no-starts,
                  etc.)
                </li>
              </ul>

              <p className="text-sm md:text-base font-semibold">
                Tell us where you are, what you&apos;re driving, and where you
                want it to go — home, shop, yard, or dealership. We&apos;ll give
                you a straight answer on ETA and pricing.
              </p>

              {/* Small “what to tell dispatch” helper */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  What helps dispatch help you faster
                </h3>
                <ul className="space-y-1">
                  <li>• Year, make, and model of the vehicle</li>
                  <li>• Exact location (GPS pin if possible)</li>
                  <li>• What happened (no-start, flat, accident, etc.)</li>
                  <li>• Where you want the vehicle delivered</li>
                </ul>
                <p className="mt-2">
                  The more info you send up front, the fewer calls we have to
                  make back and forth while you&apos;re already stressed.
                </p>
              </div>
            </div>

            {/* RIGHT: TikTok-style gallery / visuals */}
            <div className="space-y-6">
              <TikTokGallery
                images={[
                  "/images/light-1.jpg",
                  "/images/light-2.jpg",
                  "/images/light-3.jpg",
                  "/images/light-4.jpg",
                ]}
              />

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold text-amber-50">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  Before we arrive
                </h4>
                <ul className="space-y-1">
                  <li>• Turn on your hazards if it&apos;s safe to do so.</li>
                  <li>• Stay inside the vehicle or well away from traffic.</li>
                  <li>
                    • Gather keys, wallets, and anything you need to leave with.
                  </li>
                  <li>
                    • If law enforcement is on scene, let them know A &amp; H
                    Towing is en route.
                  </li>
                </ul>
                <p className="mt-2">
                  Our goal is to get you and your vehicle off the shoulder and
                  into a safer spot as quickly and safely as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom buttons */}
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
