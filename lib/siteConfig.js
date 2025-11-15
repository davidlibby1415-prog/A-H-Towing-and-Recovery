// FILE: /lib/siteConfig.js

// Global business config used across pages (home, service pages, owners, etc.)

// Pull env once so we don't repeat ourselves
const ENV_PHONE = process.env.NEXT_PUBLIC_PHONE;
const ENV_SMS = process.env.NEXT_PUBLIC_SMS;
const ENV_EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const ENV_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Human-friendly default phone
const FALLBACK_DISPLAY_PHONE = "(432) 842-4578";
// Digits-only fallback (for tel: / sms: links)
const FALLBACK_PHONE_DIGITS = "14328424578"; // +1 432 842 4578

// What we show on the site
const rawPhone = ENV_PHONE || FALLBACK_DISPLAY_PHONE;

// What we use for tel: and sms: (strip everything except digits/+)
const phoneDigits = (ENV_PHONE || FALLBACK_PHONE_DIGITS).replace(/[^\d+]/g, "");

// Basic helper so we never accidentally create `tel:undefined`
const phoneHref = `tel:${phoneDigits || FALLBACK_PHONE_DIGITS}`;

export const siteConfig = {
  // Branding
  businessName: "A & H Towing & Recovery, LLC",
  shortName: "A&H Towing & Recovery",

  // Contact
  phone: rawPhone,                 // display value (what users see)
  phoneDigits,                     // cleaned digits-only value
  phoneHref,                       // tel: link for buttons
  smsNumber: ENV_SMS || `+${phoneDigits || FALLBACK_PHONE_DIGITS}`, // for sms: links
  email: ENV_EMAIL || "ah.towing.recovery23@gmail.com",

  // Web
  baseUrl:
    ENV_BASE_URL ||
    "https://a-h-towing-and-recovery.vercel.app", // TODO: update when custom domain is live

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
