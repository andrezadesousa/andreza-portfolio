import React from "react";
import "./index.css";

export const CardModal = ({description}) => {
  return (
    <ul className="card__modal-card grid">
      <li className="card__modal-cards">
        <i className="ri-checkbox-circle-line card__modal-icon"></i>
        <p>{description}</p>
      </li>
      <li className="card__modal-cards">
        <i className="ri-checkbox-circle-line card__modal-icon"></i>
        <p>Métodologia Scrum</p>
      </li>
    </ul>
  );
};
