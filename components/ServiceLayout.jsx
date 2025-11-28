// FILE: components/ServiceLayout.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ============================ Utilities ============================ */

// Build an sms: link with prefilled body.
function smsHref(number, body) {
  const encoded = encodeURIComponent(body);
  const isiOS =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const sep = isiOS ? "&" : "?";
  return `sms:${number}${sep}body=${encoded}`;
}

// Smooth-scroll to a section, accounting for sticky header.
function scrollToFormWithOffset(targetId = "dispatch-form", offset = 210) {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const el = document.getElementById(targetId);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - offset;
  window.scrollTo({ top, left: 0, behavior: "smooth" });
}

/* ===================== Date / Time / Temperature ===================== */

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60 * 1000); // update each minute
    return () => clearInterval(id);
  }, []);
  return now;
}

// Simple client-side fetch using Open-Meteo (no API key needed).
function usePecosTemperatureF() {
  const [tempF, setTempF] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=31.42&longitude=-103.49&current_weather=true&temperature_unit=fahrenheit"
        );
        const data = await res.json();
        if (!cancelled && data?.current_weather?.temperature != null) {
          setTempF(Math.round(data.current_weather.temperature));
        }
      } catch {
        // Silent fail; just leave temp as null.
      }
    }

    load();
    // Refresh every 15 minutes
    const id = setInterval(load, 15 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return tempF;
}

