// FILE: app/emergency-roadside-assistance/page.jsx

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
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Jumps, tire changes, fuel delivery, lockouts, and quick roadside checks anywhere along your West Texas route.",
};

/* ========= Small TikTok section for this page ========= */

function RoadsideTikTokSection() {
  const videos = [
    {
      id: "7406160390414978334",
      caption: "Roadside Call: Changing Tractor Tires",
    },
    {
      id: "7406160390414978334",
      caption: "Emergency Roadside: Tire Change",
    },
    {
      id: "7215414816326880554",
      caption: "Accident: Please Don’t Drink and Drive",
    },
  ];

  return (
    <section className="py-10 bg-neutral-950 border-t border-black/60">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-yellow-300">
            Real West Texas Roadside Calls
          </h2>
          <p className="mt-2 text-sm md:text-base text-amber-50 max-w-2xl">
            A few quick clips from the road — tractor tires, emergency roadside work,
            and the kind of nights that remind us why{" "}
            <span className="font-bold">
              “don’t drink and drive”
            </span>{" "}
            is more than a slogan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.caption}
              className="rounded-[28px] p-[6px] bg-black/90 border border-yellow-500/60 shadow-[0_10px_26px_rgba(0,0,0,0.9)] flex flex-col"
            >
              <div className="px-3 pt-2 pb-1">
                <h3 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
                  {video.caption}
                </h3>
              </div>
              <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2 flex-1">
                <TikTokEmbed
                  videoId={video.id}
                  caption={video.caption}
                  className="w-full max-w-[420px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== Page ====================== */

export default function EmergencyRoadsideAssistancePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO – uses Fuel hero video */}
        <BrandHero
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Jumps, tire changes, fuel delivery, lockouts, and quick roadside checks anywhere along your West Texas route."
          heroVideoSrc="/Videos/Fuel.mp4"
        />

        {/* MAIN TEXT IN A SINGLE BOX */}
        <section className="py-10 bg-neutral-950 border-y border-black/60">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="rounded-3xl border border-yellow-500/60 bg-black/85 p-6 md:p-8 text-amber-50 space-y-8">
              {/* Intro / safety focus */}
              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-black text-yellow-300">
                  Stuck on the shoulder? We’ll come to you.
                </h1>
                <p className="text-sm md:text-base">
                  Not every problem needs a full tow. Sometimes you just need{" "}
                  <span className="font-bold">
                    a jump, a tire change, fuel, or a quick roadside check
                  </span>{" "}
                  to get rolling again. Our goal is simple:{" "}
                  <span className="font-bold">
                    keep you safe, get you visible, and either fix it on-scene or
                    tow you somewhere better.
                  </span>
                </p>
              </div>

              {/* What we handle roadside */}
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-black text-yellow-300">
                  What we can handle on the roadside
                </h2>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>
                    • <span className="font-bold">Battery jumps</span> on cars, pickups, and some commercial units.
                  </li>
                  <li>
                    • <span className="font-bold">Tire changes</span> and help with flats where it’s safe to work.
                  </li>
                  <li>
                    • <span className="font-bold">Lockouts</span> when keys are stuck inside.
                  </li>
                  <li>
                    • <span className="font-bold">Fuel delivery</span> to get you off the shoulder and to a stop.
                  </li>
                  <li>
                    • Quick visual checks to help you decide if it’s safe to limp
                    to a shop or if we need to tow.
                  </li>
                </ul>
              </div>

              {/* Info we need when you call/text */}
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-black text-yellow-300">
                  What helps us find you faster
                </h2>
                <p className="text-sm md:text-base">
                  You don’t have to know every detail, but whatever you can tell
                  us helps us{" "}
                  <span className="font-bold">
                    pick the right truck, bring the right tools, and spot you on
                    the shoulder.
                  </span>
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>• Year / make / model of your vehicle</li>
                  <li>• What’s wrong (flat, no start, out of fuel, locked out, etc.)</li>
                  <li>• If you’re pulling a trailer or loaded with tools/cargo</li>
                  <li>• GPS pin, closest mile marker, exit, or landmark</li>
                  <li>• Where you’d like to go if we can’t fix it on-scene</li>
                </ul>
              </div>

              {/* Family / elder-friendly tone */}
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-black text-yellow-300">
                  Calling for a family member? We’ve got them.
                </h2>
                <p className="text-sm md:text-base">
                  If you’re calling for a parent, grandparent, or someone who’s
                  not comfortable on the side of the road, let us know. We’ll{" "}
                  <span className="font-bold">
                    speak slowly, explain what we’re doing, and treat them the way
                    you’d want them treated.
                  </span>
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>• Tell us if they have mobility or medical issues.</li>
                  <li>
                    • Ask them to keep their phone nearby so we can call when
                    we’re close.
                  </li>
                  <li>
                    • If you’re not on-scene, stay available so we can update you.
                  </li>
                </ul>
              </div>

              {/* While you wait box – make sure text is bright white */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/90 p-4 md:p-5">
                <h2 className="text-lg md:text-xl font-black text-yellow-300 mb-2">
                  While you’re waiting on us
                </h2>
                <ul className="space-y-1 text-sm md:text-base text-amber-50">
                  <li>• Keep your hazard lights on and doors locked.</li>
                  <li>• Stay inside with seatbelts on if traffic is heavy.</li>
                  <li>
                    • Grab keys, wallet/purse, medications, and valuables in case
                    the vehicle has to be towed.
                  </li>
                  <li>
                    • If kids are with you, let them know a tow truck is coming to
                    help, not to scare them.
                  </li>
                </ul>
              </div>

              {/* Bright white text for this line, per your note */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/90 p-4 md:p-5 text-sm md:text-base text-amber-50">
                <p>
                  <span className="font-bold">
                    Call dispatch or tap the text button to send us your GPS
                    location and details.
                  </span>{" "}
                  We&apos;ll confirm the call and roll a truck your way.
                </p>
              </div>

              {/* Buttons at bottom of the text box */}
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <PhoneCTA />
                <TextCTA />
              </div>
            </div>
          </div>
        </section>

        {/* TikTok clips section */}
        <RoadsideTikTokSection />
      </main>

      <SiteFooter />
    </>
  );
}
