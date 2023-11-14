import { Card } from "../components/Card";
import projects from "../data/projects.json";
import { setBadges } from "../components/Badge";

export const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>My Projects :</span>
      </h2>

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
            Badges={setBadges(project.Badges)}
          />
        ))}
      </div>
    </section>
  );
};
