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

/* local time + rough temperature (client only) */
function useTimeAndTemp() {
  const [timeString, setTimeString] = useState("");
  const [dateString, setDateString] = useState("");
  const [tempF, setTempF] = useState(null);
  const hasRequestedRef = useRef(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      );
      setDateString(
        now.toLocaleDateString([], { year: "numeric", month: "short", day: "numeric" })
      );
    };
    updateTime();
    const id = setInterval(updateTime, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (hasRequestedRef.current) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) return;

    hasRequestedRef.current = true;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`;
          const res = await fetch(url);
          const data = await res.json();
          const t = data?.current_weather?.temperature;
          if (typeof t === "number") setTempF(Math.round(t));
        } catch {
          /* ignore */
        }
      },
      () => {},
      { enableHighAccuracy: false, timeout: 4000, maximumAge: 60_000 }
    );
  }, []);

  return { timeString, dateString, tempF };
}

/* ====================== Small CTAs ====================== */

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

/* Red CTA that sends users to the main page form */
export function LinkToFormCTA({ className = "", label = "TEXT REQUEST FORM (INCLUDE GPS)" }) {
  return (
    <Link
      href="/#contact"
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2.5 font-extrabold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-[11px] md:text-sm min-w-[240px] ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white`}
    >
      {label}
    </Link>
  );
}

/* ====================== Brand pieces ====================== */

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

/* =================== Header (date + time + temp) =================== */

function TimeTempDisplay() {
  const { timeString, dateString, tempF } = useTimeAndTemp();
  return (
    <div className="flex flex-col items-end text-[10px] md:text-xs text-amber-100 leading-tight whitespace-nowrap">
      <span>{dateString || "--"}</span>
      <span>{timeString || "--:--"}</span>
      <span>Temp: {typeof tempF === "number" ? `${tempF}°F` : "--°F"}</span>
    </div>
  );
}

/* Top marquee identical feel to main page */
export function TopMarquee({
  text = "Pecos, TX (Home Base) • Reeves County • Pecos County • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • TX-18 • TX-302 • Balmorhea • Carlsbad • Coyanosa • Crane • Crane County • Culberson County • Ector County • Fort Davis • Fort Stockton • Grandfalls • Goldsmith • Imperial • I-20 Corridor • Jal • Kermit • Lindsay • Loving County • McCamey • Mentone • Midland County • Monahans • Notrees • Odessa • Oilfield Routes • Orla • Plateau • Pyote • Royalty • Saragosa • Toyah • Toyahvale • Upton County • Van Horn • Verhalen • Ward County • Wickett • Wink • Winkler County",
}) {
  return (
    <div className="w-full bg-[#0b0f14] text-sm">
      <div className="container max-w-7xl py-2">
        <div className="relative overflow-hidden">
          <div
            className="marquee whitespace-nowrap font-extrabold tracking-tight"
            style={{
              color: "#f5f7fa",
              WebkitTextStroke: "0.4px rgba(0,0,0,.9)",
              textShadow: "0 1px 2px rgba(0,0,0,.7)",
            }}
          >
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
          </div>
        </div>
      </div>

      <div className="h-[2px]" />
      <div className="w-full bg-red-700/90">
        <div className="container max-w-7xl">
          <p className="text-center font-extrabold py-1 text-[#ffd54a]">
            Providing Towing, Recovery Services, and Emergency Roadside Assistance to the West Texas Region
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee-x 100s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

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
        <div className="container max-w-7xl flex items-center gap-4 py-2.5">
          {/* logo + address */}
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

          {/* right side */}
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

        {/* animated border global */}
        <style jsx global>{`
          @property --angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
          @keyframes rb-rotate {
            to { --angle: 360deg; }
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
            <li><Link className="underline" href="/#services">Services</Link></li>
            <li><Link className="underline" href="/#coverage">Coverage</Link></li>
            <li><Link className="underline" href="/#contact">Request a Tow</Link></li>
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
            <a className="underline font-semibold" href="tel:+14328424578">(432) 842-4578</a><br />
            <a className="underline font-semibold" href="mailto:ah.towing.recovery23@gmail.com">ah.towing.recovery23@gmail.com</a><br />
            <span className="font-extrabold text-amber-200">2712 W F Street, Pecos, TX 79772</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =================== Brand Hero (video background) =================== */
/**
 * Props:
 * - heroVideoSrc: string (e.g., "/Videos/fuel.mp4")
 * - poster: string
 * - serviceTitle: string
 * - serviceSubtitle: string
 * - bannerTopMarginPx: number  -> space below navbar for the company banner
 * - cardCenterOffsetPx: number -> positive pushes the roadside card DOWN (default 70 for higher placement)
 * - overlayOpacity: 0..1        -> 0 = no dark overlay
 */
export function BrandHero({
  heroVideoSrc,
  poster,
  serviceTitle,
  serviceSubtitle,
  bannerTopMarginPx = 10,
  cardCenterOffsetPx = 70, // higher on the screen by default
  overlayOpacity = 0.25,
}) {
  return (
    <section className="relative z-[10] w-full overflow-hidden bg-neutral-950 border-b border-black/40">
      {/* background video */}
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

      {/* overlay for legibility */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
      )}

      <div className="relative container max-w-7xl">
        {/* Company banner spacer if you ever add it back */}
        <div className="w-full flex justify-center" style={{ marginTop: `${bannerTopMarginPx}px` }} />

        {/* Card — centered but nudged up (smaller offset) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2"
          style={{ transform: `translate(-50%, calc(-50% + ${cardCenterOffsetPx}px))` }}
        >
          <div className="mx-auto w-[min(92vw,880px)]">
            <div className="rounded-2xl border border-white/50 bg-black/55 backdrop-blur-sm text-amber-50 px-4 md:px-6 py-5 text-center shadow-[0_12px_35px_rgba(0,0,0,.55)]">
              <h2
                className="text-2xl md:text-3xl font-black tracking-tight"
                style={{
                  color: "#ffffff",
                  textShadow: "0 2px 12px rgba(0,0,0,.65)",
                }}
              >
                {serviceTitle || "Emergency Roadside Assistance"}
              </h2>
              {serviceSubtitle && (
                <p className="mt-2 text-sm md:text-base font-semibold text-white">
                  {serviceSubtitle}
                </p>
              )}

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <PhoneCTA />
                <LinkToFormCTA />
              </div>
            </div>
          </div>
        </div>

        {/* spacer to ensure section has height */}
        <div className="invisible py-[28vh]" />
      </div>
    </section>
  );
}

/* =================== TikTok-style Image Gallery (kept export) =================== */

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
