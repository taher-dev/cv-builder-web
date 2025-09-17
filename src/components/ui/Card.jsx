import React from "react";

const Card = ({ title, icon: Icon, children, className = "" }) => (
  <div
    className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}
  >
    <div className="flex items-center mb-4">
      {Icon && <Icon className="w-5 h-5 text-blue-600 mr-2" />}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    {children}
  </div>
);

export default Card;
