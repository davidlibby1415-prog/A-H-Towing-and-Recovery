"use client";

import React, { useEffect, useRef } from "react";

export function TikTokEmbed({ videoId, caption }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = "tiktok-embed-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // If the script is already there, TikTok will usually re-scan automatically.
      // Some implementations call window.tiktokEmbedLoad(), but it's optional.
    }
  }, [videoId]);

  const href = `https://www.tiktok.com/@285302ditchking/video/${videoId}`;

  return (
    <div ref={containerRef}>
      <blockquote
        className="tiktok-embed"
        cite={href}
        data-video-id={videoId}
        style={{ maxWidth: "605px", minWidth: "325px" }}
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

