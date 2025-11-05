import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Flatbed / Rollback Services | A & H Towing & Recovery",
  description:
    "Low-profile loading, AWD/4x4 safe, equipment & motorcycle transport with secure tie-downs.",
};

export default function FlatbedRollbackServicesPage() {
  return (
    <ServicePage
      title="Flatbed / Rollback Services"
      subtitle="Low-Clearance • AWD/4x4 Safe • Equipment & Motorcycle Transport"
      bullets={[
        "Low-clearance loading for lowered and specialty vehicles",
        "All-wheel-drive and 4x4 safe transport that protects drivetrains",
        "Motorcycle and UTV securement with dedicated tie-down points",
        "Equipment pallets and attachments moved securely",
        "Enclosed tool / part transfers available on request",
      ]}
      badges={[{ label: "Low Profile" }, { label: "AWD Safe" }, { label: "Secure" }]}
      heroVideoSrc="/Videos/tow1.mp4"
    />
  );
}
