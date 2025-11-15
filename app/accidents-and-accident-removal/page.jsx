import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";
import TikTokEmbed from "../components/TikTokEmbed";

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
                If you&apos;re safe and able, call us once law enforcement is
                on scene. We&apos;ll explain what happens next and where your
                vehicle will go.
              </p>
            </div>

            {/* RIGHT: TikTok grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* 1. Deploy Airbags: Flipped 18 Wheeler */}
              <TikTokEmbed
                videoId="6908073338308939014"
                caption="Deploying airbags to recover a flipped 18-wheeler without making the damage worse."
              />

              {/* 2. Team Effort: Locomotive Accident */}
              <TikTokEmbed
                videoId="7230219035911327022"
                caption="Locomotive accident recovery — working with a full team to clear the scene safely."
              />

              {/* 3. The Rotator for an Oversized Accident */}
              <TikTokEmbed
                videoId="7414757668876733726"
                caption="Using the rotator on an oversized accident to lift, swing, and set everything back where it belongs."
              />

              {/* 4. Practicing for Perfection */}
              <TikTokEmbed
                videoId="7501393555433262367"
                caption="Practicing complex lifts so when the real wreck happens, the team is already dialed in."
              />
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

