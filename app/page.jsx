"use client";

import React, { useState, useEffect } from "react";

/* ============================ Utilities ============================ */
function smsHref(number, body) {
  const encoded = encodeURIComponent(body);
  const isiOS =
    typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const sep = isiOS ? "&" : "?";
  return `sms:${number}${sep}body=${encoded}`;
}

/* ====================== Small UI Helpers / Icons ====================== */
function PhoneCTA({ className = "", label = "Call Dispatch Now! 24/7 Services", fullWidth = false }) {
  const widthClasses = fullWidth ? "w-full sm:w-auto !min-w-0" : "min-w-[240px]";
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base ${widthClasses} ${className}`}
      aria-label="Call A&H Towing & Recovery"
    >
      {label}
    </a>
  );
}

function ScrollToFormCTA({
  className = "",
  label = "Text Dispatch (Include GPS)",
  targetId = "form-start",
}) {
  const onClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId) || document.getElementById("dispatch-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const first = document.querySelector(
          "#dispatch-form input, #dispatch-form textarea, #dispatch-form select, #dispatch-form button"
        );
        first?.focus();
      }, 600);
    } else {
      window.location.hash = "#contact";
      setTimeout(() => {
        const first = document.querySelector(
          "#dispatch-form input, #dispatch-form textarea, #dispatch-form select, #dispatch-form button"
        );
        first?.focus();
      }, 600);
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[240px] ${className}`}
      aria-label="Go to dispatch form"
    >
      {label}
    </button>
  );
}

/* Accent strip */
function AccentStrip({ color = "from-ahBlue to-ahRed" }) {
  return <div className={`h-1 w-full bg-gradient-to-r ${color}`} />;
}

/* Chip (boxed word) */
function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-xl px-3 py-1 text-[0.95em] font-extrabold bg-black/40 text-white shadow [text-shadow:0_1px_1px_rgba(0,0,0,.55)] ${className}`}
      style={{ WebkitTextStroke: "0.25px rgba(0,0,0,.75)" }}
    >
      {children}
    </span>
  );
}

/* Box shell with faint blue→red diamond steel texture */
function SoftBox({ children, className = "", strip = true, bgClass = "diamond-panel" }) {
  return (
    <div className={`rounded-2xl border border-black/10 shadow-xl ${bgClass} backdrop-blur ${className}`}>
      {strip && <AccentStrip />}
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}

/* Section wrapper — tighter defaults */
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-8 md:py-10">
      <div className="container max-w-7xl">
        {(title || subtitle) && (
          <SoftBox className="mb-4 md:mb-5">
            {title && (
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ahCharcoal text-center stronger">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-base md:text-lg opacity-90 text-center stronger">
                <strong>{subtitle}</strong>
              </p>
            )}
          </SoftBox>
        )}
        {children}
      </div>
    </section>
  );
}

/* Icons */
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

/* ===== Brand slabs (reduced vertical space) ===== */
function BrandSlabBottom({ as: Tag = "h2" }) {
  return (
    <div
      className="mx-auto max-w-fit rounded-3xl border border-white/10 px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/diamond-plate.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Tag
        className="text-center font-black leading-[1.02] tracking-tight"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
          fontSize: "clamp(32px, 5.2vw, 80px)",
          color: "#e9edf1",
          WebkitTextStroke: "2px #000",
          textShadow: "0 1px 1px rgba(0,0,0,.5), 0 6px 16px rgba(0,0,0,.45)",
        }}
      >
        A&amp;H TOWING &amp; RECOVERY, LLC
      </Tag>
    </div>
  );
}

function BrandSlabTop({ as: Tag = "h1" }) {
  return (
    <div
      className="mx-auto max-w-fit rounded-3xl border border-white/10 px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/diamond-plate.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Tag
        className="text-center font-black leading-[1.02] tracking-tight"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
          fontSize: "clamp(40px, 7vw, 96px)",
          color: "#e9edf1",
          WebkitTextStroke: "2px #000",
          textShadow: "0 2px 2px rgba(0,0,0,.5), 0 10px 24px rgba(0,0,0,.45)",
        }}
      >
        A&amp;H TOWING &amp; RECOVERY, LLC
      </Tag>
    </div>
  );
}

/* ========================= Stats (compact) ========================= */
function StatMini({ value, label }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-[clamp(18px,2.4vw,24px)] font-extrabold leading-none stronger">{value}</div>
      <div className="text-[clamp(10px,1.2vw,12px)] font-extrabold opacity-90 stronger" style={{ marginTop: "calc(.75rem/1.618)" }}>
        {label}
      </div>
    </div>
  );
}
function StatsCompact() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-2.5 mt-3">
      <StatMini value="< 30 min" label="Professional Response" />
      <StatMini value="24/7/365" label="Operating" />
      <div className="col-span-2 md:col-span-1">
        <StatMini value="Pecos, TX & West Texas Region" label="Service Area" />
      </div>
    </div>
  );
}

/* ========================= Top Marquee (inverted color) ========================= */
function TopLocationsMarquee() {
  const text =
    "Pecos (Home Base) • Reeves County • Fort Stockton • Monahans • Kermit • Balmorhea • Pyote • Toyah • Grandfalls • Wink • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • Oilfield Routes";
  return (
    <div className="w-full bg-[#0b0f14] text-sm">
      <div className="container max-w-7xl py-2">
        <div className="relative overflow-hidden">
          <div className="marquee whitespace-nowrap font-extrabold tracking-tight marquee-text">
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
          </div>
        </div>
      </div>

      {/* two blank lines, then the yellow sentence */}
      <div className="h-6" />
      <div className="h-6" />
      <div className="w-full">
        <div className="container max-w-7xl">
          <p
            className="text-center font-extrabold"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              color: "#ffd54a",
            }}
          >
            Providing Towing, Recovery Services, and Emergency Roadside Assistance to West Texas
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee { display: inline-flex; min-width: 200%; animation: marquee-x 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none !important; } }

        /* Inverted: clean white-silver on charcoal */
        .marquee-text {
          color: #f5f7fa;
          -webkit-text-stroke: 0.4px rgba(0,0,0,.9);
          text-shadow: 0 1px 2px rgba(0,0,0,.7);
          font-family: ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        }

        /* GLOBAL: darker + bolder body text (utility class) */
        .stronger { color: #000000; font-weight: 800; }

        /* Diamond-steel panel finish for SoftBox containers */
        .diamond-panel {
          background-image:
            linear-gradient(135deg, rgba(59,130,246,0.12), rgba(244,63,94,0.12)),
            url("/diamond-plate.jpg");
          background-size: cover, 220px 220px;
          background-repeat: no-repeat, repeat;
          background-position: center, center;
          background-color: rgba(255,255,255,0.6);
          background-blend-mode: overlay, normal;
        }
      `}</style>
    </div>
  );
}

