"use client";

import React, { useRef, useState, useEffect } from "react";
import Script from "next/script";

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

/* Red CTA used everywhere EXCEPT the form; this only scrolls to the form */
function ScrollToFormCTA({
  className = "",
  label = "Text Dispatch (Include GPS)",
  targetId = "dispatch-form",
}) {
  const onClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId) || document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // small delay to let scroll finish, then focus first field
      setTimeout(() => {
        const first = el.querySelector("input, textarea, select, button");
        first?.focus();
      }, 500);
    } else {
      // fallback to hash if element not found
      window.location.hash = "#contact";
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

/* Box shell with bg-white/90 + blur and an accent strip on top */
function SoftBox({ children, className = "", strip = true }) {
  return (
    <div className={`rounded-2xl border border-black/10 shadow-xl bg-white/90 backdrop-blur ${className}`}>
      {strip && <AccentStrip />}
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}

/* Section wrapper: headline panel (also soft) + content */
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container max-w-7xl">
        <SoftBox className="mb-5 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ahCharcoal text-center">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-base md:text-lg opacity-90 text-center">
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

/* Brand slab (bright like top & bottom) */
function BrandSlab({ as: Tag = "h1", size = "lg" }) {
  const sizes = { lg: "text-4xl md:text-6xl", md: "text-2xl md:text-4xl" };
  return (
    <div className="mx-auto max-w-fit rounded-3xl border border-white/10 bg-[#0b0f14] px-6 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
      <Tag
        className={`text-center ${sizes[size]} font-black leading-[1.05] tracking-tight`}
        style={{
          WebkitTextStroke: "1.5px #0b0f14",
          textShadow: "0 1px 1px rgba(0,0,0,.4), 0 6px 16px rgba(0,0,0,.35)",
        }}
      >
        <span className="bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-300 bg-clip-text text-transparent">
          A&amp;H TOWING &amp; RECOVERY, LLC
        </span>
      </Tag>
    </div>
  );
}

/* ===================== TikTok Frames & Carousel ===================== */
function FramedTikTok({ url, id, caption }) {
  return (
    <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
      <div className="relative rounded-[1.6rem] p-0.5 sm:p-1 bg-gradient-to-r from-ahRed via-white to-ahBlue shadow-2xl">
        <div className="rounded-[1.4rem] bg-black p-1.5 sm:p-2">
          <div className="mx-auto mb-1.5 h-2.5 w-20 rounded-b-xl bg-black/60" />
          <div className="relative w-full aspect-[9/16] md:aspect-[7/12] lg:aspect-[2/3] overflow-hidden rounded-[1rem]">
            <div className="absolute inset-0 overflow-hidden">
              <blockquote
                className="tiktok-embed h-full w-full"
                cite={url}
                data-video-id={id}
                style={{ maxWidth: "100%", minWidth: 260, height: "100%", background: "transparent" }}
              >
                <section>
                  <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@285302ditchking">
                    @285302ditchking
                  </a>
                  <p className="text-white/90">{caption}</p>
                </section>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TikTokCarousel({ index, onIndexChange }) {
  const railRef = useRef(null);
  const items = [
    { id: "7215414816326880554", url: "https://www.tiktok.com/@285302ditchking/video/7215414816326880554", caption: "Don’t Drink & Drive — we’ll get you and your vehicle home safe." },
    { id: "6886898181007822086", url: "https://www.tiktok.com/@285302ditchking/video/6886898181007822086", caption: "Classic Car • Light Tow • Professional care and secure transport." },
    { id: "7322804972259790110", url: "https://www.tiktok.com/@285302ditchking/video/7322804972259790110", caption: "Rolling Down In The Deep — recovery done right." },
    { id: "7320362428586396958", url: "https://www.tiktok.com/@285302ditchking/video/7320362428586396958", caption: "Another Roll Over — rapid response and safety first." },
    { id: "7318154070307491103", url: "https://www.tiktok.com/@285302ditchking/video/7318154070307491103", caption: "Heavy Lifting! — oilfield muscle, professional control." },
    { id: "7277341945796611371", url: "https://www.tiktok.com/@285302ditchking/video/7277341945796611371", caption: "Drive with Caution! — we’re ready when things go wrong." },
  ];

  const scrollToIndex = (i) => {
    const rail = railRef.current;
    if (!rail) return;
    const child = rail.children[i];
    if (child?.scrollIntoView) child.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      const children = Array.from(rail.children);
      const { scrollLeft } = rail;
      let nearest = 0;
      let best = Infinity;
      children.forEach((el, i) => {
        const dist = Math.abs(el.offsetLeft - scrollLeft);
        if (dist < best) {
          best = dist;
          nearest = i;
        }
      });
      onIndexChange(nearest);
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, [onIndexChange]);

  return (
    <div className="relative">
      <div
        ref={railRef}
        className="grid grid-flow-col auto-cols-[min(320px,100%)] sm:auto-cols-[min(360px,100%)] md:auto-cols-[min(400px,100%)] gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1.5"
      >
        {items.map((v) => (
          <div key={v.id} className="snap-start">
            <FramedTikTok url={v.url} id={v.id} caption={v.caption} />
          </div>
        ))}
      </div>

      {/* Dots tied to THIS carousel */}
      <div className="mt-2 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onIndexChange(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${i === index ? "w-5 bg-ahBlue" : "bg-black/30 hover:bg-black/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ========================= Stats (compact) ========================= */
function StatMini({ value, label }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-[clamp(18px,2.4vw,24px)] font-extrabold leading-none">{value}</div>
      <div className="text-[clamp(10px,1.2vw,12px)] font-bold opacity-90" style={{ marginTop: "calc(.75rem/1.618)" }}>
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

/* ========================= Top Marquee ========================= */
function TopLocationsMarquee() {
  const text =
    "Pecos (Home Base) • Reeves County • Fort Stockton • Monahans • Kermit • Balmorhea • Pyote • Toyah • Grandfalls • Wink • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • Oilfield Routes";
  return (
    <div className="w-full bg-ahCharcoal text-ahText text-sm">
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
      `}</style>
    </div>
  );
}

/* ============================== Page ============================== */
export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  return (
    <main className="text-ahCharcoal min-h-screen bg-diamond">
      {/* Diamond-plate image background */}
      <style jsx global>{`
        .bg-diamond {
          background-image:
            linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)),
            url("/diamond-plate.jpg");
          background-size: cover, 320px 320px;
          background-repeat: no-repeat, repeat;
          background-attachment: fixed;
          background-position: center top, center;
        }
      `}</style>

      <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />

      {/* Marquee */}
      <TopLocationsMarquee />

      {/* Gold tagline centered under marquee */}
      <div className="w-full bg-ahCharcoal">
        <div className="container max-w-7xl">
          <p className="text-center text-[13px] sm:text-sm font-semibold tracking-tight text-yellow-400 py-1">
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
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#coverage" className="hover:opacity-80">Coverage</a>
            <a href="#proof" className="hover:opacity-80">Training & Proof</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <PhoneCTA className="hidden sm:inline-flex" />
        </div>
      </header>

      {/* Brand slab */}
      <div className="container max-w-7xl pt-5 md:pt-6">
        <BrandSlab as="h1" size="lg" />
      </div>

      {/* Top call button: perfectly centered under big name */}
      <div className="container max-w-7xl pt-3 pb-2">
        <div className="flex justify-center w-full">
          <PhoneCTA label="Click to Call for Service" />
        </div>
      </div>

      {/* HERO (intro only) */}
      <section className="overflow-hidden">
        <div className="container max-w-7xl pt-4 md:pt-6 pb-6">
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
              {/* RED buttons now just bring customers to the form */}
              <ScrollToFormCTA />
            </div>
          </SoftBox>
        </div>
      </section>

      {/* ACTION VIDEOS — TikTok carousel below hero */}
      <section className="overflow-hidden">
        <div className="container max-w-5xl px-3 sm:px-4">
          <h3 className="text-center font-extrabold text-blue-900 underline underline-offset-4 mb-3">
            Watch Us Work on TikTok!
          </h3>
          <SoftBox>
            <div className="mx-auto max-w-[420px] sm:max-w-[760px]">
              <TikTokCarousel index={heroIndex} onIndexChange={setHeroIndex} />
            </div>
          </SoftBox>
        </div>
      </section>

      {/* Trust banner */}
      <div className="container max-w-7xl py-8 md:py-[calc(1rem*1.618)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Licensed & Insured", sub: "Fully compliant. Professional operators.", icon: IconShield, color: "from-ahBlue to-blue-500" },
            { title: "24/7 Dispatch", sub: "Call anytime — we roll now.", icon: IconClock, color: "from-ahRed to-red-500" },
            { title: "Light • Medium • Heavy", sub: "Cars to oilfield equipment.", icon: IconTruck, color: "from-emerald-500 to-green-600" },
            { title: "Trains w/ First Responders", sub: "Safety. Speed. Coordination.", icon: IconBolt, color: "from-violet-500 to-indigo-600" },
          ].map(({ title, sub, icon: I, color }, idx) => (
            <SoftBox key={idx}>
              <div className="-mt-6 -mx-6 mb-4"><AccentStrip color={color} /></div>
              <div className="flex items-start gap-3">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${color} grid place-items-center text-white`}>
                  <I className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-xs opacity-80">{sub}</div>
                </div>
              </div>
            </SoftBox>
          ))}
        </div>
      </div>

      {/* Services */}
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

        {/* Centered CTAs; red scrolls to the form */}
        <SoftBox className="mt-6">
          <div className="flex gap-3 flex-wrap justify-center">
            <PhoneCTA />
            <ScrollToFormCTA />
          </div>
        </SoftBox>
      </Section>

      {/* Coverage */}
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

      {/* Proof / Training */}
      <Section
        id="proof"
        title="Training & Community — Why Professionals Trust A&H Towing and Recovery"
        subtitle="We train for heavy hauling, exercise with first responders, and handle oilfield moves. Watch our videos below to learn more!"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { url: "https://www.tiktok.com/@285302ditchking/video/7501393555433262367", id: "7501393555433262367", caption: "Heavy hauling training — precision, safety, and control." },
            { url: "https://www.tiktok.com/@285302ditchking/video/7500641039896628510", id: "7500641039896628510", caption: "A&H operators exercise with local first responders — teamwork in action." },
            { url: "https://www.tiktok.com/@285302ditchking/video/7480739591905938719", id: "7480739591905938719", caption: "Oilfield hauling — Pulling Unit move. No job too big." },
          ].map((v) => (
            <SoftBox key={v.id}>
              <FramedTikTok url={v.url} id={v.id} caption={v.caption} />
            </SoftBox>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Request a Tow" subtitle="Fastest: Call or Text. Share your exact location and key details in one tap.">
        {/* Centered buttons ABOVE the form — red just scrolls to the form */}
        <SoftBox className="mb-4">
          <div className="flex gap-3 flex-wrap justify-center">
            <PhoneCTA />
            <ScrollToFormCTA label="Text Dispatch (Include GPS)" />
          </div>
        </SoftBox>

        {/* Form + bottom map (not centered) */}
        <SoftBox>
          <ContactSection />
        </SoftBox>
      </Section>

      {/* Brand slab (bottom) — bright to match top */}
      <div className="container max-w-7xl pb-2">
        <BrandSlab as="h2" size="md" />
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
            <ul className="mt-2 space-y-1">
              <li>
                <a className="underline" href="https://www.tiktok.com/@285302ditchking" target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </li>
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

/* ========================= Contact Section ========================= */
function ContactSection() {
  const [name, setName] = useState("");
  const [callback, setCallback] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [passengers, setPassengers] = useState("");
  const [issue, setIssue] = useState("");
  const [coords, setCoords] = useState(null);
  const [locStatus, setLocStatus] = useState("Idle");

  // The ONLY button that actually sends the SMS lives here.
  // It uses a race: try GPS quickly; if slow, send without GPS so SMS still opens.
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

    // Fallback timer (~2.5s): opens SMS without GPS if slow/blocked
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
              {/* Optional pre-capture GPS button (not required to send) */}
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

          {/* Only submit button that actually sends SMS */}
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

      {/* Bottom map/info — not centered */}
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
            <a className="underline" href="https://www.google.com/maps?q=2712%20W%20F%20Street%2C%20Pecos,%20TX%2079772" target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs opacity-80">24/7 Professional Service — Call or Text Us!</div>
      </SoftBox>
    </div>
  );
}
