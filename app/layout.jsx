export const metadata = {
  title: "A&H Towing & Recovery, LLC | Pecos, Texas",
  description:
    "24/7 Towing, Recovery, and Roadside Assistance serving Pecos, TX and Reeves County. Fast, friendly, and local — call (432) 842-4578 today!",
  keywords:
    "towing Pecos TX, roadside assistance, winch out, recovery, tow truck, A&H Towing, Reeves County towing, light duty towing, heavy duty towing",
  openGraph: {
    title: "A&H Towing & Recovery, LLC",
    description:
      "Fast, friendly, and professional towing & recovery serving Pecos and Reeves County, TX.",
    url: "https://ahtowing.vercel.app",
    siteName: "A&H Towing & Recovery",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2813/2813182.png"
        />

        {/* Google Font (optional) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "'Inter', system-ui, sans-serif",
          background: "#f9fafb",
          color: "#111827",
        }}
      >
        {children}

        <footer
          style={{
            borderTop: "1px solid #e5e7eb",
            padding: "12px 0",
            textAlign: "center",
            fontSize: 13,
            opacity: 0.8,
          }}
        >
          © {new Date().getFullYear()} A&H Towing & Recovery, LLC — Pecos, TX
        </footer>
      </body>
    </html>
  );
}
