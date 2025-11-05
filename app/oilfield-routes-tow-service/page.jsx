import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Oilfield Routes Tow Service | A & H Towing & Recovery",
  description:
    "Towing for oilfield routes, lease roads, and remote access locations around Pecos, TX.",
};

export default function OilfieldRoutesTowPage() {
  return (
    <ServicePage
      title="Oilfield Routes Tow Service"
      subtitle="Lease roads • remote access • Long & short distance"
      bullets={[
        "Towing and recovery for oilfield locations, lease roads, and remote job sites.",
        "Operators familiar with oilfield traffic, site safety, and access challenges.",
        "Long & short distance options from remote sites back to Pecos, Midland/Odessa, or your chosen shop.",
        "Coordinated communication with dispatchers, company men, and safety as needed.",
      ]}
      badges={[{ label: "Oilfield" }, { label: "Remote Access" }]}
    />
  );
}
