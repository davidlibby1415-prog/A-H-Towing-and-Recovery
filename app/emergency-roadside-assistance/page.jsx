import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  LinkToFormCTA,
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
        <BrandHero
          heroVideoSrc="/Videos/fuel.mp4"  // <-- capital V (critical fix)
          poster="/fallback.jpg"
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways."
          bannerTopMarginPx={8}
          cardCenterOffsetPx={60}          // move the card UP on the screen
          overlayOpacity={0.25}
        />

        {/* Description + Safety tips */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-5 text-amber-50 shadow-[0_0_25px_rgba(251,191,36,0.45)]">
              <h2 className="text-2xl md:text-3xl font-black mb-2 text-white">
                What we can do on the spot
              </h2>
              <p className="text-sm md:text-base font-semibold text-white">
                Not every problem needs a full tow. When a breakdown blindsides
                you, we’ll meet you quickly and handle the small stuff that keeps
                you rolling: fuel delivery, jumpstarts, lockouts, and a calm
                plan if a tow is the safer call.
              </p>
              <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white">
                <li>• Fuel delivery (gas or diesel)</li>
                <li>• Jumpstarts and quick roadside battery checks</li>
                <li>• Lockouts (fast entry with no damage)</li>
                <li>• If needed, quick move to a safer shoulder or lot</li>
              </ul>
              <p className="mt-3 text-sm md:text-base font-semibold text-white">
                Tell us your vehicle, where you are (GPS pin helps), and what
                happened. We’ll advise if roadside is enough or if a tow makes
                more sense.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <PhoneCTA />
                <LinkToFormCTA />
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-5 text-amber-50 shadow-[0_0_25px_rgba(251,191,36,0.45)]">
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">
                Safety Tips Before We Arrive
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold text-white">
                <li>
                  <strong>
                    Make sure your vehicle is in a safe location away from
                    traffic or evacuate the vehicle to a safe distance/place
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
              <p className="mt-3 text-sm md:text-base font-semibold text-white">
                Your safety comes first. If anything changes, call or text us
                an update.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons again below the text area */}
        <section className="py-6 bg-red-800/90">
          <div className="container max-w-7xl flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <LinkToFormCTA label="TEXT REQUEST FORM (INCLUDE GPS)" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

