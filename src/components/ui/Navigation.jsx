import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home, Globe } from "lucide-react";

const Navigation = ({
  language,
  setLanguage,
  showBackButton = false,
  title = "",
}) => {
  const location = useLocation();

  const text = {
    EN: {
      backToHome: "Back to Home",
      logo: "CVBuilder Bangladesh",
    },
    BN: {
      backToHome: "হোমে ফিরুন",
      logo: "সিভি বিল্ডার বাংলাদেশ",
    },
  };

  const t = text[language];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <>
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">{t.backToHome}</span>
                </Link>

                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Home className="w-4 h-4" />
                  <span>/</span>
                  <span>{title}</span>
                </div>
              </>
            )}

            {/* Logo for home page */}
            {!showBackButton && (
              <Link to="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-600 sm:text-2xl">
                  {t.logo}
                </h1>
              </Link>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Logo for builder page */}
            {showBackButton && (
              <Link to="/" className="flex items-center">
                <h1 className="text-lg font-bold text-blue-600">{t.logo}</h1>
              </Link>
            )}

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "EN" ? "BN" : "EN")}
              className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language}</span>
            </button>

            {/* Navigation Menu for home page */}
            {!showBackButton && (
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {language === "EN" ? "About" : "সম্পর্কে"}
                </a>
                <a
                  href="#help"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {language === "EN" ? "Help" : "সহায়তা"}
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {language === "EN" ? "Contact" : "যোগাযোগ"}
                </a>
                <Link
                  to="/builder"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {language === "EN" ? "Build CV" : "সিভি তৈরি করুন"}
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
