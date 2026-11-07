/* ==========================================================================
   VELINA SHOPPING – ALL WEBSITE TEXT (ku = Kurdish Sorani · ar = Arabic · en = English)
   Edit any text here. Keep the same keys / array lengths in all three languages.
   Inline markup you can use inside any text:
     {tokens}  → filled from assets/config.js: {name} {phone} {email} {ig} {website} {address} {hours}
                 {rate} {rate100} {rateNum} {days} {feeKrd} {feeIraq} {threshold} {prepay} {rest}
                 {attempts} {retention} {respond} {refundTime} {updated} {year}
     [text](target) → link. target: whatsapp | phone | email | instagram | facebook | maps |
                 page.html | page.html#section | https://...
     **text**  → bold
   ========================================================================== */
var I18N = (typeof window !== 'undefined' ? window : globalThis).I18N = {};

/* ------------------------------------------------------------------ common */
/* Shared texts used on every page: header, footer, stay-safe notice, map, policy layout, WhatsApp messages */
I18N.common = {
  ku: {
    skip: 'بازدان بۆ ناوەڕۆک',
    nav: { home: 'سەرەکی', how: 'چۆن کار دەکات', about: 'دەربارەی ئێمە', contact: 'پەیوەندی' },
    menu: 'مێنیو', close: 'داخستن',
    waShort: 'واتسئاپ', waAria: 'لە واتسئاپ پەیوەندیمان پێوە بکە', langLabel: 'زمان',
    independent: 'خزمەتگوزارییەکی سەربەخۆ · پەیوەندیمان بە SHEIN ـەوە نییە',
    footerDesc: 'خزمەتگوزارییەکی سەربەخۆی بازاڕکردنی ئۆنلاینە. لە SHEIN بۆت دەکڕین، لە ئیماراتەوە دەینێرین و تا بەردەم دەرگا لە هەموو عێراق و هەرێمی کوردستان دەیگەیەنین.',
    footerPages: 'پەڕەکان', footerPolicies: 'سیاسەتەکان', footerContact: 'پەیوەندی',
    links: { about: 'دەربارەی ئێمە', how: 'چۆن کار دەکات', shipping: 'سیاسەتی گەیاندن', returns: 'گەڕاندنەوە و پارە گەڕاندنەوە', privacy: 'سیاسەتی تایبەتمەندی', terms: 'مەرجەکانی خزمەتگوزاری', contact: 'پەیوەندیمان پێوە بکە', safe: 'ئاگاداری سەلامەتی' },
    labels: { address: 'ناونیشان', phone: 'تەلەفۆن', whatsapp: 'واتسئاپ', email: 'ئیمەیڵ', hours: 'کاتی کار', instagram: 'ئینستاگرام', facebook: 'فەیسبووک' },
    hoursText: 'شەممە تا پێنجشەممە، {hoursRange} · هەینی داخراوە',
    disclaimer: 'ڤێلینا شۆپینگ خزمەتگوزارییەکی سەربەخۆی بازاڕکردنە. هیچ پەیوەندی، پشتگیری یان هاوبەشییەکمان لەگەڵ SHEIN نییە. SHEIN مارکەیەکی بازرگانیی خاوەنەکەیەتی.',
    rights: '© {year} ڤێلینا شۆپینگ. هەموو مافەکان پارێزراون.',
    safeTitle: 'ئاگاداری سەلامەتی',
    safeText: 'تەنها لە ڕێگەی واتسئاپی {phone} و ئینستاگرامی {ig}{fbClause} پەیوەندیت پێوە دەکەین. هەرگیز داوای ژمارەی کارتی بانکی، وشەی نهێنی یان کۆدی پشتڕاستکردنەوە ناکەین. پێشەکی تەنها بۆ ئۆردەری سەروو {threshold} داوا دەکرێت و تەنها لە ڕێگەی ئەم کەناڵە فەرمییانەوە. ئەگەر ئەکاونتێکی ساختەت بینی، ئاگادارمان بکەرەوە.',
    fbClause: ' و پەیجی فەرمیی فەیسبووکمان',
    safeReport: 'ئاگادارکردنەوە لە ئەکاونتی ساختە',
    locTitle: 'سەردانی ئۆفیسەکەمان بکە',
    mapBtn: 'پیشاندانی نەخشە',
    mapNote: 'نەخشەکە تەنها دوای کلیککردن لە Google Maps بار دەبێت.',
    openMaps: 'کردنەوە لە Google Maps',
    lastUpdated: 'دوایین نوێکردنەوە: {updated}',
    months: ['کانوونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەممووز', 'ئاب', 'ئەیلوول', 'تشرینی یەکەم', 'تشرینی دووەم', 'کانوونی یەکەم'],
    dateFmt: '{d}ی {m}ی {y}',
    toc: 'ناوەڕۆکی ئەم پەڕەیە', print: 'چاپکردن', backTop: 'گەڕانەوە بۆ سەرەوە', related: 'پەڕە پەیوەندیدارەکان',
    helpTitle: 'پرسیارت هەیە؟',
    helpText: 'لە واتسئاپ یان بە ئیمەیڵ پەیوەندیمان پێوە بکە، بە خۆشحاڵییەوە یارمەتیت دەدەین.',
    waGreeting: 'سڵاو ڤێلینا شۆپینگ 🌸 دەمەوێت لە SHEIN ئۆردەر بکەم.',
    waSize: 'سڵاو ڤێلینا شۆپینگ 🌸 یارمەتیم دەوێت بۆ هەڵبژاردنی قەبارە.',
    waReport: 'سڵاو ڤێلینا شۆپینگ، دەمەوێت ئاگادارتان بکەمەوە لە ئەکاونتێکی ساختە کە ناوی ئێوە بەکاردەهێنێت.',
    noscript: 'بۆ گۆڕینی زمان و بەکارهێنانی حیسابکەری نرخ، تکایە JavaScript چالاک بکە.'
  },

  ar: {
    skip: 'تخطَّ إلى المحتوى',
    nav: { home: 'الرئيسية', how: 'كيف نعمل', about: 'من نحن', contact: 'تواصل معنا' },
    menu: 'القائمة', close: 'إغلاق',
    waShort: 'واتساب', waAria: 'تواصل معنا عبر واتساب', langLabel: 'اللغة',
    independent: 'خدمة مستقلة · غير تابعة لـ SHEIN',
    footerDesc: 'خدمة تسوّق شخصي مستقلة عبر الإنترنت. نشتري لك من SHEIN، نشحن من الإمارات ونوصل طلبك إلى باب بيتك في كل العراق وإقليم كوردستان.',
    footerPages: 'الصفحات', footerPolicies: 'السياسات', footerContact: 'تواصل معنا',
    links: { about: 'من نحن', how: 'كيف نعمل', shipping: 'سياسة الشحن', returns: 'الإرجاع والاسترداد', privacy: 'سياسة الخصوصية', terms: 'شروط الخدمة', contact: 'تواصل معنا', safe: 'تنبيه الأمان' },
    labels: { address: 'العنوان', phone: 'الهاتف', whatsapp: 'واتساب', email: 'البريد الإلكتروني', hours: 'ساعات العمل', instagram: 'إنستغرام', facebook: 'فيسبوك' },
    hoursText: 'من السبت إلى الخميس، {hoursRange} · الجمعة عطلة',
    disclaimer: 'ڤيلينا شوبينغ خدمة تسوّق مستقلة. لسنا تابعين لشركة SHEIN ولا معتمدين منها ولا شركاء لها. SHEIN علامة تجارية مملوكة لأصحابها.',
    rights: '© {year} ڤيلينا شوبينغ. جميع الحقوق محفوظة.',
    safeTitle: 'تنبيه الأمان',
    safeText: 'نتواصل معك فقط عبر واتساب {phone} وإنستغرام {ig}{fbClause}. لا نطلب أبداً أرقام البطاقات المصرفية أو كلمات المرور أو رموز التحقق. الدفع المسبق يُطلب فقط للطلبات التي تزيد على {threshold}، وفقط عبر هذه القنوات الرسمية. أبلغنا عن أي حساب مزيّف.',
    fbClause: ' وصفحتنا الرسمية على فيسبوك',
    safeReport: 'الإبلاغ عن حساب مزيّف',
    locTitle: 'زورونا في مكتبنا',
    mapBtn: 'عرض الخريطة',
    mapNote: 'يتم تحميل الخريطة من Google Maps فقط بعد النقر.',
    openMaps: 'فتح في Google Maps',
    lastUpdated: 'آخر تحديث: {updated}',
    months: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
    dateFmt: '{d} {m} {y}',
    toc: 'محتويات الصفحة', print: 'طباعة', backTop: 'العودة إلى الأعلى', related: 'صفحات ذات صلة',
    helpTitle: 'لديك سؤال؟',
    helpText: 'تواصل معنا عبر واتساب أو البريد الإلكتروني، ويسعدنا مساعدتك.',
    waGreeting: 'مرحباً ڤيلينا شوبينغ 🌸 أريد الطلب من SHEIN.',
    waSize: 'مرحباً ڤيلينا شوبينغ 🌸 أحتاج مساعدة في اختيار المقاس.',
    waReport: 'مرحباً ڤيلينا شوبينغ، أريد الإبلاغ عن حساب مزيّف يستخدم اسمكم.',
    noscript: 'لتغيير اللغة واستخدام حاسبة السعر، يرجى تفعيل JavaScript.'
  },

  en: {
    skip: 'Skip to content',
    nav: { home: 'Home', how: 'How it works', about: 'About', contact: 'Contact' },
    menu: 'Menu', close: 'Close',
    waShort: 'WhatsApp', waAria: 'Chat with us on WhatsApp', langLabel: 'Language',
    independent: 'Independent service · Not affiliated with SHEIN',
    footerDesc: 'An independent online personal-shopping service. We buy from SHEIN for you, ship from the UAE and deliver to your door anywhere in Iraq and the Kurdistan Region.',
    footerPages: 'Pages', footerPolicies: 'Policies', footerContact: 'Contact',
    links: { about: 'About us', how: 'How it works', shipping: 'Shipping Policy', returns: 'Returns & Refunds', privacy: 'Privacy Policy', terms: 'Terms of Service', contact: 'Contact us', safe: 'Stay safe' },
    labels: { address: 'Address', phone: 'Phone', whatsapp: 'WhatsApp', email: 'Email', hours: 'Working hours', instagram: 'Instagram', facebook: 'Facebook' },
    hoursText: 'Saturday to Thursday, {hoursRange} · Friday closed',
    disclaimer: 'Velina Shopping is an independent shopping service. We are not affiliated with, endorsed by, or partnered with SHEIN. SHEIN is a trademark of its respective owner.',
    rights: '© {year} Velina Shopping. All rights reserved.',
    safeTitle: 'Stay safe',
    safeText: 'We only contact you from WhatsApp {phone} and Instagram {ig}{fbClause}. We never ask for card numbers, passwords or verification codes. Prepayment is only requested for orders above {threshold} and only through these official channels. Report fake accounts to us.',
    fbClause: ', and our official Facebook page',
    safeReport: 'Report a fake account',
    locTitle: 'Visit our office',
    mapBtn: 'Show map',
    mapNote: 'The map loads from Google Maps only after you click.',
    openMaps: 'Open in Google Maps',
    lastUpdated: 'Last updated: {updated}',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dateFmt: '{m} {d}, {y}',
    toc: 'On this page', print: 'Print', backTop: 'Back to top', related: 'Related pages',
    helpTitle: 'Questions?',
    helpText: 'Message us on WhatsApp or send us an email – we’re happy to help.',
    waGreeting: 'Hello Velina Shopping 🌸 I’d like to order from SHEIN.',
    waSize: 'Hello Velina Shopping 🌸 I need help choosing my size.',
    waReport: 'Hello Velina Shopping, I want to report a fake account using your name.',
    noscript: 'Please enable JavaScript to switch language and use the price calculator.'
  }
};

