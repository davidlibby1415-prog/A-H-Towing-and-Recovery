// FILE: components/ServicePage.jsx
"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export default function ServicePage({
  title,
  subtitle,
  bullets,
  badges = [],
  heroImageUrl,
  CTA,
}) {
  const callToAction = CTA || { label: "Call Now", href: siteConfig.phoneHref };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header strip with company name + phone (matches main page feel) */}
      <header className="bg-ahCharcoal border-b border-black/50">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-black grid place-items-center font-bold shadow-cta">
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
              <div className="text-xs opacity-90 text-zinc-200">
                2712 W F Street, Pecos, TX 79772
              </div>
              <div className="text-xs text-zinc-200">
                ah.towing.recovery23@gmail.com
              </div>
            </div>
          </div>
          <div className="text-right text-xs sm:text-sm">
            <div className="font-semibold text-white">Dispatch 24/7</div>
            <a
              href={siteConfig.phoneHref}
              className="font-bold text-amber-300"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Hero section with diamond-plate styling */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: heroImageUrl
              ? `linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("${heroImageUrl}")`
              : `linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/diamond-plate.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end gap-2">
            {badges.map((b, i) => (
              <span
                key={i}
                className="rounded-2xl border border-white/25 bg-black/40 px-3 py-1 text-xs tracking-wide"
              >
                {b.label}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-3xl text-lg text-slate-100/90">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={callToAction.href}
              className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-black shadow-lg transition hover:translate-y-[-1px] hover:bg-emerald-400 active:translate-y-[0px]"
            >
              {callToAction.label} • {siteConfig.phone}
            </a>
            <Link
              href="/"
              className="rounded-2xl border border-white/25 bg-black/40 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-black/60"
            >
              Back to Main Page
            </Link>
          </div>
        </div>
      </section>

      {/* Content with diamond-plate panels */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* main bullets */}
          <div className="md:col-span-2 space-y-8">
            <div
              className="rounded-[22px] border border-white/15 p-6 md:p-7"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url("/diamond-plate.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <ul className="space-y-3">
                {bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[22px] border border-white/15 bg-black/75 p-6">
              <h2 className="text-xl font-semibold">Service Area</h2>
              <p className="mt-2 text-white/80">
                Fast response across {siteConfig.serviceAreas.join(", ")}. 24/7
                dispatch.
              </p>
            </div>
          </div>

          {/* sidebar cards */}
          <aside className="space-y-4">
            <div
              className="rounded-[22px] border border-white/15 p-5"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("/diamond-plate.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-semibold">Need help now?</h3>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-2xl font-bold text-amber-300"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-2 text-sm text-white/75">
                Save our number. We answer day and night.
              </p>
            </div>

            <div
              className="rounded-[22px] border border-white/15 p-5"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0,0,0,0.92), rgba(0,0,0,0.92)), url("/diamond-plate.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-semibold">Email Dispatch</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block underline"
              >
                {siteConfig.email}
              </a>
              <p className="mt-2 text-sm text-white/75">
                Send PO#, unit, location, and contact to expedite.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
