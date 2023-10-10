import React from "react";
import "./index.css";

export const DataRight = ({ title, subtitle, date }) => {
  return (
    <div>
      <h3 className="qualification__title">{title}</h3>
      <span className="qualification__subtitle">{subtitle}</span>
      <div className="qualification__calendar">
        <i class="ri-calendar-2-line"></i>
        {date}
      </div>
    </div>
  );
};
