// app/data/achievements.ts
export interface Achievement {
  id: number;
  value: number;
  suffix?: string;
  backgroundImage: string;
  color: string;
  hideValue?: boolean; // Nouvelle propriété optionnelle
  title: {
    fr: string;
    en: string;
    ar: string;
  };
  description: {
    fr: string;
    en: string;
    ar: string;
  };
}

export const achievements: Achievement[] = [
  {
    id: 1,
    value: 1316,
    suffix: "",
    backgroundImage: "/images/achievements/consultation.png",
    color: "from-blue-500 to-indigo-600",
    title: {
      fr: "Consultations médicales",
      en: "medical Consultations",
      ar: "استشارات طبية",
    },
    description: {
      fr: "1316 consultations médicales  fournies à des patients de tous âges et conditions.",
      en: "1316 medical consultations provided to patients of all ages and conditions.",
      ar: "1316 استشارة طبية مقدمة للمرضى من جميع الأعمار والحالات.",
    },
  },
  {
    id: 2,
    value: 86,
    suffix: "",
    backgroundImage: "/images/achievements/chirurgie.png",
    color: "from-emerald-500 to-teal-600",
    title: {
      fr: "Actes Opératoires",
      en: "Surgical Procedures",
      ar: "عمليات جراحية",
    },
    description: {
      fr: "86 actes opératoires réalisés avec succès dans diverses spécialités chirurgicales.",
      en: "86 surgical procedures successfully performed across various surgical specialties.",
      ar: "86 عملية جراحية ناجحة في مختلف التخصصات الجراحية.",
    },
  },
  {
    id: 3,
    value: 252,
    suffix: "",
    backgroundImage: "/images/achievements/urgence.png",
    color: "from-red-500 to-rose-600",
    title: {
      fr: "Consultations aux Urgences",
      en: "Emergency Consultations",
      ar: "استشارات الطوارئ",
    },
    description: {
      fr: "252 consultations d'urgence fournies pour des cas nécessitant une attention médicale immédiate.",
      en: "252 emergency consultations provided for cases requiring immediate medical attention.",
      ar: "252 استشارة طوارئ مقدمة للحالات التي تتطلب عناية طبية فورية.",
    },
  },
  {
    id: 4,
    value: 116,
    suffix: "",
    backgroundImage: "/images/achievements/mammography.png",
    color: "from-pink-500 to-fuchsia-600",
    title: {
      fr: "Mammographies",
      en: "Mammograms",
      ar: "تصوير الثدي الشعاعي",
    },
    description: {
      fr: "116 mammographies réalisées pour le dépistage et le diagnostic du cancer du sein.",
      en: "116 mammograms performed for breast cancer screening and diagnosis.",
      ar: "116 تصوير شعاعي للثدي لفحص وتشخيص سرطان الثدي.",
    },
  },
  {
    id: 5,
    value: 47,
    suffix: "",
    backgroundImage: "/images/achievements/echography.png",
    color: "from-purple-500 to-violet-600",
    title: {
      fr: "Échographies Mammaires",
      en: "Breast Ultrasounds",
      ar: "الموجات فوق الصوتية للثدي",
    },
    description: {
      fr: "47 échographies mammaires effectuées pour compléter le diagnostic des pathologies du sein.",
      en: "47 breast ultrasounds performed to complement the diagnosis of breast pathologies.",
      ar: "47 فحص بالموجات فوق الصوتية للثدي لاستكمال تشخيص أمراض الثدي.",
    },
  },
  {
    id: 6,
    value: 129,
    suffix: "",
    backgroundImage: "/images/achievements/abdominal.png",
    color: "from-amber-500 to-orange-600",
    title: {
      fr: "Échographies Abdominales",
      en: "Abdominal Ultrasounds",
      ar: "الموجات فوق الصوتية للبطن",
    },
    description: {
      fr: "129 échographies abdominales réalisées pour diagnostiquer diverses pathologies digestives.",
      en: "129 abdominal ultrasounds performed to diagnose various digestive pathologies.",
      ar: "129 فحص بالموجات فوق الصوتية للبطن لتشخيص مختلف أمراض الجهاز الهضمي.",
    },
  },
  {
    id: 7,
    value: 133,
    suffix: "",
    backgroundImage: "/images/achievements/blood.png",
    color: "from-red-600 to-rose-700",
    title: {
      fr: "Poches de Sang Collectées",
      en: "Blood Bags Collected",
      ar: "أكياس الدم المجمعة",
    },
    description: {
      fr: "133 poches de sang collectées pour soutenir le banque de sang locales.",
      en: "133 blood bags collected to support local blood bank.",
      ar: "133 كيس دم تم جمعها لدعم بنك الدم المحلي  .",
    },
  },
  {
    id: 8,
    value: 17,
    suffix: "",
    backgroundImage: "/images/achievements/colonoscopy.png",
    color: "from-cyan-500 to-sky-600",
    title: {
      fr: "Coloscopies",
      en: "Colonoscopies",
      ar: "تنظير القولون",
    },
    description: {
      fr: "17 coloscopies réalisées pour le dépistage et le diagnostic des pathologies colorectales.",
      en: "17 colonoscopies performed for screening and diagnosis of colorectal pathologies.",
      ar: "17 تنظير للقولون لفحص وتشخيص أمراض القولون والمستقيم.",
    },
  },
  {
    id: 9,
    value: 10,
    suffix: "",
    backgroundImage: "/images/achievements/fogd.png",
    color: "from-green-500 to-emerald-600",
    title: {
      fr: "FOGD",
      en: "UGIE",
      ar: "تنظير الجهاز الهضمي العلوي",
    },
    description: {
      fr: "10 fibroscopies œso-gastro-duodénales effectuées pour diagnostiquer diverses pathologies digestives hautes.",
      en: "10 upper gastrointestinal endoscopies conducted to diagnose various upper digestive pathologies.",
      ar: "10 تنظير للجهاز الهضمي العلوي لتشخيص مختلف أمراض الجهاز الهضمي العلوي.",
    },
  },
  {
    id: 10,
    value: 8,
    suffix: "",
    backgroundImage: "/images/achievements/genetic.png",
    color: "from-indigo-500 to-blue-600",
    title: {
      fr: "Tests Génétiques",
      en: "Genetic Tests",
      ar: "اختبارات جينية",
    },
    description: {
      fr: "8 tests génétiques réalisés pour identifier les prédispositions et les diagnostics précis.",
      en: "8 genetic tests performed to identify predispositions and precise diagnoses.",
      ar: "8 اختبارات جينية لتحديد الاستعدادات الوراثية والتشخيصات الدقيقة.",
    },
  },
  {
    id: 11,
    value: 21,
    suffix: "",
    backgroundImage: "/images/achievements/infiltration.png",
    color: "from-yellow-500 to-amber-600",
    title: {
      fr: "Infiltrations",
      en: "Infiltrations",
      ar: "حقن موضعي",
    },
    description: {
      fr: "21 infiltrations en rhumatologie effectuées pour soulager les douleurs articulaires.",
      en: "21 rheumatology infiltrations performed to relieve joint pain.",
      ar: "21 حقن موضعي في طب الروماتيزم لتخفيف آلام المفاصل.",
    },
  },
  {
    id: 12,
    value: 220,
    suffix: "",
    backgroundImage: "/images/achievements/eye.png",
    color: "from-blue-400 to-cyan-600",
    title: {
      fr: "Fonds d'Œil",
      en: "Eye Fundus Examinations",
      ar: "فحص قاع العين",
    },
    description: {
      fr: "220 examens du fond d'œil réalisés en ophtalmologie pour détecter diverses pathologies oculaires.",
      en: "220 eye fundus examinations performed in ophthalmology to detect various ocular pathologies.",
      ar: "220 فحص لقاع العين في طب العيون للكشف عن مختلف أمراض العين.",
    },
  },
  {
    id: 13,
    value: 1,
    suffix: "",
    hideValue: true, // Ne pas afficher la valeur
    backgroundImage: "/images/achievements/breast-workshop.png",
    color: "from-pink-500 to-fuchsia-600",
    title: {
      fr: "Atelier d'Auto-palpation Mammaire",
      en: "Breast Self-Examination Workshop",
      ar: "ورشة الفحص الذاتي للثدي",
    },
    description: {
      fr: "Organisation d'un atelier d'auto-palpation mammaire pour les femmes afin de promouvoir la détection précoce du cancer du sein.",
      en: "Organization of a breast self-examination workshop for women to promote early detection of breast cancer.",
      ar: "تنظيم ورشة عمل للفحص الذاتي للثدي للنساء لتعزيز الكشف المبكر عن سرطان الثدي.",
    },
  },
  {
    id: 14,
    value: 1,
    suffix: "",
    hideValue: true, // Ne pas afficher la valeur
    backgroundImage: "/images/achievements/cardiac-massage.png",
    color: "from-red-500 to-rose-600",
    title: {
      fr: "Formation aux Massages Cardiaques",
      en: "Cardiac Massage Training",
      ar: "تدريب على تدليك القلب",
    },
    description: {
      fr: "Formation aux techniques de massage cardiaque pour les équipes médicales et paramédicales des urgences.",
      en: "Training in cardiac massage techniques for medical and paramedical emergency teams.",
      ar: "تدريب على تقنيات تدليك القلب لفرق الطوارئ الطبية وشبه الطبية.",
    },
  },
  {
    id: 15,
    value: 1,
    suffix: "",
    hideValue: true, // Ne pas afficher la valeur
    backgroundImage: "/images/achievements/hemodialysis.png",
    color: "from-blue-500 to-indigo-600",
    title: {
      fr: "Revue des Patients en Hémodialyse",
      en: "Hemodialysis Patient Review",
      ar: "مراجعة مرضى غسيل الكلى",
    },
    description: {
      fr: "Revue collaborative des patients en hémodialyse entre néphrologues et médecins locaux pour améliorer les protocoles de soins.",
      en: "Collaborative review of hemodialysis patients between nephrologists and local doctors to improve care protocols.",
      ar: "مراجعة تعاونية لمرضى غسيل الكلى بين أطباء الكلى والأطباء المحليين لتحسين بروتوكولات الرعاية.",
    },
  },
  {
    id: 16,
    value: 1,
    suffix: "",
    hideValue: true, // Ne pas afficher la valeur
    backgroundImage: "/images/achievements/insufisance-renale.png",
    color: "from-cyan-500 to-sky-600",
    title: {
      fr: "Campagne de Dépistage d'Insuffisance Rénale",
      en: "Kidney Failure Screening Campaign",
      ar: "حملة فحص قصور الكلى",
    },
    description: {
      fr: "Organisation d'une campagne de dépistage de l'insuffisance rénale pour identifier les cas précoces et prévenir les complications.",
      en: "Organization of a kidney failure screening campaign to identify early cases and prevent complications.",
      ar: "تنظيم حملة فحص لقصور الكلى لتحديد الحالات المبكرة ومنع المضاعفات.",
    },
  },
  {
    id: 17,
    value: 1,
    suffix: "",
    hideValue: true, // Ne pas afficher la valeur
    backgroundImage: "/images/achievements/multi-topic.png",
    color: "from-teal-500 to-green-600",
    title: {
      fr: "Journée de Formation Plurithématique",
      en: "Multi-topic Training Day",
      ar: "يوم تدريبي متعدد المواضيع",
    },
    description: {
      fr: "Organisation d'une journée de formation couvrant plusieurs thématiques médicales pour le personnel soignant local.",
      en: "Organization of a training day covering multiple medical topics for local healthcare staff.",
      ar: "تنظيم يوم تدريبي يغطي مواضيع طبية متعددة للطاقم الصحي المحلي.",
    },
  },
];
