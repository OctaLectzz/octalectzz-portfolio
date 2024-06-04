import '/src/assets/css/pages/experience.css'
import experiences from '/src/data/experiences.json'
import { WorkTimeline, EducationTimeline } from '/src/components/Timeline'

export const Experiences = () => {
  return (
    <section className="experience container section" id="experience">
      {/* Title */}
      <h2 className="section__title-2" data-aos="fade-right">
        <span>Experience :</span>
      </h2>
      <div className="subtitle" data-aos="fade-left">
        <span>&quot;Embark on a journey through my experiences, where every moment has shaped me into the professional I am today.&quot;</span>
      </div>

      {/* Works */}
      <div className="experiences__work" data-aos="fade-down-right">
        <div className="experiences__title">
          <h2>Works</h2>
        </div>
        {experiences.Works.map((experience) => (
          <WorkTimeline key={experience.Date} Date={experience.Date} Place={experience.Place} Status={experience.Status} Role={experience.Role} Description={experience.Description} />
        ))}
      </div>

      {/* Education */}
      <div className="experiences__education" data-aos="fade-up-left">
        <div className="experiences__education-title">
          <h2>Education</h2>
        </div>
        {experiences.Education.map((experience) => (
          <EducationTimeline key={experience.School} School={experience.School} Date={experience.Date} Major={experience.Major} Description={experience.Description} />
        ))}
      </div>
    </section>
  )
}
