// NOTE: this is a Server Component (no "use client" here) so `metadata` is allowed.
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
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
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* Video hero — Path updated to /Videos/fuel.mp4 */}
        <BrandHero
          heroVideoSrc="/Videos/fuel.mp4" 
          poster="/fallback.jpg"
          serviceTitle="EMERGENCY ROADSIDE ASSISTANCE" // Capitalized for impact
          serviceSubtitle="Fuel, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways."
          overlayOpacity={0}
          cardCenterOffsetPx={130}
        />

        {/* Description + Safety tips — with attractive text styling */}
        <section className="py-10 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-yellow-400/80 bg-black/60 p-6 text-white shadow-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-wider text-yellow-400 drop-shadow-lg">
                What We Can Do on the Spot 🛠️
              </h2>
              <p className="text-base md:text-lg font-medium text-gray-200">
                Not every problem needs a full tow. When a breakdown blindsides
                you, we’ll meet you quickly and handle the small stuff that keeps
                you from rolling:
              </p>
              <ul className="mt-4 space-y-3 text-base md:text-lg font-bold text-red-300">
                <li>⛽ Fuel delivery (Gas or Diesel)</li>
                <li>🔋 Jumpstarts & Quick Battery Checks</li>
                <li>🔑 Lockouts (Fast, Damage-Free Entry)</li>
                <li>➡️ Quick move to a Safer Shoulder or Lot (if necessary)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-yellow-400/80 bg-black/60 p-6 text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-wider text-yellow-400 drop-shadow-lg">
                Safety Tips Before We Arrive 🚨
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-base md:text-lg font-semibold">
                <li>
                  <strong className="text-red-300">
                    FIRST: Move to a safe location away from traffic.
                  </strong>
                  Or, evacuate the vehicle entirely and stand at a safe distance.
                </li>
                <li>Turn on hazard flashers if it’s safe to do so.</li>
                <li>Stay belted inside, or stand well away from all traffic lanes.</li>
                <li>Keep your phone handy—we will call to confirm your exact location.</li>
                <li>
                  If law enforcement is on scene, let them know A&amp;H Towing
                  &amp; Recovery is en route.
                </li>
              </ol>
              <p className="mt-4 text-base md:text-lg font-bold text-red-300">
                Your safety comes first. If anything changes, call or text us with an update immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 bg-red-800/90">
          <div className="container max-w-7xl flex flex-wrap justify-center gap-3">
            {/* The PhoneCTA and TextCTA components are imported from ServiceLayout */}
            {/* To keep the page component clean, we rely on the component above for the import. */}
            {/* If the page needs the CTAs here, they must be imported from the layout file: */}
            {/* <PhoneCTA /> and <TextCTA /> */}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
