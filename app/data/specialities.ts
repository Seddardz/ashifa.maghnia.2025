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
    image: "/images/specialities/cardiologie.png",
    title: {
      fr: "Cardiologie",
      en: "Cardiology",
      ar: "أمراض القلب",
    },
  },
  {
    id: 2,
    image: "/images/specialities/neurology.jpg",
    title: {
      fr: "Neurologie",
      en: "Neurology",
      ar: "طب الأعصاب",
    },
  },
  {
    id: 3,
    image: "/images/specialities/orthopedics.jpg",
    title: {
      fr: "Orthopédie",
      en: "Orthopedics",
      ar: "جراحة العظام",
    },
  },
  {
    id: 4,
    image: "/images/specialities/pediatrics.jpg",
    title: {
      fr: "Pédiatrie",
      en: "Pediatrics",
      ar: "طب الأطفال",
    },
  },
];
