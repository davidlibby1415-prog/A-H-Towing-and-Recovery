// app/oilfield-routes-tow-service/page.jsx
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  TopMarquee,
  PhoneCTA,
  TextCTA,
  AnimBorder,
  SteelPanel,
  BrandHeroEmergency,
} from "../../components/ServiceLayout";

export const metadata = {
  title: "Oilfield Routes Tow Service | A & H Towing & Recovery",
  description:
    "Lease roads, remote access, and long/short distance towing across West Texas oilfield routes.",
};

export default function OilfieldRoutesTowServicePage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO: use the emergency hero over video (no company banner) */}
        <BrandHeroEmergency
          heroVideoSrc="/Videos/tow1.mp4" // NOTE: Capital V (matches /public/Videos/)
          poster="/fallback.jpg"
          overlayOpacity={0}
        />

        {/* Simple content (kept lightweight to avoid compile issues) */}
        <section className="py-10 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <AnimBorder>
              <SteelPanel className="bg-black/80 backdrop-blur-sm">
                <h2 className="text-white text-2xl md:text-3xl font-black mb-2">
                  Oilfield Routes, Remote Access
                </h2>
                <p className="text-white text-sm md:text-base font-semibold">
                  We handle lease roads, caliche, sand, and rough approaches with
                  the same care we bring to highway calls—coordinating with gates,
                  pads, and shift changes to keep your crew moving.
                </p>
                <ul className="mt-3 space-y-2 text-white text-sm md:text-base font-semibold">
                  <li>• Light & medium duty towing</li>
                  <li>• Winch-outs & recoveries</li>
                  <li>• Equipment transports (light)</li>
                  <li>• Long & short distance service</li>
                </ul>
              </SteelPanel>
            </AnimBorder>

            <AnimBorder>
              <SteelPanel className="bg-black/80 backdrop-blur-sm">
                <h3 className="text-white text-2xl md:text-3xl font-black mb-2">
                  Quick Dispatch, Clear Comms
                </h3>
                <p className="text-white text-sm md:text-base font-semibold">
                  Text a GPS pin, lease name, or closest highway marker, and we’ll
                  get a truck rolling. If site directions change, send an update—
                  we’ll adapt on the fly.
                </p>
              </SteelPanel>
            </AnimBorder>
          </div>
        </section>

        {/* CTA row */}
        <section className="py-6 bg-red-800/90 border-t border-black/40">
          <div className="container max-w-7xl flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
