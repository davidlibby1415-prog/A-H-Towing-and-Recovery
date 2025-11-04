// FILE: /lib/siteConfig.js

export const siteConfig = {
  businessName: "A & H Towing & Recovery",
  phone: process.env.NEXT_PUBLIC_PHONE || "(432) 000-0000",
  phoneHref: `tel:${(process.env.NEXT_PUBLIC_PHONE || "4320000000").replace(
    /[^\d+]/g,
    ""
  )}`,
  email: process.env.NEXT_PUBLIC_EMAIL || "dispatch@ahtowing.co",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://www.ahtowing.co",
  serviceAreas: ["Pecos", "Reeves County", "Ward County", "I-20 / I-10 Corridor"],
};
