import React from "react";
import {
  User,
  GraduationCap,
  Briefcase,
  Target,
  Languages,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

const CVPreview = ({ data, language }) => {
  const text = {
    EN: {
      objective: "Career Objective",
      education: "Education",
      experience: "Work Experience",
      skills: "Skills",
      languages: "Languages",
      present: "Present",
    },
    BN: {
      objective: "কর্মজীবনের উদ্দেশ্য",
      education: "শিক্ষাগত যোগ্যতা",
      experience: "কর্ম অভিজ্ঞতা",
      skills: "দক্ষতা",
      languages: "ভাষা",
      present: "বর্তমান",
    },
  };

  const t = text[language];

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ minHeight: "842px" }}
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start space-x-6 mb-8 pb-6 border-b-2 border-blue-600">
          <div className="flex-shrink-0">
            {data.photo ? (
              <img
                src={data.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
              />
            ) : (
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {data.personalInfo.name || "Your Name"}
            </h1>
            <div className="space-y-1 text-gray-600">
              {data.personalInfo.email && (
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Career Objective */}
        {data.objective && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              {t.objective}
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.objective}</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Education */}
            {data.education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  {t.education}
                </h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-blue-200 pl-4"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience */}
            {data.experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {t.experience}
                </h2>
                <div className="space-y-6">
                  {data.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-blue-200 pl-4"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-600 text-sm mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.startDate} - {exp.endDate || t.present}
                      </p>
                      {exp.description && (
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            {/* Skills */}
            {data.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-blue-600 mb-4">
                  {t.skills}
                </h2>
                <div className="space-y-2">
                  {data.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 px-3 py-2 rounded-md"
                    >
                      <span className="text-gray-800 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {data.languages.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                  <Languages className="w-5 h-5 mr-2" />
                  {t.languages}
                </h2>
                <div className="space-y-2">
                  {data.languages.map((lang, index) => (
                    <div key={index} className="text-gray-700">
                      <span className="text-sm">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
