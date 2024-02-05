import "/src/assets/css/pages/experience.css";
import experiences from "/src/data/experiences.json";
import { WorkTimeline, EducationTimeline } from "/src/components/Timeline";

export const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title-2">
        <span>Experience :</span>
      </h2>

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
            Description={experience.Description}
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
            Description={experience.Description}
          />
        ))}
      </div>
    </section>
  );
};
