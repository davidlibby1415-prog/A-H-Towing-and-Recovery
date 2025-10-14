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

/* Red CTA scrolls to the form */
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

/* Accent strip used on every content box */
function AccentStrip({ color = "from-ahBlue to-ahRed" }) {
  return <div className={`h-1 w-full bg-gradient-to-r ${color}`} />;
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

/* Section wrapper */
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container max-w-7xl">
        <SoftBox className="mb-5 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ahCharcoal text-center">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-base md:text-lg opacity-90 text-center font-bold">
              <strong>{subtitle}</strong>
            </p>
          )}
        </SoftBox>
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

/* ===== Brand slabs ===== */

/* Bottom slab */
function BrandSlabBottom({ as: Tag = "h2", size = "md" }) {
  const sizes = { md: "text-3xl md:text-5xl" };
  return (
    <div
      className="mx-auto max-w-fit rounded-3xl border border-white/10 px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
      style={{
        backgroundImage:
          `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/diamond-plate.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Tag
        className={`${sizes[size]} text-center font-black leading-[1.04] tracking-tight`}
        style={{
          color: "#dfe3e8", // silver
          WebkitTextStroke: "2.5px #000", // black outline
          textShadow: "0 1px 1px rgba(0,0,0,.5), 0 6px 16px rgba(0,0,0,.45)",
        }}
      >
        A&amp;H TOWING &amp; RECOVERY, LLC
      </Tag>
    </div>
  );
}

/* TOP slab: silver text w/ black outline, matches bottom */
function BrandSlabTop({ as: Tag = "h1" }) {
  return (
    <Tag
      className="text-center font-black leading-[1.03] tracking-tight"
      style={{
        fontSize: "clamp(36px, 6vw, 88px)",
        color: "#dfe3e8",
        WebkitTextStroke: "2.5px #000",
        textShadow: "0 2px 2px rgba(0,0,0,.5), 0 10px 24px rgba(0,0,0,.45)",
      }}
    >
      A&amp;H TOWING &amp; RECOVERY, LLC
    </Tag>
  );
}

/* ========================= Stats (compact) ========================= */
function StatMini({ value, label }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-[clamp(18px,2.4vw,24px)] font-extrabold leading-none">{value}</div>
      <div
        className="text-[clamp(10px,1.2vw,12px)] font-bold opacity-90"
        style={{ marginTop: "calc(.75rem/1.618)" }}
      >
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

/* ========================= Top Marquee + GLOBAL TEXT TWEAKS ========================= */
function TopLocationsMarquee() {
  const text =
    "Pecos (Home Base) • Reeves County • Fort Stockton • Monahans • Kermit • Balmorhea • Pyote • Toyah • Grandfalls • Wink • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • Oilfield Routes";
  return (
    <div className="w-full bg-ahCharcoal text-[#c0c0c0] text-sm [text-shadow:0_1px_2px_rgba(0,0,0,.35)]">
      <div className="container max-w-7xl py-2">
        <div className="relative overflow-hidden">
          <div className="marquee whitespace-nowrap font-semibold tracking-tight">
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee { display: inline-flex; min-width: 200%; animation: marquee-x 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none !important; } }

        /* GLOBAL: darken + embolden body text for crispness */
        body { color: #0b0f14; font-weight: 600; }
        :where(p, li, span, small, label, a, button, dt, dd, td, th, h1, h2, h3, h4, h5, h6) {
          color: #0b0f14; font-weight: 700;
        }

        /* Diamond-steel panel finish for all SoftBox containers */
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
function VideoSection({ src, showBrand = false, minVH = 100, extraClass = "", children }) {
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
        {/* IMPORTANT: Files are in /public/Videos/*.mp4 (capital V) */}
        <source src={src} type="video/mp4" />
      </video>

      {/* Vignette overlay for legibility */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.2)_78%,rgba(0,0,0,0.32)_100%)]" />

      {/* Content on top of video */}
      <div className="relative z-20">
        {showBrand && (
          <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-full px-4 pointer-events-none z-[999]">
            <BrandSlabTop />
          </div>
        )}
        {children}
      </div>

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
        {/* Marquee */}
        <TopLocationsMarquee />

        {/* Gold tagline centered under marquee */}
        <div className="w-full bg-ahCharcoal">
          <div className="container max-w-7xl">
            <p className="text-center text-[13px] sm:text-sm font-bold tracking-tight text-yellow-400 py-1">
              Providing Towing, Recovery Services, and Emergency Roadside Assistance for West Texas
            </p>
          </div>
        </div>

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

        {/* ===== TOP BRAND BANNER on DIAMOND STEEL (matches bottom style) ===== */}
        <section
          className="relative z-[60] w-full overflow-hidden"
          style={{ minHeight: "clamp(220px, 35vh, 520px)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/diamond-plate.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-[70] h-full w-full flex items-end justify-center px-4 pb-8">
            <BrandSlabTop />
          </div>
        </section>

        {/* ========== tow1 background (frameless) with small duplicate brand ========== */}
        <VideoSection src="/Videos/tow1.mp4" showBrand minVH={100} />

        {/* Separator */}
        <div className="h-6 md:h-8 w-full bg-gradient-to-r from-ahBlue via-rose-300/40 to-ahRed" />

        {/* =================== HERO (intro content) =================== */}
        <section className="overflow-hidden">
          <div className="container max-w-7xl">
            <div className="relative rounded-3xl overflow-hidden min-h-[50vh] md:min-h-[60vh] grid place-items-center bg-gradient-to-br from-zinc-200 via-zinc-100 to-white">
              <div className="relative z-10 px-3 sm:px-4 py-6 md:py-8 w-full">
                <SoftBox>
                  <h2 className="text-2xl md:text-4xl font-extrabold leading-tight drop-shadow text-center">
                    Fast, Friendly, <span className="underline decoration-ahAccent decoration-4 underline-offset-4">Professional</span>{" "}
                    Towing — From Small Cars to Heavy Duty Tows
                  </h2>
                  <p className="mt-3 text-base md:text-lg opacity-95 text-center">
                    Stranded on I-20 or US-285? We dispatch immediately for light, medium &amp; heavy-duty tows,
                    winch-outs, accident recovery, and oilfield transport. Trained operators. Clear pricing.
                    <strong> Click below to call or text us direct!</strong>
                  </p>
                  <div className="mt-3"><StatsCompact /></div>
                  <div className="mt-4 flex flex-wrap items-center gap-3 justify-center">
                    <PhoneCTA />
                    <ScrollToFormCTA />
                  </div>
                </SoftBox>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-6 md:h-8 w-full bg-gradient-to-r from-ahRed via-white to-ahBlue" />

        {/* =================== tow2 behind Services =================== */}
        <VideoSection src="/Videos/tow2.mp4" minVH={90}>
          <Section
            id="services"
            title="24/7 Towing & Roadside — Built for West Texas and Oilfield Conditions"
            subtitle="From small tows to equipment moves, we’re ready when you need us."
          >
            <div className="grid md:grid-cols-3 gap-6">
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
                <SoftBox key={title}>
                  <div className="-mt-6 -mx-6 mb-4"><AccentStrip color={color} /></div>
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} grid place-items-center flex-shrink-0`}>
                      <Ico className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{title}</div>
                      <div className="text-sm opacity-80">{desc}</div>
                    </div>
                  </div>
                </SoftBox>
              ))}
            </div>

            {/* Centered CTAs */}
            <SoftBox className="mt-6">
              <div className="flex gap-3 flex-wrap justify-center">
                <PhoneCTA />
                <ScrollToFormCTA />
              </div>
            </SoftBox>
          </Section>
        </VideoSection>

        {/* Separator */}
        <div className="h-6 md:h-8 w-full bg-gradient-to-r from-slate-200 via-rose-200/40 to-sky-200" />

        {/* =================== Coverage =================== */}
        <Section id="coverage" title="Service Area" subtitle="Pecos, TX and Surrounding West Texas Region">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <SoftBox className="md:col-span-2 p-0" strip={false}>
              <AccentStrip />
              <iframe
                title="Coverage Map"
                className="w-full h-[360px] rounded-b-2xl"
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
                src="https://www.openstreetmap.org/export/embed.html?bbox=-104.2%2C30.9%2C-101.8%2C32.1&layer=mapnik"
              />
            </SoftBox>

            <SoftBox>
              <ul className="space-y-3 list-disc pl-5 text-base md:text-lg font-semibold text-ahCharcoal">
                <li>Pecos (Home Base) • Reeves County</li>
                <li>Fort Stockton • Monahans • Kermit</li>
                <li>Balmorhea • Pyote • Toyah • Grandfalls • Wink</li>
                <li>Midland/Odessa Metro &amp; I-20 Corridor</li>
                <li>US-285 • TX-17 • Oilfield Routes</li>
                <li className="pt-2">
                  <a className="text-ahBlue underline font-semibold" href="tel:+14328424578">
                    Professional coverage beyond this region is available — call to arrange long-distance transport.
                  </a>
                </li>
              </ul>
            </SoftBox>
          </div>
        </Section>

        {/* Separator */}
        <div className="h-6 md:h-8 w-full bg-gradient-to-r from-ahBlue via-white to-ahRed" />

        {/* =================== tow3 behind Training & Community =================== */}
        <VideoSection src="/Videos/tow3.mp4" minVH={90}>
          <Section
            id="proof"
            title="Training & Community — Why Professionals Trust A&H Towing and Recovery"
            subtitle="We train for heavy hauling, exercise with first responders, and handle oilfield moves. Watch our videos below to learn more!"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Heavy Hauling Readiness", desc: "Operators trained for complex recoveries and oilfield moves using proper rigging and safety protocols." },
                { title: "First Responder Coordination", desc: "Regular coordination with local responders ensures safe, fast scene management when it matters most." },
                { title: "Equipment & Care", desc: "Modern gear, careful handling, and clear communication from dispatch to drop-off." },
              ].map(({ title, desc }) => (
                <SoftBox key={title}>
                  <div className="-mt-6 -mx-6 mb-4"><AccentStrip /></div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm opacity-80 mt-1">{desc}</div>
                </SoftBox>
              ))}
            </div>
          </Section>
        </VideoSection>

        {/* Contact */}
        <Section id="contact" title="Request a Tow" subtitle="Fastest: Call or Text. Share your exact location and key details in one tap.">
          {/* Centered buttons ABOVE the form */}
          <SoftBox className="mb-4">
            <div className="flex gap-3 flex-wrap justify-center">
              <PhoneCTA />
              <ScrollToFormCTA label="Text Dispatch (Include GPS)" />
            </div>
          </SoftBox>

          {/* Form + bottom map */}
          <SoftBox>
            <ContactSection />
          </SoftBox>
        </Section>

        {/* Bottom brand on steel */}
        <div className="container max-w-7xl pb-2">
          <BrandSlabBottom />
        </div>

        {/* Footer */}
        <footer className="bg-ahCharcoal text-ahText mt-6">
          <div className="container max-w-7xl grid md:grid-cols-4 gap-8 py-10 text-sm">
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
                <li><a className="underline" href="#proof">Training & Proof</a></li>
                <li><a className="underline" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Social</div>
              <ul className="mt-2 space-y-1">{/* no external embeds */}</ul>
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

        {/* Anchor for scroll */}
        <div id="form-start" className="h-0 w-full" aria-hidden="true" />

        <div className="px-5 pt-5 md:px-6">
          <div className="rounded-xl bg-blue-50/80 border border-blue-200 px-4 py-3 text-sm text-ahCharcoal">
            <strong>Instructions: </strong>
            Please complete the form below for services and to send your GPS information to our towing and emergency services dispatcher.
            Press the red button below to submit the form to text for services.
          </div>
        </div>

        <form id="dispatch-form" className="grid gap-4 p-5 md:p-6" onSubmit={(e) => e.preventDefault()}>
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input className="rounded-xl border px-3 py-2" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Callback Phone</span>
            <input className="rounded-xl border px-3 py-2" inputMode="tel" placeholder="(###) ###-####" value={callback} onChange={(e) => setCallback(e.target.value)} required />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Vehicle</span>
            <input className="rounded-xl border px-3 py-2" placeholder="Year / Make / Model" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Number of Passengers</span>
            <input type="number" min="1" max="8" className="rounded-xl border px-3 py-2" placeholder="e.g., 2" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Issue</span>
            <textarea className="rounded-2xl border px-3 py-2" rows={3} placeholder="Flat tire, no-start, accident, stuck, etc." value={issue} onChange={(e) => setIssue(e.target.value)} />
          </label>

          <div className="grid gap-2 rounded-2xl border p-3 bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Share GPS Location</span>
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
            <div className="text-xs opacity-80">
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
          <p className="text-xs opacity-70">
            The red button composes a text with your details and GPS (if available) in your Messages app.
          </p>
        </form>
      </SoftBox>

      <SoftBox>
        <div className="font-semibold">Call or Visit</div>
        <p className="mt-2 text-sm">
          Phone: <a className="underline" href="tel:+14328424578">(432) 842-4578</a><br />
          Email: <a className="underline" href="mailto:ah.towing.recovery23@gmail.com">ah.towing.recovery23@gmail.com</a>
        </p>
        <p className="mt-4 text-sm">Address: 2712 W F Street, Pecos, TX 79772</p>
        <p className="mt-2 text-sm">Hours: 24/7 Dispatch</p>
        <div className="mt-6 rounded-xl overflow-hidden border border-black/10">
          <iframe title="Shop Map (OpenStreetMap)" className="w-full h-[220px]" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-103.7%2C31.3%2C-103.3%2C31.5&layer=mapnik" />
          <div className="text-xs p-2 bg-white/90">
            Prefer Google?{" "}
            <a className="underline" href="https://www.google.com/maps?q=2712%20W%20F%20Street,%20Pecos,%20TX%2079772" target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs opacity-80">24/7 Professional Service — Call or Text Us!</div>
      </SoftBox>
    </div>
  );
}
