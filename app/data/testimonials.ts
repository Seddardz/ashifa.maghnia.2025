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
    image: "/images/testimonials/hammoud.png",
    name: {
      fr: "HAMMOUD Renaud",
      en: "HAMMOUD Renaud",
      ar: "حمود رينو",
    },
    role: {
      fr: "Chirurgien",
      en: "Surgeon",
      ar: "جراح",
    },
    text: {
      fr: "Je suis extrêmement ému. J'ai trouvé la réponse à toute ma vie : où est-on, où est notre place ? Et au fait, on n'existe pas seul ; on n'existe que par l'autre. Ça me l'a encore prouvé ici. Je termine en disant : vive Maghnia, vive l'Algérie, et puis Palestine libre.",
      en: "I am deeply moved. I have found the answer to my entire life: Where are we? Where is our place? In fact, we do not exist alone; we exist only through others. This has proven it to me once again here. I will end by saying: Long live Maghnia, long live Algeria, and free Palestine.",
      ar: "أنا شديد التأثر. لقد وجدت جواب حياتي كلها: أين نحن؟ أين مكاننا؟ وفي الحقيقة، لا نوجد بمفردنا؛ فنحن لا نوجد إلا بالآخر. هذا ما أثبته لي هنا مرة أخرى. أختم بقولي: تحيا مغنية، تحيا الجزائر، وفلسطين حرة.",
    },
  },
  {
    id: 2,
    image: "/images/testimonials/sekkak.png",
    name: {
      fr: "Morad Sekkak",
      en: "Morad Sekkak",
      ar: "مراد سكاك",
    },
    role: {
      fr: "Président Association Doha",
      en: "President of Doha Association",
      ar: "رئيس جمعية الضحى",
    },
    text: {
      fr: "Chére membres de l'association SHIFA, La réussite de cette mission humanitaire est un témoignage de votre travail acharné et de votre engagement. Votre contribution a été la clé de ce travail bien fait. Je tiens à vous remercier pour votre effort collectif, chacun en son nom. Merci beaucoup.",
      en: "Dear members of the SHIFA Association,The success of this humanitarian mission is a testament to your hard work and dedication. Your contribution was the key to this well-executed work. I wish to thank you for your collective effort, each and every one of you by name. Thank you very much.",
      ar: "أعزائي أعضاء جمعية الشفاء، نجاح هذه المهمة الإنسانية هو شهادة على عملكم الدؤوب والتزامكم. مساهمتكم كانت مفتاح هذا العمل المُتقَن. أود أن أشكركم على جهدكم الجماعي، كلٌ باسمه. شكرًا جزيلاً.",    },
  },
  {
    id: 3,
    image: "/images/testimonials/sebbahi.png",
    name: {
      fr: "Mohammed Sebbahi",
      en: "Mohammed Sebbahi",
      ar: "محمد الصباحي",
    },
    role: {
      fr: "Imam Grande Mosquée de Maghnia",
      en: "Imam of the Grand Mosque of Maghnia",
      ar: "إمام المسجد الكبير بمغنية",
    },
    text: {
      fr: "Le Prophète a dit \"si quelqu'un vous fait un bienfait, rends-lui la pareille. Mais si tu n'en as pas les moyens, prie pour lui jusqu'à ce que vous sentiez que vous l'avez suffisamment récompensé.\" Ces visages bénis et bienveillants qui nous ont honorés dans cette ville bénie et accueillante – bons sont ses habitants, bons sont ses visiteurs. Ces visages qui ont épuisé leurs efforts, sacrifié leur temps, laissé leurs enfants, leurs travaux, leurs familles, et sont venus ici pour servir leurs concitoyens. À chacun de ces visages, par son nom, sa distinction, son rang et son statut : Nous prions Allah qu'Il vous guide vers ce qu'Il aime et agrée, qu'Il fasse couler le bien par vos mains, et qu'Il fasse de vous des clés du bien et des verrous contre le mal.",
      en: "The prophet said \"if anyone does you a kindness, recompense him; but if you have not the means to do so, pray for him until you feel that you have compensated him.\" These blessed, kind faces who honored us in this blessed, kind town – good are its people, good are its visitors. These faces who exhausted their efforts, sacrificed their time, left their children, their work,  their families, and came here to serve their fellow citizens. To each of these faces, by name, distinction, rank, and status: We pray to Allah to grant you success in what He loves and approves, to channel goodness through your hands, and to make you keys to good and locks against evil.",
      ar: "قال رسول الله صلى الله عليه وسلم \"من صنع إليكم معروفا فكافئوه فإن لم تجدوا ما تكافئونه فادعوا له حتى تروا أنكم قد كافأتموه\" هذه الوجوه الطيبة المباركة التي شرفتنا في هذه المدينة الطيبة المباركة، الطيب أهلها، الطيب زوارها، هذه الوجوه التي استفرغت الجهد، واستفرغت الوقت وتركوا أولادهم و اعمالهم و أهاليهم وجاؤوا إلى هنا من اجل ان يقدموا خدمة لأبناء وطنهم، هذه الوجوه كل بإسمه ووسمه ومقامه ورتبته، ندعوا الله لكم جميعا أن يوفقكم لما يحبها ويرضاه، وأن يجري الخير على يديكم، وان يجعلكم مفاتيح خير، مغاليق شر",
    },
  },
  {
    id: 4,
    image: "/images/testimonials/mekkim.png",
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
    text: {
      fr: "« On a passé une semaine comme si on était des enfants de Maghnia. Je suis très très touché par l'accueil. Un très grand merci à l'association Sanabil El Kheir, et puis un grand merci à l'association Adhoha. Sans oublier un grand merci pour le personnel de l'hôpital dans tous les services, et en particulier là où j'ai travaillé au bloc opératoire : une équipe très impliquée, très soudée, à l'écoute. Ça m'a fait un très grand plaisir de travailler avec vous. J'espère revenir pour faire de plus en plus »",
      en: "We spent a week as if we were children of Maghnia. I am deeply moved by the hospitality. A huge thank you to the Sanabil El Kheir association, and a big thank you to the Adhoha association. Not forgetting a big thank you to the hospital staff in all departments, especially where I worked in the operating room: a very dedicated, close-knit, and attentive team. It was a great pleasure working with you. I hope to come back to do more.",
      ar: "قضينا أسبوعا كما لو كنا أطفالا من مغنية. أنا جدا جدا متأثر بالترحيب. شكرا جزيلا لجمعية سنابل الخير، ثم شكرا كبيرا لجمعية الضحى. دون أن ننسى شكرا كبيرا لطاقم المستشفى في جميع الخدمات، وخاصة حيث عملت في غرفة العمليات: فريق منخرط جدا، متلاحم جدا، يصغي. لقد أسعدني كثيرا العمل معكم. آمل أن أعود للقيام بالمزيد.",
    },
  },
  {
    id: 5,
    image: "/images/testimonials/mekkiy.png",
    name: {
      fr: "MEKKI Yahia",
      en: "MEKKI Yahia",
      ar: "مكي يحي",
    },
    role: {
      fr: "Président de l'AShifa",
      en: "President of Shifa Association",
      ar: "رئيس جمعية شفاء",
    },
    text: {
      fr: "Si Dieu le veut, nous travaillerons ensemble pour développer l'hôpital et nous ferons du nouveau projet d'urgence un pôle universitaire, car - comme dit mon père 'Sidi', que Dieu le bénisse - tout est possible, rien n'est impossible grâce à la bonne volonté et la bonne foi.",
      en: "God willing, we will work together to develop the hospital and make the new emergency project a university hub, because - as my father 'Sidi', may God bless him, says - everything is possible, nothing is impossible thanks to goodwill and good faith.",
      ar: "ان شاء الله سنعمل معا على تطوير المستشفى وسنجعل من مشروع الاستعجالات الجديد قطبا جامعيا، لأنه - كما يقول والدي 'سيدي' رحمه الله -  ليس المستحيل مستحيلا بقوة الايمان وعزم الارادة",
    },
  },
  {
    id: 6,
    image: "/images/testimonials/draou.png",
    name: {
      fr: "DRAOU Mohamed",
      en: "DRAOU Mohamed",
      ar: "دراعو محمد",
    },
    role: {
      fr: "Chef de mission",
      en: "Mission Leader",
      ar: "رئيس البعثة",
    },
    text: {
      fr: "Lors de notre première rencontre, nous avons dit que cette fois-ci, la porte s'ouvrira pour la première fois, et sera suivie par beaucoup d'autres. Ce n'est pas une simple caravane, ni juste un passage. Nous sommes venus ici pour un programme prometteur, si Dieu le veut.",
      en: "In our first meeting, we said that this time, the door will open for the first time, and will be followed by many more. This is not just a caravan, nor just a crossing. We came here for a promising program, if God is willing.",
      ar: "في أول لقاء بيننا، قلنا ستفتح الباب هذه المرة للوهلة الأولى، وستكون متبوعة بالعديد، فهذه ليست قافلة، وليس عبورا وفقط، أتينا هنا من أجل برنامج واعد بإذن الله.",
    },
  },
];
