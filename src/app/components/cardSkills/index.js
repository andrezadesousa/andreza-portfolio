import React from "react";
import "./style.css";

export const CardSkills = ({ icon, title }) => {
  return (
    <a to="" className="card__skills">
      <i className={icon}></i>
      {title}
    </a>
  );
};
