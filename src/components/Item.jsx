export const Item = ({ Name, Icon, Experience }) => {
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
