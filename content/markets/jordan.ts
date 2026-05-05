import type {
  IconTag,
  LocalizedMarketContent,
  MediaAsset,
  MediaPlaceholder,
  MediaRatio,
  MediaVideo,
  MediaVariant,
} from "@/types/landing";

function placeholder(
  slot: string,
  label: string,
  variant: MediaVariant,
  ratio: MediaRatio = "16:10",
): MediaPlaceholder {
  return {
    type: "placeholder",
    slot,
    label,
    ratio,
    fit: "cover",
    variant,
  };
}

function asset(
  src: string,
  label: string,
  variant: MediaVariant,
  ratio: MediaRatio = "16:10",
  fit: "cover" | "contain" = "cover",
): MediaAsset {
  return {
    type: "asset",
    src,
    label,
    ratio,
    fit,
    variant,
  };
}

function video(
  src: string,
  posterSrc: string,
  label: string,
  variant: MediaVariant,
  ratio: MediaRatio = "16:10",
  fit: "cover" | "contain" = "cover",
): MediaVideo {
  return {
    type: "video",
    src,
    posterSrc,
    label,
    ratio,
    fit,
    variant,
    mimeType: "video/mp4",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
  };
}

function iconTag(label: string, src: string, alt?: string): IconTag {
  return {
    label,
    src,
    alt,
  };
}

const heroVisual = placeholder("hero-stage", "Jordan hero visual slot", "hero");
const partnershipHeroVisual = video(
  "/partnership/hero/hero.mp4",
  "/partnership/hero/hero.png",
  "Jordan partnership hero video",
  "partnership",
);
const partnerRouteVisual = asset("/partnership/paths/partner.png", "Jordan affiliate partner artwork", "partnership");
const agentRouteVisual = asset("/partnership/paths/agent.png", "Jordan local agent artwork", "partnership");
const partnershipToolsVisual = placeholder("partnership-tools", "Jordan partnership tools visual slot", "dashboard");

const casinoSlotsVisual = asset("/home/casino/slots.png", "Jordan slots artwork", "games");
const casinoLiveVisual = asset("/home/casino/live.png", "Jordan live casino artwork", "games");
const casinoFastVisual = asset("/home/casino/fast.png", "Jordan fast games artwork", "games");
const casinoTableVisual = asset("/home/casino/table.png", "Jordan table games artwork", "games");

const sportsVisual = placeholder("sports-atmosphere", "Jordan sports atmosphere visual slot", "sports", "21:9");

const offerPromoVisual = asset("/home/offers/welcome.png", "Jordan welcome offer artwork", "offers");
const offerFreeVisual = asset("/home/offers/free.png", "Jordan free bets artwork", "offers");
const offerGiftVisual = asset("/home/offers/season.png", "Jordan seasonal offer artwork", "offers");

const esportsMarks = [
  iconTag("CS2", "/home/esports/cs2.png", "Counter-Strike 2"),
  iconTag("Dota 2", "/home/esports/dota.png", "Dota 2"),
  iconTag("League", "/home/esports/lol.png", "League of Legends"),
  iconTag("Valorant", "/home/esports/valorant.png", "Valorant"),
] as const;

