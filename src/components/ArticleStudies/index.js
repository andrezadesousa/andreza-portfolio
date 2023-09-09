import React from "react";
import "./index.css"

const AritcleStudies = ({ icon, title, subtitle, description, date }) => {
  return (
    <article className="studies__card">
      <div className="studies__border"></div>

      <div className="studies__content">
        <div className="studies__icon">
          <div className="studies__box"></div>
          <i className={icon}></i>
        </div>
        <h2 className="studies__title">{title}</h2>
        <p className="studies__description subtitle">{subtitle}</p>
        <p className="studies__description">{description}</p>
        <p className="studies__description date">
          <i class="ri-calendar-check-line"></i>
          {date}
        </p>
      </div>
    </article>
  );
};

export default AritcleStudies;
