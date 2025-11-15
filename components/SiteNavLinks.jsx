// components/SiteNavLinks.jsx
"use client";

import Link from "next/link";

const LINKS = [
  { href: "/light-duty-towing", label: "Light Duty" },
  { href: "/heavy-duty-commercial-towing", label: "Heavy / Commercial" },
  { href: "/oilfield-routes-tow-service", label: "Oilfield Routes" },
  { href: "/equipment-transport", label: "Equipment Transport" },
  { href: "/flatbed-rollback-services", label: "Flatbed / Rollback" },
  { href: "/emergency-roadside-assistance", label: "Roadside" },
  { href: "/accidents-and-accident-removal", label: "Accidents" },
  { href: "/winching-recovery", label: "Winching / Recovery" },
];

export default function SiteNavLinks({ className = "" }) {
  return (
    <nav
      className={`flex flex-wrap gap-2 sm:gap-3 ${className}`}
      aria-label="Service navigation"
    >
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="inline-flex items-center rounded-2xl bg-slate-900/95 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-semibold text-amber-50 shadow hover:bg-yellow-400 hover:text-black transition-colors border border-slate-700 hover:border-yellow-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
