// app/components/TikTokEmbed.jsx
"use client";

import React, { useEffect } from "react";

export function TikTokEmbed({ videoId, caption }) {
  useEffect(() => {
    // Load TikTok script once on the client
    const existingScript = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window?.tiktokEmbedLoad) {
      // If script already loaded, tell it to rescan
      window.tiktokEmbedLoad();
    }
  }, []);

  const url = `https://www.tiktok.com/@285302ditchking/video/${videoId}`;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <blockquote
        className="tiktok-embed w-full h-full"
        cite={url}
        data-video-id={videoId}
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
          {caption && <p>{caption}</p>}
        </section>
      </blockquote>
    </div>
  );
}
