// app/components/TabBar.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faUserMd,
  faClipboardCheck,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { Changa } from "next/font/google";

// Initialize the Changa font
const changa = Changa({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export type TabName = "specialites" | "equipe" | "realisations" | "galerie";

interface TabBarProps {
  activeTab: TabName | null;
  onTabClick: (tabName: TabName) => void;
  language?: string;
}

// Tab labels in different languages
const tabLabels = {
  ar: {
    specialites: "التخصصات",
    equipe: "الفريق",
    realisations: "الإنجازات",
    galerie: "المعرض",
  },
  fr: {
    specialites: "Spécialités",
    equipe: "Équipe",
    realisations: "Réalisations",
    galerie: "Galerie",
  },
  en: {
    specialites: "Specialties",
    equipe: "Team",
    realisations: "Achievements",
    galerie: "Gallery",
  },
};

export default function TabBar({
  activeTab,
  onTabClick,
  language = "fr",
}: TabBarProps) {
  // Helper function to determine if a tab is active
  const isActive = (tabName: TabName): boolean => {
    return activeTab === tabName;
  };

  // Get labels based on language
  const labels = tabLabels[language as keyof typeof tabLabels] || tabLabels.fr;

  // Check if the current language is RTL
  return (
    <>
      <div
        className={`tab-nav-container fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 ${changa.className}`}
      >
        <div
          className={`tab ${isActive("specialites") ? "active" : ""}`}
          onClick={() => onTabClick("specialites")}
        >
          <FontAwesomeIcon icon={faStethoscope} className="tab-icon" />
          <p>{labels.specialites}</p>
        </div>
        <div
          className={`tab ${isActive("equipe") ? "active" : ""}`}
          onClick={() => onTabClick("equipe")}
        >
          <FontAwesomeIcon icon={faUserMd} className="tab-icon" />
          <p>{labels.equipe}</p>
        </div>
        <div
          className={`tab ${isActive("realisations") ? "active" : ""}`}
          onClick={() => onTabClick("realisations")}
        >
          <FontAwesomeIcon icon={faClipboardCheck} className="tab-icon" />
          <p>{labels.realisations}</p>
        </div>
        <div
          className={`tab ${isActive("galerie") ? "active" : ""}`}
          onClick={() => onTabClick("galerie")}
        >
          <FontAwesomeIcon icon={faImages} className="tab-icon" />
          <p>{labels.galerie}</p>
        </div>
      </div>

      {/* Add tab bar styles */}
      <style jsx global>{`
        .tab-nav-container {
          background-color: white;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          padding: 15px 20px;
          justify-content: space-between;
          width: 350px;
          z-index: 1000;
        }

        .tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #888;
          width: 70px;
        }

        .tab-icon {
          font-size: 1.4em;
          margin-bottom: 5px;
          transition: all 0.3s ease;
        }

        .tab p {
          font-size: 0.8em;
          font-weight: 500;
          margin: 0;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .tab.active {
          background-color: rgba(123, 147, 76, 0.1);
          color: #7b934c;
          transform: translateY(-5px);
        }

        .tab.active .tab-icon {
          font-size: 1.6em;
        }

        .tab.active p {
          font-weight: 600;
          opacity: 1;
        }

        .home-tab {
          position: relative;
          margin-top: -10px;
        }

        .home-tab .tab-icon {
          font-size: 1.6em;
        }

        .home-tab.active .tab-icon {
          font-size: 1.8em;
        }

        @media (prefers-color-scheme: dark) {
          .tab-nav-container {
            background-color: #1a2213;
          }

          .tab {
            color: #aaa;
          }

          .tab.active {
            background-color: rgba(123, 147, 76, 0.2);
            color: #7b934c;
          }
        }
      `}</style>
    </>
  );
}
