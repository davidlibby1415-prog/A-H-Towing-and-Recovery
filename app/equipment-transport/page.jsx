"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../../components/ServiceLayout";

export default function EquipmentTransportPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Equipment Transport"
          serviceSubtitle="Light equipment, tool trailers, and small machinery moved safely around Pecos, Reeves County, and West Texas."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-amber-50">
              <h2 className="text-2xl md:text-3xl font-black">
                Move your gear without beating it up.
              </h2>
              <p className="text-sm md:text-base font-semibold">
                We handle small equipment and tool trailers that are too heavy
                or awkward for a regular bumper pull.
              </p>
              <ul className="space-y-2 text-sm md:text-base font-semibold">
                <li>• Compressors, welders, and light machinery</li>
                <li>• Tool and jobsite trailers</li>
                <li>• Yard-to-yard, shop-to-site moves</li>
                <li>• Careful loading and securement</li>
              </ul>
              <p className="text-sm md:text-base font-semibold">
                Tell us what you need moved, approximate weight, and where it’s
                going. We’ll let you know if it fits our equipment and schedule.
              </p>
            </div>

            <TikTokGallery
              images={[
                "/images/equipment-1.jpg",
                "/images/equipment-2.jpg",
                "/images/equipment-3.jpg",
                "/images/equipment-4.jpg",
              ]}
            />
          </div>

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

