import React from "react";
import "./index.css";

export const BannerCard = ({number, title, description}) => {
  return (
    <div className="banner__card">
      <div className="banner__card-number">{number}</div>
      <h3 className="banner__card-title">{title}</h3>
      <p className="banner__card-description">
        {description}
      </p>
    </div>
  );
};
