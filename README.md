# Velina Shopping – ڤێلینا شۆپینگ

Multi-page website for Velina Shopping, an independent personal-shopping service (SHEIN → UAE → door delivery in Iraq & the Kurdistan Region).
Live: https://www.velinashopping.com

- Static site: HTML + CSS + vanilla JS. **No build step.** It deploys as-is to Cloudflare Pages, Netlify or GitHub Pages.
- 3 languages: Kurdish Sorani (default, RTL), Arabic (RTL), English (LTR). Switch in the header; the choice is saved, and `?lang=ku|ar|en` works on every page.

## Files

| File | Purpose |
|---|---|
| `index.html` | Home: hero, trust strip, how it works, categories, price calculator, fees, size guide, reviews (placeholders), FAQ, stay safe, location |
| `how-it-works.html`, `about.html`, `contact.html` | Info pages (the contact form opens WhatsApp; nothing is stored) |
| `shipping.html`, `returns.html`, `privacy.html`, `terms.html` | Legal pages, each with its own permanent URL, a table of contents and print styles |
| `404.html` | Not-found page |
| `assets/config.js` | **All business facts**: phone, email, address, hours, exchange rate, fees, prepayment rule, etc. |
| `assets/i18n.js` | **All text** in ku / ar / en |
| `assets/main.js` | Rendering engine, language switch, calculator, WhatsApp links, map |
| `assets/style.css` | Design |
| `assets/img/` | Logo sizes, favicons, Open Graph image |
| `sitemap.xml`, `robots.txt`, `site.webmanifest`, `favicon.ico`, `_headers` | SEO / hosting |
| `tools/build-pages.js` | Optional helper that regenerates the HTML `<head>`, JSON-LD and pre-rendered content from config + i18n |

## Common edits

- **Exchange rate / fees / prepayment** → `assets/config.js` (`rateIQDPerUSD`, `deliveryFeeKurdistan`, `deliveryFeeIraq`, `prepayThresholdUSD`, `prepayPercent`). The calculator and every text using `{rate}`, `{feeKrd}` and similar tokens update automatically.
- **Facebook page** → set `facebookUrl` in `config.js`. While it's empty, the Facebook icon, link and wording stay hidden.
- **Meta domain verification** → replace `PASTE_CODE_FROM_META` in the `<head>` of every HTML file (or in `tools/build-pages.js`, then run it).
- **Customer reviews** → replace `revName`, `revCity` and `revText` in `assets/i18n.js` (home section, all 3 languages) with **real** reviews, then remove the `ph-tag` badge in `pageHome()` in `main.js`.
- **Category photos** → put images in `assets/img/` and set `categoryImages` in `config.js`.
- **Any text** → `assets/i18n.js`.

After changing facts in `config.js` (phone, address, hours…) or page titles, run:

```bash
node tools/build-pages.js
```

This keeps the static `<head>` tags, JSON-LD (LocalBusiness), sitemap and pre-rendered HTML identical to CONFIG. The site still works without this step, because the text is rendered at runtime.

> Velina Shopping is an independent shopping service. We are not affiliated with, endorsed by, or partnered with SHEIN. SHEIN is a trademark of its respective owner.
