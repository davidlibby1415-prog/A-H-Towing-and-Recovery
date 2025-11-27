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
        {/* HERO – glass style with truckunit.mp4 */}
        <BrandHero
          serviceTitle="Equipment Transport"
          serviceSubtitle="Large equipment, tool trailers, and heavy machinery moved safely around the West Texas region."
          heroVideoSrc="/Videos/truckunit.mp4"
        />

        {/* MAIN CONTENT */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-6 text-amber-50">
              {/* Intro */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black">
                  Not just “cars on a bed”—we move your equipment, too.
                </h2>
                <p className="text-sm md:text-base font-semibold text-amber-100">
                  When you need iron moved, timing and communication matter
                  just as much as the truck. We move{" "}
                  <span className="font-black">
                    large equipment, tool trailers, and heavy machinery
                  </span>{" "}
                  across the West Texas region with the same care we put into
                  every tow.
                </p>
              </div>

              {/* What we move */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  Equipment and loads we commonly move
                </h3>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• Tool and welding trailers</li>
                  <li>• Skid steers and compact loaders</li>
                  <li>• Light-to-heavy construction equipment</li>
                  <li>• Generators, compressors, and pumps</li>
                  <li>• Palletized or crated machinery (within weight limits)</li>
                </ul>
              </div>

              {/* The paragraph you flagged – brighter text & stronger wording */}
              <div className="space-y-3">
                <p className="text-sm md:text-base font-semibold text-amber-100">
                  From skid steers and tool trailers to heavy machinery, A&amp;H
                  can move your gear between yards, job sites, and lease roads
                  with the same care we use on your trucks.
                </p>
                <p className="text-sm md:text-base font-semibold text-amber-100">
                  We understand oilfield schedules, gate codes, and night moves.
                  Tell us what you&apos;re hauling, where it&apos;s going, and
                  when it has to be there — we&apos;ll handle the rest.
                </p>
              </div>

              {/* How to book – brighter text */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  How to get a move on the books
                </h3>
                <p className="text-sm md:text-base font-semibold text-amber-100">
                  Call dispatch or tap the online request button to send us your
                  GPS and job details. We&apos;ll confirm and roll a truck.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• Pickup and drop-off locations</li>
                  <li>• Type of equipment and approximate weight</li>
                  <li>• Any special access notes, gate codes, or time windows</li>
                </ul>
              </div>

              {/* CTAs inline on page */}
              <div className="flex flex-wrap gap-3">
                <PhoneCTA />
                <TextCTA />
              </div>

              {/* Small reassurance box */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold text-amber-100">
                <p>
                  You don&apos;t have to babysit the move.{" "}
                  <span className="font-black">
                    We communicate, send location updates when needed, and treat
                    your equipment like it&apos;s our own.
                  </span>
                </p>
              </div>
            </div>

            {/* RIGHT: Visual block / placeholder */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-neutral-800 bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.9)] aspect-[16/9] flex items-center justify-center text-center px-6">
                <p className="text-sm md:text-base font-semibold text-amber-50">
                  Flatbeds and rollback units staged for{" "}
                  <span className="font-black">
                    yard-to-yard moves, job-site transfers, and lease road
                    equipment transport
                  </span>{" "}
                  across the West Texas region.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold text-amber-100">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  Before we roll out
                </h4>
                <ul className="space-y-1">
                  <li>• We confirm pickup and drop-off details with you.</li>
                  <li>• We match the right truck and operator to the job.</li>
                  <li>• We plan around traffic, weather, and road conditions.</li>
                  <li>
                    • We keep an eye on safety so your people and equipment stay
                    protected.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTAs under the grid */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <WeAcceptBar />
      <SiteFooter />
    </>
  );
}
