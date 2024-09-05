import React from "react";
import "./style.css";

export const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="title__container">
      <h1 className="title__text">
        {title} <b>{subtitle}</b>
      </h1>
    </div>
  );
};
