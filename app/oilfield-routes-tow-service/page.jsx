import React from "react";
import {
  SiteHeader,
  SiteFooter,
  TopMarquee,
  BrandHero,
  PhoneCTA,
  LinkToFormCTA,
  AnimBorder,
  SteelPanel,
} from "../../components/ServiceLayout";

export const metadata = {
  title: "Oilfield Routes Tow Service | A & H Towing & Recovery",
  description:
    "Lease roads and remote access towing across the West Texas oilfield routes. Safe, damage-conscious recoveries and transport.",
};

export default function OilfieldRoutesPage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          heroVideoSrc="/Videos/tow2.mp4"
          poster="/fallback.jpg"
          serviceTitle="Oilfield Routes Tow Service"
          serviceSubtitle="Lease roads • Remote access • Long & short distance tows across the oilfield"
          bannerTopMarginPx={8}
          cardCenterOffsetPx={60}
          overlayOpacity={0.25}
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl">
            <AnimBorder>
              <SteelPanel className="text-amber-50">
                <h2 className="text-2xl md:text-3xl font-black mb-2 text-white">
                  Built for Lease Roads & Remote Access
                </h2>
                <p className="text-sm md:text-base font-semibold text-white">
                  We handle mud, sand, washboards, and long lease roads daily. Our operators
                  prioritize damage-conscious loading and safe extractions—on time and with clear pricing.
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white">
                  <li>• Long & short distance to yards, shops, and staging areas</li>
                  <li>• Winch-outs from caliche, sand, and bar ditches</li>
                  <li>• 24/7 dispatch with GPS-enabled text request</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <PhoneCTA />
                  <LinkToFormCTA />
                </div>
              </SteelPanel>
            </AnimBorder>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
