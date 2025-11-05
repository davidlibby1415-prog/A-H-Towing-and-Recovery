import ServicePage from "../../components/ServicePage";

export const metadata = {
  title: "Accidents & Accident Removal | A & H Towing & Recovery",
  description:
    "Secure, professional scene management and vehicle removal. Coordination with law enforcement & insurers.",
};

export default function AccidentsAndRemovalPage() {
  return (
    <ServicePage
      title="Accidents & Accident Removal"
      subtitle="Secure • Professional — Scene-Safe Removal You Can Trust"
      bullets={[
        "Safe scene setup with cones, lighting, and PPE",
        "Coordination with law enforcement, DPS, and DOT as needed",
        "Photographing and documenting vehicle condition on scene",
        "Debris cleanup and fluid containment where permitted",
        "Direct towing to body shop, yard, or owner’s location",
      ]}
      badges={[{ label: "Scene Safe" }, { label: "Documented" }, { label: "Secure" }]}
      heroVideoSrc="/Videos/tow3.mp4"
    />
  );
}

