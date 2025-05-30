"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Changa } from "next/font/google";
import Image from "next/image";
import { achievements } from "@/app/data/achievements";
import { realisationsTranslations } from "@/app/translations/realisations";

// Initialize the Changa font
const changa = Changa({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface RealisationsSectionProps {
  language?: string;
}

export default function RealisationsSection({
  language = "fr",
}: RealisationsSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [counters, setCounters] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Get the current language or default to French
  const currentLanguage = (language ||
    "fr") as keyof typeof realisationsTranslations.sectionTitle;
  const isRTL = currentLanguage === "ar";

  // Get section title in current language
  const sectionTitle = realisationsTranslations.sectionTitle[currentLanguage];

  // Initialize counters
  useEffect(() => {
    setCounters(achievements.map(() => 0));
  }, []);

  // Check if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    // Capture la valeur actuelle de sectionRef.current
    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      // Utilise la valeur capturée dans la fonction de nettoyage
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Auto-play slides
  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % achievements.length);
      }, 5000); // Change slide every 5 seconds
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isVisible]);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const achievement = achievements[activeSlide];
    const targetValue = achievement.value;
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = Math.ceil((targetValue / duration) * interval);

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters = [...prev];
        if (newCounters[activeSlide] < targetValue) {
          newCounters[activeSlide] = Math.min(
            newCounters[activeSlide] + steps,
            targetValue
          );
        }

        if (newCounters[activeSlide] >= targetValue) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [activeSlide, isVisible]);

  // Handle manual slide change
  const goToSlide = (index: number) => {
    setActiveSlide(index);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % achievements.length);
      }, 5000);
    }
  };

  // Get current achievement
  const currentAchievement = achievements[activeSlide];
  const currentTitle = currentAchievement.title[currentLanguage];
  const currentDescription = currentAchievement.description[currentLanguage];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Uniform green color gradient for all specialities
  const greenGradient = "from-[#647F2F] to-[#7B934C]";

  return (
    <div
      ref={sectionRef}
      className={`w-full max-w-4xl mx-auto px-4 py-6 ${isRTL ? "rtl" : ""} ${
        changa.className
      }`}
    >
      <motion.h2
        className="text-3xl font-bold text-[#647F2F] dark:text-[#7B934C] mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sectionTitle}
      </motion.h2>

      <div className="relative h-[400px] md:h-[450px] mb-6 px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="absolute inset-0 mx-6"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background image with gradient overlay */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={
                    currentAchievement.backgroundImage ||
                    "/images/achievements/default-bg.jpg"
                  }
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
                {/* Uniform green gradient overlay for all specialities */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${greenGradient} opacity-80 mix-blend-multiply`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col md:flex-row items-center">
                {/* Statistics */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="p-6 text-center">
                    <motion.span
                      className="text-6xl font-bold text-white drop-shadow-lg"
                      key={`counter-${activeSlide}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {counters[activeSlide]}
                      {currentAchievement.suffix}
                    </motion.span>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full md:w-2/3 md:pl-8 flex flex-col justify-center">
                  <motion.h3
                    className="text-2xl font-semibold text-white mb-3 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {currentTitle}
                  </motion.h3>

                  <motion.p
                    className="text-white/90 text-lg drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {currentDescription}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows - made smaller */}
        <button
          onClick={() =>
            goToSlide(
              activeSlide === 0 ? achievements.length - 1 : activeSlide - 1
            )
          }
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/80 dark:bg-[#1A2213]/80 w-8 h-8 rounded-full flex items-center justify-center shadow-lg text-[#647F2F] dark:text-[#7B934C] hover:bg-white dark:hover:bg-[#1A2213] transition-colors backdrop-blur-sm"
          aria-label="Previous achievement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
            />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((activeSlide + 1) % achievements.length)}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/80 dark:bg-[#1A2213]/80 w-8 h-8 rounded-full flex items-center justify-center shadow-lg text-[#647F2F] dark:text-[#7B934C] hover:bg-white dark:hover:bg-[#1A2213] transition-colors backdrop-blur-sm"
          aria-label="Next achievement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2">
        {achievements.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "bg-[#647F2F] dark:bg-[#7B934C] w-8"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to achievement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
