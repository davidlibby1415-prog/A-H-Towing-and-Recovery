"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TikTokEmbed } from "./components/TikTokEmbed";

/* ============================ Utilities ============================ */

/**
 * Build an sms: link with prefilled body.
 */
function smsHref(number, body) {
  const encoded = encodeURIComponent(body);
  const isiOS =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const sep = isiOS ? "&" : "?";
  return `sms:${number}${sep}body=${encoded}`;
}

/* Scroll helper so sticky header doesn't cover the form */
function scrollToFormWithOffset(targetId = "dispatch-form", offset = 210) {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const el = document.getElementById(targetId);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - offset;
  window.scrollTo({ top, left: 0, behavior: "smooth" });
  setTimeout(() => document.getElementById("name-input")?.focus(), 600);
}

/* ====================== Small UI Helpers / Icons ====================== */

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

/**
 * RED BUTTONS EVERYWHERE (EXCEPT THE ONE UNDER THE FORM)
 * ------------------------------------------------------
 * This component NEVER sends an SMS. It ONLY:
 *   - scrolls to the form if we’re on the home page, or
 *   - jumps to "/#text-dispatch" if we’re on another page.
 */
function ScrollToFormCTA({
  className = "",
  label = "Text Dispatch & Share My GPS Location",
  targetId = "dispatch-form",
  appendClickHere = true,
}) {
  const onClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);

    if (el) {
      // On the home page – scroll down to the form
      scrollToFormWithOffset(targetId);
    } else {
      // On any other page – go to home page + anchor
      window.location.href = "/#text-dispatch";
    }
  };

  const textContent = appendClickHere
    ? `${label.toUpperCase()} — CLICK HERE`
    : label.toUpperCase();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white`}
      aria-label="Go to dispatch form"
    >
      {textContent}
    </button>
  );
}

/* ============ Time & Temperature (Header, small, non-blocking) ============ */

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
        {temp != null ? `${temp}°F • ${locationLabel}` : locationLabel}
      </span>
    </div>
  );
}

/* ===== Tiny translucent “bubble” helpers ===== */

function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-xl px-3 py-1 bg-black/45 text-white font-extrabold shadow-sm align-middle ${className}`}
      style={{
        WebkitTextStroke: "0.25px rgba(0,0,0,.7)",
        textShadow: "0 1px 2px rgba(0,0,0,.6)",
        border: "1.5px solid rgba(255,255,255,0.95)",
      }}
    >
      {children}
    </span>
  );
}

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

function StripedCallout({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-xl p-[12px] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, #111827 0 10px, #fde047 10px 20px)",
      }}
    >
      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{ backgroundColor: "#fde047" }}
      >
        {children}
      </div>
    </div>
  );
}

function AccentStrip({ color = "from-ahBlue to-ahRed", className = "" }) {
  return (
    <div className={`h-1 w-full bg-gradient-to-r ${color} ${className}`} />
  );
}

/* =================== GLOBAL Animated Border (red↔blue) =================== */

function AnimBorder({ children, className = "" }) {
  return (
    <div className={`rb-border p-[4px] rounded-[26px] ${className}`}>
      {children}
    </div>
  );
}

