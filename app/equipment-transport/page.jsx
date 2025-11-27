// FILE: app/equipment-transport/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  WeAcceptBar,
} from "../components/ServiceLayout";

export const metadata = {
  title: "Equipment Transport | A & H Towing & Recovery",
  description:
    "Large equipment, tool trailers, and heavy machinery moved safely around the West Texas region.",
};

export default function EquipmentTransportPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Equipment Transport"
          serviceSubtitle="Large equipment, tool trailers, and heavy machinery moved safely around the West Texas region."
          heroVideoSrc="/Videos/truckunit.mp4"
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-6 text-amber-50">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black">
                  Moving more than just broken vehicles.
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  From large skid steers and tool trailers to heavy machinery,
                  A&amp;H can move your gear between yards, job sites, and lease
                  roads with the same care we use on your trucks.
                </p>
                <p className="text-sm md:text-base font-semibold">
                  We understand oilfield schedules, gate codes, and night moves.
                  Tell us what you&apos;re hauling, where it&apos;s going, and
                  when it has to be there — we&apos;ll handle the rest.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  What we can help you move
                </h3>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• Skid steers, manlifts, and similar equipment</li>
                  <li>• Tool trailers and small job trailers</li>
                  <li>• Oilfield support equipment and yard moves</li>
                  <li>• Gear that needs to move between lease roads and town</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <p>
                  Call dispatch or tap the online request button to send us your
                  GPS and job details. We&apos;ll confirm the plan and roll a
                  truck.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <PhoneCTA />
                <TextCTA />
              </div>
            </div>

            {/* RIGHT: simple info block for planners/dispatchers */}
            <div className="space-y-6 text-amber-50">
              <div className="rounded-2xl border border-yellow-400/70 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h3 className="text-xl md:text-2xl font-black mb-2 text-amber-300">
                  Helpful info when you call
                </h3>
                <ul className="space-y-1">
                  <li>• What equipment we&apos;re moving</li>
                  <li>• Does it roll / steer / brake?</li>
                  <li>• Approximate weight (if known)</li>
                  <li>• Pickup and drop-off locations</li>
                  <li>• Any time windows, gate codes, or site rules</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-yellow-400/70 bg-black/60 p-4 text-xs md:text-sm font-semibold text-amber-100/95">
                <p>
                  We know the West Texas region — highways, lease roads, and the
                  yards in between. If you&apos;re not sure how to describe the
                  location, send a GPS pin and a contact number and we&apos;ll
                  coordinate from there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WeAcceptBar />
      </main>

      <SiteFooter />
    </>
  );
}
