/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { AboutImage } from "../../images/AboutImage"

import SecondTitle from "../../components/Titles/SecondTitle";

export default () => {
  return (
    <section className="about section container" id="about">
      <SecondTitle title="Sobre mim." />
      <div class="about__container grid">
        {/*<AboutImage />*/}
        <div class="about__data">
          <p class="about__description">
            Sou desenvolvedora Front-end à dois anos, graduada em Gestão da Tecnologia da Informação e apaixonada por
            desenvolver e criar páginas web. Atuei em diferentes projetos, web e
            mobile, sendo nacionais e internacionais. Tendo a oportunidade de trabalhar e conhecer diferentes tecnologias.
          </p>

          <div class="about__details">
            <p class="about__details-description">
              <i class="ri-map-pin-line about__details-icon"></i>
              Carapicuíba - São Paulo.
            </p>
            <p class="about__details-description">
              <i class="ri-user-line about__details-icon"></i>
              24 anos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
