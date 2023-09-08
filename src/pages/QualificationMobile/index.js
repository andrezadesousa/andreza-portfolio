/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";

export function Teste() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <section className="section">
      <nav className="experience__nav container shadow-medium" id="experience-nav-mobile">
        <a href="/" className="experience__nav-logo">
          <span className="nav__logo-name">Desenvolvedora Frontend Jr</span>
        </a>

        <div
          className={`experience__nav-menu ${
            showLinks ? "active" : "inactive"
          } shadow-medium`}
          id="experience-nav-menu"
        >
          <span className="experience__nav-title">Dez 2021 - Jan 2023</span>
          <h3 className="experience__nav-name">Certsys Tecnologia da Informação</h3>
          <ul className="experience__nav-list">
            <p className="experience__description">
              Atuei em uma empresa de consultoria. Participando de diferentes
              projetos, internacionais e nacionais, como desenvolvedora web.
              Todos os projetos em que atuei foram com metodologia ágil Scrum e
              com as tecnologias
            </p>
            <p className="experience__tech">
              React, React Native, Angular, DevExtreme Angular Components,
              NodeJS, JavaScript e TypeScript.
            </p>
          </ul>
        </div>

        <div className="nav__buttons">
          <div
            onClick={() => {
              setShowLinks(!showLinks);
            }}
            className="nav__toggle"
            id="nav-toggle"
          >
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
      </nav>
    </section>
  );
}
