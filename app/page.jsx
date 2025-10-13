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

function ScrollToFormCTA({
  className = "",
  label = "Text Dispatch My Info & Location",
  targetId = "form-start",
}) {
  const onClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId) || document.getElementById("dispatch-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const first = document.querySelector("#dispatch-form input, #dispatch-form textarea");
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

function AccentStrip({ color = "from-ahBlue to-ahRed" }) {
  return <div className={`h-1 w-full bg-gradient-to-r ${color}`} />;
}

function SoftBox({ children, className = "", strip = true }) {
  return (
    <div className={`rounded-2xl border border-black/10 shadow-xl bg-white/90 backdrop-blur ${className}`}>
      {strip && <AccentStrip />}
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container max-w-7xl">
        <SoftBox className="mb-5 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ahCharcoal text-center">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg opacity-90 text-center">{subtitle}</p>}
        </SoftBox>
        {children}
      </div>
    </section>
  );
}

/* ========================= Rotating Video Background ========================= */
function BackgroundVideoRotator() {
  const videos = ["/videos/tow1.mp4", "/videos/tow2.mp4", "/videos/tow3.mp4"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % videos.length), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <video
      key={videos[current]}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/fallback.jpg" // 👈 this image loads before/if video fails
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={videos[current]} type="video/mp4" />
      <img
        src="/fallback.jpg"
        alt="A&H Towing & Recovery background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </video>
  );
}

/* ============================== Page ============================== */
export default function Home() {
  return (
    <main className="text-ahCharcoal min-h-screen bg-diamond">
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

      {/* ===== HERO with Rotating Background Video & Fallback ===== */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center text-white">
        <BackgroundVideoRotator />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white">
            Fast, Reliable, 24/7 Professional Towing
          </h1>
          <p className="mt-4 text-lg">
            Serving Pecos, Reeves County & West Texas Oilfield Routes
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <ScrollToFormCTA />
          </div>
        </div>
      </section>

      {/* Add the rest of your existing sections here... */}
    </main>
  );
}

