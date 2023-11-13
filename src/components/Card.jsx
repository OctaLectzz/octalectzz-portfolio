export const Card = ({
  Image,
  Type,
  Title,
  Description,
  LinkSourceCode,
  LinkDemoApp,
  Badges,
}) => {
  const cursor = {
    cursor: "pointer",
  };

  return (
    <article className="projects__card">
      <div className="projects__image">
        <img src={Image} alt="image" className="projects__img" />

        <a
          href={LinkDemoApp}
          target="_blank"
          className="projects__button button"
          style={cursor}
        >
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle">{Type}</h3>
        <h2 className="projects__title">{Title}</h2>

        <p className="projects__description">{Description}</p>

        <div className="badge__header">{Badges}</div>
      </div>

      <div className="projects__buttons">
        <a
          href={LinkSourceCode}
          target="_blank"
          className="projects__link"
          style={cursor}
        >
          <i className="ri-github-line"></i> Source Code
        </a>

        <a
          href={LinkDemoApp}
          target="_blank"
          className="projects__link"
          style={cursor}
        >
          <i className="ri-dribbble-line"></i> Demo App
        </a>
      </div>
    </article>
  );
};
