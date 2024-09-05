import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const CardSkills = ({ icon, title }) => {
  return (
    <Link to="" className="card__skills">
      <i className={icon}></i>
      {title}
    </Link>
  );
};
