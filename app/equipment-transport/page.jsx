// FILE: app/equipment-transport/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

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
        {/* HERO – clear/glass BrandHero style with truckunit.mp4 */}
        <BrandHero
          serviceTitle="Equipment Transport"
          serviceSubtitle="Light equipment, tool trailers, and small machinery moved safely around Pecos, Reeves County, and West Texas."
          heroVideoSrc="/Videos/truckunit.mp4" // ensure this lives in /public/Videos
        />

        <section className="py-10 bg-gradient-to-b from-neutral-950 via-red-950/70 to-black border-y border-black/40">
          <div className="container max-w-7xl space-y-8">
            {/* MAIN COPY CARD */}
            <div className="max-w-3xl rounded-3xl bg-black/70 backdrop-blur-sm border border-red-500/70 px-6 py-6 shadow-2xl shadow-black/70">
              <h2 className="text-2xl md:text-3xl font-black text-amber-50 drop-shadow">
                Move your gear without beating it up.
              </h2>

              <p className="mt-3 text-sm md:text-base font-semibold text-amber-50/90">
                We handle small equipment and tool trailers that are too heavy
                or awkward for a pickup alone. We load low, secure correctly,
                and unload clean at yards, shops, and job sites across West
                Texas.
              </p>

              <ul className="mt-4 space-y-2 text-sm md:text-base font-semibold text-amber-50/90">
                <li>• Tool trailers, compressors, welders, and generators</li>
                <li>• Small machinery and shop equipment</li>
                <li>• Yard-to-yard and shop-to-location moves</li>
                <li>• Straight communication on timing and price</li>
              </ul>
            </div>

            {/* CALL / TEXT BUTTONS */}
            <div className="flex flex-wrap gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>

            {/* TIKTOK GRID – Equipment Transport clips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
              {/* 1. Tow Calls: Offload on the House */}
              <div className="w-full max-w-xs rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70">
                <TikTokEmbed
                  videoId="7419451829223836959"
                  caption="Tow Calls: Offload on the House"
                />
              </div>

              {/* 2. Equipment Transport: Double Stacking Trailers */}
              <div className="w-full max-w-xs rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70">
                <TikTokEmbed
                  videoId="7348837007935769902"
                  caption="Equipment Transport: Double Stacking Trailers"
                />
              </div>

              {/* 3. Equipment Transport: Pickup from Accident */}
              <div className="w-full max-w-xs rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70">
                <TikTokEmbed
                  videoId="7275994610713988398"
                  caption="Equipment Transport: Pickup from Accident"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
