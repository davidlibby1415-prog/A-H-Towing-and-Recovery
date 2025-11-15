// app/components/ServiceLayout.jsx
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
  return `sms:${number}${sep}body=${encoded}`;
}

/* ============================ CTAs ============================ */
export function PhoneCTA({ className = "", fullWidth = false }) {
  const widthClasses = fullWidth
    ? "w-full sm:w-auto !min-w-0"
    : "min-w-[260px]";
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base ${widthClasses} ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white`}
      aria-label="Call 24/7 dispatch at (432) 842-4578"
    >
      <span className="uppercase tracking-wide text-xs md:text-sm text-center">
        CLICK HERE TO CALL 24/7 DISPATCH!
      </span>
      <span className="mt-1 text-lg md:text-xl leading-none">
        (432) 842-4578
      </span>
    </a>
  );
}

export function TextCTA({ className = "" }) {
  const body =
    "Tow or roadside request for A&H Towing & Recovery. My name is ______. I am near ______. Vehicle: ______. Please text or call me back.";
  return (
    <a
      href={smsHref("+14328424578", body)}
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white`}
      aria-label="Text dispatch for help"
    >
      <span className="uppercase tracking-wide text-xs md:text-sm text-center">
        TEXT DISPATCH FOR HELP
      </span>
      <span className="mt-1 text-[11px] leading-tight opacity-90 text-center">
        Include your name, location & vehicle
      </span>
    </a>
  );
}

/* ======================= Steel / Animated Border ======================= */
function AnimBorder({ children, className = "" }) {
  return (
    <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>
      {children}
    </div>
  );
}

function SteelPanel({ children, className = "", padded = true }) {
  return (
    <div
      className={`rounded-[22px] border shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${
        padded ? "px-4 py-5 md:px-6 md:py-6" : ""
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderColor: "rgba(255,255,255,0.18)",
      }}
    >
      {children}
    </div>
  );
}

/* Animated border CSS */
function AnimatedBorderStyles() {
  return (
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
        background: conic-gradient(
          from var(--angle),
          #3b82f6 0%,
          #ef4444 50%,
          #3b82f6 100%
        );
        animation: rb-rotate 24s linear infinite;
      }
    `}</style>
  );
}

/* ======================= Time & Temperature ======================= */
function TimeTemp() {
  const [now, setNow] = useState(new Date());
  const [temp, setTemp] = useState(null);
  const [locationLabel, setLocationLabel] = useState("Pecos, TX");

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  // Optional: live temp via OpenWeather (requires NEXT_PUBLIC_OPENWEATHER_KEY)
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
    if (!apiKey) return;
    const lat = 31.4229;
    const lon = -103.4938;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.main?.temp) setTemp(Math.round(data.main.temp));
        if (data?.name) setLocationLabel(`${data.name}, TX`);
      })
      .catch(() => {});
  }, []);

  const timeStr = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="hidden sm:flex flex-col items-end text-[10px] leading-tight text-amber-100/90">
      <span className="font-semibold">{timeStr}</span>
      <span className="font-semibold">
        {temp != null ? `${temp}°F` : "--°F"} • {locationLabel}
      </span>
    </div>
  );
}

/* ============================ Header ============================ */
export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const openServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 300);
  };

  return (
    <header className="sticky top-0 z-[120] bg-ahCharcoal text-ahText border-b border-black/30">
      <div className="container max-w-7xl flex items-center gap-6 py-3">
        {/* Logo + text block (centered nicely) */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="h-10 w-10 rounded-xl bg-black grid place-items-center font-bold shadow-cta">
            <span
              className="text-[15px] font-extrabold"
              style={{ color: "#e10600" }}
            >
              A&amp;H
            </span>
          </div>
          <div className="leading-tight text-center sm:text-left">
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
        <nav className="ml-auto hidden md:flex items-center gap-6 text-base md:text-lg font-extrabold">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
              onClick={() => setServicesOpen((open) => !open)}
            >
              <span>Services</span>
              <span className="text-[10px]">▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 min-w-[260px] rounded-xl bg-black/95 text-xs sm:text-sm text-white shadow-lg border border-yellow-400 z-[200]">
                <Link
                  href="/light-duty-towing"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Light Duty Towing
                </Link>
                <Link
                  href="/heavy-duty-commercial-towing"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Heavy Duty &amp; Commercial
                </Link>
                <Link
                  href="/oilfield-routes-tow-service"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Oilfield Routes
                </Link>
                <Link
                  href="/equipment-transport"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Equipment Transport
                </Link>
                <Link
                  href="/flatbed-rollback-services"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Flatbed / Rollback
                </Link>
                <Link
                  href="/emergency-roadside-assistance"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Emergency Roadside
                </Link>
                <Link
                  href="/accidents-and-accident-removal"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Accident Removal
                </Link>
                <Link
                  href="/winching-recovery"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Winching / Recovery
                </Link>
              </div>
            )}
          </div>

          <a
            href="/#coverage"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Coverage
          </a>
          <Link
            href="/owners"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Owners
          </Link>
          <Link
            href="/tips-tricks"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Tips &amp; Tricks
          </Link>
          <a
            href="/#contact"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Request a Tow
          </a>
        </nav>

        {/* Time / Temp + always-on blue call button */}
        <div className="ml-4 flex items-center gap-3">
          <TimeTemp />
          <PhoneCTA className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}

