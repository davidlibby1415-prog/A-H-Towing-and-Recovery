import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../components/ServiceLayout";

export const metadata = {
  title: "Winching / Recovery | A & H Towing & Recovery",
  description:
    "Off-road recovery for mud, sand, soft shoulder, and lease roads around Pecos, Orla, Mentone, and the West Texas patch.",
};

export default function WinchingRecoveryPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Winching / Recovery"
          serviceSubtitle="Off-road, mud, sand, and soft-shoulder recovery on lease roads and remote routes."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* Left: Text content */}
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                When the road ends and the trouble starts, we go in after you.
              </h2>

              <p className="text-sm md:text-base font-semibold">
                Lease roads, caliche, ranch tracks, and soft shoulders don&apos;t
                always play nice. When you&apos;re buried, high-centered, or
                sliding toward the bar ditch, you need recovery — not just a
                regular tow.
              </p>

              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Mud, sand, and soft-shoulder winch-outs</li>
                <li>• Off-road recoveries on lease roads and access routes</li>
                <li>• Frame-safe attachment points and careful rigging</li>
                <li>• Communication with company men, ranch, or safety when needed</li>
                <li>• Focus on recovering you with as little extra damage as possible</li>
              </ul>

              <p className="text-sm md:text-base font-semibold">
                Tell us what you&apos;re driving, how it&apos;s stuck, and how far off
                the road you are. Drop a GPS pin, gate description, or mile
                markers. We&apos;ll talk through the plan and send a truck that&apos;s
                equipped for recovery — not guesswork.
              </p>
            </div>

            {/* Right: TikTok-style gallery */}
            <TikTokGallery
              images={[
                "/images/winch-1.jpg",
                "/images/winch-2.jpg",
                "/images/winch-3.jpg",
                "/images/winch-4.jpg",
              ]}
            />
          </div>

          {/* Bottom buttons on the page */}
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
