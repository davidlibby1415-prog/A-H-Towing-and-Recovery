// app/emergency-roadside-assistance/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways.",
};

export default function EmergencyRoadsideAssistancePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* SINGLE HERO: video + one text card */}
        <BrandHero
          heroVideoSrc="/fuel.mp4" // <- uses public/fuel.mp4
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways."
          overlayOpacity={0.6}
        />

        {/* MAIN CONTENT */}
        <section className="py-10 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-8 items-start">
            {/* LEFT: When you’re stuck... */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                When you’re stuck on the side of the road, we come to you.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Whether it&apos;s{" "}
                <span className="font-black">
                  a dead battery, empty tank, flat tire, or locked doors
                </span>
                , our goal is to get you out of danger and back on your way as
                safely as possible.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Jumpstarts for cars, pickups, and light commercial units</li>
                <li>• Fuel delivery when that last bar on the gauge runs out</li>
                <li>• Tire changes and assistance with damaged wheels</li>
                <li>• Lockouts — keys locked in or lost on-scene</li>
                <li>
                  • Short-distance towing if the vehicle can&apos;t be made
                  road-ready
                </li>
              </ul>

              <p className="text-sm md:text-base font-semibold">
                We work the same highways you do —{" "}
                <span className="font-black">
                  I-20, farm-to-market roads, and lease roads around Pecos and
                  Reeves County
                </span>
                . If you&apos;re not sure we cover your area, call or text and
                we&apos;ll tell you straight.
              </p>
            </div>

            {/* RIGHT: What to tell dispatch */}
            <div className="space-y-4 text-amber-50">
              <h3 className="text-xl md:text-2xl font-black">
                What to tell dispatch when you call or text
              </h3>
              <p className="text-sm md:text-base font-semibold">
                You don&apos;t have to be an expert. Just give us the basics so
                we can send the{" "}
                <span className="font-black">right truck and gear</span> and
                find you fast.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>
                  • <span className="font-black">Location:</span> GPS pin, mile
                  marker, nearest exit, or landmark (rest area, lease road
                  number, etc.).
                </li>
                <li>
                  • <span className="font-black">What happened:</span> won&apos;t
                  start, flat tire, out of fuel, locked out, or in a ditch.
                </li>
                <li>
                  • <span className="font-black">Vehicle details:</span> year /
                  make / model and whether it&apos;s a dually, loaded, or
                  pulling a trailer.
                </li>
                <li>
                  • <span className="font-black">People on-scene:</span> let us
                  know if there are kids, elders, pets, or mobility issues.
                </li>
                <li>
                  • <span className="font-black">Special hazards:</span> narrow
                  shoulder, blind hill/curve, heavy traffic, or bad weather.
                </li>
              </ul>

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold mt-4">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  While you wait on us
                </h4>
                <ul className="space-y-1">
                  <li>• Keep doors locked and seatbelts on if traffic is heavy.</li>
                  <li>
                    • If you step out, do it on the{" "}
                    <span className="font-black">non-traffic side</span> only.
                  </li>
                  <li>
                    • Turn on hazard flashers and, if safe, set triangles or
                    flares well behind the vehicle.
                  </li>
                  <li>
                    • Gather keys, wallets, medications, and anything important
                    you don&apos;t want left behind.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

