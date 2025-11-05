"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("dispatch-form");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => document.getElementById("name-input")?.focus(), 600);
      }}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base ${widthClasses} ${className}`}
      aria-label="Call A&H Towing & Recovery"
    >
      {label}
    </a>
  );
}

function ScrollToFormCTA({ className = "", label = "Text Dispatch (Include GPS)", targetId = "dispatch-form" }) {
  const onClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => document.getElementById("name-input")?.focus(), 600);
    } else {
      window.location.hash = "#contact";
      setTimeout(() => document.getElementById("name-input")?.focus(), 600);
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

/* ===== Tiny translucent “bubble” helpers ===== */
function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-xl px-3 py-1 bg-black/45 text-white font-extrabold shadow-sm align-middle ${className}`}
      style={{ WebkitTextStroke: "0.25px rgba(0,0,0,.7)", textShadow: "0 1px 2px rgba(0,0,0,.6)" }}
    >
      {children}
    </span>
  );
}

function BubbleBlock({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-2xl px-4 py-3 bg-black/45 text-white font-extrabold shadow ${className}`}
      style={{ WebkitTextStroke: "0.25px rgba(0,0,0,.7)", textShadow: "0 1px 2px rgba(0,0,0,.6)" }}
    >
      {children}
    </div>
  );
}

/* Tight caution callout (striped border, solid yellow body; text styles set by children) */
function StripedCallout({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-xl p-[3px] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, #111827 0 10px, #fde047 10px 20px)",
      }}
    >
      <div className="rounded-lg px-4 py-3 text-center" style={{ backgroundColor: "#fde047" }}>
        {children}
      </div>
    </div>
  );
}

/* Thin gradient strip */
function AccentStrip({ color = "from-ahBlue to-ahRed", className = "" }) {
  return <div className={`h-1 w-full bg-gradient-to-r ${color} ${className}`} />;
}

/* =================== GLOBAL Animated Border (red↔blue) =================== */
function AnimBorder({ children, className = "" }) {
  return (
    <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>
      {children}
    </div>
  );
}

/* Steel panel container (background only) */
function SteelPanel({ children, className = "", padded = true, borderColor = "rgba(255,255,255,0.18)" }) {
  return (
    <div
      className={`rounded-[22px] border shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${padded ? "px-4 py-5 md:px-6 md:py-6" : ""} ${className}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")`,
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

/* Section wrapper (tight) */
function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-7 md:py-8 ${className}`}>
      <div className="container max-w-7xl">{children}</div>
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

/* ===== Company name on steel (animated red↔blue border; RED letters) ===== */
function BrandSlab({ Tag = "h1" }) {
  return (
    <AnimBorder>
      <SteelPanel padded={false} className="px-2 py-1 text-center">
        <Tag
          className="font-black tracking-tight"
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
            fontSize: "clamp(40px, 7vw, 96px)",
            color: "#e10600",
            WebkitTextStroke: "1.5px #000",
            textShadow: "0 2px 0 #7f1d1d, 0 10px 22px rgba(0,0,0,.5)",
            lineHeight: 1.05,
          }}
        >
          A&amp;H TOWING &amp; RECOVERY, LLC
        </Tag>
      </SteelPanel>
    </AnimBorder>
  );
}

/* ========================= Golden award badges ========================= */
function MedalBadge({ title, lines = [] }) {
  return (
    <div className="w-full sm:w-auto px-2">
      <div className="relative mx-auto w-56 h-64 grid place-items-center">
        {/* radiant ears ring */}
        <div
          className="absolute w-52 h-52 rounded-full"
          style={{
            background:
              "repeating-conic-gradient(from 0deg, rgba(255,215,0,0.45) 0deg 6deg, transparent 6deg 12deg)",
            filter: "blur(0.6px)",
          }}
        />
        {/* ribbons */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-7 h-20 bg-ahRed clip-ribbon shadow-md border-2 border-yellow-300" />
          <div className="w-7 h-20 bg-ahBlue clip-ribbon shadow-md border-2 border-yellow-300" />
        </div>
        {/* medal */}
        <div
          className="relative w-48 h-48 rounded-full shadow-2xl border-4 border-yellow-300 grid place-items-center text-center p-6"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #fff7b1, #ffd84a 45%, #f59e0b 70%, #b45309 90%)",
          }}
        >
          {/* shimmer sweep */}
          <div className="pointer-events-none absolute inset-0 rounded-full opacity-35 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.65),transparent_30%)] animate-spin-slow" />
          <div className="relative">
            <div className="text-sm font-black uppercase tracking-wide text-yellow-900">
              {title}
            </div>
            <div className="mt-2 text-base font-black text-yellow-950 leading-snug">
              {lines.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoldenFacts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 justify-items-center">
      <MedalBadge title="Response Time?" lines={["< 30 Minutes •", "Professional"]} />
      <MedalBadge title="Operating?" lines={["24 Hrs. / 7 Days a Week", "365 Day a Year"]} />
      <MedalBadge title="Service Area?" lines={["From Pecos, TX", "To the Surrounding", "West Texas Region"]} />
    </div>
  );
}

/* ========================= Top Marquee ========================= */
function TopLocationsMarquee() {
  const text =
    "Pecos (Home Base) • Reeves County • Fort Stockton • Monahans • Kermit • Balmorhea • Pyote • Toyah • Grandfalls • Wink • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • Oilfield Routes";
  return (
    <div className="w-full bg-[#0b0f14] text-sm">
      <div className="container max-w-7xl py-2">
        <div className="relative overflow-hidden">
          <div
            className="marquee whitespace-nowrap font-extrabold tracking-tight"
            style={{
              color: "#f5f7fa",
              WebkitTextStroke: "0.4px rgba(0,0,0,.9)",
              textShadow: "0 1px 2px rgba(0,0,0,.7)",
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              fontWeight: 900,
            }}
          >
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
          </div>
        </div>
      </div>

      {/* tight gap */}
      <div className="h-[2px]" />
      <div className="w-full bg-red-700/90">
        <div className="container max-w-7xl">
          <p
            className="text-center font-extrabold py-1"
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

        .clip-ribbon { clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%); }

        /* ===== Global animated red↔blue border ===== */
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rb-rotate {
          to { --angle: 360deg; }
        }
        .rb-border {
          --angle: 0deg;
          background: conic-gradient(from var(--angle), #3b82f6 0%, #ef4444 50%, #3b82f6 100%);
          animation: rb-rotate 24s linear infinite;
        }

        .animate-spin-slow { animation: spin 6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

/* ===================== Video wrapper ===================== */
function VideoSection({
  src,
  minVH = 100,
  extraClass = "",
  children,
  tagline,
  taglinePos = { bottom: "18%" },
  videoStyle = {},
  innerWrapperClass = "",
  overlayStrength = 0.35,
}) {
  const [videoError, setVideoError] = useState(false);
  return (
    <section className={`relative isolate w-full overflow-hidden ${extraClass}`} style={{ minHeight: `min(${minVH}vh, 1200px)` }}>
      <div className={`absolute inset-0 ${innerWrapperClass}`}>
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
          style={videoStyle}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,${overlayStrength * 0.57}) 78%, rgba(0,0,0,${overlayStrength}) 100%)`,
        }}
      />

      {tagline && (
        <div className="absolute left-1/2 -translate-x-1/2 z-20 w-full px-4" style={taglinePos}>
          {tagline}
        </div>
      )}

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

  /* Alphabetized locations for the list (kept) */
  const locations = [
    "Balmorhea",
    "Fort Stockton",
    "Grandfalls",
    "Kermit",
    "Midland",
    "Midland/Odessa Metro & I-20 Corridor",
    "Monahans",
    "Odessa",
    "Oilfield Routes",
    "Pecos (Home Base)",
    "Pyote",
    "Reeves County",
    "TX-17",
    "Toyah",
    "US-285",
    "Wink",
  ].sort((a, b) => a.localeCompare(b));

  return (
    <>
      <main className="min-h-screen bg-neutral-950">
        {/* Marquee */}
        <TopLocationsMarquee />

        {/* Header */}
        <header className="sticky top-0 z-50 bg-ahCharcoal text-ahText border-b border-black/30">
          <div className="container max-w-7xl flex items-center gap-6 py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-black grid place-items-center font-bold shadow-cta">
                <span className="text-[15px] font-extrabold" style={{ color: "#e10600" }}>A&amp;H</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold drop-shadow text-red-600">A&amp;H Towing & Recovery, LLC</div>
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
              <a href="/owners" className="hover:opacity-80">Owners</a>
              <a href="#contact" className="hover:opacity-80">Request a Tow</a>
            </nav>

            <PhoneCTA className="hidden sm:inline-flex" />
          </div>
        </header>

        {/* ===== Top steel banner ===== */}
        <section className="relative z-[60] w-full overflow-hidden" style={{ minHeight: "clamp(110px, 15vh, 200px)" }}>
          <div className="relative z-[70] h-full w-full flex items-center justify-center px-2 py-0.5">
            <BrandSlab Tag="h1" />
          </div>
        </section>

        {/* ========== Tow1 (show full wrecker) ========== */}
        <VideoSection
          src="/Videos/tow1.mp4"
          minVH={76}
          overlayStrength={0.2}
          tagline={
            <Chip className="text-[clamp(18px,3.2vw,36px)] px-4 py-2 bg-blue-900/70">
              Handle with Care • Fast Response • West Texas Tough
            </Chip>
          }
          taglinePos={{ top: "12%" }}
          videoStyle={{
            objectPosition: "center bottom",
          }}
        />

        {/* Space so wheels are clearly visible before next section */}
        <div className="h-7" />

        {/* =================== STRANDED SECTION =================== */}
        <Section className="mt-2 bg-red-800">
          <AnimBorder>
            <SteelPanel className="text-center">
              <div className="flex justify-center">
                <StripedCallout className="max-w-5xl w-full">
                  <h2
                    className="font-extrabold tracking-tight leading-[1.1]"
                    style={{
                      fontFamily:
                        '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                      fontSize: 'clamp(30px,4.4vw,54px)',
                      color: '#111827',
                      letterSpacing: '0.02em',
                      WebkitTextStroke: '0.5px rgba(0,0,0,0.55)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.25)',
                    }}
                  >
                    Stranded on the Side of the Road???
                  </h2>

                  <div
                    className="mt-2 font-extrabold leading-snug"
                    style={{ color: "#0b1220" }}
                  >
                    We dispatch immediately for light, medium &amp; heavy-duty tows, winch-outs, accident recovery, and oilfield transport.
                    <br />
                    Trained operators.
                    <br />
                    Clear pricing.
                  </div>
                </StripedCallout>
              </div>

              <div className="mt-4">
                <BubbleBlock className="!text-black" >
                  <span
                    style={{
                      backgroundColor: "rgba(250, 204, 21, 0.65)",
                      display: "inline-block",
                      borderRadius: "12px",
                      padding: "6px 10px",
                    }}
                  >
                    Click below to call or text us direct!
                  </span>
                </BubbleBlock>
              </div>

              <div className="h-5" />

              <div className="flex items-center justify-center gap-3 flex-wrap">
                <PhoneCTA />
                <ScrollToFormCTA />
              </div>

              <GoldenFacts />
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* =================== SERVICES =================== */}
        <Section id="services" className="bg-red-800/90">
          <AnimBorder>
            <SteelPanel className="text-center">
              {/* Services Provided */}
              <div className="inline-block rounded-2xl px-5 py-2 bg-black/20 backdrop-blur-sm">
                <h3
                  className="text-[clamp(32px,5.2vw,56px)] font-black leading-tight tracking-tight"
                  style={{
                    fontFamily:
                      '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                    color: "#60a5fa",
                    textShadow: "0 2px 14px rgba(0,0,0,.45)",
                    letterSpacing: "0.2px",
                  }}
                >
                  Services Provided
                </h3>
              </div>

         {/* Tow Services */}
