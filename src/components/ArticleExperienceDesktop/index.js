import React from "react";
import "./index.css";

export const ArticleExperienceDesktop = ({
  image,
  subtitle,
  title,
  description,
}) => {
  return (
    <article className="experience__card shadow-medium">
        <div className="experience__image">
          <img src={image} className="experience__img" alt="experience" />
        </div>

        <div className="experience__content">
          <h3 className="experience__subtitle">{subtitle}</h3>
          <h2 className="experience__title">{title}</h2>
          <p className="experience__description">{description}</p>
        </div>
    </article>
  );
};
