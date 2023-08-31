import React from "react";
import "./index.css";

import Button from "../Button/Button";

const AritcleProjects = ({
  image,
  subtitle,
  title,
  description,
  link,
  iconTec1,
  iconTec2,
  iconTec3,
  iconTec4,
  iconTec5
}) => {
  return (
    <article className="projects__card">
      <div className="projects__image">
        <img src={image} className="projects__img" alt="Projects" />

        <Button
          id="projects__button"
          href="#/"
          className="ri-arrow-right-up-line"
        />
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle">{subtitle}</h3>
        <h2 className="projects__title">{title}</h2>
        <p className="projects__description">{description}</p>
      </div>

      <div className="projects__buttons">
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          className="projects__link"
        >
          <i className="ri-github-line"></i>View
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec1}></i>
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec2}></i>
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec3}></i>
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec4}></i>
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec5}></i>
        </a>
      </div>
    </article>
  );
};

export default AritcleProjects;