/* ============================ Big Brand Hero ============================ */
export function BrandHero({ serviceTitle, serviceSubtitle }) {
  return (
    <section
      className="relative z-[10] w-full overflow-hidden bg-neutral-950 border-b border-black/40"
      style={{ minHeight: "75vh" }}
    >
      <AnimatedBorderStyles />
      <div className="relative z-[20] h-full w-full flex items-center justify-center px-2 py-6">
        <AnimBorder className="w-full max-w-4xl">
          <SteelPanel padded={true} className="text-center bg-black/70">
            <div className="inline-block px-4 py-3 border-4 border-white rounded-2xl bg-black/80">
              <h1
                className="font-black tracking-tight"
                style={{
                  fontFamily:
                    'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
                  fontSize: "clamp(40px, 5.8vw, 72px)",
                  color: "#e10600",
                  WebkitTextStroke: "1.5px #000",
                  textShadow: "0 2px 0 #7f1d1d, 0 10px 22px rgba(0,0,0,.5)",
                  lineHeight: 1.05,
                }}
              >
                A&amp;H TOWING &amp; RECOVERY, LLC
              </h1>
            </div>

            {serviceTitle && (
              <p className="mt-5 text-[clamp(24px,3.3vw,34px)] font-black text-amber-200">
                {serviceTitle}
              </p>
            )}
            {serviceSubtitle && (
              <p className="mt-2 text-base md:text-lg font-bold text-amber-50 max-w-2xl mx-auto">
                {serviceSubtitle}
              </p>
            )}

            {/* Top CTA row under subheading */}
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>
          </SteelPanel>
        </AnimBorder>
      </div>

      {/* Thin gradient strip under hero */}
      <div className="h-1 w-full bg-gradient-to-r from-ahBlue to-ahRed" />
    </section>
  );
}

/* ============================ TikTok + Photos ============================ */
export function TikTokGallery({
  tiktokId = "7226078493514222894",
  handle = "@285302ditchking",
  images = [],
}) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const existing = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/90 flex items-center justify-center px-3 py-4">
        <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
          <blockquote
            className="tiktok-embed"
            cite={`https://www.tiktok.com/${handle}/video/${tiktokId}`}
            data-video-id={tiktokId}
            style={{ maxWidth: "605px", minWidth: "260px", margin: 0 }}
          >
            <section>
              <a
                target="_blank"
                rel="noreferrer"
                title={handle}
                href={`https://www.tiktok.com/${handle}?refer=embed`}
              >
                {handle}
              </a>
            </section>
          </blockquote>
        </div>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {images.map((src) => (
            <div
              key={src}
              className="rounded-xl overflow-hidden border border-white/25 bg-black/70"
            >
              <img
                src={src}
                alt=""
                className="w-full h-32 md:h-40 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================ Footer ============================ */
export function SiteFooter() {
  return (
    <footer className="bg-ahCharcoal text-ahText mt-4">
      <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-8 text-base md:text-lg">
        <div className="text-center md:text-left">
          <div className="font-extrabold text-white drop-shadow-sm">
            Call or Visit
          </div>
          <div className="font-extrabold text-amber-200 mt-1">
            A&amp;H Towing &amp; Recovery, LLC
          </div>
          <p className="mt-2 font-bold text-amber-200">
            Professional towing, recovery, and roadside assistance for Pecos
            &amp; West Texas oilfield routes.
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
                href="https://www.tiktok.com/@285302ditchking"
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
            <a
              className="underline font-semibold"
              href="tel:+14328424578"
            >
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
