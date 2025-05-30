// app/register/page.tsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense, useRef } from "react";
import Loading from "../components/Loading";
import TabBar, { TabName } from "../components/TabBar";
import SpecialitesSection from "../components/sections/SpecialitesSection";
import EquipeSection from "../components/sections/EquipeSection";
import RealisationsSection from "../components/sections/RealisationsSection";
import GalerieSection from "../components/sections/GalerieSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

type SectionName = TabName | "testimonials";

// Create a client component that uses useSearchParams
function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabName | null>(null); // Start with null
  const [activeSection, setActiveSection] =
    useState<SectionName>("specialites");
  const [pageLoading, setPageLoading] = useState(true);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [language, setLanguage] = useState<string>("ar"); // Default to Arabic

  // Reference to the content container for scrolling
  const contentRef = useRef<HTMLDivElement>(null);

  // Initialize page loading and check for testimonials parameter
  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setPageLoading(false);

      // Get language parameter
      const langParam = searchParams.get("lang");
      if (langParam) {
        setLanguage(langParam);
      }

      // Check if we should show testimonials immediately
      const showTestimonialsParam = searchParams.get("showTestimonials");
      if (showTestimonialsParam === "true") {
        setShowTestimonials(true);
        setActiveSection("testimonials");
        setActiveTab(null); // Ensure no tab is active when showing testimonials
      } else {
        setActiveTab("specialites"); // Only set default tab if not showing testimonials
      }
    }, 1000);

    return () => {
      // Cleanup
      clearTimeout(timer);
    };
  }, [searchParams]);

  // Function to handle tab click
  const handleTabClick = (tabName: TabName) => {
    // Scroll to top of content area when changing tabs
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    setActiveTab(tabName);
    setActiveSection(tabName);
    setShowTestimonials(false);
  };

  // Handle home button click
  const handleHomeClick = () => {
    router.push("/");
  };

  // Handle back button from testimonials
  const handleBackFromTestimonials = () => {
    setShowTestimonials(false);
    setActiveSection("specialites");
    setActiveTab("specialites"); // Set active tab when returning from testimonials

    // Scroll to top when returning from testimonials
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Show page loading state
  if (pageLoading) {
    return <Loading />;
  }

  // Apply RTL direction for Arabic
  const isRTL = language === "ar";
  const directionClass = isRTL ? "rtl" : "ltr";

  return (
    <div
      className={`flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-[#ffffff] to-white dark:from-[#1A2213] dark:to-black ${directionClass}`}
    >
      {/* Home Button */}
      <button
        onClick={handleHomeClick}
        className="fixed top-4 left-4 bg-white dark:bg-[#1A2213] p-2 rounded-full shadow-lg z-10"
        aria-label="Go to home page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#647F2F] dark:text-[#7B934C]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>

      {/* Main Content Area with Scrollable Container */}
      <div
        ref={contentRef}
        className="w-full flex-1 flex flex-col items-center justify-start px-4 pb-24 pt-8 overflow-y-auto"
        style={{ height: "calc(100vh - 80px)" }}
      >
        {/* Specialites Section */}
        {activeSection === "specialites" && !showTestimonials && (
          <SpecialitesSection language={language} />
        )}

        {/* Equipe Section */}
        {activeSection === "equipe" && !showTestimonials && (
          <EquipeSection language={language} />
        )}

        {/* Realisations Section */}
        {activeSection === "realisations" && !showTestimonials && (
          <RealisationsSection language={language} />
        )}

        {/* Galerie Section */}
        {activeSection === "galerie" && !showTestimonials && (
          <GalerieSection language={language} />
        )}

        {/* Testimonials Section */}
        {(showTestimonials || activeSection === "testimonials") && (
          <TestimonialsSection
            onBack={handleBackFromTestimonials}
            language={language}
          />
        )}
      </div>

      {/* Tab Bar Component - Pass null as activeTab when showing testimonials */}
      <TabBar
        activeTab={showTestimonials ? null : activeTab}
        onTabClick={handleTabClick}
        language={language}
      />
    </div>
  );
}

// Main Register page component with Suspense
export default function Register() {
  return (
    <Suspense fallback={<Loading />}>
      <RegisterContent />
    </Suspense>
  );
}
