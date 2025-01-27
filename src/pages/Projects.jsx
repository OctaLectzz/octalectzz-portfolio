import projects from '/src/data/projects.json'
import { Card } from '/src/components/Card'
import { Badge } from '/src/components/Badge'

export const Projects = () => {
  return (
    <section className="projects section" id="projects">
      {/* My Projects */}
      <h2 className="section__title-1" data-aos="fade-right">
        <span>My Projects :</span>
      </h2>
      <div className="subtitle" data-aos="fade-left">
        <span>&quot;Showcasing my diverse projects in one place - a testament to creativity, innovation, and passion.&quot;</span>
      </div>
      <div className="projects__container container grid">
        {projects.MyProjects.map((project, id) => (
          <Card
            Delay={id * 100}
            key={project.Title}
            Image={project.Image}
            Type={project.Type}
            Title={project.Title}
            Description={project.Description}
            LinkSourceCode={project.LinkSourceCode}
            LinkDemoApp={project.LinkDemoApp}
            Badges={Badge(project.Badges)}
          />
        ))}
      </div>

      {/* Collaboration Projects */}
      <h2 className="section__title-1" style={{ marginTop: '100px' }}>
        <span>Collaboration Projects :</span>
      </h2>
      <div className="subtitle" style={{ marginBottom: '50px' }}>
        <span>&quot;Highlighting the Diversity of Collaborative Projects - A Testament to Collaboration, Innovation, and Dedication.&quot;</span>
      </div>

      {/* TimeWebId */}
      <div className="projects__container container grid">
        <div className="projects__collab-title">
          <div className="projects__collab-logo">
            Projects with
            <a href="https://timewebid.com" target="_blank" rel="noopener noreferrer" className="projects__timewebid">
              TimeWebId
            </a>
            <img src="/img/projects/TimeWebId/logo.png" alt="TimeWebId" className="projects__collab-img" />
          </div>
        </div>
      </div>
      <div className="projects__container container grid projects__collab">
        {projects.TimeWebIdProjects.map((project, id) => (
          <Card
            Delay={id * 100}
            key={project.Title}
            Image={project.Image}
            Type={project.Type}
            Title={project.Title}
            Description={project.Description}
            LinkSourceCode={project.LinkSourceCode}
            LinkDemoApp={project.LinkDemoApp}
            Badges={Badge(project.Badges)}
          />
        ))}
      </div>
    </section>
  )
}
