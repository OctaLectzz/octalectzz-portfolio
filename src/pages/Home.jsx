import { Navbar } from "../layouts/Navbar";
import { Footer } from "../layouts/Footer";
import { About } from "../components/home/About";
import { Profile } from "../components/home/Profile";
import { Service } from "../components/home/Experience";
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
        <Service />

        {/* PROJECTS */}
        <Project />

        {/* CONTACT */}
        <ContactMe />
      </main>
      <Footer />
    </>
  );
};
