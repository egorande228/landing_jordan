import type {
  IconTag,
  LocalizedMarketContent,
  MediaAsset,
  MediaPlaceholder,
  MediaRatio,
  MediaVariant,
  MediaVideo,
  SectionContent,
} from "@/types/landing";
import { CASINO_REF_LINK, MAIL_LINK, SPORT_REF_LINK, TELEGRAM_LINK } from "@/lib/links";

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

const sportsVisual = asset("/home/sports/sports.png", "Jordan sports atmosphere artwork", "sports", "21:9");

const offerPromoVisual = asset("/home/offers/welcome.png", "Jordan welcome offer artwork", "offers");
const offerFreeVisual = asset("/home/offers/free.png", "Jordan free bets artwork", "offers");
const offerGiftVisual = asset("/home/offers/season.png", "Jordan seasonal offer artwork", "offers");

const esportsMarks = [
  iconTag("CS2", "/home/esports/cs2.png", "Counter-Strike 2"),
  iconTag("Dota 2", "/home/esports/dota.png", "Dota 2"),
  iconTag("League", "/home/esports/lol.png", "League of Legends"),
  iconTag("Valorant", "/home/esports/valorant.png", "Valorant"),
] as const;

const esportsTacticalMarks = [esportsMarks[3]] as const;
const esportsMobaMarks = [esportsMarks[1]] as const;
const esportsNightMarks = [esportsMarks[0]] as const;

function withHref<T extends SectionContent>(section: T, href: string): T {
  return {
    ...section,
    cards: section.cards?.map((card) => ({ ...card, href })),
  };
}

