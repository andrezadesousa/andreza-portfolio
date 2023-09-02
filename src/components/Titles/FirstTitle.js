import React from "react";
import "./index.css";

const FirstTitle = ({ title }) => {
  return (
    <h2 className="section__title-1">
      <span>{title}</span>
    </h2>
  );
};

export default FirstTitle;
