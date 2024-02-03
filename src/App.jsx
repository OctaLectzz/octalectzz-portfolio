// React
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CSS
import "./assets/css/theme.css";

// Components
import { ScrollUp } from "./components/Scroll";

// Layouts
import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";

// Pages
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Home />;
};

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Experience />;
};

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Projects />;
};

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Skills />;
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Contact />;
};

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTE */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

      {/* SCROLL UP */}
      <ScrollUp />
    </Router>
  );
}

export default App;
