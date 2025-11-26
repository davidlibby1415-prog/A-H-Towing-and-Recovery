// FILE: app/emergency-roadside-assistance/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways.",
};

// TikTok videos (you can swap IDs/titles later if you want different clips)
const TIKTOK_VIDEOS = [
  {
    id: "7495275556246785311",
    title: "Light Duty Tow: Double Time",
  },
  {
    id: "7479691088521940254",
    title: "Tow Calls: Alex Does It Herself",
  },
  {
    id: "6886898181007822086",
    title: "Light Duty Tow: Classic 1958 Ford Thunderbird",
  },
  {
    id: "7541454523265535245",
    title: "The Boss Works It: Tow Duty",
  },
];

// Vibrant border using static conic gradient (same as Heavy Duty)
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

// Phone-style TikTok embed with tight crop
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

// “We accept” payment bar (same styling used on other pages)
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

export default function EmergencyRoadsideAssistancePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO: uses /Videos/fuel.mp4 from public/Videos */}
        <BrandHero
          heroVideoSrc="/Videos/fuel.mp4"
          poster="/Videos/fallback.jpg"
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways."
          overlayOpacity={0.45}
        />

        {/* MAIN CONTENT – same layout pattern as Heavy Duty page */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-6 items-start">
            {/* LEFT: main roadside copy + two helper boxes */}
            <div className="space-y-6 text-amber-50">
              {/* Main block */}
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
                    When you&apos;re stuck on the side of the road, we come to
                    you.
                  </h2>

                  <p className="mt-3 text-sm md:text-base font-semibold text-white drop-shadow">
                    Whether it&apos;s{" "}
                    <span className="font-black">
                      a dead battery, empty tank, flat tire, or locked doors
                    </span>
                    , our goal is to get you out of danger and back on your way
                    as safely as possible.
                  </p>

                  <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white drop-shadow">
                    <li>
                      • Jumpstarts for cars, pickups, and light commercial units
                    </li>
                    <li>
                      • Fuel delivery when that last bar on the gauge runs out
                    </li>
                    <li>• Tire changes and assistance with damaged wheels</li>
                    <li>• Lockouts — keys locked in or lost on-scene</li>
                    <li>
                      • Short-distance towing if the vehicle can&apos;t be made
                      road-ready
                    </li>
                  </ul>

                  <p className="mt-3 text-sm md:text-base font-semibold text-white drop-shadow">
                    We work the same highways you do —{" "}
                    <span className="font-black">
                      I-20, farm-to-market roads, and lease roads around Pecos
                      and Reeves County
                    </span>
                    . If you&apos;re not sure we cover your area, call or text
                    and we&apos;ll tell you straight.
                  </p>
                </div>
              </VibrantBorder>

              {/* Two helper boxes side-by-side */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* What to tell dispatch */}
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
                      What to tell dispatch when you call or text
                    </h3>
                    <p className="mb-2 text-sm md:text-base font-semibold text-white">
                      You don&apos;t have to be an expert. Just give us the
                      basics so we can send the{" "}
                      <span className="font-black">right truck and gear</span>{" "}
                      and find you fast.
                    </p>

                    <ul className="space-y-1 text-white">
                      <li>
                        • <span className="font-black">Location:</span> GPS pin,
                        mile marker, nearest exit, or landmark (rest area, lease
                        road number, etc.).
                      </li>
                      <li>
                        • <span className="font-black">What happened:</span>{" "}
                        won&apos;t start, flat tire, out of fuel, locked out, or
                        in a ditch.
                      </li>
                      <li>
                        • <span className="font-black">Vehicle details:</span>{" "}
                        year / make / model and whether it&apos;s a dually,
                        loaded, or pulling a trailer.
                      </li>
                      <li>
                        • <span className="font-black">People on-scene:</span>{" "}
                        let us know if there are kids, elders, pets, or mobility
                        issues.
                      </li>
                      <li>
                        • <span className="font-black">Special hazards:</span>{" "}
                        narrow shoulder, blind hill/curve, heavy traffic, or bad
                        weather.
                      </li>
                    </ul>
                  </div>
                </VibrantBorder>

                {/* While you wait on us */}
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
                      While you wait on us
                    </h3>
                    <ul className="space-y-1 text-white">
                      <li>
                        • Keep doors locked and seatbelts on if traffic is
                        heavy.
                      </li>
                      <li>
                        • If you step out, do it on the{" "}
                        <span className="font-black">non-traffic side</span>{" "}
                        only.
                      </li>
                      <li>
                        • Turn on hazard flashers and, if safe, set triangles or
                        flares well behind the vehicle.
                      </li>
                      <li>
                        • Gather keys, wallets, medications, and anything
                        important you don&apos;t want left behind.
                      </li>
                    </ul>
                  </div>
                </VibrantBorder>
              </div>
            </div>

            {/* RIGHT: TikTok embeds + follow CTAs */}
            <div className="space-y-6">
              <VibrantBorder>
                <div className="rounded-[18px] border border-yellow-400/80 bg-black/85 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-lg md:text-xl font-black text-amber-300">
                      Roadside in action
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

              <VibrantBorder>
                <div className="rounded-[18px] border border-yellow-400/80 bg-black/80 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.7)]">
                  <p className="text-sm md:text-base font-semibold text-white drop-shadow">
                    Want to see more real-world roadside calls?{" "}
                    <span className="font-black text-amber-300">
                      Follow @285302ditchking on TikTok
                    </span>{" "}
                    for jumpstarts, fuel deliveries, lockouts, and tow-ins
                    across West Texas.
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

        {/* Payment bar */}
        <PaymentBar />
      </main>

      <SiteFooter />
    </>
  );
}
