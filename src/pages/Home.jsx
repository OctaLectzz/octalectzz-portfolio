import { Profile } from "../components/home/Hero";
import { About } from "../components/home/About";
import { Skill } from "../components/home/Skill";
import { Project } from "../components/home/Project";
import { ContactMe } from "../components/home/Contact";

export const Home = () => {
  return (
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
  );
};
