import React from "react";
import "./index.css";

export const ArticleExperienceDesktop = ({
  image,
  date,
  title,
  description,
  tech,
  id,
}) => {
  return (
    <article className="experience__card shadow-medium">
      <div className="experience__image">
        <img src={image} className="experience__img" alt="experience" id={id} />
      </div>

      <div className="experience__content">
        <h2 className="experience__title">{title}</h2>
        <h3 className="experience__subtitle">{date}</h3>
        <p className="experience__description">{description}</p>
        <h3 className="experience__tech-desktop">{tech}</h3>
      </div>
    </article>
  );
};
