import "/src/assets/css/pages/project.css";
import { Link } from "react-router-dom";
import { Card } from "/src/components/Card";
import { Badge } from "/src/components/Badge";

export const Project = () => {
  const projectImg = "/img/projects/";

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    width: "35vh",
    height: "6vh",
    margin: "10px auto",
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>

      <div className="projects__container container grid">
        {/* Simple CMS */}
        <Card
          Image={projectImg + "Simple CMS.png"}
          Type="Website"
          Title="Simple CMS"
          Description="A website for spreading news, created using the Bootstrap and Laravel 9 framework."
          LinkSourceCode="https://github.com/OctaLectzz/octa-project-bootcamp"
          Badges={Badge(["LARAVEL", "BOOTSTRAP", "MySQL"])}
        />

        {/* WheelsRent */}
        <Card
          Image={projectImg + "WheelsRent.png"}
          Type="Website"
          Title="WheelsRent"
          Description="A car rental website that allows users to easily rent cars online. Built using Laravel 10 framework and Bootstrap."
          LinkSourceCode="https://github.com/OctaLectzz/WheelsRent"
          Badges={Badge(["LARAVEL", "BOOTSTRAP", "MySQL"])}
        />

        {/* Lotus */}
        <Card
          Image={projectImg + "Lotus.png"}
          Type="Website"
          Title="Lotus"
          Description="A news website that allows users or admins to add, edit and delete posts. Built using Laravel API and React JS."
          LinkSourceCode="https://github.com/OctaLectzz/CMS-Project"
          Badges={Badge(["LARAVEL", "REACT", "BOOTSTRAP", "MySQL"])}
        />
      </div>
      <Link to="/projects" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show more...
      </Link>
    </section>
  );
};
