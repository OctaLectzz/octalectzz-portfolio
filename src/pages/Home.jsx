import { Navbar } from "../layouts/Navbar";
import { Footer } from "../layouts/Footer";
import { About } from "../components/home/About";
import { Profile } from "../components/home/Profile";
import { Skill } from "../components/home/Skill";
import { Project } from "../components/home/Project";
import { ContactMe } from "../components/home/Contact";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        {/* PROFILE */}
        <Profile />

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skill />

        {/* PROJECTS */}
        <Project />

        {/* CONTACT */}
        <ContactMe />
      </main>

      <Footer />
    </>
  );
};
