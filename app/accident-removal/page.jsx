// FILE: app/accident-removal/page.jsx

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
  title: "Accident Management and Removal | A & H Towing & Recovery",
  description:
    "Professional, patient accident-scene towing and cleanup across Pecos, Reeves County, and the West Texas highways.",
};

export default function AccidentRemovalPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Accident Management and Removal"
          serviceSubtitle="Professional, patient recovery after a wreck — with care for your vehicle, your family, and the scene."
          heroVideoSrc="/Videos/accident.mp4" // make sure accident.mp4 is in /public/Videos
          overlayOpacity={0.5}
        />

        <section className="py-10 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-8 items-start">
            {/* LEFT: Steel text box with shadow background */}
            <div className="relative">
              {/* Shadow plate behind the main box to make it pop */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-black/80 opacity-70 blur-sm"
                aria-hidden="true"
              />

              {/* Main steel box */}
              <div className="relative rounded-3xl border-2 border-emerald-400/90 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 p-6 md:p-7 shadow-2xl shadow-black/70">
                <h2 className="text-2xl md:text-3xl font-black text-amber-50 drop-shadow">
                  After the crash, we help you breathe again.
                </h2>

                <p className="mt-3 text-sm md:text-base font-semibold text-amber-50/90">
                  Wrecks are stressful. We slow it down, coordinate with
                  officers, and handle your vehicle like it was our own.
                </p>

                <ul className="mt-4 space-y-2 text-sm md:text-base font-semibold text-amber-50/90">
                  <li>• Accident-scene towing and cleanup</li>
                  <li>• Coordination with law enforcement</li>
                  <li>• Transport to body shops, yards, or your home</li>
                  <li>• Respectful communication with you and your family</li>
                </ul>

                <p className="mt-4 text-sm md:text-base font-semibold text-amber-50/90">
                  If you&apos;re safe and able, call us once law enforcement is
                  on scene. We&apos;ll explain what happens next and where your
                  vehicle will go.
                </p>

                {/* Steel skill boxes row, modeled after heavy duty tow style */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                    Airbag &amp; recovery systems
                  </div>
                  <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                    Flipped &amp; rolled 18-wheelers
                  </div>
                  <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                    Multi-vehicle accident scenes
                  </div>
                  <div className="rounded-2xl border-2 border-emerald-400/90 bg-slate-950/90 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-black/60">
                    Oilfield &amp; highway response
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: TikTok grid – 2x2 on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Deploy Airbags: Flipped 18 Wheeler */}
              <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70">
                <TikTokEmbed
                  videoId="6908073338308939014"
                  caption="Deploy Airbags: Flipped 18 Wheeler"
                />
              </div>

              {/* 2. Team Effort: Locomotive Accident */}
              <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70">
                <TikTokEmbed
                  videoId="7230219035911327022"
                  caption="Team Effort: Locomotive Accident"
                />
              </div>

              {/* 3. The Rotator for an Oversized Accident */}
              <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70">
                <TikTokEmbed
                  videoId="7414757668876733726"
                  caption="The Rotator for an Oversized Accident"
                />
              </div>

              {/* 4. Practicing for Perfection */}
              <div className="rounded-3xl border-2 border-emerald-400/90 bg-black/85 p-2 shadow-2xl shadow-black/70">
                <TikTokEmbed
                  videoId="7501393555433262367"
                  caption="Practicing for Perfection"
                />
              </div>
            </div>
          </div>

          {/* Bottom buttons */}
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
