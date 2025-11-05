// FILE: /lib/siteConfig.js

// Global business config used across pages (home, service pages, owners, etc.)
const rawPhone = process.env.NEXT_PUBLIC_PHONE || "(432) 842-4578";
const phoneDigits = (process.env.NEXT_PUBLIC_PHONE || "4328424578").replace(/[^\d+]/g, "");

export const siteConfig = {
  // Branding
  businessName: "A & H Towing & Recovery, LLC",
  shortName: "A&H Towing & Recovery",

  // Contact
  phone: rawPhone,                         // display
  phoneDigits,                             // cleaned digits-only
  phoneHref: `tel:${phoneDigits}`,         // tel: link for buttons
  smsNumber: process.env.NEXT_PUBLIC_SMS || "+14328424578", // for sms: links if you want
  email: process.env.NEXT_PUBLIC_EMAIL || "ah.towing.recovery23@gmail.com",

  // Web
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://a-h-towing-and-recovery.vercel.app", // update to your actual domain

  // Physical address
  address: {
    street: "2712 W F Street",
    city: "Pecos",
    region: "TX",
    postalCode: "79772",
    country: "US",
  },

  // Service areas (used for SEO text & service pages)
  serviceAreas: [
    "Pecos (Home Base)",
    "Reeves County",
    "Ward County",
    "Fort Stockton",
    "Monahans",
    "Kermit",
    "Balmorhea",
    "Pyote",
    "Toyah",
    "Grandfalls",
    "Wink",
    "Midland",
    "Odessa",
    "Midland/Odessa Metro & I-20 Corridor",
    "US-285",
    "TX-17",
    "Oilfield Routes",
  ],

  // Social links (extend as needed)
  social: {
    tiktok: "https://www.tiktok.com/@285302ditchking",
  },
};

