// FILE: /app/emergency-roadside-assistance/page.jsx

import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel delivery (gas & diesel), jumpstarts (12V), lockouts (fast, no damage), and roadside checks.",
};

export default function Page() {
  return (
    <ServicePage
      title="Emergency Roadside Assistance"
      subtitle="Fuel Delivery • Gas & Diesel • Jumpstarts (12V) • Roadside Checks • Lockouts (fast entry, no damage)"
      bullets={[
        "Fuel delivery: gas & diesel — roadside and jobsite",
        "Jumpstarts for 12V systems and battery checks",
        "Lockouts with professional entry tools (no damage)",
        "Tire inflations & spare installs (where safe)",
        "On-scene assessment and tow if needed",
      ]}
      badges={[{ label: "Fast Entry" }, { label: "No Damage" }, { label: "On-Scene" }]}
    />
  );
}

