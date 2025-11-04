// app/heavy-duty-commercial-towing/page.jsx
import ServicePage from "../../components/ServicePage";
export const metadata = { title:"Heavy Duty & Commercial Towing | A & H", description:"…" };

export default function HeavyDutyCommercialPage() {
  return (
    <ServicePage
      title="Heavy Duty & Commercial Towing"
      subtitle="Oilfield & Fleet • Lease Roads • Remote Access • Long & Short Distance"
      bullets={[
        "Trucks, vans, service bodies, and loaded trailers (as permitted)",
        "Stuck units: lease roads, caliche, sand, and remote pads",
        "Fleet billing available with COI & W-9",
        "Escort & route planning for oversize loads (with partners)",
        "Yard to yard, site to yard, and site to shop moves",
      ]}
      badges={[{label:"Oilfield"},{label:"Fleet"},{label:"Remote Access"}]}
      heroVideoSrc="/Videos/heavy-duty-bg.mp4"   // keep capital V to match your repo
    />
  );
}
