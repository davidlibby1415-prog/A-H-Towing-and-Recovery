"use client";

import React from "react";
import Link from "next/link";

/* ========= Shared constants (match main page contact info) ========= */

const SERVICE_PHONE_DISPLAY = "(432) 842-4578";
const SERVICE_PHONE_HREF = "tel:+14328424578";
const SERVICE_EMAIL = "ah.towing.recovery23@gmail.com";
const SERVICE_AREAS = [
  "Pecos (Home Base)",
  "Reeves County",
  "Fort Stockton",
  "Monahans",
  "Kermit",
  "Balmorhea",
  "Pyote",
  "Toyah",
  "Grandfalls",
  "Wink",
  "Midland/Odessa Metro & I-20 Corridor",
  "US-285",
  "TX-17",
  "Oilfield Routes",
];

/* =================== Helpers matching main page style =================== */

function AnimBorder({ children, className = "" }) {
  return (
    <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>
      {children}
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
    </div>
  );
}

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

function BrandSlab({ Tag = "h1" }) {
  return (
    <AnimBorder>
      <SteelPanel padded={false} className="px-2 py-1 text-center">
        <Tag
          className="font-black tracking-tight"
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
            fontSize: "clamp(32px, 5vw, 64px)",
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

/* Simple CTA buttons */

function CallNowButton({ className = "" }) {
  return (
    <a
      href={SERVICE_PHONE_HREF}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[220px] ${className}`}
    >
      Call Now • {SERVICE_PHONE_DISPLAY}
    </a>
  );
}

function BackHomeButton({ className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[180px] ${className}`}
    >
      ← Back to Main Page
    </Link>
  );
}

/* Video card (optional) */

function HeroVideoCard({ src }) {
  if (!src) return null;
  return (
    <AnimBorder>
      <div className="rounded-[22px] overflow-hidden border border-white/15 bg-black">
        <video
          className="w-full h-full max-h-[420px] object-cover"
          src={src}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          controls={false}
        />
      </div>
    </AnimBorder>
  );
}

/* ======================= Main ServicePage component ======================= */

export default function ServicePage({
  title,
  subtitle,
  bullets = [],
  badges = [],
  heroVideoSrc,
}) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top brand + quick contact line */}
      <section className="pt-6 pb-3">
        <div className="container max-w-6xl">
          <BrandSlab Tag="h1" />
          <p className="mt-3 text-center text-sm md:text-base font-extrabold text-amber-200 drop-shadow">
            Professional towing, recovery, and roadside assistance for Pecos &amp; oilfield
            routes across West Texas.
          </p>
          <p className="mt-1 text-center text-xs md:text-sm text-gray-200">
            Call{" "}
            <a
              href={SERVICE_PHONE_HREF}
              className="font-semibold underline underline-offset-4"
            >
              {SERVICE_PHONE_DISPLAY}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${SERVICE_EMAIL}`}
              className="font-semibold underline underline-offset-4"
            >
              {SERVICE_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-14">
        <div className="container max-w-6xl space-y-8">
          {/* Text content / bullets */}
          <AnimBorder>
            <SteelPanel>
              {/* Badges row */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {badges.map((b, i) => (
                    <span
                      key={i}
                      className="rounded-2xl border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide font-semibold"
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              )}

              {/* Title with same shading vibe as main page */}
              <div className="inline-block rounded-2xl px-4 py-2 bg-black/20 backdrop-blur-sm mb-4">
                <h1
                  className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-sky-300"
                  style={{
                    textShadow: "0 2px 14px rgba(0,0,0,.6)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {title}
                </h1>
              </div>

              {subtitle && (
                <p className="text-base md:text-lg text-white/90 max-w-3xl">
                  {subtitle}
                </p>
              )}

              {bullets && bullets.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <span className="text-white/90 text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <CallNowButton />
                <BackHomeButton />
              </div>
            </SteelPanel>
          </AnimBorder>

          {/* Hero video (if provided) */}
          <HeroVideoCard src={heroVideoSrc} />

          {/* Service area + dark-mode map centered on Pecos, TX */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Service area text */}
            <AnimBorder>
              <SteelPanel>
                <div className="text-center mb-3">
                  <BubbleBlock className="!px-5 !py-2">
                    <span className="font-extrabold text-[clamp(18px,3vw,24px)]">
                      Service Area
                    </span>
                  </BubbleBlock>
                </div>
                <p className="text-sm md:text-base text-white/90 mb-3">
                  Fast response across Pecos, surrounding towns, and key oilfield routes.
                </p>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  {SERVICE_AREAS.join(" • ")}
                </p>
              </SteelPanel>
            </AnimBorder>

            {/* Dark-mode OSM map pinned on Pecos, TX */}
            <AnimBorder>
              <SteelPanel padded={false} className="overflow-hidden">
                <iframe
                  title="Pecos, TX Service Map (Dark Mode)"
                  className="w-full h-[260px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-103.8%2C31.3%2C-103.2%2C31.6&layer=mapnik&marker=31.42%2C-103.49"
                  style={{
                    filter:
                      "invert(1) hue-rotate(180deg) saturate(0.6) brightness(0.8)",
                    border: 0,
                  }}
                />
              </SteelPanel>
            </AnimBorder>
          </div>
        </div>
      </section>
    </main>
  );
}
