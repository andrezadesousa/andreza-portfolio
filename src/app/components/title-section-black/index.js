import React from "react";
import "./style.css";

export const TitleSectionBlack = ({ title, subtitle }) => {
  return (
    <div className="back__title-container">
      <h1 className="back__title-text">
        {title} <b>{subtitle}</b>
      </h1>
    </div>
  );
};
