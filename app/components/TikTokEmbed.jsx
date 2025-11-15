"use client";

import React from "react";

/**
 * Simple iframe-based TikTok embed that does NOT rely on
 * tiktok.com/embed.js scanning the DOM.
 *
 * Usage:
 * <TikTokEmbed videoId="6908073338308939014" caption="Deploy Airbags" />
 */
export function TikTokEmbed({ videoId, caption }) {
  if (!videoId) return null;

  const src = `https://www.tiktok.com/embed/v2/${videoId}`;

  return (
    <div className="w-full">
      {/* 9:16-ish aspect ratio box */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-700 bg-black">
        {/* padding-bottom 177.78% ≈ 9:16 ratio */}
        <div style={{ paddingBottom: "177.78%" }} />
        <iframe
          src={src}
          title={caption || "TikTok video"}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {caption && (
        <p className="mt-1 text-[11px] sm:text-xs text-amber-100/80 line-clamp-2">
          {caption}
        </p>
      )}
    </div>
  );
}
