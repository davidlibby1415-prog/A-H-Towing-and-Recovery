import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Light Duty Towing | A & H Towing & Recovery",
  description:
    "Light duty towing for cars, SUVs, and pickups — local or long distance, 24/7.",
};

export default function LightDutyTowingPage() {
  return (
    <ServicePage
      title="Light Duty Towing"
      subtitle="Cars • SUVs • Pickups • Long & short distance"
      bullets={[
        "Safe, damage-conscious towing for everyday drivers and families.",
        "Careful hook-ups, chains, and securement on every tow.",
        "Local tows in and around Pecos, plus long-distance options when you need to get home or to a shop.",
        "24/7 dispatch for breakdowns, no-starts, and accident towing.",
      ]}
      badges={[{ label: "Light Duty" }, { label: "Local & Long Distance" }]}
    />
  );
}