export const jordanContent: Record<"ar" | "en", LocalizedMarketContent> = {
  ar: {
    seo: {
      home: {
        title: "MELBET الأردن | رياضة مباشرة، ألعاب كازينو، وعروض لاعبين",
        description: "تابع المباريات، افتح ألعاب الكازينو، وابق قريباً من عروض اللاعبين وتجربة الهاتف السريعة في الأردن.",
      },
      partnership: {
        title: "شراكة MELBET الأردن | فرصة عمل للشريك والوكيل",
        description: "حوّل جمهورك أو مدينتك إلى فرصة عمل واضحة مع مسار للشريك التسويقي أو الوكيل المحلي ودعم من مدير الشراكات.",
      },
      faq: {
        title: "FAQ MELBET الأردن | أسئلة اللعب والعمل",
        description: "إجابات سريعة عن التسجيل، الألعاب، العروض، وطريق العمل للشركاء والوكلاء في الأردن.",
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
      brandText: "تابع المباريات، افتح لعبتك، وابق قريباً من عروض اللاعبين على كل شاشة.",
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
        { label: "الأسئلة", href: "/faq" },
      ],
    },
    compliance: {
      label: "تحديث الإطلاق",
      message:
        "تظهر القنوات الرسمية وتفاصيل العروض وطرق الدفع بعد اعتماد السوق. وحتى ذلك الحين يمكنك متابعة الألعاب واختيار المسار الذي يناسبك للعب أو للعمل.",
    },
    home: {
      hero: {
        eyebrow: "MELBET الأردن",
        title: "ادخل إلى المباريات، ألعاب الكازينو، وعروض اللاعبين من نفس الإيقاع",
        body: "تابع كرة القدم أولاً، ثم افتح السولتات، اللايف كازينو، والألعاب السريعة من نفس المسار. كل ما تحتاجه للعب السريع يبقى قريباً على الهاتف.",
        chips: ["رياضة مباشرة", "كازينو جاهز", "عروض للاعبين"],
        media: heroVisual,
        cta: { label: "اختر لعبتك", href: CASINO_REF_LINK, variant: "primary" },
        secondaryCta: { label: "شاهد العروض", href: CASINO_REF_LINK, variant: "secondary" },
        stats: [
          {
            eyebrow: "كرة القدم",
            title: "ابدأ بالمباراة التي تشغل الليلة",
            body: "نتيجة واضحة، انتقال سريع بين اللقاءات، ولوحة تبقيك قريباً من أقوى المباريات.",
            metric: "90'",
            chips: ["مباريات كبيرة", "قراءة سريعة"],
            tone: "green",
          },
          {
            eyebrow: "كازينو",
            title: "انتقل إلى السولتات والطاولات في ثوانٍ",
            body: "سولتات، لايف كازينو، ألعاب سريعة، وطاولات كلاسيكية عندما تريد تغيير الإيقاع من دون انتظار.",
            metric: "4",
            chips: ["سولتات", "لايف كازينو"],
            tone: "gold",
          },
          {
            eyebrow: "العروض",
            title: "احتفظ بالمكافآت ضمن نفس الرحلة",
            body: "عروض الترحيب، الرهانات المجانية، والهدايا الموسمية تبقى أمامك عندما تكون الحملة متاحة.",
            metric: "3",
            chips: ["ترحيب", "رهانات مجانية", "هدايا"],
            tone: "red",
          },
        ],
      },
      games: withHref({
        eyebrow: "الكازينو",
        title: "اختر اللعبة التي تناسب مزاجك الليلة",
        body: "ادخل إلى السولتات، اللايف كازينو، الألعاب السريعة، أو الطاولات الكلاسيكية، واختر الإيقاع الذي يناسبك من أول لمسة.",
        chips: ["سولت", "لايف كازينو", "ألعاب سريعة", "طاولات"],
        cards: [
          {
            eyebrow: "Casino",
            title: "سولت",
            body: "لفات سريعة، حضور قوي على الهاتف، ودخول مباشر لمن يريد اللعب من دون تعقيد.",
            label: "ابدأ بسرعة",
            chips: ["واجهة هاتف", "جلسات قصيرة"],
            points: ["بداية سريعة", "جلسات قصيرة", "واجهة واضحة"],
            media: casinoSlotsVisual,
            tone: "gold",
          },
          {
            eyebrow: "Live",
            title: "لايف كازينو",
            body: "طاولات مباشرة وأجواء ليلية أقرب إلى الحدث عندما تريد تجربة أغنى وتفاصيل أوضح.",
            label: "ادخل إلى الطاولة",
            chips: ["طاولات", "بث حي"],
            points: ["طاقة مباشرة", "تفاصيل أقوى", "إحساس أقرب للحدث"],
            media: casinoLiveVisual,
            tone: "red",
          },
          {
            eyebrow: "Fast",
            title: "ألعاب سريعة",
            body: "جولات قصيرة ورتم سريع عندما تريد اللعب فوراً والانتقال من جولة إلى أخرى بسهولة.",
            label: "العب فوراً",
            chips: ["Quick play", "Mobile"],
            points: ["دخول أسرع", "جلسات خفيفة", "مناسب للهاتف"],
            media: casinoFastVisual,
            tone: "sand",
          },
          {
            eyebrow: "Tables",
            title: "ألعاب الطاولة",
            body: "بلاك جاك، روليت، وطاولات كلاسيكية لمن يريد هدوءاً أكثر مع إحساس ليلي أنيق.",
            label: "إيقاع كلاسيكي",
            chips: ["Blackjack", "Roulette"],
            points: ["إيقاع أهدأ", "قراءة أسهل", "تجربة كلاسيكية"],
            media: casinoTableVisual,
            tone: "dark",
          },
        ],
      }, CASINO_REF_LINK),
      sports: withHref({
        eyebrow: "الرياضة",
        title: "تابع المباراة التي تهمك، وأبقِ باقي الرياضات في متناولك",
        body: "ابدأ بكرة القدم، ثم انتقل إلى التنس وكرة السلة والمواجهات المباشرة من دون أن تضيع النتيجة.",
        chips: ["كرة القدم", "تنس", "كرة السلة", "مباشر"],
        media: sportsVisual,
        cards: [
          {
            eyebrow: "Lead board",
            title: "كرة القدم",
            body: "ابدأ بالمباريات الكبرى، راقب النتيجة بسرعة، وابق قريباً من اللقاءات التي تغيّر شكل الليلة.",
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
            body: "راقب الربع الأخير وتبدّل النتيجة بسرعة أكبر عندما تريد طاقة مباشرة ومساحة أوضح.",
            metric: "Q4",
            chips: ["Fast score", "Live strip"],
            points: ["نقل أسرع للمعلومة", "طاقة مباشرة", "بدون ازدحام بصري"],
            tone: "red",
          },
        ],
      }, SPORT_REF_LINK),
      esports: withHref({
        eyebrow: "الرياضات الإلكترونية",
        title: "أبقِ بطولات الليل ومواجهات الإي سبورت قريبة منك",
        body: "خرائط سريعة، سلاسل أطول، وعلامات ألعاب مألوفة عندما تريد منافسة جديدة بعد المباريات.",
        chips: ["بطولات", "خرائط سريعة", "Best of"],
        iconTags: [...esportsMarks],
        cards: [
          {
            eyebrow: "Arena",
            title: "ساحات تكتيكية",
            body: "جولات سريعة، خرائط حاسمة، وإيقاع يناسب من يحب المواجهات المركزة.",
            chips: ["CS2", "Valorant"],
            iconTags: [...esportsTacticalMarks],
            tone: "dark",
          },
          {
            eyebrow: "Draft",
            title: "بطولات MOBA",
            body: "اختيارات أبطال، سلاسل أطول، ومتابعة أوضح للفرق الكبيرة والمباريات الممتدة.",
            chips: ["Dota 2", "League"],
            iconTags: [...esportsMobaMarks],
            tone: "green",
          },
          {
            eyebrow: "Night sessions",
            title: "جلسات ليلية مباشرة",
            body: "مسار خفيف للمباريات المتأخرة والجولات التي تحتاج دخولاً سريعاً وقراءة سريعة.",
            chips: ["Live", "Night"],
            iconTags: [...esportsNightMarks],
            tone: "sand",
          },
        ],
      }, SPORT_REF_LINK),
      offers: withHref({
        eyebrow: "العروض",
        title: "عروض اللاعبين تبقى جاهزة عندما تفتح الحملة",
        body: "عروض ترحيب، رهانات مجانية، لفات مجانية، وهدايا موسمية بصياغة واضحة وشروط تبقى قريبة من كل حملة.",
        chips: ["ترحيب", "رهانات مجانية", "لفات مجانية"],
        cards: [
          {
            eyebrow: "Offer lane",
            title: "عروض ترحيب",
            body: "ابدأ بحافز أقوى عندما تكون حملة الترحيب متاحة للاعبين في السوق.",
            label: "عند التفعيل",
            footnote: "تظهر التفاصيل الكاملة عند اعتماد الحملة.",
            media: offerPromoVisual,
            tone: "gold",
          },
          {
            eyebrow: "Campaign",
            title: "رهانات مجانية",
            body: "خيار مناسب للاعب الذي يريد دفعة إضافية على المباريات عندما تظهر الحملة المناسبة.",
            label: "بحسب الحملة",
            footnote: "القيم والشروط تأتي من الحملة المعتمدة فقط.",
            media: offerFreeVisual,
            tone: "green",
          },
          {
            eyebrow: "Seasonal",
            title: "لفات وهدايا موسمية",
            body: "لفات مجانية أو هدايا قصيرة المدى في المواسم المهمة عندما تظهر الحملة بصيغتها المعتمدة.",
            label: "موسمي",
            footnote: "تختلف الصياغة النهائية حسب الموسم والحملة.",
            media: offerGiftVisual,
            tone: "red",
          },
        ],
      }, CASINO_REF_LINK),
      finalCta: {
        eyebrow: "جاهز للخطوة التالية؟",
        title: "اختر لعبتك، راقب العرض، أو افتح طريق العمل",
        body: "ابدأ بالرياضة أو الكازينو، راجع الأسئلة الشائعة إذا أردت إجابات سريعة، وانتقل إلى الشراكة إذا كنت تريد تحويل جمهورك أو شبكتك إلى فرصة عمل.",
        chips: ["رياضة", "كازينو", "فرصة عمل"],
        cta: { label: "اختر لعبتك", href: CASINO_REF_LINK, variant: "primary" },
        secondaryCta: { label: "افتح الشراكة", href: "/partnership", variant: "secondary" },
      },
    },
    partnership: {
      hero: {
        eyebrow: "اعمل مع MELBET الأردن",
        title: "حوّل جمهورك أو مدينتك إلى فرصة عمل واضحة",
        body: "إذا كنت تعرف لاعبين، تملك جمهوراً، أو تستطيع متابعة الإيداع والسحب محلياً، فهنا تبدأ بخطوات واضحة، أدوات جاهزة، ومدير يتابعك من البداية.",
        chips: ["شريك تسويقي", "وكيل محلي", "دعم من المدير"],
        media: partnershipHeroVisual,
        cta: { label: "اختر مسارك", href: "#paths", variant: "primary" },
        secondaryCta: { label: "تحدث مع المدير", href: "#contact", variant: "secondary" },
        stats: [
          {
            eyebrow: "Partner",
            title: "شريك تسويقي",
            body: "يروج بعرض أو كود خاص، يجلب اللاعبين، ويتابع الأداء مع مدير الشراكات.",
            metric: "01",
            chips: ["جمهور", "حملات"],
            tone: "gold",
          },
          {
            eyebrow: "Agent",
            title: "وكيل محلي",
            body: "يدعم اللاعبين محلياً، ويتابع الإيداع والسحب حسب الطرق المناسبة في منطقته.",
            metric: "02",
            chips: ["لاعبون", "مدفوعات محلية"],
            tone: "green",
          },
          {
            eyebrow: "Manager",
            title: "دعم من المدير",
            body: "يوضح البداية، ينسق المواد، ويساعدك في اختيار الاتفاق والمسار الأنسب.",
            metric: "03",
            chips: ["متابعة", "اتفاق مناسب"],
            tone: "red",
          },
        ],
      },
      benefits: {
        eyebrow: "لماذا تبدأ من هنا",
        title: "ابدأ العمل بأدوات واضحة ودعم يحافظ على الإيقاع",
        body: "من أول رسالة تحصل على متابعة من المدير، مواد جاهزة، وتتبع يساعدك على معرفة ما يتحرك جيداً.",
        chips: ["مدير مختص", "مواد جاهزة", "تتبع أوضح"],
        cards: [
          {
            eyebrow: "Manager support",
            title: "مدير يعرف الطريق المناسب لك",
            body: "تتكلم مع شخص واحد يختصر البداية، يوضح الدور، ويساعدك على أخذ الخطوة التالية بثقة.",
            points: ["توجيه أولي", "اختيار المسار", "متابعة أوضح"],
            tone: "gold",
          },
          {
            eyebrow: "Onboarding",
            title: "بداية منظمة من أول يوم",
            body: "تعرف ما الذي تحتاجه أولاً، وما الذي يأتي بعده، من دون قفز بين تفاصيل مبهمة.",
            points: ["تعريف الدور", "تجهيز القناة", "خطوات متتابعة"],
            tone: "green",
          },
          {
            eyebrow: "Materials",
            title: "مواد ترويجية جاهزة للتبديل",
            body: "صور ورسائل يمكن تحديثها بسرعة حتى يبقى حضورك متناسقاً عندما تصل الحملة المعتمدة.",
            points: ["صور قابلة للتبديل", "نصوص واضحة", "حضور موحد"],
            tone: "red",
          },
          {
            eyebrow: "Tracking",
            title: "تتبع يوضح الأداء من دون مبالغة",
            body: "تعرف ما الذي يتحرك جيداً وما الذي يحتاج إلى تعديل قبل أن توسع الحملة أو الخدمة.",
            points: ["أكواد", "حملات", "مؤشرات مقروءة"],
            tone: "sand",
          },
        ],
      },
      steps: {
        eyebrow: "البداية",
        title: "ثلاث خطوات قبل أن تبدأ العمل",
        body: "أرسل معلوماتك، اختر المسار المناسب، ثم اتفق على الخطوة الأولى مع المدير.",
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
            body: "الشريك التسويقي لمن يملك جمهوراً أو حركة زيارات، والوكيل المحلي لمن يتابع اللاعبين والتعاملات.",
            metric: "2",
            points: ["شريك تسويقي", "وكيل محلي", "اختيار واضح"],
            tone: "green",
          },
          {
            eyebrow: "Step",
            title: "ابدأ مع الخطة الأولى",
            body: "بعد تحديد الدور تصبح الأدوات، المواد، وطريقة المتابعة أوضح وأسهل في التنفيذ.",
            metric: "3",
            points: ["خطة أولية", "مواد مناسبة", "متابعة مع المدير"],
            tone: "red",
          },
        ],
      },
      paths: {
        eyebrow: "المسارات",
        title: "اختر بين الشريك التسويقي والوكيل المحلي من البداية",
        body: "إذا كنت تملك جمهوراً فالشريك التسويقي أقرب لك. وإذا كنت قريباً من اللاعبين وتستطيع متابعة التعاملات، فمسار الوكيل المحلي أنسب.",
        cards: [
          {
            eyebrow: "الشريك التسويقي",
            title: "شريك تسويقي",
            body: "إذا كان لديك جمهور، قناة، مجتمع، أو حركة زيارات، ابدأ بكود خاص ومواد ترويجية وتتبّع يساعدك على النمو.",
            label: "جمهور وحملات",
            points: ["كود خاص", "رسائل للحملات", "متابعة للأداء"],
            media: partnerRouteVisual,
            tone: "gold",
          },
          {
            eyebrow: "الوكيل المحلي",
            title: "وكيل محلي",
            body: "إذا كنت قريباً من اللاعبين وتستطيع متابعة الإيداع والسحب محلياً، فهذا المسار يعطيك دوراً واضحاً في الخدمة اليومية.",
            label: "دعم محلي وتعاملات",
            points: ["مساعدة اللاعبين", "تنسيق التعاملات", "قرب من السوق المحلي"],
            media: agentRouteVisual,
            tone: "green",
          },
        ],
      },
      tools: {
        eyebrow: "الأدوات",
        title: "كود، مواد، تتبع، ودعم يساعدك على البيع والمتابعة",
        body: "كل ما تحتاجه ليبقى العمل منظماً: كود ترويجي، متابعة للأداء، مواد للحملات، وخط مباشر مع المدير.",
        chips: ["كود ترويجي", "تتبع الأداء", "دعم من المدير"],
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
            body: "تعرف ما الذي يتحرك جيداً وما الذي يحتاج إلى تعديل قبل أن توسع الحملة.",
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
        eyebrow: "ابدأ الحديث",
        title: "أرسل بياناتك واختر المسار الذي يناسبك في العمل",
        body: "اسمك، جمهورك أو مدينتك، وطريقة العمل التي تناسبك تكفي لتبدأ الحديث مع المدير عندما تفتح القنوات الرسمية.",
        chips: ["جمهور أو قناة", "مدينة أو منطقة", "شريك أو وكيل"],
        cta: {
          label: "تحدث عبر تيليجرام",
          href: TELEGRAM_LINK,
          variant: "primary",
          iconSrc: "/telegram.png",
          iconAlt: "Telegram",
        },
        secondaryCta: {
          label: "تواصل عبر الإيميل",
          href: MAIL_LINK,
          variant: "secondary",
        },
      },
    },
    faq: {
      hero: {
        eyebrow: "FAQ",
        title: "إجابات سريعة قبل أن تلعب أو تدخل فرصة العمل",
        body: "سواء كنت تريد اللعب أو تبحث عن طريقة للعمل، ستجد هنا الإجابات الأقرب للخطوة التالية.",
        chips: ["لاعبون", "فرصة عمل", "العربية أولاً"],
      },
      player: {
        eyebrow: "اللاعبون",
        title: "أسئلة اللاعبين",
        body: "إجابات سريعة عن التسجيل، الألعاب، العروض، والدعم.",
        items: [
          {
            question: "متى أستطيع البدء؟",
            answer: "تظهر خطوات التسجيل والقنوات المباشرة بعد اعتماد السوق. وحتى ذلك الحين يمكنك متابعة الرياضة، اختيار لعبتك، ومراجعة العروض المتاحة.",
          },
          {
            question: "ما الذي أستطيع لعبه هنا؟",
            answer: "ستجد كرة قدم مباشرة، تنس، كرة سلة، سولتات، لايف كازينو، ألعاب سريعة، وطاولات كلاسيكية في مسار واضح وسهل القراءة.",
          },
          {
            question: "هل توجد عروض للاعبين؟",
            answer: "نعم. عند توفر الحملة ستجد عروض ترحيب، رهانات مجانية، ولفات أو هدايا موسمية مع الشروط الخاصة بكل حملة.",
          },
        ],
      },
      partnership: {
        eyebrow: "العمل والشراكة",
        title: "أسئلة العمل",
        body: "إجابات سريعة إذا كنت تريد العمل كشريك تسويقي أو وكيل محلي.",
        items: [
          {
            question: "ما الفرق بين الشريك التسويقي والوكيل المحلي؟",
            answer: "الشريك التسويقي يروج لجمهوره بكود أو حملة واضحة. الوكيل المحلي يساعد اللاعبين محلياً ويتابع الإيداع والسحب والخدمة المناسبة.",
          },
          {
            question: "كيف تُحدد شروط العمل؟",
            answer: "تختلف الشروط حسب نوع المسار، حجم الجمهور أو التعاملات، وطريقة الاتفاق مع مدير الشراكات.",
          },
          {
            question: "ماذا أحتاج حتى أبدأ الحديث؟",
            answer: "اسمك، المدينة أو المنطقة، ونوع الدور الذي يناسبك يكفيان لبدء التواصل عند فتح القنوات الرسمية.",
          },
        ],
      },
      support: {
        eyebrow: "اختر خطوتك الآن",
        title: "العب أولاً أو افتح طريق العمل",
        body: "اتجه إلى الألعاب إذا كنت تريد البدء كلاعب، أو افتح الشراكة إذا كنت تريد تحويل جمهورك أو شبكتك إلى فرصة عمل.",
        cta: { label: "اختر لعبتك", href: CASINO_REF_LINK, variant: "primary" },
      },
    },
  },
  en: {
    seo: {
      home: {
        title: "MELBET Jordan | Live Sports, Casino Games, and Player Offers",
        description: "Follow the match, open casino games, and keep player offers close with a fast mobile-first flow for Jordan.",
      },
      partnership: {
        title: "MELBET Jordan Partnership | A Work Route for Partners and Agents",
        description: "Turn your audience or city into a clear MELBET work route with affiliate partner and local agent options for Jordan.",
      },
      faq: {
        title: "MELBET Jordan FAQ | Questions About Play and Work",
        description: "Quick answers about games, offers, mobile access, and the Jordan work route for partners and local agents.",
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
      brandText: "Follow the match, open your game, and keep player offers within reach on every screen.",
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
        { label: "FAQ", href: "/faq" },
      ],
    },
    compliance: {
      label: "Launch update",
      message:
        "Official channels, offer details, and payment routes appear after market approval. Until then, you can explore the games and choose the next route that fits play or work.",
    },
    home: {
      hero: {
        eyebrow: "MELBET Jordan",
        title: "Pick your match, open your game, and keep player offers close",
        body: "Follow live football first, then move into slots, live casino, and quick games from the same mobile flow. Everything you need for a faster night stays within easy reach.",
        chips: ["Live sports", "Casino games", "Player offers"],
        media: heroVisual,
        cta: { label: "Choose your game", href: CASINO_REF_LINK, variant: "primary" },
        secondaryCta: { label: "See offers", href: CASINO_REF_LINK, variant: "secondary" },
        stats: [
          {
            eyebrow: "Football",
            title: "Start with the match that carries the night",
            body: "Keep the score clear, move fast between fixtures, and stay close to the games that matter most.",
            metric: "90'",
            chips: ["Big matches", "Quick read"],
            tone: "green",
          },
          {
            eyebrow: "Casino",
            title: "Open slots and tables in seconds",
            body: "Move from football to slots, live casino, fast games, and classic tables without slowing down.",
            metric: "4",
            chips: ["Slots", "Live casino"],
            tone: "gold",
          },
          {
            eyebrow: "Offers",
            title: "Keep bonuses in the same flow",
            body: "Welcome offers, free bets, and seasonal gifts stay close when the campaign is live.",
            metric: "3",
            chips: ["Welcome", "Free bets", "Gifts"],
            tone: "red",
          },
        ],
      },
      games: withHref({
        eyebrow: "Casino",
        title: "Choose the game that fits your mood tonight",
        body: "Jump into slots, live casino, fast games, or classic tables and keep the pace that suits you from the first tap.",
        chips: ["Slots", "Live casino", "Fast games", "Table games"],
        cards: [
          {
            eyebrow: "Casino",
            title: "Slots",
            body: "Fast spins, strong mobile presence, and direct entry for players who want to start without friction.",
            label: "Start fast",
            chips: ["Phone-first", "Short sessions"],
            points: ["Fast start", "Short sessions", "Clear layout"],
            media: casinoSlotsVisual,
            tone: "gold",
          },
          {
            eyebrow: "Live",
            title: "Live casino",
            body: "Live tables and a stronger night atmosphere when you want richer detail and a closer feel to the action.",
            label: "Open the table",
            chips: ["Tables", "Live"],
            points: ["Live energy", "Better detail", "Closer to the action"],
            media: casinoLiveVisual,
            tone: "red",
          },
          {
            eyebrow: "Fast",
            title: "Fast games",
            body: "Short rounds and a quicker rhythm when you want to play right away and move from one round to the next with ease.",
            label: "Play now",
            chips: ["Quick play", "Mobile"],
            points: ["Faster entry", "Lighter sessions", "Built for mobile"],
            media: casinoFastVisual,
            tone: "sand",
          },
          {
            eyebrow: "Tables",
            title: "Table games",
            body: "Blackjack, roulette, and classic tables when you want a calmer pace with a sharper night feel.",
            label: "Classic pace",
            chips: ["Blackjack", "Roulette"],
            points: ["Calmer rhythm", "Easier reading", "Classic experience"],
            media: casinoTableVisual,
            tone: "dark",
          },
        ],
      }, CASINO_REF_LINK),
      sports: withHref({
        eyebrow: "Sports",
        title: "Follow the match that matters and keep the rest within reach",
        body: "Start with football, then jump to tennis, basketball, and live competition without losing the score.",
        chips: ["Football", "Tennis", "Basketball", "Live"],
        media: sportsVisual,
        cards: [
          {
            eyebrow: "Lead board",
            title: "Football",
            body: "Start with the biggest fixtures, read the score quickly, and stay close to the matches that change the night.",
            metric: "90'",
            chips: ["Big nights", "Quick read"],
            points: ["Football stays first", "Score stays clear", "Metrics remain LTR"],
            tone: "green",
          },
          {
            eyebrow: "Court lane",
            title: "Tennis",
            body: "Track sets and fast swings when you want a lighter read and a shorter match rhythm.",
            metric: "Set",
            chips: ["Singles", "Tournaments"],
            points: ["Tighter detail", "Lighter pace", "Works for shorter events"],
            tone: "gold",
          },
          {
            eyebrow: "Live pace",
            title: "Basketball",
            body: "Watch the final quarter and fast score changes when you want live energy and a tighter lane.",
            metric: "Q4",
            chips: ["Fast score", "Live strip"],
            points: ["Faster signal", "Live energy", "No visual overload"],
            tone: "red",
          },
        ],
      }, SPORT_REF_LINK),
      esports: withHref({
        eyebrow: "Esports",
        title: "Keep late-night esports close to the main action",
        body: "Fast maps, longer series, and familiar titles stay close when you want fresh competition after the main fixtures.",
        chips: ["Tournaments", "Fast maps", "Best of"],
        iconTags: [...esportsMarks],
        cards: [
          {
            eyebrow: "Arena",
            title: "Tactical arenas",
            body: "Fast rounds, decisive maps, and a rhythm built for focused matchups.",
            chips: ["CS2", "Valorant"],
            iconTags: [...esportsTacticalMarks],
            tone: "dark",
          },
          {
            eyebrow: "Draft",
            title: "MOBA majors",
            body: "Draft phases, longer series, and clearer tracking for bigger team matchups.",
            chips: ["Dota 2", "League"],
            iconTags: [...esportsMobaMarks],
            tone: "green",
          },
          {
            eyebrow: "Night sessions",
            title: "Late live sessions",
            body: "A lighter lane for late matches and faster entry when you want a quick read.",
            chips: ["Live", "Night"],
            iconTags: [...esportsNightMarks],
            tone: "sand",
          },
        ],
      }, SPORT_REF_LINK),
      offers: withHref({
        eyebrow: "Offers",
        title: "Player offers worth checking when the campaign goes live",
        body: "Welcome bonuses, free bets, free spins, and seasonal gifts stay easy to spot, with the terms kept close to each campaign.",
        chips: ["Welcome", "Free bets", "Free spins"],
        cards: [
          {
            eyebrow: "Offer lane",
            title: "Welcome offers",
            body: "Start with a stronger opening when the right welcome campaign is available for players in the market.",
            label: "When active",
            footnote: "Full details appear when the campaign is approved.",
            media: offerPromoVisual,
            tone: "gold",
          },
          {
            eyebrow: "Campaign",
            title: "Free bets",
            body: "A useful push for players who want extra value on the match board when the right campaign goes live.",
            label: "Campaign-based",
            footnote: "Values and terms come only from approved campaign content.",
            media: offerFreeVisual,
            tone: "green",
          },
          {
            eyebrow: "Seasonal",
            title: "Free spins and seasonal gifts",
            body: "Free spins or shorter gift campaigns for key moments in the year when the approved version goes live.",
            label: "Seasonal",
            footnote: "Final wording depends on the season and campaign.",
            media: offerGiftVisual,
            tone: "red",
          },
        ],
      }, CASINO_REF_LINK),
      finalCta: {
        eyebrow: "Ready for the next move?",
        title: "Choose your game, check the offer, or open the work route",
        body: "Start with sports or casino, check the FAQ if you want quick answers, or open Partnership if you want to turn your audience or local network into work.",
        chips: ["Sports", "Casino", "Work route"],
        cta: { label: "Choose your game", href: CASINO_REF_LINK, variant: "primary" },
        secondaryCta: { label: "Open Partnership", href: "/partnership", variant: "secondary" },
      },
    },
    partnership: {
      hero: {
        eyebrow: "Work with MELBET Jordan",
        title: "Turn your audience or city into a real work route",
        body: "If you know players, own a channel, or can handle local deposits and withdrawals, you can start with a clear route, ready tools, and manager support from day one.",
        chips: ["Affiliate partner", "Local agent", "Manager support"],
        media: partnershipHeroVisual,
        cta: { label: "Choose your route", href: "#paths", variant: "primary" },
        secondaryCta: { label: "Talk to the manager", href: "#contact", variant: "secondary" },
        stats: [
          {
            eyebrow: "Partner",
            title: "Affiliate partner",
            body: "Promote with a private code or campaign, bring players in, and track the movement with the partnership manager.",
            metric: "01",
            chips: ["Audience", "Campaigns"],
            tone: "gold",
          },
          {
            eyebrow: "Agent",
            title: "Local agent",
            body: "Support players locally and follow deposits and withdrawals through the right methods in your area.",
            metric: "02",
            chips: ["Players", "Local payments"],
            tone: "green",
          },
          {
            eyebrow: "Manager",
            title: "Manager support",
            body: "Start with clearer direction, better coordination, and a route that fits your role and agreement.",
            metric: "03",
            chips: ["Follow-up", "Deal fit"],
            tone: "red",
          },
        ],
      },
      benefits: {
        eyebrow: "Why start here",
        title: "Start the work with clear tools and support that keeps moving",
        body: "From the first message you get manager follow-up, ready materials, and tracking that helps you see what is working.",
        chips: ["Dedicated manager", "Ready materials", "Clearer tracking"],
        cards: [
          {
            eyebrow: "Manager support",
            title: "A manager who knows the route that fits you",
            body: "You talk to one person who shortens the start, clarifies the role, and helps you take the next step with confidence.",
            points: ["Early guidance", "Route selection", "Clearer follow-up"],
            tone: "gold",
          },
          {
            eyebrow: "Onboarding",
            title: "A structured first step",
            body: "You know what you need first and what comes next without jumping through vague stages.",
            points: ["Role definition", "Channel prep", "Step-by-step flow"],
            tone: "green",
          },
          {
            eyebrow: "Materials",
            title: "Marketing materials ready to refresh",
            body: "Images and campaign messages can be updated quickly so your presence stays consistent when the approved campaign arrives.",
            points: ["Replaceable visuals", "Clear copy", "Consistent presence"],
            tone: "red",
          },
          {
            eyebrow: "Tracking",
            title: "Tracking that reads performance without hype",
            body: "See what is moving well and what needs adjustment before you expand the campaign or service lane.",
            points: ["Codes", "Campaigns", "Readable indicators"],
            tone: "sand",
          },
        ],
      },
      steps: {
        eyebrow: "Getting started",
        title: "Three steps before the work begins",
        body: "Send your details, choose the route that fits, then agree on the first move with the manager.",
        cards: [
          {
            eyebrow: "Step",
            title: "Send your details",
            body: "Your name, the kind of audience or channel you have, and the city or area where you work.",
            metric: "1",
            points: ["Name", "Audience or channel", "City or area"],
            tone: "gold",
          },
          {
            eyebrow: "Step",
            title: "Choose the route",
            body: "Affiliate partner if you have an audience or traffic, local agent if you can support players and handle transactions.",
            metric: "2",
            points: ["Affiliate partner", "Local agent", "Clear fit"],
            tone: "green",
          },
          {
            eyebrow: "Step",
            title: "Start with the first plan",
            body: "Once the role is clear, the tools, materials, and follow-up become easier to use and execute.",
            metric: "3",
            points: ["Early plan", "Fit-for-role materials", "Manager follow-up"],
            tone: "red",
          },
        ],
      },
      paths: {
        eyebrow: "Routes",
        title: "Choose between affiliate partner and local agent from the start",
        body: "If you have an audience, the affiliate partner route fits better. If you stay close to players and can handle transactions, the local agent route fits better.",
        cards: [
          {
            eyebrow: "Affiliate partner",
            title: "Affiliate partner",
            body: "If you have an audience, a channel, a community, or traffic, start with a private code, campaign materials, and tracking that helps you grow.",
            label: "Audience and campaigns",
            points: ["Private code", "Campaign messages", "Performance tracking"],
            media: partnerRouteVisual,
            tone: "gold",
          },
          {
            eyebrow: "Local agent",
            title: "Local agent",
            body: "If you stay close to players and can support deposits and withdrawals locally, this route gives you a clearer role in day-to-day service.",
            label: "Local support and transactions",
            points: ["Player support", "Transaction coordination", "Closer to the local market"],
            media: agentRouteVisual,
            tone: "green",
          },
        ],
      },
      tools: {
        eyebrow: "Tools",
        title: "Code, materials, tracking, and support that help you sell and follow up",
        body: "Everything you need to keep the work organized: a promo code, performance tracking, campaign materials, and a direct line with the manager.",
        chips: ["Promo code", "Performance tracking", "Manager support"],
        media: partnershipToolsVisual,
        cards: [
          {
            eyebrow: "Code",
            title: "Private promo code",
            body: "A clear code route that helps you present the offer or campaign to your audience more easily.",
            tone: "gold",
          },
          {
            eyebrow: "Tracking",
            title: "Performance tracking",
            body: "See what is moving well and what needs adjustment before you scale the campaign.",
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
            body: "Know who to check with, when to move, and what comes next without confusion.",
            tone: "sand",
          },
        ],
      },
      finalCta: {
        eyebrow: "Start the conversation",
        title: "Send your details and choose the route that fits your work",
        body: "Your name, your audience or city, and the way you want to work are enough to open the first conversation with the manager when official channels go live.",
        chips: ["Audience or channel", "City or area", "Partner or agent"],
        cta: {
          label: "Talk on Telegram",
          href: TELEGRAM_LINK,
          variant: "primary",
          iconSrc: "/telegram.png",
          iconAlt: "Telegram",
        },
        secondaryCta: {
          label: "Mail",
          href: MAIL_LINK,
          variant: "secondary",
        },
      },
    },
    faq: {
      hero: {
        eyebrow: "FAQ",
        title: "Quick answers before you play or step into the work route",
        body: "Whether you want to play or you want a way into the work, here are the closest answers before the next step.",
        chips: ["Players", "Work route", "Arabic first"],
      },
      player: {
        eyebrow: "Players",
        title: "Player questions",
        body: "Quick answers about sign-up, games, offers, and support.",
        items: [
          {
            question: "When can I get started?",
            answer: "Sign-up steps and direct channels appear after market approval. Until then, you can follow the sports board, choose your game, and review the available offers.",
          },
          {
            question: "What can I play here?",
            answer: "You can move through live football, tennis, basketball, slots, live casino, fast games, and classic tables in one clear flow.",
          },
          {
            question: "Are player offers included?",
            answer: "Yes. When a campaign is active, you can find welcome offers, free bets, and seasonal spins or gifts with the terms shown close to the message.",
          },
        ],
      },
      partnership: {
        eyebrow: "Work and partnership",
        title: "Work questions",
        body: "Quick answers if you want to work as an affiliate partner or local agent.",
        items: [
          {
            question: "What is the difference between affiliate partner and local agent?",
            answer: "An affiliate partner promotes to an audience with a code or campaign. A local agent supports players locally and follows the right deposit, withdrawal, and service path.",
          },
          {
            question: "How are work terms usually handled?",
            answer: "Terms depend on the route, the size of the audience or transaction flow, and the agreement made with the partnership manager.",
          },
          {
            question: "What do I need to start the conversation?",
            answer: "Your name, the city or area you work in, and the role that fits you are enough to start the conversation when official channels open.",
          },
        ],
      },
      support: {
        eyebrow: "Choose the next step",
        title: "Play first or open the work route",
        body: "Go to the games if you want to start as a player, or open Partnership if you want to turn your audience or network into work.",
        cta: { label: "Choose your game", href: CASINO_REF_LINK, variant: "primary" },
      },
    },
  },
};
