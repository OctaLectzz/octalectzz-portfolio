export const Item = (props) => {
  const Name = props.Name;
  const Icon = props.Icon;
  const Experience = props.Experience;

  return (
    <article className="ex__article">
      <img src={Icon} alt="Skill icon" className="icon" />
      <div>
        <h3>{Name}</h3>
        <p>{Experience}</p>
      </div>
    </article>
  );
};
