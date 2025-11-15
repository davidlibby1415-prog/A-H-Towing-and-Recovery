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
  title: "Accident Removal | A & H Towing & Recovery",
  description:
    "Professional, patient accident-scene towing and cleanup across Pecos, Reeves County, and the West Texas highways.",
};

export default function AccidentRemovalPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Accident Removal"
          serviceSubtitle="Professional, patient recovery after a wreck — with care for your vehicle, your family, and the scene."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                After the crash, we help you breathe again.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Wrecks are stressful. We slow it down, coordinate with officers,
                and handle your vehicle like it was our own.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Accident-scene towing and cleanup</li>
                <li>• Coordination with law enforcement</li>
                <li>• Transport to body shops, yards, or your home</li>
                <li>• Respectful communication with you and your family</li>
              </ul>
              <p className="text-sm md:text-base font-semibold">
                If you’re safe and able, call us once law enforcement is on
                scene. We’ll explain what happens next and where your vehicle
                will go.
              </p>
            </div>

            {/* RIGHT: TikTok grid / visuals */}
            <div className="rounded-2xl border-2 border-yellow-400/90 bg-black/80 p-4 shadow-[0_0_25px_rgba(251,191,36,0.6)]">
              <div className="mb-3 flex justify-between items-center">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-yellow-400 text-black text-[11px] font-black uppercase tracking-wide">
                  <span className="text-xs">🎥</span>
                  <span>Real Accident Removal</span>
                </div>
                <a
                  className="text-[10px] underline text-amber-100 hover:text-amber-200"
                  href="https://www.tiktok.com/@285302ditchking?refer=embed"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on TikTok
                </a>
              </div>

              <p className="text-[11px] md:text-xs text-amber-100/80 mb-3">
                Real recoveries from the 285 / 302 “thunderdome” — flipped
                18-wheelers, locomotives, and oilfield wrecks handled with
                professionalism and patience.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <TikTokEmbed
                  videoId="6908073338308939014"
                  caption="Deploy Airbags: Flipped 18 Wheeler"
                />
                <TikTokEmbed
                  videoId="7230219035911327022"
                  caption="Team Effort: Locomotive Accident"
                />
                <TikTokEmbed
                  videoId="7396334944261262622"
                  caption="Highway Closure: Oilfield Accident"
                />
              </div>
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
