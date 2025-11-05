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
        "Gas & diesel delivery to get you moving again when the tank runs dry.",
        "12V jumpstarts and basic battery checks when your vehicle won’t crank.",
        "Fast, no-damage vehicle entry for lockouts so you can get back on the road.",
        "Support if you’re stranded roadside, with safety-first positioning and lighting.",
      ]}
      badges={[{ label: "Fuel" }, { label: "Jumps" }, { label: "Lockouts" }]}
      heroVideoSrc="/Videos/tow3.mp4"
    />
  );
}
