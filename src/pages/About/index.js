/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import AboutPerfil from "../../images/teste2.jpeg";

import SectionTitle from "../../components/Titles/SectionTitle";
import SectionSubtitle from "../../components/Titles/SectionSubtitle";

export default () => {
  return (
    <section className="about section bd-container" id="about">
      <SectionSubtitle title="My history" />
      <SectionTitle title="Sobre mim." />

      <div className="about__container bd-grid">
        <div className="about__data bd-grid">
          <p className="about__description">
            Sou desenvolvedora Front-end e apaixonada por desenvolvimento web 
          </p>

          <div>
            <span className="about__number">05</span>
            <span className="about__achievement">Years off Experience</span>
          </div>

          <div>
            <span className="about__number">29+</span>
            <span className="about__achievement">Projects completes</span>
          </div>

          <div>
            <span className="about__number">07</span>
            <span className="about__achievement">Best work awards</span>
          </div>
        </div>
        <img src={AboutPerfil} alt="Perfil" className="about__img"></img>
      </div>
    </section>
  );
};
