import React, { useState } from "react";
import "./index.css";


const AritcleExperience = ({ title, year, subtitle, description, tech }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav
      className="experience__nav container shadow-medium"
      id="experience-nav-mobile"
    >
      <a href="/" className="experience__nav-logo">
        <span className="nav__logo-name">{title}</span>
      </a>

      <div
        className={`experience__nav-menu ${showLinks ? "active" : "inactive"
          } shadow-medium`}
        id="experience-nav-menu"
      >
        <span className="experience__nav-title">{year}</span>
        <h3 className="experience__nav-name">
          {subtitle}
        </h3>
        <ul className="experience__nav-list">
          <p className="experience__description">
            {description}
          </p>
          <p className="experience__tech">
            {tech}
          </p>
        </ul>
      </div>

      <div className="nav__buttons">
        <div
          onClick={() => {
            setShowLinks(!showLinks);
          }}
          className="nav__toggle"
          id="nav-toggle"
        >
          {showLinks ? (
            <i
              class="bx bx-chevron-up"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            ></i>
          ) : (
            <i
              onClick={() => {
                setShowLinks(!showLinks);
              }}
              class="bx bx-chevron-down"
            ></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AritcleExperience;