/* ------------------------------------------------------------------ home */
I18N.home = {
  ku: {
    meta: { title: 'Velina Shopping | کڕینی SHEIN بۆ هەولێر و عێراق', desc: 'کاڵا دڵخوازەکانی SHEIN لە هەولێر، کوردستان و هەموو عێراق. نرخی تایبەت {rate} دینار، گومرگ لەسەر ئێمە، پارەدان لە کاتی وەرگرتن.' },
    heroKicker: 'خزمەتگوزارییەکی سەربەخۆی کڕینی کەسی',
    heroTitleA: 'کاڵا دڵخوازەکانی SHEIN،',
    heroTitleB: 'تا بەردەم دەرگاکەت',
    heroSub: 'سەبەتەکەت لە واتسئاپ بۆمان بنێرە؛ ئێمە بۆت دەیکڕین، لە ئیماراتەوە دەینێرین و تا بەردەم دەرگا دەیگەیەنین. هەموو ئەو داشکاندنانەی SHEIN کە لە کاتی کڕیندا بەردەستن، بۆت جێبەجێ دەکرێن.',
    rateLabel: 'نرخی تایبەتی ئێمە',
    rateSub: '{rate100} دینار',
    ctaOrder: 'داواکردن لە واتسئاپ',
    ctaHow: 'چۆن کار دەکات؟',
    stats: [
      { t: 'ناردنی بەخۆڕایی لە ئیماراتەوە بۆ عێراق', d: 'گەیاندن تا بەردەم دەرگا لە {feeKrd} دینارەوە' },
      { t: 'گومرگ لەسەر ئێمەیە', d: 'هیچ تێچوویەکی شاراوە نییە' },
      { t: '{days} ڕۆژ', d: 'ماوەی خەمڵێنراوی گەیاندن' },
      { t: 'پارەدان لە کاتی وەرگرتن', d: 'بێ پێشەکی تا {threshold}' }
    ],
    trust: ['خزمەتگوزاریی سەربەخۆ', 'ئۆفیسی ڕاستەقینە لە هەولێر', 'گەیاندن بۆ هەموو عێراق', 'پارەدان لە کاتی وەرگرتن'],
    whyKicker: 'بۆچی ڤێلینا؟',
    whyTitle: 'شۆپینگی SHEIN، بە ئاسانی و دڵنیایی',
    whySub: 'هەموو شتێک ڕوون و ئاشکرایە، لە نرخەوە تا گەیاندن.',
    why: [
      { t: 'نرخی تایبەت', d: 'دۆلار بە نرخی تایبەتی {rate} دینار حیساب دەکەین.' },
      { t: 'هەموو داشکاندنەکانی SHEIN', d: 'هەموو ئەو داشکاندنانەی لە کاتی کڕیندا بەردەستن، بۆ داواکارییەکەت جێبەجێ دەکرێن.' },
      { t: 'ناردنی بەخۆڕایی لە ئیماراتەوە بۆ عێراق', d: 'گەیاندن تا بەردەم دەرگا تەنها لە {feeKrd} دینارەوە.' },
      { t: 'گومرگ لەسەر ئێمە', d: 'ڕاییکردنی گومرگی لەسەر ئێمەیە، بێ هیچ تێچوویەکی شاراوە.' },
      { t: 'پارەدان لە کاتی وەرگرتن', d: 'بۆ داواکارییەکانی تا {threshold} هیچ پێشەکییەک نادەیت.' },
      { t: 'ئۆفیسی ڕاستەقینە لە هەولێر', d: 'بە خۆشحاڵییەوە پێشوازیت لێدەکەین: {address}.' }
    ],
    howKicker: 'چۆن کار دەکات',
    howTitle: 'تەنها چوار هەنگاوی ئاسان',
    howSub: 'لە هەڵبژاردنەوە تا وەرگرتن، ئێمە لەگەڵتین.',
    steps: [
      { t: 'کاڵاکان لە SHEIN هەڵبژێرە', d: 'ئەوەی بەدڵتە بیخە ناو سەبەتەکەت لە ئەپ یان ماڵپەڕی SHEIN.' },
      { t: 'سەبەتەکەت لە واتسئاپ بنێرە', d: 'لینک یان سکرینشۆت بنێرە، لەگەڵ قەبارە و ڕەنگ.' },
      { t: 'نرخی کۆتایی و بەردەستبوون پشتڕاست دەکەینەوە', d: 'ئەگەر کاڵایەک نەمابوو، لادەبرێت و بە سکرینشۆت پیشانت دەدەین.' },
      { t: 'تا بەردەم دەرگاکەت', d: 'داواکارییەکەت دەگاتە دەستت و لە کاتی وەرگرتن پارە دەدەیت.' }
    ],
    howMore: 'هەموو قۆناغەکان ببینە',
    catKicker: 'چی دەکڕین',
    catTitle: 'هەرچی دڵت بیەوێت',
    catSub: 'جلوبەرگی ئافرەتان، منداڵان، جانتا و ئیکسسوارات، هەمووی لە SHEIN.',
    cats: [
      { t: 'جلوبەرگی ئافرەتان', d: 'جلی ڕۆژانە، ئێواران و وەرزی' },
      { t: 'منداڵان و کۆرپە', d: 'جلی نەرم و ڕەنگاوڕەنگ بۆ بچووکەکانت' },
      { t: 'جانتا', d: 'جانتای دەست، شان و پشت' },
      { t: 'ئیکسسوارات', d: 'خشڵ، کەمەربەند و وردەکاریی جوان' }
    ],
    calcKicker: 'ژمێرەری نرخ',
    calcTitle: 'پێش داواکردن، نرخەکەت بزانە',
    calcSub: 'کۆی سەبەتەکەت بە دۆلار بنووسە و ناوچەکەت هەڵبژێرە.',
    calcUsdLabel: 'کۆی SHEIN بە دۆلار',
    calcUsdPh: 'بۆ نموونە 85',
    calcAreaLabel: 'ناوچەی گەیاندن',
    areaKrd: 'هەرێمی کوردستان',
    areaIraq: 'شارێکی تری عێراق',
    calcItems: 'کاڵاکان (دۆلار × نرخ)',
    calcShipping: 'ناردن لە ئیماراتەوە بۆ عێراق',
    calcFree: 'بەخۆڕایی',
    calcCustoms: 'ڕاییکردنی گومرگی',
    calcOnUs: 'لەسەر ئێمە',
    calcDelivery: 'گەیاندن تا بەردەم دەرگا',
    calcTotal: 'کۆی گشتی',
    calcPrepay: 'پێشەکی {prepay}',
    calcOnDelivery: 'لە کاتی وەرگرتن',
    calcPrepayNote: 'داواکارییەکانی سەرووی {threshold}: {prepay} پێشەکی، {rest} لە کاتی وەرگرتن.',
    calcNote: 'نرخی کۆتایی پێش کڕین لە واتسئاپ پشتڕاست دەکرێتەوە.',
    calcBtn: 'ئەم وردەکارییە لە واتسئاپ بنێرە',
    currency: 'دینار',
    waCalc: 'سڵاو ڤێلینا شۆپینگ 🌸 دەمەوێت لە SHEIN داوا بکەم | کۆی SHEIN: {usd}$ | ناوچە: {area} | کاڵاکان: {items} دینار | گەیاندن تا دەرگا: {delivery} دینار | کۆی گشتی: {total} دینار',
    waCalcPrepay: ' | پێشەکی 25%: {pre} دینار | لە کاتی وەرگرتن: {rest} دینار',
    feesKicker: 'تێچووەکان',
    feesTitle: 'تێچووی ڕوون، بێ سەرسوڕمان',
    feesSub: 'ئەوەی دەیدەیت، پێشوەختە دەیزانیت.',
    fees: [
      { t: 'ناردنی نێودەوڵەتی لە ئیماراتەوە بۆ عێراق', v: 'بەخۆڕایی' },
      { t: 'گەیاندن تا دەرگا – هەرێمی کوردستان', v: '{feeKrd} دینار' },
      { t: 'گەیاندن تا دەرگا – شارەکانی تری عێراق', v: '{feeIraq} دینار' },
      { t: 'ڕاییکردنی گومرگی', v: 'لەسەر ڤێلینا شۆپینگ' }
    ],
    feesNote: 'هیچ تێچوویەکی شاراوەی تر نییە.',
    feesLink: 'سیاسەتی ناردن بخوێنەوە',
    sizeKicker: 'ڕێبەری قەبارە',
    sizeTitle: 'قەبارەی گونجاوی خۆت بدۆزەوە',
    sizeSub: 'خشتەیەکی نزیکەیی بۆ ئەوەی بە دڵنیاییەوە هەڵبژێریت.',
    sizeWomenTitle: 'ئافرەتان',
    sizeCols: ['قەبارە', 'سنگ (سم)', 'کەمەر (سم)', 'سمت (سم)'],
    sizeKidsTitle: 'منداڵان',
    kidsCols: ['تەمەن', 'باڵا (سم)'],
    kidsAges: ['0–3 مانگ', '3–6 مانگ', '6–9 مانگ', '9–12 مانگ', '12–18 مانگ', '18–24 مانگ', '2–3 ساڵ', '3–4 ساڵ', '4–5 ساڵ', '5–6 ساڵ', '7–8 ساڵ', '9–10 ساڵ'],
    sizeNote: 'قەبارەکان نزیکەیین – هەمیشە خشتەی قەبارەی هەر کاڵایەک لە پەڕەکەی لە SHEIN بپشکنە.',
    sizeAsk: 'دڵنیا نیت لە قەبارەکەت؟ نامەمان بۆ بنێرە.',
    sizeAskBtn: 'دەربارەی قەبارەکەم بپرسە',
    revKicker: 'ڕای کڕیاران',
    revTitle: 'کڕیارەکانمان چی دەڵێن',
    revSub: 'ئەزموونی کڕیارەکانمان لەگەڵ ڤێلینا شۆپینگ.',
    revTag: 'نموونە – بە ڕایەکی ڕاستەقینە بگۆڕدرێت',
    revName: '[ناو]',
    revCity: '[شار]',
    revText: '[ڕای کڕیار]',
    revMore: 'ڕای ڕاستەقینەی کڕیاران لە ئینستاگرامەکەمان ببینە',
    faqKicker: 'پرسیارە باوەکان',
    faqTitle: 'وەڵامی پرسیارەکانت',
    faqSub: 'ئەگەر وەڵامەکەت نەدۆزییەوە، لە [واتسئاپ](whatsapp) پەیوەندیمان پێوە بکە.',
    faq: [
      ['نرخی دۆلار چەندە؟', 'نرخی تایبەتی ئێمە {rate} دینارە ({rate100} دینار). نرخەکە لەوانەیە بگۆڕێت، بەڵام ئەو کۆی گشتییەی تۆ پشتڕاستی دەکەیتەوە، کۆتاییە.'],
      ['چۆن پارە بدەم؟', 'تەنها بە نەختینە لە کاتی وەرگرتن. بۆ داواکارییەکانی تا {threshold} هیچ پێشەکییەک پێویست نییە.'],
      ['ئەگەر داواکارییەکەم لە {threshold} زیاتر بێت؟', '{prepay}ی کۆی گشتی پێشەکی دەدەیت و {rest}ی ماوە لە کاتی وەرگرتن بە نەختینە دەدەیت. پێشەکی تەنها لە ڕێگەی کەناڵە فەرمییەکانمانەوە داوا دەکرێت.'],
      ['گەیاندن چەند دەخایەنێت؟', 'نزیکەی {days} ڕۆژ. ئەمە خەمڵاندنە و گەرەنتی نییە؛ لەوانەیە گومرگ، گەشتە ئاسمانییەکان، پشووەکان یان کەشوهەوا کاری تێبکەن.'],
      ['تێچووی گەیاندن چەندە؟', 'ناردن لە ئیماراتەوە بۆ عێراق بەخۆڕاییە. گەیاندن تا بەردەم دەرگا لە هەرێمی کوردستان {feeKrd} دینار و لە شارەکانی تری عێراق {feeIraq} دینارە.'],
      ['ئایا باجی گومرگ دەدەم؟', 'نەخێر. ڕاییکردنی گومرگی لەسەر ڤێلینا شۆپینگە و هیچ تێچوویەکی شاراوە نییە.'],
      ['ئەگەر کاڵایەک نەمابێت چی دەبێت؟', 'لە داواکارییەکە لادەبرێت، بە سکرینشۆت ئاگادارت دەکەینەوە و نرخەکە بەپێی ئەوە ڕێک دەخرێتەوە.'],
      ['ئەگەر قەبارەکە نەگونجا چی بکەم؟', 'ئەگەر کاڵاکە بەکارنەهاتبێت، نەشۆرابێت و تاگ و پاکەتە ڕەسەنەکەی پێوە بێت، پارەکەت دەگەڕێنینەوە. بۆ وردەکاری سەیری [گەڕاندنەوە و پارەگەڕاندنەوە](returns.html) بکە.'],
      ['دەتوانم داواکارییەکەم هەڵبوەشێنمەوە؟', 'بەڵێ، پێش ئەوەی بیکڕین هەڵوەشاندنەوە بێ هیچ تێچوویەکە. دوای کڕین گەرەنتی نییە و بەپێی هەر حاڵەتێک هەوڵ دەدەین.'],
      ['چۆن سەبەتەکەم بنێرم؟', 'لینکی کاڵاکان یان سکرینشۆت لە [واتسئاپ](whatsapp) بۆمان بنێرە، لەگەڵ قەبارە و ڕەنگی هەر کاڵایەک.']
    ],
    locKicker: 'شوێنمان',
    locTitle: 'سەردانی ئۆفیسەکەمان بکە لە هەولێر',
    locSub: 'بە خۆشحاڵییەوە پێشوازیت لێدەکەین: {address}. کاتەکانی کار: {hours}.'
  },

  ar: {
    meta: { title: 'Velina Shopping | تسوّق من SHEIN في أربيل والعراق', desc: 'اطلبي منتجات SHEIN المفضلة في أربيل وكردستان وكل العراق. سعر خاص {rate} دينار، الجمارك علينا، والدفع عند الاستلام.' },
    heroKicker: 'خدمة تسوّق شخصي مستقلة',
    heroTitleA: 'منتجاتكِ المفضلة من SHEIN،',
    heroTitleB: 'حتى باب بيتكِ',
    heroSub: 'أرسلي سلّتكِ عبر واتساب، ونحن نشتريها لكِ ونشحنها من الإمارات ونوصلها إلى بابكِ. وتُطبَّق جميع خصومات SHEIN المتاحة وقت الشراء.',
    rateLabel: 'سعرنا الخاص',
    rateSub: '{rate100} دينار',
    ctaOrder: 'اطلبي عبر واتساب',
    ctaHow: 'كيف تعمل الخدمة؟',
    stats: [
      { t: 'شحن مجاني من الإمارات إلى العراق', d: 'التوصيل إلى الباب يبدأ من {feeKrd} دينار' },
      { t: 'الجمارك علينا', d: 'بدون أي رسوم مخفية' },
      { t: '{days} يوماً', d: 'مدة التوصيل التقديرية' },
      { t: 'الدفع عند الاستلام', d: 'بدون دفع مسبق حتى {threshold}' }
    ],
    trust: ['خدمة مستقلة', 'مكتب حقيقي في أربيل', 'توصيل إلى كل العراق', 'الدفع عند الاستلام'],
    whyKicker: 'لماذا ڤيلينا؟',
    whyTitle: 'تسوّق SHEIN بسهولة وراحة بال',
    whySub: 'كل شيء واضح وشفاف، من السعر حتى التوصيل.',
    why: [
      { t: 'سعر خاص', d: 'نحسب الدولار بسعرنا الخاص {rate} دينار.' },
      { t: 'جميع خصومات SHEIN', d: 'نطبّق على طلبكِ جميع الخصومات المتاحة وقت الشراء.' },
      { t: 'شحن مجاني من الإمارات إلى العراق', d: 'والتوصيل إلى الباب يبدأ من {feeKrd} دينار فقط.' },
      { t: 'الجمارك علينا', d: 'نتكفّل بالتخليص الجمركي بالكامل، بدون أي رسوم مخفية.' },
      { t: 'الدفع عند الاستلام', d: 'لا دفع مسبق للطلبات حتى {threshold}.' },
      { t: 'مكتب حقيقي في أربيل', d: 'يسعدنا استقبالكِ في مكتبنا: {address}.' }
    ],
    howKicker: 'كيف تعمل الخدمة',
    howTitle: 'أربع خطوات بسيطة فقط',
    howSub: 'من الاختيار حتى الاستلام، نحن معكِ في كل خطوة.',
    steps: [
      { t: 'اختاري منتجاتكِ من SHEIN', d: 'أضيفي ما يعجبكِ إلى السلّة في تطبيق أو موقع SHEIN.' },
      { t: 'أرسلي سلّتكِ عبر واتساب', d: 'أرسلي الروابط أو لقطات الشاشة مع المقاس واللون.' },
      { t: 'نؤكد السعر النهائي والتوفّر', d: 'المنتجات النافدة تُحذف من الطلب ونُريكِ إياها بلقطات شاشة.' },
      { t: 'حتى باب بيتكِ', d: 'يصلكِ طلبكِ وتدفعين عند الاستلام.' }
    ],
    howMore: 'شاهدي الخطوات كاملة',
    catKicker: 'ماذا نشتري لكِ',
    catTitle: 'كل ما يحبه قلبكِ',
    catSub: 'أزياء نسائية، ملابس أطفال، حقائب وإكسسوارات، كلها من SHEIN.',
    cats: [
      { t: 'أزياء نسائية', d: 'إطلالات يومية وسهرات وموسمية' },
      { t: 'الأطفال والرضّع', d: 'ملابس ناعمة وملوّنة لصغاركِ' },
      { t: 'حقائب', d: 'حقائب يد وكتف وظهر' },
      { t: 'إكسسوارات', d: 'مجوهرات وأحزمة ولمسات أنيقة' }
    ],
    calcKicker: 'حاسبة السعر',
    calcTitle: 'اعرفي السعر قبل الطلب',
    calcSub: 'أدخلي مجموع سلّتكِ بالدولار واختاري منطقتكِ.',
    calcUsdLabel: 'مجموع SHEIN بالدولار',
    calcUsdPh: 'مثلاً 85',
    calcAreaLabel: 'منطقة التوصيل',
    areaKrd: 'إقليم كردستان',
    areaIraq: 'مدينة عراقية أخرى',
    calcItems: 'المنتجات (الدولار × السعر)',
    calcShipping: 'الشحن من الإمارات إلى العراق',
    calcFree: 'مجاناً',
    calcCustoms: 'التخليص الجمركي',
    calcOnUs: 'علينا',
    calcDelivery: 'التوصيل إلى الباب',
    calcTotal: 'المجموع',
    calcPrepay: 'دفع مسبق {prepay}',
    calcOnDelivery: 'عند الاستلام',
    calcPrepayNote: 'الطلبات فوق {threshold}: {prepay} مقدماً، و{rest} عند الاستلام.',
    calcNote: 'يُؤكَّد السعر النهائي عبر واتساب قبل الشراء.',
    calcBtn: 'أرسلي هذا التفصيل عبر واتساب',
    currency: 'دينار',
    waCalc: 'مرحباً ڤيلينا شوبينغ 🌸 أودّ الطلب من SHEIN | مجموع SHEIN: {usd}$ | المنطقة: {area} | المنتجات: {items} دينار | التوصيل إلى الباب: {delivery} دينار | المجموع: {total} دينار',
    waCalcPrepay: ' | دفع مسبق 25%: {pre} دينار | عند الاستلام: {rest} دينار',
    feesKicker: 'الرسوم',
    feesTitle: 'رسوم واضحة بلا مفاجآت',
    feesSub: 'تعرفين مسبقاً كل ما ستدفعينه.',
    fees: [
      { t: 'الشحن الدولي من الإمارات إلى العراق', v: 'مجاناً' },
      { t: 'التوصيل إلى الباب – إقليم كردستان', v: '{feeKrd} دينار' },
      { t: 'التوصيل إلى الباب – باقي المدن العراقية', v: '{feeIraq} دينار' },
      { t: 'التخليص الجمركي', v: 'على حساب ڤيلينا شوبينغ' }
    ],
    feesNote: 'لا توجد أي رسوم مخفية أخرى.',
    feesLink: 'اقرئي سياسة الشحن',
    sizeKicker: 'دليل المقاسات',
    sizeTitle: 'اعثري على مقاسكِ المناسب',
    sizeSub: 'جدول تقريبي يساعدكِ على الاختيار بثقة.',
    sizeWomenTitle: 'النساء',
    sizeCols: ['المقاس', 'الصدر (سم)', 'الخصر (سم)', 'الورك (سم)'],
    sizeKidsTitle: 'الأطفال',
    kidsCols: ['العمر', 'الطول (سم)'],
    kidsAges: ['0–3 أشهر', '3–6 أشهر', '6–9 أشهر', '9–12 شهراً', '12–18 شهراً', '18–24 شهراً', '2–3 سنوات', '3–4 سنوات', '4–5 سنوات', '5–6 سنوات', '7–8 سنوات', '9–10 سنوات'],
    sizeNote: 'المقاسات تقريبية – تحقّقي دائماً من جدول المقاسات في صفحة كل منتج على SHEIN.',
    sizeAsk: 'لستِ متأكدة من مقاسكِ؟ راسلينا.',
    sizeAskBtn: 'اسألي عن مقاسي',
    revKicker: 'آراء الزبائن',
    revTitle: 'ماذا يقول زبائننا',
    revSub: 'تجارب زبائننا مع ڤيلينا شوبينغ.',
    revTag: 'مثال – يُستبدل برأي حقيقي',
    revName: '[الاسم]',
    revCity: '[المدينة]',
    revText: '[رأي الزبون]',
    revMore: 'شاهدي آراء الزبائن الحقيقية على إنستغرام',
    faqKicker: 'الأسئلة الشائعة',
    faqTitle: 'إجابات لأسئلتكِ',
    faqSub: 'لم تجدي إجابتكِ؟ تواصلي معنا عبر [واتساب](whatsapp).',
    faq: [
      ['ما هو سعر الدولار لديكم؟', 'سعرنا الخاص {rate} دينار ({rate100} دينار). قد يتغيّر السعر، لكن المجموع الذي تؤكدينه هو المجموع النهائي.'],
      ['كيف أدفع؟', 'الدفع نقداً عند الاستلام فقط. لا حاجة لأي دفع مسبق للطلبات حتى {threshold}.'],
      ['ماذا لو تجاوز طلبي {threshold}؟', 'تدفعين {prepay} من المجموع مقدماً، و{rest} المتبقية نقداً عند الاستلام. ولا نطلب الدفع المسبق إلا عبر قنواتنا الرسمية.'],
      ['كم تستغرق مدة التوصيل؟', 'حوالي {days} يوماً. هذه مدة تقديرية وليست مضمونة، فقد تتأثر بالجمارك أو الرحلات الجوية أو العطل أو الطقس.'],
      ['كم رسوم التوصيل؟', 'الشحن من الإمارات إلى العراق مجاني. أما التوصيل إلى الباب فهو {feeKrd} دينار في إقليم كردستان و{feeIraq} دينار في باقي المدن العراقية.'],
      ['هل أدفع الجمارك؟', 'لا. التخليص الجمركي على حساب ڤيلينا شوبينغ، ولا توجد أي رسوم مخفية.'],
      ['ماذا يحدث إذا نفد منتج ما؟', 'يُحذف من الطلب ونُبلغكِ بلقطات شاشة، ويُعدَّل السعر بناءً على ذلك.'],
      ['ماذا لو لم يناسبني المقاس؟', 'يمكن استرداد المبلغ إذا كان المنتج غير مستخدم وغير مغسول، مع البطاقات والتغليف الأصلي. للتفاصيل راجعي [الإرجاع والاسترداد](returns.html).'],
      ['هل يمكنني إلغاء طلبي؟', 'نعم، الإلغاء بدون أي تكلفة قبل أن نشتري الطلب. بعد الشراء لا يكون الإلغاء مضموناً، وننظر في كل حالة على حدة.'],
      ['كيف أرسل سلّتي؟', 'أرسلي روابط المنتجات أو لقطات الشاشة عبر [واتساب](whatsapp)، مع مقاس ولون كل منتج.']
    ],
    locKicker: 'موقعنا',
    locTitle: 'زوري مكتبنا في أربيل',
    locSub: 'يسعدنا استقبالكِ: {address}. ساعات العمل: {hours}.'
  },

  en: {
    meta: { title: 'Velina Shopping | SHEIN Personal Shopping in Iraq', desc: 'Get your SHEIN favorites in Erbil, Kurdistan & all of Iraq. Special rate {rate} IQD, customs on us, cash on delivery.' },
    heroKicker: 'Independent personal-shopping service',
    heroTitleA: 'Your favorite SHEIN finds,',
    heroTitleB: 'delivered to your door',
    heroSub: 'Send us your basket on WhatsApp – we buy it for you, ship it from the UAE and bring it to your door. All SHEIN discounts available at purchase time are applied.',
    rateLabel: 'Our special rate',
    rateSub: '{rate100} IQD',
    ctaOrder: 'Order on WhatsApp',
    ctaHow: 'How it works',
    stats: [
      { t: 'Free shipping UAE → Iraq', d: 'Door delivery from {feeKrd} IQD' },
      { t: 'Customs on us', d: 'No hidden fees' },
      { t: '{days} days', d: 'Estimated delivery time' },
      { t: 'Cash on delivery', d: 'No prepayment up to {threshold}' }
    ],
    trust: ['Independent service', 'Real office in Erbil', 'Delivery to all Iraq', 'Cash on delivery'],
    whyKicker: 'Why Velina',
    whyTitle: 'SHEIN shopping, made easy',
    whySub: 'Clear and honest from price to delivery – no surprises.',
    why: [
      { t: 'Special rate', d: 'We count every dollar at our special rate of {rate} IQD.' },
      { t: 'All SHEIN discounts', d: 'Every discount available at purchase time is applied to your order.' },
      { t: 'Free shipping UAE → Iraq', d: 'Door delivery starts from just {feeKrd} IQD.' },
      { t: 'Customs on us', d: 'We cover customs clearance – no hidden fees.' },
      { t: 'Cash on delivery', d: 'No prepayment for orders up to {threshold}.' },
      { t: 'Real office in Erbil', d: 'Come say hello at {address}.' }
    ],
    howKicker: 'How it works',
    howTitle: 'Just four easy steps',
    howSub: 'From picking to unboxing, we’re with you all the way.',
    steps: [
      { t: 'Choose items in SHEIN', d: 'Add what you love to your basket in the SHEIN app or website.' },
      { t: 'Send your basket on WhatsApp', d: 'Share links or screenshots with size and colour.' },
      { t: 'We confirm the final price & stock', d: 'Sold-out items are removed and shown to you with screenshots.' },
      { t: 'Delivered to your door', d: 'Your order arrives and you pay on delivery.' }
    ],
    howMore: 'See the full process',
    catKicker: 'What we shop',
    catTitle: 'Everything you love',
    catSub: 'Women’s fashion, kids’ clothes, bags and accessories – all from SHEIN.',
    cats: [
      { t: 'Women’s fashion', d: 'Everyday, evening and seasonal looks' },
      { t: 'Kids & baby', d: 'Soft, colourful outfits for your little ones' },
      { t: 'Bags', d: 'Handbags, shoulder bags and backpacks' },
      { t: 'Accessories', d: 'Jewellery, belts and pretty finishing touches' }
    ],
    calcKicker: 'Price calculator',
    calcTitle: 'Know your price before you order',
    calcSub: 'Enter your SHEIN basket total in USD and pick your area.',
    calcUsdLabel: 'SHEIN total in USD',
    calcUsdPh: 'e.g. 85',
    calcAreaLabel: 'Delivery area',
    areaKrd: 'Kurdistan Region',
    areaIraq: 'Other Iraqi city',
    calcItems: 'Items (USD × rate)',
    calcShipping: 'Shipping UAE → Iraq',
    calcFree: 'Free',
    calcCustoms: 'Customs clearance',
    calcOnUs: 'On us',
    calcDelivery: 'Door delivery',
    calcTotal: 'Total',
    calcPrepay: 'Prepayment {prepay}',
    calcOnDelivery: 'On delivery',
    calcPrepayNote: 'Orders above {threshold}: {prepay} in advance, {rest} on delivery.',
    calcNote: 'Final price is confirmed on WhatsApp before we purchase.',
    calcBtn: 'Send this breakdown on WhatsApp',
    currency: 'IQD',
    waCalc: 'Hello Velina Shopping 🌸 I’d like to order from SHEIN | SHEIN total: {usd}$ | Area: {area} | Items: {items} IQD | Door delivery: {delivery} IQD | Total: {total} IQD',
    waCalcPrepay: ' | Prepayment 25%: {pre} IQD | On delivery: {rest} IQD',
    feesKicker: 'Fees',
    feesTitle: 'Clear fees, no surprises',
    feesSub: 'You know exactly what you pay before you order.',
    fees: [
      { t: 'International shipping UAE → Iraq', v: 'Free' },
      { t: 'Door delivery – Kurdistan Region', v: '{feeKrd} IQD' },
      { t: 'Door delivery – other Iraqi cities', v: '{feeIraq} IQD' },
      { t: 'Customs clearance', v: 'Paid by Velina Shopping' }
    ],
    feesNote: 'No other hidden fees.',
    feesLink: 'Read our shipping policy',
    sizeKicker: 'Size guide',
    sizeTitle: 'Find your perfect fit',
    sizeSub: 'An approximate chart to help you choose with confidence.',
    sizeWomenTitle: 'Women',
    sizeCols: ['Size', 'Bust (cm)', 'Waist (cm)', 'Hip (cm)'],
    sizeKidsTitle: 'Kids',
    kidsCols: ['Age', 'Height (cm)'],
    kidsAges: ['0–3 months', '3–6 months', '6–9 months', '9–12 months', '12–18 months', '18–24 months', '2–3 years', '3–4 years', '4–5 years', '5–6 years', '7–8 years', '9–10 years'],
    sizeNote: 'Sizes are approximate – always check the size chart on each SHEIN product page.',
    sizeAsk: 'Not sure about your size? Message us.',
    sizeAskBtn: 'Ask about my size',
    revKicker: 'Reviews',
    revTitle: 'What our customers say',
    revSub: 'Experiences from Velina Shopping customers.',
    revTag: 'Placeholder – replace with a real review',
    revName: '[Name]',
    revCity: '[City]',
    revText: '[Feedback]',
    revMore: 'See real customer feedback on our Instagram',
    faqKicker: 'FAQ',
    faqTitle: 'Your questions, answered',
    faqSub: 'Can’t find your answer? Message us on [WhatsApp](whatsapp).',
    faq: [
      ['What rate do you use?', 'Our special rate is {rate} IQD ({rate100} IQD). The rate may change, but the total you confirm is final.'],
      ['How do I pay?', 'Cash on delivery only. No prepayment is needed for orders up to {threshold}.'],
      ['What if my order is over {threshold}?', 'You pay {prepay} of the total in advance and the remaining {rest} in cash on delivery. Prepayment is only ever requested through our official channels.'],
      ['How long does delivery take?', 'About {days} days. This is an estimate, not a guarantee – customs, flights, holidays or weather can affect it.'],
      ['How much is delivery?', 'Shipping from the UAE to Iraq is free. Door delivery is {feeKrd} IQD in the Kurdistan Region and {feeIraq} IQD in other Iraqi cities.'],
      ['Do I pay customs?', 'No. Customs clearance is paid by Velina Shopping, and there are no hidden fees.'],
      ['What if an item is sold out?', 'It’s removed from your order, we show you with screenshots, and the price is adjusted.'],
      ['What if the size doesn’t fit?', 'You can get a refund if the item is unused, unwashed and has its original tags and packaging. See [Returns & Refunds](returns.html) for details.'],
      ['Can I cancel my order?', 'Yes – cancelling is free of charge before we purchase. After purchase it isn’t guaranteed; we handle it case by case.'],
      ['How do I send my basket?', 'Send product links or screenshots on [WhatsApp](whatsapp), with the size and colour of each item.']
    ],
    locKicker: 'Location',
    locTitle: 'Visit our office in Erbil',
    locSub: 'We’d love to welcome you at {address}. Opening hours: {hours}.'
  }
};

