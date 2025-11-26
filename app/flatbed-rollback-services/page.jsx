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

// TikTok profile URL
const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@285302ditchking";

export const metadata = {
  title: "Flatbed Rollback & Equipment Transport | A & H Towing & Recovery",
  description:
    "Safe, damage-free flatbed rollback towing and equipment transport across West Texas highways.",
};

export default function FlatbedRollbackPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO: uses storage.mp4 as the background video */}
        <BrandHero
          serviceTitle="Flatbed Rollback & Equipment Transport"
          serviceSubtitle="Vehicles, equipment, and trailers — loaded, secured, and delivered with care across West Texas."
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
                <li>
                  • Equipment transport for skids, manlifts, forklifts, and more
                </li>
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
                  Professional loading / off-loading
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

            {/* RIGHT: TikTok grid – equipment / rollback clips with follow CTAs */}
            <div className="space-y-4">
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

              {/* TikTok cards – stacked so they don’t overlap, full visual size */}
              <div className="grid grid-cols-1 gap-6 justify-items-center">
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
          </div>

          {/* Bottom CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>

        {/* "We accept" payment bar – match main page pill style */}
        <section className="bg-red-950 py-5">
          <div className="container max-w-7xl flex justify-center">
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-slate-900/95 px-4 py-2 shadow-lg shadow-black/60 border border-black/40">
              <span className="text-xs md:text-sm font-bold text-amber-50 mr-1">
                We accept:
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
                <span>💵</span>
                <span>Cash</span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
                <span>💳</span>
                <span>All Major Credit Cards</span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
                <span>🧾</span>
                <span>EFS Services</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
