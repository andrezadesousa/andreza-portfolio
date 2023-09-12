import React from "react";
import "./index.css";

export const StudiesIconMobile = ({firstText, secondText}) => {
  return (
    <div className="qualification__tabs">
      <div className="qualification__button button-flex">
        <i class="ri-graduation-cap-line qualification__icon"></i>
        {firstText}
      </div>
      <div className="qualification__button button-flex">
        <i class="ri-pencil-ruler-line qualification__icon"></i>
        {secondText}
      </div>
    </div>
  );
};
