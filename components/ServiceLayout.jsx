// components/ServiceLayout.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ============================ Utilities ============================ */

function smsHref(number, body) {
  const encoded = encodeURIComponent(body);
  const isiOS =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const sep = isiOS ? "&" : "?";
  return `sms:${number}${sep}body=${encodeURIComponent(body)}`
    .replace("%0A", "\n")
    .replace("%2520", "%20");
}

function useTimeAndTemp() {
  const [timeString, setTimeString] = useState("");
  const [tempF, setTempF] = useState(null);
  const hasRequestedRef = useRef(false);

  useEffect(() => {
    const tick = () =>
      setTimeString(
        new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (hasRequestedRef.current) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) return;

    hasRequestedRef.current = true;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;
          const res = await fetch(url);
          const data = await res.json();
          const t = data?.current_weather?.temperature;
          if (typeof t === "number") setTempF(Math.round(t));
        } catch {
          /* ignore */
        }
      },
      () => {}
    );
  }, []);

  return { timeString, tempF };
}

/* ====================== Small UI Helpers / CTAs ====================== */

export function PhoneCTA({ className = "", fullWidth = false }) {
  const widthClasses = fullWidth ? "w-full sm:w-auto !min-w-0" : "min-w-[240px]";
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-4 py-2.5 font-extrabold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xs md:text-sm ${widthClasses} ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white`}
      aria-label="Call 24/7 dispatch at (432) 842-4578"
    >
      <span className="uppercase tracking-wide text-[10px] md:text-xs text-center">
        CLICK TO CALL 24/7 DISPATCH
      </span>
      <span className="mt-0.5 text-base md:text-lg leading-none">
        (432) 842-4578
      </span>
    </a>
  );
}

export function TextCTA({ className = "" }) {
  const body = [
    "Tow request from: (name)",
    "Callback: (phone)",
    "Vehicle: (year / make / model)",
    "Passengers: (#)",
    "Location: (share GPS or send a pin)",
  ].join("\n");
  return (
    <a
      href={smsHref("+14328424578", body)}
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-4 py-2.5 font-extrabold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-[11px] md:text-sm min-w-[240px] ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white`}
    >
      <span className="uppercase tracking-wide text-[10px] md:text-xs text-center">
        TEXT DISPATCH (INCLUDE GPS)
      </span>
    </a>
  );
}

function TimeTempDisplay() {
  const { timeString, tempF } = useTimeAndTemp();
  return (
    <div className="flex flex-col items-end text-[10px] md:text-xs text-amber-100 leading-tight whitespace-nowrap">
      <span>Time: {timeString || "--:--"}</span>
      <span>Temp: {typeof tempF === "number" ? `${tempF}°F` : "--°F"}</span>
    </div>
  );
}

/* ====================== Chrome-style panels & brand ====================== */

function AnimBorder({ children, className = "" }) {
  return <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>{children}</div>;
}

function SteelPanel({ children, className = "", padded = true, borderColor = "rgba(255,255,255,0.18)" }) {
  return (
    <div
      className={`rounded-[22px] border shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${padded ? "px-4 py-5 md:px-6 md:py-6" : ""} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderColor,
      }}
    >
      {children}
    </div>
  );
}

function BrandSlab() {
  return (
    <AnimBorder>
      <SteelPanel padded={false} className="px-3 py-1 text-center">
        <div className="inline-block rounded-2xl bg-black/60 backdrop-blur-[1px] border-2 border-white px-3 py-1.5">
          <h1
            className="font-black tracking-tight"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              fontSize: "clamp(40px, 7vw, 96px)",
              color: "#e10600",
              WebkitTextStroke: "1.5px #000",
              textShadow: "0 2px 0 #7f1d1d, 0 10px 22px rgba(0,0,0,.5)",
              lineHeight: 1.05,
            }}
          >
            A&amp;H TOWING &amp; RECOVERY, LLC
          </h1>
        </div>
      </SteelPanel>
    </AnimBorder>
  );
}

/* =================== Top Marquee (like home) =================== */

function TopMarquee() {
  const items =
    "Loving County • McCamey • Mentone • Midland County • Monahans • Notrees • Odessa • Oilfield Routes • Orla • Plateau • Pyote • Royalty • Saragosa • Toyah • Toyahvale • Upton County • Van";
  return (
    <div className="w-full bg-red-700 text-white text-[11px] md:text-xs font-black tracking-wide overflow-hidden border-b border-black/30">
      <div className="relative whitespace-nowrap py-1">
        <div className="animate-marquee inline-block pr-10">{items}</div>
        <div className="animate-marquee inline-block pr-10" aria-hidden>
          {items}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeX {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marqueeX 35s linear infinite;
        }
      `}</style>
    </div>
  );
}

