// app/emergency-roadside-assistance/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../../components/ServiceLayout";

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
        {/* SINGLE hero over your snow/roadside video */}
        <BrandHero
          heroVideoSrc="/videos/emergency-roadside-assistance.mp4" // <-- use your actual video path
          poster="/images/emergency-roadside-assistance-poster.jpg" // or remove if you don't have a poster
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways."
          overlayOpacity={0.45}
          cardCenterOffsetPx={0}
        />

        {/* MAIN CONTENT – no second hero card */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start text-amber-50">
            {/* LEFT: What we can do on-scene */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black">
                When you’re stuck on the side of the road, we come to you.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Our goal is simple:{" "}
                <span className="font-black">
                  get you, your vehicle, and your family out of danger
                </span>{" "}
                and back on your way or safely transported.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Fuel delivery when you run out in the middle of nowhere</li>
                <li>• Jumpstarts for dead batteries and cold mornings</li>
                <li>• Lockouts – careful entry so you’re not breaking glass</li>
                <li>• Tire changes and air for low or flat tires</li>
                <li>• Short-distance tows from breakdown spots to shops or yards</li>
              </ul>

              <p className="text-sm md:text-base font-semibold">
                Late nights, dust storms, ice, or triple-digit heat – we know
                West Texas roads and how fast conditions can go bad.
              </p>
            </div>

            {/* RIGHT: What helps us help you + waiting tips */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  What to tell dispatch when you call or text
                </h3>
                <ul className="space-y-1">
                  <li>• Year / Make / Model of your vehicle</li>
                  <li>• What happened (won’t start, flat, locked out, out of fuel)</li>
                  <li>• Exact location, GPS pin, cross street, or mile marker</li>
                  <li>• If kids, elders, or pets are with you</li>
                  <li>• Where you want to go (home, shop, yard, motel, etc.)</li>
                </ul>
                <p className="mt-2">
                  The more detail you give us,{" "}
                  <span className="font-black">
                    the faster we can pick the right truck, gear, and route.
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  While you wait on us
                </h3>
                <ul className="space-y-1">
                  <li>• Keep doors locked and seatbelts on if traffic is heavy.</li>
                  <li>• Turn on hazard flashers; use triangles/flares if you have them.</li>
                  <li>
                    • Stay away from live lanes – don’t stand between vehicles or on the
                    traffic side of the shoulder.
                  </li>
                  <li>
                    • Gather keys, wallet/purse, medications, and anything you need to
                    take with you.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
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
