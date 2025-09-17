import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const Navigation = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = {
    EN: {
      logo: "CVBuilder Bangladesh",
      nav: {
        about: "About",
        help: "Help",
        contact: "Contact",
        login: "Login",
      },
    },
    BN: {
      logo: "সিভি বিল্ডার বাংলাদেশ",
      nav: {
        about: "সম্পর্কে",
        help: "সহায়তা",
        contact: "যোগাযোগ",
        login: "লগইন",
      },
    },
  };

  const currentText = text[language];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600 sm:text-2xl">
              {currentText.logo}
            </h1>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a
                href="/#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentText.nav.about}
              </a>
              <a
                href="/#help"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentText.nav.help}
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentText.nav.contact}
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLanguage(language === "EN" ? "BN" : "EN")}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            {/* Login Button - Moved to the right */}
            <a
              href="#login"
              className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentText.nav.login}
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/#about"
                className="block px-3 py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.nav.about}
              </a>
              <a
                href="/#help"
                className="block px-3 py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.nav.help}
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.nav.contact}
              </a>
              <a
                href="#login"
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg mx-3 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.nav.login}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
