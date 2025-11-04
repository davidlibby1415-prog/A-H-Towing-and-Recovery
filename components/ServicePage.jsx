"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../lib/siteConfig"; // IMPORTANT: relative path

function ServicePage({
  title,
  subtitle,
  bullets,
  badges = [],
  heroImageUrl,
  heroVideoSrc, // <- NEW: optional background video
  CTA,
}) {
  const cta = CTA || { label: "Call Now", href: siteConfig.phoneHref };
  const hasVideo = !!heroVideoSrc;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero (video OR image/gradient background) */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          {hasVideo ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          ) : (
            <div
              className="w-full h-full"
              style={{
                backgroundImage: heroImageUrl
                  ? `url(${heroImageUrl})`
                  : "linear-gradient(135deg, #0a0a0a 0%, #1f2937 50%, #0a0a0a 100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap items-end gap-2">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="rounded-2xl border border-white/15 bg-black/40 px-3 py-1 text-xs tracking-wide uppercase"
                >
                  {b.label}
                </span>
              ))}
            </div>
          )}

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 max-w-3xl text-lg text-white/80">{subtitle}</p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cta.href}
              className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-black shadow-lg transition hover:translate-y-[-1px] hover:bg-emerald-400 active:translate-y-[0px]"
            >
              {cta.label} • {siteConfig.phone}
            </a>
            <Link
              href="/#contact"
              className="rounded-2xl border border-white/15 bg-black/40 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Request a Tow Online
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Main bullets */}
          <div className="md:col-span-2">
            <ul className="space-y-3">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Service Area</h2>
              <p className="mt-2 text-white/80">
                Fast response across {siteConfig.serviceAreas.join(", ")}. 24/7
                dispatch.
              </p>
            </div>
          </div>

          {/* Sidebar contact */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Need help now?</h3>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-2xl font-bold"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-2 text-sm text-white/70">
                Save our number. We answer day and night.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Email Dispatch</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block underline"
              >
                {siteConfig.email}
              </a>
              <p className="mt-2 text-sm text-white/70">
                Send PO#, unit, location, and contact to expedite.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default ServicePage;
