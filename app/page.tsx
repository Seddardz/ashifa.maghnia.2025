// app/page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Changa } from "next/font/google";
import Loading from "./components/Loading";
import LanguageSelectionModal from "./components/LanguageSelectionModal";

// Initialize the font
const changa = Changa({
  subsets: ["arabic", "latin"], // Ajout du sous-ensemble latin pour le français et l'anglais
  weight: ["400", "700"],
  display: "swap",
});

// Define language type
type LanguageKey = "arabic" | "french" | "english";

// Define content type
type ContentType = {
  [key in LanguageKey]: {
    titleFirstLine: string;
    titleSecondLine: string;
    lines: string[];
    button: string;
  };
};

export default function Home() {
  // State to track page loading
  const [pageLoading, setPageLoading] = useState(true);

  // State for language selection modal
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  // Content in different languages
  const content: ContentType = {
    arabic: {
      titleFirstLine: "الايام",
      titleSecondLine: "الطبية الجراحية",
      lines: [
        "من 17 الى 24 ماي 2025",
        "توأمة بين الشفاء",
        "والمؤسسة العمومية الاستشفائية مغنية",
        "بالتنسيق مع جمعية سنابل الخير مغنية",
      ],
      button: "سجل الآن",
    },
    french: {
      titleFirstLine: "Journées",
      titleSecondLine: "Médico-Chirurgicales",
      lines: [
        "du 17 au 24 mai 2025",
        "jumellage entre l'ashifa",
        "et l'Établissement Public Hospitalier de Maghnia",
        "en coordination avec l'association sanabil el kheir",
      ],
      button: "Inscrivez-vous",
    },
    english: {
      titleFirstLine: "Medical",
      titleSecondLine: "Surgical Days",
      lines: [
        "from May 17 to 24, 2025",
        "twinning between Al-Shifa",
        "and Maghnia Public Hospital",
        "in coordination with Sanabil El Khair Association",
      ],
      button: "Register Now",
    },
  };

  // State to track current language
  const [currentLang, setCurrentLang] = useState<LanguageKey>("arabic");

  // Effect to change language every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prev) => {
        if (prev === "arabic") return "french";
        if (prev === "french") return "english";
        return "arabic";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Effect to initialize audio and handle page loading
  useEffect(() => {
    // Simulate page loading (remove this setTimeout in production and use actual loading logic)
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Handle button click
  const handleButtonClick = () => {
    // Open language selection modal
    setIsLanguageModalOpen(true);
  };

  // Direction based on language
  const isRTL = currentLang === "arabic";

  // Show page loading state
  if (pageLoading) {
    return <Loading />;
  }

  return (
    <div
      className={`flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#ffffff] to-white dark:from-[#1A2213] dark:to-black p-4 ${changa.className}`}
    >
      <main className="main-container">
        {/* SVG Image with Pulse Animation */}
        <div className="pulse-container">
          <Image
            className="pulse-image"
            src="/images/ashifa.svg"
            alt="Center SVG"
            width={180}
            height={180}
            priority
          />
        </div>

        {/* Title with Fade-in Animation - Split into two lines */}
        <div className="title-container">
          <div
            className={`rtl-support text-2xl md:text-2xl font-bold text-[#647F2F] dark:text-[#7B934C] fade-in drop-shadow-md transition-opacity duration-500 delay-300 ${
              isRTL ? "rtl" : "ltr"
            }`}
          >
            <div className="title-line">
              {content[currentLang].titleFirstLine}
            </div>
            <div className="title-line">
              {content[currentLang].titleSecondLine}
            </div>
          </div>
        </div>

        {/* Description with Fade-in Animation */}
        <div className="description-container">
          <div
            className={`flex flex-col items-center justify-center fade-in delay-600 ${
              isRTL ? "rtl" : "ltr"
            }`}
          >
            {content[currentLang].lines.map((line, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl ${
                  index === 0
                    ? "bg-gradient-to-r from-[#e9ebe6]/20 to-[#7B934C]/20 px-4 py-1 rounded-full font-semibold text-[#e70606b3] dark:text-[#E7EFCB] shadow-inner highlight-date"
                    : "text-[#647F2F] dark:text-[#E7EFCB]"
                } leading-tight my-1`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Button with 3D Hover Effect */}
        <button
          onClick={handleButtonClick}
          className={`consistent-button bg-[#7B934C] hover:bg-[#647F2F] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-[0_4px_12px_rgba(100,127,47,0.5)] hover:shadow-[0_8px_16px_rgba(100,127,47,0.6)] transform hover:-translate-y-1 fade-in delay-900 ${
            isRTL ? "rtl" : "ltr"
          }`}
        >
          {content[currentLang].button}
        </button>
      </main>

      {/* Language Selection Modal */}
      <LanguageSelectionModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />
    </div>
  );
}
