import "/src/assets/css/pages/home.css";

export const Hero = () => {
  const imagePath = "/img/";

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">Octavyan Putra R.</h1>

        <div className="home__perfil">
          <div className="home__image">
            <img
              src={imagePath + "Home Profile.jpg"}
              alt="image"
              className="home__img"
            />
            <div className="home__shadow"></div>

            <img
              src={imagePath + "curved-arrow.svg"}
              alt=""
              className="home__arrow"
            />
            <img
              src={imagePath + "random-lines.svg"}
              alt=""
              className="home__line"
            />

            <div className="geometric-box"></div>
          </div>

          <div className="home__social">
            <a
              href="https://www.instagram.com/octalectzz/"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://web.facebook.com/octavyan.r"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-facebook-circle-line"></i>
            </a>

            <a
              href="https://github.com/OctaLectzz"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>

        <div className="home__info">
          <p className="home__description">
            <b>Fullstack Developer</b>, with knowledge in web development and
            design, I offer the best projects resulting in quality work.
          </p>

          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>

            <span className="home__scroll-text">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};
