// app/data/achievements.ts
export interface Achievement {
  id: number;
  value: number;
  suffix?: string;
  backgroundImage: string; // Ajout d'une image de fond
  color: string;
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
    value: 2000,
    suffix: "+",
    backgroundImage: "/images/specialities/chirurgie.png",
    color: "from-emerald-500 to-teal-600",
    title: {
      fr: "Interventions Chirurgicales",
      en: "Surgical Interventions",
      ar: "تدخل جراحي",
    },
    description: {
      fr: "Plus de 2000 interventions chirurgicales réalisées avec succès dans diverses spécialités.",
      en: "Over 2000 surgical interventions successfully performed across various specialties.",
      ar: "أكثر من 2000 تدخل جراحي ناجح في مختلف التخصصات.",
    },
  },
  {
    id: 2,
    value: 3500,
    suffix: "+",
    backgroundImage: "/images/achievements/consultation-bg.jpg",
    color: "from-blue-500 to-indigo-600",
    title: {
      fr: "Consultations",
      en: "Consultations",
      ar: "استشارة طبية",
    },
    description: {
      fr: "Plus de 3500 consultations médicales fournies à des patients de tous âges et conditions.",
      en: "More than 3500 medical consultations provided to patients of all ages and conditions.",
      ar: "أكثر من 3500 استشارة طبية مقدمة للمرضى من جميع الأعمار والحالات.",
    },
  },
  {
    id: 3,
    value: 750,
    suffix: "+",
    backgroundImage: "/images/achievements/endoscopy-bg.jpg",
    color: "from-purple-500 to-violet-600",
    title: {
      fr: "Procédures Endoscopiques",
      en: "Endoscopic Procedures",
      ar: "إجراء تنظير داخلي",
    },
    description: {
      fr: "Plus de 750 procédures endoscopiques réalisées avec précision et soins.",
      en: "Over 750 endoscopic procedures performed with precision and care.",
      ar: "أكثر من 750 إجراء تنظير داخلي تم إجراؤه بدقة وعناية.",
    },
  },
  {
    id: 4,
    value: 500,
    suffix: "+",
    backgroundImage: "/images/achievements/fogd-bg.jpg",
    color: "from-amber-500 to-orange-600",
    title: {
      fr: "Examens FOGD",
      en: "UGIE Examinations",
      ar: "فحص المنظار العلوي",
    },
    description: {
      fr: "Plus de 500 fibroscopies œso-gastro-duodénales effectuées pour diagnostiquer diverses pathologies.",
      en: "More than 500 upper gastrointestinal endoscopies conducted to diagnose various pathologies.",
      ar: "أكثر من 500 تنظير للجهاز الهضمي العلوي لتشخيص مختلف الأمراض.",
    },
  },
  {
    id: 5,
    value: 120,
    suffix: "",
    backgroundImage: "/images/achievements/blood-bg.jpg",
    color: "from-red-500 to-rose-600",
    title: {
      fr: "Dons de Sang",
      en: "Blood Donations",
      ar: "تبرع بالدم",
    },
    description: {
      fr: "Organisation de 120 dons de sang pour soutenir les banques de sang locales et sauver des vies.",
      en: "Organization of 120 blood donations to support local blood banks and save lives.",
      ar: "تنظيم 120 تبرع بالدم لدعم بنوك الدم المحلية وإنقاذ الأرواح.",
    },
  },
  {
    id: 6,
    value: 25,
    suffix: "",
    backgroundImage: "/images/achievements/training-bg.jpg",
    color: "from-cyan-500 to-sky-600",
    title: {
      fr: "Formations Médicales",
      en: "Medical Trainings",
      ar: "تدريب طبي",
    },
    description: {
      fr: "Organisation de 25 sessions de formation pour le personnel médical et les étudiants en médecine.",
      en: "Organization of 25 training sessions for medical staff and medical students.",
      ar: "تنظيم 25 دورة تدريبية للطاقم الطبي وطلاب الطب.",
    },
  },
];
