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
    "Light equipment, tool trailers, and small machinery moved safely around Pecos, Reeves County, and West Texas.",
};

export default function EquipmentTransportPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Equipment Transport"
          serviceSubtitle="Light equipment, tool trailers, and small machinery moved safely around Pecos, Reeves County, and West Texas."
          heroVideoSrc="/Videos/truckunit.mp4"
        />

        {/* Your existing content sections go here */}
        <section className="py-10 md:py-12 border-b border-neutral-800">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-sm sm:text-base text-neutral-100">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
                Safely Moving Your Equipment Across West Texas
              </h2>
              <p>
                From small skid steers and tool trailers to light machinery,
                A&amp;H can move your gear between yards, job sites, and lease
                roads with the same care we use on your trucks.
              </p>
              <p>
                We understand oilfield schedules, gate codes, and night moves.
                Tell us what you&apos;re hauling, where it&apos;s going, and
                when it has to be there — we&apos;ll handle the rest.
              </p>
            </div>

            <div className="space-y-3 text-sm text-neutral-100">
              <h3 className="text-lg font-semibold text-yellow-300">
                Common moves:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Light equipment between yards or locations</li>
                <li>Tool trailers for crews and contractors</li>
                <li>Small machinery that won&apos;t fit in a pickup bed</li>
                <li>Project moves around Pecos, Reeves County, and beyond</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Shared call + text block */}
        <section className="py-8 bg-neutral-950 border-y border-yellow-500/20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-neutral-100 max-w-md">
              <p className="font-semibold text-yellow-300 mb-1">
                Ready to move your equipment?
              </p>
              <p>
                Call dispatch or tap the online request button to send us your
                GPS and job details. We&apos;ll confirm and roll a truck.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>
          </div>
        </section>

        {/* We accept bar at the very bottom of the content */}
        <WeAcceptBar />
      </main>

      <SiteFooter />
    </>
  );
}
