"use client";

import React, { useState } from "react";
import Script from "next/script";

/* ---------- Reusable UI Components ---------- */
function PhoneCTA({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[240px] ${className}`}
      aria-label="Call A&H Towing & Recovery"
    >
      Call Dispatch Now! 24/7 Services
    </a>
  );
}

function SmsCTA({ className = "", body }) {
  const dispatchNumber = "+14328424578";
  const href = `sms:${dispatchNumber}?&body=${encodeURIComponent(body)}`;
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[240px] ${className}`}
      aria-label="Text A&H Dispatch"
    >
      Text Dispatch My Info &amp; Location
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
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight drop-shadow-sm text-ahCharcoal">
            {title}
          </h2>
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
          <span className="font-semibold">🚨 Live 24/7 Towing & Recovery • Pecos, TX & Oilfield Routes</span>
          <a href="mailto:ah.towing.recovery23@gmail.com" className="underline underline-offset-4 hover:opacity-100">
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
              <div className="text-xs opacity-80">Pecos • Reeves County • I-20 • US-285 • Oilfield</div>
            </div>
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#coverage" className="hover:opacity-80">Coverage</a>
            <a href="#proof" className="hover:opacity-80">Training & Proof</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <PhoneCTA />
        </div>
      </header>

      {/* Big Brand Name Under Header */}
      <div className="container max-w-7xl pt-6">
        <h1 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
          A&amp;H Towing &amp; Recovery, LLC
        </h1>
      </div>

      {/* Hero */}
      <section className="overflow-hidden">
        <div className="container max-w-7xl grid md:grid-cols-2 gap-10 items-center pt-8 pb-14 md:pt-10 md:pb-20">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight drop-shadow">
              Fast, Friendly, <span className="underline decoration-ahAccent decoration-4 underline-offset-4">Local</span> Towing
              — From Small Cars to Oilfield Heavy
            </h2>
            <p className="mt-4 text-lg opacity-95">
              Stranded on I-20 or US-285? We dispatch immediately for light, medium & heavy-duty tows,
              winch-outs, accident recovery, and oilfield transport. Trained operators. Clear pricing.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PhoneCTA />
              <SmsCTA
                body={`Tow request from {Your Name}. Callback: {Your Phone}. Passengers: {#}. Vehicle: {Y/M/M}. Issue: {Flat tire / no-start / accident}. Location: {share GPS}.`}
              />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat label="Local Response" value="< 30 min" />
              <Stat label="Operating" value="24/7/365" />
              <Stat label="Service Area" value="Pecos & Oilfield" />
            </div>
          </div>

          {/* Map with centered heading */}
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

      {/* Trust Signals */}
      <div className="border-y border-black/10 bg-white/70 backdrop-blur">
        <div className="container max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 py-6 text-sm">
          <div className="rounded-xl bg-white p-4 shadow-sm">✅ Licensed & Insured</div>
          <div className="rounded-xl bg-white p-4 shadow-sm">🕛 24/7 Dispatch</div>
          <div className="rounded-xl bg-white p-4 shadow-sm">🚚 Light • Medium • Heavy</div>
          <div className="rounded-XL bg-white p-4 shadow-sm">🤝 Works with First Responders</div>
        </div>
      </div>

      {/* Services */}
      <Section
        id="services"
        title="24/7 Towing & Roadside — Built for West Texas and Oilfield Conditions"
        subtitle="From small tows to oilfield equipment moves, we’re ready when you need us."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Column 1: Towing & Recovery */}
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛻</span>
              <h3 className="text-xl font-bold">24/7 Towing Services</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✔️ Wrecker Services</li>
              <li>✔️ Accident Removal</li>
              <li>✔️ Light Weight Towing (Cars, SUVs, Small Trucks)</li>
              <li>✔️ Rollback Towing</li>
              <li>✔️ Flatbed Services</li>
              <li>✔️ Heavy Duty & Commercial Towing</li>
              <li>✔️ Long & Short Distance Towing</li>
              <li>✔️ Off-Road Recovery</li>
              <li>✔️ Oilfield Equipment Transport</li>
            </ul>
            <div className="mt-5 flex gap-2 flex-wrap">
              <PhoneCTA />
              <SmsCTA
                body={`Tow request: {Y/M/M}. Heavy/Oilfield?: {Yes/No}. Passengers: {#}. Issue: {describe}. Location: {share GPS}. Callback: {phone}.`}
              />
            </div>
          </div>

          {/* Column 2: Roadside */}
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧰</span>
              <h3 className="text-xl font-bold">Emergency Roadside Assistance</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>⛽ Fuel Delivery</li>
              <li>🔋 Jump Starts</li>
              <li>🔑 Lockouts</li>
              <li>🛞 Tire Changes</li>
            </ul>
            <div className="mt-5 flex gap-2 flex-wrap">
              <PhoneCTA />
              <SmsCTA
                body={`Roadside request: {Fuel/Jump/Lockout/Tire}. Vehicle: {Y/M/M}. Passengers: {#}. Location: {share GPS}. Callback: {phone}.`}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Coverage */}
      <Section
        id="coverage"
        title="Service Area"
        subtitle="Pecos • Reeves County • I-20 • US-285 • TX-17 • Oilfield routes"
      >
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow border border-black/10">
            <iframe
              title="Coverage Map"
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps/d/u/0/embed?mid=1&ehbc=2E312F"
            />
          </div>
          <ul className="space-y-2 text-sm">
            {[
              "Pecos, TX (Home Base)",
              "Toyah • Barstow • Mentone",
              "Monahans • Fort Stockton",
              "Loving County & Reeves County",
              "I-20, US-285, TX-17 Corridors",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2">
                <span>📍</span>
                <span>{x}</span>
              </li>
            ))}
            <li className="pt-3">
              <a className="underline" href="#contact">
                Need coverage beyond this? Ask us →
              </a>
            </li>
          </ul>
        </div>
      </Section>

      {/* Proof / Training — TikTok Embeds */}
      <Section
        id="proof"
        title="Training & Community — Why Locals Trust A&H"
        subtitle="We train for heavy hauling, exercise with first responders, and handle oilfield moves."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {/* Heavy hauling training */}
          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@285302ditchking/video/7501393555433262367"
              data-video-id="7501393555433262367"
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              <section>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@285302ditchking">
                  @285302ditchking
                </a>
                <p>Heavy hauling training — precision, safety, and control.</p>
              </section>
            </blockquote>
          </div>

          {/* First responders exercise */}
          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@285302ditchking/video/7500641039896628510"
              data-video-id="7500641039896628510"
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              <section>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@285302ditchking">
                  @285302ditchking
                </a>
                <p>A&amp;H operators exercise with local first responders — teamwork in action.</p>
              </section>
            </blockquote>
          </div>

          {/* Oilfield equipment / Pulling Unit — no job too big */}
          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@285302ditchking/video/7480739591905938719"
              data-video-id="7480739591905938719"
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              <section>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@285302ditchking">
                  @285302ditchking
                </a>
                <p>Oilfield hauling — Pulling Unit move. No job too big.</p>
              </section>
            </blockquote>
          </div>
        </div>
        <p className="mt-4 text-xs opacity-70">
          Tip: If videos don’t appear, enable third-party scripts or upload MP4s as a fallback.
        </p>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Request a Tow"
        subtitle="Fastest: Call or Text. Share your exact location and key details in one tap."
      >
        <ContactSection />
      </Section>

      {/* Big Brand Name Above Footer */}
      <div className="container max-w-7xl pb-2">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm">
          A&amp;H Towing &amp; Recovery, LLC
        </h2>
      </div>

      {/* Footer */}
      <footer className="bg-ahCharcoal text-ahText mt-6">
        <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-10 text-sm">
          <div>
            <div className="font-bold text-white drop-shadow-sm">A&amp;H Towing & Recovery, LLC</div>
            <p className="mt-2 opacity-90">Reliable towing, recovery, and roadside assistance for Pecos & oilfield routes.</p>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 space-y-1">
              <li><a className="underline" href="#services">Services</a></li>
              <li><a className="underline" href="#coverage">Coverage</a></li>
              <li><a className="underline" href="#proof">Training & Proof</a></li>
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "A&H Towing & Recovery, LLC",
            telephone: "+14328424578",
            email: "ah.towing.recovery23@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2712 W F Street",
              addressLocality: "Pecos",
              addressRegion: "TX",
              postalCode: "79772",
              addressCountry: "US",
            },
            areaServed: [
              { "@type": "City", name: "Pecos" },
              { "@type": "AdministrativeArea", name: "Reeves County" }
            ],
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: ["https://www.tiktok.com/@285302ditchking"]
          }),
        }}
      />
    </main>
  );
}

