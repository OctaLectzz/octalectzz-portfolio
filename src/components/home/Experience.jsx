import "/src/assets/css/pages/experience.css";
import experiences from "/src/data/experiences.json";
import { Link } from "react-router-dom";
import { WorkTimeline, EducationTimeline } from "/src/components/Timeline";

export const Experience = () => {
  const buttonStyle = {
    marginTop: "-50px",
    display: "flex",
    justifyContent: "center",
    width: "35vh",
    height: "6vh",
    margin: "10px auto",
  };

  return (
    <section className="experiences section" id="experiences">
      <h2 className="section__title-1">
        <span>Experiences.</span>
      </h2>

      <div className="experiences__container container grid">
        {/* Works */}
        <div className="experiences__work">
          <div className="experiences__title">
            <h2>Works</h2>
          </div>
          {experiences.Works.map((experience) => (
            <WorkTimeline
              key={experience.Date}
              Date={experience.Date}
              Place={experience.Place}
              Status={experience.Status}
              Role={experience.Role}
            />
          ))}
        </div>

        {/* Education */}
        <div className="experiences__education">
          <div className="experiences__education-title">
            <h2>Education</h2>
          </div>
          {experiences.Education.map((experience) => (
            <EducationTimeline
              key={experience.School}
              School={experience.School}
              Date={experience.Date}
              Major={experience.Major}
            />
          ))}
        </div>
      </div>
      <Link to="/experiences" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show details...
      </Link>
    </section>
  );
};
