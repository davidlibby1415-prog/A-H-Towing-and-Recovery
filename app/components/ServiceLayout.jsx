// FILE: app/components/ServiceLayout.jsx

import React from "react";
import Link from "next/link";

/* ========= Small helper for date/time in header ========= */

const dateTimeScript = `
  (function () {
    const el = document.getElementById("ah-date-time");
    if (!el) return;
    function update() {
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });
      el.textContent = dateStr + " • " + timeStr + " • Pecos, TX";
    }
    update();
    setInterval(update, 60000);
  })();
`;

/* ========= Shared header with fixed nav + dropdown ========= */

export function SiteHeader() {
  return (
    <header className="bg-black border-b border-yellow-500/40">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center gap-4 justify-between">
        {/* LEFT – Logo + company info */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-red-700 flex items-center justify-center shadow-lg shadow-red-900/60">
            <span className="text-xs font-black tracking-tight text-yellow-100 leading-3 text-center">
              A&H
              <br />
              TOW
            </span>
          </div>
          <div className="leading-tight text-xs sm:text-sm">
            <div className="font-extrabold text-red-500 drop-shadow">
              A&H Towing & Recovery, LLC
            </div>
            <div className="text-neutral-300">
              2712 W F Street, Pecos, TX 79772
            </div>
            <a
              href="mailto:ah.towing.recovery23@gmail.com"
              className="text-yellow-300 hover:text-yellow-200 underline underline-offset-2"
            >
              ah.towing.recovery23@gmail.com
            </a>
          </div>
        </div>

        {/* CENTER – Main nav, including fixed Services dropdown + Home */}
        <nav className="flex-1 min-w-[260px] flex justify-center">
          <ul className="flex items-center gap-4 lg:gap-8 text-sm font-semibold text-yellow-100">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-colors"
              >
                Home
              </Link>
            </li>

            {/* Services dropdown */}
            <li className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-yellow-300 transition-colors"
              >
                Services
                <span className="text-xs">▾</span>
              </button>

              {/* DROPDOWN – stays open while pointer is in the area */}
              <div className="absolute left-0 top-full mt-2 w-80 bg-black/95 border border-yellow-500/60 rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                <div className="py-2">
                  {[
                    ["Light Duty Towing", "/light-duty-towing"],
                    ["Heavy Duty & Commercial Towing", "/heavy-duty-commercial-towing"],
                    ["Oilfield Routes Tow Service", "/oilfield-routes-tow-service"],
                    ["Equipment Transport", "/equipment-transport"],
                    ["Flatbed / Rollback Services", "/flatbed-rollback-services"],
                    ["Emergency Roadside Assistance", "/emergency-roadside-assistance"],
                    ["Accident Management and Removal", "/accident-management-and-removal"],
                    ["Winching / Recovery", "/winching-recovery"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-xs sm:text-sm text-yellow-50 hover:bg-yellow-500/15 hover:text-yellow-300 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Coverage – back to home page coverage / Texas map section */}
            <li>
              <Link
                href="/#coverage"
                className="hover:text-yellow-300 transition-colors"
              >
                Coverage
              </Link>
            </li>

            {/* Owners page */}
            <li>
              <Link
                href="/owners"
                className="hover:text-yellow-300 transition-colors"
              >
                Owners
              </Link>
            </li>

            {/* Tips & Tricks page */}
            <li>
              <Link
                href="/tips-tricks"
                className="hover:text-yellow-300 transition-colors"
              >
                Tips &amp; Tricks
              </Link>
            </li>

            {/* Request a Tow – anchor back to home form */}
            <li>
              <Link
                href="/#dispatch-form"
                className="hover:text-yellow-300 transition-colors"
              >
                Request a Tow
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT – Date/time + big call button */}
        <div className="flex flex-col items-end gap-2">
          <div
            id="ah-date-time"
            className="text-[11px] leading-tight text-yellow-200/90 tracking-wide text-right"
          >
            {/* Filled by inline script below */}
          </div>

          <a
            href="tel:+14328424578"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm font-bold text-yellow-50 shadow-lg shadow-blue-900/60 text-center"
          >
            CLICK HERE TO CALL 24/7 DISPATCH
            <span className="ml-2 whitespace-nowrap">(432) 842-4578</span>
          </a>
        </div>
      </div>

      {/* inline script to show live date/time & location */}
      <script
        dangerouslySetInnerHTML={{ __html: dateTimeScript }}
      />
    </header>
  );
}

/* ========= Shared hero for service pages ========= */

export function BrandHero({ serviceTitle, serviceSubtitle, heroVideoSrc }) {
  return (
    <section className="relative border-b border-yellow-500/30 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.1),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(248,113,113,0.12),_transparent_60%)] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-center relative z-10">
        {/* LEFT – text */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-yellow-300 mb-2">
            24/7 WEST TEXAS DISPATCH
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]">
            {serviceTitle}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-100 max-w-xl">
            {serviceSubtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>

          <p className="mt-3 text-[11px] text-neutral-300 max-w-md">
            Stranded on I-20, US-285, or a lease road? Call or text now and
            we’ll get a truck rolling your way with professional, patient care
            for you and your equipment.
          </p>
        </div>

        {/* RIGHT – hero video, if provided */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-black/60 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
          {heroVideoSrc ? (
            <video
              className="w-full h-full object-cover"
              src={heroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="aspect-[16/9] flex items-center justify-center text-neutral-400 text-xs">
              A&amp;H trucks on the move across West Texas
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ========= CTAs ========= */

export function PhoneCTA() {
  return (
    <a
      href="tel:+14328424578"
      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs sm:text-sm font-extrabold text-yellow-50 shadow-lg shadow-red-900/60"
    >
      CALL 24/7 DISPATCH • (432) 842-4578
    </a>
  );
}

export function TextCTA() {
  return (
    <Link
      href="/#dispatch-form"
      className="inline-flex items-center justify-center px-3 py-2 rounded-xl border border-yellow-400/70 bg-black/70 hover:bg-yellow-500/10 text-[11px] sm:text-xs font-semibold text-yellow-100"
    >
      TEXT / REQUEST A TOW ONLINE
    </Link>
  );
}

/* ========= We accept bar for bottom of service pages ========= */

export function WeAcceptBar() {
  return (
    <div className="bg-black/95 border-t border-yellow-500/40">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs text-neutral-100">
        <span className="font-semibold text-yellow-300 tracking-wide">
          We accept:
        </span>
        <span>Cash</span>
        <span>Major credit &amp; debit cards</span>
        <span>EFS / Comchek</span>
      </div>
    </div>
  );
}

/* ========= Simple footer ========= */

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-yellow-500/40">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-400">
        <span>
          © {new Date().getFullYear()} A&amp;H Towing &amp; Recovery, LLC. All
          rights reserved.
        </span>
        <span>Serving Pecos, Reeves County, and the West Texas oilfield.</span>
      </div>
    </footer>
  );
}
