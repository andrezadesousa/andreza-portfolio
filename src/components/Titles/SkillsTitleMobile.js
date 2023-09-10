import React from "react";
import "./index.css";

export const SkillsTitleMobile = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="skills__title-mobile">{title}</h1>
      <span className="skills__subtitle-mobile">{subtitle}</span>
    </div>
  );
};
