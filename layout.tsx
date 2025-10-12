import "./globals.css";

export const metadata = {
  title: "A&H Towing & Recovery, LLC — Pecos TX",
  description: "Fast, friendly, local towing and roadside service in Pecos, TX. Call 24/7 for dispatch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}