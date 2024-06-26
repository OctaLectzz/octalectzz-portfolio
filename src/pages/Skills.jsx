import '/src/assets/css/pages/skill.css'
import skill from '/src/data/skills.json'

export const Skills = () => {
  return (
    <section className="skills__container" id="skill">
      {/* Title */}
      <h2 className="section__title-2" data-aos="fade-right">
        <span>My Skills :</span>
      </h2>
      <div className="subtitle" data-aos="fade-left">
        <span>&quot;Elevating Possibilities: A Snapshot of My Proficiencies and Expertise.&quot;</span>
      </div>

      {/* FRONTEND DEVELOPMENT */}
      <h2 className="skills__type" data-aos="fade-down-right">Frontend Development :</h2>
      <div className="skills__content">
        <div className="skills__column">
          {skill.Frontend.map((skill, id) => {
            return (
              <div key={id} className="skills__list" data-aos="zoom-in" data-aos-delay={id * 100}>
                <div className="skills__Image-container">
                  <img src={skill.imageSrc} alt={skill.title} className="skills__image" />
                </div>
                <p className="skills__title">{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* BACKEND DEVELOPMENT */}
      <h2 className="skills__type" data-aos="fade-down-right">Backend Development :</h2>
      <div className="skills__content">
        <div className="skills__column">
          {skill.Backend.map((skill, id) => {
            return (
              <div key={id} className="skills__list" data-aos="zoom-in" data-aos-delay={id * 100}>
                <div className="skills__Image-container">
                  <img src={skill.imageSrc} alt={skill.title} className="skills__image" />
                </div>
                <p className="skills__title">{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* OTHERS */}
      <h2 className="skills__type" data-aos="fade-down-right">Others :</h2>
      <div className="skills__content">
        <div className="skills__column">
          {skill.Others.map((skill, id) => {
            return (
              <div key={id} className="skills__list" data-aos="zoom-in" data-aos-delay={id * 100}>
                <div className="skills__Image-container">
                  <img src={skill.imageSrc} alt={skill.title} className="skills__image" />
                </div>
                <p className="skills__title">{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
