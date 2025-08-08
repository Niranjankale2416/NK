import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";
import certificateData from "../data/certificates.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes } from "lucide-react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
  { icon: "docker.svg", language: "Docker" },
  { icon: "kubernetes.svg", language: "Kubernetes" },
  { icon: "jenkins.svg", language: "Jenkins" },
  { icon: "git.svg", language: "Git" },
  { icon: "GitHub actions.svg", language: "GitHub Actions" },
  { icon: "Terraform.svg", language: "Terraform" },
  { icon: "Ansible.svg", language: "Ansible" },
  { icon: "Aws.svg", language: "AWS" },
  { icon: "Azure.svg", language: "Azure" },
  { icon: "Grafana.svg", language: "Grafana" },
  { icon: "prometheus.svg", language: "Prometheus" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const initialItems = 9;

  useEffect(() => {
    AOS.init({ once: false });

    setProjects([
  {
    id: "project1",
    Img: "expense-tracker.png",
    Title: "Full Stack Expense Tracker",
    Description: "A MERN stack application to track expenses with user authentication and charts.",
    Link: "https://your-live-demo.com",
    GitHub: "Add your GitHub repo link here",
    TechUsed: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "project2",
    Img: "ticketing-system.png",
    Title: "IT Support Ticketing System",
    Description: "A web-based ticketing system to manage IT issues and track resolutions.",
    Link: "https://your-demo.com",
    GitHub: "Add your GitHub repo link here",
    TechUsed: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
  {
    id: "project3",
    Img: "cicd-pipeline.png",
    Title: "CI/CD Pipeline Automation",
    Description: "Automated deployment using GitHub Actions and Docker for a Node.js app.",
    Link: "https://your-demo.com",
    GitHub: "Add your GitHub repo link here",
    TechUsed: ["GitHub Actions", "Docker", "Node.js"],
  },
  {
    id: "project4",
    Img: "prometheus.png",
    Title: "Monitoring System with Prometheus",
    Description: "Set up server monitoring using Prometheus and Grafana dashboards.",
    Link: "",
    GitHub: "Add your GitHub repo link here",
    TechUsed: ["Prometheus", "Grafana", "Linux"],
  },
  {
    id: "project5",
    Img: "terraform.png",
    Title: "Infrastructure as Code with Terraform",
    Description: "Deployed cloud infrastructure using Terraform and AWS.",
    Link: "",
    GitHub: "Add your GitHub repo link here",
    TechUsed: ["Terraform", "AWS", "IAM"],
  },
]);


    // Load certificates from JSON
    setCertificates(certificateData);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else if (type === "certificates") {
      setShowAllCertificates((prev) => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);
  const displayedTechStacks = showAllTech ? techStacks : techStacks.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
              },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award className="mb-2 w-5 h-5" />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          {/* Projects Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
              {displayedProjects.map((project, index) => (
                <CardProject key={index} {...project} />
              ))}
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

          {/* Certificates Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 justify-center">
              {displayedCertificates.map((cert, index) => (
                <Certificate key={index} ImgSertif={cert.image} title={cert.title} />
              ))}
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
              </div>
            )}
          </TabPanel>

          {/* Tech Stack Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center">
              {displayedTechStacks.map((stack, index) => (
                <TechStackIcon key={index} TechStackIcon={stack.icon} Language={stack.language} />
              ))}
            </div>
            {techStacks.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => setShowAllTech((prev) => !prev)} isShowingMore={showAllTech} />
              </div>
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
