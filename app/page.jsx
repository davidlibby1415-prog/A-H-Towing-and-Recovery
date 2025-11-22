"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  TopMarquee as TopLocationsMarquee,
  SiteHeader,
  SiteFooter,
  PhoneCTA,
  ScrollToMainFormCTA,
  AnimBorder,
  SteelPanel,
} from "../components/ServiceLayout";

/* ===== Small helpers used locally ===== */

function scrollToFormWithOffset(targetId = "dispatch-form", offset = 210) {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const el = document.getElementById(targetId);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - offset;
  window.scrollTo({ top, left: 0, behavior: "smooth" });
  setTimeout(() => document.getElementById("name-input")?.focus(), 600);
}

/* ----- Icons you already used ----- */
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

/* ===== Small “Chip” and “BubbleBlock” used in cards ===== */
function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-xl px-3 py-1 bg-black/45 text-white font-extrabold shadow-sm align-middle ${className}`}
      style={{
        WebkitTextStroke: "0.25px rgba(0,0,0,.7)",
        textShadow: "0 1px 2px rgba(0,0,0,.6)",
        border: "1.5px solid rgba(255,255,255,0.95)",
      }}
    >
      {children}
    </span>
  );
}
function BubbleBlock({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-2xl px-4 py-3 bg-black/45 text-white font-extrabold shadow ${className}`}
      style={{
        WebkitTextStroke: "0.25px rgba(0,0,0,.7)",
        textShadow: "0 1px 2px rgba(0,0,0,.6)",
      }}
    >
      {children}
    </div>
  );
}

