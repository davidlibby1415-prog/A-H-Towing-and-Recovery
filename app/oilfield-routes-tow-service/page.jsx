// app/oilfield-routes-tow-service/page.jsx

import React from "react";
import { SiteHeader, SiteFooter, TopMarquee } from "../../components/ServiceLayout";
import RBGlobalStyles from "../../components/RBGlobalStyles";

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

/* ========================== Metadata ========================== */

export const metadata = {
  title: "Oilfield Routes Tow Service | A & H Towing & Recovery",
  description:
    "Remote lease roads, US-285, TX-17, TX-18, TX-302 — light/medium/heavy tows, winch-outs, and safe transport across West Texas oilfield routes.",
};

/* =========================== Hero ============================ */

function OilfieldHero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-black"
      style={{ minHeight: "70vh" }}
    >
      {/* Background video, zoomed OUT more */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        poster="/fallback.jpg"
        // key part: NO extra scale, centered frame
        style={{
          objectPosition: "center center",
          transform: "scale(1.0)",
          transformOrigin: "center center",
        }}
      >
        <source src="/Videos/tow2.mp4" type="video/mp4" />
      </video>

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Centered card */}
      <div className="relative z-10 flex items-center justify-center px-4 py-14 md:py-20">
        <div className="max-w-3xl w-full">
          <div className="rounded-[28px] bg-black/80 border border-yellow-400/85 px-6 py-6 md:px-8 md:py-7 text-center shadow-[0_18px_40px_rgba(0,0,0,0.85)]">
            <div className="h-1 w-full bg-gradient-to-r from-ahBlue via-sky-400 to-ahRed rounded-full mb-3" />

            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Oilfield Routes Tow Service
            </h1>

            <p className="mt-2 text-sm md:text-base font-semibold text-amber-50">
              US-285 • TX-17 • TX-18 • TX-302 • Lease roads • Remote access • Long &amp;
              short distance
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <BlueCallButton />
              <RedTextFormButton />
            </div>

            <p className="mt-3 text-xs md:text-sm font-semibold text-amber-100/90">
              Call or text with your vehicle, location (GPS if possible), and what happened.
              We&apos;ll give you a straight answer on ETA and pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== TikTok / Media grid ===================== */

function OilfieldTikTokGrid() {
  // Swap these placeholders later for real TikTok embeds or JPG/MP4 thumbnails.
  const slots = [
    "Rig move on lease road",
    "Night recovery on soft shoulder",
    "Winch-out in deep sand",
    "Safe load-up before long haul",
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-2xl md:text-3xl font-black text-amber-100 text-center md:text-left">
        Oilfield Clips &amp; Photos
      </h3>
      <p className="text-sm md:text-base font-semibold text-amber-100/90 text-center md:text-left">
        Short clips and snapshots from lease roads and oilfield routes. These boxes are
        ready for your TikTok embeds or still photos.
      </p>

      <div className="grid grid-cols-2 gap-3 mt-2">
        {slots.map((label, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl border border-yellow-400/80 bg-black/80 shadow-[0_10px_26px_rgba(0,0,0,0.9)] overflow-hidden aspect-[9/16] flex items-center justify-center px-2"
          >
            <p className="text-center text-xs md:text-sm font-semibold text-amber-100">
              {label}
              <br />
              <span className="block mt-1 text-[10px] opacity-80">
                (Replace with TikTok embed or image)
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================== Page ============================ */

export default function OilfieldRoutesTowServicePage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO with zoomed-out video */}
        <OilfieldHero />

        {/* MAIN CONTENT: left = copy, right = 4-box TikTok grid */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: copy + CTAs */}
            <div className="space-y-5">
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
                    We know the lease roads and the realities out here—soft shoulders, sand,
                    and long distances. From light pickups to heavier rigs, we&apos;ll get
                    you out, get you safe, and get you moving again.
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
                  <h3 className="text-2xl md:text-3xl font-black mb-2">
                    Safety first, even miles off the highway
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold">
                    <li>Confirm your GPS or nearest mile marker/lease gate.</li>
                    <li>Stay clear of traffic or soft edges as conditions allow.</li>
                    <li>Keep a charged phone available for updates.</li>
                    <li>Let gate guards or on-site security know we&apos;re en route.</li>
                  </ol>
                  <p className="mt-3 text-sm md:text-base font-semibold">
                    If anything changes, call or text us an update so we can adjust route or
                    equipment before we arrive.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <BlueCallButton />
                    <RedTextFormButton />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: 2×2 TikTok / media grid */}
            <OilfieldTikTokGrid />
          </div>
        </section>
      </main>

      <SiteFooter />
      <RBGlobalStyles />
    </>
  );
}
