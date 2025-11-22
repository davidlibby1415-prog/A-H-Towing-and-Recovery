// app/oilfield-routes-tow-service/page.jsx
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  TopMarquee,
  BrandHero,
} from "../../components/ServiceLayout";
import RBGlobalStyles from "../../components/RBGlobalStyles";

/* ===== Simple, server-safe CTA buttons (no hooks) ===== */
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
      <span className="mt-1 text-lg md:text-xl leading-none">(432) 842-4578</span>
    </a>
  );
}

function RedTextFormButton({ className = "" }) {
  // Link to the main page’s form section; main page handles scroll/behavior.
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
  title: "Oilfield Routes Tow Service | A & H Towing & Recovery",
  description:
    "Remote lease roads, US-285, TX-17, TX-18, TX-302 — light/medium/heavy tows, winch-outs, and safe transport across West Texas oilfield routes.",
};

export default function OilfieldRoutesTowServicePage() {
  return (
    <>
      <SiteHeader />
      <TopMarquee />

      <main className="min-h-screen bg-neutral-950">
        {/* HERO — keep capital V in /Videos/ */}
        <BrandHero
          heroVideoSrc="/Videos/tow2.mp4"
          poster="/fallback.jpg"
          serviceTitle="Oilfield Routes Tow Service"
          serviceSubtitle="US-285 • TX-17 • TX-18 • TX-302 • Lease roads • Remote access • Long & short distance"
          overlayOpacity={0.18}
          cardCenterOffsetPx={8}
        />

        {/* Intro / CTAs */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-[28px] p-[6px] rb-border">
              <div
                className="rounded-[22px] border border-yellow-400/85 bg-black/70 p-5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-2xl md:text-3xl font-black mb-2">
                  Oilfield access without the guesswork
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  We know the lease roads and the realities out here—soft
                  shoulders, sand, and long distances. From light pickups to
                  heavier rigs, we’ll get you out, get you safe, and get you
                  moving again.
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold">
                  <li>• Lease road navigation and access coordination</li>
                  <li>• Winch-outs, recoveries, and long-haul tows</li>
                  <li>• Safe transport to town, hotel, or shop</li>
                  <li>• Clear pricing and communication</li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-3">
                  <BlueCallButton />
                  <RedTextFormButton />
                </div>
              </div>
            </div>

            <div className="rounded-[28px] p-[6px] rb-border">
              <div
                className="rounded-[22px] border border-yellow-400/85 bg-black/70 p-5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  Safety first, even miles off the highway
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold">
                  <li>Confirm your GPS or nearest mile marker/lease gate.</li>
                  <li>Stay clear of traffic or soft edges as conditions allow.</li>
                  <li>Keep a charged phone available for updates.</li>
                  <li>Let gate guards or on-site security know we’re en route.</li>
                </ol>
                <p className="mt-3 text-sm md:text-base font-semibold">
                  If anything changes, call or text us an update.
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
      <RBGlobalStyles />
    </>
  );
}
