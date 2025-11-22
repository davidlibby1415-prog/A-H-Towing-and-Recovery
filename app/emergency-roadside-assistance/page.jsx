"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  TopMarquee,
  BrandHero,
} from "../../components/ServiceLayout";

/** Shared CTA styles (local-only to this page; DOES NOT touch your form) */
function BlueCallButton({ className = "" }) {
  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white ${className}`}
      aria-label="Call 24/7 dispatch at (432) 842-4578"
    >
      <span className="uppercase tracking-wide text-xs md:text-sm text-center">
        CLICK HERE TO CALL 24/7 DISPATCH
      </span>
      <span className="mt-1 text-lg md:text-xl leading-none">
        (432) 842-4578
      </span>
    </a>
  );
}

function RedTextFormButton({ className = "" }) {
  // IMPORTANT: simple anchor to main page form; main page handles smooth snap.
  return (
    <a
      href="/#contact"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahRed hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base min-w-[260px] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white outline outline-2 outline-white ${className}`}
      aria-label="Go to dispatch text form on main page"
    >
      TEXT DISPATCH (INCLUDE GPS) — CLICK HERE
    </a>
  );
}

export const metadata = {
  title: "Emergency Roadside Assistance | A & H Towing & Recovery",
  description:
    "Fuel delivery, jumpstarts, lockouts, tire changes, and safe transportation around Pecos, Reeves County, and the West Texas highways.",
};

export default function EmergencyRoadsidePage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* Video hero — capital V path kept; brighter headline/subtitle via white text */}
        <BrandHero
          heroVideoSrc="/Videos/fuel.mp4"   // <- capital V (critical)
          poster="/fallback.jpg"
          serviceTitle={
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.8)]">
              Emergency Roadside Assistance
            </span>
          }
          serviceSubtitle={
            <span className="text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,.75)]">
              Fuel, jumpstarts, lockouts, tire changes, and safe transportation around
              Pecos, Reeves County, and the West Texas highways.
            </span>
          }
          // If your BrandHero supports this prop, keep it; otherwise it’s ignored.
          overlayOpacity={0.18}
          // If your BrandHero centers the card too low, nudge it up a bit:
          cardCenterOffsetPx={8}
        />

        {/* Two content boxes with vibrant border + bright text */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">

            {/* What we can do on the spot */}
            <div className="rounded-[28px] p-[6px] rb-border">
              <div className="rounded-[22px] border border-yellow-400/85 bg-black/70 p-5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                   style={{
                     backgroundImage:
                       'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                   }}>
                <h2 className="text-2xl md:text-3xl font-black mb-2">
                  What we can do on the spot
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  Not every problem needs a full tow. When a breakdown blindsides
                  you, we’ll meet you quickly and handle the small stuff that keeps
                  you rolling: fuel delivery, jumpstarts, lockouts, <strong>tire changes</strong>,
                  and a calm plan if a tow is the safer call.
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                  <li>• Fuel delivery (gas or diesel)</li>
                  <li>• Jumpstarts and quick roadside battery checks</li>
                  <li>• Lockouts (fast entry with no damage)</li>
                  <li>• <strong>Tire changes</strong> (spare install / roadside)</li>
                  <li>• If needed, quick move to a safer shoulder or lot</li>
                  <li>• <strong>Provide safe transportation</strong> to town, hotel, or a meeting point</li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-3">
                  <BlueCallButton />
                  <RedTextFormButton />
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="rounded-[28px] p-[6px] rb-border">
              <div className="rounded-[22px] border border-yellow-400/85 bg-black/70 p-5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                   style={{
                     backgroundImage:
                       'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                   }}>
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  Safety Tips Before We Arrive
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    <strong>
                      Make sure your vehicle is in a safe location away from traffic
                      — or evacuate the vehicle to a safe distance/place nearby.
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
                <p className="mt-3 text-sm md:text-base font-semibold">
                  Your safety comes first. If anything changes, call or text us with an update.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <BlueCallButton />
                  <RedTextFormButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* animated red↔blue border keyframes (same as main) */}
      <style jsx global>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rb-rotate {
          to { --angle: 360deg; }
        }
        .rb-border {
          --angle: 0deg;
          background: conic-gradient(
            from var(--angle),
            #3b82f6 0%,
            #ef4444 50%,
            #3b82f6 100%
          );
          animation: rb-rotate 24s linear infinite;
        }
      `}</style>
    </>
  );
}
