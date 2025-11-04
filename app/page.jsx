// app/page.jsx
import Link from "next/link";

export const metadata = {
  title: "A&H Towing & Recovery — 24/7 Fast Tow Service",
  description: "Direct line to dispatcher. Light & heavy duty towing, lockouts, jumpstarts, winching.",
};

export default function Home() {
  return (
    <main style={{position:"relative"}}>
      {/* HERO video background */}
      <div style={{position:"relative", height:"58vh", minHeight:420, overflow:"hidden"}}>
        <video
          autoPlay muted loop playsInline
          poster="/Videos/fallback.jpg"
          style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}}
        >
          <source src="/Videos/heavy-duty-bg.mp4" type="video/mp4" />
        </video>
        <div style={{
          position:"absolute", inset:0, background:"linear-gradient(0deg,rgba(0,0,0,.65),rgba(0,0,0,.25))"
        }}/>
        <div style={{
          position:"relative", zIndex:1, maxWidth:1100, margin:"0 auto", padding:"48px 16px", color:"#fff"
        }}>
          <div style={{display:"inline-block",background:"#dc2626",padding:"6px 10px",borderRadius:999,fontWeight:700}}>
            24/7 Emergency Dispatch
          </div>
          <h1 style={{margin:"12px 0 8px", fontSize:"clamp(28px,6vw,56px)", lineHeight:1.05}}>
            A&H Towing & Recovery
          </h1>
          <p style={{opacity:.9, maxWidth:680}}>
            Fast, professional towing across West Texas. Direct line to our dispatcher—no waiting.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:14}}>
            <a href="tel:+14328424578" style={btn("#dc2626")}>Call (432)842-4578</a>
            <a href="sms:+14328424578?&body=Hi%20A%26H%20Towing%2C%20I%20need%20assistance%20at%20[location]%20with%20[vehicle]%20-%20please%20call%20me%20back."
               style={btn("#2563eb")}>Request Dispatch</a>
          </div>
        </div>
      </div>

      {/* Direct-to-service buttons */}
      <section style={{maxWidth:1100, margin:"0 auto", padding:"28px 16px"}}>
        <div style={{display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
          <Link href="/light-duty-towing" style={card()}>Light Duty Towing →</Link>
          <Link href="/heavy-duty-commercial-towing" style={card()}>Heavy / Commercial →</Link>
          <Link href="/flatbed-rollback-services" style={card()}>Flatbed / Rollback →</Link>
          <Link href="/emergency-roadside-assistance" style={card()}>Roadside Assistance →</Link>
          <Link href="/accidents-and-accident-removal" style={card()}>Accidents & Removal →</Link>
          <Link href="/winching-recovery" style={card()}>Winching / Recovery →</Link>
        </div>
      </section>
    </main>
  );
}

function btn(bg){return{background:bg,color:"#fff",padding:"12px 16px",borderRadius:12,textDecoration:"none",fontWeight:700,display:"inline-block"}}
function card(){return{display:"block",background:"#fff",borderRadius:16,boxShadow:"0 10px 30px rgba(0,0,0,.10)",padding:18,textDecoration:"none",color:"#111827",fontWeight:700}}
