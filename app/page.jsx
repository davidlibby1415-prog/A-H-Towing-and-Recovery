"use client";

import React, { useState } from "react";
import Script from "next/script";

/* ---------- Reusable UI Components ---------- */
function PhoneCTA({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      aria-label="Call A&H Towing & Recovery"
    >
      Call Dispatch Now! 24/7 Service
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
      Text Dispatch My Location!
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

      {/* Hero Section */}
      <section className="overflow-hidden">
        <div className="container max-w-7xl grid md:grid-cols-2 gap-10 items-center pt-12 pb-16 md:pt-16 md:pb-24">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
              Fast, Friendly,{" "}
              <span className="underline decoration-ahAccent decoration-4 underline-offset-4">
                and Professional
              </span>{" "}
              Towing in Pecos, TX
            </h1>
            <p className="mt-4 text-lg opacity-95">
              Stuck on I-20 or US-285? Call or text A&amp;H for 24/7 towing, winch-outs,
              roadside assistance, and accident recovery. Professional operators. Transparent pricing.
            </p>

            {/* ✅ Blue and Red Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PhoneCTA />
              <SmsCTA
                body={`Tow request for {Your Name}. Callback: {Your Phone}. Location: send GPS. Issue: {Flat tire / no-start}.`}
              />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat label="Avg. ETA (local)" value="< 30 min" />
              <Stat label="5-Star Reviews" value="100+" />
              <Stat label="Since" value="2024" />
            </div>
          </div>

          {/* ✅ Map with Centered Heading */}
          <div>
            <p className="font-bold text-lg md:text-xl mb-3 text-center text-ahCharcoal">
              A&amp;H Towing &amp; Recovery Office is Located at:
            </p>
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
        </div>
      </section>

      {/* Services Section */}
      <Section
        id="services"
        title="Towing & Roadside Services"
        subtitle="Call for immediate dispatch or text us your location."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Light-Duty Towing", desc: "Cars, SUVs, pickups • Local & long-distance • Flatbed & wheel-lift." },
            { title: "Winch-Outs & Recovery", desc: "Ditch extractions, stuck in sand/mud, off-road recovery, accident scenes." },
            { title: "Roadside Assistance", desc: "Jump starts, tire changes, lockouts, fuel delivery, battery service." },
            { title: "Private Property/Impounds", desc: "Property manager support • Compliance signage • Vehicle relocation." },
            { title: "Equipment Transport", desc: "Small machinery, tool boxes, sheds • Call for dimensions and rates." },
            { title: "Commercial Accounts", desc: "Fleet priority, direct billing, monthly reporting, dedicated contact." },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/10 p-6 bg-white hover:shadow-md transition"
            >
              <div className="text-lg font-bold">{card.title}</div>
              <p className="mt-2 text-sm opacity-90">{card.desc}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <PhoneCTA />
                <SmsCTA
                  body={`Tow request for {Your Name}. Callback: {Your Phone}. Location: send GPS. Issue: {${card.title}}.`}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Request a Tow"
        subtitle="Fastest: Call or Text. Share your location and details below."
      >
        <ContactSection />
      </Section>

      {/* Footer */}
      <footer className="bg-ahCharcoal text-ahText mt-10">
        <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-10 text-sm">
          <div>
            <div className="font-bold text-white drop-shadow-sm">
              A&amp;H Towing & Recovery, LLC
            </div>
            <p className="mt-2 opacity-90">
              Serving Pecos and Reeves County with reliable towing and recovery.
            </p>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 space-y-1">
              <li><a className="underline" href="#services">Services</a></li>
              <li><a className="underline" href="#coverage">Coverage</a></li>
              <li><a className="underline" href="#tiktok">Videos</a></li>
              <li><a className="underline" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Social</div>
            <ul className="mt-2 space-y-1">
              <li><a className="underline" href="https://www.tiktok.com/@285302ditchking" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a className="underline" href="#">Facebook</a></li>
              <li><a className="underline" href="#">Instagram</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <p className="mt-2">
              <a className="underline" href="tel:+14328424578">(432) 842-4578</a><br />
              <a className="underline" href="mailto:ah.towing.recovery23@gmail.com">ah.towing.recovery23@gmail.com</a><br />
              2712 W F Street, Pecos, TX 79772
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Contact Section ---------- */
function ContactSection() {
  const [name, setName] = useState("");
  const [callback, setCallback] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [issue, setIssue] = useState("");
  const [coords, setCoords] = useState(null);
  const [locStatus, setLocStatus] = useState("Idle");

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocStatus("Geolocation not supported");
      return;
    }
    setLocStatus("Requesting location…");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocStatus("Location captured");
      },
      (err) => setLocStatus("Location failed: " + err.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  const mapsLink = coords ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}` : "";
  const smsBody =
    `Tow request from ${name || "(name)"}. Callback: ${callback || "(phone)"} . Vehicle: ${vehicle || "(Y/M/M)"} . Issue: ${issue || "(describe)"} . ` +
    (coords ? `Location: ${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)} ${mapsLink}` : "(share location)");

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl border border-black/10 p-6 bg-white">
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input
              className="rounded-xl border px-3 py-2"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Callback Phone</span>
            <input
              className="rounded-xl border px-3 py-2"
              placeholder="(###) ###-####"
              value={callback}
              onChange={(e) => setCallback(e.target.value)}
              required
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Vehicle</span>
            <input
              className="rounded-xl border px-3 py-2"
              placeholder="Year / Make / Model"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Issue</span>
            <textarea
              className="rounded-xl border px-3 py-2"
              rows={3}
              placeholder="Flat tire, no-start, accident, stuck, etc."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </label>

          <div className="grid gap-2 rounded-xl border p-3 bg-white/70 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Share GPS Location</span>
              <button
                type="button"
                onClick={requestLocation}
                className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
              >
                Use my GPS
              </button>
            </div>
            <div className="text-xs opacity-80">
              Status: {locStatus}
              {coords && (
                <>
                  <br />
                  Captured: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}{" "}
                  <a className="underline" href={mapsLink} target="_blank" rel="noreferrer">
                    Open map
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <PhoneCTA />
            <SmsCTA body={smsBody} />
          </div>
        </form>
      </div>
    </div>
  );
}
