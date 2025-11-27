// FILE: app/owners/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  WeAcceptBar,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Owners | A & H Towing & Recovery",
  description:
    "Meet the family behind A & H Towing & Recovery, LLC – a West Texas, oilfield-tested towing and recovery team.",
};

export default function OwnersPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950 text-white">
        {/* HERO – video + green bordered text bubble */}
        <section className="relative border-b border-yellow-500/30 bg-neutral-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,250,252,0.08),_transparent_60%)] pointer-events-none" />

          <div className="container max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-center relative z-10">
            {/* LEFT – green bordered bubble */}
            <div>
              <div className="inline-block rounded-3xl border-2 border-emerald-400 bg-black/75 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_0_32px_rgba(16,185,129,0.35)]">
                <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300 mb-2">
                  Owners • West Texas • Family-Run
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-300 drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]">
                  The family behind the trucks.
                </h1>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-amber-100">
                  Whether you&apos;re a local family, passing through on the
                  interstate, or working the oilfield, our goal is simple: get
                  you off the shoulder and taken care of without making a bad
                  day worse.
                </p>
              </div>
            </div>

            {/* RIGHT – hero video (ahsunset2.mp4) */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
              <video
                className="w-full h-full object-cover aspect-video"
                src="/Videos/ahsunset2.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* MAIN OWNER STORY – blue steel box */}
        <section className="py-10 md:py-12 bg-red-900/90 border-b border-black/60">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-start">
            {/* LEFT: text intro & “not a call center” box */}
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.22em] text-yellow-300">
                A &amp; H Towing &amp; Recovery • Pecos, Texas
              </p>

              <div
                className="rounded-3xl border border-sky-400/80 bg-slate-900/90 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_0_28px_rgba(15,23,42,0.9)]"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.9)), url("/diamond-plate.jpg")',
                  backgroundSize: "cover",
                  backgroundBlendMode: "overlay",
                }}
              >
                <h2 className="text-xl sm:text-2xl font-black text-yellow-300">
                  We&apos;re not a call center. We&apos;re the people who show
                  up.
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-amber-100">
                  A &amp; H Towing &amp; Recovery is a family-run operation out
                  of Pecos, Texas. When you call, text, or message us, you&apos;re
                  talking to the same people who schedule the work, run the
                  trucks, and stand out on the shoulder at 2 a.m.
                </p>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-yellow-300">
                  Who&apos;s behind the wheel of this business?
                </h3>
                <ul className="mt-2 space-y-1 text-sm sm:text-base text-amber-100 list-disc list-inside">
                  <li>
                    <span className="font-semibold">
                      Real people, not a big company.
                    </span>{" "}
                    This isn&apos;t a giant corporate fleet. It&apos;s our family
                    name on the door and our reputation on the line every single
                    call.
                  </li>
                  <li>
                    <span className="font-semibold">
                      West Texas born and raised.
                    </span>{" "}
                    We drive the same roads you do — I-20, 285, 302, lease
                    roads, caliche, and those dark stretches between towns.
                  </li>
                  <li>
                    <span className="font-semibold">
                      We answer our own phone.
                    </span>{" "}
                    No script, no runaround. Just, &quot;Where are you? What&apos;re
                    you in? Is everyone safe?&quot; and then we get moving.
                  </li>
                  <li>
                    <span className="font-semibold">
                      We care about how the job feels.
                    </span>{" "}
                    That means steady communication, clear pricing, and treating
                    your people and your equipment with respect.
                  </li>
                </ul>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-yellow-300">
                  What we believe about this work
                </h3>
                <p className="mt-2 text-sm sm:text-base text-amber-100">
                  Anyone can drag a vehicle from Point A to Point B. We care
                  just as much about how you&apos;re treated while it&apos;s
                  happening.
                </p>
                <ul className="mt-2 space-y-1 text-sm sm:text-base text-amber-100 list-disc list-inside">
                  <li>
                    Safety comes first — for you, us, and the motoring public.
                  </li>
                  <li>
                    We don&apos;t yell, rush, or shame people on the side of the
                    road.
                  </li>
                  <li>
                    We talk you through what we&apos;re doing and where your
                    vehicle is going.
                  </li>
                  <li>
                    We try to leave every scene a little calmer than we found
                    it.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: owners photo collage – main couple + two portraits */}
            <div className="space-y-4">
              {/* large couple photo */}
              <div className="rounded-3xl overflow-hidden border border-yellow-400/70 shadow-[0_0_32px_rgba(250,204,21,0.5)]">
                <img
                  src="/owners/couple.jpg"
                  alt="A & H owners together in West Texas"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* two smaller tiles: Ale solo + Harvey gun shot */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-neutral-700/90">
                  <img
                    src="/owners/alesolo.jpg"
                    alt="Alejandra, co-owner of A & H Towing & Recovery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-neutral-700/90">
                  <img
                    src="/owners/hargun.jpg"
                    alt="Harvey in the shop showing his personality"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OWNERS GALLERY – 6 photos, 2 rows of 3 */}
        <section className="py-10 md:py-12 bg-red-800/95 border-b border-black/60">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-yellow-300 text-center">
              The people &amp; training behind A &amp; H
            </h2>
            <p className="mt-2 text-sm sm:text-base text-amber-100 text-center max-w-3xl mx-auto">
              From rotator training and late-night calls to family time and
              community work, this is what our towing life really looks like.
            </p>

            <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-3">
              {/* TOP ROW */}
              <div className="rounded-2xl overflow-hidden border border-neutral-700/80 bg-black/60">
                <img
                  src="/owners/alexsemi.png"
                  alt="Alejandra with the rollback at sunset"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-700/80 bg-black/60">
                <img
                  src="/owners/couple1.jpg"
                  alt="Harvey and Alejandra with their rollback"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-700/80 bg-black/60">
                <img
                  src="/owners/couple.jpg"
                  alt="Harvey and Alejandra together outdoors"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BOTTOM ROW */}
              <div className="rounded-2xl overflow-hidden border border-neutral-700/80 bg-black/60">
                <img
                  src="/owners/alexcert.jpg"
                  alt="Alejandra with Miller Rotator training certificate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-700/80 bg-black/60">
                <img
                  src="/owners/dpsharvey.jpg"
                  alt="Harvey with DPS troopers and a unit on the deck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-700/80 bg-black/60">
                <img
                  src="/owners/harcert.jpg"
                  alt="Harvey with training or award certificate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TIKTOK SECTION – 4 owner videos */}
        <section className="py-10 md:py-12 bg-neutral-950 border-b border-black/70">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-yellow-300 text-center">
              Tow life, straight from the owners
            </h2>
            <p className="mt-2 text-sm sm:text-base text-amber-100 text-center max-w-3xl mx-auto">
              See Alejandra and Harvey on real calls, real recoveries, and real
              West Texas miles.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Calls: The Boss Does It Herself!
                </h3>
                <div className="rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-3">
                  <TikTokEmbed videoId="7479691088521940254" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  Tow Calls: Dirty Hands, Clean Money
                </h3>
                <div className="rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-3">
                  <TikTokEmbed videoId="7419425892356738335" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  The Tow Life: This Business Isn&apos;t for the Weak
                </h3>
                <div className="rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-3">
                  <TikTokEmbed videoId="7382816143372799263" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-yellow-300">
                  The Boss Works: Towing Jobs 2
                </h3>
                <div className="rounded-3xl overflow-hidden border border-neutral-700 bg-black/80 p-3">
                  <TikTokEmbed videoId="7541454523265535245" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payments bar & footer */}
        <WeAcceptBar />
        <SiteFooter />
      </main>
    </>
  );
}
