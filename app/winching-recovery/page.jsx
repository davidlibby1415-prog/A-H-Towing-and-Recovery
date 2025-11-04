import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Winching / Recovery | A & H Towing & Recovery",
  description: "Off-road, mud, sand, and stuck vehicle recovery.",
};

export default function WinchingRecoveryPage() {
  return (
    <ServicePage
      title="Winching / Recovery"
      subtitle="Off-Road • Mud • Sand • Ditches"
      bullets={[
        "Lease roads, caliche, sand, and remote access",
        "Controlled winch-outs with proper anchor points",
        "Damage-minimizing recovery procedures",
        "Access planning and spotter when needed",
      ]}
      badges={[{ label: "Off-Road" }, { label: "Mud/Sand" }, { label: "Remote" }]}
      heroVideoSrc="/Videos/tow3.mp4"
    />
  );
}
