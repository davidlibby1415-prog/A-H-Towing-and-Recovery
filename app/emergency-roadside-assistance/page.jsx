import React from "react";
import { SiteHeader, SiteFooter, BrandHero, PhoneCTA, TextCTA, TikTokGallery } from "../../components/ServiceLayout";

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
          heroVideoSrc="/videos/fuel.mp4"      // <-- make sure file in /public/videos is "fuel.mp4"
          poster="/fallback.jpg"
          serviceTitle="Emergency Roadside Assistance"
          serviceSubtitle="Fuel, jumpstarts, and lockouts around Pecos, Reeves County, and the West Texas highways."
          bannerTopMarginPx={16}               // company banner right under navbar
          cardCenterOffsetPx={130}             // ~2 inches down from center; tweak 120–150 to taste
          overlayOpacity={0}                   // no dark overlay on video
        />

        {/* ...rest of your page sections... */}
      </main>

      <SiteFooter />
    </>
  );
}

