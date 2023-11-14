import React from "react";
import "../assets/css/skill.css";
import allSkill from "../data/skills.json";

export const Skills = () => {
  return (
    <section className="skillContainer" id="experience">
      <h2 className="section__title-2">
        <span>My Skills :</span>
      </h2>
      {/* FRONTEND DEVELOPMENT */}
      <h2 className="title">FrontEnd Development :</h2>
      <div className="content">
        <div className="skills">
          {allSkill.Frontend.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} width={80} />
                </div>
                <p className="title__skill">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BACKEND DEVELOPMENT */}
      <h2 className="title">Backend Development :</h2>
      <div className="content">
        <div className="skills">
          {allSkill.Backend.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} width={80} />
                </div>
                <p className="title__skill">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* OTHERS */}
      <h2 className="title">Others :</h2>
      <div className="content">
        <div className="skills">
          {allSkill.Others.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} width={80} />
                </div>
                <p className="title__skill">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
