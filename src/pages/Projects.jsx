import "./../index.css";
import { Footer } from "../layouts/Footer";
import { Navbar } from "../layouts/Navbar";
import { Card } from "../components/Card";

export const Projects = () => {
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

  return (
    <>
      <Navbar />
      <section className="projects section" id="projects">
        <h2 className="section__title-1">
          <span>Projects.</span>
        </h2>

        <div className="projects__container container grid">
          {/* Students List */}
          <Card
            Image={projectImg + "Students List.png"}
            Type="Website"
            Title="Students List"
            Description="A website that displays a list of students in a school. This website was created using HTML and CSS"
            LinkSourceCode="https://github.com/OctaLectzz/Daftar-Siswa"
            LinkDemoApp="https://lectzz-bisa-glory.netlify.app/"
            Badges={[badge.HTML, badge.CSS]}
          />

          {/* Simple TodoList */}
          <Card
            Image={projectImg + "Simple TodoList.png"}
            Type="App"
            Title="Simple TodoList"
            Description="Application to remember or save a list of activities that you want to do or have done. Created using PHP and MySQL"
            LinkSourceCode="https://github.com/OctaLectzz/TodoList"
            Badges={[badge.PHP, badge.BOOTSTRAP, badge.MySQL]}
          />

          {/* M-one Tech Internet Service */}
          <Card
            Image={projectImg + "M-one Tech Internet Service.png"}
            Type="Website"
            Title="M-one Tech Internet Service"
            Description="Website to serve the purchase of internet packages at affordable prices. Created using HTML dan Bootstrap CSS."
            LinkDemoApp="https://m-one-tech-octavyan.netlify.app/"
            LinkSourceCode="https://github.com/OctaLectzz/M-One-Tech-Internet-Service"
            Badges={[badge.HTML, badge.BOOTSTRAP]}
          />

          {/* Portfolio Example */}
          <Card
            Image={projectImg + "Portfolio Example.png"}
            Type="Website"
            Title="Portfolio Example"
            Description="This is an example of a Portfolio Website using the Bootstrap framework. Created using HTML dan Bootstrap."
            LinkDemoApp="https://portfolio-octavyan-xipplg2.netlify.app/"
            LinkSourceCode="https://github.com/OctaLectzz/Portfolio"
            Badges={[badge.HTML, badge.BOOTSTRAP]}
          />

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
      </section>
      <Footer />
    </>
  );
};