/* Steel panel container (diamond plate background) */

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

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-7 md:py-8 ${className}`}>
      <div className="container max-w-7xl">{children}</div>
    </section>
  );
}

/* Icons */

const IconTruck = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <path d="M3 14h10V6H7L3 10v4Z" />
    <path d="M13 9h4l3 3v2h-7" />
    <circle cx="7.5" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
  </svg>
);

const IconFlatbed = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <path d="M2 14h13l4-3h3" />
    <path d="M2 14v3h3" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);

const IconLock = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
  </svg>
);

const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

const IconHook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3v9a4 4 0 1 0 8 0" />
    <circle cx="12" cy="3" r="2" />
  </svg>
);

const IconFuel = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12H3V7Z" />
    <path d="M13 10h2l3 3v6a2 2 0 0 0 2 2h1" />
  </svg>
);

/* Brand slab */

function BrandSlab({ Tag = "h1" }) {
  return (
    <AnimBorder>
      <SteelPanel padded={false} className="px-2 py-1 text-center">
        <Tag
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
        </Tag>
      </SteelPanel>
    </AnimBorder>
  );
}

/* ========================= Golden medals image ========================= */

function GoldenFacts() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="w-full px-2 max-w-[980px]">
        <img
          src="/ahh-service-medals.jpg"
          alt="Great Response Time, Operating Hours, and Service Area awards for A&H Towing & Recovery"
          className="w-full h-auto rounded-2xl border-4 border-yellow-400/90 shadow-[0_0_30px_rgba(250,204,21,0.75)] bg-black sm:scale-[1.02] md:scale-100"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </div>
  );
}

/* ========================= Top Marquee ========================= */

function TopLocationsMarquee() {
  const text =
    "Pecos, TX (Home Base) • Reeves County • Pecos County • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • TX-18 • TX-302 • Balmorhea • Carlsbad • Coyanosa • Crane • Crane County • Culberson County • Ector County • Fort Davis • Fort Stockton • Grandfalls • Goldsmith • Imperial • I-20 Corridor • Jal • Kermit • Lindsay • Loving County • McCamey • Mentone • Midland County • Monahans • Notrees • Odessa • Oilfield Routes • Orla • Plateau • Pyote • Royalty • Saragosa • Toyah • Toyahvale • Upton County • Van Horn • Verhalen • Ward County • Wickett • Wink • Winkler County";

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

        @keyframes cta-pulse {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-2px) scale(1.03);
          }
        }
        .animate-cta-pulse {
          animation: cta-pulse 2.1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/* ===================== Video wrapper ===================== */

function VideoSection({
  src,
  minVH = 100,
  extraClass = "",
  children,
  tagline,
  taglinePos = { bottom: "18%" },
  videoStyle = {},
  innerWrapperClass = "",
  overlayStrength = 0.35,
}) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      className={`relative isolate w-full overflow-hidden ${extraClass}`}
      style={{ minHeight: `min(${minVH}vh, 1200px)` }}
    >
      <div className={`absolute inset-0 ${innerWrapperClass}`}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          poster="/fallback.jpg"
          onError={() => setVideoError(true)}
          disablePictureInPicture
          style={videoStyle}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,${
            overlayStrength * 0.57
          }) 78%, rgba(0,0,0,${overlayStrength}) 100%)`,
        }}
      />

      {tagline && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20 w-full px-4"
          style={taglinePos}
        >
          {tagline}
        </div>
      )}

      <div className="relative z-20">{children}</div>

      {videoError && (
        <div className="absolute bottom-3 left-3 z-30 rounded-md bg-red-600/90 text-white px-3 py-1 text-xs shadow">
          Video failed to load: {src}. Confirm it exists at /public{src}
        </div>
      )}
    </section>
  );
}

/* ============================== Page ============================== */