/* ------------------------------------------------------------------ pages */
/* ============================ ABOUT ============================ */
I18N.about = {
  ku: {
    meta: { title: 'دەربارەی ئێمە | ڤێلینا شۆپینگ', desc: '{name} خزمەتگوزارییەکی سەربەخۆی کڕینی کەسییە: لە SHEIN هەڵبژێرە، سەبەتەکەت بە واتسئاپ بنێرە، ئێمە تا بەردەم دەرگاکەت لە هەموو عێراق دەیگەیەنین.' },
    kicker: 'دەربارەی ئێمە',
    h1: 'کڕین لە SHEIN، ئاسان و دڵنیا، بۆ تۆ و خێزانەکەت',
    lead: '{name} خزمەتگوزارییەکی سەربەخۆی کڕینی کەسییە لە هەولێر. تۆ هەڵدەبژێریت، ئێمە هەموو کارەکانی تر دەکەین، تا پارچەکانت دەگەنە بەردەم دەرگاکەت.',
    storyTitle: 'چیرۆکی ئێمە',
    story: [
      'زۆربەی ئافرەتان و خێزانەکان لە عێراق و هەرێمی کوردستان حەز دەکەن لە SHEIN بکڕن، بەڵام کارتی بانکی، ناردنی نێودەوڵەتی و گومرگ کارەکە قورس دەکەن. {name} بۆ ئەوە دروست بوو کە ئەم ڕێگایە ئاسان، ڕوون و دڵنیا بکات.',
      'ڕێگاکەمان سادەیە: تۆ پارچەکانت لە ئەپ یان ماڵپەڕی SHEIN هەڵدەبژێریت و سەبەتەکەت بە واتسئاپ بۆمان دەنێریت. ئێمە نرخ و بەردەستبوون دەپشکنین، بە ناوی تۆوە دەیکڕین، لە ئیماراتەوە دەینێرین و تا بەردەم دەرگاکەت لە هەر شوێنێکی عێراق دەیگەیەنین.',
      'هەموو هەنگاوێک بە ڕوونی پێت دەڵێین: پێش ئەوەی داواکارییەکەت پشتڕاست بکەیتەوە کۆی گشتی بە دینار دەبینیت، و پارەش لە کاتی وەرگرتندا دەدەیت. ئامانجمان ئەوەیە هەست بە ئاسوودەیی بکەیت لە سەرەتاوە تا کردنەوەی پاکەتەکەت.'
    ],
    missionTitle: 'ئامانجمان',
    mission: 'دەمانەوێت هەر ئافرەتێک و هەر خێزانێک لە عێراق و هەرێمی کوردستان بتوانێت بە ئاسانی و بە متمانەوە جلوبەرگ و پێداویستییە دڵخوازەکانی لە SHEIN بەدەست بهێنێت، بە نرخی ڕوون، خزمەتگوزاریی گەرم و گەیاندن تا بەردەم دەرگا.',
    trustTitle: 'بۆچی متمانەمان پێ دەکەیت',
    trust: [
      { t: 'نووسینگەی ڕاستەقینە لە هەولێر', d: 'نووسینگەیەکی ڕاستەقینەمان هەیە لە {address}، دەتوانیت سەردانمان بکەیت.' },
      { t: 'پارەدان لە کاتی وەرگرتن', d: 'بۆ داواکارییەکان تا {threshold} هیچ پارەیەکی پێشوەختە نادەیت؛ پارە لە کاتی وەرگرتندا دەدەیت.' },
      { t: 'گومرگ لەسەر ئێمەیە', d: 'تێچووی گومرگ بە تەواوی لەسەر {name}ـە؛ تۆ هەرگیز گومرگ نادەیت و هیچ تێچوویەکی شاراوە نییە.' },
      { t: 'نرخی ڕوون', d: 'نرخی دۆلار {rate} دینارە، هەموو تێچووەکان پێش پشتڕاستکردنەوە نیشان دەدرێن، و هەموو داشکاندنەکانی SHEIN کە لە کاتی کڕیندا بەردەستن جێبەجێ دەکرێن.' },
      { t: 'پارچەی نەماو بە وێنە نیشان دەدرێت', d: 'ئەگەر پارچەیەک نەمابوو، لە داواکارییەکەت لادەبرێت، بە سکرینشۆت پێت ڕادەگەیەنین و نرخەکە ڕێک دەخەینەوە.' }
    ],
    offerTitle: 'چی بۆت دەهێنین',
    offer: [
      { t: 'جلوبەرگی ئافرەتان', d: 'کراس، بلوز، پانتۆڵ و ستایلی ڕۆژانە و بۆنەکان.' },
      { t: 'منداڵ و کۆرپە', d: 'جلی جوان و نەرم بۆ منداڵان و کۆرپەکان.' },
      { t: 'جانتا', d: 'جانتای دەست، شان و پشت بۆ هەموو ڕۆژێک.' },
      { t: 'ئێکسسوار', d: 'خشڵ، کەمەربەند و وردەکارییە جوانەکان.' }
    ],
    independenceTitle: 'سەربەخۆیی',
    independence: '{name} خزمەتگوزارییەکی سەربەخۆی کڕینی کەسییە. ئێمە SHEIN نین، و هاوبەش، فرۆشیار، بریکار یان فرۆشگای فەرمیی SHEIN نین. «SHEIN» نیشانەیەکی بازرگانیی خاوەنەکەیەتی و تەنها بۆ ئەوە بەکاری دەهێنین کە ڕوونی بکەینەوە لە کوێوە دەکڕین.',
    ctaTitle: 'ئامادەیت سەبەتەکەت بنێریت؟',
    ctaText: 'پارچە دڵخوازەکانت لە SHEIN هەڵبژێرە و بە واتسئاپ بۆمانی بنێرە، ئێمە باقی کارەکان دەکەین.',
    ctaBtn: 'ناردنی سەبەتە بە واتسئاپ'
  },
  ar: {
    meta: { title: 'من نحن | ڤيلينا شوبينغ', desc: '{name} خدمة تسوّق شخصي مستقلة: اختاري من SHEIN، أرسلي سلتك عبر واتساب، ونوصلها إلى باب بيتك في أي مكان في العراق.' },
    kicker: 'من نحن',
    h1: 'التسوّق من SHEIN بسهولة وأمان، لكِ ولعائلتك',
    lead: '{name} خدمة تسوّق شخصي مستقلة مقرّها أربيل. أنتِ تختارين، ونحن نتولّى كل ما تبقّى حتى تصل مشترياتك إلى باب بيتك.',
    storyTitle: 'قصتنا',
    story: [
      'كثير من النساء والعائلات في العراق وإقليم كوردستان يحببن التسوّق من SHEIN، لكن البطاقات البنكية والشحن الدولي والجمارك تجعل الأمر صعباً. وُلدت {name} لتجعل هذه التجربة سهلة وواضحة وآمنة.',
      'طريقتنا بسيطة: تختارين القطع من تطبيق أو موقع SHEIN وترسلين سلتك إلينا عبر واتساب. نتحقق من السعر والتوفّر، ونشتري نيابةً عنك، ونشحن الطلب من الإمارات، ثم نوصله إلى باب بيتك في أي مكان في العراق.',
      'نوضّح لكِ كل خطوة: ترين المبلغ النهائي بالدينار قبل أن تؤكدي طلبك، وتدفعين عند الاستلام. هدفنا أن تشعري بالراحة من لحظة الاختيار حتى فتح الطرد.'
    ],
    missionTitle: 'رسالتنا',
    mission: 'نريد أن تتمكن كل امرأة وكل عائلة في العراق وإقليم كوردستان من الحصول على ما تحبه من SHEIN بسهولة وثقة، بأسعار واضحة وخدمة ودودة وتوصيل حتى باب البيت.',
    trustTitle: 'لماذا تثقين بنا',
    trust: [
      { t: 'مكتب حقيقي في أربيل', d: 'لدينا مكتب حقيقي في {address}، ويمكنكِ زيارتنا.' },
      { t: 'الدفع عند الاستلام', d: 'لا دفع مسبق للطلبات حتى {threshold}؛ تدفعين نقداً عند الاستلام.' },
      { t: 'الجمارك علينا', d: 'رسوم التخليص الجمركي يتحملها {name} بالكامل؛ لا تدفعين أي جمارك ولا توجد رسوم مخفية.' },
      { t: 'أسعار واضحة', d: 'سعر الدولار {rate} دينار، وتظهر جميع الرسوم قبل تأكيدك، وتُطبَّق كل خصومات SHEIN المتاحة وقت الشراء.' },
      { t: 'القطع النافدة بلقطات شاشة', d: 'إذا نفدت قطعة نحذفها من الطلب، ونبلغكِ بلقطات شاشة، ونعدّل السعر.' }
    ],
    offerTitle: 'ماذا نوفّر لكِ',
    offer: [
      { t: 'أزياء نسائية', d: 'فساتين وبلوزات وبناطيل وإطلالات يومية وللمناسبات.' },
      { t: 'أطفال ورُضّع', d: 'ملابس ناعمة وجميلة للأطفال والرُضّع.' },
      { t: 'حقائب', d: 'حقائب يد وكتف وظهر لكل يوم.' },
      { t: 'إكسسوارات', d: 'مجوهرات وأحزمة وتفاصيل أنيقة.' }
    ],
    independenceTitle: 'استقلاليتنا',
    independence: '{name} خدمة تسوّق شخصي مستقلة. نحن لسنا SHEIN، ولسنا شريكاً أو موزعاً أو وكيلاً أو متجراً رسمياً لـ SHEIN. «SHEIN» علامة تجارية مملوكة لأصحابها، ونستخدمها فقط لتوضيح المكان الذي نشتري منه.',
    ctaTitle: 'جاهزة لإرسال سلتك؟',
    ctaText: 'اختاري قطعك المفضلة من SHEIN وأرسليها إلينا عبر واتساب، ونحن نتولّى الباقي.',
    ctaBtn: 'أرسلي سلتك عبر واتساب'
  },
  en: {
    meta: { title: 'About us | Velina Shopping', desc: '{name} is an independent personal-shopping service: choose on SHEIN, send your basket on WhatsApp and we deliver to your door anywhere in Iraq.' },
    kicker: 'About us',
    h1: 'SHEIN shopping made easy and safe, for you and your family',
    lead: '{name} is an independent personal-shopping service based in Erbil. You choose, we take care of everything else until your items reach your door.',
    storyTitle: 'Our story',
    story: [
      'Many women and families in Iraq and the Kurdistan Region love shopping on SHEIN, but bank cards, international shipping and customs make it complicated. {name} was created to make that experience easy, clear and safe.',
      'The way we work is simple: you choose your items on the SHEIN app or website and send us your basket on WhatsApp. We check price and stock, buy the items on your behalf, ship them from the UAE and deliver them to your door anywhere in Iraq.',
      'We keep every step transparent: you see the final total in IQD before you confirm, and you pay when your order arrives. Our goal is for you to feel relaxed from the moment you choose until you open your parcel.'
    ],
    missionTitle: 'Our mission',
    mission: 'We want every woman and every family in Iraq and the Kurdistan Region to get the SHEIN pieces they love easily and with confidence, with clear prices, warm service and delivery right to the door.',
    trustTitle: 'Why you can trust us',
    trust: [
      { t: 'A real office in Erbil', d: 'We have a real office at {address}, and you are welcome to visit us.' },
      { t: 'Cash on delivery', d: 'No prepayment for orders up to {threshold}; you pay in cash when your order arrives.' },
      { t: 'Customs on us', d: 'Customs clearance is fully paid by {name}; you never pay customs and there are no hidden fees.' },
      { t: 'Transparent pricing', d: 'The dollar rate is {rate} IQD, all fees are shown before you confirm, and all SHEIN discounts available at purchase time are applied.' },
      { t: 'Sold-out items shown with screenshots', d: 'If an item is sold out, we remove it from your order, show you with screenshots and adjust the price.' }
    ],
    offerTitle: 'What we bring you',
    offer: [
      { t: 'Women’s fashion', d: 'Dresses, tops, trousers and looks for every day and special occasions.' },
      { t: 'Kids & baby', d: 'Soft, lovely clothes for children and babies.' },
      { t: 'Bags', d: 'Handbags, shoulder bags and backpacks for every day.' },
      { t: 'Accessories', d: 'Jewellery, belts and pretty finishing touches.' }
    ],
    independenceTitle: 'Our independence',
    independence: '{name} is an independent personal-shopping service. We are not SHEIN, and we are not a SHEIN partner, reseller, agent or official store. “SHEIN” is a trademark of its owner and is used only to describe where we buy.',
    ctaTitle: 'Ready to send your basket?',
    ctaText: 'Choose your favourite pieces on SHEIN and send them to us on WhatsApp, we’ll take care of the rest.',
    ctaBtn: 'Send your basket on WhatsApp'
  }
};

/* ============================ HOW IT WORKS ============================ */
I18N.how = {
  ku: {
    meta: { title: 'چۆن کار دەکات | ڤێلینا شۆپینگ', desc: 'لە SHEIN هەڵبژێرە، سەبەتەکەت بە واتسئاپ بنێرە، نرخی کۆتایی پشتڕاست بکەرەوە و لە کاتی وەرگرتندا پارە بدە. ئاسان و ڕوون.' },
    kicker: 'چۆن کار دەکات',
    h1: 'چوار هەنگاوی سادە تا بەردەم دەرگاکەت',
    lead: 'پێویستت بە کارتی بانکی نییە. تەنها پارچەکانت هەڵبژێرە و بۆمانی بنێرە، ئێمە هەموو شتێکی تر ڕێک دەخەین.',
    steps: [
      { t: 'پارچەکانت لە SHEIN هەڵبژێرە', d: 'لە ئەپ یان ماڵپەڕی SHEIN پارچە دڵخوازەکانت زیاد بکە بۆ سەبەتە، و قەبارە (سایز) و ڕەنگ بە ڕوونی دیاری بکە.' },
      { t: 'سەبەتەکەت بە واتسئاپ بنێرە', d: 'لینکی سەبەتەکەت یان سکرینشۆتی ڕوون لە [واتسئاپ](whatsapp) بۆمان بنێرە.' },
      { t: 'نرخی کۆتایی و بەردەستبوون پشتڕاست دەکەینەوە', d: 'پارچە نەماوەکان لادەبەین و بە سکرینشۆت پێت نیشان دەدەین، کۆی گشتیی کۆتایی بە دینار بۆت دەنێرین، و داواکارییەکە تەنها دوای پشتڕاستکردنەوەی ڕوونی تۆ تۆمار دەکرێت.' },
      { t: 'تا بەردەم دەرگاکەت، پارە لە کاتی وەرگرتن', d: 'داواکارییەکەت تا بەردەم ماڵەکەت دەگات و پارە لە کاتی وەرگرتندا دەدەیت.' }
    ],
    basketTitle: 'چۆن سەبەتەکەت بە باشی بنێریت',
    basketTips: [
      'لینکی سەبەتەکەت بنێرە، یان سکرینشۆتی ڕوون و خوێندراوە.',
      'دڵنیا بە کە قەبارە و ڕەنگی هەر پارچەیەک دیارە.',
      'ناوی تەواو، ژمارەی مۆبایل، شار، ناونیشان و نزیکترین شوێنی ناسراو بنووسە.',
      'ئەگەر دڵنیا نیت لە قەبارە، پرسیارمان لێ بکە، بە خۆشحاڵییەوە یارمەتیت دەدەین.'
    ],
    afterTitle: 'دوای پشتڕاستکردنەوە چی ڕوو دەدات',
    after: [
      { t: 'لە SHEIN دەیکڕین', d: 'دوای پشتڕاستکردنەوەی تۆ، پارچەکان بە ناوی تۆوە لە SHEIN دەکڕین.' },
      { t: 'لە ئیماراتەوە بۆ عێراق', d: 'داواکارییەکەت لە ئیماراتەوە دەنێردرێت بۆ عێراق؛ ناردن لە ئیماراتەوە بۆ عێراق بەخۆڕاییە (گەیاندن تا بەردەم دەرگا لەناو عێراق بە پارەیە، لە {feeKrd} دینارەوە).' },
      { t: 'گومرگ لەسەر ئێمەیە', d: 'تێچووی گومرگ بە تەواوی لەسەر {name}ـە و تۆ هیچ گومرگێک نادەیت.' },
      { t: 'گەیاندن تا بەردەم دەرگا', d: 'لە ماوەی {days} ڕۆژدا دەگاتە بەردەم دەرگاکەت. کرێی گەیاندن: {feeKrd} دینار لە هەرێمی کوردستان، {feeIraq} دینار لە شارەکانی تری عێراق. گەیاندن {attempts} جار هەوڵ دەدرێت.' }
    ],
    payTitle: 'پارەدان',
    pay: [
      'پارەدان تەنها لە کاتی وەرگرتندایە. بۆ داواکارییەکان تا {threshold} هیچ پارەیەکی پێشوەختە نادەیت.',
      'بۆ داواکارییەکانی سەرووی {threshold}، {prepay}ی کۆی گشتی پێشوەختە تەنها لە ڕێگەی کەناڵە فەرمییەکانمانەوە دەدرێت، و {rest}ی ماوە لە کاتی وەرگرتندا.'
    ],
    ctaTitle: 'با دەست پێ بکەین',
    ctaText: 'سەبەتەکەت ئامادەیە؟ ئێستا بە واتسئاپ بۆمانی بنێرە.',
    ctaBtn: 'ناردنی سەبەتە بە واتسئاپ'
  },
  ar: {
    meta: { title: 'كيف نعمل | ڤيلينا شوبينغ', desc: 'اختاري من SHEIN، أرسلي سلتك عبر واتساب، أكّدي السعر النهائي وادفعي عند الاستلام. خطوات سهلة وواضحة.' },
    kicker: 'كيف نعمل',
    h1: 'أربع خطوات بسيطة حتى باب بيتك',
    lead: 'لا تحتاجين إلى بطاقة بنكية. فقط اختاري قطعك وأرسليها إلينا، ونحن نرتّب كل شيء آخر.',
    steps: [
      { t: 'اختاري قطعك من SHEIN', d: 'أضيفي القطع التي تحبينها إلى السلة في تطبيق أو موقع SHEIN، وحدّدي المقاس واللون بوضوح.' },
      { t: 'أرسلي سلتك عبر واتساب', d: 'أرسلي لنا رابط السلة أو لقطات شاشة واضحة عبر [واتساب](whatsapp).' },
      { t: 'نؤكد السعر النهائي والتوفّر', d: 'نحذف القطع النافدة ونريكِ إياها بلقطات شاشة، ونرسل لكِ المبلغ النهائي بالدينار، ولا يُعتمد الطلب إلا بعد تأكيدك الواضح.' },
      { t: 'حتى باب بيتك، والدفع عند الاستلام', d: 'يصل طلبك إلى باب بيتك وتدفعين عند الاستلام.' }
    ],
    basketTitle: 'كيف ترسلين سلتك بشكل صحيح',
    basketTips: [
      'أرسلي رابط السلة، أو لقطات شاشة واضحة ومقروءة.',
      'تأكدي من ظهور المقاس واللون لكل قطعة.',
      'اكتبي الاسم الكامل ورقم الهاتف والمدينة والعنوان وأقرب نقطة دالّة.',
      'إذا لم تكوني متأكدة من المقاس، اسألينا وسنساعدك بكل سرور.'
    ],
    afterTitle: 'ماذا يحدث بعد تأكيدك',
    after: [
      { t: 'نشتري من SHEIN', d: 'بعد تأكيدك، نشتري القطع من SHEIN نيابةً عنك.' },
      { t: 'من الإمارات إلى العراق', d: 'يُشحن طلبك من الإمارات إلى العراق، والشحن من الإمارات إلى العراق مجاني (أما التوصيل داخل العراق حتى الباب فمدفوع، ابتداءً من {feeKrd} دينار).' },
      { t: 'الجمارك علينا', d: 'رسوم التخليص الجمركي يتحملها {name} بالكامل، ولا تدفعين أي جمارك.' },
      { t: 'التوصيل حتى باب البيت', d: 'يصل إلى باب بيتك خلال {days} يوماً. أجرة التوصيل: {feeKrd} دينار في إقليم كوردستان، و{feeIraq} دينار في باقي مدن العراق. تتم محاولة التوصيل {attempts} مرات.' }
    ],
    payTitle: 'الدفع',
    pay: [
      'الدفع نقداً عند الاستلام فقط. لا دفع مسبق للطلبات حتى {threshold}.',
      'للطلبات التي تتجاوز {threshold}، يُدفع {prepay} من المبلغ مقدّماً عبر قنواتنا الرسمية فقط، و{rest} المتبقية عند الاستلام.'
    ],
    ctaTitle: 'لنبدأ',
    ctaText: 'سلتك جاهزة؟ أرسليها إلينا الآن عبر واتساب.',
    ctaBtn: 'أرسلي سلتك عبر واتساب'
  },
  en: {
    meta: { title: 'How it works | Velina Shopping', desc: 'Choose on SHEIN, send your basket on WhatsApp, confirm the final price and pay on delivery. Simple, clear steps.' },
    kicker: 'How it works',
    h1: 'Four simple steps to your door',
    lead: 'No bank card needed. Just choose your items and send them to us, we arrange everything else.',
    steps: [
      { t: 'Choose your items on SHEIN', d: 'Add the pieces you love to your basket in the SHEIN app or website, and note the size and colour clearly.' },
      { t: 'Send your basket on WhatsApp', d: 'Send us your basket link or clear screenshots on [WhatsApp](whatsapp).' },
      { t: 'We confirm the final price & stock', d: 'Sold-out items are removed and shown to you with screenshots, we send you the final total in IQD, and your order is confirmed only after you clearly confirm.' },
      { t: 'Delivered to your door, pay on delivery', d: 'Your order arrives at your door and you pay when you receive it.' }
    ],
    basketTitle: 'How to send your basket',
    basketTips: [
      'Share your basket link, or clear, readable screenshots.',
      'Make sure the size and colour of every item are visible.',
      'Include your full name, phone number, city, address and nearest landmark.',
      'Not sure about a size? Ask us, we’re happy to help.'
    ],
    afterTitle: 'What happens after you confirm',
    after: [
      { t: 'We purchase from SHEIN', d: 'Once you confirm, we buy the items from SHEIN on your behalf.' },
      { t: 'From the UAE to Iraq', d: 'Your order is shipped from the UAE to Iraq, with free shipping UAE → Iraq (door delivery inside Iraq is paid separately, from {feeKrd} IQD).' },
      { t: 'Customs on us', d: 'Customs clearance is fully paid by {name}; you never pay customs.' },
      { t: 'Door delivery', d: 'It reaches your door in {days} days. Delivery fee: {feeKrd} IQD in the Kurdistan Region, {feeIraq} IQD in other Iraqi cities. Delivery is attempted {attempts} times.' }
    ],
    payTitle: 'Payment',
    pay: [
      'Payment is cash on delivery only. No prepayment for orders up to {threshold}.',
      'For orders above {threshold}, {prepay} of the total is paid in advance through our official channels only, and the remaining {rest} on delivery.'
    ],
    ctaTitle: 'Let’s get started',
    ctaText: 'Is your basket ready? Send it to us on WhatsApp now.',
    ctaBtn: 'Send your basket on WhatsApp'
  }
};

