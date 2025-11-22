// app/emergency-roadside-assistance/page.jsx
import React from "react";
import Link from "next/link";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TopMarquee,
} from "../../components/ServiceLayout";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel delivery, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways.",
};

export default function EmergencyRoadsidePage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO (video) */}
        <BrandHero
          heroVideoSrc="/Videos/fuel.mp4" // 👈 capital V – fixed
          poster="/fallback.jpg"
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways."
        />

        {/* Lift the Emergency box up over the video a bit, and make all text bright */}
        <section className="-mt-24 md:-mt-28 pb-6">
          <div className="container max-w-5xl">
            <div
              className="rounded-[22px] border border-white/20 bg-black/65 backdrop-blur-md shadow-[0_10px_28px_rgba(0,0,0,0.45)] px-5 py-6 text-center"
              style={{
                WebkitTextStroke: "0.25px rgba(0,0,0,.6)",
                textShadow: "0 1px 2px rgba(0,0,0,.65)",
              }}
            >
              <h1 className="text-white text-[clamp(28px,5vw,40px)] font-black tracking-tight">
                Emergency Roadside Assistance
              </h1>
              <p className="mt-2 text-white font-semibold text-[clamp(14px,2.6vw,18px)]">
                Fuel, jumpstarts, lockouts, tire changes, and safe
                transportation around Pecos, Reeves County, and the West
                Texas highways.
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {/* Blue = Call */}
                <PhoneCTA />
                {/* Red = Jump to main page form */}
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white"
                  aria-label="Go to dispatch form on main page"
                >
                  TEXT DISPATCH (INCLUDE GPS)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What we can do / Safety tips (white text + vibrant borders) */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* Left box */}
            <div className="rounded-2xl border-2 border-yellow-400/90 bg-black/70 p-5 text-white shadow-[0_0_24px_rgba(250,204,21,0.35)]">
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                What we can do on the spot
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Not every problem needs a full tow. When a breakdown blindsides
                you, we’ll meet you quickly and handle the small stuff that
                keeps you rolling: fuel delivery, jumpstarts, lockouts,
                <span className="font-black"> tire changes</span>, and a calm
                plan for <span className="font-black">safe transportation</span>{" "}
                if a tow is the safer call.
              </p>
              <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                <li>• Fuel delivery (gas or diesel)</li>
                <li>• Jumpstarts and quick roadside battery checks</li>
                <li>• Lockouts (fast entry with no damage)</li>
                <li>• Tire changes (spare fitting & lug checks)</li>
                <li>• Safe transportation to shoulder, lot, or destination</li>
              </ul>
              <p className="mt-3 text-sm md:text-base font-semibold">
                Tell us your vehicle, where you are (GPS pin helps), and what
                happened. We’ll advise if roadside is enough or if a tow makes
                more sense.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <PhoneCTA />
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white"
                >
                  TEXT DISPATCH (INCLUDE GPS)
                </Link>
              </div>
            </div>

            {/* Right box */}
            <div className="rounded-2xl border-2 border-yellow-400/90 bg-black/70 p-5 text-white shadow-[0_0_24px_rgba(250,204,21,0.35)]">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                Safety Tips Before We Arrive
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold">
                <li>
                  Make sure your vehicle is in a safe location away from
                  traffic — or evacuate the vehicle to a safe distance/place
                  nearby.
                </li>
                <li>Turn on hazard flashers if it’s safe.</li>
                <li>Stay belted inside, or stand well away from traffic.</li>
                <li>Keep your phone handy so we can reach you.</li>
                <li>
                  If law enforcement is on scene, let them know A&amp;H Towing
                  &amp; Recovery is en route.
                </li>
              </ol>
              <p className="mt-3 text-sm md:text-base font-semibold">
                Your safety comes first. If anything changes, call or text us
                an update.
              </p>
            </div>
          </div>
        </section>

        {/* CTA row under the text areas */}
        <section className="py-6 bg-red-800/90">
          <div className="container max-w-7xl flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white"
            >
              TEXT DISPATCH (INCLUDE GPS)
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