export const jordanContent: Record<"ar" | "en", LocalizedMarketContent> = {
  ar: {
    seo: {
      home: {
        title: "MELBET الأردن | رياضة، كازينو، وعروض بإيقاع مناسب للهاتف",
        description: "تابع الرياضة المباشرة، اختر لعبتك في الكازينو، وراجع العروض المتاحة بسرعة تناسب الهاتف.",
      },
      partnership: {
        title: "شراكة MELBET الأردن | مسارات الشريك والوكيل",
        description: "اختر مسارك كشريك تسويقي أو وكيل محلي، وتعرف على الأدوات، المتابعة، وخطوات البداية في الأردن.",
      },
      faq: {
        title: "FAQ MELBET الأردن | أسئلة اللاعبين والشركاء",
        description: "إجابات قصيرة وواضحة للاعبين والشركاء حول الألعاب، العروض، الشراكة، وخطوات البداية.",
      },
    },
    nav: {
      home: "الرئيسية",
      games: "الألعاب",
      sports: "الرياضة",
      offers: "العروض",
      partnership: "الشراكة",
      faq: "الأسئلة",
      language: "English",
    },
    footer: {
      brandText: "ابدأ بكرة القدم، انتقل إلى ألعاب الكازينو، وراجع العروض المتاحة بإيقاع سريع وواضح.",
      legal: "العروض، قنوات التواصل، وطرق الدفع تظهر فقط بعد الاعتماد الرسمي ووفق الشروط المعتمدة.",
      homeTitle: "الرئيسية",
      partnershipTitle: "الشراكة",
      supportTitle: "الدعم",
      partnershipLinks: [
        { label: "المزايا", href: "/partnership#benefits" },
        { label: "المسارات", href: "/partnership#paths" },
        { label: "التواصل", href: "/partnership#contact" },
      ],
      supportLinks: [
        { label: "العروض", href: "/#offers" },
        { label: "الدعم", href: "/faq#support" },
      ],
    },
    compliance: {
      label: "تحديث الإطلاق",
      message:
        "تظهر القنوات الرسمية وتفاصيل العروض وطرق الدفع بعد اعتماد السوق. وحتى ذلك الحين يمكنك اختيار المسار الأقرب لك والانطلاق من الخطوة المناسبة.",
    },
    home: {
      hero: {
        eyebrow: "MELBET الأردن",
        title: "ابدأ بلوحة المباريات ثم انتقل مباشرة إلى ألعاب الكازينو",
        body: "كرة القدم في الواجهة، والطاولات المباشرة والألعاب السريعة والعروض المتاحة تبقى قريبة منك من أول لمسة إلى آخر خطوة.",
        chips: ["كرة القدم أولاً", "كازينو سريع", "عروض عند التفعيل"],
        media: heroVisual,
        cta: { label: "استكشف الألعاب", href: "#games", variant: "primary" },
        secondaryCta: { label: "شاهد العروض", href: "#offers", variant: "secondary" },
        stats: [
          {
            eyebrow: "مباشر",
            title: "الكرة في الواجهة طوال الليل",
            body: "تابع المباريات الكبيرة واللقاءات اليومية بنتيجة واضحة وقراءة سريعة من أول نظرة.",
            metric: "90'",
            chips: ["مباريات قوية", "نتائج واضحة"],
            tone: "green",
          },
          {
            eyebrow: "كازينو",
            title: "انتقل إلى لعبتك من دون انتظار",
            body: "سلوت ولايف كازينو وألعاب فورية وطاولات كلاسيكية تبقى قريبة عندما تريد تغيير الإيقاع.",
            metric: "4",
            chips: ["سلوت", "لايف كازينو"],
            tone: "gold",
          },
          {
            eyebrow: "إيقاعك",
            title: "تنقل سريع بين اللعب والعرض",
            body: "ابدأ بالمباراة، تحرك إلى الكازينو، ثم راجع العروض من دون أن تضيع وقتك.",
            metric: "3",
            chips: ["رياضة", "كازينو", "عروض"],
            tone: "red",
          },
        ],
      },
      games: {
        eyebrow: "الكازينو",
        title: "اختر أسلوب اللعب الأقرب لك",
        body: "اختر الإيقاع الأقرب لك: سلوت سريعة، لايف كازينو، ألعاب فورية، أو طاولات كلاسيكية بطابع أهدأ.",
        chips: ["سلوت", "لايف كازينو", "ألعاب فورية", "طاولات"],
        cards: [
          {
            eyebrow: "Casino",
            title: "سلوت",
            body: "دورات سريعة، واجهات لامعة، وتجربة خفيفة لمن يحب الدخول المباشر إلى اللعبة.",
            label: "اكتشاف سريع",
            chips: ["واجهة هاتف", "جلسات قصيرة"],
            points: ["دخول مباشر", "إيقاع سريع", "تجربة واضحة"],
            media: casinoSlotsVisual,
            tone: "gold",
          },
          {
            eyebrow: "Live",
            title: "لايف كازينو",
            body: "طاولات مباشرة وأجواء ليلية تعطي القسم طابعاً أفخم من أول نظرة.",
            label: "طاقة مباشرة",
            chips: ["طاولات", "بث حي"],
            points: ["حركة أوضح", "تفاصيل أقوى", "إحساس أقرب للحدث"],
            media: casinoLiveVisual,
            tone: "red",
          },
          {
            eyebrow: "Fast",
            title: "ألعاب فورية",
            body: "مسار خفيف للجولات القصيرة والرهانات السريعة عندما تريد اللعب من دون انتظار.",
            label: "دخول سريع",
            chips: ["Quick play", "Mobile"],
            points: ["قراءة أسرع", "جلسات قصيرة", "حضور واضح على الهاتف"],
            media: casinoFastVisual,
            tone: "sand",
          },
          {
            eyebrow: "Tables",
            title: "ألعاب الطاولة",
            body: "بلاك جاك، روليت، وطاولات كلاسيكية لمن يريد إيقاعاً أهدأ وحضوراً أكثر فخامة.",
            label: "إيقاع كلاسيكي",
            chips: ["Blackjack", "Roulette"],
            points: ["مقارنة أسهل", "توازن بين النص والصورة", "طابع ذهبي داكن"],
            media: casinoTableVisual,
            tone: "dark",
          },
        ],
      },
      sports: {
        eyebrow: "الرياضة",
        title: "لوحة مباشرة تضع كرة القدم أولاً وتبقي بقية الرياضات قريبة",
        body: "ابدأ بكرة القدم، ثم انتقل إلى التنس وكرة السلة والمنافسات المباشرة من دون أن تفقد إيقاع المتابعة.",
        chips: ["كرة القدم", "تنس", "كرة السلة", "مباشر"],
        media: sportsVisual,
        cards: [
          {
            eyebrow: "Lead board",
            title: "كرة القدم",
            body: "ابدأ بالمباريات الكبيرة، تابع النتيجة بسرعة، وابق قريباً من اللقاءات التي تصنع الليلة.",
            metric: "90'",
            chips: ["ليالٍ كبيرة", "قراءة سريعة"],
            points: ["الكرة في الواجهة", "نتيجة واضحة", "مؤشرات تبقى LTR"],
            tone: "green",
          },
          {
            eyebrow: "Court lane",
            title: "تنس",
            body: "تابع الأشواط والتحولات السريعة عندما تريد قراءة أخف ومباراة أقصر.",
            metric: "Set",
            chips: ["Singles", "Tournaments"],
            points: ["تفاصيل مضبوطة", "إيقاع أخف", "مناسب للبطولات القصيرة"],
            tone: "gold",
          },
          {
            eyebrow: "Live pace",
            title: "كرة السلة",
            body: "راقب الربع الأخير وتغيّر النتيجة بإيقاع أسرع ومساحة أوضح.",
            metric: "Q4",
            chips: ["Fast score", "Live strip"],
            points: ["نقل أسرع للمعلومة", "طاقة مباشرة", "بدون ازدحام بصري"],
            tone: "red",
          },
        ],
      },
      esports: {
        eyebrow: "الرياضات الإلكترونية",
        title: "صف قصير للمواجهات السريعة والبطولات الليلية",
        body: "بطولات ليلية وخرائط سريعة وعلامات ألعاب مألوفة لمن يريد منافسة سريعة بعد المباريات.",
        chips: ["بطولات", "خرائط سريعة", "Best of"],
        iconTags: [...esportsMarks],
        cards: [
          {
            eyebrow: "Arena",
            title: "ساحات تكتيكية",
            body: "جولات سريعة، خرائط حاسمة، وإيقاع يناسب من يحب المواجهات المركزة.",
            chips: ["CS2", "Valorant"],
            tone: "dark",
          },
          {
            eyebrow: "Draft",
            title: "بطولات MOBA",
            body: "اختيارات أبطال، سلاسل أطول، ومتابعة أوضح للفرق الكبيرة والمباريات الممتدة.",
            chips: ["Dota 2", "League"],
            tone: "green",
          },
          {
            eyebrow: "Night sessions",
            title: "جلسات ليلية مباشرة",
            body: "مسار خفيف للمباريات المتأخرة والجولات التي تحتاج دخولاً سريعاً وقراءة سريعة.",
            chips: ["Live", "Night"],
            tone: "sand",
          },
        ],
      },
      offers: {
        eyebrow: "العروض",
        title: "عروض واضحة بصياغة حذرة",
        body: "تابع عروض الترحيب والرهانات المجانية والحملات الموسمية عند توفرها، مع بقاء الشروط قريبة من كل رسالة.",
        chips: ["حسب التوفر", "تطبق الشروط", "بحسب الحملة"],
        cards: [
          {
            eyebrow: "Offer lane",
            title: "عروض ترحيب",
            body: "رسالة واضحة لمن يريد بداية أقوى عند تفعيل الحملة المناسبة للسوق.",
            label: "عند التفعيل",
            footnote: "تظهر التفاصيل الكاملة عند اعتماد الحملة.",
            media: offerPromoVisual,
            tone: "gold",
          },
          {
            eyebrow: "Campaign",
            title: "رهانات مجانية",
            body: "خيار مناسب للحملات التي تحتاج دعوة مباشرة من دون أرقام ثابتة أو وعود مبالغ فيها.",
            label: "حسب الحملة",
            footnote: "القيم والشروط تأتي من الحملة المعتمدة فقط.",
            media: offerFreeVisual,
            tone: "green",
          },
          {
            eyebrow: "Seasonal",
            title: "هدايا موسمية",
            body: "مساحة مرنة للهدايا، اللفات المجانية، أو الحملات القصيرة في المواسم المهمة.",
            label: "موسمي",
            footnote: "تختلف الصياغة النهائية حسب الموسم والحملة.",
            media: offerGiftVisual,
            tone: "red",
          },
        ],
      },
      finalCta: {
        eyebrow: "خطوتك التالية",
        title: "اختر خطوتك التالية وواصل الليلة",
        body: "انتقل إلى الألعاب، راجع الأسئلة الشائعة، أو توجّه إلى الشراكة إذا كنت تريد العمل عبر جمهورك أو شبكتك المحلية.",
        chips: ["ألعاب", "أسئلة شائعة", "شراكة"],
        cta: { label: "راجع الأسئلة", href: "/faq", variant: "primary" },
        secondaryCta: { label: "الشراكة", href: "/partnership", variant: "secondary" },
      },
    },
    partnership: {
      hero: {
        eyebrow: "شراكة MELBET الأردن",
        title: "حوّل جمهورك أو شبكتك المحلية إلى مسار شراكة واضح",
        body: "إذا كان لديك جمهور، قناة، أو قدرة على خدمة اللاعبين محلياً، ستجد هنا الطريق المناسب مع أدوات جاهزة ودعم من مدير مختص.",
        chips: ["شريك تسويقي", "وكيل محلي", "مدير شراكات"],
        media: partnershipHeroVisual,
        cta: { label: "اختر مسارك", href: "#paths", variant: "primary" },
        secondaryCta: { label: "ابدأ التواصل", href: "#contact", variant: "secondary" },
        stats: [
          {
            eyebrow: "Partner",
            title: "شريك",
            body: "يروج بكود خاص أو حملة واضحة ويعمل على نمو جمهوره خطوة بخطوة.",
            metric: "01",
            chips: ["جمهور", "حملات"],
            tone: "gold",
          },
          {
            eyebrow: "Agent",
            title: "وكيل",
            body: "يساعد اللاعبين محلياً ويتابع طرق الإيداع والسحب المناسبة عند التفعيل.",
            metric: "02",
            chips: ["دعم محلي", "مدفوعات"],
            tone: "green",
          },
          {
            eyebrow: "Manager",
            title: "مدير",
            body: "ينظم البداية، يراجع المواد، ويقودك من أول خطوة حتى تصبح الصورة أوضح.",
            metric: "03",
            chips: ["متابعة", "اعتماد"],
            tone: "red",
          },
        ],
      },
      benefits: {
        eyebrow: "لماذا هذا المسار",
        title: "دعم عملي من أول تواصل حتى أول حملة",
        body: "كل بطاقة تضيف معلومة مختلفة: متابعة من المدير، مواد جاهزة، تتبع أوضح، وخطوات بداية أسهل.",
        chips: ["مدير مختص", "مواد جاهزة", "متابعة أوضح"],
        cards: [
          {
            eyebrow: "Manager support",
            title: "مدير قريب من خطوتك",
            body: "تتحدث مع شخص واحد يعرف المسار الذي يناسبك ويختصر عليك البداية.",
            points: ["توجيه أولي", "اختيار المسار", "متابعة أوضح"],
            tone: "gold",
          },
          {
            eyebrow: "Onboarding",
            title: "بداية منظمة",
            body: "تعرف ما الذي تحتاجه، وما الذي يأتي بعده، من دون قفز بين تفاصيل مبهمة.",
            points: ["تعريف الدور", "تجهيز القناة", "خطوات متتابعة"],
            tone: "green",
          },
          {
            eyebrow: "Materials",
            title: "مواد جاهزة للتحديث",
            body: "الأغلفة والرسائل يمكن تبديلها بسهولة عندما تصل النسخة النهائية الخاصة بالحملة.",
            points: ["صور قابلة للتبديل", "نصوص واضحة", "حضور موحد"],
            tone: "red",
          },
          {
            eyebrow: "Tracking",
            title: "تتبع أوضح للأداء",
            body: "كود، حملة، أو مسار متابعة يساعدك على قراءة الحركة من دون وعود دخل ثابت.",
            points: ["أكواد", "حملات", "مؤشرات مقروءة"],
            tone: "sand",
          },
        ],
      },
      steps: {
        eyebrow: "البداية",
        title: "ثلاث خطوات وتعرف أين تبدأ",
        body: "أخبرنا بما تملكه، اختر الدور الأنسب، ثم أكمل مع المسار المناسب لك.",
        cards: [
          {
            eyebrow: "Step",
            title: "أرسل معلوماتك",
            body: "اسمك، نوع جمهورك أو قناتك، والمدينة أو المنطقة التي تعمل فيها.",
            metric: "1",
            points: ["الاسم", "الجمهور أو القناة", "المدينة أو المنطقة"],
            tone: "gold",
          },
          {
            eyebrow: "Step",
            title: "اختر المسار",
            body: "شريك لمن يملك جمهوراً أو حركة زيارات، ووكيل لمن يدير الدعم المحلي والتعاملات.",
            metric: "2",
            points: ["شريك", "وكيل", "اختيار واضح"],
            tone: "green",
          },
          {
            eyebrow: "Step",
            title: "ابدأ مع الخطة",
            body: "بعد تحديد الدور، تصبح الأدوات، المواد، والخطوات التالية أكثر وضوحاً.",
            metric: "3",
            points: ["خطة أولية", "مواد مناسبة", "متابعة مع المدير"],
            tone: "red",
          },
        ],
      },
      paths: {
        eyebrow: "المسارات",
        title: "اختر من البداية بين الشريك التسويقي والوكيل المحلي",
        body: "الشريك يقود الجمهور والحملات، بينما الوكيل يتابع الخدمة المحلية والتعاملات في السوق.",
        cards: [
          {
            eyebrow: "الشريك التسويقي",
            title: "شريك تسويقي",
            body: "إذا كان لديك جمهور، قناة، مجتمع، أو حركة زيارات، يمكنك الترويج بكود خاص أو حملة واضحة.",
            label: "جمهور وحملات",
            points: ["كود خاص", "رسائل للحملات", "متابعة للأداء"],
            media: partnerRouteVisual,
            tone: "gold",
          },
          {
            eyebrow: "الوكيل المحلي",
            title: "وكيل محلي",
            body: "إذا كنت قريباً من اللاعبين وتستطيع متابعة الخدمة المحلية، فهذا هو المسار الأقرب لك.",
            label: "دعم محلي وتعاملات",
            points: ["مساعدة اللاعبين", "تنسيق التعاملات", "قرب من السوق المحلي"],
            media: agentRouteVisual,
            tone: "green",
          },
        ],
      },
      tools: {
        eyebrow: "الأدوات",
        title: "كود، مواد، متابعة، ودعم في سطح واحد",
        body: "كل ما تحتاجه ليبقى العمل منظماً: كود ترويجي، متابعة للأداء، مواد للحملات، وخط واضح مع المدير.",
        chips: ["كود ترويجي", "متابعة الأداء", "دعم المدير"],
        media: partnershipToolsVisual,
        cards: [
          {
            eyebrow: "Code",
            title: "كود ترويجي خاص",
            body: "رمز واضح يساعدك على تقديم العرض أو الحملة لجمهورك بطريقة أسهل.",
            tone: "gold",
          },
          {
            eyebrow: "Tracking",
            title: "متابعة الأداء",
            body: "تعرف ما الذي يتحرك جيداً وما الذي يحتاج إلى تعديل قبل توسيع الحملة.",
            tone: "green",
          },
          {
            eyebrow: "Materials",
            title: "مواد للحملات",
            body: "صور ورسائل قابلة للتحديث حتى يبقى ظهورك متناسقاً في كل قناة.",
            tone: "red",
          },
          {
            eyebrow: "Workflow",
            title: "مسار دعم واضح",
            body: "تعرف من تراجع، ومتى تتحرك، وما الخطوة التالية من دون تشويش.",
            tone: "sand",
          },
        ],
      },
      finalCta: {
        eyebrow: "ابدأ بشكل واضح",
        title: "جهّز معلوماتك واختر المسار الأنسب لك",
        body: "اسمك، جمهورك أو مدينتك، وطريقة العمل التي تناسبك تكفي لبدء الحديث عندما تفتح القنوات الرسمية.",
        chips: ["جمهور أو قناة", "مدينة أو منطقة", "شريك أو وكيل"],
        cta: {
          label: "تيليجرام",
          href: "https://telegram.org/",
          variant: "primary",
          iconSrc: "/telegram.png",
          iconAlt: "Telegram",
        },
        secondaryCta: {
          label: "واتساب",
          href: "https://www.whatsapp.com/",
          variant: "secondary",
          iconSrc: "/whatsapp.png",
          iconAlt: "WhatsApp",
        },
      },
    },
    faq: {
      hero: {
        eyebrow: "FAQ",
        title: "إجابات قصيرة للاعبين والشركاء",
        body: "إذا أردت البدء كلاعب أو كنت تبحث عن شراكة، ستجد هنا الإجابات الأسرع قبل أي خطوة أخرى.",
        chips: ["اللاعبون", "الشركاء", "العربية أولاً"],
      },
      player: {
        eyebrow: "اللاعبون",
        title: "أسئلة اللاعبين",
        body: "إجابات مباشرة عن الرياضة، الألعاب، العروض، وتجربة الهاتف.",
        items: [
          {
            question: "هل أستطيع التسجيل الآن؟",
            answer: "تظهر خطوات التسجيل والقنوات المباشرة بعد اعتماد السوق. حالياً يمكنك استكشاف الرياضة، الألعاب، والعروض المتاحة.",
          },
          {
            question: "ماذا أجد داخل الصفحة الرئيسية؟",
            answer: "ستجد مباريات مباشرة، ألعاب كازينو، عروض متاحة، ومساراً واضحاً للأسئلة أو الشراكة.",
          },
          {
            question: "هل التجربة مناسبة للهاتف؟",
            answer: "نعم. كل شيء يبقى واضحاً وسهل اللمس على الشاشات الصغيرة قبل الكبيرة.",
          },
        ],
      },
      partnership: {
        eyebrow: "الشركاء والوكلاء",
        title: "أسئلة الشراكة",
        body: "فرق واضح بين الشريك والوكيل، مع إجابات سريعة عن الأدوات والبداية.",
        items: [
          {
            question: "ما الفرق بين الشريك والوكيل؟",
            answer: "الشريك يروج لجمهوره بكود أو حملة. الوكيل يساعد اللاعبين محلياً ويتابع الخدمة والتعاملات المناسبة.",
          },
          {
            question: "ماذا أستلم عندما أبدأ؟",
            answer: "تبدأ بمسار واضح، مواد مناسبة، متابعة للأداء، ودعم مباشر من مدير الشراكات.",
          },
          {
            question: "متى تظهر قنوات التواصل الرسمية؟",
            answer: "تظهر القنوات الرسمية بعد اعتماد السوق والحملة المناسبة، ثم تنتقل الخطوات إلى المسار المباشر.",
          },
        ],
      },
      support: {
        eyebrow: "تحتاج مساراً أوضح؟",
        title: "اختر المسار الذي يناسبك الآن",
        body: "افتح الألعاب إذا كنت تريد اللعب، أو انتقل إلى الشراكة إذا كنت تريد العمل عبر جمهورك أو شبكتك المحلية.",
        cta: { label: "العودة للرئيسية", href: "/", variant: "primary" },
      },
    },
  },
  en: {
    seo: {
      home: {
        title: "MELBET Jordan | Sports, Casino, and Offers with a Mobile-First Rhythm",
        description: "Follow live sports, choose your casino game, and check available offers with fast access built for Jordan.",
      },
      partnership: {
        title: "MELBET Jordan Partnership | Partner and Agent Routes",
        description: "Choose a clear route as an affiliate partner or local agent and review the tools, support, and first steps for Jordan.",
      },
      faq: {
        title: "MELBET Jordan FAQ | Player and Partnership Questions",
        description: "Short, direct answers for players, partners, and agents about games, offers, support, and starting routes.",
      },
    },
    nav: {
      home: "Home",
      games: "Games",
      sports: "Sports",
      offers: "Offers",
      partnership: "Partnership",
      faq: "FAQ",
      language: "العربية",
    },
    footer: {
      brandText: "Start with football, move into casino games, and check available offers with fast access on every screen.",
      legal: "Offers, contact channels, and payment routes appear only after official approval and according to active terms.",
      homeTitle: "Home",
      partnershipTitle: "Partnership",
      supportTitle: "Support",
      partnershipLinks: [
        { label: "Benefits", href: "/partnership#benefits" },
        { label: "Routes", href: "/partnership#paths" },
        { label: "Contact", href: "/partnership#contact" },
      ],
      supportLinks: [
        { label: "Offers", href: "/#offers" },
        { label: "Support", href: "/faq#support" },
      ],
    },
    compliance: {
      label: "Launch update",
      message:
        "Official channels, offer details, and payment routes appear after market approval. Until then, you can choose the next step that fits you best.",
    },
    home: {
      hero: {
        eyebrow: "MELBET Jordan",
        title: "Start on the match board, then move straight into fast casino play",
        body: "Football, live tables, quick games, and available offers stay close from the first tap, whether you came for a big night or a short session.",
        chips: ["Live football", "Casino now", "Offers when active"],
        media: heroVisual,
        cta: { label: "Explore games", href: "#games", variant: "primary" },
        secondaryCta: { label: "See offers", href: "#offers", variant: "secondary" },
        stats: [
          {
            eyebrow: "Live first",
            title: "Football stays at the front",
            body: "Big matches, daily fixtures, and LTR score reading stay easy to scan in seconds.",
            metric: "90'",
            chips: ["Big nights", "Live scores"],
            tone: "green",
          },
          {
            eyebrow: "Casino next",
            title: "Jump into the game you want",
            body: "Slots, live casino, fast rounds, and classic tables stay close when you want to change pace.",
            metric: "4",
            chips: ["Slots", "Live casino"],
            tone: "gold",
          },
          {
            eyebrow: "Your pace",
            title: "Move quickly between play and offers",
            body: "Start with the board, switch to casino, then check the offer lane without losing time.",
            metric: "3",
            chips: ["Sports", "Casino", "Offers"],
            tone: "red",
          },
        ],
      },
      games: {
        eyebrow: "Casino",
        title: "Choose the game lane that fits your pace",
        body: "Pick the lane that fits your mood, from quick spins and live tables to faster sessions and classic table play.",
        chips: ["Slots", "Live casino", "Fast games", "Table games"],
        cards: [
          {
            eyebrow: "Casino",
            title: "Slots",
            body: "Quick spins, bright symbols, and a lighter experience for players who want direct entry into the game.",
            label: "Fast discovery",
            chips: ["Phone-first", "Short sessions"],
            points: ["Direct entry", "Quick rhythm", "Clear structure"],
            media: casinoSlotsVisual,
            tone: "gold",
          },
          {
            eyebrow: "Live",
            title: "Live casino",
            body: "Live tables and a darker studio feel that gives the section a more premium edge at first glance.",
            label: "Live energy",
            chips: ["Tables", "Live"],
            points: ["Stronger motion", "Better detail", "Closer to the action"],
            media: casinoLiveVisual,
            tone: "red",
          },
          {
            eyebrow: "Fast",
            title: "Fast games",
            body: "A lighter lane for short sessions and quick-play formats when you want to move fast.",
            label: "Quick entry",
            chips: ["Quick play", "Mobile"],
            points: ["Faster scan", "Short sessions", "Strong mobile presence"],
            media: casinoFastVisual,
            tone: "sand",
          },
          {
            eyebrow: "Tables",
            title: "Table games",
            body: "Blackjack, roulette, and classic tables when you want a calmer pace with a richer night feel.",
            label: "Classic pace",
            chips: ["Blackjack", "Roulette"],
            points: ["Easier comparison", "Balanced text and media", "Gold-led night tone"],
            media: casinoTableVisual,
            tone: "dark",
          },
        ],
      },
      sports: {
        eyebrow: "Sports",
        title: "A live board that puts football first and keeps the rest in reach",
        body: "Follow football up front, then jump to tennis, basketball, and live competitions without losing the score.",
        chips: ["Football", "Tennis", "Basketball", "Live"],
        media: sportsVisual,
        cards: [
          {
            eyebrow: "Lead board",
            title: "Football",
            body: "Start with the headline fixtures, follow the score quickly, and stay close to the matches that carry the night.",
            metric: "90'",
            chips: ["Big nights", "Quick read"],
            points: ["Football stays first", "Score stays clear", "Metrics remain LTR"],
            tone: "green",
          },
          {
            eyebrow: "Court lane",
            title: "Tennis",
            body: "Track sets and quick swings the moment you want a lighter read.",
            metric: "Set",
            chips: ["Singles", "Tournaments"],
            points: ["Tighter detail", "Lighter pacing", "Works for shorter events"],
            tone: "gold",
          },
          {
            eyebrow: "Live pace",
            title: "Basketball",
            body: "Keep late-game energy, quarter movement, and live swings in a tighter lane.",
            metric: "Q4",
            chips: ["Fast score", "Live strip"],
            points: ["Faster signal", "Live energy", "No visual overload"],
            tone: "red",
          },
        ],
      },
      esports: {
        eyebrow: "Esports",
        title: "A compact strip for late-night competition",
        body: "Late tournaments, quick maps, and familiar titles stay close when you want competitive action after the main board.",
        chips: ["Tournaments", "Fast maps", "Best of"],
        iconTags: [...esportsMarks],
        cards: [
          {
            eyebrow: "Arena",
            title: "Tactical arenas",
            body: "Fast rounds, tighter maps, and a cleaner rhythm for focused matchups.",
            chips: ["CS2", "Valorant"],
            tone: "dark",
          },
          {
            eyebrow: "Draft",
            title: "MOBA majors",
            body: "Draft phases, longer series, and clearer tracking for bigger team matchups.",
            chips: ["Dota 2", "League"],
            tone: "green",
          },
          {
            eyebrow: "Night sessions",
            title: "Late live sessions",
            body: "A lighter strip for night matches and faster entries when you want a quick read.",
            chips: ["Live", "Night"],
            tone: "sand",
          },
        ],
      },
      offers: {
        eyebrow: "Offers",
        title: "Clear offer messaging with careful wording",
        body: "Look out for welcome offers, free bets, and seasonal campaigns when they go live, with terms kept close to the action.",
        chips: ["When available", "Terms apply", "Campaign-based"],
        cards: [
          {
            eyebrow: "Offer lane",
            title: "Welcome offers",
            body: "A strong opening message for players who want a better start when the right campaign goes live.",
            label: "When active",
            footnote: "Full details appear when the campaign is approved.",
            media: offerPromoVisual,
            tone: "gold",
          },
          {
            eyebrow: "Campaign",
            title: "Free bets",
            body: "A clean route for campaigns that need a direct action message without fixed values or overstatement.",
            label: "Campaign-based",
            footnote: "Values and terms come only from approved campaign content.",
            media: offerFreeVisual,
            tone: "green",
          },
          {
            eyebrow: "Seasonal",
            title: "Seasonal gifts",
            body: "A flexible lane for gifts, spins, or short pushes across key moments in the year.",
            label: "Seasonal",
            footnote: "Final wording depends on the season and campaign.",
            media: offerGiftVisual,
            tone: "red",
          },
        ],
      },
      finalCta: {
        eyebrow: "Your next step",
        title: "Choose your next move and keep the night going",
        body: "Open the games, check the FAQ, or head to Partnership if you want to work through your audience or local network.",
        chips: ["Games", "FAQ", "Partnership"],
        cta: { label: "Read the FAQ", href: "/faq", variant: "primary" },
        secondaryCta: { label: "Partnership", href: "/partnership", variant: "secondary" },
      },
    },
    partnership: {
      hero: {
        eyebrow: "MELBET Jordan Partnership",
        title: "Turn your audience or local network into a clear partnership route",
        body: "If you have an audience, a channel, or the ability to support players locally, you can choose the route that fits you and move with manager support.",
        chips: ["Affiliate partner", "Local agent", "Partnership manager"],
        media: partnershipHeroVisual,
        cta: { label: "Choose your route", href: "#paths", variant: "primary" },
        secondaryCta: { label: "Start contact", href: "#contact", variant: "secondary" },
        stats: [
          {
            eyebrow: "Partner",
            title: "Partner",
            body: "Promotes with a private code or a clear campaign and grows through audience reach.",
            metric: "01",
            chips: ["Audience", "Campaigns"],
            tone: "gold",
          },
          {
            eyebrow: "Agent",
            title: "Agent",
            body: "Supports players locally and follows the right deposit and withdrawal routes when active.",
            metric: "02",
            chips: ["Local support", "Payments"],
            tone: "green",
          },
          {
            eyebrow: "Manager",
            title: "Manager",
            body: "Organizes the start, reviews the materials, and keeps the path clearer from the first step.",
            metric: "03",
            chips: ["Follow-up", "Approval"],
            tone: "red",
          },
        ],
      },
      benefits: {
        eyebrow: "Why this route",
        title: "Practical support from the first message to the first campaign",
        body: "Each card adds a different detail: manager guidance, campaign materials, cleaner tracking, and an easier start.",
        chips: ["Dedicated manager", "Ready materials", "Clearer tracking"],
        cards: [
          {
            eyebrow: "Manager support",
            title: "A manager close to your next step",
            body: "You speak with one person who understands the route that fits you and cuts the noise out of the start.",
            points: ["Early guidance", "Route selection", "Cleaner follow-up"],
            tone: "gold",
          },
          {
            eyebrow: "Onboarding",
            title: "A structured start",
            body: "You know what you need first and what comes next without jumping through vague stages.",
            points: ["Role definition", "Channel prep", "Step-by-step flow"],
            tone: "green",
          },
          {
            eyebrow: "Materials",
            title: "Materials that stay easy to update",
            body: "Covers and campaign messages can be swapped quickly when final materials arrive.",
            points: ["Replaceable visuals", "Clear copy", "Consistent presence"],
            tone: "red",
          },
          {
            eyebrow: "Tracking",
            title: "Clearer performance reading",
            body: "A code, campaign, or tracking lane helps you read movement without fixed-income promises.",
            points: ["Codes", "Campaigns", "Readable indicators"],
            tone: "sand",
          },
        ],
      },
      steps: {
        eyebrow: "Getting started",
        title: "Three steps and you know where to begin",
        body: "Tell us what you have, choose the right role, and move into the route that fits you best.",
        cards: [
          {
            eyebrow: "Step",
            title: "Send your details",
            body: "Your name, the type of audience or channel you run, and the city or area where you work.",
            metric: "1",
            points: ["Name", "Audience or channel", "City or area"],
            tone: "gold",
          },
          {
            eyebrow: "Step",
            title: "Choose the route",
            body: "Partner for audience growth and campaigns, or agent for local support and player-facing work.",
            metric: "2",
            points: ["Partner", "Agent", "Clear fit"],
            tone: "green",
          },
          {
            eyebrow: "Step",
            title: "Start with the plan",
            body: "Once the role is clear, the tools, materials, and next actions become easier to follow.",
            metric: "3",
            points: ["Early plan", "Fit-for-route materials", "Manager follow-up"],
            tone: "red",
          },
        ],
      },
      paths: {
        eyebrow: "Routes",
        title: "Separate the affiliate partner and local agent roles from the start",
        body: "That split keeps the work clear: the partner drives audience and campaigns, while the agent supports local player needs and transactions.",
        cards: [
          {
            eyebrow: "Affiliate partner",
            title: "Affiliate partner",
            body: "If you have an audience, a community, a channel, or traffic, you can promote through a private code or a focused campaign.",
            label: "Audience and campaigns",
            points: ["Private code", "Campaign messages", "Performance visibility"],
            media: partnerRouteVisual,
            tone: "gold",
          },
          {
            eyebrow: "Local agent",
            title: "Local agent",
            body: "If you stay close to players and can support local needs, this is the route that fits you better.",
            label: "Local support and transactions",
            points: ["Player support", "Transaction coordination", "Closer to the local market"],
            media: agentRouteVisual,
            tone: "green",
          },
        ],
      },
      tools: {
        eyebrow: "Tools",
        title: "Code, materials, tracking, and support on one surface",
        body: "Everything stays organized in one view: a promo code, performance tracking, campaign materials, and a direct line with the manager.",
        chips: ["Promo code", "Performance tracking", "Manager support"],
        media: partnershipToolsVisual,
        cards: [
          {
            eyebrow: "Code",
            title: "Private promo code",
            body: "A clean code route that helps you present a campaign or offer to your audience more easily.",
            tone: "gold",
          },
          {
            eyebrow: "Tracking",
            title: "Performance tracking",
            body: "See what is moving well and what needs adjustment before you expand the campaign.",
            tone: "green",
          },
          {
            eyebrow: "Materials",
            title: "Campaign materials",
            body: "Images and message blocks stay easy to refresh so your channels keep a consistent look.",
            tone: "red",
          },
          {
            eyebrow: "Workflow",
            title: "Clear support flow",
            body: "Know who to check with, when to move, and what the next step is without confusion.",
            tone: "sand",
          },
        ],
      },
      finalCta: {
        eyebrow: "Start clearly",
        title: "Prepare your details and choose the route that fits you",
        body: "Your name, your audience or city, and the way you want to work are enough to start the conversation when official channels open.",
        chips: ["Audience or channel", "City or area", "Partner or agent"],
        cta: {
          label: "Telegram",
          href: "https://telegram.org/",
          variant: "primary",
          iconSrc: "/telegram.png",
          iconAlt: "Telegram",
        },
        secondaryCta: {
          label: "WhatsApp",
          href: "https://www.whatsapp.com/",
          variant: "secondary",
          iconSrc: "/whatsapp.png",
          iconAlt: "WhatsApp",
        },
      },
    },
    faq: {
      hero: {
        eyebrow: "FAQ",
        title: "Short answers for players and partners",
        body: "Whether you want to start as a player or you want a work route, here are the quickest answers before the next step.",
        chips: ["Players", "Partners", "Arabic first"],
      },
      player: {
        eyebrow: "Players",
        title: "Player questions",
        body: "Direct answers about sports, casino access, offers, and mobile behavior.",
        items: [
          {
            question: "Can I register right now?",
            answer: "Signup steps and direct channels appear after market approval. For now, you can explore the sports, games, and available offer lanes.",
          },
          {
            question: "What can I find on the home page?",
            answer: "You can move through live sports, casino games, available offers, and a clear route toward FAQ or partnership.",
          },
          {
            question: "Is the experience tuned for mobile?",
            answer: "Yes. Everything stays easy to read and easy to tap on smaller screens before you move to larger ones.",
          },
        ],
      },
      partnership: {
        eyebrow: "Partners and agents",
        title: "Partnership questions",
        body: "A clear split between partner and agent routes, with short answers about tools and first steps.",
        items: [
          {
            question: "What is the difference between partner and agent?",
            answer: "A partner promotes to an audience through a code or campaign. An agent supports players locally and follows the right service and transaction path.",
          },
          {
            question: "What do I receive when I start?",
            answer: "You start with a clear route, suitable materials, performance visibility, and direct support from the partnership manager.",
          },
          {
            question: "When do official contact channels appear?",
            answer: "Official channels appear after market approval and the right campaign setup, then the next steps move into the direct route.",
          },
        ],
      },
      support: {
        eyebrow: "Need a clearer route?",
        title: "Choose the route that fits what you want now",
        body: "Open the games if you want to play, or move to Partnership if you want to work through your audience or local network.",
        cta: { label: "Back to home", href: "/", variant: "primary" },
      },
    },
  },
};
