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

/* ====================== Small UI Helpers ====================== */

function PhoneCTA({ className = "", fullWidth = false }) {
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

function TextCTA({ className = "" }) {
  const body =
    "Tow request: (Please include your name, callback number, vehicle, passengers, and GPS location link if possible.)";

  return (
    <a
      href={smsHref("+14328424578", body)}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white`}
    >
      TEXT DISPATCH (INCLUDE GPS)
    </a>
  );
}

/* ============ Time & Temperature (small, non-blocking) ============ */
function TimeTemp() {
  const [now, setNow] = useState(new Date());
  const [temp, setTemp] = useState(null);
  const [locationLabel, setLocationLabel] = useState("Pecos, TX");

  // Update clock every minute
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  // Optional live temp; requires NEXT_PUBLIC_OPENWEATHER_KEY
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
        if (data?.main?.temp) {
          setTemp(Math.round(data.main.temp));
        }
        if (data?.name) {
          setLocationLabel(`${data.name}, TX`);
        }
      })
      .catch(() => {
        // silently ignore errors; fallback is "--°F"
      });
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

/* ===== Tiny translucent “bubble” helper ===== */
function BubbleBlock({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-2xl px-4 py-3 bg-black/45 text-white font-extrabold shadow ${className}`}
      style={{
        WebkitTextStroke: "0.25px rgba(0,0,0,.7)",
        textShadow: "0 1px 2px rgba(0,0,0,.6)",
      }}
    >
      {children}
    </div>
  );
}

/* Simple gradient border wrapper (static, not animated) */
function AnimBorder({ children, className = "" }) {
  return (
    <div
      className={`p-[6px] rounded-[28px] bg-gradient-to-r from-ahBlue via-black to-ahRed ${className}`}
    >
      {children}
    </div>
  );
}

/* Steel panel container */
function SteelPanel({
  children,
  className = "",
  padded = true,
  borderColor = "rgba(255,255,255,0.18)",
}) {
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
        borderColor,
      }}
    >
      {children}
    </div>
  );
}

/* Big A&H slab */
function BrandSlab({ Tag = "h1" }) {
  return (
    <AnimBorder>
      <SteelPanel padded={false} className="px-2 py-2 text-center">
        <Tag
          className="font-black tracking-tight inline-block"
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
            fontSize: "clamp(40px, 7vw, 72px)",
            color: "#e10600",
            WebkitTextStroke: "1.5px #000",
            textShadow: "0 2px 0 #7f1d1d, 0 10px 22px rgba(0,0,0,.5)",
            lineHeight: 1.05,
          }}
        >
          A&amp;H TOWING &amp; RECOVERY, LLC
        </Tag>
      </SteelPanel>
    </AnimBorder>
  );
}

