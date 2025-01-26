import '/src/assets/css/pages/about.css'

export const About = () => {
  const imagePath = '/img/'

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1" data-aos="fade-down">
          <span>About Me.</span>
        </h2>

        {/* Photo */}
        <div className="about__perfil" data-aos="fade-left">
          <div className="about__image">
            <img src={imagePath + 'about-profile.jpg'} alt="profile image" className="about__img" />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <img src={imagePath + 'random-lines.svg'} alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
        </div>

        {/* Description */}
        <div className="about__info" data-aos="fade-right">
          <p className="about__description">
            Hi there! I&apos;m <b>Octavyan Putra Ramadhan</b>, a dedicated Fullstack Web Developer. With <b>3 years</b> of experience, I thrive on <b>tackling challenges head-on</b> and{' '}
            <b>delivering innovative solutions</b>.
          </p>
          <p className="about__description">
            My unique blend of <b>Creative Problem Solver</b> and <b>commitment</b> to collaboration make me an asset to any team. Let&apos;s connect and{' '}
            <b>create something extraordinary together!</b>
          </p>

          <ul className="about__list">
            <li className="about__item">
              <b>Tools :</b> HTML, CSS, JavaScript, PHP, Git, Dart.
            </li>
            <li className="about__item">
              <b>Frameworks :</b> Bootstrap, Tailwind CSS, Laravel, React JS, Flutter, Vue JS, Quasar.
            </li>
            <li className="about__item">
              <b>Others :</b> Canva, After Effect, Adobe Lightroom, Figma, Alight Motion, Capcut.
            </li>
          </ul>

          <div className="about__buttons">
            <a href="#contact" className="button">
              <i className="ri-send-plane-line"></i> Contact Me
            </a>

            <a href="https://www.linkedin.com/in/octalectzz" target="_blank" rel="noopener noreferrer" className="button__ghost">
              <i className="ri-linkedin-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
