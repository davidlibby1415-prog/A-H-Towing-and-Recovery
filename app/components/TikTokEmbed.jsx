// app/components/TikTokEmbed.jsx
"use client";

import React from "react";

export function TikTokEmbed({
  src,
  title = "TikTok video",
  className = "",
}) {
  return (
    <div
      className={`relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-[9/16] flex items-center justify-center ${className}`}
    >
      <div className="relative w-full h-full rounded-[36px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-[3px] shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
        <div className="relative w-full h-full rounded-[32px] bg-black overflow-hidden">
          <iframe
            title={title}
            src={src}
            className="absolute inset-0 w-[130%] h-[130%]"
            style={{
              // Zoom in and push up so you mostly see just the video,
              // not the white UI + "Watch more" bar.
              transform: "translateY(-80px) scale(1.35)",
              transformOrigin: "center top",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
}
