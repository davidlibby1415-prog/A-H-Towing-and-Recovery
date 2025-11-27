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
        {/* HERO – glassy style with truckunit.mp4 */}
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
              {/* What we move */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black">
                  Moving more than just trucks.
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  From{" "}
                  <span className="font-black">
                    large equipment and tool trailers to heavy machinery
                  </span>
                  , A&amp;H can move your gear between yards, job sites, and
                  lease roads with the same care we use on your trucks.
                </p>
                <p className="text-sm md:text-base font-semibold">
                  We understand{" "}
                  <span className="font-black">
                    oilfield schedules, gate codes, and night moves
                  </span>
                  . Tell us what you're hauling, where it's going, and when it
                  has to be there — we&apos;ll handle the rest.
                </p>
              </div>

              {/* Where we run */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  Built for the West Texas region
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  We know the{" "}
                  <span className="font-black">West Texas region</span> —
                  highways, lease roads, and the yards in between. If you&apos;re
                  not sure how to describe the location,{" "}
                  <span className="font-black">
                    send a GPS pin and a contact number
                  </span>{" "}
                  and we&apos;ll coordinate from there.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• Yards, staging lots, and shops</li>
                  <li>• Lease roads and caliche locations</li>
                  <li>• Winch-on / roll-off moves (case by case)</li>
                  <li>• Day, night, and short-notice dispatch</li>
                </ul>
              </div>

              {/* How to book */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  What we need to know before we roll
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  Call dispatch or tap the online request button to{" "}
                  <span className="font-black">
                    send us your GPS and job details
                  </span>
                  . We&apos;ll confirm the plan and roll a truck.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• What we’re moving (type of equipment / trailer)</li>
                  <li>• Approximate weight and any special attachments</li>
                  <li>• Pickup location, gate / access instructions</li>
                  <li>• Drop-off location and preferred timing</li>
                </ul>
              </div>

              {/* “While we’re there” box */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  While we’re on-site
                </h4>
                <ul className="space-y-1">
                  <li>• Make sure paths are clear of loose tools and debris.</li>
                  <li>
                    • Have someone available who can answer quick questions
                    about the load.
                  </li>
                  <li>
                    • If you need multiple moves, let us know so we can plan
                    extra time.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: Simple info + CTAs */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-yellow-400/70 bg-black/80 p-5 text-amber-50 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
                <h3 className="text-xl md:text-2xl font-black mb-2">
                  Ready when your yard or job site is.
                </h3>
                <p className="text-sm md:text-base font-semibold mb-4">
                  Whether you&apos;re staging equipment, shifting tools between
                  locations, or getting machinery off a tight lease road, we can
                  help you{" "}
                  <span className="font-black">
                    keep jobs moving without tying up your own people.
                  </span>
                </p>

                <div className="flex flex-wrap gap-3 mt-3">
                  <PhoneCTA />
                  <TextCTA />
                </div>

                <p className="mt-3 text-[11px] text-neutral-200">
                  If you&apos;re not sure whether we can move a specific piece
                  of equipment, send a picture with your text request and we’ll
                  review options before we roll.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAYMENT BAR */}
        <WeAcceptBar />
      </main>

      <SiteFooter />
    </>
  );
}