/* ============================ CONTACT ============================ */
I18N.contact = {
  ku: {
    meta: { title: 'پەیوەندی | ڤێلینا شۆپینگ', desc: 'پەیوەندی بە {name} بکە لە ڕێگەی واتسئاپ، تەلەفۆن، ئیمەیڵ یان ئینستاگرامەوە، یان سەردانی نووسینگەکەمان بکە لە هەولێر.' },
    kicker: 'پەیوەندی',
    h1: 'خۆشحاڵ دەبین گوێت لێ بگرین',
    lead: 'بۆ داواکاری، پرسیار یان یارمەتی لە هەڵبژاردنی قەبارە، ئێمە لێرەین.',
    channelsTitle: 'ڕێگاکانی پەیوەندی',
    whatsappDesc: 'ئاسانترین ڕێگا بۆ گەیشتن پێمان، بۆ ناردنی سەبەتە و پرسیارەکانت.',
    phoneDesc: 'لە کاتی کارکردندا پەیوەندیمان پێوە بکە.',
    emailDesc: 'بۆ پرسیارە درێژەکان یان داواکارییەکانی پەیوەست بە زانیاری کەسی.',
    instagramDesc: 'نوێترین ستایل و هەواڵەکانمان ببینە.',
    facebookDesc: 'پەڕەی فەرمیی ئێمە لە فەیسبووک.',
    addressDesc: 'نووسینگەکەمان لە هەولێر.',
    hoursDesc: 'کاتەکانی کارکردن.',
    formTitle: 'نامەیەکمان بۆ بنێرە',
    formLead: 'فۆرمەکە پڕ بکەرەوە، نامەکەت ئامادە دەبێت بۆ ناردن لە واتسئاپ.',
    formNote: 'هیچ شتێک لە ماڵپەڕەکەماندا هەڵناگیرێت؛ فۆرمەکە تەنها واتسئاپ دەکاتەوە و نامەکەت ئامادەیە بۆ ناردن.',
    fName: 'ناو',
    fNamePh: 'ناوی تەواوت',
    fPhone: 'ژمارەی مۆبایل',
    fPhonePh: '07xx xxx xxxx',
    fArea: 'ناوچە',
    fAreaKrd: 'هەرێمی کوردستان',
    fAreaIraq: 'شارەکانی تری عێراق',
    fTopic: 'بابەت',
    topics: ['داواکاریی نوێ', 'پرسیار دەربارەی داواکارییەکەم', 'یارمەتی بۆ قەبارە', 'گەڕاندنەوە و دانەوەی پارە', 'شتی تر'],
    fMsg: 'نامە',
    fMsgPh: 'نامەکەت لێرە بنووسە...',
    fSubmit: 'ناردن بە واتسئاپ',
    fRequired: 'تکایە ناو و نامەکەت بنووسە.',
    waTemplate: 'سڵاو ڤێلینا شۆپینگ 🌸 ناو: {fname} | مۆبایل: {fphone} | ناوچە: {farea} | بابەت: {ftopic} | نامە: {fmsg}'
  },
  ar: {
    meta: { title: 'تواصلي معنا | ڤيلينا شوبينغ', desc: 'تواصلي مع {name} عبر واتساب أو الهاتف أو البريد الإلكتروني أو إنستغرام، أو زوري مكتبنا في أربيل.' },
    kicker: 'تواصلي معنا',
    h1: 'يسعدنا أن نسمع منكِ',
    lead: 'للطلبات أو الأسئلة أو المساعدة في اختيار المقاس، نحن هنا من أجلك.',
    channelsTitle: 'طرق التواصل',
    whatsappDesc: 'أسهل طريقة للوصول إلينا، لإرسال سلتك وأسئلتك.',
    phoneDesc: 'اتصلي بنا خلال أوقات العمل.',
    emailDesc: 'للاستفسارات المطوّلة أو الطلبات المتعلقة بالبيانات الشخصية.',
    instagramDesc: 'تابعي أحدث الإطلالات وأخبارنا.',
    facebookDesc: 'صفحتنا الرسمية على فيسبوك.',
    addressDesc: 'مكتبنا في أربيل.',
    hoursDesc: 'أوقات العمل.',
    formTitle: 'أرسلي لنا رسالة',
    formLead: 'املئي النموذج وستكون رسالتك جاهزة للإرسال عبر واتساب.',
    formNote: 'لا يُحفظ أي شيء على موقعنا؛ النموذج يفتح واتساب فقط ورسالتك جاهزة للإرسال.',
    fName: 'الاسم',
    fNamePh: 'اسمك الكامل',
    fPhone: 'رقم الهاتف',
    fPhonePh: '07xx xxx xxxx',
    fArea: 'المنطقة',
    fAreaKrd: 'إقليم كوردستان',
    fAreaIraq: 'باقي مدن العراق',
    fTopic: 'الموضوع',
    topics: ['طلب جديد', 'سؤال عن طلبي', 'مساعدة في المقاس', 'الإرجاع واسترداد المبلغ', 'أخرى'],
    fMsg: 'الرسالة',
    fMsgPh: 'اكتبي رسالتك هنا...',
    fSubmit: 'إرسال عبر واتساب',
    fRequired: 'يرجى كتابة اسمك ورسالتك.',
    waTemplate: 'مرحباً ڤيلينا شوبينغ 🌸 الاسم: {fname} | الهاتف: {fphone} | المنطقة: {farea} | الموضوع: {ftopic} | الرسالة: {fmsg}'
  },
  en: {
    meta: { title: 'Contact | Velina Shopping', desc: 'Contact {name} on WhatsApp, phone, email or Instagram, or visit our office in Erbil.' },
    kicker: 'Contact',
    h1: 'We’d love to hear from you',
    lead: 'For orders, questions or help choosing a size, we’re here for you.',
    channelsTitle: 'Ways to reach us',
    whatsappDesc: 'The easiest way to reach us, for sending your basket and asking questions.',
    phoneDesc: 'Call us during working hours.',
    emailDesc: 'For longer questions or requests about your personal data.',
    instagramDesc: 'See our latest looks and news.',
    facebookDesc: 'Our official Facebook page.',
    addressDesc: 'Our office in Erbil.',
    hoursDesc: 'Working hours.',
    formTitle: 'Send us a message',
    formLead: 'Fill in the form and your message will be ready to send on WhatsApp.',
    formNote: 'Nothing is stored on our website – the form only opens WhatsApp with your message ready to send.',
    fName: 'Name',
    fNamePh: 'Your full name',
    fPhone: 'Phone number',
    fPhonePh: '07xx xxx xxxx',
    fArea: 'Area',
    fAreaKrd: 'Kurdistan Region',
    fAreaIraq: 'Other Iraqi cities',
    fTopic: 'Topic',
    topics: ['New order', 'Question about my order', 'Size help', 'Returns & refunds', 'Other'],
    fMsg: 'Message',
    fMsgPh: 'Write your message here...',
    fSubmit: 'Send on WhatsApp',
    fRequired: 'Please write your name and message.',
    waTemplate: 'Hello Velina Shopping 🌸 Name: {fname} | Phone: {fphone} | Area: {farea} | Topic: {ftopic} | Message: {fmsg}'
  }
};

/* ============================ 404 ============================ */
I18N.notFound = {
  ku: {
    meta: { title: 'پەڕەکە نەدۆزرایەوە | ڤێلینا شۆپینگ', desc: 'ئەو پەڕەیەی بەدوایدا دەگەڕێیت نەدۆزرایەوە.' },
    h1: 'ببورە، ئەم پەڕەیە نەدۆزرایەوە',
    text: 'لەوانەیە لینکەکە هەڵە بێت یان پەڕەکە گوازرابێتەوە. بگەڕێرەوە بۆ سەرەتا، یان بە واتسئاپ پەیوەندیمان پێوە بکە.',
    btnHome: 'گەڕانەوە بۆ سەرەتا',
    btnWa: 'پەیوەندی بە واتسئاپ'
  },
  ar: {
    meta: { title: 'الصفحة غير موجودة | ڤيلينا شوبينغ', desc: 'الصفحة التي تبحثين عنها غير موجودة.' },
    h1: 'عذراً، هذه الصفحة غير موجودة',
    text: 'ربما يكون الرابط غير صحيح أو أن الصفحة نُقلت. عودي إلى الصفحة الرئيسية، أو تواصلي معنا عبر واتساب.',
    btnHome: 'العودة إلى الرئيسية',
    btnWa: 'تواصلي عبر واتساب'
  },
  en: {
    meta: { title: 'Page not found | Velina Shopping', desc: 'The page you are looking for could not be found.' },
    h1: 'Sorry, this page could not be found',
    text: 'The link may be wrong or the page may have moved. Go back to the home page, or reach us on WhatsApp.',
    btnHome: 'Back to home',
    btnWa: 'Chat on WhatsApp'
  }
};

