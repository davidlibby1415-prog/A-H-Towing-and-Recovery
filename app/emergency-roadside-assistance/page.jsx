// NOTE: this is a Server Component (no "use client" here) so `metadata` is allowed.
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TopMarquee,
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
      {/* Marquee identical to main page, directly under the header */}
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* Video hero — NO company name slab, white text, buttons only here */}
        <BrandHero
          heroVideoSrc="/videos/fuel.mp4" // ensure this exact file/casing exists in /public/videos
          poster="/fallback.jpg"
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways."
          overlayOpacity={0}
          cardCenterOffsetPx={130}
        />

        {/* Description + Safety tips — bright white text, NO extra buttons */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border border-yellow-400/80 bg-black/60 p-5 text-white">
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                What we can do on the spot
              </h2>
              <p className="text-sm md:text-base font-semibold">
                Not every problem needs a full tow. When a breakdown blindsides
                you, we’ll meet you quickly and handle the small stuff that keeps
                you from rolling: fuel delivery, jumpstarts, lockouts, and a calm
                plan if a tow is the safer call.
              </p>
              <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                <li>• Fuel delivery (gas or diesel)</li>
                <li>• Jumpstarts and quick roadside battery checks</li>
                <li>• Lockouts (fast entry with no damage)</li>
                <li>• If needed, quick move to a safer shoulder or lot</li>
              </ul>
              {/* Buttons intentionally omitted here (kept only in the hero box) */}
            </div>

            <div className="rounded-2xl border border-yellow-400/80 bg-black/60 p-5 text-white">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                Safety Tips Before We Arrive
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold">
                <li>
                  <strong>
                    Make sure your vehicle is in a safe location away from
                    traffic—or evacuate the vehicle to a safe distance/place
                    nearby.
                  </strong>
                </li>
                <li>Turn on hazard flashers if it’s safe.</li>
                <li>Stay belted inside, or stand well away from traffic.</li>
                <li>Keep your phone handy so we can reach you.</li>
                <li>
                  If law enforcement is on scene, let them know A&amp;H Towing
                  &amp; Recovery is en route.
                </li>
              </ol>
              <p className="mt-3 text-sm md:text-base font-semibold">
                Your safety comes first. If anything changes, call or text us with an update.
              </p>
            </div>
          </div>
        </section>

        {/* Optional spacer CTA strip without duplicating the primary buttons */}
        <section className="py-6 bg-red-800/90">
          <div className="container max-w-7xl flex flex-wrap justify-center gap-3">
            {/* Keep it simple; if you prefer no CTAs here at all, remove this section */}
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
