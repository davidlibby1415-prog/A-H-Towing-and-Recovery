import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Equipment Transport | A & H Towing & Recovery",
  description:
    "Transport for light equipment and tools to and from job sites around West Texas.",
};

export default function EquipmentTransportPage() {
  return (
    <ServicePage
      title="Equipment Transport"
      subtitle="Light equipment & tools • Long & short distance"
      bullets={[
        "Transport for smaller machinery, shop tools, and support equipment.",
        "Scheduled moves between yards, shops, and job sites.",
        "Tie-down and securement focused on protecting your equipment investment.",
        "Flexible local or longer-distance moves depending on the job.",
      ]}
      badges={[{ label: "Equipment" }, { label: "Transport" }]}
    />
  );
}
