// FILE: app/heavy-duty-commercial-towing/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Heavy Duty & Commercial Towing | A & H Towing & Recovery",
  description:
    "Heavy duty and commercial towing across Pecos, Reeves County, and West Texas — rotator service, big rigs, buses, and commercial fleets handled the right way.",
};

export default function HeavyDutyCommercialTowingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          heroVideoSrc="/Videos/tow3.mp4" // adjust if you use a different heavy-duty hero video
          serviceTitle="Heavy Duty & Commercial Towing"
          serviceSubtitle="Rotator, big wreckers, buses, and commercial fleets — handled safely, professionally, and the right way."
          overlayOpacity={0.35}
        />

        {/* Overview + CTAs */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-start">
            {/* LEFT: Service description */}
            <div className="space-y-4 text-amber-50 text-sm md:text-base">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-amber-100">
                Heavy Duty & Commercial Tow — West Texas Tough
              </h2>
              <p>
                When the load is big and the margin for error is small, A&amp;H
                Towing &amp; Recovery shows up with the right equipment and the
                right crew. From school buses and box trucks to semis and
                commercial fleets, we move heavy iron safely and by the book.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Rotator &amp; heavy wrecker services</li>
                <li>Commercial tow for buses, box trucks, and semis</li>
                <li>Yard-to-yard, shop-to-shop, and long-distance pulls</li>
                <li>Accident scene management &amp; recovery coordination</li>
                <li>Oilfield and remote-location heavy duty response</li>
              </ul>
              <p>
                You focus on your drivers and your customers. We&apos;ll focus
                on getting your equipment out of harm&apos;s way and where it
                needs to go.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <PhoneCTA />
                {/* 🔴 This red button just jumps to the main page text form */}
                <TextCTA />
              </div>
            </div>

            {/* RIGHT: Heavy-duty TikTok gallery */}
            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl font-black text-amber-100 text-center">
                Heavy Duty &amp; Commercial Tow in Action
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* 1. Commercial Tow: The Flying School Bus */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm md:text-base font-black text-amber-50 text-center">
                    Commercial Tow: The Flying School Bus
                  </div>
                  <TikTokEmbed
                    videoId="7512230159630617887"
                    title="Commercial Tow: The Flying School Bus"
                  />
                </div>

                {/* 2. Safety Tip: Always Check Your Brakes! See Why */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm md:text-base font-black text-amber-50 text-center">
                    Safety Tip: Always Check Your Brakes! See Why
                  </div>
                  <TikTokEmbed
                    videoId="7422122230550760734"
                    title="Safety Tip: Always Check Your Brakes! See Why"
                  />
                </div>

                {/* 3. Commercial Tow: Dolly in Action */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm md:text-base font-black text-amber-50 text-center">
                    Commercial Tow: Dolly in Action
                  </div>
                  <TikTokEmbed
                    videoId="7415077930256272671"
                    title="Commercial Tow: Dolly in Action"
                  />
                </div>

                {/* 4. Heavy Duty Tow: We Do It the Right Way */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm md:text-base font-black text-amber-50 text-center">
                    Heavy Duty Tow: We Do It the Right Way
                  </div>
                  <TikTokEmbed
                    videoId="7403892840364838174"
                    title="Heavy Duty Tow: We Do It the Right Way"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

