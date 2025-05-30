// app/components/sections/GalerieSection.tsx
"use client";
import Image from "next/image";
import { Changa } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Initialize the Changa font
const changa = Changa({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface GalerieSectionProps {
  language?: string;
}

export default function GalerieSection({
  language = "fr",
}: GalerieSectionProps) {
  // Translations for section title
  const sectionTitle = {
    fr: "Galerie",
    en: "Gallery",
    ar: "معرض الصور",
  };

  // Translations for image alt text
  const altText = {
    fr: "Image de galerie",
    en: "Gallery image",
    ar: "صورة المعرض",
  };

  // Get the current language or default to French
  const currentLanguage = language as keyof typeof sectionTitle;
  const isRTL = currentLanguage === "ar";

  // Gallery images
  const galleryImages = [1, 2, 3, 4, 5, 6];

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`w-full max-w-4xl mx-auto px-4 ${changa.className} ${
        isRTL ? "rtl" : ""
      }`}
    >
      <motion.h2
        className="text-3xl font-bold text-[#647F2F] dark:text-[#7B934C] mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sectionTitle[currentLanguage] || sectionTitle.fr}
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {galleryImages.map((num) => (
          <motion.div
            key={num}
            className="aspect-square rounded-lg overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(100, 127, 47, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={`/images/gallery${num}.jpg`}
              alt={`${altText[currentLanguage] || altText.fr} ${num}`}
              width={300}
              height={300}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
