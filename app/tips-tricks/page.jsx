// FILE: app/tips-tricks/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  WeAcceptBar,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Tips & Tricks | A & H Towing & Recovery",
  description:
    "Real-world towing tips, pro-hacks, and safety eye-openers from West Texas heavy and light-duty calls.",
};

export default function TipsAndTricksPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950 text-white">
        {/* HERO – keep video slot open, use fallback clip for now */}
        <BrandHero
          serviceTitle="Tips & Tricks for Working the Hook"
          serviceSubtitle="Short clips, pro-hacks, and safety lessons from real calls in West Texas — made for operators, first responders, and anyone who wants to run smarter and safer."
          // Fallback hero video – swap this path when you choose a final clip
          heroVideoSrc="/Videos/tow1.mp4"
        />

        {/* SECTION 1 – PROFESSIONAL TOWING BEST PRACTICES */}
        <section className="py-10 md:py-12 bg-red-900/90 border-y border-black/70">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-yellow-300 text-center">
              Professional Towing Best Practices
            </h2>
            <p className="mt-2 text-sm sm:text-base text-amber-100 text-center max-w-3xl mx-auto">
              These clips walk through real-world heavy and medium-duty
              situations — air systems, flashers, no-key tows, and more. Use
              them as quick refreshers before a shift or toolbox talks with your
              crew.
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {/* Towing 101 Refreshers: 2021 Cascadia */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Towing 101 Refreshers: 2021 Cascadia
                </h3>
                <p className="text-sm text-amber-100">
                  Walkthrough on setting up a late-model Cascadia correctly so
                  you&apos;re not guessing on air, lights, or rolling.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7571101975442443551" />
                </div>
              </div>

              {/* Towing Pro-Hack: Air Brake + Flashers */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Towing Pro-Hack: Air Brake + Flashers
                </h3>
                <p className="text-sm text-amber-100">
                  Quick way to get air and flashers working together so your
                  casualty is safer and more visible on the hook.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7552508220846198047" />
                </div>
              </div>

              {/* Towing Explained: 2025 KW T680 Air Valve */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Towing Explained: 2025 KW T680 Air Valve
                </h3>
                <p className="text-sm text-amber-100">
                  Finding and working the air valve on a 2025 T680 so you can
                  move the truck without fighting the system.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7552491783566019870" />
                </div>
              </div>

              {/* Towing Pro-Hack: Rear Tow w/ No Keys */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Towing Pro-Hack: Rear Tow w/ No Keys
                </h3>
                <p className="text-sm text-amber-100">
                  No keys, no problem — how to set up a rear tow and stay in
                  control of the wheels and steering.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7469468335638465822" />
                </div>
              </div>

              {/* Towing Pro-Hack: Volvo No Keys, Open Hood & Brake Pro-Hack */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Towing Pro-Hack: Volvo No Keys, Hood &amp; Brake Trick
                </h3>
                <p className="text-sm text-amber-100">
                  Volvo locked up? Here&apos;s how to get the hood open and air
                  released so you can safely move the unit.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7464044260224994591" />
                </div>
              </div>

              {/* Towing Pro-Hack: 2022 Kenworth Air Brakes */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Towing Pro-Hack: 2022 Kenworth Air Brakes
                </h3>
                <p className="text-sm text-amber-100">
                  A look at where everything lives on a newer Kenworth so you
                  can build air, release brakes, and roll out faster.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7463642500113124639" />
                </div>
              </div>

              {/* Towing Pro-Hack: 2020 Int’l: Doors Locked */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Towing Pro-Hack: 2020 Int&apos;l – Doors Locked
                </h3>
                <p className="text-sm text-amber-100">
                  Locked International, driver gone — how to approach access,
                  setup, and safety without tearing the truck up.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7516465639523912991" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 – TRAINING WITH 1ST RESPONDERS */}
        <section className="py-10 md:py-12 bg-neutral-950 border-b border-black/80">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-yellow-300 text-center">
              Training: Team Practice w/ 1st Responders
            </h2>
            <p className="mt-2 text-sm sm:text-base text-amber-100 text-center max-w-3xl mx-auto">
              Some of the best work happens when towers and first responders
              train together. Use these clips to start conversations about
              roles, communication, and scene control before the next big one.
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {/* Tow Training: Teamwork Move Mountains */}
              <div className="space-y-2 max-w-xs">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Training: Teamwork Move Mountains
                </h3>
                <p className="text-sm text-amber-100">
                  Heavy recovery practice with multiple trucks and agencies —
                  what it looks like when everybody pulls the same direction.
                </p>
                <div className="rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7500641039896628510" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 – SAFETY EYE OPENERS */}
        <section className="py-10 md:py-12 bg-red-800/95 border-t border-black/80">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-yellow-300 text-center">
              Safety Eye Openers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-amber-100 text-center max-w-3xl mx-auto">
              These aren&apos;t just cool clips — they&apos;re reminders of how
              fast things go bad on the shoulder. Share them with new ops,
              dispatchers, and first responders as &quot;what if&quot; training
              tools.
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {/* Sand Storm Pt. 1 */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Calls: Sand Storm Pt. 1 – Zero Visibility
                </h3>
                <p className="text-sm text-amber-100">
                  When the horizon disappears, how do you even stage a truck?
                  This clip shows what &quot;no visibility&quot; really looks
                  like.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7483668900236823838" />
                </div>
              </div>

              {/* Sand Storm Pt. 2 */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Calls: Sand Storm Pt. 2 – Destruction
                </h3>
                <p className="text-sm text-amber-100">
                  After the dust comes the damage. Use this as a reminder of why
                  slow-down-move-over and scene size-up matter.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7483666682175556895" />
                </div>
              </div>

              {/* Sand Storm Pt. 3 */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Calls: Sand Storm Pt. 3 – Devastation Continues
                </h3>
                <p className="text-sm text-amber-100">
                  A third look at the same weather event — useful for talking
                  about resource limits and knowing when to shut a road down.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7478093477172055326" />
                </div>
              </div>

              {/* Close Call with Death */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Calls: Close Call with Death
                </h3>
                <p className="text-sm text-amber-100">
                  A near-miss reminder that one distracted driver can erase all
                  of your good habits. Good for toolbox talks on positioning and
                  escape routes.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7461254620904541471" />
                </div>
              </div>

              {/* Night Work */}
              <div className="space-y-2 md:col-span-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Calls: Night Work
                </h3>
                <p className="text-sm text-amber-100 max-w-3xl">
                  Night ops hit different — fewer witnesses, more fatigue, and
                  lights that hide just as much as they show. Use this clip to
                  talk about cones, blockers, and staying visible after dark.
                </p>
                <div className="max-w-xs mx-auto rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-2">
                  <TikTokEmbed videoId="7436301328420293918" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payments bar & footer (optional but keeps pages consistent) */}
        <WeAcceptBar />
        <SiteFooter />
      </main>
    </>
  );
}

