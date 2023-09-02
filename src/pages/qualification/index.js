/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import SectionSubtitle from "../../components/Titles/SectionSubtitle";

export default () => {
  return (
    <section className="qualification section bd-container" id="qualification">
      <SectionSubtitle title="Experiência & Educação" />
      <SecondTitle title="Qualificação." />

      <div className="qualification__container bd-grid">
        <div className="qualification__content">
          <h2 className="qualification__title">
            <i className="bx bx-briefcase-alt qualification__title-icon"></i>
            Experiência
          </h2>

          <div className="bd-grid">
            <div className="qualification__data">
              <h3 className="qualification__area">Desenvolvedora Frontend Jr</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-briefcase-alt qualification__-icon"></i>
                  Certsys - São Paulo
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Dez 2021 - Jan 2023
                </span>
              </div>
            </div>
            
            <div className="qualification__data">
              <h3 className="qualification__area">Trainee FullStack Jr</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-briefcase-alt qualification__-icon"></i>
                  Certsys - São Paulo
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Mai 2021 - Dez 2022
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="qualification__content">
          <h2 className="qualification__title">
            <i className="bx bx-book-bookmark qualification__title-icon"></i>
            Educação
          </h2>

          <div className="bd-grid">
            <div className="qualification__data">
              <h3 className="qualification__area">Gestão da Tecnologia da Informação</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__-icon"></i>
                  Faculdade de Tecnologia (FATEC) - Barueri
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Ago 2018 - Ago 2021
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__area">Trilha Conectar do Discover</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__-icon"></i>
                  Rocketseat - Brasil
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2023
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__area">Ignite Lab | Bootcamp</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__-icon"></i>
                  Rocketseat - Brasil
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2023
                </span>
              </div>
            </div>        

          </div>

        </div>
      </div>
    </section>
  );
};
