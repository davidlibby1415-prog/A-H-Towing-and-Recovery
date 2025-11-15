"use client";

import { useEffect } from "react";

export function TikTokEmbed({ videoId, caption }) {
  useEffect(() => {
    // Load TikTok embed script once
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full rounded-xl bg-neutral-900/80 border border-neutral-700 p-2 flex flex-col gap-2">
      <blockquote
        className="tiktok-embed w-full"
        cite={`https://www.tiktok.com/@285302ditchking/video/${videoId}`}
        data-video-id={videoId}
        style={{
          margin: 0,
          maxWidth: "100%",
        }}
      >
        <section>
          <a
            target="_blank"
            rel="noreferrer"
            title="@285302ditchking"
            href="https://www.tiktok.com/@285302ditchking?refer=embed"
          >
            @285302ditchking
          </a>
        </section>
      </blockquote>

      {caption && (
        <div className="text-[11px] md:text-xs text-amber-100/80 font-semibold px-1">
          {caption}
        </div>
      )}
    </div>
  );
}
