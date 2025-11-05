import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Oilfield Routes Tow Service | A & H Towing & Recovery",
  description:
    "Lease road towing, pad recoveries, and oilfield route support for trucks and equipment in West Texas.",
};

export default function OilfieldRoutesTowServicePage() {
  return (
    <ServicePage
      title="Oilfield Routes Tow Service"
      subtitle="Lease Roads • Remote Access • Pads & Caliche — Long & Short Distance Support"
      bullets={[
        "Towing and recovery on lease roads, ranch tracks, and remote pads",
        "Support for service trucks, pickups, and oilfield units",
        "Winch-outs from mud, sand, and soft caliche",
        "Coordination with company men, dispatch, and safety reps",
        "Moves between locations, yards, and shops across West Texas",
      ]}
      badges={[{ label: "Oilfield" }, { label: "Remote" }, { label: "Lease Roads" }]}
      heroVideoSrc="/Videos/heavy-duty-bg.mp4"
    />
  );
}
