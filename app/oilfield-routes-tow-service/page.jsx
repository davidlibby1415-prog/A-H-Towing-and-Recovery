// app/oilfield-routes-tow-service/page.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SiteFooter } from "../../components/ServiceLayout";
import RBGlobalStyles from "../../components/RBGlobalStyles";

/* ============================ CTAs ============================ */

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
        CLICK HERE TO CALL 24/7 DISPATCH
      </span>
      <span className="mt-1 text-lg md:text-xl leading-none">
        (432) 842-4578
      </span>
    </a>
  );
}

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
      <span className="mt-1 text-lg md:text-xl leading-none">
        (432) 842-4578
      </span>
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

/* ============ Time & Temperature (like main page) ============ */

function TimeTemp() {
  const [now, setNow] = useState(new Date());
  const [temp, setTemp] = useState(null);
  const [locationLabel, setLocationLabel] = useState("Pecos, TX");

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

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
      .catch(() => {});
  }, []);

  const dateStr = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const timeStr = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="hidden sm:flex flex-col items-end text-[10px] leading-tight text-amber-100/90">
      <span className="font-semibold">{dateStr}</span>
      <span className="font-semibold">{timeStr}</span>
      <span className="font-semibold">
        {temp != null ? `${temp}°F` : "--°F"} • {locationLabel}
      </span>
    </div>
  );
}

/* ========================= Top Marquee ========================= */

function TopMarquee() {
  const text =
    "Pecos, TX (Home Base) • Reeves County • Pecos County • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • TX-18 • TX-302 • Balmorhea • Carlsbad • Coyanosa • Crane • Crane County • Culberson County • Ector County • Fort Davis • Fort Stockton • Grandfalls • Goldsmith • Imperial • I-20 Corridor • Jal • Kermit • Lindsay • Loving County • McCamey • Mentone • Midland County • Midland/Odessa Metro • Monahans • Notrees • Odessa • Oilfield Routes • Orla • Plateau • Pyote • Royalty • Saragosa • Toyah • Toyahvale • Upton County • Van Horn • Verhalen • Ward County • Wickett • Wink • Winkler County";

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
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              fontWeight: 900,
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
        @keyframes marquee-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee-x 100s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================== Hero (2 videos) ============================ */

function OilfieldHero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-neutral-950"
      style={{ minHeight: "70vh" }}
    >
      {/* Two side-by-side background videos */}
      <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left video – rig */}
        <div className="relative">
          <video
            className="w-full h-full"
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
            poster="/fallback.jpg"
            style={{
              objectFit: "contain",
              objectPosition: "center center",
              backgroundImage:
                'linear-gradient(0deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/diamond-plate.jpg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <source src="/Videos/tow2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Right video – fuel / second clip */}
        <div className="relative hidden sm:block">
          <video
            className="w-full h-full"
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
            poster="/fallback.jpg"
            style={{
              objectFit: "contain",
              objectPosition: "center center",
              backgroundImage:
                'linear-gradient(0deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/diamond-plate.jpg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <source src="/Videos/fueltow.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Centered CTA card */}
      <div className="relative z-[2] flex items-center justify-center px-4 py-14 md:py-20">
        <div className="max-w-3xl w-full">
          <div className="rounded-[28px] bg-black/85 border border-yellow-400/85 px-6 py-6 md:px-8 md:py-7 text-center shadow-[0_18px_40px_rgba(0,0,0,0.85)]">
            <div className="h-1 w-full bg-gradient-to-r from-ahBlue via-sky-400 to-ahRed rounded-full mb-3" />

            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Oilfield Routes Tow Service
            </h1>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <BlueCallButton />
              <RedTextFormButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== TikTok / Media grid ===================== */

function OilfieldTikTokGrid() {
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
        Short clips and snapshots from lease roads and oilfield routes. These
        boxes are ready for your TikTok embeds or still photos.
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

/* ========================= Payments Bar ========================= */

function PaymentsBar() {
  return (
    <div className="container max-w-7xl py-4 bg-red-900/60 rounded-2xl mt-6">
      <div className="w-full flex justify-center">
        <div className="rounded-2xl p-3 bg-gradient-to-r from-sky-500/30 via-rose-500/30 to-amber-400/30 border border-black/10 max-w-fit">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="font-extrabold text-white text-lg md:text-xl">
              We accept:
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-yellow-50 to-amber-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">Cash</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-sky-50 to-blue-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">
                All Major Credit Cards
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-rose-50 to-red-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M3 6h18l-2 12H5L3 6Z" />
                <path d="M7 10h10M6 14h12" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">
                EFS Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================== Page ============================ */

export default function OilfieldRoutesTowServicePage() {
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
    <>
      <main className="min-h-screen bg-neutral-950">
        <TopMarquee />

        {/* Header with Home link + date/time/temp */}
        <header className="sticky top-0 z-[120] bg-ahCharcoal text-ahText border-b border-black/30">
          <div className="container max-w-7xl flex items-center gap-6 py-3">
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

            <nav className="ml-auto hidden md:flex items-center gap-6 text-base md:text-lg font-extrabold">
              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
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
                      href="/accident-management-and-removal"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Accident Management and Removal
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

              {/* Home link */}
              <Link
                href="/"
                className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Home
              </Link>

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

            <div className="ml-4 flex items-center gap-3">
              <TimeTemp />
              <PhoneCTA className="hidden sm:inline-flex" />
            </div>
          </div>
        </header>

        {/* HERO */}
        <OilfieldHero />

        {/* MAIN CONTENT */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-5">
              {/* Oilfield access box */}
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
                  <h2 className="text-2xl md:text-3xl font-black mb-2 text-white">
                    Oilfield access without the guesswork
                  </h2>

                  <div className="mt-2 rounded-2xl bg-black/75 px-4 py-3 border border-white/10">
                    <p className="text-sm md:text-base font-semibold text-white">
                      We know the lease roads and the realities out here—soft
                      shoulders, sand, and long distances. From light pickups to
                      heavier rigs, we&apos;ll get you out, get you safe, and
                      get you moving again.
                    </p>
                    <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white">
                      <li>• Lease road navigation and access coordination</li>
                      <li>• Winch-outs, recoveries, and long-haul tows</li>
                      <li>• Safe transport to town, hotel, or shop</li>
                      <li>• Clear pricing and communication</li>
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <BlueCallButton />
                    <RedTextFormButton />
                  </div>
                </div>
              </div>

              {/* Safety box (no bottom CTAs) */}
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
                  <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">
                    Safety first, even miles off the highway
                  </h3>

                  <div className="mt-2 rounded-2xl bg-black/75 px-4 py-3 border border-white/10">
                    <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold text-white">
                      <li>
                        Confirm your GPS or nearest mile marker/lease gate.
                      </li>
                      <li>
                        Stay clear of traffic or soft edges as conditions allow.
                      </li>
                      <li>Keep a charged phone available for updates.</li>
                      <li>
                        Let gate guards or on-site security know we&apos;re en
                        route.
                      </li>
                    </ol>
                    <p className="mt-3 text-sm md:text-base font-semibold text-white">
                      If anything changes, call or text us an update so we can
                      adjust route or equipment before we arrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: 2×2 grid for TikToks/photos */}
            <OilfieldTikTokGrid />
          </div>
        </section>

        {/* Payments bar */}
        <PaymentsBar />
      </main>

      <SiteFooter />
      <RBGlobalStyles />
    </>
  );
}
