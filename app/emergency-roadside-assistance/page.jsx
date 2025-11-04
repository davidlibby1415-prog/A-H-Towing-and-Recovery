import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description: "Jumpstarts, fuel delivery, lockouts, tire help, and quick checks.",
};

export default function RoadsidePage() {
  return (
    <ServicePage
      title="Emergency Roadside Assistance"
      subtitle="Fuel Delivery • Jumpstarts • Lockouts • Quick Checks"
      bullets={[
        "Gas & diesel delivery to get you moving",
        "12V jumpstarts and battery checks",
        "Fast, no-damage vehicle entry for lockouts",
        "Stranded support and safety-first procedures",
      ]}
      badges={[{ label: "Fuel" }, { label: "Jumps" }, { label: "Lockouts" }]}
      heroVideoSrc="/Videos/tow3.mp4"
    />
  );
}
