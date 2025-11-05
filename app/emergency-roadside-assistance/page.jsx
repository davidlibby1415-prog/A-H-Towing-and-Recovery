import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel delivery (gas & diesel), jumpstarts (12V), lockouts (fast, no damage), and roadside checks.",
};

export default function EmergencyRoadsideAssistancePage() {
  return (
    <ServicePage
      title="Emergency Roadside Assistance"
      subtitle="Fuel Delivery • Gas & Diesel • Jumpstarts (12V) • Roadside Checks • Lockouts (fast entry, no damage)"
      bullets={[
        "Fuel delivery: gas & diesel — roadside and jobsite",
        "Jumpstarts for 12V systems and basic battery checks",
        "Lockouts with professional entry tools (no damage)",
        "Tire inflations & spare installs where safe to do so",
        "On-scene assessment and tow if needed",
      ]}
      badges={[{ label: "Fuel" }, { label: "Jumps" }, { label: "Lockouts" }]}
      heroVideoSrc="/Videos/tow3.mp4"
    />
  );
}
