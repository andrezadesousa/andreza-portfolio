import React from "react";

export const SubtitleCard = ({ firstTitle, secondTitle }) => {
  return (
    <h4 className="card__modal-title">
      {firstTitle} <br></br> {secondTitle}
    </h4>
  );
};
