"use client";

import React, { useState } from "react";
import Script from "next/script";

/* ---------- Reusable UI ---------- */
function PhoneCTA({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      aria-label="Call A&H Towing & Recovery"
    >
      24/7 Dispatch • (432) 842-4578
    </a>
  );
}

function SmsCTA({ className = "", body }) {
  const dispatchNumber = "+14328424578";
  const href = `sms:${dispatchNumber}?&body=${encodeURIComponent(body)}`;
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      aria-label="Text A&H Dispatch"
    >
      Text Dispatch
    </a>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold drop-shadow">{value}</div>
      <div className="text-xs md:text-sm opacity-90">{label}</div>
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="container max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight drop-shadow-sm text-ahCharcoal">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg opacity-90">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <main className="text-ahCharcoal bg-ahChrome bg-chrome min-h-screen">
      <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />

      {/* Top bar */}
      <div className="w-full bg-ahCharcoal text-ahText text-sm">
        <div className="container max-w-7xl flex items-center justify-between py-2">
          <span className="font-semibold">🚨 24/7 Towing & Recovery • Pecos, TX & Reeves County</span>
          <a
            href="mailto:ah.towing.recovery23@gmail.com"
            className="underline underline-offset-4 hover:opacity-100"
          >
            ah.towing.recovery23@gmail.com
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-ahCharcoal text-ahText border-b border-black/30">
        <div className="container max-w-7xl flex items-center gap-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center font-bold shadow-cta">
              A&amp;H
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white drop-shadow">A&amp;H Towing & Recovery, LLC</div>
              <div className="text-xs opacity-80">Pecos • Reeves County • I-20 • US-285</div>
            </div>
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#coverage" className="hover:opacity-80">Coverage</a>
            <a href="#tiktok" className="hover:opacity-80">Videos</a>
            <a href="#fleet" className="hover:opacity-80">Fleet</a>
            <a href="#reviews" className="hover:opacity-80">Reviews</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <PhoneCTA />
        </div>
      </header>

      {/* Hero */}
      <section className="overflow-hidden">
        <div className="container max-w-7xl grid md:grid-cols-2 gap-10 items-center pt-12 pb-16 md:pt-16 md:pb-24">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
              Fast, Friendly,{" "}
              <span className="underline decoration-ahAccent decoration-4 underline-offset-4">
                Local
              </span>{" "}
              Towing in Pecos, TX
            </h1>
            <p className="mt-4 text-lg opacity-95">
              Stuck on I-20 or US-285? Call or text A&amp;H for 24/7 towing, winch-outs,
              roadside assistance, and accident recovery. Professional operators. Transparent pricing.
            </p>

            {/* ✅ Updated Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PhoneCTA />
              <SmsCTA body={`Tow request for {Your Name}. Callback: {Your Phone}. Location: send GPS. Issue: {Flat tire / no-start}.`} />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat label="Avg. ETA (local)" value="< 30 min" />
              <Stat label="5-Star Reviews" value="100+" />
              <Stat label="Since" value="2024" />
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px] md:min-h-[420px] bg-black">
            <iframe
              title="Google Map — A&H Shop"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos%2C%20TX%2079772&output=embed"
            />
          </div>
        </div>
      </section>

      {/* ... (rest of your sections remain unchanged) */}
    </main>
  );
}
