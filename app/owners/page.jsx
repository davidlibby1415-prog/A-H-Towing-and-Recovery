import Link from "next/link";

export const metadata = {
  title: "Meet the Owners | A&H Towing & Recovery, LLC",
  description:
    "Learn about the ownership behind A&H Towing & Recovery, LLC and why West Texas drivers, ranchers, and oilfield crews trust them 24/7.",
};

export default function OwnersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar / simple header */}
      <header className="border-b border-black/40 bg-ahCharcoal">
        <div className="container max-w-7xl mx-auto flex items-center justify-between gap-4 py-4 px-4 md:px-0">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-300">
              A&amp;H Towing &amp; Recovery, LLC
            </p>
            <h1 className="mt-1 text-xl md:text-2xl font-extrabold tracking-tight">
              Meet the Owners
            </h1>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/"
              className="rounded-xl border border-white/15 px-3 py-1.5 hover:bg-white/10"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="container max-w-5xl mx-auto px-4 md:px-0 py-10 md:py-14">
        {/* Intro card */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-neutral-900/90 via-neutral-900/95 to-neutral-950/90 shadow-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">
            West Texas Owned. West Texas Tough.
          </h2>
          <p className="mt-3 text-sm md:text-base text-center text-white/80 max-w-3xl mx-auto">
            A&amp;H Towing &amp; Recovery, LLC is a locally owned company based in Pecos,
            Texas. Every truck, every call, and every tow is overseen by owners who live
            and work right here in the same communities they serve.
          </p>
        </div>

        {/* Story / background */}
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          {/* Left: story */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-extrabold mb-2">
                Built for Drivers, Ranchers, and Oilfield Crews
              </h3>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                A&amp;H Towing &amp; Recovery was built with one goal in mind:{" "}
                <span className="font-semibold">
                  answer the phone and get help moving quickly
                </span>{" "}
                when people need it the most. From local residents on errands in town to
                oilfield hands on lease roads, the owners understand how tough West Texas
                conditions can be—and how critical it is to get reliable help fast.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-extrabold mb-2">
                Hands-On Leadership, 24/7
              </h3>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                The owners stay closely involved in{" "}
                <span className="font-semibold">daily operations, training, and safety</span>.
                That means trucks are properly equipped, operators are trained for roadway
                and oilfield environments, and calls are handled with clear communication
                from start to finish.
              </p>
              <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
                When you call A&amp;H, you are connecting with a team that treats each
                tow, recovery, or roadside call like it matters—because it does.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-extrabold mb-2">
                Commitment to Safety and Professionalism
              </h3>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                A&amp;H Towing &amp; Recovery emphasizes{" "}
                <span className="font-semibold">safe loading, proper rigging, and scene management</span>{" "}
                on every job. Whether it&apos;s a simple tow, a breakdown on the shoulder, or
                an accident on a busy corridor, the owners expect every unit to show up
                with the right gear and the right attitude.
              </p>
              <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
                That includes working alongside law enforcement, first responders, and
                oilfield operators to keep scenes organized and as safe as possible.
              </p>
            </div>
          </div>

          {/* Right: quick facts / trust box */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-amber-400/40 bg-amber-50/5 p-5">
              <h3 className="text-base font-extrabold text-amber-300 tracking-wide uppercase mb-2">
                Why Drivers Trust A&amp;H
              </h3>
              <ul className="space-y-2 text-sm text-white/85">
                <li>• Locally owned and based in Pecos, TX</li>
                <li>• Focus on West Texas highways, corridors, and oilfield routes</li>
                <li>• 24/7 dispatch with real people answering the phone</li>
                <li>• Training for heavy hauling, recovery, and roadside situations</li>
                <li>• Professional, respectful treatment on every call</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-extrabold mb-2">Need Help Now?</h3>
              <p className="text-sm text-white/80 mb-3">
                If you&apos;re stranded, in an accident, or need a unit moved, the A&amp;H
                team is ready to help.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+14328424578"
                  className="block w-full text-center rounded-2xl bg-ahRed px-4 py-2.5 text-sm font-semibold shadow-lg hover:brightness-110"
                >
                  Call Dispatch: (432) 842-4578
                </a>
                <Link
                  href="/#contact"
                  className="block w-full text-center rounded-2xl border border-white/25 px-4 py-2.5 text-sm font-semibold hover:bg-white/10"
                >
                  Request a Tow or Roadside Online
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-white/70">
              <p>
                A&amp;H Towing &amp; Recovery, LLC proudly serves Pecos, Reeves County,
                and the surrounding West Texas region with professional towing, recovery,
                and roadside assistance.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

