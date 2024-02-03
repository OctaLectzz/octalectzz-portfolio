import "/src/assets/css/home/about.css";

export const About = () => {
  const imagePath = "/img/";

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About Me.</span>
        </h2>

        <div className="about__perfil">
          <div className="about__image">
            <img
              src={imagePath + "About Profile.jpg"}
              alt="image"
              className="about__img"
            />

            <div className="about__shadow"></div>

            <div className="geometric-box"></div>
            <img
              src={imagePath + "random-lines.svg"}
              alt=""
              className="about__line"
            />
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            Hi everyone, My full name is <b>Octavyan Putra Ramadhan</b>. {/* I am a
            student of <b>SMK Muhammadiyah 1 Sukoharjo</b>. */} I live in Sukoharjo,
            Central Java, Indonesia.{/* I was born in Sukoharjo On{" "}
            <b>04 October 2006</b>. */} My hobbies are <b>Playing Games</b> and <b>Reading Comic</b>.
          </p>
          {/* <p className="about__description">
            My hobbies are <b>Playing Games</b> and <b>Reading Comic</b>. I
            started to enter the IT world in 2021. I want to be a{" "}
            <b>Fullstack Web Developer</b>.
          </p> */}

          <ul className="about__list">
            <li className="about__item">
              <b>Tools :</b> HTML, CSS, JavaScript, PHP, Git, Dart.
            </li>
            <li className="about__item">
              <b>Framework :</b> Bootstrap, Tailwind CSS, Laravel, React JS,
              Flutter, Vue JS, Quasar.
            </li>
            <li className="about__item">
              <b>Other :</b> Canva, After Effect, Adobe Lightroom, Figma, Alight
              Motion, Capcut.
            </li>
          </ul>

          <div className="about__buttons">
            <a href="#contact" className="button">
              <i className="ri-send-plane-line"></i> Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/octalectzz"
              target="_blank"
              className="button__ghost"
            >
              <i className="ri-linkedin-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
