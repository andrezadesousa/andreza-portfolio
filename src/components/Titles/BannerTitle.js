import React from "react";
import "./index.css";

export const BannerTitle = ({ firstTitle, secondTitle }) => {
  return (
    <h2 className="banner__title-center banner__title">
      {firstTitle} <br></br>{secondTitle}
    </h2>
  );
};
