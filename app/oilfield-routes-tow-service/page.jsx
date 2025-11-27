// app/oilfield-routes-tow-service/page.jsx
"use client";

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
} from "../components/ServiceLayout";

/* ============================ CTAs ============================ */

function PhoneCTA({ className = "", fullWidth = false }) {
  const widthClasses = fullWidth
    ? "w-full sm:w-auto !min-w-0"
    : "min-w-[260px]";

  return (
    <a
      href="tel:+14328424578"
      className={`inline-flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-cta text-white bg-ahBlue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base ${widthClasses} ${className} transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl border-2 border-white`}
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

/* ============ Time & Temperature (like main page) ============ */

function TimeTemp() {
  const [now, setNow] = useState(new Date());
  const [temp, setTemp] = useState(null);
  const [locationLabel, setLocationLabel] = useState("Pecos, TX");

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
    if (!apiKey) return;

    const lat = 31.4229;
    const lon = -103.4938;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.main && typeof data.main.temp === "number") {
          setTemp(Math.round(data.main.temp));
        }
        if (data && data.name) {
          setLocationLabel(`${data.name}, TX`);
        }
      })
      .catch(() => {});
  }, []);

  const dateStr = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const timeStr = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="hidden sm:flex flex-col items-end text-[10px] leading-tight text-amber-100/90">
      <span className="font-semibold">{dateStr}</span>
      <span className="font-semibold">{timeStr}</span>
      <span className="font-semibold">
        {temp != null ? `${temp}°F` : "--°F"} • {locationLabel}
      </span>
    </div>
  );
}

/* ========================= Top Marquee ========================= */

function TopMarquee() {
  const text =
    "Pecos, TX (Home Base) • Reeves County • Pecos County • Midland/Odessa Metro & I-20 Corridor • US-285 • TX-17 • TX-18 • TX-302 • Balmorhea • Carlsbad • Coyanosa • Crane • Crane County • Culberson County • Ector County • Fort Davis • Fort Stockton • Grandfalls • Goldsmith • Imperial • I-20 Corridor • Jal • Kermit • Lindsay • Loving County • McCamey • Mentone • Midland County • Midland/Odessa Metro • Monahans • Notrees • Odessa • Oilfield Routes • Orla • Plateau • Pyote • Royalty • Saragosa • Toyah • Toyahvale • Upton County • Van Horn • Verhalen • Ward County • Wickett • Wink • Winkler County";

  return (
    <div className="w-full bg-[#0b0f14] text-sm">
      <div className="container max-w-7xl py-2">
        <div className="relative overflow-hidden">
          <div
            className="marquee whitespace-nowrap font-extrabold tracking-tight"
            style={{
              color: "#f5f7fa",
              WebkitTextStroke: "0.4px rgba(0,0,0,.9)",
              textShadow: "0 1px 2px rgba(0,0,0,.7)",
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              fontWeight: 900,
            }}
          >
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
            <span className="inline-block pr-12">{text}</span>
          </div>
        </div>
      </div>

      <div className="h-[2px]" />
      <div className="w-full bg-red-700/90">
        <div className="container max-w-7xl">
          <p
            className="text-center font-extrabold py-1"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              color: "#ffd54a",
            }}
          >
            Providing Towing, Recovery Services, and Emergency Roadside
            Assistance to the West Texas Region
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee-x 100s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================== Hero with two videos ============================ */

