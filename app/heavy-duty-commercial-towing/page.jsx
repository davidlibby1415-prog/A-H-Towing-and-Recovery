// FILE: app/heavy-duty-commercial-towing/page.jsx
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";

export const metadata = {
  title: "Heavy Duty & Commercial Towing | A & H Towing & Recovery",
  description:
    "Heavy duty and commercial towing for buses, box trucks, semis, and fleets across Pecos, Reeves County, and West Texas oilfield routes.",
};

// Heavy Duty TikTok videos from your embeds
const TIKTOK_VIDEOS = [
  {
    id: "7512230159630617887",
    title: "Commercial Tow: The Flying School Bus",
  },
  {
    id: "7422122230550760734",
    title: "Safety Tip: Always Check Your Brakes! See Why",
  },
  {
    id: "7415077930256272671",
    title: "Commercial Tow: Dolly in Action",
  },
  {
    id: "7403892840364838174",
    title: "Heavy Duty Tow: We Do It the Right Way",
  },
];

// Vibrant border using static conic gradient (no styled-jsx)
function VibrantBorder({ children, className = "" }) {
  return (
    <div
      className={`rounded-[22px] p-[3px] ${className}`}
      style={{
        background:
          "conic-gradient(from 0deg, #3b82f6 0%, #ef4444 50%, #3b82f6 100%)",
      }}
    >
      {children}
    </div>
  );
}

