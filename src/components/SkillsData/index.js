import React from "react";

const SkillsData = ({ image, className, title }) => {
  return (
    <div className="skills__data">
      <div className="skills__blob">
        <img src={image} alt="skills" className={className} />
      </div>

      <h3 className="skills__name">{title}</h3>
      {/*<span className="skills__subtitle">Intermediate</span>*/}
    </div>
  );
};

export default SkillsData;
