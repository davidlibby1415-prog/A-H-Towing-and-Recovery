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
    "Jumps, tire changes, lockouts, fuel deliveries, and quick roadside checks anywhere along your West Texas route.",
};

/* ========= Optional TikTok section helper ========= */

function TikTokCard({ id, caption }) {
  return (
    <div className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]">
      <div className="px-3 pt-2 pb-1">
        <h4 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
          {caption}
        </h4>
      </div>
      <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2">
        <TikTokEmbed
          videoId={id}
          caption={caption}
          className="w-full max-w-[420px]"
        />
      </div>
    </div>
  );
}

export default function EmergencyRoadsideAssistancePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO – now with video */}
        <BrandHero
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Jumps, tire changes, lockouts, fuel, and quick roadside checks anywhere along your West Texas route."
          heroVideoSrc="/Videos/emergency-roadside.mp4" // update path if your file is named differently
        />

        {/* MAIN TEXT BOX UNDER HERO */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl">
            <div className="rounded-3xl border border-yellow-400/80 bg-black/70 p-6 md:p-8 text-amber-50 space-y-6">
              {/* What we handle */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black text-amber-300">
                  Stuck on the shoulder? We’ll help you get moving again.
                </h2>
                <p className="text-sm md:text-base font-semibold text-amber-50">
                  Not every call needs a full tow. Sometimes you just need{" "}
                  <span className="font-black">
                    a tire changed, a jump, fuel, or a quick look
                  </span>{" "}
                  to decide the next step. Our roadside units are set up to help
                  you make that call without being stranded in traffic.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-amber-50">
                  <li>• Emergency tire changes (tractor & passenger, case by case)</li>
                  <li>• Jump starts</li>
                  <li>• Fuel delivery (where permitted)</li>
                  <li>• Lockouts</li>
                  <li>• Quick visual checks to decide if you need a tow</li>
                </ul>
              </div>

              {/* Safety + what to have ready */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black text-amber-300">
                  Safety first — then the vehicle.
                </h3>
                <p className="text-sm md:text-base font-semibold text-amber-50">
                  We&apos;re thinking about{" "}
                  <span className="font-black">
                    you, your family, and other drivers
                  </span>{" "}
                  the whole time we&apos;re on scene. Simple steps before we
                  arrive make everyone safer.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-amber-50">
                  <li>
                    • Move as far off the live lane as you safely can — shoulder,
                    ramp, or a wide approach.
                  </li>
                  <li>
                    • Turn on your hazard flashers and, if you have them, set
                    out triangles or flares away from the vehicle.
                  </li>
                  <li>
                    • If traffic is heavy, stay inside the vehicle with seatbelts
                    on until we arrive.
                  </li>
                  <li>
                    • Only exit on the side away from traffic, never into the lane.
                  </li>
                </ul>
              </div>

              {/* How to contact / GPS line (bright text) */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black text-amber-300">
                  What helps us find you faster
                </h3>
                <p className="text-sm md:text-base font-semibold text-amber-50">
                  Call dispatch or tap the text button to{" "}
                  <span className="font-black">
                    send us your GPS location and details
                  </span>
                  . We&apos;ll confirm the call and roll a truck your way.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-amber-50">
                  <li>• Year / make / model of the vehicle</li>
                  <li>• Tractor / trailer, straight truck, or passenger vehicle</li>
                  <li>• What&apos;s wrong: flat, won&apos;t start, out of fuel, etc.</li>
                  <li>• GPS pin, mile marker, or the last exit you passed</li>
                  <li>• Where you want to go if a tow is needed (yard, shop, home)</li>
                </ul>
              </div>

              {/* CTAs in the same bright card */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <PhoneCTA />
                  <TextCTA />
                </div>
                <p className="text-[11px] text-amber-50">
                  If you&apos;re calling or texting for a family member or
                  driver, you can share{" "}
                  <span className="font-black">
                    their GPS pin, phone number, and any mobility or safety
                    concerns
                  </span>{" "}
                  so we know how to approach the scene.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TIKTOK CLIPS – EMERGENCY ROADSIDE & ACCIDENT AWARENESS */}
        <section className="py-10 bg-neutral-950 border-t border-black/60">
          <div className="container max-w-7xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-black text-amber-300 text-center">
              Real roadside work — what it looks like out here
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1. Roadside Call: Changing Tractor Tires */}
              <TikTokCard
                id="7406160390414978334"
                caption="Roadside Call: Changing Tractor Tires"
              />

              {/* 2. Emergency Roadside: Tire Change (same clip, different title) */}
              <TikTokCard
                id="7406160390414978334"
                caption="Emergency Roadside: Tire Change"
              />

              {/* 3. Accident: Please Don’t Drink and Drive */}
              <TikTokCard
                id="7215414816326880554"
                caption="Accident: Please Don’t Drink and Drive"
              />
            </div>

            <p className="text-sm md:text-base text-neutral-200 text-center max-w-3xl mx-auto">
              These clips are a small window into what we see on West Texas
              roads — from routine roadside work to{" "}
              <span className="font-semibold">
                crashes that could have been avoided
              </span>
              . If you&apos;re stuck, call or text early so we can help before
              it becomes something worse.
            </p>
          </div>
        </section>

        {/* PAYMENT BAR */}
        <WeAcceptBar />
      </main>

      <SiteFooter />
    </>
  );
}
