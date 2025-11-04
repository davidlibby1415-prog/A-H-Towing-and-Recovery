// FILE: /components/SiteNavLinks.tsx

import Link from "next/link";

export function SiteNavLinks() {
  const links = [
    { href: "/light-duty-towing", label: "Light Duty" },
    { href: "/heavy-duty-commercial-towing", label: "Heavy/Commercial" },
    { href: "/equipment-transport", label: "Equipment" },
    { href: "/flatbed-rollback-services", label: "Flatbed" },
    { href: "/emergency-roadside-assistance", label: "Roadside" },
    { href: "/accidents-and-accident-removal", label: "Accidents" },
    { href: "/winching-recovery", label: "Recovery" },
  ];

  return (
    <nav className="flex flex-wrap gap-2">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90 hover:bg-white/10"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
