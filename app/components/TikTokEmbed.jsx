// FILE: app/components/TikTokEmbed.jsx
"use client";

import React from "react";

/**
 * Robust TikTok embed component with a tight crop on the actual video.
 *
 * Usage examples:
 *   <TikTokEmbed videoId="7541454523265535245" />
 *   <TikTokEmbed url="https://www.tiktok.com/embed/v2/7541454523265535245" />
 *   <TikTokEmbed url="https://www.tiktok.com/@285302ditchking/video/7541454523265535245" />
 *
 * It will normalize common TikTok URLs into a working /embed/v2/... URL.
 */

function buildEmbedSrc({ videoId, url }) {
  // If explicit embed URL is provided, trust it.
  if (url && url.includes("/embed/")) {
    return url;
  }

  // Try to pull an ID out of a normal TikTok URL:
  // e.g. https://www.tiktok.com/@user/video/7541454523265535245
  if (url && !videoId) {
    const match = url.match(/\/video\/(\d+)/);
    if (match && match[1]) {
      videoId = match[1];
    }
  }

  // If we ended up with a videoId, build the embed URL
  if (videoId) {
    return `https://www.tiktok.com/embed/v2/${videoId}`;
  }

  // Fall back to whatever url we got (may or may not work)
  return url || "";
}

export function TikTokEmbed({
  videoId = "7541454523265535245", // default to your known working video
  url,
  title = "A&H Towing TikTok",
}) {
  const embedSrc = buildEmbedSrc({ videoId, url });

  if (!embedSrc) return null;

  return (
    <div className="relative w-[260px] sm:w-[280px] md:w-[320px] aspect-[9/16] flex items-center justify-center">
      {/* Phone-style frame */}
      <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-[3px] shadow-[0_18px_40px_rgba(0,0,0,0.9)] border border-neutral-800">
        <div className="relative w-full h-full rounded-[28px] bg-black overflow-hidden">
          <iframe
            title={title}
            src={embedSrc}
            loading="lazy"
            className="absolute left-1/2 top-1/2"
            style={{
              // Tighter crop on the video area (like inside your yellow rectangle)
              width: "130%",
              height: "130%",
              transform: "translate(-50%, -55%)",
              border: "0",
            }}
            allow="accelerometer; autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
