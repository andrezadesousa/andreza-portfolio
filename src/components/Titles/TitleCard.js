import React from "react";

export const TitleCard = ({icon, firstTitle, secondTitle}) => {
  return (
    <div>
      <i className={`card__icon ${icon}`} />
      <h3 className="card__title">
        {firstTitle} <br></br> {secondTitle}
      </h3>
    </div>
  );
};


