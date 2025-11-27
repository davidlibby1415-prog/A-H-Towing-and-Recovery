// FILE: app/components/ServiceLayout.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

/* =================== Shared Constants =================== */

const DISPLAY_PHONE = "(432) 842-4578"; // <- change if needed
const TEL_PHONE = "+14328424578";

/* =================== Header =================== */

export function SiteHeader() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  let dateStr = "";
  let timeStr = "";
  if (now) {
    dateStr = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    timeStr = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <header className="relative z-40 border-b border-yellow-500/40 bg-[#050505] text-white shadow-lg shadow-black/60">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* LEFT: Logo + Business Info */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center border border-red-700 shadow-[0_0_18px_rgba(248,113,113,0.6)]">
            <span className="text-sm font-black tracking-[0.12em] text-red-400">
              A&amp;H
            </span>
          </div>
          <div className="leading-tight text-xs md:text-[13px]">
            <p className="font-semibold text-red-400">
              A&amp;H Towing &amp; Recovery, LLC
            </p>
            <p className="text-neutral-200">
              2712 W F Street, Pecos, TX 79772
            </p>
            <a
              href="mailto:ah.towing.recovery23@gmail.com"
              className="text-sky-300 hover:text-sky-200 underline-offset-2 hover:underline"
            >
              ah.towing.recovery23@gmail.com
            </a>
          </div>
        </div>

        {/* CENTER: NAV */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          {/* Services dropdown */}
          <div className="relative group">
            <button className="inline-flex items-center gap-1 rounded-md bg-yellow-400 px-4 py-1.5 text-black shadow-[0_0_12px_rgba(250,204,21,0.7)] hover:bg-yellow-300">
              <span>Services</span>
              <span className="text-xs">▾</span>
            </button>

            <div className="pointer-events-none absolute left-0 top-full mt-2 w-72 rounded-xl border border-yellow-400 bg-black/98 py-3 shadow-2xl opacity-0 translate-y-1 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
              <ul className="flex flex-col gap-1 text-[13px]">
                <li>
                  <Link
                    href="/light-duty-towing"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Light Duty Towing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/heavy-duty-commercial-towing"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Heavy Duty &amp; Commercial Towing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/oilfield-routes-tow-service"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Oilfield Routes Tow Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/equipment-transport"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Equipment Transport
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flatbed-rollback-services"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Flatbed / Rollback Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/emergency-roadside-assistance"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Emergency Roadside Assistance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accident-management-and-removal"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Accident Management and Removal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/winching-recovery"
                    className="block px-4 py-1.5 text-sky-200 hover:bg-yellow-400 hover:text-black"
                  >
                    Winching / Recovery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/coverage"
            className="text-sky-300 hover:text-sky-100"
          >
            Coverage
          </Link>
          <Link
            href="/owners"
            className="text-sky-300 hover:text-sky-100"
          >
            Owners
          </Link>
          <Link
            href="/tips-tricks"
            className="text-sky-300 hover:text-sky-100"
          >
            Tips &amp; Tricks
          </Link>
          <Link
            href="/request-a-tow"
            className="text-sky-300 hover:text-sky-100"
          >
            Request a Tow
          </Link>
        </nav>

        {/* RIGHT: Call button + date/time */}
        <div className="flex flex-col items-end gap-2 text-xs">
          <a
            href={`tel:${TEL_PHONE}`}
            className="inline-flex flex-col items-center justify-center rounded-2xl border-2 border-white bg-[#2563eb] px-5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] shadow-[0_0_20px_rgba(37,99,235,0.9)] hover:bg-[#1d4ed8]"
          >
            <span>Click here to call 24/7</span>
            <span>Dispatch</span>
            <span className="mt-1 text-base tracking-[0.08em]">
              {DISPLAY_PHONE}
            </span>
          </a>
          <div className="text-[11px] text-neutral-200 text-right leading-tight">
            {now && (
              <>
                <div>{dateStr}</div>
                <div>
                  {timeStr}
                  <span className="ml-1">Pecos, TX</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile note: simple bar */}
      <div className="lg:hidden border-t border-neutral-700 bg-black/90 px-4 py-2 text-[11px] text-center text-neutral-300">
        Menu simplified on mobile — tap logo to go home or call dispatch above.
      </div>
    </header>
  );
}

/* =================== Footer =================== */

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} A&amp;H Towing &amp; Recovery, LLC. All
          rights reserved.
        </p>
        <p className="text-center md:text-right">
          Serving Pecos, Reeves County, and West Texas highways — light, medium
          &amp; heavy duty.
        </p>
      </div>
    </footer>
  );
}

/* =================== Brand Hero =================== */

export function BrandHero({
  serviceTitle,
  serviceSubtitle,
  heroVideoSrc,
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950">
      {/* Background: video or gradient */}
      <div className="absolute inset-0">
        {heroVideoSrc ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-900 via-neutral-900 to-black" />
        )}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute -inset-x-20 bottom-[-40%] h-[60%] bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.16),_transparent_60%)] opacity-70" />
      </div>

      {/* Foreground content */}
      <div className="relative container max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-start gap-10">
        <div className="max-w-xl bg-black/55 border border-white/15 rounded-2xl p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-300 mb-2">
            24/7 Dispatch • Fast Response
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
            {serviceTitle}
          </h1>
          <p className="text-sm md:text-base text-neutral-200 mb-6">
            {serviceSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${TEL_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-amber-400 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-lg shadow-red-900/50 hover:from-red-500 hover:to-amber-300 transition"
            >
              <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_16px_rgba(190,242,100,0.9)]" />
              Call Dispatch Now
            </a>
            <a
              href={`sms:${TEL_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs md:text-sm font-medium uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition"
            >
              Text Location
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-[11px] text-neutral-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Oilfield • Highway • City
            </span>
          </div>
        </div>

        <div className="flex-1 w-full lg:max-w-sm">
          <div className="bg-black/50 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.85)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-300 mb-2">
              Ready When You Call
            </p>
            <p className="text-sm text-neutral-100 mb-4">
              Whether you&apos;re on an oilfield lease road, I-20, or in town,
              our drivers roll out with the right equipment for the job.
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-200">
              <li>• Fast dispatch from Pecos, TX</li>
              <li>• Careful loading &amp; securement</li>
              <li>• Light, medium &amp; heavy duty units</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================== CTAs =================== */

export function PhoneCTA({ title = "Need a tow right now?", blurb }) {
  return (
    <section className="bg-black py-10 border-y border-white/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-[2fr,1fr] gap-6 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              {title}
            </h2>
            {blurb && (
              <p className="text-sm md:text-base text-neutral-300">
                {blurb}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <a
              href={`tel:${TEL_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-amber-400 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-lg shadow-red-900/60 hover:from-red-500 hover:to-amber-300 transition"
            >
              Call {DISPLAY_PHONE}
            </a>
            <p className="text-[11px] text-neutral-400">
              Save us in your phone as{" "}
              <span className="text-neutral-100 font-medium">
                A&amp;H Towing
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TextCTA({ heading, body, children }) {
  return (
    <section className="bg-neutral-950 py-10 border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          {heading && (
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              {heading}
            </h2>
          )}
          {body && (
            <p className="text-sm md:text-base text-neutral-300 mb-4">
              {body}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

/* =================== TikTok Gallery Shell =================== */

export function TikTokGallery({ children }) {
  return (
    <section className="bg-black py-10 border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {children || (
            <p className="col-span-full text-sm text-neutral-300">
              Follow us on TikTok to see real-world recoveries and oilfield
              tows.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
