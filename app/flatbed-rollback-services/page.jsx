// FILE: /app/flatbed-rollback-services/page.jsx

import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Flatbed / Rollback Services | A & H Towing & Recovery",
  description:
    "Low-profile loading, AWD/4x4 safe, equipment & motorcycle transport with secure tie-downs.",
};

export default function Page() {
  return (
    <ServicePage
      title="Flatbed / Rollback Services"
      bullets={[
        "Low-clearance loading for lowered vehicles",
        "All-wheel-drive and 4x4 safe transport",
        "Motorcycle & UTV securement points",
        "Equipment pallets and attachments",
        "Enclosed tool/part transfers on request",
      ]}
      badges={[{ label: "Low Profile" }, { label: "AWD Safe" }, { label: "Secure" }]}
    />
  );
}
