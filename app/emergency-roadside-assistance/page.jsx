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
    "Tire changes, jump starts, fuel delivery, and light roadside work across the West Texas region.",
};

export default function EmergencyRoadsideAssistancePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Tire changes, jump starts, fuel delivery, and light roadside work across the West Texas region."
        />

        {/* MAIN COPY */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: text */}
            <div className="space-y-6 text-amber-50">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black">
                  Stuck on the shoulder? We can help.
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  Whether you&apos;re driving a car, pickup, or tractor-trailer,
                  we handle the kind of roadside calls that keep you moving and
                  out of danger.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• Tire changes and wheel swaps</li>
                  <li>• Jump starts and basic electrical checks</li>
                  <li>• Fuel delivery when you&apos;re just short of town</li>
                  <li>• Quick winch assists for stuck vehicles</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  What to tell us when you call
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  The more you can share, the faster we can send the right
                  truck, tools, and people.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• Vehicle type (car, pickup, tractor, trailer, etc.)</li>
                  <li>• What happened (flat tire, dead battery, out of fuel)</li>
                  <li>• Your GPS pin, mile marker, or nearest exit</li>
                  <li>• Any hazards (narrow shoulder, low visibility, traffic)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <p>
                  Call dispatch or tap the text button to send us your GPS
                  location and details. We&apos;ll confirm the call and roll a
                  truck your way.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <PhoneCTA />
                <TextCTA />
              </div>
            </div>

            {/* RIGHT: TikTok clips */}
            <div className="space-y-6 text-amber-50">
              <h3 className="text-xl md:text-2xl font-black">
                Emergency Roadside in Real Life
              </h3>

              <div className="grid gap-4">
                {/* 1. Roadside Call: Changing Tractor Tires */}
                <div className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]">
                  <div className="px-3 pt-2 pb-1">
                    <h4 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
                      Roadside Call: Changing Tractor Tires
                    </h4>
                  </div>
                  <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2">
                    <TikTokEmbed
                      videoId="7406160390414978334"
                      caption="Roadside Call: Changing Tractor Tires"
                      className="w-full max-w-[420px]"
                    />
                  </div>
                </div>

                {/* 2. Emergency Roadside: Tire Change */}
                <div className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]">
                  <div className="px-3 pt-2 pb-1">
                    <h4 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
                      Emergency Roadside: Tire Change
                    </h4>
                  </div>
                  <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2">
                    <TikTokEmbed
                      videoId="7406160390414978334"
                      caption="Emergency Roadside: Tire Change"
                      className="w-full max-w-[420px]"
                    />
                  </div>
                </div>

                {/* 3. Accident: Please Don’t Drink and Drive */}
                <div className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]">
                  <div className="px-3 pt-2 pb-1">
                    <h4 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
                      Accident: Please Don&apos;t Drink and Drive
                    </h4>
                  </div>
                  <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2">
                    <TikTokEmbed
                      videoId="7215414816326880554"
                      caption="Accident: Please Don't Drink and Drive"
                      className="w-full max-w-[420px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WeAcceptBar />
      </main>

      <SiteFooter />
    </>
  );
}
