export function BrandHeroEmergency({
  heroVideoSrc,           // e.g., "/Videos/fuel.mp4"
  poster = "/fallback.jpg",
  overlayOpacity = 0,
}) {
  return (
    <section
      className="relative z-[10] w-full overflow-hidden bg-neutral-950 border-b border-black/40"
      style={{ minHeight: "62vh" }}
    >
      {heroVideoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      )}

      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
      )}

      {/* Centered callout */}
      <div className="relative container max-w-7xl h-[62vh] grid place-items-center">
        <div className="w-[min(92vw,880px)]">
          <div className="rounded-2xl border border-white/80 bg-black/80 backdrop-blur-sm text-white px-4 md:px-6 py-4 text-center shadow-[0_12px_35px_rgba(0,0,0,.65)]">
            <h2
              className="text-2xl md:text-3xl font-black"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,.8)" }}
            >
              Emergency Roadside Assistance
            </h2>
            <p
              className="mt-1 text-sm md:text-base font-semibold text-white"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,.8)" }}
            >
              Fuel, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <PhoneCTA />
              <TextCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