function TopInfoStrip() {
  const now = useNow();
  const tempF = usePecosTemperatureF();

  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="w-full border-b border-black/40 bg-neutral-900/95 text-[11px] sm:text-xs text-amber-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
          <span className="uppercase tracking-[0.22em] text-[10px] sm:text-[11px] text-emerald-200">
            On duty • 24/7 West Texas Dispatch
          </span>
        </div>
        <div className="flex items-center gap-3 text-amber-100/90">
          <span>
            {dateStr} • {timeStr}
          </span>
          <span className="hidden sm:inline text-amber-200/90">
            Pecos, TX{" "}
            {tempF != null ? (
              <span className="font-semibold">{tempF}°F</span>
            ) : (
              <span className="opacity-70">—°F</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================ Header / Footer ============================ */

export function SiteHeader() {
  const pathname = usePathname();
  const phoneDisplay = "(432) 842-4578";
  const phoneHref = "tel:+14328424578";

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/heavy-duty-commercial-towing", label: "Heavy Duty" },
    { href: "/light-duty-towing", label: "Light Duty" },
    { href: "/equipment-transport", label: "Equipment" },
    { href: "/emergency-roadside-assistance", label: "Roadside" },
    { href: "/oilfield-routes-tow-service", label: "Oilfield Routes" },
    { href: "/owners", label: "Owners" },
    { href: "/tips-tricks", label: "Tips & Tricks" },
  ];

  return (
    <header className="sticky top-0 z-40 shadow-lg shadow-black/40">
      <TopInfoStrip />

      <div className="bg-neutral-950/98 border-b border-red-900/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3">
          {/* Brand block */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-red-700 flex items-center justify-center text-[10px] font-black text-yellow-200 shadow-[0_0_18px_rgba(220,38,38,0.9)]">
              <span className="leading-tight text-center">
                A&amp;H
                <br />
                TOW
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-xs sm:text-sm font-semibold text-amber-100">
                A&amp;H Towing &amp; Recovery, LLC
              </div>
              <div className="text-[10px] sm:text-[11px] text-neutral-300">
                2712 W 1st Street, Pecos, TX 79772
              </div>
            </div>
          </div>

          {/* Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-4 text-[13px]">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`uppercase tracking-[0.18em] ${
                    active
                      ? "text-yellow-300"
                      : "text-neutral-300 hover:text-yellow-200"
                  } text-[11px]`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Call button */}
          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              className="inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-500 text-xs sm:text-[13px] font-semibold text-white px-3 py-1.5 shadow-[0_0_18px_rgba(37,99,235,0.9)]"
            >
              CALL 24/7 DISPATCH • {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 border-t border-black/70">
      <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>
          &copy; {new Date().getFullYear()} A&amp;H Towing &amp; Recovery, LLC.
          All rights reserved.
        </span>
        <span className="text-[11px] text-neutral-500">
          Proudly serving Pecos, Reeves County &amp; the West Texas oilfield
          routes.
        </span>
      </div>
    </footer>
  );
}

/* ============================= Brand Hero ============================= */

export function BrandHero({
  serviceTitle,
  serviceSubtitle,
  heroVideoSrc,
  heroFallbackImage = "/hthunder-hero.jpg",
}) {
  const hasVideo = !!heroVideoSrc;

  return (
    <section className="relative bg-gradient-to-b from-black via-neutral-950 to-black border-b border-red-900/70 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),transparent_55%),radial-gradient(circle_at_bottom,_rgba(250,204,21,0.16),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-center relative z-10">
        {/* Text side */}
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-yellow-300/90">
            24/7 West Texas Dispatch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-200 drop-shadow-[0_0_18px_rgba(0,0,0,0.8)]">
            {serviceTitle}
          </h1>
          <p className="text-sm sm:text-base text-amber-100/95 leading-relaxed max-w-xl">
            {serviceSubtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <PhoneCTA />
            <TextCTA />
          </div>
        </div>

        {/* Media side */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-black/75 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
          {hasVideo ? (
            <video
              className="w-full h-full object-cover aspect-video"
              src={heroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={heroFallbackImage}
              alt={serviceTitle}
              className="w-full h-full object-cover aspect-video"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* =========================== Call / Text CTAs =========================== */

const DISPATCH_NUMBER = "+14328424578";

export function PhoneCTA() {
  // red button: CALL DISPATCH, scroll to form section
  const handleClick = () => {
    scrollToFormWithOffset("dispatch-form");
  };

  return (
    <a
      href={`tel:${DISPATCH_NUMBER}`}
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(220,38,38,0.9)] transition-colors"
    >
      CALL DISPATCH &amp; TALK TO A HUMAN
    </a>
  );
}

export function TextCTA() {
  // red-outline button: TEXT DISPATCH + scroll to form section
  const smsBody =
    "Hi, I need help from A&H Towing. Here is my location and vehicle info:";

  const handleClick = () => {
    scrollToFormWithOffset("dispatch-form");
  };

  return (
    <a
      href={smsHref(DISPATCH_NUMBER, smsBody)}
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full border border-red-500 bg-black/40 hover:bg-red-600/20 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-red-100 shadow-[0_0_12px_rgba(127,29,29,0.9)] transition-colors"
    >
      TEXT DISPATCH &amp; SHARE MY GPS
    </a>
  );
}

/* ============================ We Accept Bar ============================ */

export function WeAcceptBar() {
  return (
    <section className="bg-neutral-950 border-y border-black/70">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/90 shadow-[0_0_18px_rgba(16,185,129,0.9)]">
            <span className="text-xs font-black text-black">✓</span>
          </div>
          <div>
            <p className="text-[12px] sm:text-sm font-semibold text-amber-100">
              We accept card, cash, and most motor club PO&apos;s.
            </p>
            <p className="text-[11px] sm:text-xs text-neutral-300">
              Pay on scene or by phone — clear, simple pricing before we roll.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-amber-100/90">
          <span className="uppercase tracking-[0.22em] text-[10px] text-neutral-400">
            Cards Accepted:
          </span>
          <span className="rounded-full bg-neutral-800 px-2.5 py-1">
            Visa
          </span>
          <span className="rounded-full bg-neutral-800 px-2.5 py-1">
            Mastercard
          </span>
          <span className="rounded-full bg-neutral-800 px-2.5 py-1">
            American Express
          </span>
          <span className="rounded-full bg-neutral-800 px-2.5 py-1">
            Discover
          </span>
        </div>
      </div>
    </section>
  );
}
