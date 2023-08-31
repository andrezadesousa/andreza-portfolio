import React from "react";
import "./index.css";

const ButtonProjects = ({ link, title }) => {
  return (
    <div className="projects__buttons">
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="projects__link"
      >
        <i className="ri-github-line"></i>
        {title}
      </a>
    </div>
  );
};

export default ButtonProjects;
