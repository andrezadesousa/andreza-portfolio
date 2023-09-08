/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";
import WorkImage from "../../images/work.svg";

export function Teste() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <section className="section">
      <div className="shadow-medium qualification-card-item border-radius_small w-dropdown">
        <div className="card-banner-mobile-view-logo border-radius_small primary-pure">
          <img src={WorkImage} alt="teste"></img>
        </div>

        <div className="card-banner-mobile-view-text">
          <div className="card__title">Desenvolvedora Frontend Jr</div>
          <div className="card__nav">
            {showLinks ? (
              <i
                class="bx bx-chevron-up"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              ></i>
            ) : (
              <i
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
                class="bx bx-chevron-down"
              ></i>
            )}
          </div>
        </div>
      </div>
      
      <div
        className={`nav__menu-card ${
          showLinks ? "active" : "inactive"
        } shadow-medium`}
        id="nav-menu"
      >
        <span className="nav__title">Dez 2021 - Jan 2023</span>
        <h3 className="nav__name">Certsys Tecnologia da Informação</h3>
        <ul className="nav__list">
          <p>
            Atuei em uma empresa de consultoria. Participando de diferentes
            projetos, internacionais e nacionais, como desenvolvedora web. Todos
            os projetos em que atuei foram com metodologia ágil Scrum e com as
            tecnologias
          </p>
          <p className="nav__tech">
            React, React Native, Angular, DevExtreme Angular Components, NodeJS,
            JavaScript e TypeScript.
          </p>
        </ul>
      </div>
    </section>
  );
}
