import "./../../index.css";
import { Card } from "../Card";
import { Link } from "react-router-dom";

export const Project = () => {
  const projectImg = "/img/projects/";

  const badge = {
    HTML: {
      href: "https://id.wikipedia.org/wiki/HTML",
      className: "badge HTML__badge",
      text: "HTML",
    },
    CSS: {
      href: "https://id.wikipedia.org/wiki/CSS",
      className: "badge CSS__badge",
      text: "CSS",
    },
    PHP: {
      href: "https://www.php.net/",
      className: "badge PHP__badge",
      text: "PHP",
    },
    MySQL: {
      href: "https://www.mysql.com/",
      className: "badge MySQL__badge",
      text: "MySQL",
    },
    BOOTSTRAP: {
      href: "hhttps://getbootstrap.com/",
      className: "badge BOOTSTRAP__badge",
      text: "BOOTSTRAP",
    },
    LARAVEL: {
      href: "https://laravel.com/",
      className: "badge LARAVEL__badge",
      text: "LARAVEL",
    },
    REACT: {
      href: "https://react.dev/",
      className: "badge REACT__badge",
      text: "REACT JS",
    },
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    width: "25vh",
    height: "6vh",
    margin: "auto",
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
          Badges={[badge.LARAVEL, badge.BOOTSTRAP, badge.MySQL]}
        />

        {/* WheelsRent */}
        <Card
          Image={projectImg + "WheelsRent.png"}
          Type="Website"
          Title="WheelsRent"
          Description="A car rental website that allows users to easily rent cars online. Built using Laravel 10 framework and Bootstrap."
          LinkSourceCode="https://github.com/OctaLectzz/WheelsRent"
          Badges={[badge.LARAVEL, badge.BOOTSTRAP, badge.MySQL]}
        />

        {/* Lotus */}
        <Card
          Image={projectImg + "Lotus.png"}
          Type="Website"
          Title="Lotus"
          Description="A news website that allows users or admins to add, edit and delete posts. Built using Laravel API and React JS."
          LinkSourceCode="https://github.com/OctaLectzz/CMS-Project"
          Badges={[badge.LARAVEL, badge.REACT, badge.BOOTSTRAP, badge.MySQL]}
        />
      </div>
      <Link to="/projects" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show more...
      </Link>
    </section>
  );
};