/* =================== Shared Header & Footer =================== */

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesCloseTimeout = useRef(null);

  const openServices = () => {
    if (servicesCloseTimeout.current) clearTimeout(servicesCloseTimeout.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (servicesCloseTimeout.current) clearTimeout(servicesCloseTimeout.current);
    servicesCloseTimeout.current = setTimeout(() => setServicesOpen(false), 350);
  };

  return (
    <>
      <header className="sticky top-0 z-[120] bg-ahCharcoal text-ahText border-b border-black/30">
        <TopMarquee />

        <div className="container max-w-7xl flex items-center gap-4 py-2.5">
          {/* Left: logo + address */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-black grid place-items-center font-bold shadow-cta">
              <span className="text-[14px] font-extrabold" style={{ color: "#e10600" }}>
                A&amp;H
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-bold drop-shadow text-red-600 text-xs md:text-sm">
                A&amp;H Towing &amp; Recovery, LLC
              </div>
              <div className="text-[10px] md:text-xs opacity-90">2712 W F Street, Pecos, TX 79772</div>
              <div className="text-[10px] md:text-xs">
                <a className="underline underline-offset-4 hover:opacity-100" href="mailto:ah.towing.recovery23@gmail.com">
                  ah.towing.recovery23@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: nav + time/temp + call */}
          <div className="ml-auto flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-5 text-xs md:text-sm lg:text-base font-extrabold">
              <Link href="/" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">
                Home
              </Link>

              <div className="relative" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  <span>Services</span>
                  <span className="text-[10px]">▾</span>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 min-w-[240px] rounded-xl bg-black/95 text-xs sm:text-sm text-white shadow-lg border border-yellow-400 z-[200]">
                    <Link href="/light-duty-towing" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Light Duty Towing
                    </Link>
                    <Link href="/heavy-duty-commercial-towing" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Heavy Duty &amp; Commercial Towing
                    </Link>
                    <Link href="/oilfield-routes-tow-service" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Oilfield Routes Tow Service
                    </Link>
                    <Link href="/equipment-transport" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Equipment Transport
                    </Link>
                    <Link href="/flatbed-rollback-services" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Flatbed / Rollback Services
                    </Link>
                    <Link href="/emergency-roadside-assistance" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Emergency Roadside Assistance
                    </Link>
                    <Link href="/accidents-and-accident-removal" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Accident Removal
                    </Link>
                    <Link href="/winching-recovery" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>
                      Winching / Recovery
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/#coverage" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">
                Coverage
              </Link>
              <Link href="/owners" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">
                Owners
              </Link>
              <Link href="/tips-tricks" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">
                Tips &amp; Tricks
              </Link>
              <Link href="/#contact" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">
                Request a Tow
              </Link>
            </nav>

            <div className="hidden sm:block">
              <TimeTempDisplay />
            </div>

            <PhoneCTA className="ml-1" />
          </div>
        </div>

        {/* global animated border */}
        <style jsx global>{`
          @property --angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
          @keyframes rb-rotate {
            to {
              --angle: 360deg;
            }
          }
          .rb-border {
            --angle: 0deg;
            background: conic-gradient(from var(--angle), #3b82f6 0%, #ef4444 50%, #3b82f6 100%);
            animation: rb-rotate 24s linear infinite;
          }
        `}</style>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ahCharcoal text-ahText mt-4">
      <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-8 text-sm md:text-base">
        <div className="text-center md:text-left">
          <div className="font-extrabold text-white drop-shadow-sm">Call or Visit</div>
          <div className="font-extrabold text-amber-200 mt-1">A&amp;H Towing &amp; Recovery, LLC</div>
          <p className="mt-2 font-bold text-amber-200">
            Professional towing, recovery, and roadside assistance for Pecos &amp; oilfield routes.
          </p>
        </div>
        <div>
          <div className="font-semibold text-white">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="underline" href="/#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="underline" href="/#coverage">
                Coverage
              </Link>
            </li>
            <li>
              <Link className="underline" href="/#contact">
                Request a Tow
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Social</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a className="underline" href="https://www.tiktok.com/t/ZTMTrQtgU/" target="_blank" rel="noreferrer">
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
            <a className="underline font-semibold" href="mailto:ah.towing.recovery23@gmail.com">
              ah.towing.recovery23@gmail.com
            </a>
            <br />
            <span className="font-extrabold text-amber-200">2712 W F Street, Pecos, TX 79772</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =================== Brand Hero for Service Pages =================== */
/**
 * Props:
 * - heroVideoSrc: string (e.g., "/videos/fuel.mp4")
 * - poster: string
 * - ctaOffsetPx: number (positive pushes panel downward from center)
 */
export function BrandHero({ serviceTitle, serviceSubtitle, heroVideoSrc, poster, ctaOffsetPx = 0 }) {
  return (
    <section className="relative z-[10] w-full overflow-hidden border-b border-black/40">
      {/* Video background (no black page background) */}
      {heroVideoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster || "/fallback.jpg"}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      )}

      {/* Very light radial vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.08)_55%,rgba(0,0,0,0.28)_85%,rgba(0,0,0,0.42)_100%)]" />

      {/* Content wrapper */}
      <div className="relative container max-w-7xl pt-6 pb-16 md:pt-7 md:pb-24">
        {/* Brand just under header */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <BrandSlab />
          </div>
        </div>

        {/* Emergency panel — centered, then nudged down ~2 inches */}
        <div
          className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2"
          style={{ transform: `translate(-50%, calc(-50% + ${ctaOffsetPx}px))` }}
        >
          <div className="mx-auto w-[min(92vw,780px)] rounded-2xl border-2 border-white/90 bg-black/55 backdrop-blur-[1px] text-center shadow-[0_0_25px_rgba(0,0,0,0.45)]">
            <div className="px-4 py-3 md:px-6 md:py-4">
              <h2 className="text-amber-200 text-xl md:text-2xl font-black drop-shadow-sm">{serviceTitle}</h2>
              {serviceSubtitle && (
                <p className="mt-1.5 text-[11px] md:text-sm font-semibold text-amber-100">{serviceSubtitle}</p>
              )}
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <PhoneCTA />
                <TextCTA />
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to ensure section height is generous on short screens */}
        <div className="h-[58vh] md:h-[62vh]" />
      </div>
    </section>
  );
}