function OilfieldHero() {
  return (
    <section className="relative isolate bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid md:grid-cols-2 gap-4 lg:gap-6 items-stretch min-h-[420px] md:min-h-[480px] lg:min-h-[520px] py-2">
          {/* LEFT HERO VIDEO */}
          <div className="relative overflow-hidden rounded-[32px] bg-black/90 border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/Videos/tow2.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* RIGHT HERO VIDEO */}
          <div className="relative overflow-hidden rounded-[32px] bg-black/90 border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/Videos/fueltow.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* CENTERED HERO CARD OVER BOTH VIDEOS */}
          <div className="pointer-events-none absolute inset-x-4 sm:inset-x-8 lg:inset-x-16 top-1/2 -translate-y-1/2 flex justify-center">
            <div className="pointer-events-auto max-w-3xl w-full rounded-[28px] bg-black/85 border border-yellow-400/85 px-6 py-5 md:px-8 md:py-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.85)]">
              <div className="h-1 w-full bg-gradient-to-r from-ahBlue via-sky-400 to-ahRed rounded-full mb-3" />
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Oilfield Routes Tow Service
              </h1>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <BlueCallButton />
                <RedTextFormButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== TikTok / Media grid ===================== */

function FollowTikTokButton({ className = "" }) {
  return (
    <a
      href="https://www.tiktok.com/@285302ditchking"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-extrabold text-sm md:text-base shadow-[0_12px_24px_rgba(0,0,0,0.7)] border-2 border-white/80 animate-pulse hover:animate-none hover:scale-105 transition-transform ${className}`}
    >
      <span className="inline-block h-4 w-4 rounded-[6px] bg-black flex items-center justify-center text-[10px] leading-none">
        ♫
      </span>
      <span>Follow us on TikTok @285302ditchking</span>
    </a>
  );
}

function TikTokWideEmbed({ videoId, title }) {
  const src = `https://www.tiktok.com/embed/v2/${videoId}`;

  return (
    <div className="rounded-[28px] p-[4px] rb-border">
      <div className="relative rounded-[22px] overflow-hidden bg-black/85 border border-yellow-400/80 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
        {/* Title strip */}
        <div className="px-4 pt-3 pb-2 text-amber-100 font-extrabold text-sm md:text-base text-center border-b border-white/10 bg-gradient-to-r from-sky-500/25 via-rose-500/25 to-amber-400/25">
          {title}
        </div>

        {/* Video frame – wider & taller crop that hides TikTok chrome */}
        <div className="relative w-full max-w-[580px] mx-auto aspect-[9/16] md:aspect-[9/17] overflow-hidden bg-black">
          <iframe
            src={src}
            title={title}
            className="
              absolute inset-0
              w-[118%] h-[118%]
              -translate-x-[9%] -translate-y-[7%]
              scale-[1.06]
            "
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}

function OilfieldTikTokGrid() {
  const clips = [
    {
      videoId: "7406532437817314591",
      title: "Oilfield Recovery: Water Truck Goes Off-Road",
    },
    {
      videoId: "7400942258079534367",
      title: "Oilfield Service: Setting It Up",
    },
    {
      videoId: "7480739591905938719",
      title: "Oilfield Service Tow: Mixer / Pulling Unit Tow",
    },
    {
      videoId: "7517523143750077726",
      title: "Oilfield Service Tow: Four Oilfield Thieves",
    },
  ];

  return (
    <div className="space-y-4">
      {/* FOLLOW BUTTON – TOP */}
      <div className="flex justify-center">
        <FollowTikTokButton />
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-amber-100 text-center">
        Oilfield Clips &amp; Photos
      </h3>

      <p className="text-sm md:text-base font-semibold text-amber-100/90 text-center">
        Short clips and snapshots from lease roads and oilfield routes. These
        tiles pull straight from @285302ditchking on TikTok.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {clips.map((clip) => (
          <TikTokWideEmbed
            key={clip.videoId}
            videoId={clip.videoId}
            title={clip.title}
          />
        ))}
      </div>

      {/* FOLLOW BUTTON – BOTTOM */}
      <div className="mt-4 flex justify-center">
        <FollowTikTokButton />
      </div>
    </div>
  );
}

/* ========================= Payments Bar ========================= */

function PaymentsBar() {
  return (
    <section className="bg-red-950 py-5 mt-6">
      <div className="container max-w-7xl flex justify-center">
        <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-slate-900/95 px-4 py-2 shadow-lg shadow-black/60 border border-black/40">
          <span className="text-xs md:text-sm font-bold text-amber-50 mr-1">
            We accept:
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
            <span>💵</span>
            <span>Cash</span>
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
            <span>💳</span>
            <span>All Major Credit Cards</span>
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
            <span>🧾</span>
            <span>EFS Services</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================== Page ============================ */

export default function OilfieldRoutesTowServicePage() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesCloseTimeout = useRef(null);

  const openServices = () => {
    if (servicesCloseTimeout.current) {
      clearTimeout(servicesCloseTimeout.current);
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (servicesCloseTimeout.current) {
      clearTimeout(servicesCloseTimeout.current);
    }
    servicesCloseTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 350);
  };

  return (
    <>
      <main className="min-h-screen bg-neutral-950">
        <TopMarquee />

        {/* Header with Home link + date/time/temp */}
        <header className="sticky top-0 z-[120] bg-ahCharcoal text-ahText border-b border-black/30">
          <div className="container max-w-7xl flex items-center gap-6 py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-black grid place-items-center font-bold shadow-cta">
                <span
                  className="text-[15px] font-extrabold"
                  style={{ color: "#e10600" }}
                >
                  A&amp;H
                </span>
              </div>
              <div className="leading-tight">
                <div className="font-bold drop-shadow text-red-600">
                  A&amp;H Towing &amp; Recovery, LLC
                </div>
                <div className="text-xs opacity-90">
                  2712 W F Street, Pecos, TX 79772
                </div>
                <div className="text-xs">
                  <a
                    className="underline underline-offset-4 hover:opacity-100"
                    href="mailto:ah.towing.recovery23@gmail.com"
                  >
                    ah.towing.recovery23@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <nav className="ml-auto hidden md:flex items-center gap-6 text-base md:text-lg font-extrabold">
              {/* Home first */}
              <Link
                href="/"
                className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Home
              </Link>

              {/* Services dropdown second */}
              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  <span>Services</span>
                  <span className="text-[10px]">▾</span>
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 mt-2 min-w-[260px] rounded-xl bg-black/95 text-xs sm:text-sm text-white shadow-lg border border-yellow-400 z-[200]">
                    <Link
                      href="/light-duty-towing"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Light Duty Towing
                    </Link>
                    <Link
                      href="/heavy-duty-commercial-towing"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Heavy Duty &amp; Commercial Towing
                    </Link>
                    <Link
                      href="/oilfield-routes-tow-service"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Oilfield Routes Tow Service
                    </Link>
                    <Link
                      href="/equipment-transport"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Equipment Transport
                    </Link>
                    <Link
                      href="/flatbed-rollback-services"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Flatbed / Rollback Services
                    </Link>
                    <Link
                      href="/emergency-roadside-assistance"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Emergency Roadside Assistance
                    </Link>
                    <Link
                      href="/accident-management-and-removal"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Accident Management and Removal
                    </Link>
                    <Link
                      href="/winching-recovery"
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      Winching / Recovery
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/#coverage"
                className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Coverage
              </Link>
              <Link
                href="/owners"
                className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Owners
              </Link>
              <Link
                href="/tips-tricks"
                className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors text-center"
              >
                Tips &amp; Tricks
              </Link>
              <Link
                href="/#contact"
                className="px-2 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition-colors text-center"
              >
                Request a Tow
              </Link>
            </nav>

            <div className="ml-4 flex items-center gap-3">
              <TimeTemp />
              <PhoneCTA className="hidden sm:inline-flex" />
            </div>
          </div>
        </header>

        {/* HERO */}
        <OilfieldHero />

        {/* MAIN CONTENT: info + TikToks */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT COLUMN: Info boxes */}
            <div className="space-y-5">
              {/* Oilfield access box */}
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
                  <h2
                    className="text-2xl md:text-3xl font-black mb-2 text-center text-white"
                    style={{
                      textShadow:
                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                    }}
                  >
                    Oilfield access without the guesswork
                  </h2>

                  <div className="mt-2 rounded-2xl bg-black/75 px-4 py-3 border border-white/15">
                    <p className="text-sm md:text-base font-semibold text-white">
                      We know the lease roads and the realities out here—soft
                      shoulders, sand, and long distances. From light pickups to
                      heavier rigs, we&apos;ll get you out, get you safe, and
                      get you moving again.
                    </p>
                    <p className="mt-3 text-sm md:text-base font-semibold text-white">
                      Our operators also help with offloading and use the tow
                      trucks for rigging up and rigging down equipment on
                      location, with professional cleanup when the job is done.
                    </p>
                    <ul className="mt-3 space-y-2 text-sm md:text-base font-semibold text-white">
                      <li>• Lease road navigation and access coordination</li>
                      <li>• Winch-outs, recoveries, and long-haul tows</li>
                      <li>• Safe transport to town, hotel, or shop</li>
                      <li>• Clear pricing and communication</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Safety box */}
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
                  <h3
                    className="text-2xl md:text-3xl font-black mb-2 text-center text-white"
                    style={{
                      textShadow:
                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                    }}
                  >
                    Safety first, even miles off the highway
                  </h3>

                  <div className="mt-2 rounded-2xl bg-black/75 px-4 py-3 border border-white/15">
                    <ol className="list-decimal list-inside space-y-2 text-sm md:text-base font-semibold text-white">
                      <li>
                        Confirm your GPS or nearest mile marker/lease gate.
                      </li>
                      <li>
                        Stay clear of traffic or soft edges as conditions allow.
                      </li>
                      <li>Keep a charged phone available for updates.</li>
                      <li>
                        Let gate guards or on-site security know we&apos;re en
                        route.
                      </li>
                    </ol>
                    <p className="mt-3 text-sm md:text-base font-semibold text-white">
                      If anything changes, call or text us an update so we can
                      adjust route or equipment before we arrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: TikTok grid */}
            <OilfieldTikTokGrid />
          </div>
        </section>

        {/* Payments bar */}
        <PaymentsBar />
      </main>

      <SiteFooter />
      <RBGlobalStyles />
    </>
  );
}
