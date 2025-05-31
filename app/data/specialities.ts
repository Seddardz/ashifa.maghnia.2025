// app/data/specialities.ts
export interface Speciality {
  id: number;
  image: string;
  title: {
    fr: string;
    en: string;
    ar: string;
  };
}

export const specialities: Speciality[] = [
  {
    id: 1,
    image: "/images/specialities/anesthesie.png",
    title: {
      fr: "Anesthésie-Réanimation",
      en: "Anesthesia & Critical Care",
      ar: "تخدير وإنعاش",
    },
  },
  {
    id: 2,
    image: "/images/specialities/chirurgie.png",
    title: {
      fr: "Chirurgie générale",
      en: "General Surgery",
      ar: "جراحة عامة",
    },
  },
  {
    id: 3,
    image: "/images/specialities/endocrinologie.png",
    title: {
      fr: "Endocrinologie",
      en: "Endocrinology",
      ar: "علم الغدد الصماء",
    },
  },
  {
    id: 4,
    image: "/images/specialities/gastroenterologie.png",
    title: {
      fr: "Gastroentérologie",
      en: "Gastroenterology",
      ar: "طب أمراض الكبد و الجهازالهضمي",
    },
  },
  {
    id: 5,
    image: "/images/specialities/gynecologie.png",
    title: {
      fr: "Gynécologie",
      en: "Gynecology",
      ar: "طب النساء",
    },
  },
  {
    id: 6,
    image: "/images/specialities/nephrologie.png",
    title: {
      fr: "Néphrologie",
      en: "Nephrology",
      ar: "طب الكلى",
    },
  },
  {
    id: 7,
    image: "/images/specialities/ophtalmologie.png",
    title: {
      fr: "Ophtalmologie",
      en: "Ophthalmology",
      ar: "طب العيون",
    },
  },
  {
    id: 8,
    image: "/images/specialities/pediatrie.png",
    title: {
      fr: "Pédiatrie",
      en: "Pediatrics",
      ar: "طب الأطفال",
    },
  },
  {
    id: 9,
    image: "/images/specialities/psychiatrie.png",
    title: {
      fr: "Psychiatrie",
      en: "Psychiatry",
      ar: "طب النفس",
    },
  },
  {
    id: 10,
    image: "/images/specialities/radiologie.png",
    title: {
      fr: "Radiologie",
      en: "Radiology",
      ar: "الأشعة",
    },
  },
  {
    id: 11,
    image: "/images/specialities/rhumatologie.png",
    title: {
      fr: "Rhumatologie",
      en: "Rheumatology",
      ar: "طب أمراض المفاصل",
    },
  },
  {
    id: 12,
    image: "/images/specialities/urgence.png",
    title: {
      fr: "Médecine d'urgence",
      en: "Emergency Medicine",
      ar: "طب الطوارئ",
    },
  },
  {
    id: 13,
    image: "/images/specialities/urologie.png",
    title: {
      fr: "Urologie",
      en: "Urology",
      ar: "طب المسالك البولية",
    },
  },
  {
    id: 14,
    image: "/images/specialities/virologie.png",
    title: {
      fr: "Virologie",
      en: "Virology",
      ar: "علم الفيروسات",
    },
  },
];
