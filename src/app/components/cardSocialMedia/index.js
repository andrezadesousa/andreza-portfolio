import React from "react";
import "./style.css";

export const CardSocialMedia = ({ url, icon }) => {
  return (
    <a href={url} target="_blank" className="card__social-media">
      <i className={icon}></i>
    </a>
  );
};
