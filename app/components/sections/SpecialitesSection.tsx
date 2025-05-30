// app/components/sections/SpecialitesSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Changa } from "next/font/google";
import { specialities } from "@/app/data/specialities";
import { specialitesTranslations } from "@/app/translations/specialites";

// Initialize the Changa font
const changa = Changa({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface SpecialityCardProps {
  speciality: {
    id: number;
    image: string;
    title: {
      fr: string;
      en: string;
      ar: string;
    };
  };
  language: string;
  index: number;
}

const SpecialityCard = ({
  speciality,
  language,
  index,
}: SpecialityCardProps) => {
  const isRTL = language === "ar";
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  // Get the current language or default to French
  const currentLanguage = (language || "fr") as keyof typeof speciality.title;

  // Get title in current language
  const title = speciality.title[currentLanguage];

  // Animation variants for staggered entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-[#1A2213] rounded-xl shadow-lg overflow-hidden relative group"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={speciality.image}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2}
        />

        {/* Dynamic overlay that changes on hover */}
        <motion.div
          className="absolute inset-0 bg-[#647F2F]/40 dark:bg-[#647F2F]/50 mix-blend-multiply"
          animate={{
            opacity: isHovered ? 0.6 : 0.4,
            backgroundColor: isHovered
              ? "rgba(123, 147, 76, 0.5)"
              : "rgba(100, 127, 47, 0.4)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Enhanced gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

        {/* Title with simple hover animation */}
        <div
          className={`absolute bottom-0 ${isRTL ? "right-0" : "left-0"} p-6 ${
            isRTL ? "text-right" : "text-left"
          } w-full`}
        >
          <motion.h3
            className={`text-2xl font-bold text-white drop-shadow-lg ${changa.className}`}
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
        </div>
      </div>

      {/* Subtle border effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-xl"
        animate={{
          borderColor: isHovered ? "rgba(123, 147, 76, 0.7)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function SpecialitesSection({ language = "fr" }) {
  // Get the current language or default to French
  const currentLanguage = (language ||
    "fr") as keyof typeof specialitesTranslations.sectionTitle;
  const isRTL = currentLanguage === "ar";

  // Get section title in current language
  const sectionTitle = specialitesTranslations.sectionTitle[currentLanguage];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      className={`w-full max-w-4xl mx-auto px-4 py-12 ${isRTL ? "rtl" : ""} ${
        changa.className
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-[#647F2F] dark:text-[#7B934C] text-center">
          {sectionTitle}
        </h2>
        <div className="w-24 h-1 bg-[#647F2F] dark:bg-[#7B934C] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {specialities.map((speciality, index) => (
          <div key={speciality.id} className="speciality-card">
            <SpecialityCard
              speciality={speciality}
              language={language}
              index={index}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
