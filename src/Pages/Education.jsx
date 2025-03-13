import React, { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Harvard University",
      degree: "Master of Computer Science",
      duration: "2021 - 2023",
      description:
        "Specialized in artificial intelligence and software development, working on real-world projects.",
    },
    {
      id: 2,
      institution: "Stanford University",
      degree: "Bachelor of Information Technology",
      duration: "2017 - 2021",
      description:
        "Focused on cloud computing, cybersecurity, and full-stack web development.",
    },
    {
      id: 3,
      institution: "MIT",
      degree: "Diploma in Web Development",
      duration: "2016 - 2017",
      description:
        "Completed an intensive program covering modern web technologies like React, Node.js, and databases.",
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm:mt-0" id="Education">
      <div className="text-center lg:mb-8 mb-2">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in-up"
        >
          Education
        </h2>
      </div>
      <div className="max-w-4xl mx-auto pt-8 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500/20">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                  <p className="text-gray-400">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.duration}</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Education);
