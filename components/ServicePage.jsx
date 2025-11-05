// FILE: components/ServicePage.jsx

import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

/* ===== Reusable visual helpers (mirroring your homepage look) ===== */

function AnimBorder({ children, className = "" }) {
  return (
    <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>
      {children}
      <style jsx global>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rb-rotate {
          to {
            --angle: 360deg;
          }
        }
        .rb-border {
          --angle: 0deg;
          background: conic-gradient(
            from var(--angle),
            #3b82f6 0%,
            #ef4444 50%,
            #3b82f6 100%
          );
          animation: rb-rotate 24s linear infinite;
        }
      `}</style>
    </div>
  );
}

function SteelPanel({
  children,
  className = "",
  padded = true,
  borderColor = "rgba(255,255,255,0.18)",
}) {
  return (
    <div
      className={`rounded-[22px] border shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${
        padded ? "px-4 py-5 md:px-6 md:py-6" : ""
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
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

function BrandSlab({ Tag = "h1" }) {
  return (
    <AnimBorder>
      <SteelPanel padded={false} className="px-2 py-1 text-center">
        <Tag
          className="font-black tracking-tight"
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
            fontSize: "clamp(34px, 6vw, 72px)",
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

/* ===== Small badge pill ===== */
function Badge({ label }) {
  return (
    <span className="rounded-2xl border border-white/15 bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-200 shadow-sm">
      {label}
    </span>
  );
}

/* ===== ServicePage main layout ===== */

export default function ServicePage({
  title,
  subtitle,
  bullets = [],
  badges = [],
  heroVideoSrc, // e.g. "/Videos/heavy-duty-bg.mp4"
  heroImageUrl, // optional fallback background image
  CTA,
}) {
  const cta = CTA || {
    label: "Call Dispatch Now! 24/7 Services",
    href: siteConfig.phoneHref,
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top mini-header with brand + phone (for users who don't click the buttons) */}
      <header className="border-b border-black/40 bg-ahCharcoal">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-black font-bold shadow-cta">
              <span
                className="text-[15px] font-extrabold"
                style={{ color: "#e10600" }}
              >
                A&amp;H
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-red-500 drop-shadow">
                A&amp;H Towing &amp; Recovery, LLC
              </div>
              <div className="text-[11px] opacity-90">
                2712 W F Street, Pecos, TX 79772
              </div>
              <div className="text-[11px]">
                <a
                  className="underline underline-offset-4 hover:opacity-100"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
          <div className="ml-auto text-right text-sm font-extrabold text-amber-200">
            24/7 Dispatch:&nbsp;
            <a
              href={siteConfig.phoneHref}
              className="underline decoration-amber-300 decoration-2 underline-offset-4"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION with video or image background */}
      <section className="relative isolate overflow-hidden">
        {/* Background layer: video first, image/gradient fallback */}
        {heroVideoSrc ? (
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              poster="/fallback.jpg"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: heroImageUrl
                ? `url(${heroImageUrl})`
                : "linear-gradient(135deg, #020617 0%, #0f172a 45%, #020617 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-neutral-950/95" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="space-y-6">
            {/* Big company slab on diamond plate */}
            <div className="max-w-4xl">
              <BrandSlab Tag="h1" />
            </div>

            {/* Phone line for non-button users */}
            <div className="mt-2 text-lg font-extrabold text-amber-200 drop-shadow-sm">
              Need help now? Call&nbsp;
              <a
                href={siteConfig.phoneHref}
                className="underline decoration-amber-300 decoration-2 underline-offset-4"
              >
                {siteConfig.phone}
              </a>
            </div>

            {/* Service title + subtitle on steel panel with animated border */}
            <AnimBorder className="max-w-3xl">
              <SteelPanel className="bg-black/60">
                <div className="flex flex-wrap items-center gap-2">
                  {badges.map((b, i) => (
                    <Badge key={i} label={b.label} />
                  ))}
                </div>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  {title}
                </h2>
                {subtitle && (
                  <p className="mt-2 max-w-2xl text-base md:text-lg text-white/85">
                    {subtitle}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={cta.href}
                    className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-ahBlue px-5 py-3 text-sm font-semibold text-white shadow-cta transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    {cta.label}
                  </a>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white/40 bg-black/40 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-black/60"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              </SteelPanel>
            </AnimBorder>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="bg-neutral-950 py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          {/* Left: bullet list in a diamond-plate panel */}
          <div className="md:col-span-2 space-y-6">
            <AnimBorder>
              <SteelPanel>
                <div className="mb-4 text-center md:text-left">
                  <BubbleBlock className="!px-6 !py-3">
                    <span className="text-lg md:text-xl font-extrabold">
                      What We Do
                    </span>
                  </BubbleBlock>
                </div>

                <ul className="space-y-3 text-sm md:text-base">
                  {bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </SteelPanel>
            </AnimBorder>
          </div>

          {/* Right: contact + service area panels */}
          <div className="space-y-5">
            <AnimBorder>
              <SteelPanel>
                <h3 className="text-lg font-extrabold">Need help right now?</h3>
                <p className="mt-2 text-sm text-white/80">
                  Call our 24/7 dispatch and tell us your location, unit, and
                  situation. We’ll get a truck rolling.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-3 block text-2xl font-black text-amber-300 underline underline-offset-4"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-2 text-xs text-white/65">
                  Save this number in your phone as{" "}
                  <span className="font-semibold">
                    “A&amp;H Towing – Pecos”
                  </span>{" "}
                  so it’s ready when you need it.
                </p>
              </SteelPanel>
            </AnimBorder>

            <AnimBorder>
              <SteelPanel>
                <h3 className="text-lg font-extrabold">Email Dispatch</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-sm font-semibold underline"
                >
                  {siteConfig.email}
                </a>
                <p className="mt-2 text-xs text-white/75">
                  Include PO#, unit, location, and contact info so we can stage
                  the right truck and keep your team moving.
                </p>
              </SteelPanel>
            </AnimBorder>

            <AnimBorder>
              <SteelPanel>
                <h3 className="text-lg font-extrabold">Service Area</h3>
                <p className="mt-2 text-sm text-white/80">
                  Fast response from Pecos across{" "}
                  {siteConfig.serviceAreas.join(", ")} — lease roads, ranch
                  tracks, and West Texas highways.
                </p>
              </SteelPanel>
            </AnimBorder>

            <div className="text-xs text-white/60">
              <Link href="/" className="underline hover:text-white">
                &larr; Back to Home / Main Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
