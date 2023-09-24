import React from "react";
import "./index.css";

export const ArticleModal = ({ description }) => {
  return (
    <ul className="services__modal-services grid">
      <li className="services__modal-service">
        <i className="ri-checkbox-circle-line services__modal-icon"></i>
        <p>{description}</p>
      </li>
    </ul>
  );
};
