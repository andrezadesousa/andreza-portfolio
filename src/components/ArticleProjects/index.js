import React from "react";
import "./index.css";

import ServiceTitle from "../Titles/ServiceTitle";
import Button from "../Button/Button"

const Aritcle = ({}) => {
  return (
    <article className="projects__card">
        <div className="projects__image">
            <img className="projects__img" alt="Projects"></img>

            <a id="projects-button">
                <i className=""></i>
            </a>
        </div>
    </article>
  );
};

export default Aritcle;
