import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./index.css";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import ContactPage from "./Pages/Contact";
import WelcomeScreen from "./Pages/WelcomeScreen";

// Components
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/Background";
import ProjectDetails from "./components/ProjectDetail";

// Landing Page Layout
const LandingPage = ({ showWelcome, setShowWelcome }) => (
  <>
    <AnimatePresence mode="wait">
      {showWelcome && (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      )}
    </AnimatePresence>

    {!showWelcome && (
      <>
        <Navbar />
        <AnimatedBackground />

        <section id="Home"><Home /></section>
        <section id="About"><About /></section>
        <section id="Education"><Education /></section>
        <section id="Experience"><Experience /></section>
        <section id="Skills"><Skills /></section>
        <section id="Portfolio"><Portfolio /></section>
        <section id="Contact"><ContactPage /></section>

        <Footer />
      </>
    )}
  </>
);

// Project Details Page Layout
const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <Footer />
  </>
);

// Footer (Reused in both pages)
const Footer = () => (
  <footer>
    <center>
      <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
      <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
        © 2024{" "}
        <a href="https://flowbite.com/" className="hover:underline">lucifer™</a>.
        All Rights Reserved.
      </span>
      <img
        src={`${import.meta.env.BASE_URL}NKsign.png`}
        alt="NK Signature"
        style={{ width: "150px", height: "auto", marginTop: "8px" }}
      />
    </center>
  </footer>
);

// App Entry
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter basename="/NK">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
