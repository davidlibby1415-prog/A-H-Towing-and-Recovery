// FILE: app/owners/page.jsx

import { siteConfig } from "../../lib/siteConfig";

// Simple animated gradient border (safe: no client-only imports)
function AnimBorder({ children, className = "" }) {
  return (
    <div
      className={`p-[3px] rounded-[26px] bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 ${className}`}
      style={{
        backgroundSize: "200% 200%",
        animation: "rb-slow 10s linear infinite",
      }}
    >
      <style jsx>{`
        @keyframes rb-slow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      {children}
    </div>
  );
}

// Diamond-plate style panel
function SteelPanel({ children, className = "", padded = true, borderColor = "rgba(255,255,255,0.18)" }) {
  return (
    <div
      className={`rounded-[22px] border shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${
        padded ? "px-4 py-5 md:px-6 md:py-6" : ""
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.32), rgba(0,0,0,0.32)), url("/diamond-plate.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderColor,
      }}
    >
      {children}
    </div>
  );
}

function Bubble({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-2xl px-4 py-3 bg-black/55 text-white font-extrabold shadow ${className}`}
      style={{
        WebkitTextStroke: "0.25px rgba(0,0,0,.7)",
        textShadow: "0 1px 2px rgba(0,0,0,.6)",
      }}
    >
      {children}
    </div>
  );
}

export const metadata = {
  title: "Meet the Owners | A & H Towing & Recovery",
  description:
    "Meet the husband-and-wife team behind A & H Towing & Recovery — a woman-led, family-run towing and recovery company serving Pecos and West Texas.",
};

export default function OwnersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          {/* Company name + phone on diamond plate */}
          <div className="flex justify-center">
            <AnimBorder className="inline-block">
              <SteelPanel padded={false} className="px-5 py-4 text-center bg-black/70">
                <div className="text-[11px] md:text-xs font-semibold tracking-wide text-amber-300 uppercase">
                  {siteConfig.businessName}
                </div>
                <div className="mt-1 text-lg md:text-xl font-extrabold tracking-tight text-white">
                  Woman-Led • Family-Owned in Pecos, Texas
                </div>
                <div className="mt-2 text-base md:text-lg font-black text-amber-300">
                  Dispatch:&nbsp;
                  <a
                    href={siteConfig.phoneHref}
                    className="underline decoration-amber-400 decoration-2 underline-offset-4"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </SteelPanel>
            </AnimBorder>
          </div>

          {/* Main layout: story + portraits */}
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Story / text side */}
            <SteelPanel>
              <Bubble className="!bg-black/65 mb-4">
                <span className="text-[15px] md:text-lg font-extrabold">
                  Meet the Owners
                </span>
              </Bubble>

              <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                The Husband-and-Wife Team Behind A &amp; H
              </h1>

              <p className="text-sm md:text-base text-slate-100/90 leading-relaxed mb-3">
                A &amp; H Towing &amp; Recovery is a{" "}
                <span className="font-bold text-amber-300">
                  woman-led, family-owned
                </span>{" "}
                towing and recovery company based in Pecos, Texas. The business
                is owned by a husband-and-wife team, with{" "}
                <span className="font-semibold">
                  the wife leading the company
                </span>{" "}
                as the primary decision-maker and face of the operation.
              </p>

              <p className="text-sm md:text-base text-slate-100/90 leading-relaxed mb-3">
                Together, they built A &amp; H around{" "}
                <span className="font-semibold">simple values</span>: show up
                fast, treat people right, and handle every vehicle with the same
                care they&apos;d want for their own family. From stranded
                travelers on I-20 to oilfield crews out on lease roads, they
                focus on keeping drivers safe and equipment moving.
              </p>

              <p className="text-sm md:text-base text-slate-100/90 leading-relaxed mb-3">
                As a{" "}
                <span className="font-semibold">woman-led towing company</span>
                , A &amp; H brings a professional, organized, and
                relationship-focused approach to every call — whether it&apos;s a
                single vehicle tow or ongoing work with fleets and oilfield
                partners.
              </p>

              <p className="text-sm md:text-base text-slate-100/90 leading-relaxed">
                When you call A &amp; H Towing &amp; Recovery, you&apos;re not
                just getting a truck. You&apos;re working directly with the
                owners — people who live here, work here, and stand behind every
                job with their family name.
              </p>
            </SteelPanel>

            {/* Portraits side */}
            <div className="space-y-4">
              <SteelPanel className="flex flex-col gap-4">
                <Bubble className="!bg-black/65 mb-1">
                  <span className="text-[14px] md:text-base font-extrabold">
                    Owners
                  </span>
                </Bubble>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Wife / primary leader */}
                  <div className="rounded-2xl overflow-hidden border border-amber-300/70 bg-black/60 shadow-lg">
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      {/* Update src to your actual file path in /public */}
                      <img
                        src="/owners-wife.jpg"
                        alt="Owner - Woman leading A & H Towing & Recovery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-3 py-2 text-center">
                      <div className="text-xs font-semibold tracking-wide text-amber-300 uppercase">
                        Owner • Company Leader
                      </div>
                      <div className="text-sm font-bold">Woman-Owned Business</div>
                    </div>
                  </div>

                  {/* Husband */}
                  <div className="rounded-2xl overflow-hidden border border-slate-300/60 bg-black/60 shadow-lg">
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      {/* Update src to your actual file path in /public */}
                      <img
                        src="/owners-husband.jpg"
                        alt="Owner - Husband at A & H Towing & Recovery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-3 py-2 text-center">
                      <div className="text-xs font-semibold tracking-wide text-slate-200 uppercase">
                        Co-Owner • Field Support
                      </div>
                      <div className="text-sm font-bold">Hands-On in the Field</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-100/80 leading-relaxed">
                  Photos: Husband-and-wife ownership team of A &amp; H Towing &amp; Recovery,
                  serving Pecos and the surrounding West Texas region.
                </p>
              </SteelPanel>

              <SteelPanel>
                <h2 className="text-lg md:text-xl font-extrabold mb-2">
                  Why Woman-Led Matters
                </h2>
                <p className="text-sm md:text-base text-slate-100/90 leading-relaxed mb-2">
                  Being woman-led is more than a label — it shows up in how A
                  &amp; H handles communication, timing, and follow-through.
                  Details matter. Safety matters. Clear updates matter.
                </p>
                <p className="text-sm md:text-base text-slate-100/90 leading-relaxed">
                  From first call to final drop-off, you can expect{" "}
                  <span className="font-semibold">
                    professional dispatch, clear expectations, and respectful
                    service
                  </span>{" "}
                  for drivers, families, and crews.
                </p>
              </SteelPanel>
            </div>
          </div>

          {/* Back to home / contact */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-between items-center pt-4 border-t border-white/10">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-cta text-black bg-amber-400 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 text-sm md:text-base"
            >
              Call Dispatch • {siteConfig.phone}
            </a>
            <a
              href="/#contact"
              className="text-sm md:text-base underline underline-offset-4 decoration-amber-300"
            >
              Back to Home &amp; Request Form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
