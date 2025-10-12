import React, { useState } from "react";
import Head from "next/head";
import Script from "next/script";

// --- CTA Components ---
function PhoneCTA({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      style={{ background: "#0ea5e9", color: "white" }}
      aria-label="Call A&H Towing & Recovery"
    >
      24/7 Dispatch • (432) 842‑4578
    </a>
  );
}

function SmsCTA({ className = "", body }) {
  const dispatchNumber = "+14328424578";
  const href = `sms:${dispatchNumber}?&body=${encodeURIComponent(body)}`;
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      style={{ background: "#16a34a", color: "white" }}
      aria-label="Text A&H Dispatch"
    >
      Text Dispatch (Prefilled)
    </a>
  );
}

// --- Utility Components ---
function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg opacity-80">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

// --- Main Page Export ---
export default function AHTowingHome() {
  return (
    <>
      <Head>
        <title>A&H Towing & Recovery, LLC — Pecos TX</title>
        <meta name="description" content="Fast, friendly, local towing and roadside service in Pecos, TX. Call 24/7 for dispatch." />
        <link rel="icon" href="/favicon.ico" />
        {/* SEO: LocalBusiness schema */}
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
              image: "https://ahtowing.example/og.jpg",
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
              sameAs: [
                "https://www.tiktok.com/@285302ditchking",
              ],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Light-Duty Towing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Winch-Outs & Recovery" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roadside Assistance" } },
              ],
            }),
          }}
        />
      </Head>
      {/* TikTok Embed Script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />

      <main className="font-sans text-gray-900">
        {/* Top bar */}
        <div className="w-full bg-black text-white text-sm">
          <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
            <span>🚨 24/7 Towing & Recovery • Pecos, TX & Reeves County</span>
            <a href="mailto:ah.towing.recovery23@gmail.com" className="opacity-90 hover:opacity-100">ah.towing.recovery23@gmail.com</a>
          </div>
        </div>
        {/* ... rest of homepage ... */}
        {/* Contact Section */}
        <Section id="contact" title="Request a Tow" subtitle="Fastest: Call or Text. Use the tools below to share your exact location and details in one tap.">
          <ContactSection />
        </Section>
        {/* ... footer ... */}
      </main>
    </>
  );
}

// --- Contact Section with SMS + Location capture ---
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
      (err) => {
        setLocStatus("Sorry, the app has failed to capture your exact location, please text a location or call us at (432)842-4578");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  const mapsLink = coords ? `https://maps.google.com/?q=${coords.lat},${coords.lng}` : "";
  const smsBody =
    `Tow request from ${name || "(name)"}. ` +
    `Callback: ${callback || "(phone)"}. ` +
    `Vehicle: ${vehicle || "(Y/M/M)"}. ` +
    `Issue: ${issue || "(describe)"}. ` +
    `Location: ` +
    (coords
      ? `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)} ${mapsLink}`
      : "(share location)");

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl border p-6">
        <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
          {/* ... form fields ... */}
          <div className="grid gap-2 rounded-xl border p-3">
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
            <div className="text-xs opacity-70">
              Status: {locStatus}
              {coords && (
                <>
                  <br />
                  Captured: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}{" "}
                  <a className="underline" href={mapsLink} target="_blank" rel="noreferrer">Open map</a>
                </>
              )}
            </div>
          </div>
          {/* ... CTA buttons ... */}
        </form>
      </div>
      {/* ... right column ... */}
    </div>
  );
}