/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";

export default () => {
  return (
    <section className="about section bd-container" id="about">
      <SecondTitle title="Sobre mim." />

      <div className="about__container bd-grid">
        <div className="about__data bd-grid">
          <p className="about__description">
            <span>
              Olá, eu sou a Andreza<br></br>
            </span>
            Sou desenvolvedora Front-end à dois anos e apaixonada por
            desenvolver e criar páginas web. Atuei em diferentes projetos, web e
            mobile, sendo nacionais e internacionais.
          </p>

          <div className="about__description-data">
            <div>
              <span className="about__number">02</span>
              <span className="about__achievement">Anos de experiência</span>
            </div>

            <div>
              <span className="about__number">4+</span>
              <span className="about__achievement">Projetos entregues</span>
            </div>

            <div>
              <span className="about__number">2</span>
              <span className="about__achievement">
                Projetos internacionais
              </span>
            </div>
          </div>
        </div>
        {/*<img src={AboutPerfil} alt="Perfil" className="about__img"></img>*/}
      </div>
    </section>
  );
};
