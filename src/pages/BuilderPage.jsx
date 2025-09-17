import React, { useState, useRef } from "react";
import {
  Plus,
  Trash2,
  Upload,
  Download,
  User,
  GraduationCap,
  Briefcase,
  Target,
  Languages,
  Globe,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

import FormInput from "../components/ui/FormInput";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CVPreview from "../components/CVPreview";
import Navigation from "../components/ui/Navigation";

// Main CV Builder Component
const BuilderPage = () => {
  const [language, setLanguage] = useState("EN");
  const [photoPreview, setPhotoPreview] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    photo: "",
    objective: "",
    education: [],
    experience: [],
    skills: [],
    languages: [],
  });

  const text = {
    EN: {
      title: "Build Your CV",
      personalInfo: "Personal Information",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      photo: "Profile Photo",
      uploadPhoto: "Upload Photo",
      objective: "Career Objective",
      objectivePlaceholder: "Write a brief career objective...",
      education: "Education",
      addEducation: "Add Education",
      degree: "Degree/Qualification",
      institution: "School/College/University",
      year: "Year of Completion",
      experience: "Work Experience",
      addExperience: "Add Experience",
      position: "Job Title/Position",
      company: "Company/Organization",
      startDate: "Start Date",
      endDate: "End Date",
      description: "Job Description",
      skills: "Skills",
      addSkill: "Add Skill",
      skillPlaceholder: "Enter a skill",
      languages: "Languages",
      addLanguage: "Add Language",
      languagePlaceholder: "Enter a language",
      preview: "Live Preview",
      download: "Download PDF",
      current: "Current",
    },
    BN: {
      title: "আপনার সিভি তৈরি করুন",
      personalInfo: "ব্যক্তিগত তথ্য",
      name: "পূর্ণ নাম",
      email: "ইমেইল ঠিকানা",
      phone: "ফোন নম্বর",
      photo: "প্রোফাইল ছবি",
      uploadPhoto: "ছবি আপলোড করুন",
      objective: "কর্মজীবনের উদ্দেশ্য",
      objectivePlaceholder: "সংক্ষিপ্ত কর্মজীবনের উদ্দেশ্য লিখুন...",
      education: "শিক্ষাগত যোগ্যতা",
      addEducation: "শিক্ষাগত যোগ্যতা যোগ করুন",
      degree: "ডিগ্রি/যোগ্যতা",
      institution: "স্কুল/কলেজ/বিশ্ববিদ্যালয়",
      year: "সমাপনীর বছর",
      experience: "কর্ম অভিজ্ঞতা",
      addExperience: "অভিজ্ঞতা যোগ করুন",
      position: "পদবী/অবস্থান",
      company: "কোম্পানি/প্রতিষ্ঠান",
      startDate: "শুরুর তারিখ",
      endDate: "শেষের তারিখ",
      description: "কাজের বিবরণ",
      skills: "দক্ষতা",
      addSkill: "দক্ষতা যোগ করুন",
      skillPlaceholder: "একটি দক্ষতা লিখুন",
      languages: "ভাষা",
      addLanguage: "ভাষা যোগ করুন",
      languagePlaceholder: "একটি ভাষা লিখুন",
      preview: "লাইভ প্রিভিউ",
      download: "পিডিএফ ডাউনলোড",
      current: "বর্তমান",
    },
  };

  const t = text[language];

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const photoUrl = e.target.result;
        setPhotoPreview(photoUrl);
        setFormData((prev) => ({
          ...prev,
          photo: photoUrl,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Generic handlers for form updates
  const updatePersonalInfo = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const updateObjective = (value) => {
    setFormData((prev) => ({
      ...prev,
      objective: value,
    }));
  };

  // Education handlers
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", institution: "", year: "" }],
    }));
  };

  const updateEducation = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  // Experience handlers
  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const updateExperience = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  // Skills handlers
  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const updateSkill = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? value : skill)),
    }));
  };

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  // Languages handlers
  const addLanguage = () => {
    setFormData((prev) => ({
      ...prev,
      languages: [...prev.languages, ""],
    }));
  };

  const updateLanguage = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.map((lang, i) => (i === index ? value : lang)),
    }));
  };

  const removeLanguage = (index) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index),
    }));
  };

  // PDF Download handler (mock implementation)
  const handleDownloadPDF = () => {
    // In a real application, you would use a library like jspdf or react-pdf
    alert(
      "PDF download functionality would be implemented here using libraries like jsPDF or react-pdf"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
              {t.title}
            </h1>
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "EN" ? "BN" : "EN")}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language}</span>
              </button>

              {/* Download Button */}
              <Button
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>{t.download}</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            {/* Personal Information */}
            <Card title={t.personalInfo} icon={User}>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormInput
                  label={t.name}
                  value={formData.personalInfo.name}
                  onChange={(e) => updatePersonalInfo("name", e.target.value)}
                  placeholder="John Doe"
                  required
                  className="sm:col-span-2"
                />
                <FormInput
                  label={t.email}
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                  placeholder="john@example.com"
                />
                <FormInput
                  label={t.phone}
                  value={formData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>

              {/* Photo Upload */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.photo}
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <Button
                    variant="secondary"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center space-x-2"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{t.uploadPhoto}</span>
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </Card>

            {/* Career Objective */}
            <Card title={t.objective} icon={Target}>
              <TextArea
                label=""
                value={formData.objective}
                onChange={(e) => updateObjective(e.target.value)}
                placeholder={t.objectivePlaceholder}
                rows={4}
              />
            </Card>

            {/* Education */}
            <Card title={t.education} icon={GraduationCap}>
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 border border-gray-200 rounded-md"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-sm font-medium text-gray-700">
                      {t.education} {index + 1}
                    </h4>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeEducation(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      label={t.degree}
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                      placeholder="Bachelor of Science"
                      className="sm:col-span-2"
                    />
                    <FormInput
                      label={t.institution}
                      value={edu.institution}
                      onChange={(e) =>
                        updateEducation(index, "institution", e.target.value)
                      }
                      placeholder="University of Dhaka"
                    />
                    <FormInput
                      label={t.year}
                      value={edu.year}
                      onChange={(e) =>
                        updateEducation(index, "year", e.target.value)
                      }
                      placeholder="2023"
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={addEducation}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>{t.addEducation}</span>
              </Button>
            </Card>

            {/* Experience */}
            <Card title={t.experience} icon={Briefcase}>
              {formData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 border border-gray-200 rounded-md"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-sm font-medium text-gray-700">
                      {t.experience} {index + 1}
                    </h4>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeExperience(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <FormInput
                      label={t.position}
                      value={exp.position}
                      onChange={(e) =>
                        updateExperience(index, "position", e.target.value)
                      }
                      placeholder="Software Developer"
                    />
                    <FormInput
                      label={t.company}
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(index, "company", e.target.value)
                      }
                      placeholder="Tech Company Ltd."
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormInput
                        label={t.startDate}
                        type="month"
                        value={exp.startDate}
                        onChange={(e) =>
                          updateExperience(index, "startDate", e.target.value)
                        }
                      />
                      <FormInput
                        label={t.endDate}
                        type="month"
                        value={exp.endDate}
                        onChange={(e) =>
                          updateExperience(index, "endDate", e.target.value)
                        }
                        placeholder={t.current}
                      />
                    </div>
                    <TextArea
                      label={t.description}
                      value={exp.description}
                      onChange={(e) =>
                        updateExperience(index, "description", e.target.value)
                      }
                      placeholder="Describe your responsibilities and achievements..."
                      rows={3}
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={addExperience}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>{t.addExperience}</span>
              </Button>
            </Card>

            {/* Skills */}
            <Card title={t.skills}>
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    placeholder={t.skillPlaceholder}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeSkill(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                onClick={addSkill}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>{t.addSkill}</span>
              </Button>
            </Card>

            {/* Languages */}
            <Card title={t.languages} icon={Languages}>
              {formData.languages.map((lang, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={lang}
                    onChange={(e) => updateLanguage(index, e.target.value)}
                    placeholder={t.languagePlaceholder}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeLanguage(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                onClick={addLanguage}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>{t.addLanguage}</span>
              </Button>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {t.preview}
              </h2>
            </div>
            <div className="transform scale-75 origin-top-left lg:scale-100 lg:origin-top">
              <CVPreview data={formData} language={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
