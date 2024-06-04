import '/src/assets/css/pages/skill.css'
import { Link } from 'react-router-dom'
import { Item } from '/src/components/Item'

export const Skill = () => {
  const imagePath = 'img/skills/'

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '35vh',
    height: '6vh',
    margin: '10px auto'
  }

  return (
    <section className="skill container section" id="skill">
      <h2 className="section__title-2" data-aos="zoom-in-up">
        <span>Skills.</span>
      </h2>

      {/* Frontend */}
      <div className="skill__containers">
        <div className="skill__details" data-aos="fade-down">
          <h2 className="skill__subtitle">Frontend Development</h2>
          <div className="skill__list">
            <Item Name="HTML" Icon={imagePath + 'HTML.png'} Experience="Experienced" />
            <Item Name="CSS" Icon={imagePath + 'CSS.png'} Experience="Experienced" />
            <Item Name="Javascript" Icon={imagePath + 'Javascript.png'} Experience="Intermediate" />
            <Item Name="React JS" Icon={imagePath + 'React.png'} Experience="Intermediate" />
            <Item Name="Vue JS" Icon={imagePath + 'Vue.png'} Experience="Intermediate" />
            <Item Name="Quasar" Icon={imagePath + 'Quasar.png'} Experience="Intermediate" />
          </div>
        </div>

        {/* Backend */}
        <div className="skill__details" data-aos="fade-down" data-aos-delay="200">
          <h2 className="skill__subtitle">Backend Development</h2>
          <div className="skill__list">
            <Item Name="PHP" Icon={imagePath + 'PHP.png'} Experience="Intermediate" />
            <Item Name="Node JS" Icon={imagePath + 'NodeJS.png'} Experience="Beginner" />
            <Item Name="Laravel" Icon={imagePath + 'Laravel.png'} Experience="Experienced" />
            <Item Name="Firebase" Icon={imagePath + 'Firebase.png'} Experience="Beginner" />
            <Item Name="Express JS" Icon={imagePath + 'ExpressJS.png'} Experience="Beginner" />
            <article className="skill__icon">
              <div>
                <h3></h3>
                <p></p>
              </div>
            </article>
          </div>
        </div>

        {/* Other */}
        <div className="skill__details" data-aos="fade-down" data-aos-delay="400">
          <h2 className="skill__subtitle">Other</h2>
          <div className="skill__list">
            <Item Name="MySQL" Icon={imagePath + 'MySQL.png'} Experience="Intermediate" />
            <Item Name="Git" Icon={imagePath + 'Git.png'} Experience="Beginner" />
            <Item Name="Github" Icon={imagePath + 'Github.png'} Experience="Intermediate" />
            <Item Name="Canva" Icon={imagePath + 'Canva.png'} Experience="Intermediate" />
            <Item Name="After Effect" Icon={imagePath + 'After Effect.png'} Experience="Beginner" />
            <Item Name="Figma" Icon={imagePath + 'Figma.png'} Experience="Beginner" />
          </div>
        </div>
      </div>

      <Link to="/skills" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show details...
      </Link>
    </section>
  )
}
