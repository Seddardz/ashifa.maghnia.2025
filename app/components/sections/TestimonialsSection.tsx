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

  // Calculate timer duration based on text length
  const calculateTimerDuration = useCallback((textLength: number) => {
    // Base duration: 10 seconds
    const baseDuration = 10000;
    // Additional time: 30ms per character
    const additionalTime = textLength * 30;
    // Maximum duration: 30 seconds
    const maxDuration = 30000;

    return Math.min(baseDuration + additionalTime, maxDuration);
  }, []);

  // Function to start auto-advance timer for testimonials
  const startAutoAdvanceTimer = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }

    // Get current testimonial text length
    const currentText = testimonials[currentTestimonial].text[currentLanguage];
    const textLength = currentText.length;

    // Calculate duration based on text length
    const duration = calculateTimerDuration(textLength);

    autoAdvanceTimerRef.current = setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, duration);
  }, [currentLanguage, currentTestimonial, calculateTimerDuration]);

  // Initialize auto-advance timer
  useEffect(() => {
    startAutoAdvanceTimer();

    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [startAutoAdvanceTimer, currentTestimonial]);

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

  // Function to go to specific testimonial
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);

    // Reset auto-advance timer
    startAutoAdvanceTimer();
  };

  // Get current testimonial data
  const currentTestimonialData = testimonials[currentTestimonial];
  const testimonialName = currentTestimonialData.name[currentLanguage];
  const testimonialRole = currentTestimonialData.role[currentLanguage];
  const testimonialText = currentTestimonialData.text[currentLanguage];

  // Calculate current timer duration for debugging/display purposes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center ${changa.className}`}
    >
      <h2 className="text-3xl font-bold text-[#647F2F] dark:text-[#7B934C] mb-6 text-center">
        {testimonialsTranslations.sectionTitle[currentLanguage]}
      </h2>

      <div className="relative w-full max-w-md px-12">
        {/* Carousel container with background image */}
        <div
          className={`relative bg-white dark:bg-[#1A2213] p-5 rounded-xl shadow-lg transition-all duration-500 transform overflow-hidden ${
            isRTL ? "rtl" : ""
          }`}
        >
          {/* Background image with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={currentTestimonialData.image}
              alt=""
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/20 dark:from-[#1A2213]/80 dark:to-[#1A2213]/95"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
          </div>

          {/* Content container with z-index to appear above background */}
          <div className="relative z-10">
            {/* Header with image and name/role */}
            {isRTL ? (
              // Arabic layout - Right alignment
              <div className="flex flex-row mb-3 justify-end">
                <div className="text-right ml-3">
                  <h3 className="font-bold text-[#647F2F] dark:text-[#7B934C]">
                    {testimonialName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonialRole}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#647F2F] dark:border-[#7B934C] shadow-md">
                  <Image
                    src={currentTestimonialData.image}
                    alt={testimonialName}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ) : (
              // LTR layout - Left alignment
              <div className="flex flex-row mb-3">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-3 border-2 border-[#647F2F] dark:border-[#7B934C] shadow-md">
                  <Image
                    src={currentTestimonialData.image}
                    alt={testimonialName}
                    width={56}
                    height={56}
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

            {/* Testimonial text - now justified */}
            <p
              className={`text-gray-700 dark:text-gray-300 min-h-[100px] text-sm leading-relaxed ${
                isRTL ? "text-right-justify" : "text-justify"
              }`}
            >
              {testimonialText}
            </p>

            {/* Pagination indicators - now clickable */}
            <div
              className={`flex justify-center mt-4 ${
                isRTL ? "space-x-reverse" : "space-x-2"
              }`}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-5 bg-[#7B934C]"
                      : "w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  } ${isRTL ? "ml-2" : ""}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation arrows - positioned further away from the card */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1A2213] w-8 h-8 rounded-full flex items-center justify-center shadow-lg text-[#647F2F] dark:text-[#7B934C] hover:bg-gray-100 dark:hover:bg-[#2A3223] transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="xs" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1A2213] w-8 h-8 rounded-full flex items-center justify-center shadow-lg text-[#647F2F] dark:text-[#7B934C] hover:bg-gray-100 dark:hover:bg-[#2A3223] transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </button>
      </div>
    </div>
  );
}
