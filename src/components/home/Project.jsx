import '/src/assets/css/pages/project.css'
import { Link } from 'react-router-dom'
import { Card } from '/src/components/Card'
import { Badge } from '/src/components/Badge'

export const Project = () => {
  const projectImg = '/img/projects/'

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '35vh',
    height: '6vh',
    margin: '10px auto'
  }

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1" data-aos="zoom-in-up">
        <span>Projects.</span>
      </h2>

      <div className="projects__container container grid">
        {/* LumineFrame */}
        <Card
          Image={projectImg + 'lumineframe.png'}
          Type="Website"
          Title="LumineFrame"
          Description="LumineFrame is a captivating online platform dedicated to showcasing stunning photo galleries."
          LinkDemoApp="https://lumineframe.winecoders.com"
          LinkSourceCode="https://github.com/OctaLectzz/lumineframe"
          Badges={Badge(['LARAVEL', 'QUASAR', 'MySQL'])}
        />

        {/* WheelsRent */}
        <Card
          Image={projectImg + 'wheelsrent.png'}
          Type="Website"
          Title="WheelsRent"
          Description="WheelsRent offers a seamless online car rental service, providing a wide selection of user-friendly cars for travel."
          LinkDemoApp="https://wheelsrent.winecoders.com"
          LinkSourceCode="https://github.com/OctaLectzz/WheelsRent"
          Badges={Badge(['LARAVEL', 'BOOTSTRAP', 'MySQL'])}
        />

        {/* PPLG 2 Class */}
        <Card
          Image={projectImg + 'pplg-2-class.png'}
          Type="Website"
          Title="PPLG 2 Class"
          Description="A website for the PPLG 2 class at SMK Muhammadiyah 1 Sukoharjo, there is an anonymous message on it."
          LinkDemoApp="https://pepeelgedua.vercel.app"
          LinkSourceCode="https://github.com/OctaLectzz/pplg2-class"
          Badges={Badge(['REACT', 'TAILWIND'])}
        />
      </div>

      <Link to="/projects" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show more...
      </Link>
    </section>
  )
}
