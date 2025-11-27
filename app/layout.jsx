import "./globals.css";

export const metadata = {
  title: "A&H Towing & Recovery",
  description: "Fast, reliable towing and roadside assistance in West Texas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className="min-h-screen bg-neutral-950 text-ahText">
        {children}
      </body>
    </html>
  );
}
