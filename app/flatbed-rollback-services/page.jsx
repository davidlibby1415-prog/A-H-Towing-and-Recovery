import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Flatbed / Rollback Services | A & H Towing & Recovery",
  description: "Flatbed hauling for low-clearance, all-wheel-drive, classics, and specialty vehicles.",
};

export default function FlatbedRollbackPage() {
  return (
    <ServicePage
      title="Flatbed / Rollback Services"
      subtitle="Low-Clearance • AWD • Classics • Equipment"
      bullets={[
        "Ideal for AWD/4x4 and low-clearance vehicles",
        "Gentle loading for luxury and classic cars",
        "Short and long-distance transport",
        "Toolboxes, small equipment, and implements (as permitted)",
      ]}
      badges={[{ label: "Low-Clearance" }, { label: "AWD/4x4" }, { label: "Careful Load" }]}
      heroVideoSrc="/Videos/tow2.mp4"
    />
  );
}
