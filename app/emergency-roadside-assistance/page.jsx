// app/emergency-roadside-assistance/page.jsx
"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TopMarquee,
} from "../../components/ServiceLayout";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel delivery, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways.",
};

export default function EmergencyRoadsidePage() {
  return (
    <>
      {/* Header first */}
      <SiteHeader />

      {/* Marquee exactly like main page, placed directly under header */}
      <TopMarquee
        text="Pecos, TX (Home Base) • Reeves County • Pecos County • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • TX-18 • TX-302 • Balmorhea • Carlsbad • Coyanosa • Crane • Crane County • Culberson County • Ector County • Fort Davis • Fort Stockton • Grandfalls • Goldsmith • Imperial • I-20 Corridor • Jal • Kermit • Lindsay • Loving County • McCamey • Mentone • Midland County • Monahans • Notrees • Odessa • Oilfield Routes • Orla • Plateau • Pyote • Royalty • Saragosa • Toyah • Toyahvale • Upton County • Van Horn • Verhalen • Ward County • Wickett • Wink • Winkler County"
      />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO (video only behind, company banner under nav, roadside card ~2in lower) */}
        <BrandHero
          heroVideoSrc="/videos/fuel.mp4"
          poster="/fallback.jpg"
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways."
          overlayOpacity={0}
          heroMinVH={72}
          bannerTopMarginPx={12}
          cardCenterOffsetPx={160} // ~ 2 inches on most laptops; adjust +/- 10 if needed
          showMarquee={false}
        />

        {/* ======== SERVICE DESCRIPTION + SAFETY TIPS (no TikTok grid) ======== */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Description (with shaded text box) */}
            <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-5 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                What we can do on the spot
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Not every problem needs a full tow. When a breakdown blindsides
                you, we’ll meet you quickly and handle the small stuff that keeps
                you from rolling: fuel delivery, jumpstarts, lockouts, and a calm
                plan if a tow is the safer call.
              </p>

              <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                <li>• Fuel delivery (gas or diesel)</li>
                <li>• Jumpstarts and quick roadside battery checks</li>
                <li>• Lockouts (fast entry with no damage)</li>
                <li>• If needed, quick move to a safer shoulder or lot</li>
              </ul>

              <p className="mt-3 text-sm md:text-base font-semibold">
                Tell us your vehicle, where you are (GPS pin helps), and what
                happened. We’ll advise if roadside is enough or if a tow to a shop
                or safer location makes more sense.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <PhoneCTA />
                <TextCTA />
              </div>
            </div>

            {/* RIGHT: Safety Tips (with shaded text box) */}
            <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-5 text-amber-50">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                Safety Tips Before We Arrive
              </h3>

              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold">
                <li>
                  <strong>
                    Make sure your vehicle is in a safe location away from traffic
                    or evacuate the vehicle to a safe distance/place nearby.
                  </strong>
                </li>
                <li>Turn on hazard flashers if it’s safe to do so.</li>
                <li>
                  Stay inside the vehicle with your seatbelt on, or stand well away
                  from traffic if the shoulder is too tight.
                </li>
                <li>Keep your phone handy so we can reach you.</li>
                <li>
                  If law enforcement is on scene, let them know A&amp;H Towing &amp;
                  Recovery is en route.
                </li>
              </ol>

              <p className="mt-3 text-sm md:text-base font-semibold">
                Your safety comes first. If anything changes about your location or
                your vehicle’s condition, call or text us right away with an
                update.
              </p>
            </div>
          </div>
        </section>

        {/* Optional CTA row under text blocks */}
        <section className="py-6 bg-red-800/90">
          <div className="container max-w-7xl flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
