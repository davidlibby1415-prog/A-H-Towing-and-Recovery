import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Flatbed / Rollback Services | A & H Towing & Recovery",
  description:
    "Damage-conscious flatbed and rollback towing for specialty and low-clearance vehicles.",
};

export default function FlatbedRollbackPage() {
  return (
    <ServicePage
      title="Flatbed / Rollback Services"
      subtitle="Damage-free transport • Long & short distance"
      bullets={[
        "Flatbed / rollback service for low-clearance, specialty, or damaged vehicles.",
        "Ideal for all-wheel-drive, performance, or vehicles that need extra care.",
        "Load angles and securement chosen to keep bumpers, frames, and undercarriage safe.",
        "Available for local and longer-distance moves as needed.",
      ]}
      badges={[{ label: "Flatbed" }, { label: "Rollback" }]}
    />
  );
}
