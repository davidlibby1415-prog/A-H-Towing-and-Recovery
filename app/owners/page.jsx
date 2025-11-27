// app/owners/page.jsx
import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";

/** Local gallery component for owner photos */
function TikTokGallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="rounded-3xl border border-yellow-400/80 bg-black/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
      <h3 className="text-lg md:text-xl font-black text-amber-100 mb-3 text-center">
        A&H in Real Life
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden bg-neutral-900 aspect-[4/3] border border-neutral-700/70"
          >
            <img
              src={src}
              alt={`A&H owners photo ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-amber-100/80 text-center">
        Real trucks, real people, real West Texas miles.
      </p>
    </div>
  );
}

export const metadata = {
  title: "Owners | A & H Towing & Recovery",
  description:
    "Family-owned towing and recovery operation based in Pecos, TX. Learn more about the people behind A & H Towing & Recovery.",
};

export default function OwnersPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Owners • A & H Towing & Recovery"
          serviceSubtitle="Family-owned, West Texas built, and operated by people who actually run the trucks and answer the phone."
        />

        {/* Main content */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-6 text-amber-50">
              {/* Heading / intro */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black">
                  We’re not a call center. We’re the people who show up.
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  A &amp; H Towing &amp; Recovery is a family-run operation out
                  of Pecos, Texas. When you call, text, or message us, you’re
                  talking to the same people who schedule the work, run the
                  trucks, and stand out on the shoulder at 2 a.m.
                </p>
              </div>

              {/* Owners section */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  Who’s behind the wheel of this business?
                </h3>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    •{" "}
                    <span className="font-black underline">
                      Real people, not a big company.
                    </span>{" "}
                    This isn’t a giant corporate fleet. It’s our family name on
                    the door and our reputation on the line every single call.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-black underline">
                      West Texas born and raised.
                    </span>{" "}
                    We drive the same roads you do — I-20, 285, 302, lease
                    roads, caliche, and those dark stretches between towns.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-black underline">
                      We answer our own phone.
                    </span>{" "}
                    No script, no runaround. Just, “Where are you? What’re you
                    in? Is everyone safe?” and then we get moving.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-black underline">
                      We care about how the job feels.
                    </span>{" "}
                    That means steady communication, clear pricing, and treating
                    your people and your equipment with respect.
                  </li>
                </ul>
              </div>

              {/* Values */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  What we believe about this work
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  Anyone can drag a vehicle from Point A to Point B. We care
                  just as much about{" "}
                  <span className="font-black">
                    how you’re treated while it’s happening.
                  </span>
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    • Safety comes first — for you, us, and the motoring public.
                  </li>
                  <li>
                    • We don’t yell, rush, or shame people on the side of the
                    road.
                  </li>
                  <li>
                    • We talk you through what we’re doing and where your
                    vehicle is going.
                  </li>
                  <li>
                    • We try to leave every scene a little calmer than we found
                    it.
                  </li>
                </ul>
              </div>

              {/* Small box */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <p>
                  Whether you’re a local family, passing through on the
                  interstate, or working the oilfield, our goal is simple:{" "}
                  <span className="font-black">
                    get you off the shoulder and taken care of without making a
                    bad day worse.
                  </span>
                </p>
              </div>
            </div>

            {/* RIGHT: Image gallery / visual block */}
            <div className="space-y-6">
              <TikTokGallery
                images={[
                  "/images/owners-1.jpg",
                  "/images/owners-2.jpg",
                  "/images/owners-3.jpg",
                  "/images/owners-4.jpg",
                ]}
              />

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold text-amber-50">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  What you can expect when you call us
                </h4>
                <ul className="space-y-1">
                  <li>• A real person who picks up or calls you back.</li>
                  <li>• Straight answers about ETA, pricing, and options.</li>
                  <li>• Questions about safety first, then the vehicle.</li>
                  <li>• Follow-through — we show up where we say we will.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Buttons at bottom */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneCTA />
            <TextCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

