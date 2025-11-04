// FILE: /app/winching-recovery/page.tsx

import type { Metadata as M4 } from "next";
import ServicePage from "../../components/ServicePage";

export const metadata: M4 = {
  title: "Winching / Recovery | A & H Towing & Recovery",
  description:
    "Off-road recovery for mud, sand, and shoulder. Lease roads and remote access supported.",
};

export default function Page() {
  return (
    <ServicePage
      title="Winching / Recovery"
      subtitle="Off-road • Mud • Sand"
      bullets={[
        "Stuck vehicles on lease roads, pads, ranch tracks",
        "Mud, sand, and shoulder recoveries",
        "Load shift assistance and re-secure (with partners)",
        "Rigging with soft shackles and frame-safe points",
        "Assessment, plan, and safe extraction",
      ]}
      badges={[{ label: "Off-Road" }, { label: "Rigging" }, { label: "Remote" }]}
    />
  );
}
