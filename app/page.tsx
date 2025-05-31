"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Changa } from "next/font/google";
import Loading from "./components/Loading";
import LanguageSelectionModal from "./components/LanguageSelectionModal";

// Initialize the font
const changa = Changa({
  subsets: ["arabic", "latin"],
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
        "توأمة بين جمعية شفاء",
        "والمستشفى العمومي مغنية",
        "بالتنسيق مع جمعية سنابل الخير",
      ],
      button: "التفاصيل",
    },
    french: {
      titleFirstLine: "Journées",
      titleSecondLine: "Médico-Chirurgicales",
      lines: [
        "du 17 au 24 mai 2025",
        "jumellage entre l'ashifa",
        "et l'Hopital Public de Maghnia",
        "en coordination avec l'association sanabil el kheir",
      ],
      button: "Détails",
    },
    english: {
      titleFirstLine: "Medical",
      titleSecondLine: "Surgical Days",
      lines: [
        "from May 17 to 24, 2025",
        "twinning between Shifa Association",
        "and Maghnia Public Hospital",
        "in coordination with Sanabil El Khair Association",
      ],
      button: "Details",
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
    <div className="bg-page-wrapper">
      <div
        className={`relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#ffffff]/50 to-white/20 dark:from-[#1A2213]/90 dark:to-black/90 p-4 ${changa.className}`}
      >
        <main className="main-container">
          <div className="flex flex-col h-full justify-between">
            {/* Top section with logo and title */}
            <div className="flex flex-col items-center">
              {/* SVG Image with Pulse Animation */}
              <div className="pulse-container mb-1">
                <Image
                  className="pulse-image"
                  src="/images/ashifa.svg"
                  alt="Center SVG"
                  width={150}
                  height={150}
                  priority
                />
              </div>

              {/* Title with Fade-in Animation - Split into two lines */}
              <div className="title-container mb-2">
                <div
                  className={`rtl-support text-2xl md:text-2xl font-bold text-[#154810] dark:text-[#7B934C] fade-in drop-shadow-md transition-opacity duration-500 delay-300 ${
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
            </div>

            {/* Middle section with description */}
            <div className="flex-grow flex flex-col justify-center">
              {/* Description with Fade-in Animation */}
              <div className="description-container mb-0">
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
                          ? "bg-gradient-to-r from-[#e9ebe6]/20 to-[#7B934C]/20 px-4 py-1 rounded-full font-semibold text-[#e70606b3] dark:text-[#E7EFCB] shadow-inner highlight-date mb-3"
                          : "text-[#647F2F] dark:text-[#E7EFCB]"
                      } leading-tight my-1`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom section with sanabil logo and button */}
            <div className="flex flex-col items-center">
              {/* Sanabil Logo with Pulse Animation */}
              <div className="sanabil-pulse-container mb-4">
                <Image
                  src="/images/sanabil.svg"
                  alt="Sanabil El Khair"
                  width={70}
                  height={70}
                  className="sanabil-pulse-image"
                />
              </div>

              {/* Button with 3D Hover Effect - Original Style */}
              <button
                onClick={handleButtonClick}
                className={`consistent-button bg-[#7B934C] hover:bg-[#647F2F] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-[0_4px_12px_rgba(100,127,47,0.5)] hover:shadow-[0_8px_16px_rgba(100,127,47,0.6)] transform hover:-translate-y-1 fade-in delay-900 ${
                  isRTL ? "rtl" : "ltr"
                }`}
              >
                {content[currentLang].button}
              </button>
            </div>
          </div>
        </main>

        {/* Language Selection Modal */}
        <LanguageSelectionModal
          isOpen={isLanguageModalOpen}
          onClose={() => setIsLanguageModalOpen(false)}
        />
      </div>
    </div>
  );
}
