"use client";

import React from "react";
import Link from "next/link";

/* ========================= Top Marquee ========================= */
function TopLocationsMarquee() {
  const text =
    "Pecos (Home Base) • Reeves County • Fort Stockton • Monahans • Kermit • Balmorhea • Pyote • Toyah • Grandfalls • Wink • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • Oilfield Routes";
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
          animation: marquee-x 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none !important;
          }
        }

        /* ===== Global animated red↔blue border ===== */
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
    </div>
  );
}

/* ================= Helpers ================= */
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
      className={`rounded-[22px] border border-white/20 shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${
        padded ? "px-4 py-5 md:px-6 md:py-6" : ""
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url("/diamond-plate.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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

/* =============== Phone-style TikTok frame =============== */
function TikTokPhoneFrame({ embedUrl, title }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-xs mx-auto">
        {/* phone body */}
        <div className="absolute inset-0 rounded-[2.8rem] bg-black/70" />
        <div className="relative mx-auto rounded-[2.5rem] border-[4px] border-zinc-900 bg-black shadow-2xl aspect-[9/16] overflow-hidden flex items-center justify-center">
          {/* notch / speaker */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full bg-zinc-800" />
          {/* screen */}
          <iframe
            src={embedUrl}
            loading="lazy"
            allow="encrypted-media; fullscreen; picture-in-picture"
            className="w-full h-full border-0"
          />
        </div>
      </div>
      <div className="mt-2 text-xs sm:text-sm font-bold text-amber-100 text-center max-w-xs">
        {title}
      </div>
    </div>
  );
}

/* ============================== DATA ============================== */

const TIKTOKS = [
  {
    title: "Hooking up a vehicle safely on the shoulder",
    embedUrl:
      "https://www.tiktok.com/embed/0000000000000000001", // replace with real embed URL
  },
  {
    title: "How to share your GPS pin with dispatch",
    embedUrl:
      "https://www.tiktok.com/embed/0000000000000000002",
  },
  {
    title: "Tips for staying visible at night roadside",
    embedUrl:
      "https://www.tiktok.com/embed/0000000000000000003",
  },
  {
    title: "What to do right after a fender bender",
    embedUrl:
      "https://www.tiktok.com/embed/0000000000000000004",
  },
  {
    title: "Checking tie-downs before we roll",
    embedUrl:
      "https://www.tiktok.com/embed/0000000000000000005",
  },
  {
    title: "Oilfield road safety quick tips",
    embedUrl:
      "https://www.tiktok.com/embed/0000000000000000006",
  },
];

/* ============================== PAGE ============================== */

export default function TipsTricksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top marquee */}
      <TopLocationsMarquee />

      {/* Header (match home nav) */}
      <header className="sticky top-0 z-50 bg-ahCharcoal text-ahText border-b border-black/30">
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

          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm font-bold">
            {/* Services dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1 hover:opacity-80">
                <span>Services</span>
                <span className="text-[10px]">▾</span>
              </button>
              <div className="absolute left-0 mt-2 hidden min-w-[260px] rounded-xl bg-black/95 text-xs sm:text-sm text-white shadow-lg border border-yellow-400 z-[80] group-hover:block hover:block">
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
                  href="/accidents-and-accident-removal"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                >
                  Accident Removal
                </Link>
                <Link
                  href="/winching-recovery"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                >
                  Winching / Recovery
                </Link>
              </div>
            </div>

            <Link href="/#coverage" className="hover:opacity-80">
              Coverage
            </Link>

            <Link href="/owners" className="hover:opacity-80">
              Owners
            </Link>

            <Link href="/tips-tricks" className="hover:opacity-80">
              Tips &amp; Tricks
            </Link>

            <Link href="/#contact" className="hover:opacity-80">
              Request a Tow
            </Link>
          </nav>
        </div>
      </header>

      {/* Top steel brand banner */}
      <section
        className="relative z-[10] w-full overflow-hidden"
        style={{ minHeight: "clamp(110px, 15vh, 200px)" }}
      >
        <div className="relative z-[20] h-full w-full flex items-center justify-center px-2 py-0.5">
          <BrandSlab Tag="h1" />
        </div>
      </section>

      {/* Tips & Tricks content on steel diamond */}
      <Section id="tips-tricks" className="bg-red-900/80">
        <AnimBorder>
          <SteelPanel>
            <div className="text-center mb-6">
              <div className="inline-block rounded-2xl px-6 py-3 bg-black/70 backdrop-blur-sm">
                <h1
                  className="font-extrabold tracking-tight"
                  style={{
                    fontFamily:
                      '"Gill Sans","Trebuchet MS","Segoe UI",system-ui,-apple-system,Arial',
                    fontSize: "clamp(32px,5vw,60px)",
                    backgroundImage:
                      "linear-gradient(180deg,#7db1ff 0%,#3b82f6 50%,#1e40af 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextStroke: "1.25px rgba(0,0,0,.85)",
                    textShadow: "0 14px 26px rgba(0,0,0,.55)",
                    letterSpacing: "0.6px",
                  }}
                >
                  Tips &amp; Tricks
                </h1>
                <p className="mt-1 text-xs sm:text-sm font-extrabold text-amber-100 uppercase">
                  Short TikTok videos on roadside safety, towing, and prep
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TIKTOKS.map((t) => (
                <TikTokPhoneFrame
                  key={t.embedUrl}
                  embedUrl={t.embedUrl}
                  title={t.title}
                />
              ))}
            </div>
          </SteelPanel>
        </AnimBorder>
      </Section>

      {/* Bottom steel brand */}
      <div className="container max-w-7xl pb-4">
        <BrandSlab Tag="h2" />
      </div>
    </main>
  );
}
