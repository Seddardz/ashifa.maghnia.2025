// app/components/sections/TestimonialsSection.tsx
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Changa } from "next/font/google";
import { testimonials } from "@/app/data/testimonials";
import { testimonialsTranslations } from "@/app/translations/testimonials";

// Initialize the Changa font
const changa = Changa({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface TestimonialsSectionProps {
  onBack?: () => void;
  language?: string;
}

export default function TestimonialsSection({
  language = "fr",
}: TestimonialsSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Get the current language or default to French
  const currentLanguage = (language ||
    "fr") as keyof typeof testimonialsTranslations.sectionTitle;

  // Check if the current language is RTL
  const isRTL = currentLanguage === "ar";

  // Function to start auto-advance timer for testimonials
  const startAutoAdvanceTimer = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }

    autoAdvanceTimerRef.current = setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 15000); // 15 seconds
  }, []);

  // Initialize auto-advance timer
  useEffect(() => {
    startAutoAdvanceTimer();

    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [startAutoAdvanceTimer]);

  // Function to go to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

    // Reset auto-advance timer
    startAutoAdvanceTimer();
  };

  // Function to go to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

    // Reset auto-advance timer
    startAutoAdvanceTimer();
  };

  // Get current testimonial data
  const currentTestimonialData = testimonials[currentTestimonial];
  const testimonialName = currentTestimonialData.name[currentLanguage];
  const testimonialRole = currentTestimonialData.role[currentLanguage];
  const testimonialText = currentTestimonialData.text[currentLanguage];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center ${changa.className}`}
    >
      <h2 className="text-3xl font-bold text-[#647F2F] dark:text-[#7B934C] mb-8 text-center">
        {testimonialsTranslations.sectionTitle[currentLanguage]}
      </h2>

      <div className="relative w-full max-w-md px-12">
        {/* Carousel container */}
        <div
          className={`bg-white dark:bg-[#1A2213] p-6 rounded-xl shadow-lg transition-all duration-500 transform ${
            isRTL ? "rtl" : ""
          }`}
        >
          {/* Header with image and name/role */}
          {isRTL ? (
            // Arabic layout - Right alignment
            <div className="flex flex-row mb-4 justify-end">
              <div className="text-right ml-4">
                <h3 className="font-bold text-[#647F2F] dark:text-[#7B934C]">
                  {testimonialName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonialRole}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={currentTestimonialData.image}
                  alt={testimonialName}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ) : (
            // LTR layout - Left alignment
            <div className="flex flex-row mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={currentTestimonialData.image}
                  alt={testimonialName}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#647F2F] dark:text-[#7B934C]">
                  {testimonialName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonialRole}
                </p>
              </div>
            </div>
          )}

          {/* Testimonial text */}
          <p
            className={`text-gray-700 dark:text-gray-300 min-h-[100px] ${
              isRTL ? "text-right" : ""
            }`}
          >
            {testimonialText}
          </p>

          {/* Pagination indicators */}
          <div
            className={`flex justify-center mt-6 ${
              isRTL ? "space-x-reverse" : "space-x-2"
            }`}
          >
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "w-6 bg-[#7B934C]"
                    : "w-2 bg-gray-300 dark:bg-gray-600"
                } ${isRTL ? "ml-2" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows - positioned further away from the card */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1A2213] w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-[#647F2F] dark:text-[#7B934C] hover:bg-gray-100 dark:hover:bg-[#2A3223] transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1A2213] w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-[#647F2F] dark:text-[#7B934C] hover:bg-gray-100 dark:hover:bg-[#2A3223] transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
