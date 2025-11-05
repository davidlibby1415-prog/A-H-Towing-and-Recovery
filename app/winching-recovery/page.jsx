import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Winching & Recovery | A & H Towing & Recovery",
  description:
    "Winching and recovery for stuck vehicles in mud, sand, ditches, or off-road locations.",
};

export default function WinchingRecoveryPage() {
  return (
    <ServicePage
      title="Winching / Recovery"
      subtitle="Off-road, mud, sand, and difficult access recovery"
      bullets={[
        "Recovery for stuck vehicles in mud, sand, bar ditches, and soft shoulders.",
        "Off-road access where conditions allow, with an eye on safety and terrain.",
        "Controlled winch operations to minimize additional damage to the vehicle.",
        "Communication with you about options if the area is unsafe or inaccessible.",
      ]}
      badges={[{ label: "Winching" }, { label: "Recovery" }]}
    />
  );
}
