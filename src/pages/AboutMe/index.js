/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { AboutLogo } from "../../components/LogosImage/AboutLogo";

export default () => {
  return (
    <section className="about section" id="about">
      <SecondTitle title="Sobre mim." />
      <div class="about__container bd-grid-about">
        <AboutLogo />

        <div>
          <h2 className="about__subtitle">Olá, meu nome é Andreza</h2>
          <p class="about__text">
            Sou desenvolvedora Front-end à dois anos,
            graduada em Gestão da Tecnologia da Informação e apaixonada por
            desenvolver e criar páginas web. Atuei em diferentes projetos, web e
            mobile, sendo nacionais e internacionais. Tendo a oportunidade de
            trabalhar e conhecer diferentes tecnologias.
          </p>
          <p class="about__text">
            Gosto de dedicar meu tempo livre em estudos com foco em temas que,
            garantidamente, são relevantes para minha carreira, como
            desenvolvimento pessoal, desenvolvimento web e desenvolvimento
            fullstack. Meu <a href="/">GitHub</a> tem diversos projetos
            públicos, onde aplico meus conhecimentos que desenvolvo através dos
            estudos, tornando meu portfólio pessoal
          </p>
        </div>
      </div>
    </section>
  );
};
