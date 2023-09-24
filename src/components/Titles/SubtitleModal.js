import React from "react";
import "./index.css";

export const SubtitleModal = ({ firstTitle, secondTitle }) => {
  return (
    <h4 className="services__modal-title">
      {firstTitle} <br></br> {secondTitle}
    </h4>
  );
};