/* ------------------------------------------------------------------ shipping-returns */
I18N.shipping = {
  ku: {
    meta: { title: 'سیاسەتی ناردن و گەیاندن | ڤێلینا شۆپینگ', desc: 'ناردن لە ئیماراتەوە بۆ عێراق بەخۆڕاییە، لەگەڵ کرێی گەیاندن تا بەردەم دەرگا لە {feeKrd} دینارەوە. ماوەی گەیاندن، ناوچەکان، گومرگ و پارەدان لە کاتی وەرگرتن.' },
    h1: 'سیاسەتی ناردن و گەیاندن',
    lead: 'لێرەدا بە زمانێکی سادە ڕووندەکەینەوە کە چۆن داواکارییەکەت لە ئیماراتەوە دەنێرین و تا بەردەم دەرگاکەت لە هەر شوێنێکی عێراق و هەرێمی کوردستان دەیگەیەنین.',
    sections: [
      { id: 'shipping-route', h: 'ڕێگای ناردن', body: [
        'هەموو داواکارییەکان لە **ئیماراتی عەرەبی یەکگرتووەوە** بۆ **عێراق** دەنێردرێن.',
        'ناردنی نێودەوڵەتی لە ئیماراتەوە بۆ عێراق **بەخۆڕاییە**، بەڵام کرێی گەیاندن تا بەردەم دەرگا لە ناو عێراقدا **بە پارەیە** (لە {feeKrd} دینارەوە).'
      ] },
      { id: 'delivery-time', h: 'ماوەی گەیاندن', body: [
        'ماوەی گەیاندن نزیکەی **{days} ڕۆژ**ە لە ڕۆژی کڕینی کاڵاکانەوە.',
        'ئەم ماوەیە تەنها خەمڵاندنە و گەرەنتی نییە. لەوانەیە بەهۆی ئەمانەوە دوابکەوێت:',
        ['ڕێکارەکانی گومرگ', 'دواکەوتنی گەشتە ئاسمانییەکان', 'پشووە فەرمییەکان', 'کەشوهەوا', 'هەر بارودۆخێکی لە دەرەوەی دەسەڵاتی ئێمە (هێزی قاهیرە)'],
        { note: 'ئەگەر داواکارییەکەت دواکەوت، لە [واتسئاپ](whatsapp) پەیوەندیمان پێوە بکە و ئێمە دۆخەکەت بۆ ڕووندەکەینەوە.' }
      ] },
      { id: 'coverage', h: 'ناوچەکانی گەیاندن', body: [
        'گەیاندن بۆ هەموو **١٨ پارێزگاکەی عێراق** دەکەین:',
        ['بەغدا', 'بەسرە', 'نەینەوا', 'هەولێر', 'سلێمانی', 'دهۆک', 'کەرکووک', 'دیالە', 'ئەنبار', 'بابل', 'کەربەلا', 'نەجەف', 'واست', 'سەڵاحەدین', 'زیقار', 'میسان', 'موسەننا', 'قادسیە'],
        'هەروەها گەیاندن بۆ **هەڵەبجە** لە هەرێمی کوردستانیش دەکەین.'
      ] },
      { id: 'door-delivery-fees', h: 'کرێی گەیاندن تا بەردەم دەرگا', body: [
        { table: [
          ['ناوچە', 'شارەکان', 'کرێی گەیاندن تا بەردەم دەرگا'],
          ['هەرێمی کوردستان', 'هەولێر، سلێمانی، دهۆک، هەڵەبجە', '{feeKrd} دینار'],
          ['شارەکانی تری عێراق', 'هەموو شارەکانی تر', '{feeIraq} دینار'],
          ['ناردنی نێودەوڵەتی ئیمارات ← عێراق', '—', 'بەخۆڕایی']
        ] },
        'کرێی گەیاندن لە کاتی وەرگرتنی داواکارییەکەدا لەگەڵ پارەی داواکارییەکە بە نەختینە دەدرێت.'
      ] },
      { id: 'customs', h: 'گومرگ', body: [
        'تێچووی ڕاپەڕاندنی گومرگی لەسەر **{name}**ە.',
        'تۆ هەرگیز پارەی گومرگ نادەیت و هیچ تێچوویەکی شاراوەی تر نییە.'
      ] },
      { id: 'order-updates', h: 'ئاگادارکردنەوە لە دۆخی داواکاری', body: [
        'لە ڕێگەی [واتسئاپ](whatsapp) ئاگادارت دەکەینەوە لە:',
        ['دڵنیاکردنەوەی داواکارییەکەت', 'ئەو کاڵایانەی کە نەماون، لەگەڵ وێنەی شاشە (سکرینشۆت)', 'ناردنی داواکارییەکە', 'گەیاندنی داواکارییەکە']
      ] },
      { id: 'delivery-attempts', h: 'هەوڵەکانی گەیاندن', body: [
        'شۆفێری گەیاندن **{attempts} جار** هەوڵ دەدات داواکارییەکەت بگەیەنێت.',
        'ئەگەر داواکارییەکە لە کاتی گەیاندندا ڕەتکرایەوە یان هەڵوەشێنرایەوە، دەگەڕێتەوە بۆ نووسینگەکەمان لە هەولێر و لەوێ چارەسەر دەکرێت. دەتوانیت خۆت لە نووسینگەکە وەریبگریت.'
      ] },
      { id: 'address-requirements', h: 'زانیاری ناونیشان', body: [
        'بۆ ئەوەی داواکارییەکەت بە باشی بگات، تکایە ئەمانەمان بدەرێ:',
        ['ناونیشانی تەواو و دروست', 'ناوی شار', 'نزیکترین شوێنی ناسراو', 'ژمارەی تەلەفۆنێک کە بەردەست بێت']
      ] },
      { id: 'check-your-parcel', h: 'پشکنینی پاکەتەکەت', body: [
        'تکایە پاکەتەکەت لە بەردەم شۆفێری گەیاندندا بپشکنە.',
        'ئەگەر هەر شتێک هەڵە، زیانلێکەوتوو یان کەم بوو، لە [واتسئاپ](whatsapp) لەگەڵ وێنە یان ڤیدیۆ پەیوەندیمان پێوە بکە. بۆ وردەکاری زیاتر بڕوانە [سیاسەتی گەڕاندنەوە و پارەگەڕاندنەوە](returns.html).'
      ] },
      { id: 'payment-on-delivery', h: 'پارەدان لە کاتی وەرگرتن', body: [
        'پارەدان تەنها بە نەختینە لە کاتی وەرگرتندایە.',
        'بۆ داواکارییەکانی سەرووی **{threshold}**: **{prepay}**ی کۆی گشتی پێشوەختە دەدرێت و **{rest}**ی ماوە لە کاتی وەرگرتندا بە نەختینە دەدرێت.'
      ] }
    ]
  },
  ar: {
    meta: { title: 'سياسة الشحن والتوصيل | ڤيلينا شوبينغ', desc: 'الشحن الدولي من الإمارات إلى العراق مجاني، مع رسوم توصيل إلى الباب تبدأ من {feeKrd} دينار. مدة التوصيل، المناطق، الجمارك والدفع عند الاستلام.' },
    h1: 'سياسة الشحن والتوصيل',
    lead: 'نوضح هنا بلغة بسيطة كيف نشحن طلبك من الإمارات ونوصله إلى باب منزلك في أي مكان في العراق وإقليم كوردستان.',
    sections: [
      { id: 'shipping-route', h: 'مسار الشحن', body: [
        'تُشحن جميع الطلبات من **الإمارات العربية المتحدة** إلى **العراق**.',
        'الشحن الدولي من الإمارات إلى العراق **مجاني**، أما التوصيل إلى الباب داخل العراق فهو **برسوم** (تبدأ من {feeKrd} دينار).'
      ] },
      { id: 'delivery-time', h: 'مدة التوصيل', body: [
        'مدة التوصيل التقديرية **{days} يوماً** من تاريخ شراء المنتجات.',
        'هذه المدة تقديرية وغير مضمونة، وقد تتأخر بسبب:',
        ['الإجراءات الجمركية', 'تأخر الرحلات الجوية', 'العطل الرسمية', 'الأحوال الجوية', 'أي ظروف قاهرة خارجة عن إرادتنا'],
        { note: 'إذا تأخر طلبك، تواصلي معنا عبر [واتساب](whatsapp) وسنوضح لك حالته.' }
      ] },
      { id: 'coverage', h: 'مناطق التوصيل', body: [
        'نوصل إلى جميع **محافظات العراق الـ18**:',
        ['بغداد', 'البصرة', 'نينوى', 'أربيل', 'السليمانية', 'دهوك', 'كركوك', 'ديالى', 'الأنبار', 'بابل', 'كربلاء', 'النجف', 'واسط', 'صلاح الدين', 'ذي قار', 'ميسان', 'المثنى', 'القادسية'],
        'كما نوصل أيضاً إلى **حلبجة** في إقليم كوردستان.'
      ] },
      { id: 'door-delivery-fees', h: 'رسوم التوصيل إلى الباب', body: [
        { table: [
          ['المنطقة', 'المدن', 'رسوم التوصيل إلى الباب'],
          ['إقليم كوردستان', 'أربيل، السليمانية، دهوك، حلبجة', '{feeKrd} دينار'],
          ['باقي مدن العراق', 'جميع المدن الأخرى', '{feeIraq} دينار'],
          ['الشحن الدولي الإمارات ← العراق', '—', 'مجاني']
        ] },
        'تُدفع رسوم التوصيل نقداً عند الاستلام مع قيمة الطلب.'
      ] },
      { id: 'customs', h: 'الجمارك', body: [
        'تتحمل **{name}** تكاليف التخليص الجمركي.',
        'لن تدفعي أي رسوم جمركية أبداً، ولا توجد أي رسوم مخفية أخرى.'
      ] },
      { id: 'order-updates', h: 'تحديثات الطلب', body: [
        'نرسل لك التحديثات عبر [واتساب](whatsapp) بخصوص:',
        ['تأكيد طلبك', 'المنتجات التي نفدت، مع لقطات شاشة', 'شحن الطلب', 'توصيل الطلب']
      ] },
      { id: 'delivery-attempts', h: 'محاولات التوصيل', body: [
        'يحاول مندوب التوصيل تسليم طلبك **{attempts} مرات**.',
        'إذا رُفض الطلب أو أُلغي عند التوصيل، يُعاد إلى مكتبنا في أربيل ويُعالج هناك، ويمكنك استلامه من المكتب.'
      ] },
      { id: 'address-requirements', h: 'متطلبات العنوان', body: [
        'لكي يصلك طلبك بسهولة، يرجى تزويدنا بما يلي:',
        ['عنوان كامل وصحيح', 'اسم المدينة', 'أقرب نقطة دالة', 'رقم هاتف متاح للتواصل']
      ] },
      { id: 'check-your-parcel', h: 'افحصي طردك', body: [
        'يرجى فحص الطرد أمام مندوب التوصيل.',
        'إذا وجدتِ أي خطأ أو تلف أو نقص، تواصلي معنا عبر [واتساب](whatsapp) مع صور أو فيديو. لمزيد من التفاصيل راجعي [سياسة الإرجاع واسترداد المبالغ](returns.html).'
      ] },
      { id: 'payment-on-delivery', h: 'الدفع عند الاستلام', body: [
        'الدفع نقداً عند الاستلام فقط.',
        'للطلبات التي تزيد على **{threshold}**: تُدفع **{prepay}** من المبلغ الإجمالي مقدماً، و**{rest}** المتبقية نقداً عند الاستلام.'
      ] }
    ]
  },
  en: {
    meta: { title: 'Shipping Policy | Velina Shopping', desc: 'Free shipping UAE → Iraq plus a paid door delivery fee from {feeKrd} IQD. Delivery times, coverage, customs and cash on delivery explained.' },
    h1: 'Shipping Policy',
    lead: 'Here we explain in plain language how we ship your order from the UAE and deliver it to your door anywhere in Iraq and the Kurdistan Region.',
    sections: [
      { id: 'shipping-route', h: 'Shipping route', body: [
        'All orders are shipped from the **United Arab Emirates** to **Iraq**.',
        'International shipping from the UAE to Iraq is **free**, while door delivery inside Iraq is **paid** (from {feeKrd} IQD).'
      ] },
      { id: 'delivery-time', h: 'Delivery time', body: [
        'Estimated delivery time is **{days} days** from the date we purchase your items.',
        'This is an estimate, not a guarantee. Delays may happen because of:',
        ['Customs procedures', 'Flight delays', 'Public holidays', 'Weather', 'Any event beyond our control (force majeure)'],
        { note: 'If your order is delayed, message us on [WhatsApp](whatsapp) and we will update you on its status.' }
      ] },
      { id: 'coverage', h: 'Delivery coverage', body: [
        'We deliver to all **18 governorates of Iraq**:',
        ['Baghdad', 'Basra', 'Nineveh', 'Erbil', 'Sulaymaniyah', 'Duhok', 'Kirkuk', 'Diyala', 'Anbar', 'Babil', 'Karbala', 'Najaf', 'Wasit', 'Saladin', 'Dhi Qar', 'Maysan', 'Muthanna', 'Al-Qadisiyyah'],
        'We also deliver to **Halabja** in the Kurdistan Region.'
      ] },
      { id: 'door-delivery-fees', h: 'Door delivery fees', body: [
        { table: [
          ['Area', 'Cities', 'Door delivery fee'],
          ['Kurdistan Region', 'Erbil, Sulaymaniyah, Duhok, Halabja', '{feeKrd} IQD'],
          ['Other Iraqi cities', 'All other cities', '{feeIraq} IQD'],
          ['International shipping UAE → Iraq', '—', 'Free']
        ] },
        'The door delivery fee is paid in cash on delivery, together with your order.'
      ] },
      { id: 'customs', h: 'Customs', body: [
        'Customs clearance is paid by **{name}**.',
        'You never pay customs, and there are no other hidden fees.'
      ] },
      { id: 'order-updates', h: 'Order updates', body: [
        'We keep you updated on [WhatsApp](whatsapp) about:',
        ['Your order confirmation', 'Sold-out items, with screenshots', 'Shipping of your order', 'Delivery of your order']
      ] },
      { id: 'delivery-attempts', h: 'Delivery attempts', body: [
        'The driver will try to deliver your order **{attempts} times**.',
        'If the order is refused or cancelled at delivery, it is returned to our Erbil office and handled there. You may collect it from the office.'
      ] },
      { id: 'address-requirements', h: 'Address requirements', body: [
        'To make sure your order reaches you, please give us:',
        ['A correct and full address', 'Your city', 'The nearest landmark', 'A phone number we can reach']
      ] },
      { id: 'check-your-parcel', h: 'Check your parcel', body: [
        'Please check your parcel in front of the driver.',
        'If anything is wrong, damaged or missing, contact us on [WhatsApp](whatsapp) with photos or a video. For details, see our [Returns & Refunds Policy](returns.html).'
      ] },
      { id: 'payment-on-delivery', h: 'Payment on delivery', body: [
        'Payment is cash on delivery only.',
        'For orders above **{threshold}**: **{prepay}** of the total is paid in advance and the remaining **{rest}** is paid in cash on delivery.'
      ] }
    ]
  }
};

I18N.returns = {
  ku: {
    meta: { title: 'سیاسەتی گەڕاندنەوە و پارەگەڕاندنەوە | ڤێلینا شۆپینگ', desc: 'کاڵای هەڵە، زیانلێکەوتوو یان کەم، قەبارەی هەڵە، هەڵوەشاندنەوە و چۆنیەتی داواکردنی پارەگەڕاندنەوە لە ڤێلینا شۆپینگ.' },
    h1: 'سیاسەتی گەڕاندنەوە و پارەگەڕاندنەوە',
    lead: 'دەمانەوێت بە داواکارییەکەت دڵخۆش بیت. ئەم سیاسەتە ڕوونی دەکاتەوە کەی و چۆن دەتوانیت داوای گەڕاندنەوەی پارە بکەیت.',
    sections: [
      { id: 'overview', h: 'پوختە', body: [
        '{name} لە جیاتی تۆ کاڵاکان لە SHEIN دەکڕێت و بۆت دەگەیەنێت. ئەگەر کێشەیەک لە داواکارییەکەتدا هەبوو، لە [واتسئاپ](whatsapp) پەیوەندیمان پێوە بکە و ئێمە یارمەتیت دەدەین.',
        'تکایە پاکەتەکەت لە بەردەم شۆفێری گەیاندندا بپشکنە.'
      ] },
      { id: 'wrong-damaged-missing', h: 'کاڵای هەڵە، زیانلێکەوتوو یان کەم', body: [
        'ئەگەر کاڵایەکی هەڵەت پێگەیشت، یان کاڵایەک زیانی پێگەیشتبوو، یان کاڵایەک کەم بوو، لە [واتسئاپ](whatsapp) پەیوەندیمان پێوە بکە و وێنە یان ڤیدیۆی پاکەتە کراوەکەمان بۆ بنێرە.',
        'ئەو پارەگەڕاندنەوانەی پەسەند دەکرێن، لە ماوەی **{refundTime} کاتژمێر**دا دەدرێنەوە.'
      ] },
      { id: 'wrong-size', h: 'قەبارەی هەڵە', body: [
        'ئەگەر قەبارەکە گونجاو نەبوو، دەتوانیت داوای گەڕاندنەوەی پارە بکەیت بەم مەرجانە:',
        ['کاڵاکە بەکارنەهاتبێت', 'نەشۆردرابێت', 'لیبڵە ئەسڵییەکانی پێوە بێت', 'لە بەستەبەندییە ئەسڵییەکەیدا بێت'],
        { note: 'پێش داواکردن، پێشنیار دەکەین خشتەی قەبارەکانی SHEIN بپشکنیت. ئەگەر دڵنیا نەبوویت، لە هەڵبژاردنی قەبارەدا یارمەتیت دەدەین.' }
      ] },
      { id: 'non-returnable', h: 'کاڵا نەگەڕێنراوەکان', body: [
        'تەنها **جلی ژێرەوە** ناگەڕێنرێتەوە، بەهۆی پاکوخاوێنی و تەندروستییەوە.'
      ] },
      { id: 'cancellations', h: 'هەڵوەشاندنەوە', body: [
        ['**پێش کڕین:** هەڵوەشاندنەوە بەخۆڕاییە و هیچ تێچوویەکی نییە.', '**دوای کڕین:** گەرەنتی نییە و هەر حاڵەتێک بە جیا سەیر دەکرێت. ئەگەر SHEIN هێشتا ڕێگە بدات، هەوڵ دەدەین هەڵیبوەشێنینەوە.']
      ] },
      { id: 'refused-orders', h: 'داواکارییە ڕەتکراوەکان', body: [
        'ئەگەر داواکارییەکە لە کاتی گەیاندندا ڕەتکرایەوە یان هەڵوەشێنرایەوە، دەگەڕێتەوە بۆ نووسینگەکەمان لە هەولێر ({address}) و لەوێ چارەسەر دەکرێت.'
      ] },
      { id: 'how-to-request', h: 'چۆن داوای پارەگەڕاندنەوە بکەیت', body: [
        'هەرچی زووترە دوای وەرگرتنی پاکەتەکەت ئەم هەنگاوانە بگرە بەر:',
        ['لە [واتسئاپ](whatsapp) نامەمان بۆ بنێرە لەگەڵ ناوی داواکارییەکە یان ژمارەی تەلەفۆنەکەت.', 'وێنە یان ڤیدیۆی کاڵاکە و پاکەتەکە بنێرە.', 'کێشەکە بە کورتی باس بکە.', 'ئێمە داواکارییەکەت دەپشکنین و وەڵامت دەدەینەوە.', 'ئەگەر پەسەند کرا، پارەکە لە ماوەی **{refundTime} کاتژمێر**دا دەدرێتەوە.']
      ] },
      { id: 'contact', h: 'پەیوەندی', body: [
        ['واتسئاپ و تەلەفۆن: [{phone}](whatsapp)', 'ئیمەیڵ: [{email}](email)', 'کاتەکانی کار: {hours}']
      ] }
    ]
  },
  ar: {
    meta: { title: 'سياسة الإرجاع واسترداد المبالغ | ڤيلينا شوبينغ', desc: 'المنتجات الخاطئة أو التالفة أو الناقصة، المقاس الخاطئ، الإلغاء، وطريقة طلب استرداد المبلغ لدى ڤيلينا شوبينغ.' },
    h1: 'سياسة الإرجاع واسترداد المبالغ',
    lead: 'نريدك أن تكوني سعيدة بطلبك. توضح هذه السياسة متى وكيف يمكنك طلب استرداد المبلغ.',
    sections: [
      { id: 'overview', h: 'نظرة عامة', body: [
        'تشتري {name} المنتجات من SHEIN نيابةً عنك وتوصلها إليك. إذا واجهتِ أي مشكلة في طلبك، تواصلي معنا عبر [واتساب](whatsapp) وسنساعدك.',
        'يرجى فحص الطرد أمام مندوب التوصيل.'
      ] },
      { id: 'wrong-damaged-missing', h: 'منتج خاطئ أو تالف أو ناقص', body: [
        'إذا وصلك منتج خاطئ أو تالف أو كان هناك منتج ناقص، تواصلي معنا عبر [واتساب](whatsapp) وأرسلي صوراً أو فيديو للطرد بعد فتحه.',
        'تُدفع المبالغ المستردة الموافق عليها خلال **{refundTime} ساعة**.'
      ] },
      { id: 'wrong-size', h: 'مقاس غير مناسب', body: [
        'إذا لم يكن المقاس مناسباً، يمكنك طلب استرداد المبلغ بالشروط التالية:',
        ['أن يكون المنتج غير مستخدم', 'غير مغسول', 'مع البطاقات الأصلية', 'في تغليفه الأصلي'],
        { note: 'ننصحك بمراجعة جداول المقاسات في SHEIN قبل الطلب، وإذا لم تكوني متأكدة يسعدنا مساعدتك في اختيار المقاس.' }
      ] },
      { id: 'non-returnable', h: 'منتجات غير قابلة للإرجاع', body: [
        '**الملابس الداخلية** فقط غير قابلة للإرجاع، وذلك لأسباب صحية.'
      ] },
      { id: 'cancellations', h: 'الإلغاء', body: [
        ['**قبل الشراء:** الإلغاء مجاني وبدون أي تكلفة.', '**بعد الشراء:** الإلغاء غير مضمون ويُنظر في كل حالة على حدة، ونحاول الإلغاء إذا كانت SHEIN لا تزال تسمح بذلك.']
      ] },
      { id: 'refused-orders', h: 'الطلبات المرفوضة', body: [
        'إذا رُفض الطلب أو أُلغي عند التوصيل، يُعاد إلى مكتبنا في أربيل ({address}) ويُعالج هناك.'
      ] },
      { id: 'how-to-request', h: 'كيفية طلب استرداد المبلغ', body: [
        'اتبعي هذه الخطوات في أقرب وقت ممكن بعد استلام طردك:',
        ['أرسلي لنا رسالة عبر [واتساب](whatsapp) مع اسم الطلب أو رقم هاتفك.', 'أرسلي صوراً أو فيديو للمنتج والطرد.', 'اشرحي المشكلة باختصار.', 'نراجع طلبك ونرد عليك.', 'عند الموافقة، يُدفع المبلغ المسترد خلال **{refundTime} ساعة**.']
      ] },
      { id: 'contact', h: 'التواصل', body: [
        ['واتساب والهاتف: [{phone}](whatsapp)', 'البريد الإلكتروني: [{email}](email)', 'ساعات العمل: {hours}']
      ] }
    ]
  },
  en: {
    meta: { title: 'Returns & Refunds Policy | Velina Shopping', desc: 'Wrong, damaged or missing items, wrong sizes, cancellations and how to request a refund from Velina Shopping.' },
    h1: 'Returns & Refunds Policy',
    lead: 'We want you to be happy with your order. This policy explains when and how you can request a refund.',
    sections: [
      { id: 'overview', h: 'Overview', body: [
        '{name} buys items from SHEIN on your behalf and delivers them to you. If there is a problem with your order, contact us on [WhatsApp](whatsapp) and we will help you.',
        'Please check your parcel in front of the driver.'
      ] },
      { id: 'wrong-damaged-missing', h: 'Wrong, damaged or missing items', body: [
        'If you receive a wrong or damaged item, or an item is missing, contact us on [WhatsApp](whatsapp) with photos or a video of the opened parcel.',
        'Approved refunds are paid within **{refundTime} hours**.'
      ] },
      { id: 'wrong-size', h: 'Wrong size', body: [
        'If the size does not fit, a refund is available when the item is:',
        ['Unused', 'Unwashed', 'With its original tags', 'In its original packaging'],
        { note: 'We recommend checking the SHEIN size charts before ordering. If you are unsure, we are happy to help you choose the right size.' }
      ] },
      { id: 'non-returnable', h: 'Non-returnable items', body: [
        'Only **underwear** cannot be returned, for hygiene reasons.'
      ] },
      { id: 'cancellations', h: 'Cancellations', body: [
        ['**Before we purchase:** cancellation is free of charge.', '**After we purchase:** cancellation is not guaranteed and is handled case by case. We will try to cancel if SHEIN still allows it.']
      ] },
      { id: 'refused-orders', h: 'Refused orders', body: [
        'If an order is refused or cancelled at delivery, it is returned to our Erbil office ({address}) and handled there.'
      ] },
      { id: 'how-to-request', h: 'How to request a refund', body: [
        'Please follow these steps as soon as possible after receiving your parcel:',
        ['Message us on [WhatsApp](whatsapp) with your order name or phone number.', 'Send photos or a video of the item and the parcel.', 'Briefly describe the issue.', 'We review your request and reply to you.', 'If approved, your refund is paid within **{refundTime} hours**.']
      ] },
      { id: 'contact', h: 'Contact', body: [
        ['WhatsApp & phone: [{phone}](whatsapp)', 'Email: [{email}](email)', 'Hours: {hours}']
      ] }
    ]
  }
};