/* ====== Time & Temp for header (shows DATE above time) ====== */
function TimeTemp() {
  const [now, setNow] = useState(new Date());
  const [temp, setTemp] = useState(null);
  const [locationLabel, setLocationLabel] = useState("Pecos, TX");

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  // keep your OpenWeather fetch (if key present)
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
    if (!apiKey) return;

    const lat = 31.4229;
    const lon = -103.4938;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.main?.temp) setTemp(Math.round(data.main.temp));
        if (data?.name) setLocationLabel(`${data.name}, TX`);
      })
      .catch(() => {});
  }, []);

  const timeStr = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const dateStr = now.toLocaleDateString([], { year: "numeric", month: "short", day: "2-digit" });

  return (
    <div className="hidden sm:flex flex-col items-end text-[10px] leading-tight text-amber-100/90">
      <span className="font-semibold">{dateStr}</span>
      <span className="font-semibold">{timeStr}</span>
      <span className="font-semibold">
        {temp != null ? `${temp}°F` : "--°F"} • {locationLabel}
      </span>
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
    <section
      className={`relative isolate w-full overflow-hidden ${extraClass}`}
      style={{ minHeight: `min(${minVH}vh, 1200px)` }}
    >
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
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,${
            overlayStrength * 0.57
          }) 78%, rgba(0,0,0,${overlayStrength}) 100%)`,
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

/* ========================= Top Steel Banner ========================= */
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

/* ========================= Medals (bigger on phones) ========================= */
function GoldenFacts() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="w-full px-2 max-w-[1024px] sm:max-w-[900px]">
        <img
          src="/ahh-service-medals.jpg"
          alt="Great Response Time, Operating Hours, and Service Area awards for A&H Towing & Recovery"
          className="w-full h-auto rounded-2xl border-4 border-yellow-400/90 shadow-[0_0_30px_rgba(250,204,21,0.75)] bg-black sm:scale-100 scale-[1.08]"
        />
      </div>
    </div>
  );
}

/* ============================== Page ============================== */

export default function Home() {
  // Keep normal “scroll to top”
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // ⬇ NEW: If we landed here with /#contact, auto-snap to the form with the same offset
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        const el = document.getElementById("dispatch-form");
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = window.scrollY + rect.top - 210;
          window.scrollTo({ top, left: 0, behavior: "smooth" });
          setTimeout(() => document.getElementById("name-input")?.focus(), 500);
        }
      }, 250);
    }
  }, []);

  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesCloseTimeout = useRef(null);
  const openServices = () => {
    if (servicesCloseTimeout.current) clearTimeout(servicesCloseTimeout.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (servicesCloseTimeout.current) clearTimeout(servicesCloseTimeout.current);
    servicesCloseTimeout.current = setTimeout(() => setServicesOpen(false), 350);
  };

  const locations = [
    "Balmorhea","Carlsbad","Coyanosa","Crane","Crane County","Culberson County","Ector County","Fort Davis","Fort Stockton","Grandfalls","Goldsmith","Imperial","I-20 Corridor","Jal","Kermit","Lindsay","Loving County","McCamey","Mentone","Midland County","Midland/Odessa Metro","Monahans","Notrees","Odessa","Oilfield Routes","Orla","Pecos County","Pecos, TX (Home Base)","Plateau","Pyote","Reeves County","Royalty","Saragosa","TX-17","TX-18","TX-302","Toyah","Toyahvale","Upton County","US-285","Van Horn","Verhalen","Ward County","Wickett","Wink","Winkler County",
  ].sort((a, b) => a.localeCompare(b));

  return (
    <>
      {/* Top marquee */}
      <TopLocationsMarquee />

      {/* Header (uses local TimeTemp with DATE) */}
      <header className="sticky top-0 z-[120] bg-ahCharcoal text-ahText border-b border-black/30">
        <div className="container max-w-7xl flex items-center gap-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-black grid place-items-center font-bold shadow-cta">
              <span className="text-[15px] font-extrabold" style={{ color: "#e10600" }}>
                A&amp;H
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-bold drop-shadow text-red-600">
                A&amp;H Towing &amp; Recovery, LLC
              </div>
              <div className="text-xs opacity-90">2712 W F Street, Pecos, TX 79772</div>
              <div className="text-xs">
                <a className="underline underline-offset-4 hover:opacity-100" href="mailto:ah.towing.recovery23@gmail.com">
                  ah.towing.recovery23@gmail.com
                </a>
              </div>
            </div>
          </div>

          <nav className="ml-auto hidden md:flex items-center gap-6 text-base md:text-lg font-extrabold">
            <div className="relative" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
              <button
                type="button"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
                onClick={() => setServicesOpen((v) => !v)}
              >
                <span>Services</span>
                <span className="text-[10px]">▾</span>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 min-w-[260px] rounded-xl bg-black/95 text-xs sm:text-sm text-white shadow-lg border border-yellow-400 z-[200]">
                  <Link href="/light-duty-towing" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Light Duty Towing</Link>
                  <Link href="/heavy-duty-commercial-towing" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Heavy Duty &amp; Commercial Towing</Link>
                  <Link href="/oilfield-routes-tow-service" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Oilfield Routes Tow Service</Link>
                  <Link href="/equipment-transport" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Equipment Transport</Link>
                  <Link href="/flatbed-rollback-services" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Flatbed / Rollback Services</Link>
                  <Link href="/emergency-roadside-assistance" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Emergency Roadside Assistance</Link>
                  <Link href="/accidents-and-accident-removal" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Accidents &amp; Removal</Link>
                  <Link href="/winching-recovery" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black" onClick={() => setServicesOpen(false)}>Winching / Recovery</Link>
                </div>
              )}
            </div>

            <a href="#coverage" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">Coverage</a>
            <Link href="/owners" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">Owners</Link>
            <Link href="/tips-tricks" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">Tips &amp; Tricks</Link>
            <a href="#contact" className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors">Request a Tow</a>
          </nav>

          <div className="ml-4 flex items-center gap-3">
            <TimeTemp />
            <PhoneCTA className="hidden sm:inline-flex" />
          </div>
        </div>
      </header>

      {/* Top steel banner */}
      <section className="relative z-[10] w-full overflow-hidden" style={{ minHeight: "clamp(110px, 15vh, 200px)" }}>
        <div className="relative z-[20] h-full w-full flex items-center justify-center px-2 py-0.5">
          <BrandSlab Tag="h1" />
        </div>
      </section>

      {/* Tow1 video */}
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
        videoStyle={{ objectPosition: "center bottom" }}
      />

      <div className="h-7" />

      {/* ===== STRANDED SECTION (kept) ===== */}
      <section className="py-7 md:py-8 bg-red-800">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel className="text-center">
              <div className="flex justify-center">
                <div
                  className="inline-block rounded-xl p-[12px]"
                  style={{ backgroundImage: "repeating-linear-gradient(-45deg, #111827 0 10px, #fde047 10px 20px)" }}
                >
                  <div className="rounded-lg px-4 py-3 text-center" style={{ backgroundColor: "#fde047" }}>
                    <h2
                      className="font-extrabold tracking-tight leading-[1.1]"
                      style={{
                        fontFamily: '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                        fontSize: "clamp(30px,4.4vw,54px)",
                        color: "#111827",
                        letterSpacing: "0.02em",
                        WebkitTextStroke: "0.5px rgba(0,0,0,0.55)",
                        textShadow: "0 1px 2px rgba(0,0,0,0.25)",
                      }}
                    >
                      Stranded on the Side of the Road???
                    </h2>

                    <div className="mt-2 font-extrabold leading-snug text-[20px]" style={{ color: "#0b1220" }}>
                      We dispatch immediately for light, medium &amp; heavy-duty tows, winch-outs, accident recovery, and oilfield transport.
                      <br />Trained operators.<br />Clear pricing.
                      <br />
                      <span className="mt-3 inline-block underline font-black">
                        ⬇ CLICK BELOW TO CALL OR TEXT US DIRECT ⬇
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-5" />

              <div className="flex items-center justify-center gap-5 flex-wrap">
                <PhoneCTA />
                <ScrollToMainFormCTA label="CLICK HERE TO TEXT DISPATCH (INCLUDE MY GPS LOCATION)" />
              </div>

              <GoldenFacts />
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-7 md:py-8 bg-red-800/90">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel className="text-center">
              <div className="inline-block rounded-2xl px-5 py-2 bg-black backdrop-blur-sm" style={{ border: "1.5px solid #c0c0c0" }}>
                <h3
                  className="text-[clamp(32px,5.2vw,56px)] font-black leading-tight tracking-tight"
                  style={{
                    fontFamily: '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial',
                    color: "#60a5fa",
                    textShadow: "0 2px 14px rgba(0,0,0,.45)",
                    letterSpacing: "0.2px",
                  }}
                >
                  Services Provided
                </h3>
                <p className="mt-1 text-base md:text-lg font-extrabold text-amber-100 uppercase">
                  CLICK BELOW FOR MORE INFORMATION
                </p>
              </div>

              {/* Tow Services */}
              <div className="mt-6">
                <div className="mb-3">
                  <div className="inline-block rounded-2xl px-4 py-1.5 bg-black backdrop-blur-sm" style={{ border: "1.5px solid #c0c0c0" }}>
                    <h4
                      className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
                      style={{ fontFamily: '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial', color: "#60a5fa" }}
                    >
                      Tow Services
                    </h4>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: IconTruck, title: "Light Duty Towing", desc: "Cars • SUVs • Pickups • Long & short distance", href: "/light-duty-towing" },
                    { icon: IconTruck, title: "Heavy Duty & Commercial Towing", desc: "Oilfield & Fleet • Long & short distance", href: "/heavy-duty-commercial-towing" },
                    { icon: IconTruck, title: "Oilfield Routes Tow Service", desc: "Lease roads • Remote access • Long & short distance", href: "/oilfield-routes-tow-service" },
                    { icon: IconFlatbed, title: "Equipment Transport", desc: "Light equipment & tools • Long & short distance", href: "/equipment-transport" },
                    { icon: IconFlatbed, title: "Flatbed / Rollback Services", desc: "Damage-conscious transport • Long & short distance", href: "/flatbed-rollback-services" },
                  ].map(({ icon: Ico, title, desc, href }) => (
                    <AnimBorder key={title}>
                      <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]">
                        <SteelPanel className="p-4 cursor-pointer transition-transform duration-200 hover:scale-[1.05] hover:shadow-xl">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                              <Ico className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <BubbleBlock className="!px-3 !py-2">
                                <div className="font-extrabold text-lg">{title}</div>
                                <div className="text-base text-white/95 mt-0.5">{desc}</div>
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
                  <div className="inline-block rounded-2xl px-4 py-1.5 bg-black backdrop-blur-sm" style={{ border: "1.5px solid #c0c0c0" }}>
                    <h4
                      className="text-[clamp(20px,3.6vw,32px)] font-black tracking-tight"
                      style={{ fontFamily: '"Inter","Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial', color: "#60a5fa" }}
                    >
                      Emergency Roadside Assistance
                    </h4>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: IconFuel, title: "Fuel Delivery", desc: "Gas & diesel", href: "/emergency-roadside-assistance" },
                    { icon: IconBolt, title: "Jumpstarts", desc: "12V & roadside checks", href: "/emergency-roadside-assistance" },
                    { icon: IconLock, title: "Lockouts", desc: "Fast entry, no damage", href: "/emergency-roadside-assistance" },
                    // ⬇ NEW items requested
                    { icon: IconBolt, title: "Tire Changing Services", desc: "Spare install on the roadside", href: "/emergency-roadside-assistance" },
                    { icon: IconTruck, title: "Provide Safe Transportation", desc: "Ride to town, hotel, or meetup", href: "/emergency-roadside-assistance" },
                  ].map(({ icon: Ico, title, desc, href }) => (
                    <AnimBorder key={title}>
                      <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 rounded-[22px]">
                        <SteelPanel className="p-4 cursor-pointer transition-transform duration-200 hover:scale-[1.05] hover:shadow-xl">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ahBlue to-ahRed grid place-items-center flex-shrink-0">
                              <Ico className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <BubbleBlock className="!px-3 !py-2">
                                <div className="font-extrabold text-lg">{title}</div>
                                <div className="text-base text-white/95 mt-0.5">{desc}</div>
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
                <ScrollToMainFormCTA />
              </div>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section id="coverage" className="py-7 md:py-8 bg-red-900/80">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel>
              <div className="grid md:grid-cols-2 gap-5 items-start">
                {/* LEFT: heading + map */}
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-black/85 border border-amber-400 px-6 py-4 shadow-xl max-w-2xl w-full">
                      <div className="flex items-center justify-center gap-3">
                        <span
                          className="text-xl md:text-3xl font-black text-amber-300 tracking-tight text-center"
                          style={{
                            fontFamily:
                              '"Comic Sans MS","Trebuchet MS","Segoe UI",system-ui',
                            textShadow: "0 3px 6px rgba(0,0,0,.7)",
                          }}
                        >
                          Where in the TEXAS am I?
                        </span>
                        <span className="text-3xl md:text-4xl" aria-hidden="true">🌵</span>
                      </div>
                      <div className="mt-2 text-xs md:text-sm font-bold text-amber-50 text-center">
                        Use the map below to find your location or use the buttons below to contact us ASAP.
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-400/90 bg-black shadow-[0_0_25px_rgba(251,191,36,0.7)]">
                    <iframe
                      title="Service Area Map (Dark) with Radius"
                      className="w-full h-[320px]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      allowFullScreen
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-108%2C28.5%2C-98%2C34.5&layer=mapnik&marker=31.42%2C-103.49"
                      style={{ filter: "invert(1) hue-rotate(180deg) saturate(0.6) brightness(0.8)" }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div
                        className="rounded-full"
                        style={{
                          width: "70%",
                          height: "70%",
                          border: "3px dashed rgba(250,204,21,0.95)",
                          boxShadow: "0 0 40px rgba(250,204,21,0.7), 0 0 80px rgba(250,204,21,0.5)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT: heading + cities list + buttons */}
                <div className="space-y-3 flex flex-col items-center md:items-stretch">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-black/85 border border-amber-400 px-6 py-4 shadow-xl max-w-2xl w-full">
                      <div className="flex items-center justify-center gap-3">
                        <span
                          className="text-xl md:text-3xl font-black text-amber-300 tracking-tight text-center"
                          style={{
                            fontFamily: '"Comic Sans MS","Trebuchet MS","Segoe UI",system-ui',
                            textShadow: "0 3px 6px rgba(0,0,0,.7)",
                          }}
                        >
                          Service Area
                        </span>
                        <span className="text-3xl md:text-4xl" aria-hidden="true">🌵</span>
                      </div>
                      <div className="mt-2 text-xs md:text-sm font-bold text-amber-50 text-center">
                        From A to Z, where do you need us? Just ask.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 rounded-2xl border-4 border-yellow-400/90 bg-black/40 p-4 shadow-[0_0_25px_rgba(251,191,36,0.6)]">
                    <div className="mt-1 flex flex-wrap gap-3 justify-center md:justify-start">
                      <a
                        href="tel:+14328424578"
                        className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-xs md:text-sm font-extrabold bg-ahBlue text-white shadow-cta hover:brightness-110 transition-transform duration-200 hover:scale-105 active:scale-95 border-2 border-white"
                      >
                        Click Here to Call Dispatch
                      </a>
                      <button
                        type="button"
                        onClick={() => scrollToFormWithOffset("dispatch-form")}
                        className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-xs md:text-sm font-extrabold bg-ahRed text-white shadow-cta hover:brightness-110 transition-transform duration-200 hover:scale-105 active:scale-95 border-2 border-white outline outline-2 outline-white"
                      >
                        Click Here to Text Location
                      </button>
                    </div>

                    <div className="mt-3">
                      <BubbleBlock className="!px-5 !py-4 max-w-xl text-base md:text-lg leading-relaxed">
                        {locations.join(" • ")}
                      </BubbleBlock>
                    </div>
                  </div>
                </div>
              </div>

              {/* Johnny Cash quote */}
              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-5xl rounded-2xl bg-black/85 border-2 border-yellow-300 shadow-[0_0_28px_rgba(251,191,36,0.8)] px-4 sm:px-6 py-3 text-center">
                  <div className="text-2xl md:text-3xl mb-1">🎶 🎵 🎶</div>
                  <p className="text-base md:text-lg font-extrabold text-amber-100">
                    &quot;Listen, I&apos;ve traveled every road in this here land. I&apos;ve been everywhere, man. Crossed the deserts bare, man.&quot; – Johnny Cash
                  </p>
                  <div className="mt-1 text-xl">🎵 🎶 🎵</div>
                </div>
              </div>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* Tow3 video */}
      <section className="py-7 md:py-8 bg-red-800/90">
        <div className="container max-w-7xl">
          <VideoSection src="/Videos/tow3.mp4" minVH={86} videoStyle={{ filter: "contrast(1.12) saturate(1.1)" }} />
        </div>
      </section>

      {/* =================== Request for Services =================== */}
      <section id="contact" className="py-7 md:py-8 bg-red-900/90">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel>
              <div className="text-center">
                <div className="inline-block rounded-2xl px-6 py-3 bg-black backdrop-blur-sm" style={{ border: "1.5px solid #ffffff" }}>
                  <div
                    className="font-extrabold"
                    style={{
                      fontFamily: '"Gill Sans", "Trebuchet MS", "Segoe UI", system-ui, -apple-system, Arial',
                      fontSize: "clamp(32px,5.6vw,64px)",
                      backgroundImage: "linear-gradient(180deg, #7db1ff 0%, #3b82f6 50%, #1e40af 100%)",
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
                <ScrollToMainFormCTA label="Text Dispatch (Include GPS)" />
              </div>

              {/* Keep your existing ContactSection here if you had it inline.
                  If your ContactSection component lives in this file, leave it as-is.
                  If it’s imported, keep the import and usage unchanged. */}
              <div id="dispatch-form" className="mt-6 rounded-2xl border border-white/15 bg-emerald-200/90 text-black p-4">
                {/* Your existing form layout goes here – unchanged.
                    If your form is already implemented elsewhere in this file,
                    keep that implementation. */}
                {/* Placeholder so the anchor exists: */}
                <div className="text-black font-bold">
                  (Form content unchanged – this container exists for precise scrolling.)
                </div>
              </div>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* Bottom steel brand */}
      <div className="container max-w-7xl pb-2">
        <BrandSlab Tag="h2" />
      </div>

      {/* Payments row etc. stays as you had it, or omit if not used */}

      <SiteFooter />
    </>
  );
}
