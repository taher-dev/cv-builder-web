// Remove useState and useEffect for language and menu
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// Import the new Navigation component
import Navigation from "../components/Navigation";

// The component now receives language and setLanguage as props
const LandingPage = ({ language, setLanguage }) => {
  // This scroll state can remain here as it's specific to this page
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Remove the large `text` object, it's now in Navigation.jsx.
  // We only need the text specific to this page's content.
  const text = {
    EN: {
      hero: {
        title: "Build Your Professional CV in Minutes",
        subtitle:
          "Create stunning resumes that get you noticed. Choose from professional templates, customize with ease, and land your dream job.",
        cta: "Build Your CV",
      },
      footer: {
        logo: "CVBuilder Bangladesh",
        about: "About",
        help: "Help",
        contact: "Contact",
        privacy: "Privacy Policy",
      },
    },
    BN: {
      hero: {
        title: "মিনিটেই তৈরি করুন পেশাদার সিভি",
        subtitle:
          "আকর্ষণীয় রেজিউমে তৈরি করুন যা আপনাকে লক্ষ্যে পৌঁছাতে সাহায্য করবে। পেশাদার টেমপ্লেট বেছে নিন, সহজেই কাস্টমাইজ করুন।",
        cta: "সিভি তৈরি করুন",
      },
      footer: {
        logo: "সিভি বিল্ডার বাংলাদেশ",
        about: "সম্পর্কে",
        help: "সহায়তা",
        contact: "যোগাযোগ",
        privacy: "গোপনীয়তা নীতি",
      },
    },
  };

  const currentText = text[language];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== CHANGES START HERE ===== */}

      {/* 1. Use the new Navigation component */}
      <Navigation language={language} setLanguage={setLanguage} />

      {/* 2. The old <header> section is now completely gone. */}

      {/* ===== CHANGES END HERE ===== */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="text-center">
            {/* Hero Content with Scroll Animation */}
            <div
              className="transform transition-transform duration-1000 ease-out"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {currentText.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {currentText.hero.subtitle}
              </p>
              <Link to="/builder">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  {currentText.hero.cta}
                </button>
              </Link>
            </div>

            {/* CV Preview Image */}
            <div
              className="mt-16 sm:mt-20 transform transition-transform duration-1000 ease-out"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <div className="relative max-w-4xl mx-auto">
                {/* Mock CV Preview */}
                <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200 mx-4 sm:mx-0">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 text-center sm:text-left">
                        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4 mx-auto sm:mx-0"></div>
                        <div className="h-4 bg-gray-200 rounded mb-1 w-1/2 mx-auto sm:mx-0"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto sm:mx-0"></div>
                      </div>
                    </div>

                    {/* Content Sections */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <div className="h-5 bg-blue-200 rounded mb-3 w-1/3"></div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                          </div>
                        </div>
                        <div>
                          <div className="h-5 bg-blue-200 rounded mb-3 w-1/4"></div>
                          <div className="space-y-4">
                            <div>
                              <div className="h-4 bg-gray-300 rounded mb-1 w-2/3"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                              <div className="space-y-1">
                                <div className="h-3 bg-gray-200 rounded w-full"></div>
                                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <div className="h-5 bg-blue-200 rounded mb-3 w-2/3"></div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                          </div>
                        </div>
                        <div>
                          <div className="h-5 bg-blue-200 rounded mb-3 w-1/2"></div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-bounce hidden sm:block"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80 animate-pulse hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {currentText.logo}
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                {language === "EN"
                  ? "Professional resume builder designed for Bangladesh job market. Create impressive CVs that stand out."
                  : "বাংলাদেশের চাকরির বাজারের জন্য ডিজাইন করা পেশাদার রেজিউমে বিল্ডার। আকর্ষণীয় সিভি তৈরি করুন।"}
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "EN" ? "Quick Links" : "দ্রুত লিংক"}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {currentText.footer.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {currentText.footer.help}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {currentText.footer.contact}
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {currentText.footer.privacy}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "EN" ? "Contact" : "যোগাযোগ"}
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>Dhaka, Bangladesh</p>
                <p>+880 1XXX-XXXXXX</p>
                <p>info@cvbuilder.bd</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 {currentText.logo}.{" "}
              {language === "EN"
                ? "All rights reserved."
                : "সকল অধিকার সংরক্ষিত।"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
