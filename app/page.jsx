"use client";

import React, { useRef, useState, useEffect } from "react";
import Script from "next/script";

/* ====== Quick knobs ====== */
const AUTO_MS = 6000; // auto-advance speed in milliseconds (e.g., 6000 = 6s)

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
          {subtitle && (
            <p className="mt-2 text-base md:text-lg opacity-90">
              <strong>{subtitle}</strong>
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------- Simple SVG icons ---------- */
const IconTruck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M3 14h10V6H7L3 10v4Z" />
    <path d="M13 9h4l3 3v2h-7" />
    <circle cx="7.5" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
  </svg>
);
const IconFlatbed = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M2 14h13l4-3h3" />
    <path d="M2 14v3h3" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);
const IconLock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
  </svg>
);
const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
const IconHook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M12 3v9a4 4 0 1 0 8 0" />
    <circle cx="12" cy="3" r="2" />
  </svg>
);
const IconFuel = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M3 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12H3V7Z" />
    <path d="M13 10h2l3 3v6a2 2 0 0 0 2 2h1" />
  </svg>
);

/* ---------- Trust banner small icons ---------- */
function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3l7 3v5a10 10 0 0 1-7 9 10 10 0 0 1-7-9V6l7-3z" />
    </svg>
  );
}
function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

/* ---------- TikTok Carousel (replaces top map) ---------- */
function TikTokCarousel() {
  const railRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = [
    {
      id: "7215414816326880554",
      url: "https://www.tiktok.com/@285302ditchking/video/7215414816326880554",
      caption: "Don’t Drink & Drive — we’ll get you and your vehicle home safe.",
    },
    {
      id: "6886898181007822086",
      url: "https://www.tiktok.com/@285302ditchking/video/6886898181007822086",
      caption: "Classic Car • Light Tow • Professional care and secure transport.",
    },
    {
      id: "7322804972259790110",
      url: "https://www.tiktok.com/@285302ditchking/video/7322804972259790110",
      caption: "Rolling Down In The Deep — recovery done right.",
    },
    {
      id: "7320362428586396958",
      url: "https://www.tiktok.com/@285302ditchking/video/7320362428586396958",
      caption: "Another Roll Over — rapid response and safety first.",
    },
    {
      id: "7318154070307491103",
      url: "https://www.tiktok.com/@285302ditchking/video/7318154070307491103",
      caption: "Heavy Lifting! — oilfield muscle, professional control.",
    },
    {
      id: "7277341945796611371",
      url: "https://www.tiktok.com/@285302ditchking/video/7277341945796611371",
      caption: "Drive with Caution! — we’re ready when things go wrong.",
    },
  ];

  const scrollToIndex = (i) => {
    const rail = railRef.current;
    if (!rail) return;
    const child = rail.children[i];
    if (child && child.scrollIntoView) {
      child.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  // keep index in sync when user scrolls by hand
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      const children = Array.from(rail.children);
      const { scrollLeft, clientWidth } = rail;
      // find child whose left edge is closest to current scroll
      let nearest = 0;
      let best = Infinity;
      children.forEach((el, i) => {
        const dist = Math.abs(el.offsetLeft - scrollLeft);
        if (dist < best) {
          best = dist;
          nearest = i;
        }
      });
      setIndex(nearest);
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance, pause on hover/focus
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % items.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const manual = (dirOrExact) => {
    let next = index;
    if (typeof dirOrExact === "number") {
      next = dirOrExact;
    } else {
      next = (index + dirOrExact + items.length) % items.length;
    }
    setIndex(next);
    scrollToIndex(next);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={railRef}
        className="grid grid-flow-col auto-cols-[min(605px,100%)] gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {items.map((v) => (
          <div key={v.id} className="snap-start rounded-2xl overflow-hidden border border-black/10 bg-white">
            <blockquote
              className="tiktok-embed"
              cite={v.url}
              data-video-id={v.id}
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              <section>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@285302ditchking">
                  @285302ditchking
                </a>
                <p>{v.caption}</p>
              </section>
            </blockquote>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => manual(-1)}
        aria-label="Previous"
        className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:grid place-items-center h-10 w-10 rounded-full bg-black/70 text-white hover:bg-black/80"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => manual(1)}
        aria-label="Next"
        className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:grid place-items-center h-10 w-10 rounded-full bg-black/70 text-white hover:bg-black/80"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => manual(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-ahBlue" : "bg-black/30 hover:bg-black/50"
            }`}
          />
        ))}
      </div>
    </div>
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
          <span className="font-semibold">24/7 Towing & Recovery • Pecos, TX & Oilfield Routes</span>
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

      {/* Brand slab with thicker, bolder letters */}
      <div className="container max-w-7xl pt-6">
        <div className="mx-auto max-w-fit rounded-3xl border border-white/10 bg-[#0b0f14] px-6 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          <h1
            className="text-center text-4xl md:text-6xl font-black leading-[1.05] tracking-tight"
            style={{
              WebkitTextStroke: "1.5px #0b0f14",
              textShadow: "0 1px 1px rgba(0,0,0,.4), 0 6px 16px rgba(0,0,0,.35)",
            }}
          >
            <span className="bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-300 bg-clip-text text-transparent">
              A&amp;H TOWING &amp; RECOVERY, LLC
            </span>
          </h1>
        </div>
      </div>

      {/* Hero: copy + actions on left, TikTok carousel on right */}
      <section className="overflow-hidden">
        <div className="container max-w-7xl grid md:grid-cols-2 gap-10 items-center pt-8 pb-14 md:pt-10 md:pb-20">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight drop-shadow">
              Fast, Friendly, <span className="underline decoration-ahAccent decoration-4 underline-offset-4">Professional</span> Towing — From Small Cars to Oilfield Heavy
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
              <Stat label="Professional Response" value="< 30 min" />
              <Stat label="Operating" value="24/7/365" />
              <Stat label="Service Area" value="Pecos, TX & West Texas Region" />
            </div>
          </div>

          {/* TikTok action carousel */}
          <div>
            <TikTokCarousel />
          </div>
        </div>
      </section>

      {/* Trust banner — upgraded visuals */}
      <div className="relative isolate">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none" />
        <div className="container max-w-7xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Licensed & Insured", sub: "Fully compliant. Professional operators.", icon: IconShield },
              { title: "24/7 Dispatch", sub: "Call anytime — we roll now.", icon: IconClock },
              { title: "Light • Medium • Heavy", sub: "Cars to oilfield equipment.", icon: IconTruck },
              { title: "Trains w/ First Responders", sub: "Safety. Speed. Coordination.", icon: IconBolt },
            ].map(({ title, sub, icon: I }, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white p-5 border border-black/10 shadow-sm hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-ahBlue/30 pointer-events-none" />
                <div className="flex items-start gap-3">
                  <I className="h-8 w-8 mt-0.5" />
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-xs opacity-80">{sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <Section
        id="services"
        title="24/7 Towing & Roadside — Built for West Texas and Oilfield Conditions"
        subtitle="From small tows to oilfield equipment moves, we’re ready when you need us."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: IconTruck, title: "Light Duty Towing", desc: "Cars • SUVs • Pickups" },
            { icon: IconTruck, title: "Heavy Duty & Commercial", desc: "Oilfield & fleet" },
            { icon: IconFlatbed, title: "Flatbed / Rollback", desc: "Damage-free transport" },
            { icon: IconBolt, title: "Jumpstarts", desc: "12V & roadside checks" },
            { icon: IconLock, title: "Lockouts", desc: "Fast entry, no damage" },
            { icon: IconHook, title: "Winching / Recovery", desc: "Off-road, mud, sand" },
            { icon: IconFuel, title: "Fuel Delivery", desc: "Gas & diesel" },
            { icon: IconTruck, title: "Long & Short Distance", desc: "Local & state-to-state" },
            { icon: IconTruck, title: "Accident Removal", desc: "Secure, professional" },
          ].map(({ icon: Ico, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 flex items-start gap-4">
              <Ico className="h-14 w-14 shrink-0" />
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm opacity-80">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2 flex-wrap">
          <PhoneCTA />
          <SmsCTA
            body={`Tow request: {Y/M/M}. Heavy/Oilfield?: {Yes/No}. Passengers: {#}. Issue: {describe}. Location: {share GPS}. Callback: {phone}.`}
          />
        </div>
      </Section>

      {/* Coverage */}
      <Section
        id="coverage"
        title="Service Area"
        subtitle="Pecos, TX and Surrounding West Texas Region"
      >
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow border border-black/10">
            <iframe
              title="Coverage Map"
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer"
              allowFullScreen
              src="https://www.openstreetmap.org/export/embed.html?bbox=-104.2%2C30.9%2C-101.8%2C32.1&layer=mapnik"
            />
          </div>

          {/* Bigger, bold, one-color bullets */}
          <ul className="space-y-3 list-disc pl-5 text-base md:text-lg font-semibold text-ahCharcoal">
            <li>Pecos (Home Base) • Reeves County</li>
            <li>Fort Stockton • Monahans • Kermit</li>
            <li>Balmorhea • Pyote • Toyah</li>
            <li>Midland/Odessa metro &amp; I-20 corridor</li>
            <li>US-285 • TX-17 • Oilfield routes</li>
            <li className="pt-2 text-ahBlue">
              Professional coverage beyond this region is available — call to arrange long-distance transport.
            </li>
          </ul>
        </div>
      </Section>

      {/* Proof / Training */}
      <Section
        id="proof"
        title="Training & Community — Why Professionals Trust A&H"
        subtitle="We train for heavy hauling, exercise with first responders, and handle oilfield moves."
      >
        <div className="grid md:grid-cols-3 gap-6">
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

      {/* Footer brand slab */}
      <div className="container max-w-7xl pb-2">
        <div className="mx-auto max-w-fit rounded-3xl border border-white/10 bg-[#0b0f14] px-5 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          <h2
            className="text-center text-2xl md:text-4xl font-black tracking-tight"
            style={{ WebkitTextStroke: "1.2px #0b0f14", textShadow: "0 1px 1px rgba(0,0,0,.45)" }}
          >
            <span className="bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-300 bg-clip-text text-transparent">
              A&amp;H TOWING &amp; RECOVERY, LLC
            </span>
          </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ahCharcoal text-ahText mt-6">
        <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-10 text-sm">
          <div>
            <div className="font-bold text-white drop-shadow-sm">A&amp;H Towing & Recovery, LLC</div>
            <p className="mt-2 opacity-90">Professional towing, recovery, and roadside assistance for Pecos & oilfield routes.</p>
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
              { "@type": "City", name: "Fort Stockton" },
              { "@type": "City", name: "Kermit" },
              { "@type": "City", name: "Monahans" },
              { "@type": "City", name: "Balmorhea" },
              { "@type": "City", name: "Pyote" },
              { "@type": "City", name: "Toyah" },
              { "@type": "City", name: "Midland" },
              { "@type": "City", name: "Odessa" },
              { "@type": "AdministrativeArea", name: "West Texas oilfields" },
            ],
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: ["https://www.tiktok.com/@285302ditchking"],
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
            title="Shop Map (OpenStreetMap)"
            className="w-full h-[220px]"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-103.7%2C31.3%2C-103.3%2C31.5&layer=mapnik"
          />
          <div className="text-xs p-2 bg-white/90">
            Prefer Google?{" "}
            <a
              className="underline"
              href="https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos%2C%20TX%2079772"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs opacity-80">
          24/7 Professional Service — Call or Text Us!
        </div>
      </div>
    </div>
  );
}
