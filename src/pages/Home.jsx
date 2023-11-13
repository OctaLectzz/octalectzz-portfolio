import { Navbar } from "../layouts/Navbar";
import { Footer } from "../layouts/Footer";
import { About } from "../components/home/About";
import { Profile } from "../components/home/Profile";
import { Skill } from "../components/home/Skill";
import { Project } from "../components/home/Project";
import { ContactMe } from "../components/home/ContactMe";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        {/* PROFILE */}
        <Profile />

        {/* ABOUT */}
        <About />

        {/* SERVICES */}
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
