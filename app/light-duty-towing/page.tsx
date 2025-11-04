// FILE: /app/light-duty-towing/page.tsx

import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Light Duty Towing | A & H Towing & Recovery",
  description:
    "Cars, SUVs, and pickups — local & long-distance tows. Safe, insured, professional operators. 24/7 dispatch.",
};

export default function Page() {
  return (
    <ServicePage
      title="Light Duty Towing"
      subtitle="Cars • SUVs • Pickups — Long & Short Distance Tows"
      bullets={[
        "Flatbed & wheel-lift options to protect drivetrains and body kits",
        "Dealership, body shop, and home deliveries",
        "After-hours impound release coordination",
        "Breakdown tows from highway, shoulder, or parking lots",
        "Battery-safe loading for EVs & hybrids (consult manufacturer points)",
      ]}
      badges={[{ label: "24/7" }, { label: "Insured" }, { label: "Local & Long" }]}
    />
  );
}

