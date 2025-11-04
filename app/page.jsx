// app/page.jsx  (example hero + quick-service buttons)
import Link from "next/link";

export default function Home() {
  return (
    <main style={{padding:"32px 16px",maxWidth:1100,margin:"0 auto"}}>
      <h1 style={{margin:0,fontSize:"clamp(28px,5vw,48px)"}}>A&H Towing & Recovery</h1>
      <p style={{color:"#6b7280",marginTop:8}}>Fast, professional towing across West Texas.</p>

      {/* Primary CTAs */}
      <div style={{display:"flex",gap:12,marginTop:16,flexWrap:"wrap"}}>
        <a href="tel:+14328424578" style={btn("#dc2626")}>Call (432)842-4578</a>
        <a href="sms:+14328424578?&body=Hi%20A%26H%20Towing..." style={btn("#2563eb")}>Request Dispatch</a>
      </div>

      {/* Direct-to-service buttons */}
      <div style={{display:"grid",gap:12,gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",marginTop:24}}>
        <Link href="/light-duty-towing" style={card()}>Light Duty Towing →</Link>
        <Link href="/heavy-duty-commercial-towing" style={card()}>Heavy / Commercial →</Link>
        <Link href="/flatbed-rollback-services" style={card()}>Flatbed / Rollback →</Link>
        <Link href="/emergency-roadside-assistance" style={card()}>Roadside Assistance →</Link>
        <Link href="/accidents-and-accident-removal" style={card()}>Accidents & Removal →</Link>
        <Link href="/winching-recovery" style={card()}>Winching / Recovery →</Link>
      </div>
    </main>
  );
}

function btn(bg){return{background:bg,color:"#fff",padding:"12px 16px",borderRadius:12,textDecoration:"none",fontWeight:600,display:"inline-block"}}
function card(){return{display:"block",background:"#fff",borderRadius:14,boxShadow:"0 8px 24px rgba(0,0,0,.08)",padding:18,textDecoration:"none",color:"#111827",fontWeight:700}}