/* ========================= Top Marquee ========================= */
function TopLocationsMarquee() {
  const text =
    "Pecos, TX (Home Base) • Reeves County • Pecos County • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • TX-18 • TX-302 • Balmorhea • Carlsbad • Coyanosa • Crane • Crane County • Culberson County • Ector County • Fort Davis • Fort Stockton • Grandfalls • Goldsmith • Imperial • I-20 Corridor • Kermit • Jal • Lindsay • Loving County • McCamey • Mentone • Midland County • Monahans • Notrees • Odessa • Oilfield Routes • Orla • Plateau • Pyote • Royalty • Saragosa • Toyah • Toyahvale • Upton County • Van Horn • Verhalen • Ward County • Wickett • Wink • Winkler County";

  return (
    <div className="w-full bg-[#0b0f14] text-sm">
      <div className="container max-w-7xl py-2">
        <div className="relative overflow-hidden">
          <div
            className="slim-marquee whitespace-nowrap font-extrabold tracking-tight"
            style={{
              color: "#f5f7fa",
              WebkitTextStroke: "0.4px rgba(0,0,0,.9)",
              textShadow: "0 1px 2px rgba(0,0,0,.7)",
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              fontWeight: 900,
            }}
          >
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
          </div>
        </div>
      </div>

      <div className="h-[2px]" />
      <div className="w-full bg-red-700/90">
        <div className="container max-w-7xl">
          <p
            className="text-center font-extrabold py-1"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              color: "#ffd54a",
            }}
          >
            Providing Towing, Recovery Services, and Emergency Roadside
            Assistance to the West Texas Region
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slim-marquee-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .slim-marquee {
          display: inline-flex;
          min-width: 200%;
          animation: slim-marquee-x 80s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .slim-marquee {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ====================== Shared Header ====================== */

function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesCloseTimeout = useRef(null);

  const openServices = () => {
    if (servicesCloseTimeout.current) {
      clearTimeout(servicesCloseTimeout.current);
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (servicesCloseTimeout.current) {
      clearTimeout(servicesCloseTimeout.current);
    }
    servicesCloseTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 350);
  };

  return (
    <header className="sticky top-0 z-[120] bg-ahCharcoal text-ahText border-b border-black/30">
      <div className="container max-w-7xl flex items-center gap-6 py-3">
        {/* Left: mini logo + address */}
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
              A&amp;H Towing & Recovery, LLC
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

        {/* Center: nav */}
        <nav className="ml-auto hidden md:flex items-center gap-6 text-base md:text-lg font-extrabold">
          {/* Services dropdown with delayed close */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
              onClick={() => {
                setServicesOpen((o) => !o);
              }}
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
                  Heavy Duty &amp; Commercial Towing
                </Link>
                <Link
                  href="/oilfield-routes-tow-service"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Oilfield Routes Tow Service
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
                  Flatbed / Rollback Services
                </Link>
                <Link
                  href="/emergency-roadside-assistance"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                  onClick={() => setServicesOpen(false)}
                >
                  Emergency Roadside Assistance
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

          <Link
            href="/#coverage"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Coverage
          </Link>
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
          <Link
            href="/#contact"
            className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Request a Tow
          </Link>
        </nav>

        {/* Right: time/temp + always-on blue call */}
        <div className="ml-4 flex items-center gap-3">
          <TimeTemp />
          <PhoneCTA className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}

/* ====================== Layout Component ====================== */

export default function ServiceLayout({
  title = "Towing & Recovery Service",
  subtitle = "Professional 24/7 towing, recovery, and roadside assistance.",
  children,
}) {
  return (
    <main className="min-h-screen bg-neutral-950 text-ahText">
      {/* Top marquee shared with main page */}
      <TopLocationsMarquee />

      {/* Header with nav + time/temp + blue call */}
      <SiteHeader />

      {/* Steel A&H banner, centered, big */}
      <section
        className="relative z-[10] w-full overflow-hidden"
        style={{ minHeight: "clamp(120px, 18vh, 240px)" }}
      >
        <div className="relative z-[20] h-full w-full flex items-center justify-center px-2 py-3">
          <div className="w-full max-w-5xl">
            <BrandSlab Tag="h1" />
          </div>
        </div>
      </section>

      {/* Service page hero: title, subtitle, CTAs */}
      <section className="py-6 md:py-8 bg-red-900/90">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel>
              <div className="text-center">
                <div className="inline-block bg-black/80 rounded-2xl px-5 py-3 border border-white/70">
                  <h1
                    className="font-black tracking-tight"
                    style={{
                      fontFamily:
                        '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                      fontSize: "clamp(28px,4.6vw,40px)",
                      color: "#facc15",
                      textShadow: "0 2px 8px rgba(0,0,0,.8)",
                    }}
                  >
                    {title}
                  </h1>
                  <p className="mt-2 text-sm md:text-base font-extrabold text-amber-100 max-w-2xl mx-auto">
                    {subtitle}
                  </p>
                </div>

                {/* Call / Text buttons right under heading */}
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  <PhoneCTA />
                  <TextCTA />
                </div>
              </div>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* Main service content (your custom page copy) */}
      <section className="py-6 md:py-8 bg-red-800/95">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel>
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                {children}
              </div>

              {/* Bottom CTAs on every service page */}
              <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap gap-4 justify-center">
                <PhoneCTA />
                <TextCTA />
              </div>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* Footer matches main page */}
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
              &amp; oilfield routes.
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
    </main>
  );
}
