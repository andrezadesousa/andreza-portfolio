import React from "react";

const SkillsData = ({ image, className, title }) => {
  return (
    <div className="skills__data-desktop">
      <div className="skills__blob-desktop">
        <img src={image} alt="skills" className={className} />
      </div>

      <h3 className="skills__name-desktop">{title}</h3>
      {/*<span className="skills__subtitle-desktop">Intermediate</span>*/}
    </div>
  );
};

export default SkillsData;
