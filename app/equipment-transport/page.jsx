import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Equipment Transport | A & H Towing & Recovery",
  description:
    "Light equipment & tools transport. Compressors, generators, welders, tool boxes, small forklifts.",
};

export default function EquipmentTransportPage() {
  return (
    <ServicePage
      title="Equipment Transport"
      subtitle="Light equipment & tools — moved safely between yard, job, and site"
      bullets={[
        "Skid compressors, portable generators, and welders",
        "Tool chests, gang boxes, parts bins, and pipe racks",
        "Small forklifts, scissor lifts, and mini skid steers",
        "Job-to-yard and yard-to-site shuttles",
        "Strapped, flagged, and documented per best practices",
      ]}
      badges={[{ label: "Strapped" }, { label: "Insured" }, { label: "Scheduled" }]}
      heroVideoSrc="/Videos/tow3.mp4"
    />
  );
}