<div className="mt-6">
  <div className="mb-3">
    <h4
      className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
      style={{
        fontFamily:
          '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
        color: "#60a5fa",
      }}
    >
      Tow Services
    </h4>
  </div>

  <div className="grid md:grid-cols-3 gap-4">
    {[
      {
        icon: IconTruck,
        title: "Light Duty Towing",
        desc: "Cars • SUVs • Pickups • Long & short distance",
        href: "/light-duty-towing",
      },
      {
        icon: IconTruck,
        title: "Heavy Duty & Commercial Towing",
        desc: "Oilfield & fleet • Long & short distance",
        href: "/heavy-duty-commercial-towing",
      },
      {
        icon: IconTruck,
        title: "Oilfield Routes Tow Service",
        desc: "Lease roads • remote access • Long & short distance",
        href: "/oilfield-routes-tow-service",
      },
      {
        icon: IconFlatbed,
        title: "Equipment Transport",
        desc: "Light equipment & tools • Long & short distance",
        href: "/equipment-transport",
      },
      {
        icon: IconFlatbed,
        title: "Flatbed / Rollback Services",
        desc: "Damage-free transport • Long & short distance",
        href: "/flatbed-rollback-services",
      },
    ].map(({ icon: Ico, title, desc, href }) => (
      <AnimBorder key={title}>
        <Link
          href={href}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]"
        >
          <SteelPanel className="p-4 cursor-pointer transition-transform hover:scale-[1.02]">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                <Ico className="h-6 w-6 text-white" />
              </div>
              <div>
                <BubbleBlock className="!px-3 !py-2">
                  <div className="font-extrabold">{title}</div>
                  <div className="text-sm text-white/95 mt-0.5">
                    {desc}
                  </div>
                </BubbleBlock>
              </div>
            </div>
          </SteelPanel>
        </Link>
      </AnimBorder>
    ))}
  </div>
