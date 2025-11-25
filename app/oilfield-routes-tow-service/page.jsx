// app/oilfield-routes-tow-service/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  TopMarquee,
} from "../../components/ServiceLayout";
import RBGlobalStyles from "../../components/RBGlobalStyles";
import { TikTokEmbed } from "../../components/TikTokEmbed";

/* ===== Simple, server-safe CTA buttons (no hooks) ===== */
function BlueCallButton({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white ${className}`}
      aria-label="Call 24/7 dispatch at (432) 842-4578"
    >
      <span className="uppercase tracking-wide text-xs md:text-sm text-center">
        CLICK HERE TO CALL 24/7 DISPATCH
      </span>
      <span className="mt-1 text-lg md:text-xl leading-none">(432) 842-4578</span>
    </a>
  );
}

function RedTextFormButton({ className = "" }) {
  // Link to the main page’s form section; main page handles scroll/behavior.
  return (
    <a
      href="/#contact"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white ${className}`}
      aria-label="Go to dispatch text form on main page"
    >
      TEXT DISPATCH (INCLUDE GPS) — CLICK HERE
    </a>
  );
}

export const metadata = {
  title: "Oilfield Routes Tow Service | A & H Towing & Recovery",
  description:
    "Remote lease roads, US-285, TX-17, TX-18, TX-302 — light/medium/heavy tows, winch-outs, and safe transport across West Texas oilfield routes.",
};

/* ================= HERO with less zoomed video ================= */

function OilfieldHero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden border-b border-black/40 bg-black"
      style={{ minHeight: "min(78vh, 900px)" }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        poster="/fallback.jpg"
        style={{
          objectPosition: "center center", // pull back from the super-zoomed bottom
        }}
      >
        <source src="/Videos/tow2.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Content card */}
      <div className="relative z-10">
        <div className="container max-w-7xl py-10 md:py-16 flex items-center">
          <div className="max-w-2xl rounded-[28px] p-[6px] rb-border">
            <div
              className="rounded-[22px] border border-yellow-400/85 bg-black/80 px-5 py-6 md:px-7 md:py-7 text-white shadow-[0_10px_28px_rgba(0,0,0,0.65)]"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/diamond-plate.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300 mb-1">
                Oilfield • Lease Roads • Remote Access
              </p>
              <h1 className="text-[clamp(28px,4.2vw,40px)] font-black leading-tight">
                Oilfield Routes Tow Service
              </h1>
              <p className="mt-2 text-sm md:text-base font-semibold text-amber-50">
                US-285 • TX-17 • TX-18 • TX-302 • Lease roads • Remote access •
                Long &amp; short distance.
              </p>
              <p className="mt-2 text-sm md:text-base font-semibold text-amber-50/90">
                We know the lease roads and the realities out here—soft
                shoulders, sand, and long distances. From light pickups to
                heavier rigs, we’ll get you out, get you safe, and get you
                moving again.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <BlueCallButton />
                <RedTextFormButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TikTok helper card ================= */

function TikTokCard({ videoId, caption }) {
  return (
    <div className="rounded-2xl border border-yellow-400/80 bg-black/85 p-2">
      <TikTokEmbed videoId={videoId} caption={caption} />
    </div>
  );
}

/* ==================== PAGE ==================== */

export default function OilfieldRoutesTowServicePage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO with better framing */}
        <OilfieldHero />

        {/* Intro / CTAs + TikTok grid */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: main copy + CTAs (unchanged content) */}
            <div className="rounded-[28px] p-[6px] rb-border">
              <div
                className="rounded-[22px] border border-yellow-400/85 bg-black/70 p-5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-2xl md:text-3xl font-black mb-2">
                  Oilfield access without the guesswork
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  We know the lease roads and the realities out here—soft
                  shoulders, sand, and long distances. From light pickups to
                  heavier rigs, we’ll get you out, get you safe, and get you
                  moving again.
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                  <li>• Lease road navigation and access coordination</li>
                  <li>• Winch-outs, recoveries, and long-haul tows</li>
                  <li>• Safe transport to town, hotel, or shop</li>
                  <li>• Clear pricing and communication</li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-3">
                  <BlueCallButton />
                  <RedTextFormButton />
                </div>
              </div>
            </div>

            {/* RIGHT: 2x2 TikTok grid for oilfield clips */}
            <div className="rounded-[28px] p-[6px] rb-border">
              <div
                className="rounded-[22px] border border-yellow-400/85 bg-black/80 p-4 md:p-5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/diamond-plate.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  On the lease, in the field
                </h3>
                <p className="text-sm md:text-base font-semibold mb-3">
                  Real recoveries, real oilfield work. Swap these clips out for
                  your favorite{" "}
                  <span className="font-black">285302 DitchKing</span> or
                  oilfield TikToks anytime by changing the video IDs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Replace these IDs with your own oilfield videos when ready */}
                  <TikTokCard
                    videoId="6908073338308939014"
                    caption="Flipped 18-wheeler recovery"
                  />
                  <TikTokCard
                    videoId="7230219035911327022"
                    caption="Locomotive accident recovery"
                  />
                  <TikTokCard
                    videoId="7414757668876733726"
                    caption="Rotator on an oversized load"
                  />
                  <TikTokCard
                    videoId="7501393555433262367"
                    caption="Practice for perfection"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <RBGlobalStyles />
    </>
  );
}

