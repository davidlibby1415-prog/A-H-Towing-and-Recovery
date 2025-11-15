"use client";

import ServiceLayout from "../../components/ServiceLayout";
import ServicePage from "../../components/ServicePage";
import SiteNavLinks from "../../components/SiteNavLinks"; // only if you actually use it

export default function LightDutyTowingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Light Duty Towing"
          serviceSubtitle="Cars, SUVs, and pickups — based in Pecos & Reeves County and running the West Texas highways day and night."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Stuck on the shoulder? We’ll come get you.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                A&amp;H Towing &amp; Recovery handles everyday breakdowns,
                fender-benders, and “my car just quit” moments all over Pecos,
                Reeves County, and the surrounding highways.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Local and long-distance light duty tows</li>
                <li>• Cars, SUVs, and 1-ton pickups</li>
                <li>• Shop, dealership, and home driveway tows</li>
                <li>• I-20, US-285, TX-17, TX-18, TX-302 and lease roads</li>
              </ul>
              <p className="text-sm md:text-base font-semibold">
                When you call, you get a local wrecking company — not a call
                center. We’ll tell you what we can do, what it will cost, and
                about how long before a truck reaches you.
              </p>
            </div>

            <TikTokGallery
              images={[
                "/images/light-duty-1.jpg",
                "/images/light-duty-2.jpg",
                "/images/light-duty-3.jpg",
                "/images/light-duty-4.jpg",
              ]}
            />
          </div>

          {/* Bottom CTAs */}
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
