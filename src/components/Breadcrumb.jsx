import React from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = ({ language, pageTitle }) => {
  const text = {
    EN: { home: "Home" },
    BN: { home: "হোম" },
  };
  const t = text[language];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 h-12 text-sm font-medium">
          <Link
            to="/"
            className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            {t.home}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-800">{pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
