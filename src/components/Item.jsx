export const Item = ({ Name, Icon, Experience }) => {
  return (
    <article className="skill__icon">
      <img src={Icon} alt="Skill icon" className="skill__img" />
      <div>
        <h3>{Name}</h3>
        <p>{Experience}</p>
      </div>
    </article>
  );
};
