import React from "react";
import "./style.css";

export const Testimony = ({ text, image, name, position }) => {
  return (
    <div className="testimony__box">
      <p className="testimony__text">{text}</p>
      <div className="testimony__infos">
        <img
          className="testimony__image"
          src={image}
          alt="Testimony image"
        ></img>
        <div className="testimony__infos-name">
          <h1>{name}</h1>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};
