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
| Customer reviews | `revName`, `revText`, `revCity` in `translations`, then remove the `ph-tag` badges in the HTML |
| Category photos | put photos in `images/` and follow the comment above the `.cats` grid |

Text in `[square brackets]` is a placeholder. Replace it with your real policy or info.

Language links you can share: `?lang=ku`, `?lang=ar`, `?lang=en`.

> Velina Shopping is an independent shopping service and is not affiliated with SHEIN.
