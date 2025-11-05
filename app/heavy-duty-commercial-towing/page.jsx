import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Heavy Duty & Commercial Towing | A & H Towing & Recovery",
  description:
    "Heavy duty and commercial towing for oilfield trucks, work fleets, and big rigs in West Texas.",
};

export default function HeavyDutyCommercialPage() {
  return (
    <ServicePage
      title="Heavy Duty & Commercial Towing"
      subtitle="Oilfield & fleet units • Long & short distance"
      bullets={[
        "Heavy duty capability for work trucks, oilfield units, and commercial fleets.",
        "Experienced operators who understand lease roads and West Texas conditions.",
        "Coordinated towing to your preferred shop, yard, or staging location — local or long distance.",
        "Fleet-friendly communication with clear updates and timing.",
      ]}
      badges={[
        { label: "Heavy Duty" },
        { label: "Commercial" },
        { label: "Fleet" },
      ]}
      heroVideoSrc="/Videos/heavy-duty-bg.mp4"
    />
  );
}
