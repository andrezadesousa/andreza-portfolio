import React from "react";
import "./index.css";

import ServiceTitle from "../Titles/ServiceTitle";

const Aritcle = ({icon, title, description}) => {
  return (
    <article className="services__card">
      <div className="services__border"></div>

      <div className="services__content">

        <div className="services__icon">
          <div className="services__box"></div>
          <i className={icon}></i>
        </div>

        <ServiceTitle title={title} />

        <p className="services__description">
            {description}
        </p>
      </div>
    </article>
  );
};

export default Aritcle;
