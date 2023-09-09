import React  from "react";

const AritcleStudies = ({icon, title, description, date}) => {
  return (
    <article className="services__card">
        <div className="services__border"></div>

        <div className="services__content">
            <div className="services__icon">
                <div className="services__box"></div>
                <i className={icon}></i>
            </div>

            <h2 className="services__title">{title}</h2>

            <p className="services__description">{description}</p>
            <p className="services__description">{date}</p>
        </div>
    </article>
  );
};

export default AritcleStudies;
