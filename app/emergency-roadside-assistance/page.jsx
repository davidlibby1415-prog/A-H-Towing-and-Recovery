import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../../components/ServiceLayout";

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel delivery, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways.",
};

export default function EmergencyRoadsidePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways."
          heroVideoSrc="/videos/fuel.mp4"        // <- your public video path (case-sensitive)
          poster="/fallback.jpg"
          brandMode="text"                        // <- plain red letters (no box)
          brandOffsetPx={-24}                    // move wordmark slightly up
          contentOffsetPx={-120}                 // move the service box UP ~2.1 inches
          minHeightClass="h-[56vh] md:h-[72vh]"  // taller hero
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Not every problem needs a full tow.
              </h2>

              <p className="text-sm md:text-base font-semibold">
                Sometimes you just need enough help to get rolling again — safely. We handle the small breakdowns that can still ruin your
                night if no one shows up with the right tools and attitude.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Fuel delivery (gas and diesel)</li>
                <li>• Jumpstarts and basic battery checks</li>
                <li>• Lockouts (fast entry, no damage)</li>
                <li>• Coordination with law enforcement when needed</li>
              </ul>

              <p className="text-sm md:text-base font-semibold">
                Tell us where you are, what you&apos;re driving, and what happened. We&apos;ll let you know if roadside is enough or if
                you&apos;re better off with a full tow to a safer spot or shop.
              </p>

              {/* What to tell us when you call */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h3 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  What helps us help you faster
                </h3>
                <ul className="space-y-1">
                  <li>• Year, make, and model of your vehicle</li>
                  <li>• Exact location or GPS pin (mile marker, exit, or landmark)</li>
                  <li>• What happened (out of fuel, dead battery, keys locked in, etc.)</li>
                  <li>• If you&apos;re in a safe spot or on a live shoulder</li>
                </ul>
                <p className="mt-2">
                  A few clear details up front means fewer call-backs while you&apos;re already stressed on the side of the road.
                </p>
              </div>
            </div>

            {/* RIGHT: TikTok-style gallery / visuals */}
            <div className="space-y-6">
              <TikTokGallery
                images={[
                  "/images/roadside-1.jpg",
                  "/images/roadside-2.jpg",
                  "/images/roadside-3.jpg",
                  "/images/roadside-4.jpg",
                ]}
              />

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold text-amber-50">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  While you&apos;re waiting on us
                </h4>
                <ul className="space-y-1">
                  <li>• Turn on your hazard flashers if it&apos;s safe.</li>
                  <li>• Stay inside the vehicle or well away from traffic.</li>
                  <li>• Keep your phone nearby so we can reach you.</li>
                  <li>• If law enforcement is on scene, let them know A &amp; H Towing &amp; Recovery is on the way.</li>
                </ul>
                <p className="mt-2">
                  Our first priority is keeping you, your passengers, and other drivers as safe as possible while we work.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom buttons */}
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
