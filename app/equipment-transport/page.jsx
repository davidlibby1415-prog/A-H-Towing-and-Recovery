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
    "Large equipment, tool trailers, and heavy machinery moved safely across the West Texas region.",
};

export default function EquipmentTransportPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO – uses truckunit.mp4 */}
        <BrandHero
          serviceTitle="Equipment Transport"
          serviceSubtitle="Large equipment, tool trailers, and heavy machinery moved safely across the West Texas region."
          heroVideoSrc="/Videos/truckunit.mp4"
        />

        {/* MAIN CONTENT SECTION */}
        <section className="py-10 bg-red-900/90 border-y border-black/60">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 items-start">
            {/* LEFT: Intro + short copy + CTAs */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-yellow-300 mb-2">
                Equipment Transport • Oilfield Support
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-300">
                Ready when your yard or job site is.
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white">
                Whether you're staging equipment, shifting tools between
                locations, or getting machinery off a tight lease road, we can
                help you keep jobs moving without tying up your own people.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white">
                We work with yards, shops, field supervisors, and dispatchers to
                keep moves simple: clear instructions, steady communication, and
                the same careful loading you'd expect on your own equipment.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PhoneCTA />
                <TextCTA />
              </div>
            </div>

            {/* RIGHT: Main info box with yellow headings + bright white body text */}
            <div>
              <div className="rounded-2xl border border-yellow-400/80 bg-black/75 px-5 py-5 sm:px-6 sm:py-6 text-sm sm:text-base leading-relaxed text-white shadow-[0_0_24px_rgba(0,0,0,0.7)]">
                {/* Moving more than just trucks */}
                <h3 className="text-lg sm:text-xl font-bold text-yellow-300">
                  Moving more than just trucks.
                </h3>
                <p className="mt-2 text-white">
                  From large equipment and tool trailers to heavy machinery,
                  A&amp;H can move your gear between yards, job sites, and lease
                  roads with the same care we use on your trucks.
                </p>
                <p className="mt-2 text-white">
                  We understand oilfield schedules, gate codes, and night moves.
                  Tell us what you're hauling, where it's going, and when it has
                  to be there — we'll handle the rest.
                </p>

                {/* Built for the West Texas region */}
                <h3 className="mt-5 text-lg sm:text-xl font-bold text-yellow-300">
                  Built for the West Texas region
                </h3>
                <p className="mt-2 text-white">
                  We know the West Texas region — highways, lease roads, and the
                  yards in between. If you're not sure how to describe the
                  location, send a GPS pin and a contact number and we'll
                  coordinate from there.
                </p>

                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li className="text-white">
                    Yards, staging lots, and shops
                  </li>
                  <li className="text-white">
                    Lease roads and caliche locations
                  </li>
                  <li className="text-white">
                    Winch-on / roll-off moves (case by case)
                  </li>
                  <li className="text-white">
                    Day, night, and short-notice dispatch
                  </li>
                </ul>

                {/* What we need to know before we roll */}
                <h3 className="mt-5 text-lg sm:text-xl font-bold text-yellow-300">
                  What we need to know before we roll
                </h3>
                <p className="mt-2 text-white">
                  Call dispatch or tap the online request button to send us your
                  GPS and job details. We'll confirm the plan and roll a truck.
                </p>

                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li className="text-white">
                    What we're moving (type of equipment / trailer)
                  </li>
                  <li className="text-white">
                    Approximate weight and any special attachments
                  </li>
                  <li className="text-white">
                    Pickup location, gate / access instructions
                  </li>
                  <li className="text-white">
                    Drop-off location and preferred timing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PAYMENT BAR */}
        <WeAcceptBar />

        <SiteFooter />
      </main>
    </>
  );
}

