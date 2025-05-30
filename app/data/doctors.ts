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
    image: "/images/doctor1.png",
    name: {
      fr: "Dr. Karim Bensouda",
      en: "Dr. Karim Bensouda",
      ar: "د. كريم بنسودة",
    },
    role: {
      fr: "Cardiologue",
      en: "Cardiologist",
      ar: "طبيب قلب",
    },
    bio: {
      fr: "Dr. Bensouda est un cardiologue expérimenté avec plus de 15 ans de pratique. Spécialisé dans les maladies cardiovasculaires, il a réalisé plus de 500 interventions chirurgicales avec un taux de réussite exceptionnel.",
      en: "Dr. Bensouda is an experienced cardiologist with over 15 years of practice. Specialized in cardiovascular diseases, he has performed more than 500 surgical interventions with an exceptional success rate.",
      ar: "د. بنسودة هو طبيب قلب ذو خبرة تزيد عن 15 عامًا. متخصص في أمراض القلب والأوعية الدموية، وقد أجرى أكثر من 500 تدخل جراحي بمعدل نجاح استثنائي.",
    },
  },
  {
    id: 2,
    image: "/images/doctor2.png",
    name: {
      fr: "Dr. Leila Tazi",
      en: "Dr. Leila Tazi",
      ar: "د. ليلى التازي",
    },
    role: {
      fr: "Neurologue",
      en: "Neurologist",
      ar: "طبيبة أعصاب",
    },
    bio: {
      fr: "Dr. Tazi est une neurologue renommée, spécialisée dans le traitement des troubles neurologiques complexes. Elle a contribué à plusieurs publications scientifiques et participe régulièrement à des conférences internationales.",
      en: "Dr. Tazi is a renowned neurologist, specialized in treating complex neurological disorders. She has contributed to several scientific publications and regularly participates in international conferences.",
      ar: "د. التازي هي طبيبة أعصاب مشهورة، متخصصة في علاج اضطرابات الجهاز العصبي المعقدة. ساهمت في العديد من المنشورات العلمية وتشارك بانتظام في المؤتمرات الدولية.",
    },
  },
  {
    id: 3,
    image: "/images/doctor3.jpg",
    name: {
      fr: "Dr. Youssef Alami",
      en: "Dr. Youssef Alami",
      ar: "د. يوسف العلمي",
    },
    role: {
      fr: "Orthopédiste",
      en: "Orthopedist",
      ar: "جراح عظام",
    },
    bio: {
      fr: "Dr. Alami est un orthopédiste de renom avec une expertise particulière en chirurgie du genou et de la hanche. Il utilise des techniques mini-invasives pour assurer une récupération rapide et optimale de ses patients.",
      en: "Dr. Alami is a renowned orthopedist with particular expertise in knee and hip surgery. He uses minimally invasive techniques to ensure fast and optimal recovery for his patients.",
      ar: "د. العلمي هو جراح عظام مشهور مع خبرة خاصة في جراحة الركبة والورك. يستخدم تقنيات الحد الأدنى من التدخل الجراحي لضمان التعافي السريع والأمثل لمرضاه.",
    },
  },
];
