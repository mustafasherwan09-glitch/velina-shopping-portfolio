# Velina Shopping – ڤێلینا شۆپینگ

Landing site for Velina Shopping, a personal SHEIN shopping service for Kurdistan & Iraq.
Live: https://velinashopping.com

It's one static `index.html` file (HTML + CSS + vanilla JS) with no build step.

## Quick edits (all in `index.html`)

| What | Where |
|---|---|
| **Exchange rate** (100$ = ? IQD) | `CONFIG.RATE_IQD_PER_100_USD` at the top of the `<script>` |
| WhatsApp number / Instagram | `CONFIG.WHATSAPP_NUMBER`, `CONFIG.INSTAGRAM_USER` |
| Any text (Kurdish / Arabic / English) | the `translations` object (`ku`, `ar`, `en`) |
| FAQ questions & answers | `translations.<lang>.faq` |
| Trust cards / real reviews | `trustCard1Title` … `trustCard3Text` in `translations`; a template for adding real customer reviews is in the HTML comment above the reviews section |
| Category photos | put photos in `images/` and follow the comment above the `.cats` grid |

Current policies: delivery to all cities in Kurdistan & Iraq, 15–25 days, cash on delivery only, refund/replacement for broken or damaged items, dollar rate updated monthly (orders use the rate at the time of ordering).

Language links you can share: `?lang=ku`, `?lang=ar`, `?lang=en`.

> Velina Shopping is an independent shopping service and is not affiliated with SHEIN.

