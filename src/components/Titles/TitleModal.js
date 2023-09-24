import React from "react";
import "./index.css";

export const TitleModal = ({
  icon,
  subtitle,
  secondSubtitle
}) => {
  return (
    <div>
      <i className={`services__icon-desk ${icon}`} />
      <h3 className="services__title-desk">
        {subtitle} <br></br> {secondSubtitle}
      </h3>
    </div>
  );
};
