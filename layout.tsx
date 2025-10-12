import "./globals.css";

export const metadata = {
  title: "A&H Towing & Recovery, LLC — Pecos TX",
  description:
    "Fast, friendly, local towing and roadside service in Pecos, TX. Call 24/7 for dispatch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* If you use Tailwind, globals.css should include it. */}
      <body>{children}</body>
    </html>
  );
}
