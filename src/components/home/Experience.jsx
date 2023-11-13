import '../../assets/css/experience.css'

export const Service = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title-2">
        <span>Experience.</span>
      </h2>

      <div className="services__container container grid">
        <article className="services__card">
          <div className="services__border"></div>

          <div className="services__content">
            <div className="services__icon">
              <div className="services__box"></div>
              <i className="ri-layout-4-line"></i>
            </div>

            <h2 className="services__title">Fullstack Developer</h2>

            <p className="services__description">
              Beautiful and elegant designs with interfaces that are intuitive,
              efficient and pleasant to use for the user.
            </p>
          </div>
        </article>

        <article className="services__card">
          <div className="services__border"></div>

          <div className="services__content">
            <div className="services__icon">
              <div className="services__box"></div>
              <i className="ri-code-box-line"></i>
            </div>

            <h2 className="services__title">Development</h2>

            <p className="services__description">
              Custom web development tailored to your specifications, designed
              to provide a flawless user experience.
            </p>
          </div>
        </article>

        <article className="services__card">
          <div className="services__border"></div>

          <div className="services__content">
            <div className="services__icon">
              <div className="services__box"></div>
              <i className="ri-smartphone-line"></i>
            </div>

            <h2 className="services__title">Mobile App</h2>

            <p className="services__description">
              Design and transform website projects into mobile apps to provide
              a seamless user experience.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
