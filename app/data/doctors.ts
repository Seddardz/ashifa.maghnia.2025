// app/data/doctors.ts
export interface Doctor {
  id: number;
  image: string;
  name: {
    fr: string;
    en: string;
    ar: string;
  };
  role: {
    fr: string;
    en: string;
    ar: string;
  };
  bio: {
    fr: string;
    en: string;
    ar: string;
  };
}

export const doctors: Doctor[] = [
  {
    id: 1,
    image: "/images/doctors/mekkim.png",
    name: {
      fr: "MEKKI Mustapha",
      en: "MEKKI Mustapha",
      ar: "مكي مصطفى",
    },
    role: {
      fr: "Anesthésiste-réa",
      en: "Anesthesiologist-Intensivist",
      ar: "أخصائي تخدير ورعاية مركزة",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 2,
    image: "/images/doctors/hammoud.png",
    name: {
      fr: "HAMMOUD Renaud",
      en: "HAMMOUD Renaud",
      ar: "حمود رينو",
    },
    role: {
      fr: "Chirurgien viscéral",
      en: "Visceral Surgeon",
      ar: "جراح",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 3,
    image: "/images/doctors/youssouf.png",
    name: {
      fr: "KOUIDRAT Youssef",
      en: "KOUIDRAT Youssef",
      ar: "قويدرات يوسف",
    },
    role: {
      fr: "Diabétologue",
      en: "Diabetologist",
      ar: "أخصائي أمراض السكري",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 4,
    image: "/images/doctors/othmane.png",
    name: {
      fr: "BOUZOUAID Othmane",
      en: "BOUZOUAID Othmane",
      ar: "بوزوايد عثمان",
    },
    role: {
      fr: "Hépato-Gastro-Entérologue",
      en: "Hepatogastroenterologist",
      ar: "أخصائي جهاز هضمي وكبد",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 5,
    image: "/images/doctors/mehadji.png",
    name: {
      fr: "MEHADJI Hakim",
      en: "MEHADJI Hakim",
      ar: "مهاجي حكيم",
    },
    role: {
      fr: "IADE",
      en: "Nurse Anesthetist",
      ar: "ممرض تخدير",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 6,
    image: "/images/doctors/sorya.png",
    name: {
      fr: "MAKRI Sorya",
      en: "MAKRI Sorya",
      ar: "مقري صورية",
    },
    role: {
      fr: "IBODE",
      en: "Operating Room Nurse",
      ar: "ممرضة غرفة عمليات",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 7,
    image: "/images/doctors/djamila.png",
    name: {
      fr: "HEND Djamila",
      en: "HEND Djamila",
      ar: "هند جميلة",
    },
    role: {
      fr: "Infirmière soins",
      en: "Care Nurse",
      ar: "ممرضة رعاية",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 8,
    image: "/images/doctors/adda.png",
    name: {
      fr: "ADDA Hacene",
      en: "ADDA Hacene",
      ar: "عدة حسن",
    },
    role: {
      fr: "Néphrologue",
      en: "Nephrologist",
      ar: "أخصائي كلى",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 9,
    image: "/images/doctors/bachakh.png",
    name: {
      fr: "BACHAKH Abdallah",
      en: "BACHAKH Abdallah",
      ar: "بشاخ عبد الله",
    },
    role: {
      fr: "Ophthalmologue",
      en: "Ophthalmologist",
      ar: "أخصائي طب العيون",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 10,
    image: "/images/doctors/aissa.png",
    name: {
      fr: "KERKOUB Aissa",
      en: "KERKOUB Aissa",
      ar: "كركوب عيسى",
    },
    role: {
      fr: "Pédiatre",
      en: "Pediatrician",
      ar: "أخصائي أطفال",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 11,
    image: "/images/doctors/dalila.png",
    name: {
      fr: "GUEMROUD Dalila",
      en: "GUEMROUD Dalila",
      ar: "قرمود دليلة",
    },
    role: {
      fr: "Puéricultrice",
      en: "Pediatric Nurse",
      ar: "ممرضة أطفال",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 12,
    image: "/images/doctors/zeghlache.png",
    name: {
      fr: "ZEGHLACHE Khadra",
      en: "ZEGHLACHE Khadra",
      ar: "زغلاش خضرة",
    },
    role: {
      fr: "Psychiatre",
      en: "Psychiatrist",
      ar: "أخصائية نفسية",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 13,
    image: "/images/doctors/fatima.png",
    name: {
      fr: "HELLAL Fatima",
      en: "HELLAL Fatima",
      ar: "هلال فاطمة",
    },
    role: {
      fr: "Radiologue",
      en: "Radiologist",
      ar: "أخصائية أشعة",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 14,
    image: "/images/doctors/hellal.png",
    name: {
      fr: "HELLAL Noureddine",
      en: "HELLAL Noureddine",
      ar: "هلال نور الدين",
    },
    role: {
      fr: "Radiologue",
      en: "Radiologist",
      ar: "أخصائي أشعة",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 15,
    image: "/images/doctors/draou.png",
    name: {
      fr: "DRAOU Mohamed",
      en: "DRAOU Mohamed",
      ar: "دراعو محمد",
    },
    role: {
      fr: "Rhumatologue",
      en: "Rheumatologist",
      ar: "أخصائي أمراض الروماتيزم",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 16,
    image: "/images/doctors/houaria.png",
    name: {
      fr: "HELLAL Houaria",
      en: "HELLAL Houaria",
      ar: "هلال هوارية",
    },
    role: {
      fr: "Sage-Femme",
      en: "Midwife",
      ar: "قابلة",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 17,
    image: "/images/doctors/bouchareb.png",
    name: {
      fr: "BOUCHAREB Fatiha",
      en: "BOUCHAREB Fatiha",
      ar: "بوشارب فتيحة",
    },
    role: {
      fr: "Secrétaire Médicale",
      en: "Medical Secretary",
      ar: "سكرتيرة طبية",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 18,
    image: "/images/doctors/mokdadi.png",
    name: {
      fr: "MOKDADI Abdelkrim",
      en: "MOKDADI Abdelkrim",
      ar: "مقدادي عبد الكريم",
    },
    role: {
      fr: "Urgentiste",
      en: "Emergency Physician",
      ar: "أخصائي طوارئ",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 19,
    image: "/images/doctors/soulimane.png",
    name: {
      fr: "SOULIMANE Benamar",
      en: "SOULIMANE Benamar",
      ar: "سليمان بن عمر",
    },
    role: {
      fr: "Urologue",
      en: "Urologist",
      ar: "أخصائي مسالك بولية",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 20,
    image: "/images/doctors/mekkiy.png",
    name: {
      fr: "MEKKI Yahia",
      en: "MEKKI Yahia",
      ar: "مكي يحي",
    },
    role: {
      fr: "Virologue",
      en: "Virologist",
      ar: "أخصائي فيروسات",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
  {
    id: 21,
    image: "/images/doctors/zohra.png",
    name: {
      fr: "BALEHOUANE Zohra",
      en: "BALEHOUANE Zohra",
      ar: "بلهوان زهرة",
    },
    role: {
      fr: "Cadre imagerie",
      en: "Imaging Manager",
      ar: "مسؤولة التصوير الطبي",
    },
    bio: {
      fr: "",
      en: "",
      ar: "",
    },
  },
];
