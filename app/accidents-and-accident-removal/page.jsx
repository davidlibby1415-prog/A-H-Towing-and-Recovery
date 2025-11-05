import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Accidents & Accident Removal | A & H Towing & Recovery",
  description:
    "Accident towing, scene clean-up assistance, and careful vehicle handling.",
};

export default function AccidentsPage() {
  return (
    <ServicePage
      title="Accidents & Accident Removal"
      subtitle="Secure, professional accident towing and scene support"
      bullets={[
        "Prompt accident response for single-vehicle and multi-vehicle incidents.",
        "Careful loading and transport of damaged vehicles to reduce further harm.",
        "Coordination with law enforcement, first responders, and property owners when needed.",
        "Scene awareness to keep you and other drivers as safe as possible during recovery.",
      ]}
      badges={[{ label: "Accidents" }, { label: "Removal" }]}
    />
  );
}
