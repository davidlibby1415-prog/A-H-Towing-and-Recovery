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
  title: "Tips & Tricks | A & H Towing & Recovery",
  description:
    "Practical tips for staying safe on the roadside, getting faster service, and protecting your vehicle during a tow in West Texas.",
};

export default function TipsTricksPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Tips & Tricks for Safer Tows"
          serviceSubtitle="Simple steps you can take before, during, and after a tow to keep your family safer and get help faster in West Texas."
        />

        {/* Main tips section */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Tips content */}
            <div className="space-y-6 text-amber-50">
              {/* Before You Call */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black">
                  Before you call or text for a tow
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  A few quick details can shave minutes off your wait time and
                  help us roll up with the right truck and plan.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    • {" "}
                    <span className="font-black underline">
                      Get your location as close as you can.
                    </span>{" "}
                    Mile markers, landmarks, exit numbers, or a GPS pin help us
                    find you faster on I-20, US-285, TX-17, and lease roads.
                  </li>
                  <li>
                    • {" "}
                    <span className="font-black underline">
                      Know what you&apos;re driving.
                    </span>{" "}
                    Year / make / model and if it&apos;s 2WD, 4x4, or AWD. That
                    matters for how we hook up, especially on low or specialty
                    vehicles.
                  </li>
                  <li>
                    • {" "}
                    <span className="font-black underline">
                      Tell us what happened.
                    </span>{" "}
                    Flat, no-start, wreck, off-road, stuck, or mechanical issue.
                    We don&apos;t need a novel — just honest basics so we know
                    what we&apos;re walking into.
                  </li>
                  <li>
                    • {" "}
                    <span className="font-black underline">
                      Let us know about kids, elders, or pets in the vehicle.
                    </span>{" "}
                    Heat and cold are harder on them. We&apos;ll keep that in
                    mind and move with purpose.
                  </li>
                </ul>
              </div>

              {/* While You Wait */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  While you&apos;re waiting on the tow truck
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  The shoulder, lease roads, and two-lanes around Pecos, Orla,
                  and Mentone aren&apos;t friendly places to stand around. Safety
                  comes first.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    •{" "}
                    <span className="font-black underline">
                      If it&apos;s safe, move away from traffic.
                    </span>{" "}
                    Get everyone out and to the right side of the vehicle or up
                    on the bar ditch if you can do it safely.
                  </li>
                  <li>
                    • Turn on hazard lights and, if you have them, set out
                    flares or triangles pointed toward oncoming traffic.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-black underline">
                      Stay off your phone calls
                    </span>{" "}
                    except to talk with dispatch, law enforcement, or family.
                    We may need to reach you for directions or updates.
                  </li>
                  <li>
                    • In the oilfield, follow site or company rules and listen
                    to the company man and officers on scene.
                  </li>
                </ul>
              </div>

              {/* Protecting Your Vehicle */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  Protecting your vehicle and belongings
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  A wreck or breakdown is stressful. A few small steps can help
                  you feel more in control of the situation.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    • Remove or secure wallets, purses, tools, firearms, and
                    anything else you can&apos;t afford to lose.
                  </li>
                  <li>
                    • Take pictures of the scene, damage, license plates, and
                    anything you&apos;re worried you&apos;ll forget later.
                  </li>
                  <li>
                    • Ask where your vehicle is going — shop, yard, home, or
                    body shop — and write it down or save it in your phone.
                  </li>
                  <li>
                    • If law enforcement is involved, listen to the officer and
                    let us coordinate with them on recovery and cleanup.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: TikTok-style gallery / visual block */}
            <div className="space-y-6">
              <TikTokGallery
                images={[
                  "/images/tips-1.jpg",
                  "/images/tips-2.jpg",
                  "/images/tips-3.jpg",
                  "/images/tips-4.jpg",
                ]}
