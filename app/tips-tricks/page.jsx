// app/tips-tricks/page.jsx

import React from "react";
import {
  SiteHeader,
  SiteFooter,
  BrandHero,
  PhoneCTA,
  TextCTA,
  TikTokGallery,
} from "../components/ServiceLayout";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata = {
  title: "Tips & Tricks | A & H Towing & Recovery",
  description:
    "Simple, real-world tips to stay safer on the side of the road and make your tow or roadside service go smoother.",
};

/* ========= Reusable TikTok Section ========= */

function TikTokSection({ title, subtitle, videos }) {
  return (
    <section className="space-y-4">
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-black text-amber-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm md:text-base font-semibold text-amber-100/90">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-[28px] p-[6px] bg-black/80 border border-yellow-400/70 shadow-[0_10px_26px_rgba(0,0,0,0.9)]"
          >
            <div className="px-3 pt-2 pb-1">
              <h4 className="text-sm md:text-base font-extrabold text-amber-50 text-center">
                {video.caption}
              </h4>
            </div>

            <div className="rounded-[22px] bg-black overflow-hidden flex justify-center p-2">
              <TikTokEmbed
                videoId={video.id}
                caption={video.caption}
                className="w-full max-w-[420px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ========= Video Data ========= */

// 1. Professional towing best practices
const professionalVideos = [
  {
    id: "7571101975442443551",
    caption: "Towing 101 Refreshers: 2021 Cascadia",
  },
  {
    id: "7552508220846198047",
    caption: "Towing Pro-Hack: Air Brake + Flashers",
  },
  {
    id: "7552491783566019870",
    caption: "Towing Explained: 2025 KW T680 Air Valve",
  },
  {
    id: "7469468335638465822",
    caption: "Towing Pro-Hack: Rear Tow w/ No Keys",
  },
  {
    id: "7464044260224994591",
    caption: "Towing Pro-Hack: Volvo No Keys & Brake Pro-Hack",
  },
  {
    id: "7463642500113124639",
    caption: "Towing Pro-Hack: 2022 Kenworth Air Brakes",
  },
  {
    id: "7516465639523912991",
    caption: "Towing Pro-Hack: 2020 International Doors Locked",
  },
];

// 2. Training clips with first responders / team practice
const trainingVideos = [
  {
    id: "7500641039896628510",
    caption: "Tow Training: Teamwork Move Mountains",
  },
];

// 3. Safety eye opener clips
const safetyVideos = [
  {
    id: "7483668900236823838",
    caption: "Tow Calls: Sand Storm Pt. 1 — Zero Visibility",
  },
  {
    id: "7483666682175556895",
    caption: "Tow Calls: Sand Storm Pt. 2 — Destruction",
  },
  {
    id: "7478093477172055326",
    caption: "Tow Calls: Sand Storm Pt. 3 — Devastation Continues",
  },
  {
    id: "7461254620904541471",
    caption: "Tow Calls: Close Call with Death",
  },
  {
    id: "7436301328420293918",
    caption: "Tow Calls: Night Work",
  },
];

/* ====================== Page ====================== */

export default function TipsTricksPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-neutral-950">
        {/* Hero – same structure you had before */}
        <BrandHero
          serviceTitle="Tips & Tricks for a Smoother Tow"
          serviceSubtitle="Simple things you can do — before and after we arrive — to keep everyone safer and make the job go faster."
        />

        {/* ORIGINAL TEXT / IMAGE CONTENT */}
        <section className="py-8 bg-red-900/90 border-y border-black/40">
          <div className="container max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Text content */}
            <div className="space-y-6 text-amber-50">
              {/* Safety first */}
              <div className="
