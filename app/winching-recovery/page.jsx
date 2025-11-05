import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Winching / Recovery | A & H Towing & Recovery",
  description:
    "Off-road recovery for mud, sand, and shoulder. Lease roads and remote access supported.",
};

export default function WinchingRecoveryPage() {
  return (
    <ServicePage
      title="Winching / Recovery"
      subtitle="Off-Road • Mud • Sand • Lease Roads & Remote Access"
      bullets={[
        "Stuck vehicles on lease roads, pads, ranch tracks, and rights-of-way",
        "Mud, sand, and soft shoulder recoveries",
        "Load shift assistance and re-secure with partners as needed",
        "Rigging with soft shackles and frame-safe attachment points",
        "Assessment, plan, and safe extraction with minimal additional damage",
      ]}
      badges={[{ label: "Off-Road" }, { label: "Rigging" }, { label: "Remote" }]}
      heroVideoSrc="/Videos/tow3.mp4"
    />
  );
}
