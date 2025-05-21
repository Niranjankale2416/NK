import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = memo(() => (
  <div className="text-center mb-8 px-6 sm:px-12">
    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500" data-aos="zoom-in-up" data-aos-duration="600">
      About Me
    </h2>
    <p className="mt-2 text-gray-300 text-lg sm:text-xl flex items-center justify-center gap-2" data-aos="zoom-in-up" data-aos-duration="800">
      <Sparkles className="w-5 h-5 text-purple-400" /> Creating digital experiences with innovation <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center p-4 sm:p-8">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20" />
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-lg transform transition duration-500 group-hover:scale-105">
        <img src="/niranjank.jpg" alt="Niranjan D Kale" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    const experience = new Date().getFullYear() - 2021;
    return { totalProjects: storedProjects.length, totalCertificates: storedCertificates.length, YearExperience: experience };
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="text-white px-6 sm:px-12 mt-10" id="About">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-200" data-aos="fade-right" data-aos-duration="1000">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">NIRANJAN D KALE</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-4" data-aos="fade-right" data-aos-duration="1200">
            Passionate IT professional with expertise in Java, C#, Python, JavaScript, SQL, Active Directory, and ServiceNow. I thrive in designing, troubleshooting, and optimizing IT solutions while exploring innovative technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a href="https://drive.google.com/file/d/1H1G4Nc07e5hi8oFcrGPzvlKd9uDiavdl/view?usp=drive_link" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition transform hover:scale-105 shadow-lg">
                <FileText className="w-5 h-5 inline-block mr-2" /> Download CV
              </button>
            </a>
            <a href="#Portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-purple-500 text-purple-500 transition transform hover:scale-105">
                <Code className="w-5 h-5 inline-block mr-2" /> View Projects
              </button>
            </a>
          </div>
        </div>
        <ProfileImage />
      </div>
    </div>
  );
};

export default memo(AboutPage);
