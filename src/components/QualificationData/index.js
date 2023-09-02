/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css"

export function QualificationData({title, local, icon, date}) {
  return (
    <div className="qualification__data">
      <h3 className="qualification__area">{title}</h3>

      <div className="qualification__box">
        <span className="qualification__work">
          <i className={icon} id="qualification__icon-local"></i>
          {local}
        </span>

        <span className="qualification__work">
          <i className="bx bx-calendar-alt qualification__icon"></i>
          {date}
        </span>
      </div>
    </div>
  );
}
