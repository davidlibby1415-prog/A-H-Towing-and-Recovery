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
    "Simple, real-world tips to stay safer on the side of the road and make your tow or roadside service go smoother.",
};

export default function TipsTricksPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        <BrandHero
          serviceTitle="Tips & Tricks for a Smoother Tow"
          serviceSubtitle="Simple things you can do — before and after we arrive — to keep everyone safer and make the job go faster."
        />

        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-6 text-amber-50">
              {/* Safety first */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black">
                  First priority: keep people safe, not just vehicles.
                </h2>
                <p className="text-sm md:text-base font-semibold">
                  When something breaks or you’re stranded, it’s easy to focus
                  only on the car or truck. These quick tips keep{" "}
                  <span className="font-black">
                    you, your family, and our operators
                  </span>{" "}
                  safer until we get there.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    • If possible,{" "}
                    <span className="font-black">
                      move as far off the travel lane
                    </span>{" "}
                    as you safely can — shoulder, ramp, or wide approach.
                  </li>
                  <li>
                    • Turn on{" "}
                    <span className="font-black">hazard flashers</span> and, if
                    you have them, set out triangles or flares away from the
                    vehicle.
                  </li>
                  <li>
                    • Stay inside with your seatbelt on if the traffic is heavy
                    or you’re on a fast highway.
                  </li>
                  <li>
                    • If you must exit, step out{" "}
                    <span className="font-black">
                      away from traffic and never into the lane.
                    </span>
                  </li>
                </ul>
              </div>

              {/* What to have ready */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  What to have ready when you call or text
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  You don’t need to know everything — just share what you can.
                  These pieces of information help us{" "}
                  <span className="font-black">
                    pick the right truck and find you faster.
                  </span>
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>• Year / Make / Model of your vehicle</li>
                  <li>• Automatic or standard (if you know)</li>
                  <li>• Is it loaded with tools, cargo, or a trailer?</li>
                  <li>• Exact location, GPS pin, or closest mile marker / exit</li>
                  <li>• Where you’d like it towed (home, shop, yard, etc.)</li>
                </ul>
              </div>

              {/* Elder / family-friendly tips */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  Helping elders and family members during a tow
                </h3>
                <p className="text-sm md:text-base font-semibold">
                  If you’re calling for a parent, grandparent, or someone who
                  doesn’t handle roadside stress well, a few small steps make a
                  big difference.
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold">
                  <li>
                    •{" "}
                    <span className="font-black">
                      Stay calm and speak slowly.
                    </span>{" "}
                    Let them know a truck is coming and what to expect.
                  </li>
                  <li>
                    • Ask them to{" "}
                    <span className="font-black">
                      keep their phone nearby and turned up
                    </span>{" "}
                    so our operator or dispatch can reach them.
                  </li>
                  <li>
                    • If they have mobility issues,{" "}
                    <span className="font-black">tell us that upfront</span> so
                    we plan for extra time and patience on-scene.
                  </li>
                  <li>
                    • If you’re not with them,{" "}
                    <span className="font-black">
                      stay on standby for phone updates
                    </span>{" "}
                    from us and from them.
                  </li>
                </ul>
              </div>

              {/* Small “while you wait” box */}
              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  While you wait on us
                </h4>
                <ul className="space-y-1">
                  <li>• Keep doors locked and windows mostly up.</li>
                  <li>• Have your hazards on and interior lights ready.</li>
                  <li>
                    • Get your keys, wallet/purse, and any valuables ready to
                    take with you.
                  </li>
                  <li>
                    • If kids are with you, explain that a tow truck is coming
                    to help — not to be scared.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: TikTok-style gallery / visuals */}
            <div className="space-y-6">
              <TikTokGallery
                images={[
                  "/images/tips-1.jpg",
                  "/images/tips-2.jpg",
                  "/images/tips-3.jpg",
                  "/images/tips-4.jpg",
                ]}
              />

              <div className="rounded-2xl border border-yellow-400/80 bg-black/70 p-4 text-sm md:text-base font-semibold text-amber-50">
                <h4 className="text-lg md:text-xl font-black mb-2 text-amber-300">
                  Quick checklist before we hook up
                </h4>
                <ul className="space-y-1">
                  <li>• Remove anything you don’t want bouncing around.</li>
                  <li>• Grab medications, chargers, and essentials.</li>
                  <li>• Tell us if there’s a pet in the vehicle.</li>
                  <li>• Let us know if there’s prior body damage we should note.</li>
                </ul>
                <p className="mt-2">
                  The more we know, the better we can plan the hook, route, and
                  drop-off — and the smoother your whole night goes.
                </p>
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

