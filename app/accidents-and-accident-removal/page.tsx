// FILE: /app/accidents-and-accident-removal/page.tsx

import type { Metadata as M3 } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: M3 = {
  title: "Accidents & Accident Removal | A & H Towing & Recovery",
  description:
    "Secure, professional scene management and vehicle removal. Coordination with law enforcement & insurers.",
};

export default function Page() {
  return (
    <ServicePage
      title="Accidents & Accident Removal"
      subtitle="Secure • Professional"
      bullets={[
        "Safe scene setup with cones, lighting, and PPE",
        "Coordination with law enforcement and DOT",
        "Photographing and documenting vehicle condition",
        "Debris cleanup and fluid containment (as permitted)",
        "Direct to body shop, yard, or owner’s location",
      ]}
      badges={[{ label: "Scene Safe" }, { label: "Documented" }, { label: "Secure" }]}
    />
  );
}
