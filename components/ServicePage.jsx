// FILE: components/ServicePage.jsx
"use client";

import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

// Safe (no styled-jsx) gradient border
function AnimBorder({ children, className = "" }) {
  return (
    <div
      className={`p-[3px] rounded-[26px] bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 ${className}`}
      style={{ backgroundSize: "200% 200%" }}
    >
      {children}
    </div>
  );
}

// Diamond-plate style panel
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
          'linear-gradient(0deg, rgba(0,0,0,0.32), rgba(0,0,0,0.32)), url("/diamond-plate.jpg")',
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

function Bubble({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-2xl px-4 py-3 bg-black/55 text-white font-extrabold shadow ${className}`}
      style={{
        WebkitTextStroke: "0.25px rgba(0,0,0,.7)",
        textShadow: "0 1px 2px rgba(0,0,0,.6)",
      }}
    >
      {children}
    </div>
  );
}

export default function ServicePage({
  title,
  subtitle,
  bullets = [],
  badges = [],
  heroVideoSrc,
}) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* ===== HERO WITH BACKGROUND VIDEO (top, muted, loop) ===== */}
      <section
        className="relative isolate overflow-hidden"
        style={{ minHeight: "min(60vh, 900px)" }}
      >
        {heroVideoSrc ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            disablePictureInPicture
            poster="/fallback.jpg"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : null}

        {/* Readability overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, rgba(15,23,42,0.15), rgba(15,23,42,0.9))",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          {/* Company + phone on diamond plate */}
          <AnimBorder className="inline-block">
            <SteelPanel padded={false} className="px-4 py-3 text-center bg-black/70">
              <div className="text-[11px] md:text-xs font-semibold tracking-wide text-amber-300 uppercase">
                {siteConfig.businessName}
              </div>
              <div className="mt-1 text-lg md:text-xl font-extrabold tracking-tight text-white">
                Call Direct:{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="underline decoration-amber-400 decoration-2 underline-offset-4"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </SteelPanel>
          </AnimBorder>

          {/* Title + subtitle */}
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.8)]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 text-base md:text-lg text-slate-100/90">{subtitle}</p>
            ) : null}
          </div>

          {/* Badges */}
          {badges?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="rounded-full bg-black/60 border border-amber-300/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                >
                  {b.label}
                </span>
              ))}
            </div>
          ) : null}

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-black bg-amber-400 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 text-sm md:text-base"
            >
              Call Dispatch • {siteConfig.phone}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/30 bg-black/40 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 text-sm md:text-base"
            >
              Text &amp; GPS Request Form
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: bullets + service area */}
          <div className="md:col-span-2 space-y-6">
            <SteelPanel>
              <Bubble className="!bg-black/60 mb-4">
                <span className="text-[15px] md:text-lg font-extrabold">
                  What This Service Covers
                </span>
              </Bubble>
              {bullets?.length ? (
                <ul className="space-y-3 text-sm md:text-base">
                  {bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </SteelPanel>

            <SteelPanel>
              <h2 className="text-xl font-extrabold mb-2">Service Area</h2>
              <p className="text-sm md:text-base text-slate-100/90">
                Fast response across{" "}
                {siteConfig.serviceAreas?.join(", ") || "Pecos & West Texas"}.
                24/7 dispatch, day or night.
              </p>
            </SteelPanel>
          </div>

          {/* Right: quick contacts */}
          <div className="space-y-4">
            <SteelPanel>
              <h3 className="font-semibold text-lg">Need Help Right Now?</h3>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-2xl font-black text-amber-300 drop-shadow-[0_8px_18px_rgba(0,0,0,0.9)]"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-2 text-sm text-slate-100/80">
                Save our number as{" "}
                <span className="font-semibold">“A&amp;H Towing – Pecos”</span>.
              </p>
            </SteelPanel>

            <SteelPanel>
              <h3 className="font-semibold text-lg">Email Dispatch</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-sm underline underline-offset-4 decoration-amber-300"
              >
                {siteConfig.email}
              </a>
              <p className="mt-2 text-xs text-slate-100/80">
                Send PO#, unit, location, and callback number to speed things up.
              </p>
            </SteelPanel>

            <SteelPanel>
              <h3 className="font-semibold text-lg">Back to Main Page</h3>
              <Link
                href="/"
                className="mt-2 inline-flex text-sm underline underline-offset-4 decoration-amber-300"
              >
                Return to Home &amp; Request Form
              </Link>
            </SteelPanel>
          </div>
        </div>
      </section>
    </main>
  );
}
