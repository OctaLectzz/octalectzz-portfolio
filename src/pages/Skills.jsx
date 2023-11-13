import "../assets/css/skill.css";
import { SkillHome as Skill } from "../components/Skill";
import { Footer } from "../layouts/Footer";
import { Navbar } from "../layouts/Navbar";

export const Skills = () => {
  const imagePath = "img/skills/";

  return (
    <>
      <Navbar />
      <section className="skill container section" id="skill">
        <h2 className="section__title-2">
          <span>Skills.</span>
        </h2>

        {/* Frontend */}
        <div className="skill-containers">
          <div className="details-container">
            <h2 className="skill-sub-title">Frontend Development</h2>
            <div className="article-container">
              <Skill
                Name="HTML"
                Icon={imagePath + "HTML.png"}
                Experience="Experienced"
              />
              <Skill
                Name="CSS"
                Icon={imagePath + "CSS.png"}
                Experience="Experienced"
              />
              <Skill
                Name="Javascript"
                Icon={imagePath + "Javascript.png"}
                Experience="Intermediate"
              />
              <Skill
                Name="React JS"
                Icon={imagePath + "React.png"}
                Experience="Intermediate"
              />
              <Skill
                Name="Vue JS"
                Icon={imagePath + "Vue.png"}
                Experience="Intermediate"
              />
              <Skill
                Name="Quasar"
                Icon={imagePath + "Quasar.png"}
                Experience="Intermediate"
              />
            </div>
          </div>
          {/* Backend */}
          <div className="details-container">
            <h2 className="skill-sub-title">Backend Development</h2>
            <div className="article-container">
              <Skill
                Name="PHP"
                Icon={imagePath + "PHP.png"}
                Experience="Intermediate"
              />
              <Skill
                Name="Node JS"
                Icon={imagePath + "NodeJS.png"}
                Experience="Beginner"
              />
              <Skill
                Name="Laravel"
                Icon={imagePath + "Laravel.png"}
                Experience="Experienced"
              />
              <Skill
                Name="Firebase"
                Icon={imagePath + "Firebase.png"}
                Experience="Beginner"
              />
              <Skill
                Name="Express JS"
                Icon={imagePath + "ExpressJS.png"}
                Experience="Beginner"
              />
              <article className="ex__article">
                <div>
                  <h3></h3>
                  <p></p>
                </div>
              </article>
            </div>
          </div>
          {/* Other */}
          <div className="details-container">
            <h2 className="skill-sub-title">Other</h2>
            <div className="article-container">
              <Skill
                Name="MySQL"
                Icon={imagePath + "MySQL.png"}
                Experience="Intermediate"
              />
              <Skill
                Name="Git"
                Icon={imagePath + "Git.png"}
                Experience="Beginner"
              />
              <Skill
                Name="Github"
                Icon={imagePath + "Github.png"}
                Experience="Intermediate"
              />
              <Skill
                Name="Canva"
                Icon={imagePath + "Canva.png"}
                Experience="Beginner"
              />
              <Skill
                Name="After Effect"
                Icon={imagePath + "After Effect.png"}
                Experience="Beginner"
              />
              <Skill
                Name="Figma"
                Icon={imagePath + "Figma.png"}
                Experience="Beginner"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