/* ---------- Contact Section (with GPS + Passengers) ---------- */
function ContactSection() {
  const [name, setName] = useState("");
  const [callback, setCallback] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [passengers, setPassengers] = useState("");
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
    `Tow request from ${name || "(name)"}. Callback: ${callback || "(phone)"} . ` +
    `Vehicle: ${vehicle || "(Y/M/M)"} . Passengers: ${passengers || "(#)"} . ` +
    `Issue: ${issue || "(describe)"} . ` +
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
            <span className="text-sm">Number of Passengers</span>
            <input
              type="number"
              min="1"
              max="8"
              className="rounded-xl border px-3 py-2"
              placeholder="e.g., 2"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
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
          <p className="text-xs opacity-70">
            Tip: The red button opens your SMS app with all details filled in, including GPS if allowed.
          </p>
        </form>
      </div>

      {/* Right column (contact info) */}
      <div className="rounded-2xl border border-black/10 p-6 bg-white/70 backdrop-blur">
        <div className="font-semibold">Call or Visit</div>
        <p className="mt-2 text-sm">
          Phone:{" "}
          <a className="underline" href="tel:+14328424578">
            (432) 842-4578
          </a>
          <br />
          Email:{" "}
          <a className="underline" href="mailto:ah.towing.recovery23@gmail.com">
            ah.towing.recovery23@gmail.com
          </a>
        </p>
        <p className="mt-4 text-sm">Address: 2712 W F Street, Pecos, TX 79772</p>
        <p className="mt-2 text-sm">Hours: 24/7 Dispatch</p>
        <div className="mt-6 rounded-xl overflow-hidden border border-black/10">
          <iframe
            title="Shop Map"
            className="w-full h-[220px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            src="https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos%2C%20TX%2079772&output=embed"
          />
        </div>
        <div className="mt-6 text-xs opacity-80">
          24/7 Professional Service - Call or Text Us!
        </div>
      </div>
    </div>
  );
}

