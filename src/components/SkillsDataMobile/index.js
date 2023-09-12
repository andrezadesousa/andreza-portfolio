import React from "react";

export const SkillsDataMobile = ({name, number, skillsName}) => {
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{number}</span>
      </div>
      <div className="skills__bar">
        <span className={`skills__percentage ${skillsName}`}></span>
      </div>
    </div>
  );
};
