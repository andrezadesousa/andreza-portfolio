import React from "react";
import "./index.css";

const SkillsTitle = ({ title, icon }) => {
  return (
    <h3 className="skills__title">
      <i className={icon}></i>
      {title}
    </h3>
  );
};

export default SkillsTitle;