export default function Home() {
  useEffect(() => {
    if (typeof history !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

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

  const locations = [
    "Balmorhea",
    "Carlsbad",
    "Coyanosa",
    "Crane",
    "Crane County",
    "Culberson County",
    "Ector County",
    "Fort Davis",
    "Fort Stockton",
    "Grandfalls",
    "Goldsmith",
    "Imperial",
    "I-20 Corridor",
    "Jal",
    "Kermit",
    "Lindsay",
    "Loving County",
    "McCamey",
    "Mentone",
    "Midland County",
    "Midland/Odessa Metro",
    "Monahans",
    "Notrees",
    "Odessa",
    "Oilfield Routes",
    "Orla",
    "Pecos County",
    "Pecos, TX (Home Base)",
    "Plateau",
    "Pyote",
    "Reeves County",
    "Royalty",
    "Saragosa",
    "TX-17",
    "TX-18",
    "TX-302",
    "Toyah",
    "Toyahvale",
    "Upton County",
    "US-285",
    "Van Horn",
    "Verhalen",
    "Ward County",
    "Wickett",
    "Wink",
    "Winkler County",
  ].sort((a, b) => a.localeCompare(b));

  return (
    <>
      <main className="min-h-screen bg-neutral-950">
        <TopLocationsMarquee />

        {/* Header */}
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

              <a
                href="#coverage"
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
                href="#dispatch-form"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToFormWithOffset("dispatch-form");
                }}
                className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Request a Tow
              </a>
            </nav>

            <div className="ml-4 flex items-center gap-3">
              <TimeTemp />
              <PhoneCTA className="hidden sm:inline-flex" />
            </div>
          </div>
        </header>

        {/* Brand slab */}
        <section
          className="relative z-[10] w-full overflow-hidden"
          style={{ minHeight: "clamp(110px, 15vh, 200px)" }}
        >
          <div className="relative z-[20] h-full w-full flex items-center justify-center px-2 py-0.5">
            <BrandSlab Tag="h1" />
          </div>
        </section>

        {/* Tow1 video */}
        <VideoSection
          src="/Videos/tow1.mp4"
          minVH={76}
          overlayStrength={0.2}
          tagline={
            <Chip className="text-[clamp(18px,3.2vw,36px)] px-4 py-2 bg-blue-900/70">
              Handle with Care • Fast Response • West Texas Tough
            </Chip>
          }
          taglinePos={{ top: "12%" }}
          videoStyle={{
            objectPosition: "center bottom",
          }}
        />

        <div className="h-7" />

        {/* Stranded section */}
        <Section className="mt-2 bg-red-800">
          <AnimBorder>
            <SteelPanel className="text-center">
              <div className="flex justify-center">
                <StripedCallout className="max-w-5xl w-full">
                  <h2
                    className="font-extrabold tracking-tight leading-[1.1]"
                    style={{
                      fontFamily:
                        '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                      fontSize: "clamp(30px,4.4vw,54px)",
                      color: "#111827",
                      letterSpacing: "0.02em",
                      WebkitTextStroke: "0.5px rgba(0,0,0,0.55)",
                      textShadow: "0 1px 2px rgba(0,0,0,0.25)",
                    }}
                  >
                    Stranded on the Side of the Road???
                  </h2>

                  <div
                    className="mt-2 font-extrabold leading-snug text-[20px]"
                    style={{ color: "#0b1220" }}
                  >
                    We dispatch immediately for light, medium &amp; heavy-duty
                    tows, winch-outs, accident recovery, and oilfield transport.
                    <br />
                    Trained operators.
                    <br />
                    Clear pricing.
                    <br />
                    <span className="mt-3 inline-block underline font-black">
                      ⬇ CLICK BELOW TO CALL OR TEXT US DIRECT ⬇
                    </span>
                  </div>
                </StripedCallout>
              </div>

              <div className="h-5" />

              <div className="flex items-center justify-center gap-5 flex-wrap">
                <PhoneCTA className="animate-cta-pulse" />
                <ScrollToFormCTA
                  className="animate-cta-pulse"
                  label="Text Dispatch & Share My GPS Location"
                  appendClickHere={false}
                />
              </div>

              <GoldenFacts />
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* SERVICES */}
        <Section id="services" className="bg-red-800/90">
          <AnimBorder>
            <SteelPanel className="text-center">
              <div
                className="inline-block rounded-2xl px-5 py-2 bg-black backdrop-blur-sm"
                style={{ border: "1.5px solid #c0c0c0" }}
              >
                <h3
                  className="text-[clamp(32px,5.2vw,56px)] font-black leading-tight tracking-tight"
                  style={{
                    fontFamily:
                      '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                    color: "#60a5fa",
                    textShadow: "0 2px 14px rgba(0,0,0,.45)",
                    letterSpacing: "0.2px",
                  }}
                >
                  Services Provided
                </h3>
                <p className="mt-1 text-base md:text-lg font-extrabold text-amber-100 uppercase">
                  CLICK BELOW FOR MORE INFORMATION
                </p>
              </div>

              {/* Tow Services */}
              <div className="mt-6">
                <div className="mb-3">
                  <div
                    className="inline-block rounded-2xl px-4 py-1.5 bg-black backdrop-blur-sm"
                    style={{ border: "1.5px solid #c0c0c0" }}
                  >
                    <h4
                      className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
                      style={{
                        fontFamily:
                          '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                        color: "#60a5fa",
                      }}
                    >
                      Tow Services
                    </h4>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 items-stretch">
                  {[
                    {
                      icon: IconTruck,
                      title: "Light Duty Towing",
                      desc: "Cars • SUVs • Pickups • Long & short distance",
                      href: "/light-duty-towing",
                    },
                    {
                      icon: IconTruck,
                      title: "Heavy Duty & Commercial Towing",
                      desc: "Oilfield & Fleet • Long & short distance",
                      href: "/heavy-duty-commercial-towing",
                    },
                    {
                      icon: IconTruck,
                      title: "Oilfield Routes Tow Service",
                      desc: "Lease roads • Remote access • Long & short distance",
                      href: "/oilfield-routes-tow-service",
                    },
                    {
                      icon: IconFlatbed,
                      title: "Equipment Transport",
                      desc: "Light equipment & tools • Long & short distance",
                      href: "/equipment-transport",
                    },
                    {
                      icon: IconFlatbed,
                      title: "Flatbed / Rollback Services",
                      desc: "Damage-conscious transport • Long & short distance",
                      href: "/flatbed-rollback-services",
                    },
                  ].map(({ icon: Ico, title, desc, href }) => (
                    <AnimBorder key={title} className="h-full">
                      <Link
                        href={href}
                        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]"
                      >
                        <SteelPanel className="p-4 h-full cursor-pointer transition-transform duration-200 hover:scale-[1.05] hover:shadow-xl">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                              <Ico className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <BubbleBlock className="!px-3 !py-2">
                                <div className="font-extrabold text-lg">
                                  {title}
                                </div>
                                <div className="text-base text-white/95 mt-0.5">
                                  {desc}
                                </div>
                              </BubbleBlock>
                            </div>
                          </div>
                        </SteelPanel>
                      </Link>
                    </AnimBorder>
                  ))}
                </div>
              </div>

              {/* Emergency Roadside Assistance */}
              <div className="mt-8">
                <div className="mb-3">
                  <div
                    className="inline-block rounded-2xl px-4 py-1.5 bg-black backdrop-blur-sm"
                    style={{ border: "1.5px solid #c0c0c0" }}
                  >
                    <h4
                      className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
                      style={{
                        fontFamily:
                          '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                        color: "#60a5fa",
                      }}
                    >
                      Emergency Roadside Assistance
                    </h4>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 items-stretch">
                  {[
                    {
                      icon: IconFuel,
                      title: "Fuel Delivery",
                      desc: "Gas & diesel",
                      href: "/emergency-roadside-assistance",
                    },
                    {
                      icon: IconBolt,
                      title: "Jumpstarts",
                      desc: "12V & roadside checks",
                      href: "/emergency-roadside-assistance",
                    },
                    {
                      icon: IconLock,
                      title: "Lockouts",
                      desc: "Fast entry, no damage",
                      href: "/emergency-roadside-assistance",
                    },
                    {
                      icon: IconBolt,
                      title: "Tire Changing Services",
                      desc: "Spare fitting & lug checks",
                      href: "/emergency-roadside-assistance",
                    },
                    {
                      icon: IconHook,
                      title: "Provide Safe Transportation",
                      desc: "Move to safe shoulder/lot/destination",
                      href: "/emergency-roadside-assistance",
                    },
                  ].map(({ icon: Ico, title, desc, href }) => (
                    <AnimBorder key={title} className="h-full">
                      <Link
                        href={href}
                        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]"
                      >
                        <SteelPanel className="p-4 h-full cursor-pointer transition-transform duration-200 hover:scale-[1.05] hover:shadow-xl">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                              <Ico className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <BubbleBlock className="!px-3 !py-2">
                                <div className="font-extrabold text-lg">
                                  {title}
                                </div>
                                <div className="text-base text-white/95 mt-0.5">
                                  {desc}
                                </div>
                              </BubbleBlock>
                            </div>
                          </div>
                        </SteelPanel>
                      </Link>
                    </AnimBorder>
                  ))}
                </div>
              </div>

              {/* Accidents -> Accident Management and Removal */}
              <div className="mt-8">
                <div className="mb-3">
                  <div
                    className="inline-block rounded-2xl px-4 py-1.5 bg-black backdrop-blur-sm"
                    style={{ border: "1.5px solid #c0c0c0" }}
                  >
                    <h4
                      className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
                      style={{
                        fontFamily:
                          '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                        color: "#60a5fa",
                      }}
                    >
                      Accident Management and Removal
                    </h4>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 items-stretch">
                  {[
                    {
                      icon: IconTruck,
                      title: "Accident Management and Removal",
                      desc: "Secure, professional scene towing",
                      href: "/accident-management-and-removal",
                    },
                    {
                      icon: IconHook,
                      title: "Winching / Recovery",
                      desc: "Off-road, mud, sand recoveries",
                      href: "/winching-recovery",
                    },
                  ].map(({ icon: Ico, title, desc, href }) => (
                    <AnimBorder key={title} className="h-full">
                      <Link
                        href={href}
                        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]"
                      >
                        <SteelPanel className="p-4 h-full cursor-pointer transition-transform duration-200 hover:scale-[1.05] hover:shadow-xl">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                              <Ico className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <BubbleBlock className="!px-3 !py-2">
                                <div className="font-extrabold text-lg">
                                  {title}
                                </div>
                                <div className="text-base text-white/95 mt-0.5">
                                  {desc}
                                </div>
                              </BubbleBlock>
                            </div>
                          </div>
                        </SteelPanel>
                      </Link>
                    </AnimBorder>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3 flex-wrap justify-center">
                <PhoneCTA />
                <ScrollToFormCTA label="Text Dispatch & Share My GPS Location" />
              </div>
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* SERVICE AREA */}
        <Section id="coverage" className="bg-red-900/80">
          <AnimBorder>
            <SteelPanel>
              <div className="grid md:grid-cols-2 gap-5 items-start">
                {/* LEFT: heading + map */}
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-black/85 border border-amber-400 px-6 py-4 shadow-xl max-w-2xl w-full">
                      <div className="flex items-center justify-center gap-3">
                        <span
                          className="text-xl md:text-3xl font-black text-amber-300 tracking-tight text-center"
                          style={{
                            fontFamily:
                              '"Comic Sans MS","Trebuchet MS","Segoe UI",system-ui',
                            textShadow: "0 3px 6px rgba(0,0,0,.7)",
                          }}
                        >
                          Where in the TEXAS am I?
                        </span>
                        <span
                          className="text-3xl md:text-4xl"
                          aria-hidden="true"
                        >
                          🌵
                        </span>
                      </div>
                      <div className="mt-2 text-xs md:text-sm font-bold text-amber-50 text-center">
                        Use the map below to find your location or use the
                        buttons below to contact us ASAP.
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-400/90 bg-black shadow-[0_0_25px_rgba(251,191,36,0.7)]">
                    <iframe
                      title="Service Area Map (Dark) with Radius"
                      className="w-full h-[320px]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      allowFullScreen
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-108%2C28.5%2C-98%2C34.5&layer=mapnik&marker=31.42%2C-103.49"
                      style={{
                        filter:
                          "invert(1) hue-rotate(180deg) saturate(0.6) brightness(0.8)",
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div
                        className="rounded-full"
                        style={{
                          width: "70%",
                          height: "70%",
                          border: "3px dashed rgba(250,204,21,0.95)",
                          boxShadow:
                            "0 0 40px rgba(250,204,21,0.7), 0 0 80px rgba(250,204,21,0.5)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT: heading + cities list + buttons */}
                <div className="space-y-3 flex flex-col items-center md:items-stretch">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-black/85 border border-amber-400 px-6 py-4 shadow-xl max-w-2xl w-full">
                      <div className="flex items-center justify-center gap-3">
                        <span
                          className="text-xl md:text-3xl font-black text-amber-300 tracking-tight text-center"
                          style={{
                            fontFamily:
                              '"Comic Sans MS","Trebuchet MS","Segoe UI",system-ui',
                            textShadow: "0 3px 6px rgba(0,0,0,.7)",
                          }}
                        >
                          Service Area
                        </span>
                        <span
                          className="text-3xl md:text-4xl"
                          aria-hidden="true"
                        >
                          🌵
                        </span>
                      </div>
                      <div className="mt-2 text-xs md:text-sm font-bold text-amber-50 text-center">
                        From A to Z, where do you need us? Just ask.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 rounded-2xl border-4 border-yellow-400/90 bg-black/40 p-4 shadow-[0_0_25px_rgba(251,191,36,0.6)]">
                    <div className="mt-1 flex flex-wrap gap-3 justify-center md:justify-start">
                      <a
                        href="tel:+14328424578"
                        className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-xs md:text-sm font-extrabold bg-ahBlue text-white shadow-cta hover:brightness-110 transition-transform duration-200 hover:scale-105 active:scale-95 border-2 border-white"
                      >
                        Click Here to Call Dispatch
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          scrollToFormWithOffset("dispatch-form")
                        }
                        className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-xs md:text-sm font-extrabold bg-ahRed text-white shadow-cta hover:brightness-110 transition-transform duration-200 hover:scale-105 active:scale-95 border-2 border-white outline outline-2 outline-white"
                      >
                        Text Dispatch &amp; Share My GPS Location
                      </button>
                    </div>

                    <div className="mt-3">
                      <BubbleBlock className="!px-5 !py-4 max-w-xl text-base md:text-lg leading-relaxed">
                        {locations.join(" • ")}
                      </BubbleBlock>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-5xl rounded-2xl bg-black/85 border-2 border-yellow-300 shadow-[0_0_28px_rgba(251,191,36,0.8)] px-4 sm:px-6 py-3 text-center">
                  <div className="text-2xl md:text-3xl mb-1">🎶 🎵 🎶</div>
                  <p className="text-base md:text-lg font-extrabold text-amber-100">
                    &quot;Listen, I&apos;ve traveled every road in this here
                    land. I&apos;ve been everywhere, man. Crossed the deserts
                    bare, man.&quot;
                  </p>
                  <p className="mt-1 text-base md:text-lg font-extrabold text-amber-100">
                    -Johnny Cash
                  </p>
                  <div className="mt-1 text-xl">🎵 🎶 🎵</div>
                </div>
              </div>
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* Tow3 video */}
        <Section className="bg-red-800/90">
          <VideoSection
            src="/Videos/tow3.mp4"
            minVH={86}
            videoStyle={{ filter: "contrast(1.12) saturate(1.1)" }}
          />
        </Section>

        {/* Request for Services section with contact form */}
        <Section id="contact" className="bg-red-900/90">
          <AnimBorder>
            <SteelPanel>
              <div className="text-center">
                <div
                  className="inline-block rounded-2xl px-6 py-3 bg-black backdrop-blur-sm"
                  style={{ border: "1.5px solid #ffffff" }}
                >
                  <div
                    className="font-extrabold"
                    style={{
                      fontFamily:
                        '"Gill Sans", "Trebuchet MS", "Segoe UI", system-ui, -apple-system, Arial',
                      fontSize: "clamp(32px,5.6vw,64px)",
                      backgroundImage:
                        "linear-gradient(180deg, #7db1ff 0%, #3b82f6 50%, #1e40af 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      WebkitTextStroke: "1.25px rgba(0,0,0,.85)",
                      textShadow: "0 14px 26px rgba(0,0,0,.55)",
                      letterSpacing: "0.6px",
                    }}
                  >
                    Request for Services
                  </div>
                </div>
              </div>

              <div className="mt-3 flex gap-3 flex-wrap justify-center">
                <PhoneCTA />
                <ScrollToFormCTA label="Text Dispatch & Share My GPS Location" />
              </div>

              {/* This wrapper is the anchor for /#text-dispatch */}
              <div
                id="text-dispatch"
                className="mt-4 rounded-2xl border border-white/15 bg-emerald-200/90 text-black p-4"
              >
                <ContactSection />
              </div>
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* Bottom brand slab + payments + footer */}
        <div className="container max-w-7xl pb-2">
          <BrandSlab Tag="h2" />
        </div>

        <div className="container max-w-7xl py-4 bg-red-900/60 rounded-2xl">
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
                  <span className="font-extrabold text-base md:text-lg">
                    Cash
                  </span>
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
                  <a className="underline" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="underline" href="#coverage">
                    Coverage
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    href="#dispatch-form"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToFormWithOffset("dispatch-form");
                    }}
                  >
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
    </>
  );
}