/* ------------------------------------------------------------------ privacy */
I18N.privacy = {
  ku: {
    meta: { title: 'سیاسەتی تایبەتمەندی | ڤێلینا شۆپینگ', desc: 'ڤێلینا شۆپینگ چۆن زانیارییە کەسییەکانت کۆدەکاتەوە، بەکاری دەهێنێت، هاوبەشی دەکات و دەیپارێزێت کاتێک کاڵای SHEIN لە ڕێگەی ئێمەوە داوا دەکەیت.' },
    h1: 'سیاسەتی تایبەتمەندی',
    lead: 'تایبەتمەندیی تۆ بۆ ئێمە گرنگە. ئەم سیاسەتە بە زمانێکی سادە ڕووندەکاتەوە چ زانیارییەک کۆدەکەینەوە، بۆچی بەکاری دەهێنین، لەگەڵ کێ هاوبەشی دەکەین و چ مافێکت هەیە.',
    sections: [
      { id: 'who-we-are', h: 'ئێمە کێین', body: [
        '{name} خزمەتگوزارییەکی سەربەخۆی کڕینی کەسیی ئۆنلاینە. تۆ کاڵاکان لە ئەپ یان ماڵپەڕی SHEIN هەڵدەبژێریت، سەبەتەکەت بۆمان دەنێریت و ئێمە دەیانکڕین، دەیانهێنین و لە عێراق و هەرێمی کوردستان دەیانگەیەنینە دەستت. کارەکەمان ئۆنلاینە و نووسینگەیەکمان هەیە لە {address}.',
        'لەم سیاسەتەدا، «ئێمە» واتە {name}. دەتوانیت لەم ڕێگایانەوە پەیوەندیمان پێوە بکەیت:',
        ['واتساپ و تەلەفۆن: [{phone}](whatsapp)', 'ئیمەیڵ: [{email}](email)', 'ئینستاگرام: [{ig}](instagram)', 'نووسینگە: {address}'],
        { note: 'ئێمە بازرگانییەکی سەربەخۆین. ئێمە SHEIN نین، هاوبەش، بریکار یان فرۆشگای فەرمیی SHEIN نین و هیچ پەیوەندییەکی فەرمیمان پێیەوە نییە. «SHEIN» نیشانەی بازرگانیی خاوەنەکەیەتی.' }
      ] },
      { id: 'scope', h: 'بواری جێبەجێکردن', body: [
        'ئەم سیاسەتە ئەو زانیارییە کەسییانە دەگرێتەوە کە وەریدەگرین کاتێک پەیوەندیمان پێوە دەکەیت یان لە ڕێگەی هەر یەکێک لەم کەناڵانەوە داوا دەکەیت:',
        ['ماڵپەڕەکەمان {website}', 'واتساپ', 'ئینستاگرام', 'فەیسبووک', 'پەیوەندیی تەلەفۆنی'],
        'ئەم سیاسەتە ماڵپەڕ و ئەپی کۆمپانیاکانی تر وەک SHEIN، واتساپ یان ئینستاگرام ناگرێتەوە؛ ئەوان سیاسەتی تایبەتمەندیی خۆیان هەیە (بڕوانە بەشی «پلاتفۆرمەکانی لایەنی سێیەم» لە خوارەوە).'
      ] },
      { id: 'information-we-collect', h: 'ئەو زانیارییانەی کۆیان دەکەینەوە', body: [
        'تەنها ئەو زانیارییانە کۆدەکەینەوە کە بۆ ئەنجامدانی داواکارییەکەت و پەیوەندیکردن پێتەوە پێویستن.',
        { h3: 'ئا. ئەو زانیارییانەی خۆت پێمانی دەدەیت' },
        'کاتێک داوا دەکەیت یان لە واتساپ، ئینستاگرام، فەیسبووک یان بە تەلەفۆن پەیوەندیمان پێوە دەکەیت، لەوانەیە ئەم زانیارییانەمان پێ بدەیت:',
        ['ناوی تەواو', 'ژمارەی تەلەفۆن یان واتساپ', 'ناونیشانی گەیاندن و شار', 'نزیکترین شوێنی ناسراو', 'لینک یان وێنەی شاشەی سەبەتەی SHEIN', 'وردەکاریی کاڵاکان و قەبارەکان', 'مێژووی داواکارییەکانت', 'ئەو نامانەی بۆمانی دەنێریت'],
        { h3: 'ب. کاتێک سەردانی ماڵپەڕەکەمان دەکەیت' },
        'ماڵپەڕەکەمان زۆر کەم زانیاری کۆدەکاتەوە:',
        ['تۆماری تەکنیکیی سەرەتایی کە دابینکەری هۆستینگەکەمان هەڵیدەگرێت (وەک ناونیشانی IP، جۆری وێبگەڕ و کاتی سەردان)، تەنها بۆ پاراستن و کارکردنی دروستی ماڵپەڕەکە.', 'زمانی هەڵبژێردراوت، کە تەنها لە وێبگەڕی خۆتدا (localStorage) هەڵدەگیرێت تاکو جاری داهاتوو ماڵپەڕەکە بە زمانی خۆت بکرێتەوە. ئەم زانیارییە بۆ ئێمە نانێردرێت.', 'ئێمە کووکیی ڕیکلام، ئامرازی شیکاری (analytics) یان پیکسڵی بەدواداچوون بەکار **ناهێنین**.'],
        { h3: 'پ. ئەوەی هەرگیز داوای ناکەین' },
        { note: 'ئێمە **هەرگیز** داوای ژمارەی کارتی بانکی، وشەی نهێنی، وشەی نهێنیی هەژماری SHEIN یان هیچ کۆدێکی پشتڕاستکردنەوە ناکەین و هەڵیان ناگرین. ئەگەر کەسێک بە ناوی ئێمەوە داوای ئەمانەی لێکردیت، مەیاندە و لە ڕێگەی کەناڵە فەرمییەکانمانەوە پەیوەندیمان پێوە بکە.' }
      ] },
      { id: 'how-we-use', h: 'چۆن زانیارییەکانت بەکاردەهێنین', body: [
        'زانیارییەکانت تەنها بۆ پێشکەشکردنی خزمەتگوزارییەکەمان بە تۆ بەکاردەهێنین:',
        ['بۆ نرخاندنی سەبەتەکەت، کڕینی کاڵاکان و گەیاندنی داواکارییەکەت.', 'بۆ پەیوەندیکردن پێتەوە دەربارەی پشتڕاستکردنەوەی داواکاری، کاڵای نەماو یان گۆڕاو، دواکەوتن، گەیاندن و گەڕاندنەوەی پارە.', 'بۆ وەڵامدانەوەی پرسیارەکانت و پشتگیریی کڕیاران.', 'بۆ ڕێگریکردن لە فێڵ و پاراستنی کڕیارەکانمان و کارەکەمان.'],
        { note: 'ئێمە **هەرگیز** زانیارییە کەسییەکانت نافرۆشین. بەبێ ڕەزامەندیی تۆ، نامەی ڕیکلامیی نەپەیوەندیدارت بۆ نانێرین.' }
      ] },
      { id: 'legal-basis', h: 'بنەمای یاسایی', body: [
        'زانیارییە کەسییەکانت لەسەر ئەم بنەمایانە بەکاردەهێنین:',
        ['**جێبەجێکردنی داواکارییەکەت:** پێویستمان بە زانیارییەکانتە بۆ کڕین، ناردن و گەیاندنی ئەو کاڵایانەی داوات کردوون.', '**ڕەزامەندیی تۆ:** کاتێک پەیوەندیمان پێوە دەکەیت و زانیارییەکانت بۆ دەنێریت، ڕازی دەبیت کە بۆ ئەو مەبەستانەی لەم سیاسەتەدا هاتوون بەکاریان بهێنین.'],
        'دەتوانیت هەر کاتێک بتەوێت بە پەیوەندیکردن پێمانەوە ڕەزامەندییەکەت بکێشیتەوە. ئەمە کار ناکاتە سەر ئەوەی پێشتر کراوە، بەڵام لەوانەیە بەبێ ئەو زانیارییانەی بۆ گەیاندن پێویستن نەتوانین داواکارییەکە تەواو بکەین.'
      ] },
      { id: 'sharing', h: 'هاوبەشکردنی زانیاری', body: [
        'ئێمە زانیارییە کەسییەکانت نافرۆشین، بە کرێ نادەین و نایدەین بە هیچ لایەنێک بۆ بەکارهێنانی خۆی. تەنها کەمترین زانیاریی پێویست بۆ تەواوکردنی داواکارییەکەت هاوبەش دەکەین لەگەڵ:',
        { table: [['لایەن', 'چی هاوبەش دەکەین', 'بۆچی'], ['SHEIN', 'وردەکاریی داواکاریی کاڵاکان (کاڵا، قەبارە، ژمارە)', 'بۆ کڕینی ئەو کاڵایانەی هەڵتبژاردوون'], ['هاوبەشی گواستنەوەمان لە ئیمارات', 'وردەکاریی داواکاری و پاکێت کە بۆ ناردن پێویستن', 'بۆ ناردنی داواکارییەکەت لە ئیماراتەوە بۆ عێراق'], ['شۆفێرانی گەیاندنی ناوخۆیی', 'تەنها ناو، ژمارەی تەلەفۆن و ناونیشانەکەت', 'بۆ گەیاندنی داواکارییەکەت تا بەردەم دەرگا']] },
        'تەنها ئەگەر یاسا داوای بکات، زانیاری دەدەینە دەسەڵاتە فەرمییەکان.'
      ] },
      { id: 'third-party-platforms', h: 'پلاتفۆرمەکانی لایەنی سێیەم', body: [
        'کاتێک لە ڕێگەی واتساپ، ئینستاگرام یان فەیسبووکەوە پەیوەندیمان پێوە دەکەیت، یان نەخشەی Google Maps دەکەیتەوە، ئەو کۆمپانیایانەش بەپێی سیاسەتی تایبەتمەندیی خۆیان مامەڵە لەگەڵ زانیارییەکانت دەکەن. ئێمە کۆنترۆڵیان ناکەین، بۆیە تکایە سیاسەتەکانیان بخوێنەرەوە:',
        ['[سیاسەتی تایبەتمەندیی واتساپ](https://www.whatsapp.com/legal/privacy-policy)', '[سیاسەتی تایبەتمەندیی ئینستاگرام](https://privacycenter.instagram.com/policy)', '[سیاسەتی تایبەتمەندیی فەیسبووک / Meta](https://www.facebook.com/privacy/policy)', '[سیاسەتی تایبەتمەندیی Google](https://policies.google.com/privacy)'],
        'نەخشەی ناو ماڵپەڕەکەمان تەنها ئەو کاتە لە Google ـەوە بار دەبێت کە کلیک دەکەیت بۆ پیشاندانی. تا کلیک نەکەیت، نەخشەکەمان هیچ زانیارییەک بۆ Google نانێرێت.'
      ] },
      { id: 'international-processing', h: 'مامەڵەکردنی نێودەوڵەتی', body: [
        'بۆ ناردنی داواکارییەکەت، وردەکارییەکانی داواکاری لە ئیماراتی عەرەبیی یەکگرتوو مامەڵەیان لەگەڵ دەکرێت، چونکە لەوێ کاڵاکانت دەکڕین و دەینێرین. لەوێ تەنها بۆ ناردنی داواکارییەکەت بۆ عێراق بەکاردەهێنرێن.'
      ] },
      { id: 'retention', h: 'ماوەی هەڵگرتن', body: [
        'زانیاریی داواکاری و کڕیار بۆ ماوەی {retention} مانگ هەڵدەگرین، دواتر بە تەواوی و بۆ هەمیشە دەیسڕینەوە.',
        'هەروەها دەتوانیت داوا بکەیت زووتر بیسڕینەوە (بڕوانە بەشی «مافەکانت»).'
      ] },
      { id: 'security', h: 'پاراستنی زانیاری', body: [
        'هەنگاوی گونجاو دەگرینەبەر بۆ پاراستنی زانیارییەکانت:',
        ['تەنها ژمارەیەکی سنووردار لە ستافەکەمان، کە بۆ ئەنجامدانی داواکارییەکەت پێویستیان پێیەتی، دەستیان پێی دەگات.', 'هەژمارەکانمان بە پشتڕاستکردنەوەی دوو هەنگاوی (two-factor authentication) پارێزراون.', 'هیچ زانیارییەکی کارتی پارەدان هەڵناگرین، چونکە هەرگیز وەریناگرین.'],
        'هیچ ڕێگایەکی هەڵگرتن یان ناردنی زانیاری لە ئینتەرنێتدا بە تەواوی پارێزراو نییە، بەڵام بە هەموو توانامانەوە هەوڵ دەدەین زانیارییەکانت سەلامەت بن.'
      ] },
      { id: 'your-rights', h: 'مافەکانت', body: [
        'تۆ مافی ئەمانەت هەیە:',
        ['داوای کۆپییەک لەو زانیارییە کەسییانە بکەیت کە لامانە.', 'داوا بکەیت زانیاریی هەڵە یان ناتەواو ڕاست بکەینەوە.', 'داوا بکەیت زانیارییەکانت بسڕینەوە.', 'هەر کاتێک بتەوێت ڕەزامەندییەکەت بکێشیتەوە.', 'داوا بکەیت ئیتر نامەت بۆ نەنێرین.'],
        'بۆ ناردنی داواکاری، لە [واتساپ](whatsapp) نامەمان بۆ بنێرە یان [ئیمەیڵ](email) بنێرە بۆ {email}.',
        'لە ماوەی {respond} ڕۆژدا وەڵامی هەموو داواکارییەک دەدەینەوە.'
      ] },
      { id: 'children', h: 'منداڵان', body: [
        'خزمەتگوزارییەکەمان بۆ کەسانی تەمەن 18 ساڵ و سەرووترە. هەر کەسێک تەمەنی لە 18 ساڵ کەمتر بێت، دەبێت لە ڕێگەی دایک و باوک یان سەرپەرشتیارەکەیەوە داوا بکات.',
        'جلوبەرگی منداڵان و ساوایان لەلایەن دایک و باوک یان سەرپەرشتیارەوە داوا دەکرێت، و ئێمە بە ئاگاداریی خۆمان زانیاریی کەسی ڕاستەوخۆ لە منداڵان کۆناکەینەوە.'
      ] },
      { id: 'changes', h: 'گۆڕانکاری لەم سیاسەتەدا', body: [
        'لەوانەیە جار جار ئەم سیاسەتە نوێ بکەینەوە. بەرواری سەرەوەی ئەم پەڕەیە دوایین وەشان پیشان دەدات، بۆیە تکایە بە بەردەوامی سەیری بکە.',
        'دوایین نوێکردنەوە: {updated}'
      ] },
      { id: 'contact', h: 'پەیوەندیمان پێوە بکە', body: [
        'ئەگەر هەر پرسیارێکت دەربارەی ئەم سیاسەتە یان زانیارییەکانت هەیە، پەیوەندیمان پێوە بکە:',
        ['ناو: {name}', 'ناونیشان: {address}', 'واتساپ و تەلەفۆن: [{phone}](whatsapp)', 'ئیمەیڵ: [{email}](email)', 'ئینستاگرام: [{ig}](instagram)', 'کاتەکانی کار: {hours}'],
        'هەروەها دەتوانیت سەردانی [پەڕەی پەیوەندی](contact.html) بکەیت.'
      ] }
    ]
  },

  ar: {
    meta: { title: 'سياسة الخصوصية | ڤيلينا شوبينغ', desc: 'كيف تجمع ڤيلينا شوبينغ بياناتك الشخصية وتستخدمها وتشاركها وتحميها عند طلب منتجات SHEIN عبرنا، وما هي حقوقك.' },
    h1: 'سياسة الخصوصية',
    lead: 'خصوصيتك تهمّنا. توضّح هذه السياسة بكلمات بسيطة ما المعلومات التي نجمعها، ولماذا نستخدمها، ومع من نشاركها، وما الحقوق التي تملكها.',
    sections: [
      { id: 'who-we-are', h: 'من نحن', body: [
        '{name} خدمة تسوّق شخصي مستقلة عبر الإنترنت. تختار المنتجات من تطبيق SHEIN أو موقعه، وترسل لنا سلّتك، فنشتريها نيابةً عنك ونشحنها ونوصلها إليك في العراق وإقليم كوردستان. نعمل عبر الإنترنت ولدينا مكتب في {address}.',
        'في هذه السياسة، تعني كلمتا «نحن» و«لنا» {name}. يمكنك التواصل معنا عبر:',
        ['واتساب والهاتف: [{phone}](whatsapp)', 'البريد الإلكتروني: [{email}](email)', 'إنستغرام: [{ig}](instagram)', 'المكتب: {address}'],
        { note: 'نحن نشاط تجاري مستقل. لسنا SHEIN، ولسنا شريكاً أو وكيلاً أو متجراً رسمياً لـ SHEIN، ولا تربطنا بها أي علاقة رسمية. «SHEIN» علامة تجارية مملوكة لأصحابها.' }
      ] },
      { id: 'scope', h: 'نطاق السياسة', body: [
        'تنطبق هذه السياسة على المعلومات الشخصية التي نتلقاها عندما تتواصل معنا أو تطلب عبر أيٍّ من قنواتنا:',
        ['موقعنا الإلكتروني {website}', 'واتساب', 'إنستغرام', 'فيسبوك', 'المكالمات الهاتفية'],
        'ولا تشمل هذه السياسة مواقع أو تطبيقات الشركات الأخرى مثل SHEIN أو واتساب أو إنستغرام، فلكلٍّ منها سياسة خصوصية خاصة بها (انظر قسم «منصات الأطراف الثالثة» أدناه).'
      ] },
      { id: 'information-we-collect', h: 'المعلومات التي نجمعها', body: [
        'نجمع فقط المعلومات التي نحتاجها لتنفيذ طلبك والتواصل معك.',
        { h3: 'أ. المعلومات التي تقدّمها لنا' },
        'عندما تطلب أو تتواصل معنا عبر واتساب أو إنستغرام أو فيسبوك أو الهاتف، قد تقدّم لنا:',
        ['الاسم الكامل', 'رقم الهاتف أو واتساب', 'عنوان التوصيل والمدينة', 'أقرب نقطة دالة', 'روابط سلة SHEIN أو لقطات الشاشة', 'تفاصيل المنتجات والمقاسات', 'سجل طلباتك', 'الرسائل التي ترسلها إلينا'],
        { h3: 'ب. عند زيارة موقعنا' },
        'يجمع موقعنا معلومات قليلة جداً:',
        ['سجلات تقنية أساسية يحتفظ بها مزوّد الاستضافة (مثل عنوان IP ونوع المتصفح ووقت الزيارة)، وتُستخدم فقط لأغراض الأمان ولضمان عمل الموقع بشكل سليم.', 'اللغة التي تختارها، وتُحفظ فقط في متصفحك (localStorage) ليفتح الموقع بلغتك في المرة القادمة، ولا تُرسل إلينا.', 'نحن **لا** نستخدم ملفات تعريف الارتباط الإعلانية، ولا أدوات التحليل (analytics)، ولا بكسلات التتبع.'],
        { h3: 'ج. ما لا نطلبه أبداً' },
        { note: 'نحن **لا نطلب أبداً** ولا نحفظ أرقام البطاقات البنكية، أو كلمات المرور، أو كلمة مرور حساب SHEIN، أو أي رموز تحقق. إذا طلب منك أحد هذه المعلومات باسمنا، فلا تشاركها وتواصل معنا عبر قنواتنا الرسمية.' }
      ] },
      { id: 'how-we-use', h: 'كيف نستخدم معلوماتك', body: [
        'نستخدم معلوماتك فقط لتقديم خدمتنا لك:',
        ['لتسعير سلّتك وشراء منتجاتك وتوصيل طلبك.', 'للتواصل معك بشأن تأكيد الطلب، والمنتجات النافدة أو المتغيّرة، والتأخير، والتوصيل، واسترداد المبالغ.', 'للإجابة عن أسئلتك وتقديم خدمة العملاء.', 'لمنع الاحتيال وحماية عملائنا ونشاطنا.'],
        { note: 'نحن **لا نبيع أبداً** بياناتك الشخصية، ولا نرسل إليك رسائل تسويقية غير متعلقة بخدمتنا دون موافقتك.' }
      ] },
      { id: 'legal-basis', h: 'الأساس القانوني', body: [
        'نستخدم معلوماتك الشخصية على الأسس التالية:',
        ['**تنفيذ طلبك:** نحتاج إلى بياناتك لشراء المنتجات التي طلبتها وشحنها وتوصيلها.', '**موافقتك:** عندما تتواصل معنا وترسل بياناتك، فإنك توافق على استخدامها للأغراض الواردة في هذه السياسة.'],
        'يمكنك سحب موافقتك في أي وقت بالتواصل معنا. لا يؤثر ذلك على ما تمّ قبل سحبها، لكن قد لا نتمكن من إكمال الطلب دون البيانات اللازمة لتوصيله.'
      ] },
      { id: 'sharing', h: 'مشاركة المعلومات', body: [
        'نحن لا نبيع بياناتك الشخصية ولا نؤجّرها ولا نعطيها لأي جهة لاستخدامها الخاص. نشارك فقط الحد الأدنى من المعلومات اللازمة لإكمال طلبك مع:',
        { table: [['الجهة', 'ما نشاركه', 'السبب'], ['SHEIN', 'تفاصيل طلب المنتجات (المنتجات، المقاسات، الكميات)', 'لشراء المنتجات التي اخترتها'], ['شريك الشحن في الإمارات', 'تفاصيل الطلب والطرد اللازمة للشحن', 'لشحن طلبك من الإمارات إلى العراق'], ['مندوبو التوصيل المحليون', 'اسمك ورقم هاتفك وعنوانك فقط', 'لتوصيل طلبك إلى باب منزلك']] },
        'ولا نشارك المعلومات مع الجهات الرسمية إلا إذا ألزمنا القانون بذلك.'
      ] },
      { id: 'third-party-platforms', h: 'منصات الأطراف الثالثة', body: [
        'عندما تتواصل معنا عبر واتساب أو إنستغرام أو فيسبوك، أو تفتح خريطة Google Maps، تعالج هذه الشركات أيضاً بياناتك وفق سياسات الخصوصية الخاصة بها. نحن لا نتحكم بها، لذا يُرجى قراءة سياساتها:',
        ['[سياسة خصوصية واتساب](https://www.whatsapp.com/legal/privacy-policy)', '[سياسة خصوصية إنستغرام](https://privacycenter.instagram.com/policy)', '[سياسة خصوصية فيسبوك / Meta](https://www.facebook.com/privacy/policy)', '[سياسة خصوصية Google](https://policies.google.com/privacy)'],
        'لا تُحمَّل الخريطة الموجودة على موقعنا من Google إلا عندما تنقر لإظهارها. وقبل النقر، لا ترسل خريطتنا أي بيانات إلى Google.'
      ] },
      { id: 'international-processing', h: 'المعالجة الدولية', body: [
        'لشحن طلبك، تتمّ معالجة تفاصيل الطلب في الإمارات العربية المتحدة، حيث نشتري منتجاتك ونشحنها. ولا تُستخدم هناك إلا لشحن طلبك إلى العراق.'
      ] },
      { id: 'retention', h: 'مدة الاحتفاظ', body: [
        'نحتفظ ببيانات الطلبات والعملاء لمدة {retention} أشهر، ثم نحذفها نهائياً.',
        'ويمكنك أيضاً أن تطلب حذف بياناتك قبل ذلك (انظر قسم «حقوقك»).'
      ] },
      { id: 'security', h: 'أمن المعلومات', body: [
        'نتخذ خطوات مناسبة لحماية معلوماتك:',
        ['لا يطّلع على بياناتك إلا عدد محدود من الموظفين الذين يحتاجونها لتنفيذ طلبك.', 'حساباتنا محمية بالتحقق بخطوتين (two-factor authentication).', 'لا نحفظ أي بيانات لبطاقات الدفع، لأننا لا نطلبها أصلاً.'],
        'لا توجد طريقة لحفظ البيانات أو إرسالها عبر الإنترنت آمنة تماماً، لكننا نبذل قصارى جهدنا للحفاظ على سلامة معلوماتك.'
      ] },
      { id: 'your-rights', h: 'حقوقك', body: [
        'يحقّ لك أن:',
        ['تطلب نسخة من البيانات الشخصية التي نحتفظ بها عنك.', 'تطلب تصحيح البيانات الخاطئة أو الناقصة.', 'تطلب حذف بياناتك.', 'تسحب موافقتك في أي وقت.', 'تطلب منّا التوقف عن إرسال الرسائل إليك.'],
        'لتقديم طلب، راسلنا عبر [واتساب](whatsapp) أو أرسل [بريداً إلكترونياً](email) إلى {email}.',
        'نردّ على كل طلب خلال {respond} يوماً.'
      ] },
      { id: 'children', h: 'الأطفال', body: [
        'خدمتنا مخصّصة لمن تبلغ أعمارهم 18 عاماً فأكثر. ومن هم دون 18 عاماً يجب أن يطلبوا عن طريق أحد الوالدين أو الوليّ.',
        'ملابس الأطفال والرضّع يطلبها الآباء والأمهات أو الأولياء، ولا نجمع عن علم بيانات شخصية مباشرة من الأطفال.'
      ] },
      { id: 'changes', h: 'التغييرات على هذه السياسة', body: [
        'قد نحدّث هذه السياسة من وقت لآخر. يُظهر التاريخ في أعلى هذه الصفحة أحدث إصدار، لذا يُرجى مراجعتها باستمرار.',
        'آخر تحديث: {updated}'
      ] },
      { id: 'contact', h: 'تواصل معنا', body: [
        'إذا كان لديك أي سؤال حول هذه السياسة أو بياناتك، تواصل معنا:',
        ['الاسم: {name}', 'العنوان: {address}', 'واتساب والهاتف: [{phone}](whatsapp)', 'البريد الإلكتروني: [{email}](email)', 'إنستغرام: [{ig}](instagram)', 'ساعات العمل: {hours}'],
        'ويمكنك أيضاً زيارة [صفحة التواصل](contact.html).'
      ] }
    ]
  },

  en: {
    meta: { title: 'Privacy Policy | Velina Shopping', desc: 'How Velina Shopping collects, uses, shares and protects your personal data when you order SHEIN items through us, and what your rights are.' },
    h1: 'Privacy Policy',
    lead: 'Your privacy matters to us. This policy explains in simple words what information we collect, why we use it, who we share it with and what rights you have.',
    sections: [
      { id: 'who-we-are', h: 'Who we are', body: [
        '{name} is an independent online personal-shopping service. You choose items on the SHEIN app or website, send us your basket, and we buy them on your behalf, ship them and deliver them to you in Iraq and the Kurdistan Region. We run our business online and have an office at {address}.',
        'In this policy, “we”, “us” and “our” mean {name}. You can reach us here:',
        ['WhatsApp and phone: [{phone}](whatsapp)', 'Email: [{email}](email)', 'Instagram: [{ig}](instagram)', 'Office: {address}'],
        { note: 'We are an independent business. We are not SHEIN, and we are not a SHEIN partner, agent or official store, nor officially affiliated with SHEIN in any way. “SHEIN” is a trademark of its owner.' }
      ] },
      { id: 'scope', h: 'Scope', body: [
        'This policy applies to the personal information we receive when you contact us or order through any of our channels:',
        ['Our website {website}', 'WhatsApp', 'Instagram', 'Facebook', 'Phone calls'],
        'It does not cover the websites or apps of other companies, such as SHEIN, WhatsApp or Instagram. They have their own privacy policies (see “Third-party platforms” below).'
      ] },
      { id: 'information-we-collect', h: 'Information we collect', body: [
        'We only collect the information we need to handle your order and stay in touch with you.',
        { h3: 'a. Information you give us' },
        'When you order or contact us on WhatsApp, Instagram, Facebook or by phone, you may give us:',
        ['Your full name', 'Your phone or WhatsApp number', 'Your delivery address and city', 'The nearest landmark', 'SHEIN basket links or screenshots', 'Product details and sizes', 'Your order history', 'The messages you send us'],
        { h3: 'b. When you visit our website' },
        'Our website collects very little information:',
        ['Basic technical logs kept by our hosting provider (such as IP address, browser type and time of visit), used only for security and to keep the site working properly.', 'Your language choice, saved only in your own browser (localStorage) so the site opens in your language next time. It is not sent to us.', 'We do **not** use advertising cookies, analytics tools or tracking pixels.'],
        { h3: 'c. What we never ask for' },
        { note: 'We **never** ask for or store bank card numbers, passwords, your SHEIN account password or any verification codes. If anyone asks you for these in our name, do not share them, and contact us through our official channels.' }
      ] },
      { id: 'how-we-use', h: 'How we use your information', body: [
        'We use your information only to provide our service to you:',
        ['To price your basket, purchase your items and deliver your order.', 'To contact you about order confirmation, sold-out or changed items, delays, delivery and refunds.', 'To answer your questions and give you customer support.', 'To prevent fraud and protect our customers and our business.'],
        { note: 'We **never** sell your personal data. We do not send you unrelated marketing messages without your consent.' }
      ] },
      { id: 'legal-basis', h: 'Legal basis', body: [
        'We use your personal information on the following bases:',
        ['**To perform your order:** we need your details to purchase, ship and deliver the items you asked for.', '**Your consent:** when you contact us and send us your details, you agree that we use them for the purposes described in this policy.'],
        'You can withdraw your consent at any time by contacting us. This does not affect what was done before you withdrew it, but we may not be able to complete an order without the details needed to deliver it.'
      ] },
      { id: 'sharing', h: 'Sharing your information', body: [
        'We do not sell, rent or give your personal data to anyone for their own use. We share only the minimum information needed to complete your order with:',
        { table: [['Who', 'What we share', 'Why'], ['SHEIN', 'Product order details (items, sizes, quantities)', 'To purchase the items you chose'], ['Our shipping partner in the UAE', 'Order and parcel details needed for shipping', 'To ship your order from the UAE to Iraq'], ['Our local delivery drivers', 'Your name, phone number and address only', 'To deliver your order to your door']] },
        'We share information with authorities only if the law requires us to.'
      ] },
      { id: 'third-party-platforms', h: 'Third-party platforms', body: [
        'When you contact us through WhatsApp, Instagram or Facebook, or open a map from Google Maps, those companies also process your data under their own privacy policies. We do not control them, so please read their policies:',
        ['[WhatsApp Privacy Policy](https://www.whatsapp.com/legal/privacy-policy)', '[Instagram Privacy Policy](https://privacycenter.instagram.com/policy)', '[Facebook / Meta Privacy Policy](https://www.facebook.com/privacy/policy)', '[Google Privacy Policy](https://policies.google.com/privacy)'],
        'The map on our website loads from Google only when you click to show it. Until you click, our map sends no data to Google.'
      ] },
      { id: 'international-processing', h: 'International processing', body: [
        'To ship your order, the order details are processed in the United Arab Emirates (UAE), where we purchase and ship your items. They are used there only to ship your order to Iraq.'
      ] },
      { id: 'retention', h: 'How long we keep your data', body: [
        'We keep order and customer data for {retention} months. After that, we permanently delete it.',
        'You can also ask us to delete your data earlier (see “Your rights”).'
      ] },
      { id: 'security', h: 'Security', body: [
        'We take reasonable steps to protect your information:',
        ['Only a limited number of staff who need your data to handle your order can access it.', 'Our accounts are secured with two-factor authentication.', 'We do not store any payment card details, because we never ask for them.'],
        'No method of storing or sending data online is completely secure, but we do our best to keep your information safe.'
      ] },
      { id: 'your-rights', h: 'Your rights', body: [
        'You have the right to:',
        ['Ask for a copy of the personal data we hold about you.', 'Ask us to correct wrong or incomplete data.', 'Ask us to delete your data.', 'Withdraw your consent at any time.', 'Ask us to stop sending you messages.'],
        'To make a request, message us on [WhatsApp](whatsapp) or send an [email](email) to {email}.',
        'We respond to every request within {respond} days.'
      ] },
      { id: 'children', h: 'Children', body: [
        'Our service is for people aged 18 and over. Anyone under 18 must order through a parent or guardian.',
        'Kids’ and baby clothes are ordered by parents or guardians, and we do not knowingly collect personal data directly from children.'
      ] },
      { id: 'changes', h: 'Changes to this policy', body: [
        'We may update this policy from time to time. The date at the top of this page shows the latest version, so please check it regularly.',
        'Last updated: {updated}'
      ] },
      { id: 'contact', h: 'Contact us', body: [
        'If you have any question about this policy or your data, contact us:',
        ['Name: {name}', 'Address: {address}', 'WhatsApp and phone: [{phone}](whatsapp)', 'Email: [{email}](email)', 'Instagram: [{ig}](instagram)', 'Working hours: {hours}'],
        'You can also visit our [contact page](contact.html).'
      ] }
    ]
  }
};

