// FILE: app/flatbed-rollback-services/page.jsx

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
  title: "Flatbed Rollback & Equipment Transport | A & H Towing & Recovery",
  description:
    "Safe, damage-free flatbed rollback towing and equipment transport across Pecos, Reeves County, and the West Texas highways.",
};

export default function FlatbedRollbackPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO: uses storage.mp4 as the background video */}
        <BrandHero
          serviceTitle="Flatbed Rollback & Equipment Transport"
          serviceSubtitle="Light- and medium-duty vehicles, equipment, and trailers — loaded, secured, and delivered with care."
          heroVideoSrc="/Videos/storage.mp4" // put storage.mp4 in /public/Videos
        />

        {/* MAIN CONTENT – follow heavy-duty tow pattern */}
        <section className="py-10 bg-neutral-950 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-8 items-start">
            {/* LEFT: Text + skill boxes */}
            <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/55 backdrop-blur-sm p-6 md:p-7 shadow-2xl shadow-black/70">
              <h2 className="text-2xl md:text-3xl font-black text-amber-50 drop-shadow">
                Rollback service that treats your load like it’s ours.
              </h2>

              <p className="mt-3 text-sm md:text-base font-semibold text-amber-50/90">
                From equipment and trailers to work trucks and everyday drivers,
                our flatbeds are set up to load low, secure tight, and unload
                clean—no drama, no shortcuts.
              </p>

              <ul className="mt-4 space-y-2 text-sm md:text-base font-semibold text-amber-50/90">
                <li>• Flatbed rollback for cars, pickups, and work trucks</li>
                <li>• Equipment transport for skids, manlifts, forklifts, and more</li>
                <li>• Yard-to-yard, shop-to-location, and accident pickups</li>
                <li>• Professional tie-down and loading procedures</li>
              </ul>

              <p className="mt-4 text-sm md:text-base font-semibold text-amber-50/90">
                Call or text dispatch with what you need moved, where it&apos;s
                at, and where it&apos;s going. We&apos;ll give you a straight
                answer on timing and pricing.
              </p>

              {/* Skill / steel boxes */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                  Offload on the house calls
                </div>
                <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                  Double-stacked trailer moves
                </div>
                <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                  Equipment from accident scenes
                </div>
                <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                  Oilfield &amp; ranch road access
                </div>
              </div>
            </div>

            {/* RIGHT: TikTok grid – your 3 equipment transport clips */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {/* 1. Tow Calls: Offload on the House */}
              <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70 md:col-span-1 xl:col-span-1">
                <TikTokEmbed
                  videoId="7419451829223836959"
                  caption="Tow Calls: Offload on the House"
                />
              </div>

              {/* 2. Equipment Transport: Double Stacking Trailers */}
              <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70 md:col-span-1 xl:col-span-1">
                <TikTokEmbed
                  videoId="7348837007935769902"
                  caption="Equipment Transport: Double Stacking Trailers"
                />
              </div>

              {/* 3. Equipment Transport: Pickup from Accident */}
              <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70 md:col-span-2 xl:col-span-1">
                <TikTokEmbed
                  videoId="7275994610713988398"
                  caption="Equipment Transport: Pickup from Accident"
                />
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