/* ========================= Contact Section (TikTok via TikTokEmbed) ========================= */

function ContactSection() {
  const [name, setName] = useState("");
  const [callback, setCallback] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [passengers, setPassengers] = useState("");
  const [issue, setIssue] = useState("");
  const [coords, setCoords] = useState(null);
  const [locStatus, setLocStatus] = useState("Idle");

  const handleSendText = (e) => {
    e.preventDefault();

    let sent = false;
    const build = (c) => {
      const locLine = c
        ? `Location: ${c.lat.toFixed(5)}, ${c.lng.toFixed(
            5
          )}\nhttps://www.google.com/maps?q=${c.lat},${c.lng}`
        : "Location: (share GPS)";

      return [
        `Tow request from: ${name || "(name)"}`,
        `Callback: ${callback || "(phone)"}`,
        `Vehicle: ${vehicle || "(Y/M/M)"}`,
        `Passengers: ${passengers || "(#)"}`,
        `Issue: ${issue || "(describe)"}`,
        locLine,
      ].join("\n");
    };

    const openSMS = (body) => {
      if (sent) return;
      sent = true;
      window.location.href = smsHref("+14328424578", body);
    };

    const fallback = setTimeout(() => openSMS(build(null)), 2500);

    if (navigator?.geolocation) {
      setLocStatus("Requesting location…");
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          clearTimeout(fallback);
          const c = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          setCoords(c);
          setLocStatus("Location captured");
          openSMS(build(c));
        },
        (err) => {
          clearTimeout(fallback);
          setLocStatus("Location failed: " + err.message);
          openSMS(build(null));
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 0 }
      );
    } else {
      setLocStatus("Geolocation not supported");
      clearTimeout(fallback);
      openSMS(build(null));
    }
  };

  const mapsLink = coords
    ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}`
    : "";

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* LEFT: form */}
      <div>
        <div className="rounded-xl bg-yellow-300/95 border border-yellow-600 px-4 py-3 text-sm text-black font-extrabold mb-3">
          <strong>Instructions: </strong>
          Please complete the form below for services and to send your GPS
          information to our towing and emergency services dispatcher. Press the
          red button below to submit the form to text for services.
        </div>

        <form
          id="dispatch-form"
          className="grid gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Name</span>
            <input
              id="name-input"
              className="rounded-xl border px-3 py-2 bg-emerald-50"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Callback Phone</span>
            <input
              className="rounded-xl border px-3 py-2 bg-emerald-50"
              inputMode="tel"
              placeholder="(###) ###-####"
              value={callback}
              onChange={(e) => setCallback(e.target.value)}
              required
            />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Vehicle</span>
            <input
              className="rounded-xl border px-3 py-2 bg-emerald-50"
              placeholder="Year / Make / Model"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Number of Passengers</span>
            <input
              type="number"
              min="1"
              max="8"
              className="rounded-xl border px-3 py-2 bg-emerald-50"
              placeholder="e.g., 2"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Issue</span>
            <textarea
              className="rounded-2xl border px-3 py-2 bg-emerald-50"
              rows={3}
              placeholder="Flat tire, no-start, accident, stuck, etc."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </label>

          <div className="grid gap-2 rounded-2xl border p-3 bg-emerald-100/90 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold">Share GPS Location</span>
              <button
                type="button"
                onClick={() => {
                  if (!navigator?.geolocation) {
                    setLocStatus("Geolocation not supported");
                    return;
                  }
                  setLocStatus("Requesting location…");
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const c = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                      };
                      setCoords(c);
                      setLocStatus("Location captured");
                    },
                    (err) => setLocStatus("Location failed: " + err.message),
                    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
                  );
                }}
                className="rounded-xl border px-3 py-1 text-sm hover:bg-emerald-50 transition-transform duration-150 hover:scale-105 active:scale-95"
              >
                Use my GPS
              </button>
            </div>
            <div className="text-xs">
              Status: {locStatus}
              {coords && (
                <>
                  <br />
                  Captured: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}{" "}
                  <a
                    className="underline"
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open map
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-stretch gap-3 mt-2 justify-start">
            <PhoneCTA className="flex-1 max-w-xs" />
            {/* THE ONLY SMS-SENDING RED BUTTON */}
            <button
              type="button"
              onClick={handleSendText}
              className="flex-1 max-w-xs inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white"
            >
              <span className="uppercase tracking-wide text-xs md:text-sm text-center font-extrabold">
                CLICK HERE TO TEXT DISPATCH (INCLUDE GPS LOCATION)
              </span>
            </button>
          </div>
          <p className="mt-1 text-sm font-extrabold">
            The red button opens your Messages app with your details and GPS
            (if available) already filled in.
          </p>
        </form>
      </div>

      {/* RIGHT: 24/7 message + TikTok in phone frame */}
      <div className="rounded-xl overflow-hidden border border-black/10 bg-black/80 flex flex-col items-center justify-start px-4 py-5">
        <div className="text-center mb-4">
          <div
            className="font-black"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial',
              fontSize: "clamp(22px,3.4vw,34px)",
              color: "#f97316",
              WebkitTextStroke: "1px #000",
              textShadow: "0 4px 10px rgba(0,0,0,.8)",
              letterSpacing: "0.08em",
              textDecoration: "underline",
              textDecorationThickness: "3px",
              textDecorationColor: "#f97316",
            }}
          >
            THIS JOB IS 24/7/365
          </div>
        </div>

        {/* Phone-style TikTok embed – using TikTokEmbed */}
        <TikTokEmbed videoId="7541454523265535245" />

        <div className="mt-4">
          <a
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-rose-500 text-black font-black text-sm md:text-base uppercase tracking-wide shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 animate-cta-pulse"
            href="https://www.tiktok.com/@285302ditchking?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8.04c1.28 0 2.5.39 3.5 1.12V6.31c-1.06-.03-2.2-.36-3.18-.99-1.05-.66-1.8-1.56-2.23-2.59H11.8v12.02c0 1.26-1.03 2.28-2.3 2.28-1.27 0-2.3-1.02-2.3-2.28 0-1.25 1.03-2.27 2.3-2.27.24 0 .47.04.69.1V9.61c.94.5 2 .76 3.12.76Z" />
            </svg>
            <span>Follow us on TikTok</span>
          </a>
        </div>
      </div>
    </div>
  );
}
