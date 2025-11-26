// app/components/TikTokEmbed.jsx
"use client";

import React from "react";

export function TikTokEmbed({ src, title }) {
  return (
    <div className="relative w-[260px] sm:w-[280px] md:w-[300px] aspect-[9/16] flex items-center justify-center">
      {/* Phone-ish frame */}
      <div className="relative w-full h-full rounded-[26px] bg-black overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.9)] border border-neutral-800">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-[145%] h-[145%]"
          style={{
            // Zoom in and center on the actual video column
            // (this cuts off the bottom "Watch now" ad bar and outer margins)
            transform: "translate(-22%, -6%) scale(1.12)",
            transformOrigin: "center",
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
