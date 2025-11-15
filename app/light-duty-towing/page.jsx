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
    "Light-duty towing for cars, SUVs, and pickups in Pecos, Reeves County, and the West Texas highways.",
};

export default function LightDutyTowingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Light Duty Towing"
          serviceSubtitle="Cars, SUVs, and pickups moved safely in and out of Pecos, Reeves County, and the West Texas highways."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* Left: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Stuck, broken down, or won&apos;t start? We&apos;ll get you off the
                shoulder.
              </h2>

              <p className="text-sm md:text-base font-semibold">
                Whether it&apos;s a daily driver, family SUV, or work pickup, we
                treat your vehicle like it&apos;s ours. Our light-duty trucks are
                set up for safe loading, securement, and clean drop-off.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Cars, small trucks, and SUVs</li>
                <li>• Breakdowns on I-20, US-285, TX-17, TX-302, and local roads</li>
                <li>• Local in-town tows and longer-distance transports</li>
                <li>• Careful hook-up and tie-down to protect bumpers and suspension</li>
              </ul>

              <p className="text-sm md:text-base font-semibold">
                When you call or text, let us know what you&apos;re driving, where
                you&apos;re headed, and what happened. We&apos;ll give you straight
                answers on price, ETA, and what to expect when the truck rolls up.
              </p>
            </div>

            {/* Right: TikTok-style gallery */}
            <TikTokGallery
              images={[
                "/images/light-1.jpg",
                "/images/light-2.jpg",
                "/images/light-3.jpg",
                "/images/light-4.jpg",
              ]}
            />
          </div>

          {/* Bottom buttons on the page */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