/* =================== TikTok-style Image Gallery =================== */

export function TikTokGallery({ images = [] }) {
  const safeImages = Array.isArray(images) ? images : [];
  if (safeImages.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-yellow-400/80 bg-black/80 p-4 text-center text-amber-100 text-sm">
        Photo gallery coming soon. For now, call dispatch and we&apos;ll tell you exactly what our truck can handle.
      </div>
    );
  }
  return (
    <div className="rounded-2xl border-2 border-yellow-400/90 bg-black/80 p-4 shadow-[0_0_25px_rgba(251,191,36,0.6)]">
      <div className="mb-2">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-yellow-400 text-black text-[11px] font-black uppercase tracking-wide">
          <span className="text-xs">🎥</span>
          <span>Shop &amp; Truck Shots</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {safeImages.map((src, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden bg-neutral-900 aspect-[4/5] border border-neutral-700"
          >
            <img
              src={src}
              alt={`A&H towing photo ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute bottom-1 left-1 rounded-full bg-black/70 text-[9px] px-2 py-0.5 font-semibold text-amber-100">
              @285302ditchking
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-center">
        <a
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-1.5 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-rose-500 text-black font-black text-[11px] md:text-xs uppercase tracking-wide shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          href="https://www.tiktok.com/@285302ditchking?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-xs">TikTok</span>
          <span>Watch more recoveries</span>
        </a>
      </div>
    </div>
  );
}
