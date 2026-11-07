/* ==========================================================================
   VELINA SHOPPING – BUSINESS CONFIG
   All business facts live here. Every page, the price calculator, WhatsApp links
   and the policy texts read their numbers / contact details from this object.
   Leave a value as '' (empty) to hide it everywhere (e.g. facebook).

   NOTE: the JSON-LD block and the meta tags inside each .html <head> are static
   (so search engines and Meta's crawler can read them without JavaScript).
   If you change name / phone / email / address / hours here, update them there too.
   ========================================================================== */
window.CONFIG = {
  name: { en: 'Velina Shopping', ku: 'ڤێلینا شۆپینگ', ar: 'ڤيلينا شوبينغ' },

  // Contact
  phone: '+964 775 542 4343',          // shown on the site
  phoneIntl: '9647755424343',          // used for wa.me and tel: links (no + or spaces)
  email: 'info@velinashopping.com',
  instagramUser: 'velina.shopping',
  instagramUrl: 'https://www.instagram.com/velina.shopping',
  facebookUrl: '',                     // e.g. 'https://www.facebook.com/yourpage' – empty = hidden
  website: 'https://www.velinashopping.com',

  // Office
  address: {
    en: '40 Meter Street, Brayati, near Pharma, Erbil, Kurdistan Region, Iraq',
    ku: 'هەولێر، گەڕەکی برایەتی، شەقامی 40 مەتری، نزیک فارما، هەرێمی کوردستان، عێراق',
    ar: 'أربيل، حي برايتي، شارع 40 متري، قرب فارما، إقليم كوردستان، العراق'
  },
  geo: { lat: 36.2004780, lng: 44.0392230 },
  mapsUrl: 'https://www.google.com/maps?q=36.2004780,44.0392230',

  // Working hours (Saturday – Thursday). Friday closed.
  hours: { open: '09:00', close: '18:00' },

  // Prices & fees
  rateIQDPerUSD: 1450,                 // 1 USD = 1,450 IQD  (100 USD = 145,000 IQD is calculated)
  deliveryFeeKurdistan: 5000,          // door delivery inside the Kurdistan Region (IQD)
  deliveryFeeIraq: 7000,               // door delivery in all other Iraqi cities (IQD)
  prepayThresholdUSD: 300,             // no prepayment up to this amount
  prepayPercent: 25,                   // % paid in advance above the threshold

  // Service facts
  deliveryDays: '15–25',
  deliveryAttempts: '3–5',
  refundHours: '24–48',
  dataRetentionMonths: 6,
  privacyResponseDays: 14,
  policiesUpdated: '2026-11-07',       // "Last updated" date shown on policy pages

  // Category photos on the home page (portrait 3:4, e.g. 600x800, compressed JPG/WebP).
  // Put files in assets/img/ and write the path, e.g. 'assets/img/cat-women.jpg'. Empty = pink gradient card.
  categoryImages: { women: '', kids: '', bags: '', accessories: '' },

  defaultLang: 'ku'                    // 'ku' | 'ar' | 'en'
};
