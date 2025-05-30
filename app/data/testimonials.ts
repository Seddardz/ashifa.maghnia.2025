// app/data/testimonials.ts
export interface Testimonial {
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
  text: {
    fr: string;
    en: string;
    ar: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/doctor1.png",
    name: {
      fr: "Ahmed Benali",
      en: "Ahmed Benali",
      ar: "أحمد بن علي",
    },
    role: {
      fr: "Patient",
      en: "Patient",
      ar: "مريض",
    },
    text: {
      fr: "L'équipe médicale a fourni des soins exceptionnels pendant mon traitement. Je suis reconnaissant pour leur expertise et leur compassion.",
      en: "The medical team provided exceptional care during my treatment. I'm grateful for their expertise and compassion.",
      ar: "قدم الفريق الطبي رعاية استثنائية خلال علاجي. أنا ممتن لخبرتهم وتعاطفهم.",
    },
  },
  {
    id: 2,
    image: "/images/testimonial2.jpg",
    name: {
      fr: "Fatima Zahra",
      en: "Fatima Zahra",
      ar: "فاطمة الزهراء",
    },
    role: {
      fr: "Membre de famille",
      en: "Family Member",
      ar: "فرد من العائلة",
    },
    text: {
      fr: "L'équipe chirurgicale était incroyablement professionnelle et nous a tenus informés tout au long du processus. Merci d'avoir pris soin de mon père.",
      en: "The surgical team was incredibly professional and kept us informed throughout the entire process. Thank you for taking care of my father.",
      ar: "كان الفريق الجراحي محترفًا للغاية وأبقانا على اطلاع طوال العملية بأكملها. شكرًا لكم على رعاية والدي.",
    },
  },
  {
    id: 3,
    image: "/images/testimonial3.jpg",
    name: {
      fr: "Dr. Mohammed Hadj",
      en: "Dr. Mohammed Hadj",
      ar: "د. محمد حاج",
    },
    role: {
      fr: "Médecin collaborateur",
      en: "Collaborating Physician",
      ar: "طبيب متعاون",
    },
    text: {
      fr: "Travailler avec cette équipe médicale a été une expérience enrichissante. Leur dévouement aux soins des patients et à l'excellence médicale est remarquable.",
      en: "Working with this medical team has been a rewarding experience. Their dedication to patient care and medical excellence is outstanding.",
      ar: "العمل مع هذا الفريق الطبي كان تجربة مجزية. تفانيهم في رعاية المرضى والتميز الطبي استثنائي.",
    },
  },
];
