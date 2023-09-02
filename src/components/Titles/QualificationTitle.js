import React from "react";
import "./index.css";

const QualificationTitle = ({ title, icon}) => {
  return (
    <h2 className="qualification__title">
      <i className={icon} id="qualification__title-icon"></i>
        {title}
    </h2>
  );
};

export default QualificationTitle;
