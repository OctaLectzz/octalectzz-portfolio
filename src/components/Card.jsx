export const Card = (props) => {
  const Image = props.Image;
  const Type = props.Type;
  const Title = props.Title;
  const Description = props.Description;
  const LinkSourceCode = props.LinkSourceCode;
  const LinkDemoApp = props.LinkDemoApp;
  const Badges = props.Badges;

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

        <div className="badge__header">
          {Badges.map((badge, index) => (
            <a
              key={index}
              href={badge.href}
              target="_blank"
              className={badge.className}
            >
              {badge.text}
            </a>
          ))}
        </div>
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