/* ------------------------------------------------------------------ terms */
I18N.terms = {
  ku: {
    meta: { title: 'مەرجەکانی خزمەتگوزاری | ڤێلینا شۆپینگ', desc: 'مەرجەکانی خزمەتگوزاریی ڤێلینا شۆپینگ: داواکردن، نرخ و ڕێژەی دۆلار، کرێی گەیاندن، پارەدان لە کاتی وەرگرتن، هەڵوەشاندنەوە و گەڕاندنەوە.' },
    h1: 'مەرجەکانی خزمەتگوزاری',
    lead: 'ئەم مەرجانە ڕێکی دەخەن کە چۆن لە ڕێگەی {name}ەوە داوا دەکەیت و ئێمە چۆن کاڵاکانت لە SHEIN بۆ دەکڕین و دەیگەیەنینە دەرگای ماڵەکەت. تکایە پێش داواکردن بە وردی بیانخوێنەوە.',
    sections: [
      { id: 'acceptance', h: 'ڕازیبوون بە مەرجەکان', body: [
        'کاتێک لە ڕێگەی هەر یەکێک لە کەناڵەکانمانەوە (واتساپ، ئینستاگرام، فەیسبووک یان ئیمەیڵ) داوایەک دەنێریت، واتە ئەم مەرجانەت خوێندووەتەوە و ڕازیت پێیان.',
        'ئەگەر ڕازی نیت بە هەر بەشێکی ئەم مەرجانە، تکایە داوا مەکە.'
      ] },
      { id: 'the-service', h: 'خزمەتگوزارییەکەمان', body: [
        '{name} خزمەتگوزارییەکی سەربەخۆی کڕینی کەسییە بە شێوەی ئۆنلاین. ئێمە وەک بریکاری کڕین و ناردن بۆ تۆ کار دەکەین: کاڵاکان بە ناوی تۆوە لە SHEIN دەکڕین، لە ئیماراتەوە دەینێرین و دەیانگەیەنینە دەرگای ماڵەکەت لە عێراق و هەرێمی کوردستان.',
        'ئێمە کاڵاکانی SHEIN دروست ناکەین، خاوەنیان نین و نایانفرۆشین، و هیچ پەیوەندییەکمان بە SHEIN ەوە نییە و لەلایەن SHEIN ەوە پشتگیری نەکراوین.',
        { note: '«SHEIN» نیشانەیەکی بازرگانیی خاوەنەکەیەتی و تەنها بۆ ڕوونکردنەوەی ئەو شوێنەی لێی دەکڕین بەکاری دەهێنین.' }
      ] },
      { id: 'eligibility', h: 'مەرجی بەکارهێنان', body: [
        'بۆ داواکردن دەبێت تەمەنت ١٨ ساڵ یان زیاتر بێت، یان ڕەزامەندیی دایک و باوک یان سەرپەرشتیارەکەت هەبێت.',
        'دەبێت ناو، ژمارەی مۆبایل و ناونیشانێکی دروست و تەواو بدەیت، چونکە گەیاندنی داواکارییەکەت پشتی پێ دەبەستێت.'
      ] },
      { id: 'ordering', h: 'چۆنیەتیی داواکردن', body: [
        'داواکردن بەم هەنگاوانە دەبێت:',
        [
          'هەنگاوی یەکەم: سەبەتەکەت (لینک یان وێنەی شاشە) لە [واتساپ](whatsapp) بۆمان بنێرە.',
          'هەنگاوی دووەم: ئێمە نرخ و بەردەستبوونی کاڵاکان دەپشکنین.',
          'هەنگاوی سێیەم: کۆی گشتیی کۆتایی بە دیناری عێراقی بۆت دەنێرین.',
          'هەنگاوی چوارەم: داواکارییەکە تەنها دوای ئەوەی تۆ بە ڕوونی ڕەزامەندیی خۆت دەردەبڕیت، پشتڕاست دەکرێتەوە.',
          'هەنگاوی پێنجەم: دوای پشتڕاستکردنەوەی تۆ، ئێمە کاڵاکان دەکڕین.'
        ],
        'تا ڕەزامەندیی ڕوونی تۆ وەرنەگرین، هیچ کڕینێک ناکەین.'
      ] },
      { id: 'prices-and-rate', h: 'نرخ و ڕێژەی دۆلار', body: [
        'نرخی کۆتایی بەم شێوەیە حیساب دەکرێت: نرخی کاڵا لە SHEIN لە کاتی کڕیندا × ڕێژەی ئێمە (لە ئێستادا {rate} دینار).',
        'ڕێژەکە لەوانەیە بگۆڕێت، بەڵام ئەو کۆی گشتییەی تۆ پشتڕاستی دەکەیتەوە کۆتاییە و دواتر ناگۆڕێت.',
        'هەموو داشکاندنەکانی SHEIN کە لە کاتی کڕیندا بەردەستن، بۆ داواکارییەکەت جێبەجێ دەکرێن.'
      ] },
      { id: 'fees', h: 'کرێی ناردن و گەیاندن', body: [
        'ناردنی نێودەوڵەتی لە ئیماراتەوە بۆ عێراق بەخۆڕاییە، بەڵام گەیاندن تا دەرگای ماڵ لەناو عێراقدا کرێی هەیە:',
        { table: [
          ['خزمەتگوزاری', 'کرێ'],
          ['ناردنی نێودەوڵەتی (ئیمارات ← عێراق)', 'بەخۆڕایی'],
          ['گەیاندن تا دەرگای ماڵ لە هەرێمی کوردستان', '{feeKrd} دینار'],
          ['گەیاندن تا دەرگای ماڵ لە شارەکانی تری عێراق', '{feeIraq} دینار'],
          ['ڕاسپاردنی گومرگی', 'لەسەر ڤێلینا شۆپینگ']
        ] },
        'تێچووی گومرگ بە تەواوی لەلایەن {name}ەوە دەدرێت و هیچ کرێیەکی شاراوەی تر نییە.'
      ] },
      { id: 'payment', h: 'پارەدان', body: [
        'پارەدان تەنها بە نەختینە لە کاتی وەرگرتنی داواکارییەکەیە.',
        [
          'داواکاری تا {threshold}: هیچ پارەیەکی پێشەکی پێویست نییە.',
          'داواکاری سەرووی {threshold}: {prepay}ی کۆی گشتی پێشەکی دەدرێت، و {rest}ی ماوە لە کاتی وەرگرتندا دەدرێت.'
        ],
        { note: 'پارەی پێشەکی تەنها لە ڕێگەی کەناڵە فەرمییەکانمانەوە دەدرێت. تکایە پارە بۆ هیچ هەژمارێکی تر مەنێرە.' }
      ] },
      { id: 'sold-out-items', h: 'کاڵای نەماو یان گۆڕاو', body: [
        'ئەگەر کاڵایەک پێش کڕین لە SHEIN نەما یان نرخەکەی گۆڕا، ئەو کاڵایە لە داواکارییەکەت لادەبرێت، بە وێنەی شاشە ئاگادارت دەکەینەوە و نرخی گشتی بەپێی ئەوە ڕاست دەکرێتەوە.',
        'ئێمە بەرپرسیار نین لە گۆڕانی بەردەستبوون یان نرخی کاڵاکان لە SHEIN پێش کڕین.'
      ] },
      { id: 'product-information', h: 'زانیاریی کاڵاکان', body: [
        'وێنە، وەسف، قەبارە و کوالیتیی کاڵاکان هەمووی لە SHEIN ەوە دێن، نەک لە ئێمەوە.',
        'تکایە پێش داواکردن خشتەی قەبارەکانی SHEIN و ڕاوبۆچوونی کڕیارەکان بە وردی بپشکنە.'
      ] },
      { id: 'delivery', h: 'گەیاندن', body: [
        'ماوەی گەیاندن نزیکەی {days} ڕۆژە. ئەمە خەمڵاندنە و گەرەنتی نییە، چونکە لەوانەیە بەهۆی گومرگ، گەشتە ئاسمانییەکان، پشوەکان، کەشوهەوا یان هێزی قاهیرە دوابکەوێت.',
        'تکایە مۆبایلەکەت بەردەست بێت و ناونیشانەکەت دروست بێت.',
        'بۆ زانیاریی زیاتر سەیری [سیاسەتی ناردن](shipping.html) بکە.'
      ] },
      { id: 'delivery-attempts', h: 'هەوڵەکانی گەیاندن', body: [
        'ئێمە {attempts} جار هەوڵ دەدەین داواکارییەکەت بگەیەنین.',
        'ئەگەر لە کاتی گەیاندندا داواکارییەکە هەڵبوەشێنیتەوە یان وەرینەگریت، دەگەڕێنرێتەوە بۆ ئۆفیسەکەمان لە هەولێر و لەوێ مامەڵەی لەگەڵ دەکرێت. دەتوانیت لە ئۆفیسەکەوە وەریبگریت.'
      ] },
      { id: 'cancellations', h: 'هەڵوەشاندنەوە', body: [
        'پێش ئەوەی ئێمە کاڵاکان بکڕین، هەڵوەشاندنەوە بەخۆڕاییە.',
        'دوای کڕین، هەڵوەشاندنەوە گەرەنتی نییە. ئەگەر SHEIN هێشتا ڕێگە بدات هەوڵ دەدەین، و هەر داواکارییەک بە جیا سەیر دەکرێت.'
      ] },
      { id: 'returns-and-refunds', h: 'گەڕاندنەوە و گەڕاندنەوەی پارە', body: [
        'کورتەیەک لە سیاسەتی گەڕاندنەوەمان:',
        [
          'کاڵای هەڵە، تێکچوو یان کەم: لە واتساپ پەیوەندیمان پێوە بکە لەگەڵ وێنە یان ڤیدیۆی پاکێتە کراوەکە.',
          'گەڕاندنەوەی پارەی پەسەندکراو لە ماوەی {refundTime} کاتژمێردا دەدرێت.',
          'قەبارەی هەڵە: گەڕاندنەوەی پارە بەردەستە ئەگەر کاڵاکە بەکارنەهاتبێت، نەشۆرابێت و تیکێت و پاکێجە ڕەسەنەکەی پێوە بێت.',
          'جلی ژێرەوە ناگەڕێندرێتەوە (بەهۆی پاکوخاوێنی).'
        ],
        'وردەکاریی تەواو لە [سیاسەتی گەڕاندنەوە و گەڕاندنەوەی پارە](returns.html) دایە.'
      ] },
      { id: 'prohibited-items', h: 'کاڵای قەدەغەکراو', body: [
        'داوای هیچ کاڵایەک ناکەین کە لە عێراق یان هەرێمی کوردستان نایاسایی بێت، یان هاوبەشی ناردنەکەمان ڕەتی بکاتەوە. ئەگەر کاڵایەکی وا لە داواکارییەکەدا هەبێت، ئاگادارت دەکەینەوە و لادەبرێت.'
      ] },
      { id: 'customer-responsibilities', h: 'بەرپرسیارێتییەکانی کڕیار', body: [
        'بە داواکردن ڕازی دەبیت بەوەی:',
        [
          'زانیاریی دروست و تەواو بدەیت.',
          'لە پەیوەندیکردندا ڕێزدار بیت لەگەڵ تیمەکەمان و شۆفێرەکانی گەیاندن.',
          'هیچ داواکارییەکی ساختە یان فێڵاوی نەنێریت.'
        ]
      ] },
      { id: 'limitation-of-liability', h: 'سنووری بەرپرسیارێتی', body: [
        'زۆرترین بەرپرسیارێتیی ئێمە بریتییە لەو بڕە پارەیەی بۆ ئەو کاڵایەی کێشەی هەیە داوتە.',
        'ئێمە بەرپرسیار نین لە هیچ زیانێکی ناڕاستەوخۆ.'
      ] },
      { id: 'official-channels', h: 'کەناڵە فەرمییەکان', body: [
        'ئێمە تەنها لە ڕێگەی ئەو کەناڵانەوە کار دەکەین کە لەم ماڵپەڕەدا هاتوون:',
        [
          'واتساپ و مۆبایل: [{phone}](whatsapp)',
          'ئینستاگرام: [{ig}](instagram)',
          '[پەڕەی فەرمیی فەیسبووک](facebook)',
          'ئیمەیڵ: [{email}](email)'
        ],
        'ئێمە بەرپرسیار نین لەو پارانەی بۆ هەژماری ساختە دەنێردرێن.',
        { note: 'ئێمە هەرگیز داوای ژمارەی کارت، وشەی نهێنی یان کۆدی پشتڕاستکردنەوەت لێ ناکەین.' }
      ] },
      { id: 'intellectual-property', h: 'مافی موڵکی هزری', body: [
        'لۆگۆ، دیزاین و ناوەڕۆکی ڤێلینا هەمووی موڵکی {name}ە و بەبێ ڕێگەپێدانی نووسراو بەکارناهێنرێن.'
      ] },
      { id: 'changes', h: 'گۆڕانکاری لە مەرجەکاندا', body: [
        'لەوانەیە هەندێک جار ئەم مەرجانە نوێ بکەینەوە. بەرواری دوایین نوێکردنەوە لە سەرەوەی ئەم پەڕەیە دەنووسرێت.',
        'بەردەوامبوونت لە بەکارهێنانی خزمەتگوزارییەکەمان دوای گۆڕانکاری، واتە ڕازیبوونت بە مەرجە نوێیەکان.'
      ] },
      { id: 'governing-law', h: 'یاسای جێبەجێکراو', body: [
        'ئەم مەرجانە ملکەچی یاساکانی عێراق و هەرێمی کوردستانن، و هەر ناکۆکییەک لە دادگاکانی هەولێر چارەسەر دەکرێت.'
      ] },
      { id: 'contact', h: 'پەیوەندیمان پێوە بکە', body: [
        'بۆ هەر پرسیارێک دەربارەی ئەم مەرجانە:',
        [
          'ناونیشان: [{address}](maps)',
          'مۆبایل و واتساپ: [{phone}](whatsapp)',
          'ئیمەیڵ: [{email}](email)',
          'کاتی کار: {hours}'
        ],
        'دەتوانیت سەردانی [پەڕەی پەیوەندی](contact.html) بکەیت.'
      ] }
    ]
  },

  ar: {
    meta: { title: 'شروط الخدمة | ڤيلينا شوبينغ', desc: 'شروط خدمة ڤيلينا شوبينغ: طريقة الطلب، الأسعار وسعر الصرف، رسوم التوصيل، الدفع عند الاستلام، الإلغاء والإرجاع.' },
    h1: 'شروط الخدمة',
    lead: 'توضّح هذه الشروط كيفية الطلب عبر {name}، وكيف نشتري منتجاتك من SHEIN ونوصلها إلى باب بيتك. يُرجى قراءتها بعناية قبل الطلب.',
    sections: [
      { id: 'acceptance', h: 'الموافقة على الشروط', body: [
        'عندما ترسل طلباً عبر أيٍّ من قنواتنا (واتساب أو إنستغرام أو فيسبوك أو البريد الإلكتروني)، فهذا يعني أنك قرأت هذه الشروط ووافقت عليها.',
        'إذا كنت لا توافق على أي جزء من هذه الشروط، يُرجى عدم الطلب.'
      ] },
      { id: 'the-service', h: 'خدمتنا', body: [
        '{name} خدمة تسوّق شخصي مستقلة عبر الإنترنت. نعمل وكيلاً للشراء والشحن نيابةً عنك: نشتري المنتجات من SHEIN باسمك، ونشحنها من الإمارات، ونوصلها إلى باب بيتك في العراق وإقليم كوردستان.',
        'نحن لا نصنع منتجات SHEIN ولا نملكها ولا نبيعها، ولسنا تابعين لـ SHEIN ولا معتمدين من قبلها.',
        { note: '«SHEIN» علامة تجارية مملوكة لصاحبها، ونستخدمها فقط لوصف المكان الذي نشتري منه.' }
      ] },
      { id: 'eligibility', h: 'أهلية الاستخدام', body: [
        'يجب أن يكون عمرك ١٨ عاماً أو أكثر، أو أن تحصل على موافقة أحد الوالدين أو ولي الأمر.',
        'يجب تقديم اسم ورقم هاتف وعنوان صحيحة وكاملة، لأن توصيل طلبك يعتمد عليها.'
      ] },
      { id: 'ordering', h: 'طريقة الطلب', body: [
        'يتم الطلب بالخطوات التالية:',
        [
          'الخطوة الأولى: أرسل سلة مشترياتك (رابط أو لقطات شاشة) عبر [واتساب](whatsapp).',
          'الخطوة الثانية: نتحقق من السعر وتوفر المنتجات.',
          'الخطوة الثالثة: نرسل لك المبلغ الإجمالي النهائي بالدينار العراقي.',
          'الخطوة الرابعة: لا يُعتبر الطلب مؤكداً إلا بعد أن تؤكده أنت بشكل واضح.',
          'الخطوة الخامسة: بعد تأكيدك، نقوم بشراء المنتجات.'
        ],
        'لا نقوم بأي عملية شراء قبل الحصول على تأكيدك الواضح.'
      ] },
      { id: 'prices-and-rate', h: 'الأسعار وسعر الصرف', body: [
        'يُحسب السعر النهائي كالتالي: سعر المنتج في SHEIN وقت الشراء × سعر الصرف لدينا (حالياً {rate} دينار).',
        'قد يتغير سعر الصرف، لكن المبلغ الإجمالي الذي تؤكده يكون نهائياً ولا يتغير بعد ذلك.',
        'تُطبَّق على طلبك جميع خصومات SHEIN المتاحة وقت الشراء.'
      ] },
      { id: 'fees', h: 'رسوم الشحن والتوصيل', body: [
        'الشحن الدولي من الإمارات إلى العراق مجاني، أما التوصيل إلى باب البيت داخل العراق فهو برسوم:',
        { table: [
          ['الخدمة', 'الرسوم'],
          ['الشحن الدولي (الإمارات ← العراق)', 'مجاناً'],
          ['التوصيل إلى الباب في إقليم كوردستان', '{feeKrd} دينار'],
          ['التوصيل إلى الباب في باقي مدن العراق', '{feeIraq} دينار'],
          ['التخليص الجمركي', 'على حساب ڤيلينا شوبينغ']
        ] },
        'تتحمّل {name} تكاليف الجمارك بالكامل، ولا توجد أي رسوم خفية أخرى.'
      ] },
      { id: 'payment', h: 'الدفع', body: [
        'الدفع نقداً عند الاستلام فقط.',
        [
          'الطلبات حتى {threshold}: لا يلزم أي دفع مسبق.',
          'الطلبات التي تزيد على {threshold}: يُدفع {prepay} من المبلغ الإجمالي مقدماً، ويُدفع الباقي {rest} عند الاستلام.'
        ],
        { note: 'يتم الدفع المسبق فقط عبر قنواتنا الرسمية. يُرجى عدم تحويل أي مبلغ إلى أي حساب آخر.' }
      ] },
      { id: 'sold-out-items', h: 'المنتجات النافدة أو المتغيرة', body: [
        'إذا نفد منتج من SHEIN أو تغيّر سعره قبل الشراء، يُحذف من طلبك، ونبلغك بذلك مع لقطات شاشة، ويُعدَّل السعر الإجمالي وفقاً لذلك.',
        'لسنا مسؤولين عن تغيّر توفر المنتجات أو أسعارها في SHEIN قبل الشراء.'
      ] },
      { id: 'product-information', h: 'معلومات المنتجات', body: [
        'الصور والأوصاف والمقاسات والجودة كلها مصدرها SHEIN وليس نحن.',
        'يُرجى مراجعة جداول المقاسات في SHEIN وتقييمات المشترين بعناية قبل الطلب.'
      ] },
      { id: 'delivery', h: 'التوصيل', body: [
        'مدة التوصيل التقديرية {days} يوماً. هذه مدة تقديرية وليست مضمونة، فقد تتأخر بسبب الجمارك أو الرحلات الجوية أو العطل الرسمية أو الطقس أو القوة القاهرة.',
        'يُرجى إبقاء هاتفك متاحاً والتأكد من صحة عنوانك.',
        'لمزيد من التفاصيل راجع [سياسة الشحن](shipping.html).'
      ] },
      { id: 'delivery-attempts', h: 'محاولات التوصيل', body: [
        'نحاول توصيل طلبك {attempts} مرات.',
        'إذا ألغيت الطلب أو رفضت استلامه عند التوصيل، يُعاد إلى مكتبنا في أربيل ويُتعامل معه هناك، ويمكنك استلامه من المكتب.'
      ] },
      { id: 'cancellations', h: 'الإلغاء', body: [
        'الإلغاء مجاني قبل أن نشتري المنتجات.',
        'بعد الشراء، لا يكون الإلغاء مضموناً. نحاول ذلك إذا كانت SHEIN لا تزال تسمح به، ويُنظر في كل حالة على حدة.'
      ] },
      { id: 'returns-and-refunds', h: 'الإرجاع واسترداد المبلغ', body: [
        'ملخص سياسة الإرجاع لدينا:',
        [
          'منتج خاطئ أو تالف أو ناقص: تواصل معنا عبر واتساب مع صور أو فيديو للطرد بعد فتحه.',
          'يُدفع المبلغ المسترد بعد الموافقة خلال {refundTime} ساعة.',
          'مقاس غير مناسب: يمكن استرداد المبلغ إذا كان المنتج غير مستخدم وغير مغسول ومعه البطاقات والتغليف الأصلي.',
          'الملابس الداخلية غير قابلة للإرجاع (لأسباب صحية).'
        ],
        'التفاصيل الكاملة في [سياسة الإرجاع واسترداد المبلغ](returns.html).'
      ] },
      { id: 'prohibited-items', h: 'المنتجات الممنوعة', body: [
        'لا نطلب أي منتج يكون غير قانوني في العراق أو إقليم كوردستان، أو يرفضه شريك الشحن لدينا. إذا احتوى طلبك على منتج كهذا، سنبلغك ويُحذف من الطلب.'
      ] },
      { id: 'customer-responsibilities', h: 'مسؤوليات العميل', body: [
        'عند الطلب، فإنك توافق على:',
        [
          'تقديم معلومات صحيحة وكاملة.',
          'التواصل باحترام مع فريقنا ومع مندوبي التوصيل.',
          'عدم إرسال أي طلبات وهمية أو احتيالية.'
        ]
      ] },
      { id: 'limitation-of-liability', h: 'حدود المسؤولية', body: [
        'الحد الأقصى لمسؤوليتنا هو المبلغ الذي دفعته مقابل المنتج المتأثر.',
        'لسنا مسؤولين عن أي خسائر غير مباشرة.'
      ] },
      { id: 'official-channels', h: 'القنوات الرسمية', body: [
        'نعمل فقط عبر القنوات المذكورة في هذا الموقع:',
        [
          'واتساب والهاتف: [{phone}](whatsapp)',
          'إنستغرام: [{ig}](instagram)',
          '[صفحة فيسبوك الرسمية](facebook)',
          'البريد الإلكتروني: [{email}](email)'
        ],
        'لسنا مسؤولين عن أي مبالغ تُدفع لحسابات مزيفة.',
        { note: 'لن نطلب منك أبداً رقم بطاقتك أو كلمات المرور أو رموز التحقق.' }
      ] },
      { id: 'intellectual-property', h: 'الملكية الفكرية', body: [
        'شعار ڤيلينا وتصاميمها ومحتواها ملك لـ {name}، ولا يجوز استخدامها دون إذن كتابي.'
      ] },
      { id: 'changes', h: 'التعديلات على الشروط', body: [
        'قد نحدّث هذه الشروط من وقت لآخر، ويُذكر تاريخ آخر تحديث في أعلى هذه الصفحة.',
        'استمرارك في استخدام خدمتنا بعد التعديل يعني موافقتك على الشروط الجديدة.'
      ] },
      { id: 'governing-law', h: 'القانون الواجب التطبيق', body: [
        'تخضع هذه الشروط لقوانين العراق وإقليم كوردستان، وتختص محاكم أربيل بالنظر في أي نزاع.'
      ] },
      { id: 'contact', h: 'تواصل معنا', body: [
        'لأي سؤال حول هذه الشروط:',
        [
          'العنوان: [{address}](maps)',
          'الهاتف وواتساب: [{phone}](whatsapp)',
          'البريد الإلكتروني: [{email}](email)',
          'أوقات العمل: {hours}'
        ],
        'يمكنك أيضاً زيارة [صفحة التواصل](contact.html).'
      ] }
    ]
  },

  en: {
    meta: { title: 'Terms of Service | Velina Shopping', desc: 'Velina Shopping terms of service: how ordering works, prices and exchange rate, delivery fees, cash on delivery, cancellations and returns.' },
    h1: 'Terms of Service',
    lead: 'These terms explain how ordering through {name} works and how we buy your items from SHEIN and deliver them to your door. Please read them carefully before you order.',
    sections: [
      { id: 'acceptance', h: 'Acceptance of these terms', body: [
        'When you place an order through any of our channels (WhatsApp, Instagram, Facebook or email), you confirm that you have read and accept these terms.',
        'If you do not agree with any part of these terms, please do not place an order.'
      ] },
      { id: 'the-service', h: 'Our service', body: [
        '{name} is an independent online personal-shopping service. We act as your purchasing and shipping agent: we buy items from SHEIN on your behalf, ship them from the UAE and deliver them to your door in Iraq and the Kurdistan Region.',
        'We do not manufacture, own or sell SHEIN products, and we are not affiliated with or endorsed by SHEIN.',
        { note: '“SHEIN” is a trademark of its owner and is used only to describe where we buy.' }
      ] },
      { id: 'eligibility', h: 'Eligibility', body: [
        'You must be 18 or older, or have the consent of a parent or guardian, to place an order.',
        'You must give a correct and complete name, phone number and address, because the delivery of your order depends on them.'
      ] },
      { id: 'ordering', h: 'How ordering works', body: [
        'Ordering follows these steps:',
        [
          'Step 1: Send us your basket (link or screenshots) on [WhatsApp](whatsapp).',
          'Step 2: We check the price and stock.',
          'Step 3: We send you the final total in Iraqi dinars (IQD).',
          'Step 4: Your order is confirmed only after you clearly confirm it.',
          'Step 5: After your confirmation, we purchase the items.'
        ],
        'We never make a purchase without your clear confirmation.'
      ] },
      { id: 'prices-and-rate', h: 'Prices and exchange rate', body: [
        'Your final price is calculated as: the SHEIN price at the time of purchase × our rate (currently {rate} IQD).',
        'The rate may change, but the total you confirm is final and will not change afterwards.',
        'All SHEIN discounts available at the time of purchase are applied to your order.'
      ] },
      { id: 'fees', h: 'Shipping and delivery fees', body: [
        'International shipping from the UAE to Iraq is free. Door delivery inside Iraq is paid:',
        { table: [
          ['Service', 'Fee'],
          ['International shipping (UAE → Iraq)', 'Free'],
          ['Door delivery in the Kurdistan Region', '{feeKrd} IQD'],
          ['Door delivery in other Iraqi cities', '{feeIraq} IQD'],
          ['Customs clearance', 'Paid by Velina Shopping']
        ] },
        'Customs clearance is fully paid by {name}. There are no other hidden fees.'
      ] },
      { id: 'payment', h: 'Payment', body: [
        'Payment is cash on delivery only.',
        [
          'Orders up to {threshold}: no prepayment needed.',
          'Orders above {threshold}: {prepay} of the total is paid in advance, and the remaining {rest} is paid on delivery.'
        ],
        { note: 'Prepayment is made only through our official channels. Please never send money to any other account.' }
      ] },
      { id: 'sold-out-items', h: 'Sold-out or changed items', body: [
        'If an item sells out on SHEIN or its price changes before we purchase, it is removed from your order, you are informed with screenshots, and the total is adjusted accordingly.',
        'We are not responsible for SHEIN stock or price changes before purchase.'
      ] },
      { id: 'product-information', h: 'Product information', body: [
        'Photos, descriptions, sizes and quality all come from SHEIN, not from us.',
        'Please check the SHEIN size charts and customer reviews carefully before ordering.'
      ] },
      { id: 'delivery', h: 'Delivery', body: [
        'Estimated delivery time is {days} days. This is an estimate, not a guarantee, and may be delayed by customs, flights, holidays, weather or force majeure.',
        'Please keep your phone reachable and make sure your address is correct.',
        'For more details, see our [Shipping Policy](shipping.html).'
      ] },
      { id: 'delivery-attempts', h: 'Delivery attempts', body: [
        'We try to deliver your order {attempts} times.',
        'If you cancel or refuse the order at delivery, it is returned to our office in Erbil and handled there. You may collect it from the office.'
      ] },
      { id: 'cancellations', h: 'Cancellations', body: [
        'Cancellation is free before we purchase your items.',
        'After purchase, cancellation is not guaranteed. We will try if SHEIN still allows it, and each case is handled individually.'
      ] },
      { id: 'returns-and-refunds', h: 'Returns and refunds', body: [
        'A short summary of our returns policy:',
        [
          'Wrong, damaged or missing item: contact us on WhatsApp with photos or video of the opened parcel.',
          'Approved refunds are paid within {refundTime} hours.',
          'Wrong size: a refund is available if the item is unused, unwashed and has its original tags and packaging.',
          'Underwear is non-returnable (for hygiene reasons).'
        ],
        'Full details are in our [Returns & Refunds Policy](returns.html).'
      ] },
      { id: 'prohibited-items', h: 'Prohibited items', body: [
        'We do not order any item that is illegal in Iraq or the Kurdistan Region, or that our shipping partner refuses. If your order contains such an item, we will inform you and remove it.'
      ] },
      { id: 'customer-responsibilities', h: 'Customer responsibilities', body: [
        'By ordering, you agree to:',
        [
          'Give accurate and complete information.',
          'Communicate respectfully with our team and delivery drivers.',
          'Not place fraudulent or fake orders.'
        ]
      ] },
      { id: 'limitation-of-liability', h: 'Limitation of liability', body: [
        'Our maximum liability is the amount you paid for the affected item.',
        'We are not liable for any indirect losses.'
      ] },
      { id: 'official-channels', h: 'Official channels', body: [
        'We only operate through the channels listed on this website:',
        [
          'WhatsApp and phone: [{phone}](whatsapp)',
          'Instagram: [{ig}](instagram)',
          '[Official Facebook page](facebook)',
          'Email: [{email}](email)'
        ],
        'We are not responsible for payments made to fake accounts.',
        { note: 'We never ask for card numbers, passwords or verification codes.' }
      ] },
      { id: 'intellectual-property', h: 'Intellectual property', body: [
        'The Velina logo, designs and content belong to {name} and may not be used without written permission.'
      ] },
      { id: 'changes', h: 'Changes to these terms', body: [
        'We may update these terms from time to time. The date of the latest update is shown at the top of this page.',
        'Continuing to use our service after changes means you accept the updated terms.'
      ] },
      { id: 'governing-law', h: 'Governing law', body: [
        'These terms are governed by the laws of Iraq and the Kurdistan Region, and any dispute falls under the courts of Erbil.'
      ] },
      { id: 'contact', h: 'Contact us', body: [
        'For any question about these terms:',
        [
          'Address: [{address}](maps)',
          'Phone and WhatsApp: [{phone}](whatsapp)',
          'Email: [{email}](email)',
          'Hours: {hours}'
        ],
        'You can also visit our [contact page](contact.html).'
      ] }
    ]
  }
};
