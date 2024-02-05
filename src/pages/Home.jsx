import { Hero } from "/src/components/home/Hero";
import { About } from "/src/components/home/About";
import { Skill } from "/src/components/home/Skill";
import { Project } from "/src/components/home/Project";
import { Experience } from "/src/components/home/Experience";
import { Contact } from "/src/components/home/Contact";

export const Home = () => {
  return (
    <main className="main">
      {/* PROFILE */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skill />

      {/* PROJECTS */}
      <Project />

      {/* EXPERIENCES */}
      <Experience />

      {/* CONTACT */}
      <Contact />
    </main>
  );
};
