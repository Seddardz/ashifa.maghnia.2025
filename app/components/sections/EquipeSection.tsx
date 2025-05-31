// app/components/sections/EquipeSection.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Changa } from "next/font/google";
import { doctors } from "@/app/data/doctors";
import { equipeTranslations } from "@/app/translations/equipe";

// Initialize the Changa font
const changa = Changa({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface DoctorComponentProps {
  doctor: {
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
  };
  language: string;
}

const DoctorComponent = ({ doctor, language }: DoctorComponentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isRTL = language === "ar";

  // Get the current language or default to French
  const currentLanguage = (language || "fr") as keyof typeof doctor.name;

  // Get doctor information in the current language
  const name = doctor.name[currentLanguage];
  const role = doctor.role[currentLanguage];
  const bio = doctor.bio[currentLanguage];

  // Get UI element translations
  const viewProfile = equipeTranslations.viewProfile[currentLanguage];
  const contact = equipeTranslations.contact[currentLanguage];
  const schedule = equipeTranslations.schedule[currentLanguage];

  // Generate initials from name
  const getInitials = () => {
    // Use French name as default for generating initials
    const nameParts = doctor.name.fr.split(" ");
    if (nameParts.length >= 2) {
      // Get first letter of first name and first letter of last name
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    } else if (nameParts.length === 1) {
      // If only one name part, use first two letters
      return nameParts[0].substring(0, 2).toUpperCase();
    } else {
      return "DR";
    }
  };

  // Generate a consistent background color based on doctor ID
  const getAvatarColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-red-500",
      "bg-teal-500",
    ];
    return colors[doctor.id % colors.length];
  };

  return (
    <motion.div
      layout
      className={`bg-white dark:bg-[#1A2213] rounded-xl shadow-lg overflow-hidden ${
        isExpanded ? "col-span-full" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(100, 127, 47, 0.3)" }}
    >
      <div
        className={`p-6 flex ${
          isExpanded
            ? "flex-col md:flex-row items-start"
            : "flex-col items-center"
        } cursor-pointer ${isRTL && isExpanded ? "md:flex-row-reverse" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          layout
          className={`relative ${
            isExpanded
              ? `w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 ${
                  isRTL ? "md:ml-6" : "md:mr-6"
                }`
              : "w-24 h-24 mb-4"
          } rounded-full overflow-hidden border-4 border-[#7B934C]/20`}
        >
          {!imageError ? (
            <Image
              src={doctor.image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 96px, 128px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center text-white font-bold text-xl ${getAvatarColor()}`}
            >
              {getInitials()}
            </div>
          )}
        </motion.div>

        <motion.div layout className={isExpanded ? "flex-1" : "text-center"}>
          <motion.h3
            layout
            className="text-xl font-semibold text-[#647F2F] dark:text-[#7B934C]"
          >
            {name}
          </motion.h3>
          <motion.p layout className="text-gray-600 dark:text-gray-400 mb-2">
            {role}
          </motion.p>

          {isExpanded && bio && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mt-2">{bio}</p>
              <div
                className={`mt-4 flex ${
                  isRTL
                    ? "space-x-reverse space-x-3 flex-row-reverse"
                    : "space-x-3"
                }`}
              >
                <button className="bg-[#647F2F]/10 hover:bg-[#647F2F]/20 text-[#647F2F] dark:text-[#7B934C] px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  {contact}
                </button>
                <button className="bg-[#647F2F]/10 hover:bg-[#647F2F]/20 text-[#647F2F] dark:text-[#7B934C] px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  {schedule}
                </button>
              </div>
            </motion.div>
          )}

          {!isExpanded && (
            <motion.div
              className={`mt-2 inline-block bg-[#647F2F]/10 text-[#647F2F] dark:text-[#7B934C] px-3 py-1 rounded-full text-sm ${
                isRTL ? "rtl" : ""
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {viewProfile}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function EquipeSection({ language = "fr" }) {
  const isRTL = language === "ar";

  // Get the current language or default to French
  const currentLanguage = (language ||
    "fr") as keyof typeof equipeTranslations.sectionTitle;

  // Get section translations
  const sectionTitle = equipeTranslations.sectionTitle[currentLanguage];
  const joinText = equipeTranslations.joinText[currentLanguage];
  const joinButton = equipeTranslations.joinButton[currentLanguage];

  // URL pour le formulaire de candidature
  const postulerUrl =
    "https://www.ashifa-sante.fr/devenir-adherent/#iframe_assoconnect";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`w-full max-w-4xl mx-auto px-4 ${isRTL ? "rtl" : ""} ${
        changa.className
      }`}
    >
      <motion.h2
        className="text-3xl font-bold text-[#647F2F] dark:text-[#7B934C] mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sectionTitle}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        {doctors.map((doctor) => (
          <DoctorComponent
            key={doctor.id}
            doctor={doctor}
            language={language}
          />
        ))}
      </motion.div>

      <motion.div
        className="mt-12 bg-gradient-to-r from-[#647F2F]/10 to-[#7B934C]/10 p-6 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">{joinText}</p>
        <Link href={postulerUrl} passHref>
          <motion.button
            className="bg-[#647F2F] hover:bg-[#7B934C] text-white px-6 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {joinButton}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
