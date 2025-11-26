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
        <BrandHero
          // 👇 use EXACTLY the same src string as your main page hero
          heroVideoSrc="/Videos/tow1.mp4"
          serviceTitle="Light Duty Towing"
          serviceSubtitle="Cars, SUVs, and pickups moved safely around Pecos, Reeves County, and the West Texas highways."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-6 items-start">
            {/* LEFT: Text content with steel/shaded background */}
            <div className="space-y-6 text-amber-50">
              {/* Big steel-backed block */}
              <div
                className="rounded-[22px] border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)] px-5 py-5 md:px-7 md:py-7"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at top, rgba(15,23,42,0.75), rgba(0,0,0,0.96)), url('/diamond-plate.jpg')",
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
                  A breakdown or no-start doesn&apos;t have to wreck your whole
                  day. We focus on{" "}
                  <span className="font-black">
                    safe loading, clear communication, and clean drop-offs
                  </span>{" "}
                  so you know what&apos;s happening from hook to unload.
                </p>

                <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white drop-shadow">
                  <li>• Cars, SUVs, half-ton and light pickups</li>
                  <li>• Local tows across Pecos and surrounding communities</li>
                  <li>• Long-distance runs along I-20, US-285, TX-17, TX-302</li>
                  <li>
                    • Driveable and non-driveable units (flat tires, no-starts,
                    etc.)
                  </li>
                </ul>

                <p className="mt-3 text-sm md:text-base font-semibold text-white drop-shadow">
                  Tell us where you are, what you&apos;re driving, and where you
                  want it to go — home, shop, yard, or dealership. We&apos;ll
                  give you a straight answer on ETA and pricing.
                </p>
              </div>

              {/* Two side-by-side info boxes on md+ */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* What helps dispatch… */}
                <div className="rounded-2xl border border-yellow-400/80 bg-black/75 p-4 text-sm md:text-base font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.7)]">
                  <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                    What helps dispatch help you faster
                  </h3>
                  <ul className="space-y-1">
                    <li>• Year, make, and model of the vehicle</li>
                    <li>• Exact location (GPS pin if possible)</li>
                    <li>• What happened (no-start, flat, accident, etc.)</li>
                    <li>• Where you want the vehicle delivered</li>
                  </ul>
                  <p className="mt-2 text-sm md:text-base font-semibold text-white">
                    The more info you send up front, the fewer calls we have to
                    make back and forth while you&apos;re already stressed.
                  </p>
                </div>

                {/* Before we arrive – directly under / beside that one */}
                <div className="rounded-2xl border border-yellow-400/80 bg-black/75 p-4 text-sm md:text-base font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.7)]">
                  <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                    Before we arrive
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      • Turn on your hazards if it&apos;s safe to do so.
                    </li>
                    <li>• Stay inside the vehicle or well away from traffic.</li>
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
                    Our goal is to get you and your vehicle off the shoulder and
                    into a safer spot as quickly and safely as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: TikTok-style gallery / visuals + follow CTA */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-yellow-400/80 bg-black/75 p-4 text-amber-50 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
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

                <TikTokGallery
                  images={[
                    "/images/light-1.jpg",
                    "/images/light-2.jpg",
                    "/images/light-3.jpg",
                    "/images/light-4.jpg",
                  ]}
                />
              </div>

              {/* Brighter bottom text (Option A) with shade + border */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/80 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.7)]">
                <p className="text-sm md:text-base font-semibold text-amber-50 drop-shadow">
                  Want to see more real-world light-duty work?{" "}
                  <span className="font-black text-amber-300">
                    Follow @285302ditchking on TikTok
                  </span>{" "}
                  for training clips, recoveries, and safety walk-throughs.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

