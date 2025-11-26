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

// TODO: Update this to your actual TikTok profile URL once confirmed.
const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@YOUR_TIKTOK_HANDLE_HERE";

export const metadata = {
  title: "Equipment Transport | A & H Towing & Recovery",
  description:
    "Large equipment, tool trailers, and machinery moved safely around West Texas.",
};

export default function EquipmentTransportPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO – clear/glass BrandHero style with truckunit.mp4 */}
        <BrandHero
          serviceTitle="Equipment Transport"
          serviceSubtitle="Large equipment, tool trailers, and machinery moved safely around West Texas."
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
                We handle large equipment, tool trailers, and machinery that are
                too heavy or awkward for a pickup alone. We load low, secure
                correctly, and unload clean at yards, shops, and job sites
                across West Texas.
              </p>

              <ul className="mt-4 space-y-2 text-sm md:text-base font-semibold text-amber-50/90">
                <li>• Tool trailers, compressors, welders, and generators</li>
                <li>• Heavy machinery and shop equipment</li>
                <li>• Yard-to-yard and shop-to-location moves</li>
                <li>• Straight communication on timing and price</li>
              </ul>
            </div>

            {/* CALL / TEXT BUTTONS */}
            <div className="flex flex-wrap gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>

            {/* TIKTOK – Follow CTA (top of grid) */}
            <div className="flex justify-center">
              <a
                href={TIKTOK_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/80 bg-emerald-400/90 px-5 py-2 text-xs md:text-sm font-black uppercase tracking-[0.18em] text-black shadow-lg shadow-emerald-500/50 hover:bg-emerald-300 transition-transform duration-200 hover:-translate-y-0.5 animate-pulse"
              >
                <span className="text-lg">🎵</span>
                <span>Follow Us On TikTok</span>
              </a>
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

            {/* TIKTOK – Follow CTA (bottom of grid) */}
            <div className="flex justify-center">
              <a
                href={TIKTOK_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/80 bg-emerald-400/90 px-5 py-2 text-xs md:text-sm font-black uppercase tracking-[0.18em] text-black shadow-lg shadow-emerald-500/50 hover:bg-emerald-300 transition-transform duration-200 hover:-translate-y-0.5 animate-pulse"
              >
                <span className="text-lg">🎵</span>
                <span>Follow Us On TikTok</span>
              </a>
            </div>
          </div>
        </section>

        {/* "We accept" payment bar – mirror main page behavior */}
        <section className="border-t border-neutral-800 bg-black/95 py-6">
          <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-amber-50/80">
              We Accept
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 text-[11px] md:text-xs font-semibold text-amber-50/90">
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                Visa
              </span>
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                Mastercard
              </span>
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                American Express
              </span>
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                Discover
              </span>
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                Debit Cards
              </span>
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                Cash
              </span>
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                Zelle
              </span>
              <span className="rounded-full border border-amber-400/60 bg-black/70 px-3 py-1">
                Cash App
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

