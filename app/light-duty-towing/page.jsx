// FILE: app/light-duty-towing/page.jsx
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";

export const metadata = {
  title: "Light Duty Towing | A & H Towing & Recovery",
  description:
    "Light duty towing for cars, SUVs, and pickups around Pecos, Reeves County, and the West Texas highways with clear communication and careful handling.",
};

// TikTok IDs from your embeds
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

// Vibrant rotating border, matching the main page
function VibrantBorder({ children, className = "" }) {
  return (
    <>
      <style jsx global>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rb-rotate {
          to {
            --angle: 360deg;
          }
        }
        .rb-border {
          --angle: 0deg;
          background: conic-gradient(
            from var(--angle),
            #3b82f6 0%,
            #ef4444 50%,
            #3b82f6 100%
          );
          animation: rb-rotate 24s linear infinite;
        }
      `}</style>
      <div className={`rb-border p-[3px] rounded-[22px] ${className}`}>
        {children}
      </div>
    </>
  );
}

// Local TikTok embed using phone-style frame and tighter crop
function TikTokEmbed({ id, title }) {
  const src = `https://www.tiktok.com/embed/v2/${id}`;

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[260px] sm:w-[280px] md:w-[320px] aspect-[9/16] flex items-center justify-center">
        {/* Phone-style outer frame */}
        <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-[3px] shadow-[0_18px_40px_rgba(0,0,0,0.9)] border border-neutral-800">
          <div className="relative w-full h-full rounded-[28px] bg-black overflow-hidden">
            <iframe
              src={src}
              title={title}
              loading="lazy"
              className="absolute left-1/2 top-1/2"
              style={{
                // Tighter crop so it feels like your yellow rectangle
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

export default function LightDutyTowingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          heroVideoSrc="/Videos/tow1.mp4"
          serviceTitle="Light Duty Towing"
          serviceSubtitle="Cars, SUVs, and pickups moved safely around Pecos, Reeves County, and the West Texas highways."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-6 items-start">
            {/* LEFT: steel-backed text block + helpers */}
            <div className="space-y-6 text-amber-50">
              {/* Steel/shaded main block with vibrant border */}
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
                    Daily drivers, family vehicles, and work rigs — handled with
                    care.
                  </h2>

                  <p className="mt-3 text-sm md:text-base font-semibold text-white drop-shadow">
                    A breakdown or no-start doesn&apos;t have to wreck your
                    whole day. We focus on{" "}
                    <span className="font-black">
                      safe loading, clear communication, and clean drop-offs
                    </span>{" "}
                    so you know what&apos;s happening from hook to unload.
                  </p>

                  <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white drop-shadow">
                    <li>• Cars, SUVs, half-ton and light pickups</li>
                    <li>• Local tows across Pecos and surrounding communities</li>
                    <li>
                      • Long-distance runs along I-20, US-285, TX-17, TX-302
                    </li>
                    <li>
                      • Driveable and non-driveable units (flat tires, no-starts,
                      etc.)
                    </li>
                  </ul>

                  <p className="mt-3 text-sm md:text-base font-semibold text-white drop-shadow">
                    Tell us where you are, what you&apos;re driving, and where
                    you want it to go — home, shop, yard, or dealership.
                    We&apos;ll give you a straight answer on ETA and pricing.
                  </p>
                </div>
              </VibrantBorder>

              {/* Two helper boxes side-by-side on md+ */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Dispatch helper with steel & shade + vibrant border */}
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
                      What helps dispatch help you faster
                    </h3>
                    <ul className="space-y-1 text-white">
                      <li>• Year, make, and model of the vehicle</li>
                      <li>• Exact location (GPS pin if possible)</li>
                      <li>• What happened (no-start, flat, accident, etc.)</li>
                      <li>• Where you want the vehicle delivered</li>
                    </ul>
                    <p className="mt-2 text-sm md:text-base font-semibold text-white">
                      The more info you send up front, the fewer calls we have
                      to make back and forth while you&apos;re already stressed.
                    </p>
                  </div>
                </VibrantBorder>

                {/* Before we arrive with steel & shade + vibrant border */}
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
                      Before we arrive
                    </h3>
                    <ul className="space-y-1 text-white">
                      <li>
                        • Turn on your hazards if it&apos;s safe to do so.
                      </li>
                      <li>
                        • Stay inside the vehicle or well away from traffic.
                      </li>
                      <li>
                        • Gather keys, wallets, and anything you need to leave
                        with.
                      </li>
                      <li>
                        • If law enforcement is on scene, let them know A &amp; H
                        Towing is en route.
                      </li>
                    </ul>
                    <p className="mt-2 text-sm md:text-base font-semibold text-white">
                      Our goal is to get you and your vehicle off the shoulder
                      and into a safer spot as quickly and safely as possible.
                    </p>
                  </div>
                </VibrantBorder>
              </div>
            </div>

            {/* RIGHT: TikTok embeds + follow CTAs (vibrant border only) */}
            <div className="space-y-6">
              <VibrantBorder>
                <div className="rounded-[18px] border border-yellow-400/80 bg-black/85 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-lg md:text-xl font-black text-amber-300">
                      Light duty in action
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

                  {/* BIG TikTok frames – one per row, centered, phone-style */}
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

                  {/* Second follow button at bottom */}
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

              {/* Bright bottom text, shaded + bordered with vibrant border */}
              <VibrantBorder>
                <div className="rounded-[18px] border border-yellow-400/80 bg-black/80 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.7)]">
                  <p className="text-sm md:text-base font-semibold text-white drop-shadow">
                    Want to see more real-world light-duty work?{" "}
                    <span className="font-black text-amber-300">
                      Follow @285302ditchking on TikTok
                    </span>{" "}
                    for training clips, recoveries, and safety walk-throughs.
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
