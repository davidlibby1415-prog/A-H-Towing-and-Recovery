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
            <SteelPanel
              padded={false}
              className="px-4 py-3 text-center bg-black/70"
            >
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
            <h1 className="text-3xl md:text-4xl font-black tracking-tight
