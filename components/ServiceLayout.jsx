// components/ServiceLayout.jsx
"use client";

import React from "react";
import Link from "next/link";

/* ====================== Shared CTA Buttons ====================== */

export function PhoneCTA({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white ${className}`}
      aria-label="Call 24/7 dispatch at (432) 842-4578"
    >
      <span className="uppercase tracking-wide text-xs md:text-sm text-center">
        CLICK HERE TO CALL 24/7 DISPATCH
      </span>
      <span className="mt-1 text-lg md:text-xl leading-none">
        (432) 842-4578
      </span>
    </a>
  );
}

export function TextCTA({ className = "" }) {
  return (
    <a
      href="/#contact"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white ${className}`}
      aria-label="Go to dispatch form on main page"
    >
      TEXT DISPATCH (INCLUDE GPS)
    </a>
  );
}

/* ====================== Simple Top Marquee ====================== */

export function TopMarquee() {
  const text =
    "Providing Towing, Recovery Services, and Emergency Roadside Assistance to the West Texas Region • 24/7/365 • Pecos, Reeves County, Pecos County, Midland/Odessa Metro, and Oilfield Routes";

  return (
    <div className="w-full bg-[#0b0f14] text-xs sm:text-sm">
      <div className="container max-w-7xl py-1.5">
        <div className="relative overflow-hidden">
          <div className="marquee-slim whitespace-nowrap font-extrabold tracking-tight text-amber-100/95">
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-slim-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-slim {
          display: inline-flex;
          min-width: 200%;
          animation: marquee-slim-x 80s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-slim {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================== Site Header =========================== */

export function SiteHeader() {
  return (
    <header className="bg-ahCharcoal text-ahText border-b border-black/30">
      <div className="container max-w-7xl flex items-center gap-4 py-3">
        {/* Brand block */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-black grid place-items-center font-bold shadow-cta">
            <span
              className="text-[15px] font-extrabold"
              style={{ color: "#e10600" }}
            >
              A&amp;H
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-bold drop-shadow text-red-600">
              A&amp;H Towing &amp; Recovery, LLC
            </div>
            <div className="text-xs opacity-90">
              2712 W F Street, Pecos, TX 79772
            </div>
            <div className="text-xs">
              <a
                className="underline underline-offset-4 hover:opacity-100"
                href="mailto:ah.towing.recovery23@gmail.com"
              >
                ah.towing.recovery23@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="ml-auto flex items-center gap-4 text-xs sm:text-sm md:text-base font-extrabold">
          {/* Home to the left of Services */}
          <Link
            href="/"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Home
          </Link>

          {/* Services dropdown */}
          <details className="relative group">
            <summary className="list-none px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black cursor-pointer flex items-center gap-1">
              <span>Services</span>
              <span className="text-[10px]">▾</span>
            </summary>

            <div className="absolute left-0 mt-2 min-w-[240px] rounded-xl bg-black/95 text-xs sm:text-sm text-white shadow-lg border border-yellow-400 z-[200]">
              <Link
                href="/light-duty-towing"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Light Duty Towing
              </Link>
              <Link
                href="/heavy-duty-commercial-towing"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Heavy Duty &amp; Commercial Towing
              </Link>
              <Link
                href="/oilfield-routes-tow-service"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Oilfield Routes Tow Service
              </Link>
              <Link
                href="/equipment-transport"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Equipment Transport
              </Link>
              <Link
                href="/flatbed-rollback-services"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Flatbed / Rollback Services
              </Link>
              <Link
                href="/emergency-roadside-assistance"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Emergency Roadside Assistance
              </Link>
              <Link
                href="/accident-management-and-removal"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Accident Management and Removal
              </Link>
              <Link
                href="/winching-recovery"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
              >
                Winching / Recovery
              </Link>
            </div>
          </details>

          <a
            href="/#coverage"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors hidden sm:inline-block"
          >
            Coverage
          </a>
          <Link
            href="/owners"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors hidden sm:inline-block"
          >
            Owners
          </Link>
          <Link
            href="/tips-tricks"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors hidden sm:inline-block"
          >
            Tips &amp; Tricks
          </Link>
          <a
            href="/#contact"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors hidden sm:inline-block"
          >
            Request a Tow
          </a>
        </nav>

        {/* Right side CTA on desktop */}
        <div className="ml-3 hidden sm:block">
          <PhoneCTA />
        </div>
      </div>
    </header>
  );
}

/* =========================== Site Footer =========================== */

export function SiteFooter() {
  return (
    <footer className="bg-ahCharcoal text-ahText mt-6">
      <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-8 text-sm md:text-base">
        <div className="text-center md:text-left">
          <div className="font-extrabold text-white drop-shadow-sm">
            Call or Visit
          </div>
          <div className="font-extrabold text-amber-200 mt-1">
            A&amp;H Towing &amp; Recovery, LLC
          </div>
          <p className="mt-2 font-bold text-amber-200">
            Professional towing, recovery, and roadside assistance for Pecos
            &amp; oilfield routes.
          </p>
        </div>

        <div>
          <div className="font-semibold text-white">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a className="underline" href="/#services">
                Services
              </a>
            </li>
            <li>
              <a className="underline" href="/#coverage">
                Coverage
              </a>
            </li>
            <li>
              <a className="underline" href="/#contact">
                Request a Tow
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white">Social</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                className="underline"
                href="https://www.tiktok.com/t/ZTMTrQtgU/"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <div className="font-semibold text-white">Contact</div>
          <p className="mt-2 text-white drop-shadow-sm">
            <a className="underline font-semibold" href="tel:+14328424578">
              (432) 842-4578
            </a>
            <br />
            <a
              className="underline font-semibold"
              href="mailto:ah.towing.recovery23@gmail.com"
            >
              ah.towing.recovery23@gmail.com
            </a>
            <br />
            <span className="font-extrabold text-amber-200">
              2712 W F Street, Pecos, TX 79772
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ========================== BrandHero ========================== */

export function BrandHero({
  heroVideoSrc,
  poster = "/fallback.jpg",
  serviceTitle,
  serviceSubtitle,
  overlayOpacity = 0.35,
  cardCenterOffsetPx = 0,
}) {
  const cardTranslate =
    typeof cardCenterOffsetPx === "number" && cardCenterOffsetPx !== 0
      ? `translateY(${cardCenterOffsetPx}px)`
      : undefined;

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-neutral-950"
      style={{ minHeight: "min(70vh, 900px)" }}
    >
      {/* Background video or gradient */}
      {heroVideoSrc ? (
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
            poster={poster}
            disablePictureInPicture
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-900/80" />
      )}

      {/* Dark radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,${
            overlayOpacity * 0.57
          }) 78%, rgba(0,0,0,${overlayOpacity}) 100%)`,
        }}
      />

      {/* Main card */}
      <div className="relative z-20 flex items-center justify-center px-4 pt-10 pb-12">
        <div
          className="container max-w-5xl"
          style={cardTranslate ? { transform: cardTranslate } : undefined}
        >
          <div
            className="rounded-[22px] border border-white/20 bg-black/65 backdrop-blur-md shadow-[0_10px_28px_rgba(0,0,0,0.45)] px-5 py-6 md:px-8 md:py-7 text-center"
            style={{
              WebkitTextStroke: "0.25px rgba(0,0,0,.6)",
              textShadow: "0 1px 2px rgba(0,0,0,.65)",
            }}
          >
            <h1 className="text-white text-[clamp(28px,5vw,40px)] font-black tracking-tight">
              {serviceTitle}
            </h1>
            {serviceSubtitle && (
              <p className="mt-2 text-white font-semibold text-[clamp(14px,2.6vw,18px)]">
                {serviceSubtitle}
              </p>
            )}

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>

            <p className="mt-3 text-xs md:text-sm text-amber-100/90 font-semibold">
              Call or text with your vehicle, location (GPS if possible), and
              what happened. We&apos;ll give you a straight answer on ETA and
              pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================== TikTokGallery ========================== */

export function TikTokGallery({ images = [] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((src, idx) => (
        <div
          key={src + idx}
          className="relative w-full aspect-[9/16] flex items-center justify-center"
        >
          <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-[3px] shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
            <div className="relative w-full h-full rounded-[28px] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={src}
                alt={`A & H towing scene ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
