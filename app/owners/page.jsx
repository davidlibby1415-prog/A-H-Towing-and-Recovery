// FILE: /app/owners/page.jsx

"use client";

import React from "react";
import Link from "next/link";

// Simple animated red/blue border (same idea as home page)
function AnimBorder({ children, className = "" }) {
  return <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>{children}</div>;
}

// Steel panel using the same diamond-plate background
function SteelPanel({ children, className = "" }) {
  return (
    <div
      className={`rounded-[22px] border shadow-[0_10px_28px_rgba(0,0,0,0.45)] px-4 py-5 md:px-6 md:py-6 ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url("/diamond-plate.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderColor: "rgba(255,255,255,0.18)",
      }}
    >
      {children}
    </div>
  );
}

function Bubble({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-2xl px-5 py-3 bg-black/55 text-white font-extrabold shadow ${className}`}
      style={{
        WebkitTextStroke: "0.25px rgba(0,0,0,.8)",
        textShadow: "0 1px 2px rgba(0,0,0,.7)",
      }}
    >
      {children}
    </div>
  );
}

function OwnerCard({ name, title, years, blurb, bullets = [] }) {
  return (
    <AnimBorder>
      <SteelPanel>
        <h3 className="text-xl md:text-2xl font-extrabold text-sky-300 mb-1">
          {name}
        </h3>
        <p className="text-sm font-semibold text-amber-200 mb-1">{title}</p>
        {years && (
          <p className="text-xs font-bold text-gray-100 mb-2">
            Experience: {years}
          </p>
        )}
        <p className="text-sm text-gray-100 mb-3">{blurb}</p>
        {bullets.length > 0 && (
          <ul className="text-sm text-gray-100 space-y-1 list-disc list-inside">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </SteelPanel>
    </AnimBorder>
  );
}

export const metadata = {
  title: "Meet the Owners | A & H Towing & Recovery",
  description:
    "Learn about the owners of A & H Towing & Recovery and why West Texas drivers, ranchers, and oilfield crews trust them.",
};

export default function OwnersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* simple global styles for border animation reused from main page */}
      <style jsx global>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rb-rotate {
          to {
            --angle: 360deg;
          }
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

      {/* Top header strip similar to other pages */}
      <header className="bg-black/90 border-b border-black/60">
        <div className="container max-w-7xl flex items-center justify-between gap-4 py-3">
          <div className="text-xs md:text-sm">
            <div className="font-bold text-red-500">
              A&H Towing & Recovery, LLC
            </div>
            <div>2712 W F Street, Pecos, TX 79772</div>
          </div>
          <a
            href="tel:+14328424578"
            className="rounded-2xl bg-ahBlue px-4 py-2 text-xs md:text-sm font-semibold shadow hover:brightness-110"
          >
            Call Dispatch: (432) 842-4578
          </a>
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="py-10 md:py-12">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel className="text-center">
              <Bubble className="mb-3 bg-black/60">
                <span className="text-[clamp(26px,4vw,40px)]">
                  Meet the Owners of A&amp;H Towing &amp; Recovery
                </span>
              </Bubble>
              <p className="mt-2 text-sm md:text-base text-gray-100 max-w-3xl mx-auto">
                A&amp;H Towing &amp; Recovery is locally owned and operated out
                of Pecos, Texas. When you call us, you’re talking directly to
                the people responsible for the trucks, the training, and your
                safety on the side of the road.
              </p>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* Owner cards */}
      <section className="pb-10 md:pb-12">
        <div className="container max-w-7xl grid gap-6 md:grid-cols-2">
          <OwnerCard
            name="Owner #1 Name"
            title="Co-Owner • Heavy Recovery / Oilfield Lead"
            years="Over 15 years in towing, recovery, and oilfield support"
            blurb="Handles the heavy work: rollovers, lease-road recoveries, and oilfield equipment moves. Known for calm decision-making on busy highways and in tight lease roads."
            bullets={[
              "Specializes in oilfield and heavy recoveries",
              "Trains with local first responders on scene safety",
              "Believes every tow should be done like family is riding in the vehicle",
            ]}
          />
          <OwnerCard
            name="Owner #2 Name"
            title="Co-Owner • Light Duty & Roadside Operations"
            years="10+ years serving West Texas drivers"
            blurb="Leads our light-duty towing and roadside assistance crews. Focused on clean trucks, professional operators, and clear communication with every customer."
            bullets={[
              "Oversees light duty towing and roadside teams",
              "Keeps trucks stocked, inspected, and ready 24/7",
              "Committed to honest pricing and respectful customer service",
            ]}
          />
        </div>
      </section>

      {/* Story / Why We Started */}
      <section className="pb-10 md:pb-12">
        <div className="container max-w-7xl">
          <AnimBorder>
            <SteelPanel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sky-300 mb-2 text-center md:text-left">
                Why We Started A&amp;H
              </h2>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                A&amp;H Towing &amp; Recovery was started with a simple idea:
                West Texas deserves towing and recovery that is{" "}
                <span className="font-semibold">professional, respectful, and
                oilfield-tough</span>. Too many drivers and crews have dealt
                with long wait times, unclear pricing, and unsafe practices on
                the side of busy highways.
              </p>
              <p className="mt-3 text-sm md:text-base text-gray-100 leading-relaxed">
                We built A&amp;H to be the opposite of that. Our trucks are
                maintained, our operators are trained with local first
                responders, and we treat every customer like our own family is
                standing next to that vehicle on the shoulder.
              </p>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* Training & Values */}
      <section className="pb-12">
        <div className="container max-w-7xl grid gap-6 md:grid-cols-2">
          <AnimBorder>
            <SteelPanel>
              <h2 className="text-xl md:text-2xl font-extrabold text-sky-300 mb-2">
                Training &amp; Safety
              </h2>
              <ul className="text-sm md:text-base text-gray-100 space-y-1 list-disc list-inside">
                <li>Joint training exercises with local fire and EMS.</li>
                <li>Scene safety focus: cones, lighting, PPE, and traffic awareness.</li>
                <li>Oilfield-ready procedures for lease roads and remote pads.</li>
                <li>Ongoing training on rigging, recovery, and securement.</li>
              </ul>
            </SteelPanel>
          </AnimBorder>

          <AnimBorder>
            <SteelPanel>
              <h2 className="text-xl md:text-2xl font-extrabold text-sky-300 mb-2">
                Community &amp; Values
              </h2>
              <ul className="text-sm md:text-base text-gray-100 space-y-1 list-disc list-inside">
                <li>Locally owned and operated out of Pecos, Texas.</li>
                <li>Supports West Texas oilfield, ranchers, and local businesses.</li>
                <li>Committed to honest, up-front communication on every call.</li>
                <li>When we answer the phone, it’s our name and reputation on the line.</li>
              </ul>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-12">
        <div className="container max-w-7xl text-center">
          <AnimBorder>
            <SteelPanel>
              <p className="text-sm md:text-base text-gray-100 mb-3">
                When you call A&amp;H Towing &amp; Recovery, you’re calling the
                owners directly. We take that seriously.
              </p>
              <a
                href="tel:+14328424578"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base"
              >
                Call Dispatch Now for Service
              </a>
              <div className="mt-3 text-xs md:text-sm text-gray-200">
                Prefer to request by form and text?{" "}
                <Link href="/#contact" className="underline">
                  Go to Request for Services
                </Link>
              </div>
            </SteelPanel>
          </AnimBorder>
        </div>
      </section>
    </main>
  );
}
