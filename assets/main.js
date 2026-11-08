/* ==========================================================================
   Velina Shopping – site engine (vanilla JS, no build step)
   - Renders header, page content and footer from CONFIG (config.js) + I18N (i18n.js)
   - Language switch (ku / ar / en), RTL/LTR, localStorage + ?lang=
   - Price calculator, WhatsApp links, click-to-load map, contact form → WhatsApp
   To change TEXT edit assets/i18n.js · to change FACTS edit assets/config.js
   ========================================================================== */
(function (root) {
  'use strict';

  var LANGS = { ku: { html: 'ckb', dir: 'rtl' }, ar: { html: 'ar', dir: 'rtl' }, en: { html: 'en', dir: 'ltr' } };
  var STORAGE_KEY = 'velina-lang';
  var PAGES = {
    home:     { file: 'index.html',        path: '' },
    how:      { file: 'how-it-works.html', path: 'how-it-works' },
    about:    { file: 'about.html',        path: 'about' },
    contact:  { file: 'contact.html',      path: 'contact' },
    shipping: { file: 'shipping.html',     path: 'shipping' },
    returns:  { file: 'returns.html',      path: 'returns' },
    privacy:  { file: 'privacy.html',      path: 'privacy' },
    terms:    { file: 'terms.html',        path: 'terms' },
    notFound: { file: '404.html',          path: '404' }
  };
  var DOCS = ['shipping', 'returns', 'privacy', 'terms'];

  /* Approximate size data (cm). Always tell customers to check each SHEIN product size chart. */
  var WOMEN_SIZES = [
    ['XS', '80–84', '60–64', '86–90'],
    ['S', '84–88', '64–68', '90–94'],
    ['M', '88–92', '68–72', '94–98'],
    ['L', '92–98', '72–78', '98–104'],
    ['XL', '98–104', '78–84', '104–110'],
    ['XXL', '104–110', '84–90', '110–116']
  ];
  var KIDS_HEIGHTS = ['56–62', '62–68', '68–74', '74–80', '80–86', '86–92', '92–98', '98–104', '104–110', '110–116', '122–128', '134–140'];

  var C, I, lang = 'ku', base = '';
  var tokenCache = {};

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function num(n) { return Math.round(Number(n) || 0).toLocaleString('en-US'); }
  function ltr(s) { return '<bdi dir="ltr">' + esc(s) + '</bdi>'; }
  var FILLED = { wa: 1, fb: 1 };
  function icon(id, extra) {
    return '<svg class="icon' + (FILLED[id] ? ' icon-fill' : '') + (extra ? ' ' + extra : '') + '" aria-hidden="true" focusable="false"><use href="#i-' + id + '"></use></svg>';
  }
  function t(section) { var s = I[section] || {}; return s[lang] || s.en || {}; }
  function href(page) { return base + PAGES[page].file; }
  function waUrl(msg) { return 'https://wa.me/' + C.phoneIntl + (msg ? '?text=' + encodeURIComponent(msg) : ''); }
  function ext(url) { return 'href="' + esc(url) + '" target="_blank" rel="noopener"'; }

  function tokens(plain) {
    var key = lang + (plain ? ':p' : ':h');
    if (tokenCache[key]) return tokenCache[key];
    var c = t('common');
    var L = plain ? String : ltr, E = plain ? String : esc;
    var d = C.policiesUpdated.split('-').map(Number);
    var updated = c.dateFmt.replace('{d}', d[2]).replace('{m}', c.months[d[1] - 1]).replace('{y}', d[0]);
    var map = {
      name: E(C.name[lang]),
      legalName: L(C.legalName),
      phone: L(C.phone),
      email: L(C.email),
      ig: L('@' + C.instagramUser),
      website: L(C.website.replace(/^https?:\/\//, '')),
      address: E(C.address[lang]),
      hours: E(c.hoursText).replace('{hoursRange}', L(C.hours.open + '–' + C.hours.close)),
      rate: L('1$ = ' + num(C.rateIQDPerUSD)),
      rate100: L('100$ = ' + num(C.rateIQDPerUSD * 100)),
      rateNum: L(num(C.rateIQDPerUSD)),
      days: L(C.deliveryDays),
      feeKrd: L(num(C.deliveryFeeKurdistan)),
      feeIraq: L(num(C.deliveryFeeIraq)),
      threshold: L(C.prepayThresholdUSD + '$'),
      prepay: L(C.prepayPercent + '%'),
      rest: L((100 - C.prepayPercent) + '%'),
      attempts: L(C.deliveryAttempts),
      retention: L(String(C.dataRetentionMonths)),
      respond: L(String(C.privacyResponseDays)),
      refundTime: L(C.refundHours),
      updated: E(updated),
      year: L(String(new Date().getFullYear())),
      fbClause: C.facebookUrl ? E(c.fbClause) : ''
    };
    tokenCache[key] = map;
    return map;
  }

  function resolveLink(text, target) {
    var url, external = false;
    switch (target) {
      case 'whatsapp': url = waUrl(t('common').waGreeting); external = true; break;
      case 'phone': url = 'tel:+' + C.phoneIntl; break;
      case 'email': url = 'mailto:' + C.email; break;
      case 'instagram': url = C.instagramUrl; external = true; break;
      case 'facebook': if (!C.facebookUrl) return text; url = C.facebookUrl; external = true; break;
      case 'maps': url = C.mapsUrl; external = true; break;
      default:
        target = target.replace(/&amp;/g, '&');
        if (/^https:\/\//.test(target)) { url = target; external = true; }
        else if (/^[a-z0-9-]+\.html(#[\w-]+)?$/.test(target)) url = base + target;
        else if (/^#[\w-]+$/.test(target)) url = target;
        else return text;
    }
    return '<a ' + (external ? ext(url) : 'href="' + esc(url) + '"') + '>' + text + '</a>';
  }

  /* Text → safe HTML: escapes, fills {tokens}, [links](target), **bold** */
  function fmt(str, extra) {
    if (str == null) return '';
    var T = tokens(false);
    var s = esc(str).replace(/\{(\w+)\}/g, function (m, k) {
      if (extra && k in extra) return extra[k];
      return k in T ? T[k] : m;
    });
    // keep number ranges like 0–3 / 15–25 / 09:00–18:00 in reading order inside RTL text
    s = s.replace(/(^|[^\w>"=.:\/-])(\d[\d,.:]*\s?[–-]\s?\d[\d,.:]*)(?![\w<])/g, function (m, pre, range) { return pre + '<bdi dir="ltr">' + range + '</bdi>'; });
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, text, target) { return resolveLink(text, target); });
    return s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  /* Text → plain string (titles, meta tags, WhatsApp messages) */
  function plain(str, extra) {
    if (str == null) return '';
    var T = tokens(true);
    return String(str)
      .replace(/\{(\w+)\}/g, function (m, k) { if (extra && k in extra) return extra[k]; return k in T ? T[k] : m; })
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1')
      .replace(/\*\*(.+?)\*\*/g, '$1');
  }
  function money(n) { return ltr(num(n)) + ' ' + esc(t('home').currency || 'IQD'); }

  /* ---------------- icon sprite ---------------- */
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +
    '<symbol id="i-wa" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></symbol>' +
    '<symbol id="i-fb" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></symbol>' +
    '<symbol id="i-ig" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></symbol>' +
    '<symbol id="i-bag" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></symbol>' +
    '<symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></symbol>' +
    '<symbol id="i-truck" viewBox="0 0 24 24"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></symbol>' +
    '<symbol id="i-plane" viewBox="0 0 24 24"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></symbol>' +
    '<symbol id="i-shield" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></symbol>' +
    '<symbol id="i-alert" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></symbol>' +
    '<symbol id="i-cash" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></symbol>' +
    '<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>' +
    '<symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></symbol>' +
    '<symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></symbol>' +
    '<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></symbol>' +
    '<symbol id="i-clip" viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></symbol>' +
    '<symbol id="i-send" viewBox="0 0 24 24"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></symbol>' +
    '<symbol id="i-home" viewBox="0 0 24 24"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></symbol>' +
    '<symbol id="i-store" viewBox="0 0 24 24"><path d="M3 9 4.5 4h15L21 9"/><path d="M4 9v11h16V9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M10 20v-5h4v5"/></symbol>' +
    '<symbol id="i-percent" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></symbol>' +
    '<symbol id="i-swap" viewBox="0 0 24 24"><path d="m8 3-4 4 4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></symbol>' +
    '<symbol id="i-chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>' +
    '<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>' +
    '<symbol id="i-close" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>' +
    '<symbol id="i-dress" viewBox="0 0 24 24"><path d="M9 2v3l-2 4 2 1-4 12h14l-4-12 2-1-2-4V2"/><path d="M9 5h6"/></symbol>' +
    '<symbol id="i-baby" viewBox="0 0 24 24"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></symbol>' +
    '<symbol id="i-handbag" viewBox="0 0 24 24"><path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"/><path d="M8 11V6a4 4 0 0 1 8 0v5"/></symbol>' +
    '<symbol id="i-gem" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></symbol>' +
    '<symbol id="i-ruler" viewBox="0 0 24 24"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></symbol>' +
    '<symbol id="i-user" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></symbol>' +
    '<symbol id="i-printer" viewBox="0 0 24 24"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></symbol>' +
    '<symbol id="i-box" viewBox="0 0 24 24"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 8.7 5 8.7-5"/></symbol>' +
    '<symbol id="i-lock" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></symbol>' +
    '<symbol id="i-heart" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></symbol>' +
    '<symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></symbol>' +
    '<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>' +
    '</svg>';

  var WAVE = '<div class="wave" aria-hidden="true"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path fill="currentColor" d="M0,64 C240,120 480,8 720,40 C960,72 1200,120 1440,72 L1440,120 L0,120 Z"/><path fill="currentColor" opacity=".5" d="M0,88 C300,40 560,110 820,80 C1080,50 1260,60 1440,96 L1440,120 L0,120 Z"/></svg></div>';

  /* ---------------- shared blocks ---------------- */
  function header(page) {
    var c = t('common');
    var nav = ['home', 'how', 'about', 'contact'].map(function (p) {
      return '<a href="' + href(p) + '"' + (p === page ? ' aria-current="page"' : '') + '>' + esc(c.nav[p]) + '</a>';
    }).join('');
    var langs = [['ku', 'ckb', 'کوردی'], ['ar', 'ar', 'عربي'], ['en', 'en', 'EN']].map(function (l) {
      return '<button type="button" data-lang="' + l[0] + '" lang="' + l[1] + '" aria-pressed="' + (lang === l[0]) + '">' + l[2] + '</button>';
    }).join('');
    return '<a class="skip-link" href="#main">' + esc(c.skip) + '</a>' +
      '<header class="site-header" id="top"><div class="container header-inner">' +
        '<a class="brand" href="' + href('home') + '">' +
          '<img src="' + base + 'assets/img/logo-128.png" width="46" height="46" alt="' + esc(C.name.en) + ' logo">' +
          '<span class="brand-name">' + esc(C.name[lang]) + (lang !== 'en' ? '<small>VELINA SHOPPING</small>' : '') + '</span>' +
        '</a>' +
        '<nav class="main-nav" id="mainNav" aria-label="' + esc(c.menu) + '">' + nav + '</nav>' +
        '<div class="lang-switch" role="group" aria-label="' + esc(c.langLabel) + '">' + langs + '</div>' +
        '<a class="btn btn-wa header-wa" ' + ext(waUrl(c.waGreeting)) + ' aria-label="' + esc(c.waAria) + '">' + icon('wa') + '<span>' + esc(c.waShort) + '</span></a>' +
        '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mainNav" aria-label="' + esc(c.menu) + '">' + icon('menu', 'i-open') + icon('close', 'i-close') + '</button>' +
      '</div></header>';
  }

  function footer() {
    var c = t('common');
    var socials = '<a ' + ext(C.instagramUrl) + ' aria-label="Instagram">' + icon('ig') + '</a>' +
      (C.facebookUrl ? '<a ' + ext(C.facebookUrl) + ' aria-label="Facebook">' + icon('fb') + '</a>' : '') +
      '<a ' + ext(waUrl(c.waGreeting)) + ' aria-label="WhatsApp">' + icon('wa') + '</a>';
    function li(page, label) { return '<li><a href="' + (page.indexOf('#') > -1 ? base + page : href(page)) + '">' + esc(label) + '</a></li>'; }
    return '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-col"><div class="footer-brand"><img src="' + base + 'assets/img/logo-128.png" width="56" height="56" alt="" loading="lazy"><strong>' + esc(C.name[lang]) + '</strong></div>' +
          '<p class="footer-desc">' + fmt(c.footerDesc) + '</p><div class="socials">' + socials + '</div></div>' +
        '<nav class="footer-col" aria-label="' + esc(c.footerPages) + '"><h2>' + esc(c.footerPages) + '</h2><ul>' +
          li('about', c.links.about) + li('how', c.links.how) + li('contact', c.links.contact) + li('index.html#stay-safe', c.links.safe) +
        '</ul></nav>' +
        '<nav class="footer-col" aria-label="' + esc(c.footerPolicies) + '"><h2>' + esc(c.footerPolicies) + '</h2><ul>' +
          li('shipping', c.links.shipping) + li('returns', c.links.returns) + li('privacy', c.links.privacy) + li('terms', c.links.terms) +
        '</ul></nav>' +
        '<div class="footer-col footer-contact-col"><h2>' + esc(c.footerContact) + '</h2><ul class="footer-contact">' +
          '<li>' + icon('pin') + '<a ' + ext(C.mapsUrl) + '>' + fmt('{address}') + '</a></li>' +
          '<li>' + icon('phone') + '<a href="tel:+' + C.phoneIntl + '">' + ltr(C.phone) + '</a></li>' +
          '<li>' + icon('mail') + '<a href="mailto:' + esc(C.email) + '">' + ltr(C.email) + '</a></li>' +
          '<li>' + icon('clock') + '<span>' + fmt('{hours}') + '</span></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="footer-bottom"><p>' + fmt(c.disclaimer) + '</p><p>' + fmt(c.rights) + '</p>' + legalLine() + '</div>' +
    '</div></footer>' +
    '<a class="wa-float" ' + ext(waUrl(c.waGreeting)) + ' aria-label="' + esc(c.waAria) + '">' + icon('wa') + '</a>';
  }

  /* Legal owner line (footer). In the pre-rendered static HTML it is written in English so crawlers read it. */
  var staticLegalEnglish = false;
  function legalLine() {
    var useEn = staticLegalEnglish && lang !== 'en';
    var txt = (useEn ? I.common.en : t('common')).legalLine || '';
    var html = esc(txt).replace('{legalName}', ltr(C.legalName));
    return '<p class="legal-line"' + (useEn ? ' lang="en" dir="ltr"' : '') + '>' + html + '</p>';
  }
  function legalBox() {
    var c = t('common'), lb = c.legalLabels || {};
    function row(label, value) { return '<div><dt>' + esc(label) + '</dt><dd>' + value + '</dd></div>'; }
    return '<section class="section" id="legal" aria-labelledby="legal-title"><div class="container narrow"><div class="legal-box reveal">' +
      '<h2 id="legal-title">' + icon('clip') + esc(c.legalTitle) + '</h2><dl>' +
        row(lb.trading, ltr(C.name.en)) +
        row(lb.legal, ltr(C.legalName)) +
        row(lb.type, esc(c.businessType)) +
        row(c.labels.address, fmt('{address}')) +
        row(c.labels.phone, '<a href="tel:+' + C.phoneIntl + '">' + ltr(C.phone) + '</a>') +
        row(c.labels.email, '<a href="mailto:' + esc(C.email) + '">' + ltr(C.email) + '</a>') +
      '</dl></div></div></section>';
  }

  function sectionHead(kicker, title, sub, id) {
    return '<div class="section-head reveal">' + (kicker ? '<span class="eyebrow">' + fmt(kicker) + '</span>' : '') +
      '<h2' + (id ? ' id="' + id + '"' : '') + '>' + fmt(title) + '</h2>' + (sub ? '<p>' + fmt(sub) + '</p>' : '') + '</div>';
  }
  function card(item, ic, featured) {
    return '<article class="card reveal' + (featured ? ' featured' : '') + '"><span class="card-ic">' + icon(ic) + '</span><h3>' + fmt(item.t) + '</h3><p>' + fmt(item.d) + '</p></article>';
  }
  function pageHero(d, extra) {
    return '<section class="page-hero"><div class="container narrow">' +
      (d.kicker ? '<span class="kicker">' + icon('sparkle') + fmt(d.kicker) + '</span>' : '') +
      '<h1>' + fmt(d.h1) + '</h1>' + (d.lead ? '<p class="lead">' + fmt(d.lead) + '</p>' : '') + (extra || '') +
      '</div>' + WAVE + '</section>';
  }
  function steps(list) {
    var ic = ['bag', 'send', 'clip', 'home'];
    return '<ol class="steps">' + list.map(function (s, i) {
      return '<li class="step reveal"><span class="step-num" aria-hidden="true">' + (i + 1) + '</span><div><h3>' + fmt(s.t) + '</h3><p>' + fmt(s.d) + '</p></div></li>';
    }).join('') + '</ol>';
  }
  function staySafe(blush) {
    var c = t('common');
    return '<section class="section' + (blush ? ' blush' : '') + '" id="stay-safe" aria-labelledby="safe-title"><div class="container">' +
      '<div class="safe-box reveal"><span class="card-ic">' + icon('alert') + '</span>' +
        '<div><h2 id="safe-title">' + esc(c.safeTitle) + '</h2><p>' + fmt(c.safeText) + '</p></div>' +
        '<a class="btn btn-ghost btn-sm" ' + ext(waUrl(c.waReport)) + '>' + icon('wa') + esc(c.safeReport) + '</a>' +
      '</div></div></section>';
  }
  function infoItem(ic, label, value) {
    return '<li><span class="card-ic">' + icon(ic) + '</span><div><b>' + esc(label) + '</b>' + value + '</div></li>';
  }
  function locationBlock(kicker, title, sub, blush) {
    var c = t('common');
    return '<section class="section' + (blush ? ' blush' : '') + '" id="location" aria-labelledby="loc-title"><div class="container">' +
      sectionHead(kicker, title || c.locTitle, sub, 'loc-title') +
      '<div class="loc reveal"><div class="loc-info"><ul class="info-list">' +
        infoItem('pin', c.labels.address, '<a ' + ext(C.mapsUrl) + '>' + fmt('{address}') + '</a>') +
        infoItem('clock', c.labels.hours, '<span>' + fmt('{hours}') + '</span>') +
        infoItem('phone', c.labels.phone, '<a href="tel:+' + C.phoneIntl + '">' + ltr(C.phone) + '</a>') +
        infoItem('mail', c.labels.email, '<a href="mailto:' + esc(C.email) + '">' + ltr(C.email) + '</a>') +
      '</ul></div>' +
      '<div class="map-box" data-map><div>' +
        '<span class="map-pin">' + icon('pin') + '</span>' +
        '<div class="map-actions"><button type="button" class="btn btn-primary btn-sm" data-map-load>' + icon('pin') + esc(c.mapBtn) + '</button>' +
        '<a class="btn btn-white btn-sm" ' + ext(C.mapsUrl) + '>' + esc(c.openMaps) + '</a></div>' +
        '<p class="small">' + esc(c.mapNote) + '</p>' +
      '</div></div></div></div></section>';
  }
  function ctaBanner(title, text, btn) {
    var c = t('common');
    return '<section class="section"><div class="container"><div class="cta-banner reveal"><h2>' + fmt(title) + '</h2><p>' + fmt(text) + '</p>' +
      '<div class="cta-actions"><a class="btn btn-white" ' + ext(waUrl(c.waGreeting)) + '>' + icon('wa') + fmt(btn) + '</a>' +
      '<a class="btn btn-outline-white" ' + ext(C.instagramUrl) + '>' + icon('ig') + ltr('@' + C.instagramUser) + '</a></div>' +
      '</div></div></section>';
  }

  /* ---------------- pages ---------------- */
  function pageHome() {
    var h = t('home'), c = t('common');
    var wa = waUrl(c.waGreeting);
    var statIc = ['plane', 'shield', 'clock', 'cash'];
    var trustIc = ['heart', 'store', 'truck', 'cash'];
    var whyIc = ['swap', 'percent', 'plane', 'shield', 'cash', 'store'];
    var catIc = ['dress', 'baby', 'handbag', 'gem'], catKey = ['women', 'kids', 'bags', 'accessories'];
    var feeIc = ['plane', 'truck', 'truck', 'shield'];
    var imgs = C.categoryImages || {};
    var out = '';

    // Hero
    out += '<section class="hero" aria-labelledby="hero-title"><div class="container hero-grid"><div>' +
      '<span class="kicker reveal">' + icon('sparkle') + fmt(h.heroKicker) + '</span>' +
      '<h1 id="hero-title" class="reveal">' + fmt(h.heroTitleA) + ' <span class="accent">' + fmt(h.heroTitleB) + '</span></h1>' +
      '<p class="hero-sub reveal">' + fmt(h.heroSub) + '</p>' +
      '<div class="rate-badge reveal"><span class="rate-label">' + fmt(h.rateLabel) + '</span>' +
        '<span class="rate-value">1$ = ' + num(C.rateIQDPerUSD) + ' <small>IQD</small></span>' +
        '<span class="rate-sub">' + fmt(h.rateSub) + '</span></div>' +
      '<div class="hero-ctas reveal"><a class="btn btn-primary" ' + ext(wa) + '>' + icon('wa') + esc(h.ctaOrder) + '</a>' +
        '<a class="btn btn-ghost" href="#how">' + esc(h.ctaHow) + '</a></div>' +
      '<ul class="stats reveal">' + h.stats.map(function (s, i) {
        return '<li class="stat">' + icon(statIc[i]) + '<strong>' + fmt(s.t) + '</strong><span>' + fmt(s.d) + '</span></li>';
      }).join('') + '</ul>' +
      '</div><div class="hero-visual reveal" aria-hidden="true"><div class="hero-card"><img src="' + base + 'assets/img/logo-512.jpg" width="512" height="512" alt="" fetchpriority="high"></div>' +
        '<svg class="icon sparkle s1"><use href="#i-sparkle"></use></svg><svg class="icon sparkle s2"><use href="#i-sparkle"></use></svg><svg class="icon sparkle s3"><use href="#i-sparkle"></use></svg>' +
      '</div></div>' + WAVE + '</section>';

    // Trust strip
    out += '<section class="trust-strip" aria-label="' + esc(h.whyKicker || '') + '"><div class="container"><ul class="trust-list reveal">' +
      h.trust.map(function (s, i) { return '<li>' + icon(trustIc[i]) + '<span>' + fmt(s) + '</span></li>'; }).join('') + '</ul></div></section>';

    // Why
    out += '<section class="section" id="why" aria-labelledby="why-title"><div class="container">' + sectionHead(h.whyKicker, h.whyTitle, h.whySub, 'why-title') +
      '<div class="grid grid-3">' + h.why.map(function (w, i) { return card(w, whyIc[i], i === 0); }).join('') + '</div></div></section>';

    // How it works
    out += '<section class="section blush" id="how" aria-labelledby="how-title"><div class="container">' + sectionHead(h.howKicker, h.howTitle, h.howSub, 'how-title') +
      steps(h.steps) + '<p class="center mt-lg reveal"><a class="btn btn-ghost" href="' + href('how') + '">' + esc(h.howMore) + icon('arrow', 'flip-rtl') + '</a></p></div></section>';

    // Categories
    out += '<section class="section" id="categories" aria-labelledby="cat-title"><div class="container">' + sectionHead(h.catKicker, h.catTitle, h.catSub, 'cat-title') +
      '<div class="cats">' + h.cats.map(function (cat, i) {
        var img = imgs[catKey[i]];
        return '<a class="cat reveal" ' + ext(wa) + '><div class="cat-media">' +
          (img ? '<img src="' + base + esc(img) + '" alt="" loading="lazy" width="600" height="800">' : icon(catIc[i])) +
          '</div><h3>' + fmt(cat.t) + '</h3><p>' + fmt(cat.d) + '</p></a>';
      }).join('') + '</div></div></section>';

    // Calculator
    out += '<section class="section blush" id="calculator" aria-labelledby="calc-title"><div class="container">' + sectionHead(h.calcKicker, h.calcTitle, h.calcSub, 'calc-title') +
      '<div class="calc-wrap reveal"><form class="calc-form" id="calc" novalidate>' +
        '<label class="field-label" for="usd">' + fmt(h.calcUsdLabel) + '</label>' +
        '<div class="input-wrap"><span class="cur" aria-hidden="true">$</span><input class="calc-input" id="usd" type="text" inputmode="decimal" autocomplete="off" maxlength="9" placeholder="' + esc(plain(h.calcUsdPh)) + '"></div>' +
        '<div class="quick">' + [50, 100, 200, 400].map(function (a) { return '<button type="button" data-amount="' + a + '">$' + a + '</button>'; }).join('') + '</div>' +
        '<fieldset class="area"><legend>' + fmt(h.calcAreaLabel) + '</legend><div class="pills">' +
          '<label class="pill"><input type="radio" name="area" value="krd" checked><span>' + fmt(h.areaKrd) + '</span></label>' +
          '<label class="pill"><input type="radio" name="area" value="iraq"><span>' + fmt(h.areaIraq) + '</span></label>' +
        '</div></fieldset>' +
      '</form><div class="calc-result" aria-live="polite"><dl class="breakdown">' +
        '<div><dt>' + fmt(h.calcItems) + '</dt><dd id="cItems">' + money(0) + '</dd></div>' +
        '<div><dt>' + fmt(h.calcShipping) + '</dt><dd>' + fmt(h.calcFree) + '</dd></div>' +
        '<div><dt>' + fmt(h.calcCustoms) + '</dt><dd>' + fmt(h.calcOnUs) + '</dd></div>' +
        '<div><dt>' + fmt(h.calcDelivery) + '</dt><dd id="cDel">' + money(C.deliveryFeeKurdistan) + '</dd></div>' +
        '<div class="total"><dt>' + fmt(h.calcTotal) + '</dt><dd id="cTotal">—</dd></div>' +
      '</dl><div class="prepay-box" id="cPrepay" hidden><div>' + fmt(h.calcPrepay) + ': <strong id="cPre"></strong> • ' + fmt(h.calcOnDelivery) + ': <strong id="cRest"></strong></div><div>' + fmt(h.calcPrepayNote) + '</div></div>' +
      '<p class="calc-note">' + fmt(h.calcNote) + '</p>' +
      '<a class="btn btn-white" id="cBtn" ' + ext(wa) + ' aria-disabled="true" tabindex="-1">' + icon('wa') + fmt(h.calcBtn) + '</a>' +
      '</div></div></div></section>';

    // Fees
    out += '<section class="section" id="fees" aria-labelledby="fees-title"><div class="container">' + sectionHead(h.feesKicker, h.feesTitle, h.feesSub, 'fees-title') +
      '<div class="fees reveal">' + h.fees.map(function (f, i) {
        return '<div class="fee-row"><span class="card-ic">' + icon(feeIc[i]) + '</span><span class="t">' + fmt(f.t) + '</span><span class="v">' + fmt(f.v) + '</span></div>';
      }).join('') + '<div class="fees-foot"><span>' + fmt(h.feesNote) + '</span><a href="' + href('shipping') + '">' + esc(h.feesLink) + '</a></div></div></div></section>';

    // Size guide
    out += '<section class="section blush" id="size-guide" aria-labelledby="size-title"><div class="container">' + sectionHead(h.sizeKicker, h.sizeTitle, h.sizeSub, 'size-title') +
      '<div class="size-grid reveal"><div><h3>' + fmt(h.sizeWomenTitle) + '</h3><div class="table-wrap"><table><thead><tr>' +
        h.sizeCols.map(function (x, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + fmt(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        WOMEN_SIZES.map(function (r) { return '<tr>' + r.map(function (v, i) { return i ? '<td class="num">' + esc(v) + '</td>' : '<th scope="row" class="num">' + esc(v) + '</th>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div></div><div><h3>' + fmt(h.sizeKidsTitle) + '</h3><div class="table-wrap"><table><thead><tr><th scope="col">' + fmt(h.kidsCols[0]) + '</th><th scope="col" class="num">' + fmt(h.kidsCols[1]) + '</th></tr></thead><tbody>' +
        h.kidsAges.map(function (a, i) { return '<tr><td>' + fmt(a) + '</td><td class="num">' + esc(KIDS_HEIGHTS[i] || '') + '</td></tr>'; }).join('') +
      '</tbody></table></div></div></div>' +
      '<div class="size-foot reveal"><p class="small">' + fmt(h.sizeNote) + '</p><p><strong>' + fmt(h.sizeAsk) + '</strong></p>' +
        '<a class="btn btn-primary btn-sm" ' + ext(waUrl(c.waSize)) + '>' + icon('ruler') + esc(h.sizeAskBtn) + '</a></div></div></section>';

    // Customer feedback – shows REAL reviews from i18n.js (home.reviews) when you add them;
    // until then it shows honest trust cards that point to the FeedBack highlight on Instagram. Never invent reviews.
    var reviews = h.reviews || [];
    var revIc = ['ig', 'store', 'cash'];
    var revBody = reviews.length
      ? reviews.map(function (r) {
          return '<figure class="review real reveal" style="margin:0"><span class="q" aria-hidden="true">&ldquo;</span>' +
            '<blockquote>' + fmt(r.text) + '</blockquote><figcaption><footer><span class="avatar">' + icon('user') + '</span><div><cite>' + fmt(r.name) + '</cite><span class="city">' + fmt(r.city) + '</span></div></footer></figcaption></figure>';
        }).join('')
      : (h.revCards || []).map(function (x, i) { return card(x, revIc[i] || 'heart'); }).join('');
    out += '<section class="section" id="reviews" aria-labelledby="rev-title"><div class="container">' + sectionHead(h.revKicker, h.revTitle, h.revSub, 'rev-title') +
      '<div class="grid grid-3">' + revBody + '</div><p class="center mt-lg reveal"><a class="btn btn-primary btn-sm" ' + ext(C.instagramUrl) + '>' + icon('ig') + esc(h.revMore) + '</a></p></div></section>';

    // FAQ
    out += '<section class="section blush" id="faq" aria-labelledby="faq-title"><div class="container">' + sectionHead(h.faqKicker, h.faqTitle, h.faqSub, 'faq-title') +
      '<div class="faq">' + h.faq.map(function (qa) {
        return '<details class="reveal"><summary><span>' + fmt(qa[0]) + '</span><span class="chev">' + icon('chev') + '</span></summary><div class="answer"><p>' + fmt(qa[1]) + '</p></div></details>';
      }).join('') + '</div></div></section>';

    out += staySafe(false);
    out += locationBlock(h.locKicker, h.locTitle, h.locSub, true);
    return out;
  }

  function pageAbout() {
    var a = t('about');
    var trustIc = ['store', 'cash', 'shield', 'percent', 'clip'], offerIc = ['dress', 'baby', 'handbag', 'gem'];
    return pageHero(a) +
      '<section class="section"><div class="container narrow">' + sectionHead('', a.storyTitle) +
        '<div class="prose reveal">' + a.story.map(function (p) { return '<p>' + fmt(p) + '</p>'; }).join('') + '</div>' +
        '<article class="card featured reveal mt-lg"><span class="card-ic">' + icon('heart') + '</span><h3>' + fmt(a.missionTitle) + '</h3><p>' + fmt(a.mission) + '</p></article>' +
      '</div></section>' +
      '<section class="section blush"><div class="container">' + sectionHead('', a.trustTitle) +
        '<div class="grid grid-3">' + a.trust.map(function (x, i) { return card(x, trustIc[i]); }).join('') + '</div></div></section>' +
      '<section class="section"><div class="container">' + sectionHead('', a.offerTitle) +
        '<div class="grid grid-4">' + a.offer.map(function (x, i) { return card(x, offerIc[i]); }).join('') + '</div>' +
        '<div class="independence reveal mt-lg"><span class="card-ic">' + icon('shield') + '</span><div><h2>' + fmt(a.independenceTitle) + '</h2><p>' + fmt(a.independence) + '</p></div></div>' +
      '</div></section>' +
      legalBox() +
      locationBlock('', '', '', true) +
      ctaBanner(a.ctaTitle, a.ctaText, a.ctaBtn);
  }

  function pageHow() {
    var w = t('how');
    var afterIc = ['bag', 'plane', 'shield', 'truck'];
    return pageHero(w) +
      '<section class="section"><div class="container">' + steps(w.steps) + '</div></section>' +
      '<section class="section blush"><div class="container narrow">' + sectionHead('', w.basketTitle) +
        '<ul class="tips">' + w.basketTips.map(function (s) { return '<li class="reveal">' + icon('check') + '<span>' + fmt(s) + '</span></li>'; }).join('') + '</ul></div></section>' +
      '<section class="section"><div class="container">' + sectionHead('', w.afterTitle) +
        '<div class="grid grid-4">' + w.after.map(function (x, i) { return card(x, afterIc[i]); }).join('') + '</div></div></section>' +
      '<section class="section blush"><div class="container narrow">' + sectionHead('', w.payTitle) +
        '<article class="card reveal"><span class="card-ic">' + icon('cash') + '</span>' + w.pay.map(function (p) { return '<p style="margin-bottom:10px">' + fmt(p) + '</p>'; }).join('') + '</article></div></section>' +
      ctaBanner(w.ctaTitle, w.ctaText, w.ctaBtn);
  }

  function pageContact() {
    var k = t('contact'), c = t('common');
    function channel(cls, ic, label, value, desc, url, external) {
      var tag = url ? 'a' : 'div';
      var attrs = url ? (external ? ext(url) : 'href="' + esc(url) + '"') : '';
      return '<' + tag + ' class="channel reveal ' + cls + '" ' + attrs + '><span class="card-ic">' + icon(ic) + '</span><span><b>' + esc(label) + '</b><strong>' + value + '</strong>' + (desc ? '<small>' + fmt(desc) + '</small>' : '') + '</span></' + tag + '>';
    }
    var channels =
      channel('wa', 'wa', c.labels.whatsapp, ltr(C.phone), k.whatsappDesc, waUrl(c.waGreeting), true) +
      channel('', 'phone', c.labels.phone, ltr(C.phone), k.phoneDesc, 'tel:+' + C.phoneIntl) +
      channel('', 'mail', c.labels.email, ltr(C.email), k.emailDesc, 'mailto:' + C.email) +
      channel('', 'ig', c.labels.instagram, ltr('@' + C.instagramUser), k.instagramDesc, C.instagramUrl, true) +
      (C.facebookUrl ? channel('', 'fb', c.labels.facebook, esc(C.name[lang]), k.facebookDesc, C.facebookUrl, true) : '') +
      channel('', 'pin', c.labels.address, fmt('{address}'), k.addressDesc, C.mapsUrl, true) +
      channel('', 'clock', c.labels.hours, fmt('{hours}'), k.hoursDesc);
    var form = '<form class="form-card reveal" id="waForm" novalidate><h2 style="font-size:1.35rem">' + fmt(k.formTitle) + '</h2><p style="color:var(--mauve);margin:6px 0 20px">' + fmt(k.formLead) + '</p>' +
      '<div class="form-grid">' +
        '<div><label class="field-label" for="fName">' + fmt(k.fName) + '</label><input class="input" id="fName" autocomplete="name" placeholder="' + esc(plain(k.fNamePh)) + '"></div>' +
        '<div><label class="field-label" for="fPhone">' + fmt(k.fPhone) + '</label><input class="input" id="fPhone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" placeholder="' + esc(plain(k.fPhonePh)) + '"></div>' +
        '<div><label class="field-label" for="fArea">' + fmt(k.fArea) + '</label><select class="select" id="fArea"><option value="krd">' + esc(plain(k.fAreaKrd)) + '</option><option value="iraq">' + esc(plain(k.fAreaIraq)) + '</option></select></div>' +
        '<div><label class="field-label" for="fTopic">' + fmt(k.fTopic) + '</label><select class="select" id="fTopic">' + k.topics.map(function (x, i) { return '<option value="' + i + '">' + esc(plain(x)) + '</option>'; }).join('') + '</select></div>' +
        '<div class="full"><label class="field-label" for="fMsg">' + fmt(k.fMsg) + '</label><textarea class="textarea" id="fMsg" placeholder="' + esc(plain(k.fMsgPh)) + '"></textarea></div>' +
      '</div><p class="form-error" id="fErr" role="alert" hidden>' + fmt(k.fRequired) + '</p>' +
      '<button class="btn btn-wa" type="submit" style="margin-top:18px" data-block>' + icon('wa') + fmt(k.fSubmit) + '</button>' +
      '<p class="form-note">' + icon('lock') + '<span>' + fmt(k.formNote) + '</span></p></form>';
    return pageHero(k) +
      '<section class="section" aria-labelledby="ch-title"><div class="container">' + sectionHead('', k.channelsTitle, '', 'ch-title') + '<div class="channels">' + channels + '</div></div></section>' +
      legalBox() +
      '<section class="section blush" id="message"><div class="container">' + form + '</div></section>' +
      staySafe(false) +
      locationBlock('', '', '', true);
  }

  function block(b) {
    if (typeof b === 'string') return '<p>' + fmt(b) + '</p>';
    if (Array.isArray(b)) return '<ul>' + b.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>';
    if (b && b.h3) return '<h3>' + fmt(b.h3) + '</h3>';
    if (b && b.note) return '<div class="note">' + fmt(b.note) + '</div>';
    if (b && b.table) {
      var head = b.table[0], rows = b.table.slice(1);
      return '<div class="table-wrap"><table><thead><tr>' + head.map(function (x) { return '<th scope="col">' + fmt(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + fmt(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    }
    return '';
  }

  function pageDoc(key) {
    var d = t(key), c = t('common');
    var metaRow = '<div class="meta-row"><span class="badge">' + icon('calendar') + fmt(c.lastUpdated) + '</span>' +
      '<button type="button" class="badge no-print" data-print style="border:0;cursor:pointer">' + icon('printer') + esc(c.print) + '</button></div>';
    var toc = '<details class="toc" data-toc><summary>' + esc(c.toc) + '<span class="chev">' + icon('chev') + '</span></summary><ol>' +
      d.sections.map(function (s) { return '<li><a href="#' + esc(s.id) + '">' + fmt(s.h) + '</a></li>'; }).join('') + '</ol></details>';
    var secs = d.sections.map(function (s, i) {
      return '<section class="doc-sec" id="' + esc(s.id) + '"><h2><span class="n">' + (i + 1) + '.</span><span>' + fmt(s.h) + '</span></h2>' + (s.body || []).map(block).join('') + '</section>';
    }).join('');
    var related = DOCS.filter(function (k) { return k !== key; }).concat(['contact']).map(function (k) {
      return '<li><a href="' + href(k) + '">' + esc(c.links[k]) + '</a></li>';
    }).join('');
    return pageHero({ kicker: '{name}', h1: d.h1, lead: d.lead }, metaRow) +
      '<div class="container doc-wrap">' + toc + '<article class="doc">' + secs +
        '<div class="help-box"><h2>' + esc(c.helpTitle) + '</h2><p>' + fmt(c.helpText) + '</p><div class="help-actions">' +
          '<a class="btn btn-white btn-sm" ' + ext(waUrl(c.waGreeting)) + '>' + icon('wa') + esc(c.labels.whatsapp) + '</a>' +
          '<a class="btn btn-outline-white btn-sm" href="mailto:' + esc(C.email) + '">' + icon('mail') + ltr(C.email) + '</a></div></div>' +
        '<nav class="related" aria-label="' + esc(c.related) + '"><h2>' + esc(c.related) + '</h2><ul>' + related + '</ul></nav>' +
      '</article></div>';
  }

  function pageNotFound() {
    var n = t('notFound'), c = t('common');
    return '<section class="nf"><div class="container"><div class="big" aria-hidden="true">404</div><h1>' + fmt(n.h1) + '</h1><p>' + fmt(n.text) + '</p>' +
      '<div class="cta-actions"><a class="btn btn-primary" href="' + href('home') + '">' + icon('home') + esc(n.btnHome) + '</a>' +
      '<a class="btn btn-ghost" ' + ext(waUrl(c.waGreeting)) + '>' + icon('wa') + esc(n.btnWa) + '</a></div></div></section>';
  }

  function renderMain(page) {
    if (page === 'home') return pageHome();
    if (page === 'about') return pageAbout();
    if (page === 'how') return pageHow();
    if (page === 'contact') return pageContact();
    if (DOCS.indexOf(page) > -1) return pageDoc(page);
    return pageNotFound();
  }
  function renderApp(page) {
    return header(page) + '<main id="main">' + renderMain(page) + '</main>' + footer();
  }
  function pageMeta(page) {
    var key = page === 'how' ? 'how' : page;
    var m = (t(key).meta) || {};
    return { title: plain(m.title), desc: plain(m.desc) };
  }
  function setContext(l, b) { lang = LANGS[l] ? l : 'ku'; base = b || ''; }
  function init(config, i18n) { C = config; I = i18n; }

  /* ---------------- browser runtime ---------------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function toLatin(s) {
    return String(s).replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); })
      .replace(/[۰-۹]/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d); }).replace(/[٫,]/g, '.');
  }

  function bindCalc() {
    var form = $('#calc'); if (!form) return;
    var input = $('#usd'), h = t('home');
    function update() {
      var raw = toLatin(input.value).replace(/[^\d.]/g, '');
      var parts = raw.split('.'); if (parts.length > 2) raw = parts[0] + '.' + parts.slice(1).join('');
      if (raw !== input.value) input.value = raw;
      var usd = parseFloat(raw), ok = isFinite(usd) && usd > 0;
      var area = form.querySelector('input[name="area"]:checked').value;
      var fee = area === 'krd' ? C.deliveryFeeKurdistan : C.deliveryFeeIraq;
      var items = ok ? Math.round(usd * C.rateIQDPerUSD) : 0;
      var total = items + fee, pre = 0, rest = total;
      $('#cItems').innerHTML = money(items);
      $('#cDel').innerHTML = money(fee);
      $('#cTotal').innerHTML = ok ? money(total) : '—';
      var box = $('#cPrepay');
      if (ok && usd > C.prepayThresholdUSD) {
        pre = Math.round(total * C.prepayPercent / 100); rest = total - pre;
        $('#cPre').innerHTML = money(pre); $('#cRest').innerHTML = money(rest); box.hidden = false;
      } else { box.hidden = true; }
      var btn = $('#cBtn');
      if (ok) {
        var msg = plain(h.waCalc, { usd: String(Math.round(usd * 100) / 100), area: plain(area === 'krd' ? h.areaKrd : h.areaIraq), items: num(items), delivery: num(fee), total: num(total) });
        if (pre) msg += plain(h.waCalcPrepay, { pre: num(pre), rest: num(rest) });
        btn.href = waUrl(msg); btn.removeAttribute('aria-disabled'); btn.removeAttribute('tabindex');
      } else {
        btn.href = waUrl(t('common').waGreeting); btn.setAttribute('aria-disabled', 'true'); btn.setAttribute('tabindex', '-1');
      }
    }
    input.addEventListener('input', update);
    $$('input[name="area"]', form).forEach(function (r) { r.addEventListener('change', update); });
    $$('[data-amount]', form).forEach(function (b) { b.addEventListener('click', function () { input.value = b.getAttribute('data-amount'); update(); }); });
    form.addEventListener('submit', function (e) { e.preventDefault(); input.blur(); });
    update();
  }

  function bindForm() {
    var form = $('#waForm'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var k = t('contact');
      var name = $('#fName').value.trim(), msgText = $('#fMsg').value.trim();
      var err = $('#fErr');
      if (!name || !msgText) { err.hidden = false; (!name ? $('#fName') : $('#fMsg')).focus(); return; }
      err.hidden = true;
      var area = $('#fArea').value === 'krd' ? k.fAreaKrd : k.fAreaIraq;
      var msg = plain(k.waTemplate, { fname: name, fphone: $('#fPhone').value.trim() || '-', farea: plain(area), ftopic: plain(k.topics[+$('#fTopic').value] || ''), fmsg: msgText });
      var url = waUrl(msg);
      var win = window.open(url, '_blank', 'noopener');
      if (!win) window.location.href = url;
    });
  }

  function bindMaps() {
    $$('[data-map-load]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var box = btn.closest('[data-map]');
        var hl = lang === 'en' ? 'en' : (lang === 'ar' ? 'ar' : 'ckb');
        box.innerHTML = '<iframe title="' + esc(C.address[lang]) + '" src="https://maps.google.com/maps?q=' + C.geo.lat + ',' + C.geo.lng + '&z=16&hl=' + hl + '&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
      });
    });
  }

  var observer = null;
  function bindReveal() {
    var items = $$('.reveal');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (observer) observer.disconnect();
    if (reduce || !('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('in'); }); return; }
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); observer.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    items.forEach(function (el) { observer.observe(el); });
  }

  function bind() {
    $$('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () { if (b.getAttribute('data-lang') !== lang) apply(b.getAttribute('data-lang')); });
    });
    var toggle = $('.menu-toggle'), nav = $('#mainNav');
    if (toggle && nav) toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
      toggle.setAttribute('aria-label', open ? t('common').close : t('common').menu);
    });
    $$('[data-print]').forEach(function (b) { b.addEventListener('click', function () { window.print(); }); });
    var toc = $('[data-toc]');
    if (toc && window.matchMedia('(min-width: 1024px)').matches) toc.open = true;
    bindCalc(); bindForm(); bindMaps(); bindReveal();
  }

  function saveState() {
    var s = {};
    ['usd', 'fName', 'fPhone', 'fArea', 'fTopic', 'fMsg'].forEach(function (id) { var el = document.getElementById(id); if (el) s[id] = el.value; });
    var area = $('input[name="area"]:checked'); if (area) s.area = area.value;
    return s;
  }
  function restoreState(s) {
    Object.keys(s).forEach(function (id) { var el = document.getElementById(id); if (el && id !== 'area') el.value = s[id]; });
    if (s.area) { var r = $('input[name="area"][value="' + s.area + '"]'); if (r) r.checked = true; }
  }

  function setMeta(selector, value) { var m = document.querySelector(selector); if (m) m.setAttribute('content', value); }

  function apply(l, initial) {
    setContext(l, document.documentElement.getAttribute('data-base') || '');
    var docEl = document.documentElement;
    docEl.lang = LANGS[lang].html; docEl.dir = LANGS[lang].dir;
    var page = document.body.getAttribute('data-page') || 'home';
    var state = initial ? {} : saveState();
    var app = document.getElementById('app');
    var y = window.scrollY;
    app.innerHTML = renderApp(page);
    restoreState(state);
    var m = pageMeta(page);
    if (m.title) document.title = m.title;
    setMeta('meta[name="description"]', m.desc);
    setMeta('meta[property="og:title"]', m.title);
    setMeta('meta[property="og:description"]', m.desc);
    bind();
    if (state.usd) { var u = $('#usd'); if (u) u.dispatchEvent(new Event('input')); }
    docEl.classList.remove('lang-pending');
    root.__velinaReady = true;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
    try {
      var url = new URL(window.location.href);
      if (url.searchParams.has('lang') && url.searchParams.get('lang') !== lang) { url.searchParams.set('lang', lang); history.replaceState(null, '', url); }
    } catch (e) { /* ignore */ }
    if (initial && location.hash) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView();
    } else if (!initial) { window.scrollTo(0, y); }
  }

  function detectLang() {
    var l = null;
    try { l = new URLSearchParams(window.location.search).get('lang'); } catch (e) { /* ignore */ }
    if (!LANGS[l]) { try { l = localStorage.getItem(STORAGE_KEY); } catch (e) { l = null; } }
    return LANGS[l] ? l : (C.defaultLang || 'ku');
  }

  /* exports (used by tools/build-pages.js to pre-render the HTML files) */
  root.VelinaRender = { init: init, setContext: setContext, renderApp: renderApp, pageMeta: pageMeta, sprite: SPRITE, PAGES: PAGES, plain: plain, setStaticLegal: function (v) { staticLegalEnglish = !!v; } };

  if (typeof document !== 'undefined' && root.CONFIG && root.I18N) {
    init(root.CONFIG, root.I18N);
    document.documentElement.classList.add('js');
    apply(detectLang(), true);
    window.addEventListener('scroll', function () {
      var hd = document.querySelector('.site-header'); if (hd) hd.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }
})(typeof window !== 'undefined' ? window : globalThis);
