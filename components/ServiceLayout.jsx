"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* utils … (unchanged) */
/* PhoneCTA, TextCTA, LinkToFormCTA … (unchanged) */

/* ===== Brand / frame pieces ===== */

/* ⬇⬇⬇ make these exports so other pages can import them ⬇⬇⬇ */
export function AnimBorder({ children, className = "" }) {
  return <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>{children}</div>;
}

export function SteelPanel({
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

/* TopMarquee, SiteHeader, SiteFooter … (unchanged) */

/* =================== BrandHero (unchanged) =================== */
export function BrandHero({
  heroVideoSrc,
  poster,
  serviceTitle,
  serviceSubtitle,
  bannerTopMarginPx = 10,
  cardCenterOffsetPx = 70,
  overlayOpacity = 0.25,
}) {
  return (
    <section className="relative z-[10] w-full overflow-hidden bg-neutral-950 border-b border-black/40">
      {heroVideoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster || "/fallback.jpg"}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      )}
      {overlayOpacity > 0 && (
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} />
      )}
      <div className="relative container max-w-7xl">
        <div className="w-full flex justify-center" style={{ marginTop: `${bannerTopMarginPx}px` }} />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2"
          style={{ transform: `translate(-50%, calc(-50% + ${cardCenterOffsetPx}px))` }}
        >
          <div className="mx-auto w-[min(92vw,880px)]">
            <div className="rounded-2xl border border-white/50 bg-black/55 backdrop-blur-sm text-amber-50 px-4 md:px-6 py-5 text-center shadow-[0_12px_35px_rgba(0,0,0,.55)]">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white" style={{ textShadow: "0 2px 12px rgba(0,0,0,.65)" }}>
                {serviceTitle || "Emergency Roadside Assistance"}
              </h2>
              {serviceSubtitle && (
                <p className="mt-2 text-sm md:text-base font-semibold text-white">{serviceSubtitle}</p>
              )}
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <PhoneCTA />
                <LinkToFormCTA />
              </div>
            </div>
          </div>
        </div>
        <div className="invisible py-[28vh]" />
      </div>
    </section>
  );
}

/* TikTokGallery (unchanged) */

/* ALSO export the other components you already export */
export { PhoneCTA, LinkToFormCTA };

/* TopMarquee / SiteHeader / SiteFooter exports */
export { TopMarquee, SiteHeader, SiteFooter };

/* (If you already had named exports for those above, keep them; duplicates are harmless if identical.) */
