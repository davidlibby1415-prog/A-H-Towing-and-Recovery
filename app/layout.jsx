// app/layout.jsx
import "./globals.css"; // <-- critical

export const metadata = {
  title: "A&H Towing & Recovery",
  description: "Fast, reliable towing and roadside assistance in West Texas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{background:"#111827",color:"#fff",textAlign:"center",padding:"12px"}}>
          © {new Date().getFullYear()} A&H Towing & Recovery, LLC — Pecos, TX
        </footer>
      </body>
    </html>
  );
}
