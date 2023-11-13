import { Link } from "react-router-dom";
import "../../assets/css/skill.css";
import { SkillHome } from "../Skill";

export const Skill = () => {
  const imagePath = "img/skills/";

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    width: "25vh",
    height: "6vh",
    margin: "10px auto",
  };

  return (
    <section className="skill container section" id="skill">
      <h2 className="section__title-2">
        <span>Skills.</span>
      </h2>

      {/* Frontend */}
      <div className="skill-containers">
        <div className="details-container">
          <h2 className="skill-sub-title">Frontend Development</h2>
          <div className="article-container">
            <SkillHome
              Name="HTML"
              Icon={imagePath + "HTML.png"}
              Experience="Experienced"
            />
            <SkillHome
              Name="CSS"
              Icon={imagePath + "CSS.png"}
              Experience="Experienced"
            />
            <SkillHome
              Name="Javascript"
              Icon={imagePath + "Javascript.png"}
              Experience="Intermediate"
            />
            <SkillHome
              Name="React JS"
              Icon={imagePath + "React.png"}
              Experience="Intermediate"
            />
            <SkillHome
              Name="Vue JS"
              Icon={imagePath + "Vue.png"}
              Experience="Intermediate"
            />
            <SkillHome
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
            <SkillHome
              Name="PHP"
              Icon={imagePath + "PHP.png"}
              Experience="Intermediate"
            />
            <SkillHome
              Name="Node JS"
              Icon={imagePath + "NodeJS.png"}
              Experience="Beginner"
            />
            <SkillHome
              Name="Laravel"
              Icon={imagePath + "Laravel.png"}
              Experience="Experienced"
            />
            <SkillHome
              Name="Firebase"
              Icon={imagePath + "Firebase.png"}
              Experience="Beginner"
            />
            <SkillHome
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
            <SkillHome
              Name="MySQL"
              Icon={imagePath + "MySQL.png"}
              Experience="Intermediate"
            />
            <SkillHome
              Name="Git"
              Icon={imagePath + "Git.png"}
              Experience="Beginner"
            />
            <SkillHome
              Name="Github"
              Icon={imagePath + "Github.png"}
              Experience="Intermediate"
            />
            <SkillHome
              Name="Canva"
              Icon={imagePath + "Canva.png"}
              Experience="Beginner"
            />
            <SkillHome
              Name="After Effect"
              Icon={imagePath + "After Effect.png"}
              Experience="Beginner"
            />
            <SkillHome
              Name="Figma"
              Icon={imagePath + "Figma.png"}
              Experience="Beginner"
            />
          </div>
        </div>
      </div>
      <Link to="/skills" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show more...
      </Link>
    </section>
  );
};
