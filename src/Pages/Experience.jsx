import React, { useEffect, memo } from "react";
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: "Logipool inforech.",
      role: "DevOps engineer",
      duration: "2024 - Present",
      description:
        "Managed CI/CD pipelines and automated deployment processes using Jenkins and Docker. Monitored system performance and ensured seamless collaboration between development and operations teams.",
    },
    {
      id: 2,
      company: "Testbook.Edu",
      role: "Data Analyst & Sr.Business Development Associate",
      duration: "2024 - 2024",
      description:
        "Analyzed user data to uncover insights and improve conversion strategies. Led a team in executing business development campaigns, driving user engagement and platform adoption.",
    },
    {
      id: 3,
      company: "Think & Learn Pvt. Ltd.",
      role: "Business Development Associate",
      duration: "2023 - 2024",
      description:
        "Engaged with potential clients to understand their needs and deliver tailored ed-tech solutions. Collaborated with cross-functional teams to optimize sales strategies and drive revenue growth.",
    },
    {
      id: 4,
      company: "Bitmap Technologies.",
      role: "Web Developer",
      duration: "2022 - 2023 ",
      description:
        "Developed and maintained responsive UI components using React and Tailwind CSS. Worked closely with the backend team to integrate APIs and improve user experience.",
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10" id="Experience">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" data-aos="zoom-in-up">
          Experience
        </h2>
      </div>
      <div className="w-full mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className="relative group" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-gray-300">{exp.role} | {exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-400">{exp.description}</p>
              <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors mt-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Experience);
