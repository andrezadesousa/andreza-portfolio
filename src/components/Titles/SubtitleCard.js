import React from "react";
import "./index.css"

export const SubtitleCard = ({ firstTitle, secondTitle }) => {
  return (
    <h4 className="card__modal-title">
      {firstTitle} <br></br> {secondTitle}
    </h4>
  );
};
