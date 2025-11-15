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
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Not every problem needs a full tow.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Sometimes you just need enough help to get back rolling again —
                safely.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Fuel delivery (gas and diesel)</li>
                <li>• Jumpstarts and battery checks</li>
                <li>• Lockouts (fast entry, no damage)</li>
                <li>• Coordination with law enforcement when needed</li>
              </ul>
              <p className="text-sm md:text-base font-semibold">
                Tell us where you are, what you’re driving, and what happened.
                We’ll let you know if roadside is enough or if you need a full
                tow.
              </p>
            </div>

            {/* RIGHT: TikTok-style gallery / visuals */}
            <TikTokGallery
              images={[
                "/images/roadside-1.jpg",
                "/images/roadside-2.jpg",
                "/images/roadside-3.jpg",
                "/images/roadside-4.jpg",
              ]}
            />
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
