#!/usr/bin/env node
/* ==========================================================================
   OPTIONAL helper – regenerates the 9 HTML pages, sitemap.xml and robots.txt
   from assets/config.js + assets/i18n.js + assets/main.js.

   The website itself needs NO build step. Run this only if you changed facts in
   config.js (phone, address, hours…) or page titles/descriptions, so that the
   static <head> tags, JSON-LD and pre-rendered HTML stay identical to CONFIG:

       node tools/build-pages.js
   ========================================================================== */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const ctx = { console, URLSearchParams };
ctx.window = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
for (const f of ['assets/config.js', 'assets/i18n.js', 'assets/main.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}
const C = ctx.CONFIG, R = ctx.VelinaRender;
R.init(C, ctx.I18N);
R.setStaticLegal(true); // footer legal-owner line is written in English in the static HTML (crawlable)

const SITE = C.website.replace(/\/$/, '');
const DEFAULT = C.defaultLang || 'ku';
const LANG_HTML = { ku: 'ckb', ar: 'ar', en: 'en' };
const DIR = { ku: 'rtl', ar: 'rtl', en: 'ltr' };
const OG_LOCALE = { ku: 'ckb_IQ', ar: 'ar_IQ', en: 'en_US' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pageUrl = p => SITE + (p.path ? '/' + p.path : '/');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE + '/#business',
  name: C.name.en,
  legalName: C.legalName,
  alternateName: [C.name.ku, C.name.ar],
  description: 'Independent online personal-shopping service. Customers choose items on SHEIN, we purchase them on their behalf, ship from the UAE and deliver to the door anywhere in Iraq and the Kurdistan Region. Not affiliated with SHEIN.',
  url: SITE + '/',
  logo: SITE + '/assets/img/icon-512.png',
  image: SITE + '/assets/img/og-image.jpg',
  telephone: '+' + C.phoneIntl,
  email: C.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '40 Meter Street, Brayati, near Pharma',
    addressLocality: 'Erbil',
    addressRegion: 'Kurdistan Region',
    addressCountry: 'IQ'
  },
  geo: { '@type': 'GeoCoordinates', latitude: C.geo.lat, longitude: C.geo.lng },
  hasMap: C.mapsUrl,
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: C.hours.open, closes: C.hours.close
  }],
  areaServed: [{ '@type': 'Country', name: 'Iraq' }],
  currenciesAccepted: 'IQD',
  paymentAccepted: 'Cash',
  priceRange: '$$',
  sameAs: [C.instagramUrl, C.facebookUrl].filter(Boolean)
};

function headScript(defaultLang) {
  // sets lang/dir before first paint; hides pre-rendered text if another language is saved
  return `<script>(function(){var d=document.documentElement,l=null,D='${defaultLang}';try{l=new URLSearchParams(location.search).get('lang')}catch(e){}if(!/^(ku|ar|en)$/.test(l||'')){try{l=localStorage.getItem('velina-lang')}catch(e){}}d.className+=' js';if(/^(ku|ar|en)$/.test(l||'')&&l!==D){d.lang=l==='ku'?'ckb':l;d.dir=l==='en'?'ltr':'rtl';d.className+=' lang-pending'}setTimeout(function(){if(!window.__velinaReady){d.classList.remove('lang-pending');d.className+=' reveal-fallback'}},2500)})();</script>`;
}

const sitemap = [];
for (const [id, p] of Object.entries(R.PAGES)) {
  const isNF = id === 'notFound';
  const base = isNF ? '/' : '';
  R.setContext(DEFAULT, base);
  const meta = R.pageMeta(id);
  const url = pageUrl(p);
  const body = R.renderApp(id);
  const hreflang = isNF ? '' : ['ku', 'ar', 'en'].map(l =>
    `<link rel="alternate" hreflang="${LANG_HTML[l]}" href="${url}?lang=${l}">`).join('\n') +
    `\n<link rel="alternate" hreflang="x-default" href="${url}">`;

  const html = `<!DOCTYPE html>
<html lang="${LANG_HTML[DEFAULT]}" dir="${DIR[DEFAULT]}"${isNF ? ' data-base="/"' : ''}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.desc)}">
<meta name="robots" content="${isNF ? 'noindex, follow' : 'index, follow'}">
<meta name="theme-color" content="#D81B7A">
<meta name="facebook-domain-verification" content="PASTE_CODE_FROM_META" />
${isNF ? '' : `<link rel="canonical" href="${url}">\n${hreflang}`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(C.name.en)} – ${esc(C.name.ku)}">
<meta property="og:title" content="${esc(meta.title)}">
<meta property="og:description" content="${esc(meta.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/img/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(C.name.en)} logo">
<meta property="og:locale" content="${OG_LOCALE[DEFAULT]}">
${['ku', 'ar', 'en'].filter(l => l !== DEFAULT).map(l => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join('\n')}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(meta.title)}">
<meta name="twitter:description" content="${esc(meta.desc)}">
<meta name="twitter:image" content="${SITE}/assets/img/og-image.jpg">
<link rel="icon" href="${base}favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="${base}assets/img/favicon-32.png">
<link rel="apple-touch-icon" href="${base}assets/img/apple-touch-icon.png">
<link rel="manifest" href="${base}site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&family=Poppins:wght@400;500;600;700;800&family=Vazirmatn:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="${base}assets/style.css">
${headScript(DEFAULT)}
<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>
</head>
<body data-page="${id}">
${R.sprite}
<div id="app">
${body}
</div>
<noscript><p style="text-align:center;padding:12px;background:#FCE4EF;margin:0">${esc(R.plain(ctx.I18N.common[DEFAULT].noscript))}</p></noscript>
<script src="${base}assets/config.js"></script>
<script src="${base}assets/i18n.js"></script>
<script src="${base}assets/main.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(ROOT, p.file), html, 'utf8');
  if (!isNF) sitemap.push({ url, id });
  console.log('wrote', p.file, '-', meta.title);
}

// sitemap.xml with language alternates
const lastmod = C.policiesUpdated;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.map(s => `  <url>
    <loc>${s.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${s.id === 'home' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${s.id === 'home' ? '1.0' : ['privacy', 'terms', 'shipping', 'returns'].includes(s.id) ? '0.6' : '0.8'}</priority>
${['ku', 'ar', 'en'].map(l => `    <xhtml:link rel="alternate" hreflang="${LANG_HTML[l]}" href="${s.url}?lang=${l}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${s.url}"/>
  </url>`).join('\n')}
</urlset>
`, 'utf8');

fs.writeFileSync(path.join(ROOT, 'robots.txt'),
`User-agent: *
Allow: /
Disallow: /tools/

Sitemap: ${SITE}/sitemap.xml
`, 'utf8');

fs.writeFileSync(path.join(ROOT, 'site.webmanifest'), JSON.stringify({
  name: C.name.en, short_name: 'Velina', lang: LANG_HTML[DEFAULT], dir: DIR[DEFAULT],
  start_url: '/', display: 'browser', background_color: '#FFFFFF', theme_color: '#D81B7A',
  icons: [
    { src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' }
  ]
}, null, 2) + '\n', 'utf8');
console.log('wrote sitemap.xml, robots.txt, site.webmanifest');

