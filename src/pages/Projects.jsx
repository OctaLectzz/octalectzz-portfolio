import projects from "/src/data/projects.json";
import { Card } from "/src/components/Card";
import { Badge } from "/src/components/Badge";

export const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>My Projects :</span>
      </h2>
      <div className="subtitle">
        <span>
          "Showcasing my diverse projects in one place – a testament to
          creativity, innovation, and passion."
        </span>
      </div>

      <div className="projects__container container grid">
        {projects.map((project) => (
          <Card
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
  );
};
