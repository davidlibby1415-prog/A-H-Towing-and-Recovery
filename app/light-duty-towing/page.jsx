// FILE: app/light-duty-towing/page.jsx
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../components/ServiceLayout";

/* =============== Payments Bar (We accept) =============== */

function PaymentsBar() {
  return (
    <div className="container max-w-7xl py-4 bg-red-900/60 rounded-2xl mt-6">
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
              <span className="font-extrabold text-base md:text-lg text-black">
                Cash
              </span>
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
              <span className="font-extrabold text-base md:text-lg text-black">
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
              <span className="font-extrabold text-base md:text-lg text-black">
                EFS Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Light Duty Towing | A & H Towing & Recovery",
  description:
    "Light duty towing for cars, SUVs, and pickups around Pecos, Reeves County, and the West Texas highways with clear communication and careful handling.",
};

export default function LightDutyTowingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO with tow1.mp4 background video */}
        <BrandHero
          heroVideoSrc="/Videos/tow1.mp4" // 👈 make sure this matches /public/Videos/tow1.mp4
          serviceTitle="Light Duty Towing"
          serviceSubtitle="Cars, SUVs, and pickups moved safely around Pecos, Reeves County, and the West Texas highways."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Steel background + shaded text box */}
            <div className="space-y-4 text-white">
              <div className="rounded-[28px] p-[6px] rb-border">
                <div
                  className="rounded-[22px] border border-yellow-400/80 bg-black/80 shadow-[0_10px_28px_rgba(0,0,0,0.85)] px-5 py-5 md:px-6 md:py-6"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/diamond-plate.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-black text-amber-300 mb-3">
                    Daily drivers, family vehicles, and work rigs — handled with
                    care.
                  </h2>

                  <p className="text-sm md:text-base font-semibold text-white">
                    A breakdown or no-start doesn&apos;t have to wreck your
                    whole day. We focus on{" "}
                    <span className="font-black">
                      safe loading, clear communication, and clean drop-offs
                    </span>{" "}
                    so you know what&apos;s happening from hook to unload.
                  </p>

                  <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white">
                    <li>• Cars, SUVs, half-ton and light pickups</li>
                    <li>• Local tows across Pecos and surrounding communities</li>
                    <li>• Long-distance runs along I-20, US-285, TX-17, TX-302</li>
                    <li>
                      • Driveable and non-driveable units (flat tires, no-starts,
                      etc.)
                    </li>
                  </ul>

                  <p className="mt-3 text-sm md:text-base font-semibold text-white">
                    Tell us where you are, what you&apos;re driving, and where
                    you want it to go — home, shop, yard, or dealership.
                    We&apos;ll give you a straight answer on ETA and pricing.
                  </p>

                  {/* Small “what to tell dispatch” helper */}
                  <div className="mt-4 rounded-2xl border border-yellow-400/80 bg-black/80 p-4 text-sm md:text-base font-semibold text-white">
                    <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                      What helps dispatch help you faster
                    </h3>
                    <ul className="space-y-1">
                      <li>• Year, make, and model of the vehicle</li>
                      <li>• Exact location (GPS pin if possible)</li>
                      <li>• What happened (no-start, flat, accident, etc.)</li>
                      <li>• Where you want the vehicle delivered</li>
                    </ul>
                    <p className="mt-2">
                      The more info you send up front, the fewer calls we have
                      to make back and forth while you&apos;re already stressed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: TikTok-style gallery / visuals */}
            <div className="space-y-6">
              {/* Follow us header ABOVE TikToks */}
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-black text-amber-300">
                  Follow us on TikTok
                </h3>
                <p className="text-sm md:text-base font-semibold text-white">
                  Real light-duty tows, roadside calls, and day-to-day work from{" "}
                  <span className="font-black">@285302ditchking</span>.
                </p>
                <a
                  href="https://www.tiktok.com/t/ZTMTrQtgU/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-pink-500/70 bg-black/70 px-3 py-1.5 text-xs md:text-sm font-semibold text-amber-50 hover:bg-pink-500/20"
                >
                  Open TikTok Profile
                </a>
              </div>

              <TikTokGallery
                images={[
                  "/images/light-1.jpg",
                  "/images/light-2.jpg",
                  "/images/light-3.jpg",
                  "/images/light-4.jpg",
                ]}
              />

              {/* Follow CTA BELOW TikToks */}
              <div className="text-center md:text-left text-sm md:text-base font-semibold text-white">
                <p>
                  Want to see more real-world light-duty work? Follow{" "}
                  <span className="font-black">@285302ditchking</span> on TikTok
                  for training clips, recoveries, and safety walk-throughs.
                </p>
              </div>

              {/* Before we arrive box */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/80 p-4 text-sm md:text-base font-semibold text-white">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  Before we arrive
                </h4>
                <ul className="space-y-1">
                  <li>• Turn on your hazards if it&apos;s safe to do so.</li>
                  <li>• Stay inside the vehicle or well away from traffic.</li>
                  <li>
                    • Gather keys, wallets, and anything you need to leave with.
                  </li>
                  <li>
                    • If law enforcement is on scene, let them know A &amp; H
                    Towing is en route.
                  </li>
                </ul>
                <p className="mt-2">
                  Our goal is to get you and your vehicle off the shoulder and
                  into a safer spot as quickly and safely as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>

          {/* We accept bar */}
          <PaymentsBar />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
