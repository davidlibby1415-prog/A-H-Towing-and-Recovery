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
    <main style={{ padding: "32px 16px" }}>
      {/* content */}
      {heroVideoSrc && (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 16 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={fallbackPoster}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={heroVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {/* badges + bullets ... */}
    </main>
  );
}

