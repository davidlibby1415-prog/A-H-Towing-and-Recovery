import React from "react";
import {
  SiteHeader,
  SiteFooter,
  TopMarquee,
  PhoneCTA,
  FormCTA,
  AnimBorder,
  SteelPanel,
  BrandHeroEmergency,
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
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        <BrandHeroEmergency
          heroVideoSrc="/Videos/fuel.mp4"   // Capital V matches /public/Videos/
          poster="/fallback.jpg"
          overlayOpacity={0}
        />

        {/* Description + Safety tips (with brighter text and vibrant borders) */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <AnimBorder>
              <SteelPanel className="bg-black/70 backdrop-blur-sm">
                <h2 className="text-white text-2xl md:text-3xl font-black mb-2">
                  What we can do on the spot
                </h2>
                <p className="text-white text-sm md:text-base font-semibold">
                  Not every problem needs a full tow. When a breakdown blindsides
                  you, we’ll meet you quickly and handle the small stuff that keeps
                  you rolling: fuel delivery, jumpstarts, lockouts, and a calm
                  plan if a tow is the safer call.
                </p>
                <ul className="mt-3 space-y-2 text-white text-sm md:text-base font-semibold">
                  <li>• Fuel delivery (gas or diesel)</li>
                  <li>• Jumpstarts and quick roadside battery checks</li>
                  <li>• Lockouts (fast entry with no damage)</li>
                  <li>• If needed, quick move to a safer shoulder or lot</li>
                </ul>
              </SteelPanel>
            </AnimBorder>

            <AnimBorder>
              <SteelPanel className="bg-black/70 backdrop-blur-sm">
                <h3 className="text-white text-2xl md:text-3xl font-black mb-2">
                  Safety Tips Before We Arrive
                </h3>
                <ul className="space-y-2 text-white text-sm md:text-base font-semibold">
                  <li>
                    Make sure your vehicle is in a safe location away from traffic — or evacuate the vehicle to a safe distance/place nearby.
                  </li>
                  <li>Turn on hazard flashers if it’s safe.</li>
                  <li>Stay belted inside, or stand well away from traffic.</li>
                  <li>Keep your phone handy so we can reach you.</li>
                  <li>
                    If law enforcement is on scene, let them know A&amp;H Towing &amp; Recovery is en route.
                  </li>
                </ul>
                <p className="mt-3 text-white text-sm md:text-base font-semibold">
                  Your safety comes first. If anything changes, call or text us with an update.
                </p>
              </SteelPanel>
            </AnimBorder>
          </div>
        </section>

        {/* CTA row (add the red + blue set here again, as requested) */}
        <section className="py-6 bg-red-800/90 border-t border-black/40">
          <div className="container max-w-7xl flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <FormCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
