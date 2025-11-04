import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Light Duty Towing | A & H Towing & Recovery",
  description: "Cars, SUVs, and pickups. Fast local & long-distance light-duty towing in West Texas.",
};

export default function LightDutyPage() {
  return (
    <ServicePage
      title="Light Duty Towing"
      subtitle="Cars • SUVs • Pickups • Local & Long Distance"
      bullets={[
        "Safe hook-up and transport for daily drivers and family vehicles",
        "Damage-minimizing procedures and securement",
        "Local tows and out-of-town hauls",
        "Immediate dispatch with live phone/SMS",
      ]}
      badges={[{ label: "24/7" }, { label: "Local + Long" }, { label: "Road-Safe" }]}
      heroVideoSrc="/Videos/tow1.mp4"
    />
  );
}
