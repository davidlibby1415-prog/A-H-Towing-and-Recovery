import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Light Duty Towing | A & H Towing & Recovery",
  description:
    "Cars, SUVs, and pickups — local & long-distance tows. Safe, insured, professional operators. 24/7 dispatch.",
};

export default function LightDutyTowingPage() {
  return (
    <ServicePage
      title="Light Duty Towing"
      subtitle="Cars • SUVs • Pickups — Local & Long-Distance Tows"
      bullets={[
        "Flatbed & wheel-lift options to protect drivetrains and body kits",
        "Dealership, body shop, and home deliveries",
        "After-hours impound release coordination",
        "Breakdown tows from highway, shoulder, or parking lots",
        "Battery-safe loading for EVs & hybrids (per manufacturer points)",
      ]}
      badges={[{ label: "24/7" }, { label: "Insured" }, { label: "Local & Long" }]}
      heroVideoSrc="/Videos/tow1.mp4"
    />
  );
}
