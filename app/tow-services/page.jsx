// FILE: /app/tow-services/page.jsx

import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Tow Services | A & H Towing & Recovery",
  description:
    "Overview of tow services offered by A & H Towing & Recovery in Pecos and the surrounding West Texas region.",
};

export default function Page() {
  return (
    <ServicePage
      title="Tow Services"
      subtitle="Light duty, heavy duty, oilfield routes, equipment moves, and long & short distance towing."
      bullets={[
        "Light duty towing for cars, SUVs, and pickups",
        "Heavy duty & commercial towing for oilfield and fleet units",
        "Oilfield routes tow service for lease roads and remote access",
        "Long & short distance towing — local and state-to-state",
        "Equipment transport, flatbed and rollback services",
      ]}
      badges={[
        { label: "24/7" },
        { label: "Pecos & West Texas" },
        { label: "Light • Heavy • Oilfield" },
      ]}
    />
  );
}
