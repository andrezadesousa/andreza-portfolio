import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const CardSocialMedia = ({ url, icon }) => {
  return (
    <Link to={url} target="_blank" className="card__social-media">
      <i className={icon}></i>
    </Link>
  );
};
