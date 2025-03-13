import React, { useEffect, useState, memo } from "react";
import { Layers, ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const softSkills = [
    "Communication",
    "Problem-Solving",
    "Teamwork",
    "Adaptability",
    "Leadership",
    "Time Management",
    "Critical Thinking",
    "Creativity",
    "Work Ethic",
    "Decision Making",
    "Emotional Intelligence",
    "Collaboration",
    "Negotiation",
  ];

  const technicalSkills = [
    {
      category: "Cybersecurity",
      skills: ["Network Security", "Encryption", "Ethical Hacking", "Risk Assessment"],
    },
    {
      category: "IT Support & Networking",
      skills: ["Troubleshooting", "Cloud Computing", "Hardware Setup", "Server Management"],
    },
    {
      category: "Software Development",
      skills: ["JavaScript", "React", "Node.js", "Python", "Version Control (Git)"],
    },
    {
      category: "Machine Learning & Data",
      skills: ["TensorFlow", "Data Analysis", "Deep Learning", "Big Data"],
    },
    {
      category: "Product Management",
      skills: ["Agile Methodologies", "Scrum", "Market Research", "Roadmap Planning"],
    },
  ];

  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10" id="Skills">
      <div className="text-center mb-8">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in-up"
        >
          Skills
        </h2>
      </div>

      <div className="w-full mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Soft Skills Card */}
        <div className="relative group" data-aos="fade-right">
          <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[300px]">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="flex items-center gap-4 mb-4">
              <Layers className="w-8 h-8 text-white" />
              <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Skills Main Card */}
        <div className="relative group" data-aos="fade-left">
          <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[300px]">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="flex items-center gap-4 mb-4">
              <Layers className="w-8 h-8 text-white" />
              <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
            </div>
            <ul className="list-none text-gray-300 space-y-2">
              {technicalSkills.map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left flex justify-between items-center p-2 rounded-lg hover:bg-gray-800 transition-all"
                    onClick={() => toggleCategory(index)}
                  >
                    {item.category}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openCategory === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openCategory === index && (
                    <ul className="ml-5 mt-2 space-y-1 text-gray-400 animate-fade-in">
                      {item.skills.map((skill, i) => (
                        <li key={i} className="list-disc">{skill}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
