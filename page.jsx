"use client";

import React, { useState } from "react";
import Script from "next/script";

/* -------------------------------
   Small UI helpers
-------------------------------- */
function PhoneCTA({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        padding: "12px 20px",
        fontWeight: 700,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        background: "#0ea5e9",
        color: "white",
        textDecoration: "none",
      }}
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
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        padding: "12px 20px",
        fontWeight: 700,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        background: "#16a34a",
        color: "white",
        textDecoration: "none",
      }}
      aria-label="Text A&H Dispatch"
    >
      Text Dispatch (Prefilled)
    </a>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontWeight: 800, fontSize: "1.75rem" }}>{value}</div>
      <div style={{ opacity: 0.8, fontSize: 12 }}>{label}</div>
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700 }}>{title}</h2>
          {subtitle && <p style={{ marginTop: 8, opacity: 0.8 }}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* -------------------------------
   Page (Home)
-------------------------------- */
export default function Home() {
  return (
    <main
      style={{
        fontFamily: "system-ui, Arial, sans-serif",
        color: "#111827",
        background: "#f9fafb",
      }}
    >
      {/* TikTok embed script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />

      {/* Top bar */}
      <div
        style={{
          width: "100%",
          background: "black",
          color: "white",
          fontSize: 14,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "8px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>🚨 24/7 Towing & Recovery • Pecos, TX & Reeves County</span>
          <a
            href="mailto:ah.towing.recovery23@gmail.com"
            style={{ color: "white", opacity: 0.9, textDecoration: "none" }}
          >
            ah.towing.recovery23@gmail.com
          </a>
        </div>
      </div>

      {/* Header / Nav */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(6px)",
          background: "rgba(255,255,255,0.8)",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div
              style={{
                height: 40,
                width: 40,
                borderRadius: 12,
                background: "black",
                color: "white",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
              }}
            >
              A&H
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>A&H Towing & Recovery, LLC</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                Pecos • Reeves County • I-20 • US-285
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 16,
              fontSize: 14,
            }}
          >
            <a href="#services">Services</a>
            <a href="#coverage">Coverage</a>
            <a href="#tiktok">Videos</a>
            <a href="#fleet">Fleet</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <PhoneCTA />
        </div>
      </div>

      {/* Hero */}
      <section style={{ overflow: "hidden" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "48px 16px",
            display: "grid",
            gap: 24,
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.2,
                fontWeight: 800,
              }}
            >
              Fast, Friendly,{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#38bdf8",
                  textDecorationThickness: 4,
                }}
              >
                Local
              </span>{" "}
              Towing in Pecos, TX
            </h1>
            <p style={{ marginTop: 12, fontSize: 18, opacity: 0.9 }}>
              Stuck on I-20 or US-285? Call or text A&H for 24/7 towing,
              winch-outs, roadside assistance, and accident recovery.
              Professional operators. Transparent pricing.
            </p>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <PhoneCTA />
              <a
                href="#contact"
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: 16,
                  padding: "12px 20px",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#111827",
                }}
              >
                Share Location & Text Us
              </a>
            </div>
            <div
              style={{
                marginTop: 24,
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 16,
              }}
            >
              <Stat label="Avg. ETA (local)" value="< 30 min" />
              <Stat label="5-Star Reviews" value="100+" />
              <Stat label="Since" value="2024" />
            </div>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              minHeight: 300,
              background: "black",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <iframe
              title="Google Map — A&H Shop"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              loading="lazy"
              src="https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos%2C%20TX%2079772&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        title="Towing & Roadside Services"
        subtitle="Call for immediate dispatch or text us your location."
      >
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          {[
            {
              title: "Light-Duty Towing",
              desc: "Cars, SUVs, pickups • Local & long-distance • Flatbed & wheel-lift.",
            },
            {
              title: "Winch-Outs & Recovery",
              desc: "Ditch extractions, stuck in sand/mud, off-road recovery, accident scenes.",
            },
            {
              title: "Roadside Assistance",
              desc: "Jump starts, tire changes, lockouts, fuel delivery, battery service.",
            },
            {
              title: "Private Property/Impounds",
              desc: "Property manager support • Compliance signage • Vehicle relocation.",
            },
            {
              title: "Equipment Transport",
              desc: "Small machinery, tool boxes, sheds • Call for dimensions and rates.",
            },
            {
              title: "Commercial Accounts",
              desc: "Fleet priority, direct billing, monthly reporting, dedicated point-of-contact.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: 24,
                background: "white",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700 }}>{card.title}</div>
              <p style={{ marginTop: 8, opacity: 0.9 }}>{card.desc}</p>
              <div
                style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}
              >
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
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "2fr 1fr",
            alignItems: "start",
          }}
        >
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          >
            <iframe
              title="Coverage Map"
              style={{ width: "100%", height: 360, border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps/d/u/0/embed?mid=1&ehbc=2E312F"
            />
          </div>
          <ul style={{ fontSize: 14, lineHeight: 1.6 }}>
            {[
              "Pecos, TX (Home Base)",
              "Toyah • Barstow • Mentone",
              "Monahans • Fort Stockton",
              "Loving County & Reeves County",
              "I-20, US-285, TX-17 Corridors",
            ].map((x) => (
              <li key={x}>📍 {x}</li>
            ))}
            <li style={{ paddingTop: 8 }}>
              <a href="#contact" style={{ textDecoration: "underline" }}>
                Need coverage beyond this? Ask us →
              </a>
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
        <div
          style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3,1fr)" }}
        >
          {["6749520869598481669", "7118714547709648134", "7261479261679377669"].map(
            (id) => (
              <div
                key={id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "white",
                }}
              >
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@285302ditchking/video/${id}`}
                  data-video-id={id}
                  style={{ maxWidth: 605, minWidth: 325 }}
                >
                  <section>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.tiktok.com/@285302ditchking"
                    >
                      @285302ditchking
                    </a>
                    <p>Field footage from recent recoveries. #towing #pecostx</p>
                  </section>
                </blockquote>
              </div>
            )
          )}
        </div>
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
          Don’t see the videos? Make sure third-party scripts are allowed, or
          replace with uploaded MP4s.
        </p>
      </Section>

      {/* Fleet */}
      <Section id="fleet" title="Our Fleet" subtitle="Well-maintained trucks and certified operators.">
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3,1fr)" }}>
          {[
            { name: "Flatbed Rollback", details: "For AWD/low-clearance vehicles and local transports." },
            { name: "Wheel-Lift Unit", details: "Quick response for tight spaces and short-haul tows." },
            { name: "Recovery Rig", details: "Winch-outs, ditch recoveries, scene support." },
          ].map((t) => (
            <div key={t.name} style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 24, background: "white" }}>
              <div style={{ fontWeight: 600 }}>{t.name}</div>
              <div style={{ marginTop: 8, opacity: 0.9 }}>{t.details}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" title="What Neighbors Say" subtitle="Real customers. Real service.">
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3,1fr)" }}>
          {[
            { q: "Fast and friendly—had us off the shoulder in 20 minutes.", n: "J. Martinez" },
            { q: "Professional recovery after a ditch slide. Zero damage.", n: "D. Lopez" },
            { q: "Transparent price and great communication.", n: "S. Nguyen" },
          ].map((r, i) => (
            <figure key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 24, background: "white" }}>
              <blockquote style={{ fontStyle: "italic" }}>“{r.q}”</blockquote>
              <figcaption style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>— {r.n}</figcaption>
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

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 16px",
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(4,1fr)",
            fontSize: 14,
          }}
        >
          <div>
            <div style={{ fontWeight: 700 }}>A&H Towing & Recovery, LLC</div>
            <p style={{ marginTop: 8, opacity: 0.8 }}>
              Serving Pecos and Reeves County with reliable towing, recovery, and
              roadside assistance.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Quick Links</div>
            <ul style={{ marginTop: 8, lineHeight: 1.6 }}>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#coverage">Coverage</a>
              </li>
              <li>
                <a href="#tiktok">Videos</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Social</div>
            <ul style={{ marginTop: 8, lineHeight: 1.6 }}>
              <li>
                <a
                  href="https://www.tiktok.com/@285302ditchking"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Contact</div>
            <p style={{ marginTop: 8 }}>
              <a href="tel:+14328424578">(432) 842-4578</a>
              <br />
              <a href="mailto:ah.towing.recovery23@gmail.com">
                ah.towing.recovery23@gmail.com
              </a>
              <br />
              2712 W F Street, Pecos, TX 79772
            </p>
          </div>
        </div>
      </footer>

      {/* JSON-LD (LocalBusiness) */}
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
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Light-Duty Towing" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Winch-Outs & Recovery" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Roadside Assistance" },
              },
            ],
          }),
        }}
      />
    </main>
  );
}

/* -------------------------------
   Contact Section (with GPS + SMS)
-------------------------------- */
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
        setLocStatus("Location failed: " + err.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  const mapsLink = coords ? `https://maps.google.com/?q=${coords.lat},${coords.lng}` : "";
  const smsBody =
    `Tow request from ${name || "(name)"}. ` +
    `Callback: ${callback || "(phone)"}. ` +
    `Vehicle: ${vehicle || "(Y/M/M)"}. ` +
    `Issue: ${issue || "(describe)"} . ` +
    `Location: ` +
    (coords ? `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)} ${mapsLink}` : "(share location)");

  return (
    <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 24, background: "white" }}>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: 12 }}>
          <label style={{ display: "grid", gap: 4 }}>
            <span style={{ fontSize: 14 }}>Name</span>
            <input
              style={{ border: "1px solid #d1d5db", borderRadius: 12, padding: "8px 10px" }}
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label style={{ display: "grid", gap: 4 }}>
            <span style={{ fontSize: 14 }}>Callback Phone</span>
            <input
              style={{ border: "1px solid #d1d5db", borderRadius: 12, padding: "8px 10px" }}
              placeholder="(###) ###-####"
              value={callback}
              onChange={(e) => setCallback(e.target.value)}
              required
            />
          </label>
          <label style={{ display: "grid", gap: 4 }}>
            <span style={{ fontSize: 14 }}>Vehicle</span>
            <input
              style={{ border: "1px solid #d1d5db", borderRadius: 12, padding: "8px 10px" }}
              placeholder="Year / Make / Model"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </label>
          <label style={{ display: "grid", gap: 4 }}>
            <span style={{ fontSize: 14 }}>Issue</span>
            <textarea
              style={{ border: "1px solid #d1d5db", borderRadius: 12, padding: "8px 10px" }}
              rows={3}
              placeholder="Flat tire, no-start, accident, stuck, etc."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </label>

          <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12, display: "grid", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Share GPS Location</span>
              <button
                type="button"
                onClick={requestLocation}
                style={{ border: "1px solid #d1d5db", borderRadius: 10, padding: "6px 10px", fontSize: 14, background: "white" }}
              >
                Use my GPS
              </button>
            </div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              Status: {locStatus}
              {coords && (
                <>
                  <br />
                  Captured: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}{" "}
                  <a href={mapsLink} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>
                    Open map
                  </a>
                </>
              )}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            <PhoneCTA />
            <SmsCTA body={smsBody} />
          </div>
          <p style={{ fontSize: 12, opacity: 0.7 }}>
            Tip: The green button opens your SMS app with all details filled in, including GPS if allowed.
          </p>
        </form>
      </div>

      <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 24, background: "#f9fafb" }}>
        <div style={{ fontWeight: 600 }}>Call or Visit</div>
        <p style={{ marginTop: 8, fontSize: 14 }}>
          Phone: <a href="tel:+14328424578">(432) 842-4578</a>
          <br />
          Email:{" "}
          <a href="mailto:ah.towing.recovery23@gmail.com">
            ah.towing.recovery23@gmail.com
          </a>
        </p>
        <p style={{ marginTop: 10, fontSize: 14 }}>
          Address: 2712 W F Street, Pecos, TX 79772
        </p>
        <p style={{ marginTop: 10, fontSize: 14 }}>Hours: 24/7 Dispatch</p>
        <div style={{ marginTop: 16 }}>
          <iframe
            title="Shop Map"
            style={{ width: "100%", height: 220, border: 0, borderRadius: 12 }}
            loading="lazy"
            src="https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos%2C%20TX%2079772&output=embed"
          />
        </div>
        <div style={{ marginTop: 16, fontSize: 12, opacity: 0.7 }}>
          Prefer web submission? Hook this form to Formspree/Formspark/Twilio
          Functions to receive texts server-side.
        </div>
      </div>
    </div>
  );
}
