// FILE: app/components/ServiceLayout.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

/* =================== Shared Constants =================== */

const DISPLAY_PHONE = "(432) 448-0074";
const TEL_PHONE = "+14324480074";
const TEMP_LABEL = "Pecos, TX • 82°F"; // <-- change this text if you want a different temp/location

/* =================== Layout Pieces =================== */

export function SiteHeader() {
  const [now, setNow] = useState(null);

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
    });
    timeStr = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <header className="z-40">
      {/* Top info bar: date / time / temp */}
      <div className="w-full border-b border-red-800/60 bg-black/90 backdrop-blur">
        <div className="container max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-300">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-[0.18em] text-red-300">
              24/7 Dispatch
            </span>
            <span className="h-1 w-1 rounded-full bg-red-500" />
            <span>{TEMP_LABEL}</span>
          </div>
          <div className="flex items-center gap-3">
            {now && (
              <>
                <span>{dateStr}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-500" />
                <span>{timeStr}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main header + nav */}
      <div className="sticky top-0 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-600 to-amber-400 flex items-center justify-center shadow-lg shadow-red-900/50">
              <span className="text-xs font-black tracking-[0.08em] text-black">
                A&amp;H
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white tracking-wide">
                A &amp; H Towing &amp; Recovery
              </p>
              <p className="text-[11px] text-neutral-300 uppercase tracking-[0.16em]">
                Pecos • Reeves County • West Texas
              </p>
            </div>
          </Link>

          {/* Nav + Call button */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-neutral-200">
              <Link
                href="/light-duty-towing"
                className="hover:text-white transition"
              >
                Light Duty
              </Link>
              <Link
                href="/heavy-duty-commercial-towing"
                className="hover:text-white transition"
              >
                Heavy / Commercial
              </Link>
              <Link
                href="/oilfield-routes-tow-service"
                className="hover:text-white transition"
              >
                Oilfield Routes
              </Link>
              <Link
                href="/owners"
                className="hover:text-white transition"
              >
                Owners
              </Link>
              <Link
                href="/tips-tricks"
                className="hover:text-white transition"
              >
                Tips &amp; Tricks
              </Link>
            </nav>

            <a
              href={`tel:${TEL_PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/80 bg-gradient-to-r from-red-700 to-red-500 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-red-900/60 hover:from-red-600 hover:to-red-400 transition"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
              Call {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} A &amp; H Towing &amp; Recovery. All rights reserved.
        </p>
        <p className="text-center md:text-right">
          Serving Pecos, Reeves County, and West Texas highways — light, medium &amp; heavy duty.
        </p>
      </div>
    </footer>
  );
}

/* =================== Brand Hero =================== */

export function BrandHero({
  serviceTitle,
  serviceSubtitle,
  heroVideoSrc, // optional: video background
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Subtle glow band */}
        <div className="absolute -inset-x-20 bottom-[-40%] h-[60%] bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.16),_transparent_60%)] opacity-70" />
      </div>

      {/* Foreground content */}
      <div className="relative container max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-start gap-10">
        {/* Glass content box */}
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

          {/* Call + SMS quick actions */}
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

          {/* Micro trust row */}
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

        {/* Right side: accent column / clear CTA box */}
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
              <span className="text-neutral-100 font-medium">A&amp;H Towing</span>.
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
              Follow us on TikTok to see real-world recoveries and oilfield tows.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

