import React from "react";
import "./index.css";

export const ArticleProjects = ({
  image,
  subtitle,
  title,
  description,
  link,
  iconTec1,
  iconTec2,
  iconTec3,
  iconTec4,
  textIcon1,
  textIcon2,
  textIcon3,
  textIcon4,
}) => {
  return (
    <article className="projects__card shadow-medium">
      <div className="projects__image">
        <img src={image} className="projects__img" alt="Projects" />
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
          {textIcon1}
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec2}></i>
          {textIcon2}
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec3}></i>
          {textIcon3}
        </a>
        <a href="#/" className="projects__link">
          <i className={iconTec4}></i>
          {textIcon4}
        </a>
      </div>
    </article>
  );
};
