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
      Text Dispatch (Prefilled)
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
      {/* TikTok embed script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />

      {/* Top bar (charcoal) */}
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

      {/* Header / Nav (charcoal) */}
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
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PhoneCTA />
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-black/10 bg-white/70 backdrop-blur hover:bg-white"
              >
                Share Location & Text Us
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat label="Avg. ETA (local)" value="< 30 min" />
              <Stat label="5-Star Reviews" value="100+" />
              <Stat label="Since" value="2024" />
            </div>
          </div>

          {/* Map: public embed, no login required */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px] md:min-h-[420px] bg-black">
            <iframe
              title="Google Map — A&H Shop"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src={
                // Public embed form (Share → Embed). Using query embed also avoids session/cookies.
                "https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos%2C%20TX%2079772&output=embed"
              }
            />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <div className="border-y border-black/10">
        <div className="container max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 py-6 text-sm">
          <div className="rounded-xl bg-white p-4 shadow-sm">✅ Licensed & Insured</div>
          <div className="rounded-xl bg-white p-4 shadow-sm">🕛 24/7 Dispatch</div>
          <div className="rounded-xl bg-white p-4 shadow-sm">🚚 Light & Medium Duty</div>
          <div className="rounded-xl bg-white p-4 shadow-sm">🧰 Roadside Assistance</div>
        </div>
      </div>

      {/* Services */}
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
            { title: "Commercial Accounts", desc: "Fleet priority, direct billing, monthly reporting, dedicated point-of-contact." },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-black/10 p-6 bg-white hover:shadow-md transition">
              <div className="text-lg font-bold">{card.title}</div>
              <p className="mt-2 text-sm opacity-90">{card.desc}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <PhoneCTA />
                <SmsCTA body={`Tow request for {Your Name}. Callback: {Your Phone}. Location: send GPS. Issue: {Flat tire / no-start}.`} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Coverage */}
      <Section
        id="coverage"
        title="Service Area"
        subtitle="Pecos • Reeves County • I-20 • US-285 • Surrounding oilfield routes"
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
                <span>📍</span><span>{x}</span>
              </li>
            ))}
            <li className="pt-3">
              <a className="underline" href="#contact">Need coverage beyond this? Ask us →</a>
            </li>
          </ul>
        </div>
      </Section>

      {/* TikTok */}
      <Section
        id="tiktok"
        title="On the Job: @285302ditchking"
        subtitle="Real recoveries, tips, and the day-to-day. Follow along on TikTok."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {["6749520869598481669", "7118714547709648134", "7261479261679377669"].map((id) => (
            <div key={id} className="rounded-2xl overflow-hidden border border-black/10 bg-white">
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@285302ditchking/video/${id}`}
                data-video-id={id}
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section>
                  <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@285302ditchking">
                    @285302ditchking
                  </a>
                  <p>Field footage from recent recoveries. #towing #pecostx</p>
                </section>
              </blockquote>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs opacity-70">
          Don’t see the videos? Make sure third-party scripts are allowed, or replace with uploaded MP4s.
        </p>
      </Section>

      {/* Fleet */}
      <Section id="fleet" title="Our Fleet" subtitle="Well-maintained trucks and certified operators.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Flatbed Rollback", details: "For AWD/low-clearance vehicles and local transports." },
            { name: "Wheel-Lift Unit", details: "Quick response for tight spaces and short-haul tows." },
            { name: "Recovery Rig", details: "Winch-outs, ditch recoveries, scene support." },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/10 p-6 bg-white">
              <div className="font-semibold">{t.name}</div>
              <div className="mt-2 opacity-90">{t.details}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" title="What Neighbors Say" subtitle="Real customers. Real service.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: "Fast and friendly—had us off the shoulder in 20 minutes.", n: "J. Martinez" },
            { q: "Professional recovery after a ditch slide. Zero damage.", n: "D. Lopez" },
            { q: "Transparent price and great communication.", n: "S. Nguyen" },
          ].map((r, i) => (
            <figure key={i} className="rounded-2xl border border-black/10 p-6 bg-white">
              <blockquote className="italic">“{r.q}”</blockquote>
              <figcaption className="mt-3 text-sm opacity-80">— {r.n}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Request a Tow"
        subtitle="Fastest: Call or Text. Use the tools below to share your exact location and details in one tap."
      >
        <ContactSection />
      </Section>

      {/* Footer (charcoal) */}
      <footer className="bg-ahCharcoal text-ahText">
        <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-10 text-sm">
          <div>
            <div className="font-bold text-white drop-shadow-sm">A&amp;H Towing & Recovery, LLC</div>
            <p className="mt-2 opacity-90">
              Serving Pecos and Reeves County with reliable towing, recovery, and roadside assistance.
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://ahtowing.example/#localbusiness",
            name: "A&H Towing & Recovery, LLC",
            url: "https://ahtowing.example/",
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
              { "@type": "AdministrativeArea", name: "Reeves County" },
              { "@type": "AdministrativeArea", name: "Loving County" },
            ],
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: ["https://www.tiktok.com/@285302ditchking"],
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Light-Duty Towing" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Winch-Outs & Recovery" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roadside Assistance" } },
            ],
          }),
        }}
      />
    </main>
  );
}

/* ---------- Contact (GPS + SMS) ---------- */
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
    `Tow request from ${name || "(name)"}. ` +
    `Callback: ${callback || "(phone)"} . ` +
    `Vehicle: ${vehicle || "(Y/M/M)"} . ` +
    `Issue: ${issue || "(describe)"} . ` +
    `Location: ` +
    (coords ? `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)} ${mapsLink}` : "(share location)");

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
          <p className="text-xs opacity-70">
            Tip: The red button opens your SMS app with all details filled in, including GPS if allowed.
          </p>
        </form>
      </div>

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
            src={"https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos%2C%20TX%2079772&output=embed"}
          />
        </div>
        <div className="mt-6 text-xs opacity-80">
          Prefer web submission? Hook this form to Formspree/Formspark/Twilio Functions to receive texts server-side.
        </div>
      </div>
    </div>
  );
}
