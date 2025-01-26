// React
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// CSS
import './assets/css/theme.css'

// Components
import { Animation } from './components/Animation'
import { ScrollUp } from './components/Scroll'

// Layouts
import { Navbar } from './layouts/Navbar'
import { Footer } from './layouts/Footer'

// Pages
import { Home } from './pages/Home'
import { Experiences } from './pages/Experiences'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Home />
}

const ExperiencesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Experiences />
}

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Projects />
}

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Skills />
}

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Contact />
}

function App() {
  return (
    <Router>
      {/* ANIMATION */}
      <Animation />

      {/* SCROLL UP */}
      <ScrollUp />

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTE */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </Router>
  )
}

export default App
