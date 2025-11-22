// components/BrandSlabInline.jsx
// No "use client" needed.

export default function BrandSlabInline({
  className = "",
  title = "A&H TOWING & RECOVERY, LLC",
  textColor = "#e10600",
  strokeColor = "#000",
}) {
  return (
    <div className={`rb-border p-[6px] rounded-[28px] ${className}`}>
      <div
        className="rounded-[22px] border shadow-[0_10px_28px_rgba(0,0,0,0.45)] px-3 py-1 text-center"
        style={steelPanelStyle}
      >
        <div className="inline-block rounded-2xl bg-black/75 border-2 border-white px-3 py-1.5">
          <h1
            className="font-black tracking-tight"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
              fontSize: "clamp(40px, 7vw, 96px)",
              color: textColor,
              WebkitTextStroke: `1.5px ${strokeColor}`,
              textShadow: "0 2px 0 #7f1d1d, 0 10px 22px rgba(0,0,0,.5)",
              lineHeight: 1.05,
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

const steelPanelStyle = {
  backgroundImage:
    'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url("/diamond-plate.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  borderColor: "rgba(255,255,255,0.18)",
};
