// FILE: app/emergency-roadside-assistance/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  WeAcceptBar,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Jumps, tire changes, fuel delivery, lockouts, and quick roadside checks anywhere along your West Texas route.",
};

export default function EmergencyRoadsideAssistancePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO WITH VIDEO */}
        <BrandHero
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Jumps, tire changes, fuel delivery, lockouts, and quick roadside checks anywhere along your West Texas route."
          heroVideoSrc="/Videos/Fuel.mp4"
        />

        {/* MAIN CONTENT */}
        <section className="py-10 bg-red-900/90 border-y border-black/60">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 items-start">
            {/* LEFT SIDE: TEXT + CTAs */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-yellow-300 mb-2">
                24/7 West Texas Dispatch
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-300">
                Stuck on the shoulder? We&apos;ll come to you.
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white">
                Whether you&apos;re a local family, passing through on the
                interstate, or working the oilfield, our goal is simple: get
                you off the shoulder and taken care of without making a bad day
                worse.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-100">
                Jumps, tire changes, fuel delivery, lockouts, and quick roadside
                checks — if it can be safely handled on-scene, we&apos;ll do it
                there. If not, we&apos;ll tow you somewhere better.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PhoneCTA />
                <TextCTA />
              </div>
            </div>

            {/* RIGHT SIDE: INFO BOX + BULLETS */}
            <div>
              <div className="rounded-2xl border border-yellow-400/80 bg-black/75 px-5 py-5 sm:px-6 sm:py-6 text-sm sm:text-base leading-relaxed text-white shadow-[0_0_24px_rgba(0,0,0,0.7)]">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-300">
                  What we can help with
                </h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Battery jumps and quick checks</li>
                  <li>Tire changes with your spare</li>
                  <li>Fuel delivery (gas &amp; diesel)</li>
                  <li>Vehicle lockouts</li>
                  <li>Quick safety checks on-scene</li>
                </ul>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-yellow-300">
                  What we need to know
                </h3>
                <p className="mt-2 text-white">
                  Call dispatch or tap the text button to send us your GPS
                  location and details. We&apos;ll confirm the call and roll a
                  truck your way.
                </p>

                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Where you are (mile marker, exit, or GPS pin)</li>
                  <li>What you&apos;re driving (car, pickup, SUV, etc.)</li>
                  <li>What seems to be wrong (flat, no-start, out of fuel)</li>
                  <li>How many people are with you</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TIKTOK ROW */}
        <section className="py-10 bg-red-900 border-y border-black/70">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-yellow-300 mb-4">
              Emergency roadside work in action
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Roadside Call: Changing Tractor Tires */}
              <div className="rounded-2xl border border-yellow-500/70 bg-black/80 p-4">
                <h3 className="text-base font-bold text-yellow-200 mb-2">
                  Emergency Roadside — Changing Tractor Tires
                </h3>
                <TikTokEmbed videoId="7406160390414978334" />
              </div>

              {/* Accident: Please Don’t Drink and Drive */}
              <div className="rounded-2xl border border-yellow-500/70 bg-black/80 p-4">
                <h3 className="text-base font-bold text-yellow-200 mb-2">
                  Accident: Please Don&apos;t Drink and Drive
                </h3>
                <TikTokEmbed videoId="7215414816326880554" />
              </div>

              {/* Placeholder for future clip */}
              <div className="rounded-2xl border border-yellow-500/70 bg-black/80 p-4 flex items-center justify-center text-center text-sm text-amber-100">
                More roadside clips coming soon from the West Texas routes.
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
