// components/ServicePage.jsx
"use client";

export default function ServicePage({
  title,
  subtitle,
  bullets = [],
  badges = [],
  heroVideoSrc,                 // e.g. "/Videos/heavy-duty-bg.mp4"
  fallbackPoster = "/Videos/fallback.jpg",
}) {
  return (
    <main style={{ padding: "32px 16px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ margin: 0, fontSize: "clamp(28px,5vw,48px)" }}>{title}</h1>
      {subtitle && <p style={{ marginTop: 8, color: "#6b7280" }}>{subtitle}</p>}

      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        <a href="tel:+14328424578" style={btn("#dc2626")}>Call (432)842-4578</a>
        <a href="sms:+14328424578?&body=Hi%20A%26H%20Towing%2C%20I%20need%20assistance%20at%20[location]%20with%20[vehicle]%20-%20please%20call%20me%20back." style={btn("#2563eb")}>
          Request Dispatch
        </a>
      </div>

      {heroVideoSrc && (
        <div style={{
          position: "relative", paddingBottom: "56.25%", height: 0,
          overflow: "hidden", borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,.15)", marginTop: 16
        }}>
          <video
            autoPlay muted loop playsInline poster={fallbackPoster}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={heroVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {badges?.length > 0 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
          {badges.map((b, i) => (
            <span key={i} style={{
              background: "#111827", color: "#fff", padding: "4px 10px",
              borderRadius: 999, fontSize: 12
            }}>
              {b.label}
            </span>
          ))}
        </div>
      )}

      {bullets?.length > 0 && (
        <ul style={{ marginTop: 12, paddingLeft: 20, color: "#374151" }}>
          {bullets.map((t, i) => <li key={i} style={{ marginBottom: 8 }}>{t}</li>)}
        </ul>
      )}
    </main>
  );
}

function btn(bg) {
  return { background: bg, color: "#fff", padding: "12px 16px", borderRadius: 12, textDecoration: "none", fontWeight: 600 };
}