/* ===================== Video wrapper (frameless background) ===================== */
function VideoSection({ src, minVH = 100, extraClass = "", children, overlayTop }) {
  const [videoError, setVideoError] = useState(false);
  return (
    <section
      className={`relative isolate w-full overflow-hidden ${extraClass}`}
      style={{ minHeight: `min(${minVH}vh, 1200px)` }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        poster="/fallback.jpg"
        onError={() => setVideoError(true)}
        disablePictureInPicture
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Vignette overlay for legibility */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.2)_78%,rgba(0,0,0,0.35)_100%)]" />

      {/* Optional overlay at top (e.g., tagline over tow1) */}
      {overlayTop && (
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-20 w-full px-4">
          {overlayTop}
        </div>
      )}

      {/* Content on top of video */}
      <div className="relative z-20">{children}</div>

      {videoError && (
        <div className="absolute bottom-3 left-3 z-30 rounded-md bg-red-600/90 text-white px-3 py-1 text-xs shadow">
          Video failed to load: {src}. Confirm it exists at /public{src}
        </div>
      )}
    </section>
  );
}

/* ============================== Page ============================== */
export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  return (
    <>
      <main className="text-ahCharcoal min-h-screen">
        {/* Marquee + yellow line */}
        <TopLocationsMarquee />

        {/* Header */}
        <header className="sticky top-0 z-50 bg-ahCharcoal text-ahText border-b border-black/30">
          <div className="container max-w-7xl flex items-center gap-6 py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center font-bold shadow-cta">A&amp;H</div>
              <div className="leading-tight">
                <div className="font-bold text-white drop-shadow">A&amp;H Towing & Recovery, LLC</div>
                <div className="text-xs opacity-90">2712 W F Street, Pecos, TX 79772</div>
                <div className="text-xs">
                  <a className="underline underline-offset-4 hover:opacity-100" href="mailto:ah.towing.recovery23@gmail.com">
                    ah.towing.recovery23@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <nav className="ml-auto hidden md:flex items-center gap-6 text-sm font-bold">
              <a href="#services" className="hover:opacity-80">Services</a>
              <a href="#coverage" className="hover:opacity-80">Coverage</a>
              <a href="#proof" className="hover:opacity-80">Training & Proof</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </nav>
            <PhoneCTA className="hidden sm:inline-flex" />
          </div>
        </header>

        {/* ===== TOP steel banner (reduced height, static) ===== */}
        <section className="relative z-[60] w-full overflow-hidden" style={{ minHeight: "clamp(130px, 18vh, 280px)" }}>
          <div className="relative z-[70] h-full w-full flex items-center justify-center px-4 py-2">
            <BrandSlabTop />
          </div>
        </section>

        {/* ========== tow1 background (slightly shorter) with larger tagline ========== */}
        <VideoSection
          src="/Videos/tow1.mp4"
          minVH={92}
          overlayTop={
            <div className="mx-auto max-w-fit rounded-2xl px-4 py-2 bg-black/40 backdrop-blur-sm">
              <div
                className="text-center font-extrabold tracking-tight"
                style={{
                  fontFamily:
                    'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
                  fontSize: "clamp(20px, 3.2vw, 36px)",
                  color: "#f5f7fa",
                  WebkitTextStroke: "0.6px #111",
                  textShadow: "0 1px 2px rgba(0,0,0,.65)",
                }}
              >
                Handle with Care • Fast Response • West Texas Tough
              </div>
            </div>
          }
        />

        {/* Thin separator line */}
        <div className="h-[6px] w-full bg-gradient-to-r from-ahBlue via-rose-300/40 to-ahRed" />

        {/* =================== HERO on STEEL (butted under tow1) =================== */}
        <section className="py-4">
          <div className="container max-w-7xl">
            <SoftBox className="p-0" strip={false}>
              <AccentStrip />
              <div className="px-4 py-5 md:px-6 md:py-6">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center stronger space-x-2">
                  <Chip>Fast</Chip>{" "}
                  <Chip>Friendly</Chip>{" "}
                  <Chip>Professional</Chip>{" "}
                  <span className="inline-block">Towing —</span>{" "}
                  <Chip className="bg-black/60">Handle&nbsp;with&nbsp;Care</Chip>
                </h2>
                <p className="mt-3 text-base md:text-lg text-center stronger">
                  Stranded on I-20 or US-285? <Chip className="mx-1">We dispatch immediately</Chip> for light, medium &amp; heavy-duty tows,
                  winch-outs, accident recovery, and oilfield transport. Trained operators. Clear pricing.
                  <strong> Click below to call or text us direct!</strong>
                </p>
                <div className="mt-3"><StatsCompact /></div>
                <div className="mt-4 flex flex-wrap items-center gap-3 justify-center">
                  <PhoneCTA />
                  <ScrollToFormCTA />
                </div>
              </div>
            </SoftBox>
          </div>
        </section>

        {/* Zero bottom space to butt against services */}
        <div className="h-[4px] w-full bg-gradient-to-r from-ahRed via-white to-ahBlue" />

        {/* =================== SERVICES =================== */}
        <Section
          id="services"
          title="24/7 Towing & Roadside — Built for West Texas and Oilfield Conditions"
          subtitle="From small tows to equipment moves, we’re ready when you need us."
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: IconTruck, title: "Light Duty Towing", desc: "Cars • SUVs • Pickups", color: "from-ahBlue to-blue-400" },
              { icon: IconTruck, title: "Heavy Duty & Commercial", desc: "Oilfield & fleet", color: "from-ahRed to-red-500" },
              { icon: IconFlatbed, title: "Flatbed / Rollback", desc: "Damage-free transport", color: "from-amber-500 to-orange-500" },
              { icon: IconBolt, title: "Jumpstarts", desc: "12V & roadside checks", color: "from-yellow-400 to-amber-500" },
              { icon: IconLock, title: "Lockouts", desc: "Fast entry, no damage", color: "from-emerald-500 to-green-600" },
              { icon: IconHook, title: "Winching / Recovery", desc: "Off-road, mud, sand", color: "from-violet-500 to-indigo-600" },
              { icon: IconFuel, title: "Fuel Delivery", desc: "Gas & diesel", color: "from-cyan-500 to-sky-500" },
              { icon: IconTruck, title: "Long & Short Distance", desc: "Local & state-to-state", color: "from-slate-500 to-slate-700" },
              { icon: IconTruck, title: "Accident Removal", desc: "Secure, professional", color: "from-rose-500 to-pink-600" },
            ].map(({ icon: Ico, title, desc, color }) => (
              <SoftBox key={title} className="p-0">
                <div className="-mt-0 -mx-0 mb-3"><AccentStrip color={color} /></div>
                <div className="px-4 pb-5">
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} grid place-items-center flex-shrink-0`}>
                      <Ico className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-extrabold stronger">{title}</div>
                      <div className="text-sm opacity-90 stronger">{desc}</div>
                    </div>
                  </div>
                </div>
              </SoftBox>
            ))}
          </div>

          {/* Centered CTAs — tight */}
          <SoftBox className="mt-4 p-0">
            <div className="px-4 py-4 flex gap-3 flex-wrap justify-center">
              <PhoneCTA />
              <ScrollToFormCTA />
            </div>
          </SoftBox>
        </Section>

        {/* Tight line, then tow2 (unobstructed) */}
        <div className="h-[6px] w-full bg-gradient-to-r from-slate-200 via-rose-200/40 to-sky-200" />
        <VideoSection src="/Videos/tow2.mp4" minVH={88} />

        {/* =================== Condensed Service Area (tight) =================== */}
        <Section id="coverage" title="Service Area — Pecos & West Texas" subtitle={null}>
          <SoftBox strip={false}>
            <div className="-mt-6 -mx-6 mb-4"><AccentStrip /></div>
            <div className="grid md:grid-cols-2 gap-4 items-start">
              <div className="rounded-2xl overflow-hidden border border-black/10">
                <iframe
                  title="Coverage Map"
                  className="w-full h-[240px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-104.2%2C30.9%2C-101.8%2C32.1&layer=mapnik"
                />
              </div>
              <div className="text-sm md:text-base stronger">
                <div className="font-extrabold mb-2">Core Cities & Routes</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-6 list-disc pl-5">
                  <li>Pecos (Home Base) • Reeves County</li>
                  <li>Fort Stockton • Monahans • Kermit</li>
                  <li>Balmorhea • Pyote • Toyah • Grandfalls • Wink</li>
                  <li>Midland/Odessa Metro &amp; I-20 Corridor</li>
                  <li>US-285 • TX-17 • Oilfield Routes</li>
                </ul>
                <div className="mt-3">
                  <a className="underline font-extrabold" href="tel:+14328424578">
                    Long-distance transport available — call to arrange.
                  </a>
                </div>
              </div>
            </div>
          </SoftBox>
        </Section>

        {/* Tight line, then tow3 (unobstructed) */}
        <div className="h-[6px] w-full bg-gradient-to-r from-ahBlue via-white to-ahRed" />
        <VideoSection src="/Videos/tow3.mp4" minVH={88} />

        {/* =================== Request a Tow — directly under tow3, minimal spacing =================== */}
        <Section id="contact" title="Request a Tow" subtitle="Fastest: Call or Text. Share your exact location and key details in one tap.">
          <SoftBox className="mb-3 p-0">
            <div className="px-4 py-4 flex gap-3 flex-wrap justify-center">
              <PhoneCTA />
              <ScrollToFormCTA label="Text Dispatch (Include GPS)" />
            </div>
          </SoftBox>

          <SoftBox>
            <ContactSection />
          </SoftBox>
        </Section>

        {/* Bottom steel brand — reduced height */}
        <div className="container max-w-7xl pb-2">
          <BrandSlabBottom />
        </div>

        {/* Payments + Social above footer */}
        <div className="container max-w-7xl py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="font-extrabold stronger">We accept:</div>
            {/* Cash icon */}
            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>
              <span className="stronger">Cash</span>
            </div>
            {/* Credit Cards icon */}
            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
              <span className="stronger">All Major Credit Cards</span>
            </div>
            {/* EFS icon */}
            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18l-2 12H5L3 6Z"/><path d="M7 10h10M6 14h12"/></svg>
              <span className="stronger">EFS Services</span>
            </div>
          </div>
          <div className="mt-3">
            <a
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-black text-white font-semibold"
              href="https://www.tiktok.com/@"
              target="_blank"
              rel="noreferrer"
            >
              {/* Simple TikTok glyph */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8.04c1.28 0 2.5.39 3.5 1.12V6.31c-1.06-.03-2.2-.36-3.18-.99-1.05-.66-1.8-1.56-2.23-2.59H11.8v12.02c0 1.26-1.03 2.28-2.3 2.28-1.27 0-2.3-1.02-2.3-2.28 0-1.25 1.03-2.27 2.3-2.27.24 0 .47.04.69.1V9.61c-3.37-.54-6.27 2.02-6.27 5.13 0 2.85 2.34 5.17 5.23 5.17 2.88 0 5.23-2.32 5.23-5.17v-5.2c.94.5 2 .76 3.12.76Z"/>
              </svg>
              <span>Follow us on TikTok</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-ahCharcoal text-ahText mt-4">
          <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-8 text-sm">
            <div>
              <div className="font-extrabold text-white drop-shadow-sm">A&amp;H Towing &amp; Recovery, LLC</div>
              <p className="mt-2 font-bold text-amber-200">
                Professional towing, recovery, and roadside assistance for Pecos &amp; oilfield routes.
              </p>
            </div>
            <div>
              <div className="font-semibold text-white">Quick Links</div>
              <ul className="mt-2 space-y-1">
                <li><a className="underline" href="#services">Services</a></li>
                <li><a className="underline" href="#coverage">Coverage</a></li>
                <li><a className="underline" href="#contact">Request a Tow</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Social</div>
              <ul className="mt-2 space-y-1">
                <li><a className="underline" href="https://www.tiktok.com/@" target="_blank" rel="noreferrer">TikTok</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Contact</div>
              <p className="mt-2 text-white drop-shadow-sm">
                <a className="underline font-semibold" href="tel:+14328424578">(432) 842-4578</a><br />
                <a className="underline font-semibold" href="mailto:ah.towing.recovery23@gmail.com">ah.towing.recovery23@gmail.com</a><br />
                <span className="font-extrabold text-amber-200">2712 W F Street, Pecos, TX 79772</span>
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
                { "@type": "AdministrativeArea", name: "Reeves County" },
                { "@type": "City", name: "Fort Stockton" },
                { "@type": "City", name: "Monahans" },
                { "@type": "City", name: "Kermit" },
                { "@type": "City", name: "Balmorhea" },
                { "@type": "City", name: "Pyote" },
                { "@type": "City", name: "Toyah" },
                { "@type": "City", name: "Grandfalls" },
                { "@type": "City", name: "Wink" },
                { "@type": "City", name: "Midland" },
                { "@type": "City", name: "Odessa" },
                { "@type": "AdministrativeArea", name: "West Texas Oilfields" },
              ],
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [],
            }),
          }}
        />
      </main>
    </>
  );
}

/* ========================= Contact Section ========================= */
function ContactSection() {
  const [name, setName] = useState("");
  const [callback, setCallback] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [passengers, setPassengers] = useState("");
  const [issue, setIssue] = useState("");
  const [coords, setCoords] = useState(null);
  const [locStatus, setLocStatus] = useState("Idle");

  const handleSendText = (e) => {
    e.preventDefault();

    let sent = false;
    const build = (c) => {
      const loc = c
        ? `Location: ${c.lat.toFixed(5)}, ${c.lng.toFixed(5)} https://www.google.com/maps?q=${c.lat},${c.lng}`
        : "Location: (share GPS)";
      return (
        `Tow request from ${name || "(name)"}; ` +
        `Callback: ${callback || "(phone)"}; ` +
        `Vehicle: ${vehicle || "(Y/M/M)"}; ` +
        `Passengers: ${passengers || "(#)"}; ` +
        `Issue: ${issue || "(describe)"}; ${loc}`
      );
    };
    const openSMS = (body) => {
      if (sent) return;
      sent = true;
      window.location.href = smsHref("+14328424578", body);
    };

    const fallback = setTimeout(() => openSMS(build(null)), 2500);

    if (navigator?.geolocation) {
      setLocStatus("Requesting location…");
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          clearTimeout(fallback);
          const c = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setCoords(c);
          setLocStatus("Location captured");
          openSMS(build(c));
        },
        (err) => {
          clearTimeout(fallback);
          setLocStatus("Location failed: " + err.message);
          openSMS(build(null));
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 0 }
      );
    } else {
      setLocStatus("Geolocation not supported");
      clearTimeout(fallback);
      openSMS(build(null));
    }
  };

  const mapsLink = coords ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}` : "";

  return (
    <div className="grid md:grid-cols-2 gap-8" id="contact">
      <SoftBox strip={false} className="p-0">
        <AccentStrip />
        <div id="form-start" className="h-0 w-full" aria-hidden="true" />

        <div className="px-5 pt-5 md:px-6">
          <div className="rounded-xl bg-blue-50/80 border border-blue-200 px-4 py-3 text-sm text-ahCharcoal stronger">
            <strong>Instructions: </strong>
            Please complete the form below for services and to send your GPS information to our towing and emergency services dispatcher.
            Press the red button below to submit the form to text for services.
          </div>
        </div>

        <form id="dispatch-form" className="grid gap-4 p-5 md:p-6" onSubmit={(e) => e.preventDefault()}>
          <label className="grid gap-1">
            <span className="text-sm stronger">Name</span>
            <input className="rounded-xl border px-3 py-2 stronger" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label className="grid gap-1">
            <span className="text-sm stronger">Callback Phone</span>
            <input className="rounded-xl border px-3 py-2 stronger" inputMode="tel" placeholder="(###) ###-####" value={callback} onChange={(e) => setCallback(e.target.value)} required />
          </label>

          <label className="grid gap-1">
            <span className="text-sm stronger">Vehicle</span>
            <input className="rounded-xl border px-3 py-2 stronger" placeholder="Year / Make / Model" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
          </label>

          <label className="grid gap-1">
            <span className="text-sm stronger">Number of Passengers</span>
            <input type="number" min="1" max="8" className="rounded-xl border px-3 py-2 stronger" placeholder="e.g., 2" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
          </label>

          <label className="grid gap-1">
            <span className="text-sm stronger">Issue</span>
            <textarea className="rounded-2xl border px-3 py-2 stronger" rows={3} placeholder="Flat tire, no-start, accident, stuck, etc." value={issue} onChange={(e) => setIssue(e.target.value)} />
          </label>

          <div className="grid gap-2 rounded-2xl border p-3 bg-white/80 backdrop-blur stronger">
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold">Share GPS Location</span>
              <button
                type="button"
                onClick={() => {
                  if (!navigator?.geolocation) {
                    setLocStatus("Geolocation not supported");
                    return;
                  }
                  setLocStatus("Requesting location…");
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const c = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                      setCoords(c);
                      setLocStatus("Location captured");
                    },
                    (err) => setLocStatus("Location failed: " + err.message),
                    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
                  );
                }}
                className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
              >
                Use my GPS
              </button>
            </div>
            <div className="text-xs opacity-90">
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

          <div className="flex flex-wrap gap-3 mt-2 justify-start">
            <PhoneCTA />
            <button
              type="button"
              onClick={handleSendText}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[240px]"
            >
              Send Text to Dispatch
            </button>
          </div>
          <p className="text-xs opacity-90 stronger">
            The red button composes a text with your details and GPS (if available) in your Messages app.
          </p>
        </form>
      </SoftBox>

      <SoftBox>
        <div className="font-extrabold stronger">Call or Visit</div>
        <p className="mt-2 text-sm stronger">
          Phone: <a className="underline" href="tel:+14328424578">(432) 842-4578</a><br />
          Email: <a className="underline" href="mailto:ah.towing.recovery23@gmail.com">ah.towing.recovery23@gmail.com</a>
        </p>
        <p className="mt-4 text-sm stronger">Address: 2712 W F Street, Pecos, TX 79772</p>
        <p className="mt-2 text-sm stronger">Hours: 24/7 Dispatch</p>
        <div className="mt-6 rounded-xl overflow-hidden border border-black/10">
          <iframe title="Shop Map (OpenStreetMap)" className="w-full h-[220px]" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-103.7%2C31.3%2C-103.3%2C31.5&layer=mapnik" />
          <div className="text-xs p-2 bg-white/90 stronger">
            Prefer Google?{" "}
            <a className="underline" href="https://www.google.com/maps?q=2712%20W%20F%20Street,%20Pecos,%20TX%2079772" target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs opacity-90 stronger">24/7 Professional Service — Call or Text Us!</div>
      </SoftBox>
    </div>
  );
}
