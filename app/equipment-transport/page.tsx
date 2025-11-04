// FILE: /app/equipment-transport/page.tsx

import type { Metadata as Meta } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Meta = {
  title: "Equipment Transport | A & H Towing & Recovery",
  description:
    "Light equipment & tools transport. Compressors, generators, welders, tool boxes, small forklifts.",
};

export default function Page() {
  return (
    <ServicePage
      title="Equipment Transport"
      subtitle="Light equipment & tools"
      bullets={[
        "Skid compressors, portable generators, welders",
        "Tool chests, gang boxes, parts bins, pipe racks",
        "Small forklifts, scissor lifts, and mini skid steers",
        "Job-to-yard and yard-to-site shuttles",
        "Strapped, flagged, and documented per best practices",
      ]}
      badges={[{ label: "Strapped" }, { label: "Insured" }, { label: "Scheduled" }]}
    />
  );
}
