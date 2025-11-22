"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  ScrollToMainFormCTA,   // precise red CTA
  TopMarquee,
  AnimBorder,
  SteelPanel,
} from "../../components/ServiceLayout";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel delivery, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways.",
};

export default function EmergencyRoadsidePage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          heroVideoSrc="/Videos/fuel.mp4"   // CAPITAL V (critical path fix)
          poster="/fallback.jpg"
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways."
          cardCenterOffsetPx={8}
          overlayOpacity={0.25}
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <AnimBorder>
              <SteelPanel className="bg-black/70 text-white">
                <h2 className="text-2xl md:text-3xl font-black mb-2">What we can do on the spot</h2>
                <p className="text-sm md:text-base font-semibold">
                  Not every problem needs a full tow. When a breakdown blindsides
                  you, we’ll meet you quickly and handle the small stuff that keeps
                  you rolling: fuel delivery, jumpstarts, lockouts, tire changes,
                  and a calm plan if a tow is the safer call.
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                  <li>• Fuel delivery (gas or diesel)</li>
                  <li>• Jumpstarts and quick roadside battery checks</li>
                  <li>• Lockouts (fast entry with no damage)</li>
                  <li>• Tire changes (spare install / roadside)</li>
                  <li>• If needed, quick move to a safer shoulder or lot</li>
                  <li>• Provide safe transportation to town, hotel, or a meeting point</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <PhoneCTA />
                  <ScrollToMainFormCTA />
                </div>
              </SteelPanel>
            </AnimBorder>

            <AnimBorder>
              <SteelPanel className="bg-black/70 text-white">
                <h3 className="text-2xl md:text-3xl font-black mb-2">Safety Tips Before We Arrive</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold">
                  <li><strong>Get to a safe spot away from live traffic, or evacuate to a safe place nearby.</strong></li>
                  <li>Turn on hazard flashers if it’s safe.</li>
                  <li>Stay belted inside, or stand well away from traffic.</li>
                  <li>Keep your phone handy so we can reach you.</li>
                  <li>If law enforcement is on scene, let them know A&amp;H is en route.</li>
                </ol>
                <p className="mt-3 text-sm md:text-base font-semibold">
                  Your safety comes first. If anything changes, call or text us an update.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <PhoneCTA />
                  <ScrollToMainFormCTA />
                </div>
              </SteelPanel>
            </AnimBorder>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
