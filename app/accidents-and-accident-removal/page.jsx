import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Accidents & Accident Removal | A & H Towing & Recovery",
  description: "Secure, professional scene handling and vehicle removal.",
};

export default function AccidentsRemovalPage() {
  return (
    <ServicePage
      title="Accidents & Accident Removal"
      subtitle="Secure • Professional • Coordinated"
      bullets={[
        "Careful scene management with safety cones & lighting",
        "Coordination with law enforcement and insurance when needed",
        "Safe loading, transport, and storage options",
        "Debris-clearing support (when permitted)",
      ]}
      badges={[{ label: "Secure" }, { label: "Professional" }, { label: "Coordinated" }]}
      heroVideoSrc="/Videos/tow2.mp4"
    />
  );
}