// Phone-style TikTok embed with tighter crop (same as Light Duty)
function TikTokEmbed({ id, title }) {
  const src = `https://www.tiktok.com/embed/v2/${id}`;

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[260px] sm:w-[280px] md:w-[320px] aspect-[9/16] flex items-center justify-center">
        <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-[3px] shadow-[0_18px_40px_rgba(0,0,0,0.9)] border border-neutral-800">
          <div className="relative w-full h-full rounded-[28px] bg-black overflow-hidden">
            <iframe
              src={src}
              title={title}
              loading="lazy"
              className="absolute left-1/2 top-1/2"
              style={{
                width: "115%",
                height: "115%",
                transform: "translate(-50%, -54%)",
                border: "0",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// “We accept” payment bar, matching the main page
function PaymentBar() {
  return (
    <div className="container max-w-7xl py-4 bg-red-900/60 rounded-2xl mt-8">
      <div className="w-full flex justify-center">
        <div className="rounded-2xl p-3 bg-gradient-to-r from-sky-500/30 via-rose-500/30 to-amber-400/30 border border-black/10 max-w-fit">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="font-extrabold text-white text-lg md:text-xl">
              We accept:
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-yellow-50 to-amber-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">Cash</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-sky-50 to-blue-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">
                All Major Credit Cards
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-gradient-to-r from-rose-50 to-red-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M3 6h18l-2 12H5L3 6Z" />
                <path d="M7 10h10M6 14h12" />
              </svg>
              <span className="font-extrabold text-base md:text-lg">
                EFS Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeavyDutyCommercialTowingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          heroVideoSrc="/Videos/tow3.mp4"
          serviceTitle="Heavy Duty & Commercial Towing"
          serviceSubtitle="Rotator & heavy wrecker services for buses, box trucks, semis, and commercial fleets across West Texas."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-6 items-start">
            {/* LEFT: steel-backed text block + helpers */}
            <div className="space-y-6 text-amber-50">
              {/* Main heavy-duty copy with steel + shade + vibrant border */}
              <VibrantBorder>
                <div
                  className="rounded-[18px] border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)] px-5 py-5 md:px-7 md:py-7"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at top, rgba(15,23,42,0.85), rgba(0,0,0,0.98)), url('/diamond-plate.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-black text-amber-300 drop-shadow">
                    When the load is big and the margin for error is small, A&H
                    Towing &amp; Recovery shows up with the right equipment and
                    the right crew.
                  </h2>

                  <p className="mt-3 text-sm md:text-base font-semibold text-white drop-shadow">
                    From school buses and box trucks to semis and commercial
                    fleets, we move heavy iron safely and by the book.
                  </p>

                  <p className="mt-3 text-sm md:text-base font-black text-amber-300 drop-shadow">
                    Rotator &amp; heavy wrecker services
                  </p>

                  <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white drop-shadow">
                    <li>• Commercial tow for buses, box trucks, and semis</li>
                    <li>• Yard-to-yard, shop-to-shop, and long-distance pulls</li>
                    <li>
                      • Accident scene management &amp; recovery coordination
                    </li>
                    <li>
                      • Oilfield and remote-location heavy duty response
                    </li>
                  </ul>

                  <p className="mt-3 text-sm md:text-base font-semibold text-white drop-shadow">
                    You focus on your drivers and your customers. We&apos;ll
                    focus on getting your equipment out of harm&apos;s way and
                    where it needs to go.
                  </p>
                </div>
              </VibrantBorder>

              {/* Two helper boxes side-by-side on md+ */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Dispatch helper with steel + shade + vibrant border */}
                <VibrantBorder>
                  <div
                    className="rounded-[18px] border border-yellow-400/80 bg-black/80 p-4 text-sm md:text-base font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.7)]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at top, rgba(15,23,42,0.85), rgba(0,0,0,0.98)), url('/diamond-plate.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                      What helps dispatch on heavy calls
                    </h3>
                    <ul className="space-y-1 text-white">
                      <li>• Unit type (bus, box truck, semi, trailer, etc.)</li>
                      <li>• Loaded or empty (and approximate weight)</li>
                      <li>• Exact location (GPS pin if possible)</li>
                      <li>• What happened and current position of the unit</li>
                    </ul>
                    <p className="mt-2 text-sm md:text-base font-semibold text-white">
                      Clear info up front lets us roll the right truck, rigging,
                      and manpower on the first shot.
                    </p>
                  </div>
                </VibrantBorder>

                {/* Safety / scene helper with steel + shade + vibrant border */}
                <VibrantBorder>
                  <div
                    className="rounded-[18px] border border-yellow-400/80 bg-black/80 p-4 text-sm md:text-base font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.7)]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at top, rgba(15,23,42,0.85), rgba(0,0,0,0.98)), url('/diamond-plate.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                      Before we arrive on a heavy scene
                    </h3>
                    <ul className="space-y-1 text-white">
                      <li>
                        • Keep drivers and passengers clear of traffic and the
                        work area.
                      </li>
                      <li>
                        • If law enforcement or DOT is on scene, let them know
                        A&amp;H is en route.
                      </li>
                      <li>
                        • Have keys, paperwork, and any special instructions
                        ready.
                      </li>
                      <li>
                        • For fleet calls, confirm drop location and contact
                        person.
                      </li>
                    </ul>
                    <p className="mt-2 text-sm md:text-base font-semibold text-white">
                      Our crews work to clear the scene safely, protect your
                      equipment, and respect the roadway and environment.
                    </p>
                  </div>
                </VibrantBorder>
              </div>
            </div>

            {/* RIGHT: TikTok embeds + follow CTAs (vibrant border only, like Light Duty) */}
            <div className="space-y-6">
              <VibrantBorder>
                <div className="rounded-[18px] border border-yellow-400/80 bg-black/85 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-lg md:text-xl font-black text-amber-300">
                      Heavy duty in action
                    </h3>
                    <a
                      href="https://www.tiktok.com/@285302ditchking"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-amber-400/10 px-4 py-1.5 text-xs md:text-sm font-black text-amber-200 shadow-cta hover:bg-amber-300 hover:text-black hover:scale-105 active:scale-95 transition-transform animate-pulse"
                    >
                      Click here to Follow us on TikTok
                    </a>
                  </div>

                  {/* One TikTok per row with bold title above, phone-style frame */}
                  <div className="grid grid-cols-1 gap-4">
                    {TIKTOK_VIDEOS.map((vid) => (
                      <div
                        key={vid.id}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="text-sm md:text-base font-black text-amber-50 text-center">
                          {vid.title}
                        </div>
                        <TikTokEmbed id={vid.id} title={vid.title} />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <a
                      href="https://www.tiktok.com/@285302ditchking"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-amber-400/10 px-5 py-1.5 text-xs md:text-sm font-black text-amber-200 shadow-cta hover:bg-amber-300 hover:text-black hover:scale-105 active:scale-95 transition-transform"
                    >
                      Click here to Follow us on TikTok
                    </a>
                  </div>
                </div>
              </VibrantBorder>

              {/* Bottom text callout with vibrant border */}
              <VibrantBorder>
                <div className="rounded-[18px] border border-yellow-400/80 bg-black/80 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.7)]">
                  <p className="text-sm md:text-base font-semibold text-white drop-shadow">
                    Want to see more rotator work, recoveries, and training
                    clips?{" "}
                    <span className="font-black text-amber-300">
                      Follow @285302ditchking on TikTok
                    </span>{" "}
                    for real-world heavy duty calls across West Texas.
                  </p>
                </div>
              </VibrantBorder>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>

        {/* Payment bar like the main page */}
        <PaymentBar />
      </main>

      <SiteFooter />
    </>
  );
}
