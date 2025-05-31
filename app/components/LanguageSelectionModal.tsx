// app/components/LanguageSelectionModal.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Changa } from "next/font/google";
import Loading from "./Loading"; // Importez le composant Loading

// Initialize the Changa font
const changa = Changa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
};

export default function LanguageSelectionModal({
  isOpen,
  onClose,
}: LanguageSelectionModalProps) {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // État pour suivre le chargement

  const languages: Language[] = [
    {
      code: "ar",
      name: "Arabic",
      nativeName: "العربية",
      flag: "/images/flags/dz.svg",
    },
    {
      code: "fr",
      name: "French",
      nativeName: "Français",
      flag: "/images/flags/fr.svg",
    },
    {
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "/images/flags/en.svg",
    },
  ];

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsLoading(true); // Activer l'écran de chargement

    // Naviguer vers la page d'inscription avec les paramètres de langue et de témoignages
    setTimeout(() => {
      router.push(`/register?lang=${languageCode}&showTestimonials=true`);
      // Ne pas fermer la modale ici, elle sera remplacée par l'écran de chargement
    }, 300); // Court délai pour le retour visuel
  };

  // Si le chargement est actif, afficher l'écran de chargement
  if (isLoading) {
    return <Loading />;
  }

  if (!isOpen) return null;

  return (
    // Use the Changa font class for the entire modal
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 language-modal-container ${changa.className}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="bg-white dark:bg-[#1A2213] rounded-2xl shadow-xl w-[90%] max-w-md z-10 overflow-hidden transform transition-all">
        {/* Header */}
        <div className="bg-[#7B934C]/10 dark:bg-[#7B934C]/20 p-6">
          <h2 className="text-2xl font-bold text-center text-[#647F2F] dark:text-[#7B934C]">
            اختر اللغة{" "}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
            <span></span>Choisissez la langue | Choose language
          </p>
        </div>

        {/* Language Options */}
        <div className="p-6">
          <div className="space-y-4">
            {languages.map((language) => (
              <div
                key={language.code}
                className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedLanguage === language.code
                    ? "bg-[#7B934C]/10 border-2 border-[#7B934C] transform -translate-y-1"
                    : "bg-gray-50 dark:bg-[#2A3223] hover:bg-[#7B934C]/5 dark:hover:bg-[#7B934C]/10"
                }`}
                onClick={() => handleLanguageSelect(language.code)}
              >
                <div className="w-10 h-10 relative mr-4 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                  {language.flag && (
                    <Image
                      src={language.flag}
                      alt={`${language.name} flag`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium text-[#647F2F] dark:text-[#7B934C]`}
                  >
                    {language.nativeName}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedLanguage === language.code
                      ? "border-[#7B934C] bg-[#7B934C]"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {selectedLanguage === language.code && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-[#2A3223] px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
