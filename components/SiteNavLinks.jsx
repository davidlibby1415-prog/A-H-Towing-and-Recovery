// components/SiteNavLinks.jsx
"use client";
import Link from "next/link";

export default function SiteNavLinks() {
  const links = [
    { href: "/light-duty-towing", label: "Light Duty" },
    { href: "/heavy-duty-commercial-towing", label: "Heavy/Commercial" },
    { href: "/flatbed-rollback-services", label: "Flatbed / Rollback" },
    { href: "/emergency-roadside-assistance", label: "Roadside" },
    { href: "/accidents-and-accident-removal", label: "Accidents" },
    { href: "/winching-recovery", label: "Winching" },
  ];
  return (
    <nav style={{display:"flex",gap:12,flexWrap:"wrap"}}>
      {links.map((l) => (
        <Link key={l.href} href={l.href} style={{textDecoration:"none"}}>
          <span style={{background:"#111827",color:"#fff",padding:"8px 12px",borderRadius:10,fontWeight:600}}>
            {l.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