</div>

              {/* Emergency Roadside Assistance */}
              <div className="mt-8">
                <div className="mb-3">
                  <h4
                    className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
                    style={{
                      fontFamily:
                        '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                      color: "#60a5fa",
                    }}
                  >
                    Emergency Roadside Assistance
                  </h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: IconFuel,
                      title: "Fuel Delivery",
                      desc: "Gas & diesel",
                      href: "/emergency-roadside-assistance",
                    },
                    {
                      icon: IconBolt,
                      title: "Jumpstarts",
                      desc: "12V & roadside checks",
                      href: "/emergency-roadside-assistance",
                    },
                    {
                      icon: IconLock,
                      title: "Lockouts",
                      desc: "Fast entry, no damage",
                      href: "/emergency-roadside-assistance",
                    },
                  ].map(({ icon: Ico, title, desc, href }) => (
                    <AnimBorder key={title}>
                      <Link
                        href={href}
                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]"
                      >
                        <SteelPanel className="p-4 cursor-pointer transition-transform hover:scale-[1.02]">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                              <Ico className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <BubbleBlock className="!px-3 !py-2">
                                <div className="font-extrabold">{title}</div>
                                <div className="text-sm text-white/95 mt-0.5">
                                  {desc}
                                </div>
                              </BubbleBlock>
                            </div>
                          </div>
                        </SteelPanel>
                      </Link>
                    </AnimBorder>
                  ))}
                </div>
              </div>

              {/* Accidents */}
              <div className="mt-8">
                <div className="mb-3">
                  <h4
                    className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
                    style={{
                      fontFamily:
                        '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                      color: "#60a5fa",
                    }}
                  >
                    Accidents
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: IconTruck,
                      title: "Accident Removal",
                      desc: "Secure, professional",
                      href: "/accidents-and-accident-removal",
                    },
                    {
                      icon: IconHook,
                      title: "Winching / Recovery",
                      desc: "Off-road, mud, sand",
                      href: "/winching-recovery",
                    },
                  ].map(({ icon: Ico, title, desc, href }) => (
                    <AnimBorder key={title}>
                      <Link
                        href={href}
                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]"
                      >
                        <SteelPanel className="p-4 cursor-pointer transition-transform hover:scale-[1.02]">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                              <Ico className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <BubbleBlock className="!px-3 !py-2">
                                <div className="font-extrabold">{title}</div>
                                <div className="text-sm text-white/95 mt-0.5">
                                  {desc}
                                </div>
                              </BubbleBlock>
                            </div>
                          </div>
                        </SteelPanel>
                      </Link>
                    </AnimBorder>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3 flex-wrap justify-center">
                <PhoneCTA />
                <ScrollToFormCTA />
              </div>
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* =================== SERVICE AREA =================== */}
        <Section id="coverage" className="bg-red-900/80">
          <AnimBorder>
            <SteelPanel>
              <div className="text-center mb-5">
                <BubbleBlock className="!px-6 !py-3">
                  <span className="font-extrabold text-[clamp(28px,5vw,56px)]">Service Area</span>
                </BubbleBlock>
              </div>

              <div className="grid md:grid-cols-2 gap-4 items-start">
                <div className="rounded-2xl overflow-hidden border border-white/15">
                  <iframe
                    title="Service Area Map (Dark)"
                    className="w-full h-[260px]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    allowFullScreen
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-104.2%2C30.9%2C-101.8%2C32.1&layer=mapnik"
                    style={{
                      filter: "invert(1) hue-rotate(180deg) saturate(0.6) brightness(0.8)",
                    }}
                  />
                </div>

                <div className="text-center md:text-left flex items-center justify-center">
                  <BubbleBlock className="!px-5 !py-4 max-w-xl text-base md:text-lg leading-relaxed">
                    {locations.join(" • ")}
                  </BubbleBlock>
                </div>
              </div>
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* =================== Tow3 =================== */}
        <Section className="bg-red-800/90">
          <VideoSection
            src="/Videos/tow3.mp4"
            minVH={86}
            videoStyle={{ filter: "contrast(1.12) saturate(1.1)" }}
          />
        </Section>

        {/* =================== Request for Services =================== */}
        <Section id="contact" className="bg-red-900/90">
          <AnimBorder>
            <SteelPanel>
              <div className="text-center">
                <div className="inline-block rounded-2xl px-6 py-3 bg-black/20 backdrop-blur-sm">
                  <div
                    className="font-extrabold"
                    style={{
                      fontFamily:
                        '"Gill Sans", "Trebuchet MS", "Segoe UI", system-ui, -apple-system, Arial',
                      fontSize: "clamp(32px,5.6vw,64px)",
                      backgroundImage:
                        "linear-gradient(180deg, #7db1ff 0%, #3b82f6 50%, #1e40af 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      WebkitTextStroke: "1.25px rgba(0,0,0,.85)",
                      textShadow: "0 14px 26px rgba(0,0,0,.55)",
                      letterSpacing: "0.6px",
                    }}
                  >
                    Request for Services
                  </div>
                </div>
              </div>

              <div className="mt-3 flex gap-3 flex-wrap justify-center">
                <PhoneCTA />
                <ScrollToFormCTA label="Text Dispatch (Include GPS)" />
              </div>

              <div className="mt-4 rounded-2xl border border-white/15 bg-emerald-200/90 text-black p-4">
                <ContactSection />
              </div>
            </SteelPanel>
          </AnimBorder>
        </Section>

        {/* Bottom steel brand */}
        <div className="container max-w-7xl pb-2">
          <BrandSlab Tag="h2" />
        </div>

        {/* Payments + TikTok */}
        <div className="container max-w-7xl py-4 bg-red-900/60 rounded-2xl">
          <div className="w-full flex justify-center">
            <div className="rounded-2xl p-3 bg-gradient-to-r from-sky-500/30 via-rose-500/30 to-amber-400/30 border border-black/10 max-w-fit">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="font-extrabold text-white">We accept:</div>

                <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-yellow-50 to-amber-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>
                  <span className="font-extrabold">Cash</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-sky-50 to-blue-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                  <span className="font-extrabold">All Major Credit Cards</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-rose-50 to-red-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18l-2 12H5L3 6Z"/><path d="M7 10h10M6 14h12"/></svg>
                  <span className="font-extrabold">EFS Services</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <a
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-black text-white font-semibold"
              href="https://www.tiktok.com/@"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8.04c1.28 0 2.5.39 3.5 1.12V6.31c-1.06-.03-2.2-.36-3.18-.99-1.05-.66-1.8-1.56-2.23-2.59H11.8v12.02c0 1.26-1.03 2.28-2.3 2.28-1.27 0-2.3-1.02-2.3-2.28 0-1.25 1.03-2.27 2.3-2.27.24 0 .47.04.69.1V9.61c.94 .5 2 .76 3.12 .76Z"/>
              </svg>
              <span>Follow us on TikTok</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-ahCharcoal text-ahText mt-4">
          <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-8 text-sm">
            <div className="text-center md:text-left">
              <div className="font-extrabold text-white drop-shadow-sm">Call or Visit</div>
              <div className="font-extrabold text-amber-200 mt-1">A&amp;H Towing &amp; Recovery, LLC</div>
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
            <div className="text-center md:text-left">
              <div className="font-semibold text-white">Contact</div>
              <p className="mt-2 text-white drop-shadow-sm">
                <a className="underline font-semibold" href="tel:+14328424578">(432) 842-4578</a><br />
                <a className="underline font-semibold" href="mailto:ah.towing.recovery23@gmail.com">ah.towing.recovery23@gmail.com</a><br />
                <span className="font-extrabold text-amber-200">2712 W F Street, Pecos, TX 79772</span>
              </p>
            </div>
          </div>
        </footer>
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
    <div className="grid md:grid-cols-2 gap-6" id="contact">
      <div>
        {/* Yellow instruction box */}
        <div className="rounded-xl bg-yellow-300/95 border border-yellow-600 px-4 py-3 text-sm text-black font-extrabold mb-3">
          <strong>Instructions: </strong>
          Please complete the form below for services and to send your GPS information to our towing and emergency services dispatcher.
          Press the red button below to submit the form to text for services.
        </div>

        {/* FORM on mint green */}
        <form id="dispatch-form" className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Name</span>
            <input id="name-input" className="rounded-xl border px-3 py-2 bg-emerald-50" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Callback Phone</span>
            <input className="rounded-xl border px-3 py-2 bg-emerald-50" inputMode="tel" placeholder="(###) ###-####" value={callback} onChange={(e) => setCallback(e.target.value)} required />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Vehicle</span>
            <input className="rounded-xl border px-3 py-2 bg-emerald-50" placeholder="Year / Make / Model" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Number of Passengers</span>
            <input type="number" min="1" max="8" className="rounded-xl border px-3 py-2 bg-emerald-50" placeholder="e.g., 2" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
          </label>

          <label className="grid gap-1 text-black font-extrabold">
            <span className="text-sm">Issue</span>
            <textarea className="rounded-2xl border px-3 py-2 bg-emerald-50" rows={3} placeholder="Flat tire, no-start, accident, stuck, etc." value={issue} onChange={(e) => setIssue(e.target.value)} />
          </label>

          <div className="grid gap-2 rounded-2xl border p-3 bg-emerald-100/90 backdrop-blur">
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
                className="rounded-xl border px-3 py-1 text-sm hover:bg-emerald-50"
              >
                Use my GPS
              </button>
            </div>
            <div className="text-xs">
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
          <p className="text-xs font-extrabold">
            The red button composes a text with your details and GPS (if available) in your Messages app.
          </p>
        </form>
      </div>

      <div className="rounded-xl overflow-hidden border border-black/10">
        {/* “Call or Visit” line break + centered company name */}
        <div className="p-3 text-sm font-extrabold text-center bg-red-700/80 text-white rounded-t-xl">
          Call or Visit<br />
          <span className="text-amber-200">A&amp;H Towing &amp; Recovery, LLC</span>
        </div>
        {/* Map */}
        <iframe
          title="Shop Map (OpenStreetMap)"
          className="w-full h-[260px]"
          loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-103.7%2C31.3%2C-103.3%2C31.5&layer=mapnik"
          style={{ filter: "invert(1) hue-rotate(180deg) saturate(0.6) brightness(0.8)" }}
        />
        <div className="text-xs p-2 bg-red-800/90 text-white font-extrabold text-center">
          Prefer Google?{" "}
          <a className="underline" href="https://www.google.com/maps?q=2712%20W%20F%20Street,%20Pecos,%20TX%2079772" target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
        <div className="p-3 text-sm font-extrabold text-center" style={{ color: "#1e3a8a" }}>
          24/7 Professional Service — Call or Text Us!
        </div>
        <div className="mt-2 text-xs opacity-80 px-3 pb-3 text-center">Thank you for choosing A&amp;H!</div>
      </div>
    </div>
  );
}
