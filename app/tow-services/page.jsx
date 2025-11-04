// app/tow-services/page.jsx
export const metadata = {
  title: "Tow Services | A & H Towing & Recovery",
  description: "Light duty, heavy/commercial, flatbed, lockouts, jumpstarts, winching.",
};

export default function TowServicesIndex() {
  return (
    <main style={{ padding: "32px 16px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ margin: 0, fontSize: "clamp(28px,5vw,48px)" }}>Tow Services</h1>
      <p style={{ color: "#6b7280", marginTop: 8 }}>
        Fast, professional service across West Texas. Choose a service below or call dispatch.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        <a href="tel:+14328424578" style={btn("#dc2626")}>Call (432)842-4578</a>
        <a href="sms:+14328424578?&body=Hi%20A%26H%20Towing%2C%20I%20need%20assistance%20at%20[location]%20with%20[vehicle]%20-%20please%20call%20me%20back." style={btn("#2563eb")}>
          Request Dispatch
        </a>
      </div>

      <ul style={{ marginTop: 24, lineHeight: 1.7 }}>
        <li><a href="/light-duty-towing">Light Duty Towing</a></li>
        <li><a href="/heavy-duty-commercial-towing">Heavy Duty & Commercial</a></li>
        <li><a href="/flatbed-rollback-services">Flatbed / Rollback</a></li>
        <li><a href="/emergency-roadside-assistance">Emergency Roadside Assistance</a></li>
        <li><a href="/accidents-and-accident-removal">Accidents & Removal</a></li>
        <li><a href="/winching-recovery">Winching / Recovery</a></li>
      </ul>
    </main>
  );
}

function btn(bg) {
  return {
    background: bg, color: "#fff", padding: "12px 16px", borderRadius: 12,
    textDecoration: "none", fontWeight: 600, display: "inline-block"
  };
}
