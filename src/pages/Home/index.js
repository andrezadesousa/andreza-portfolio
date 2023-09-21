/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import Perfil from "../../images/homeImage.jpeg";

export default () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__img-bg">
          <img src={Perfil} alt="Perfil" className="home__img" />
        </div>
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/sousa-andreza/"
            rel="noreferrer"
            target="__blank"
            className="home__social-link"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/andrezadesousa"
            rel="noreferrer"
            target="__blank"
            className="home__social-link"
          >
            Github
          </a>
          <a
            href="/"
            rel="noreferrer"
            target="__blank"
            className="home__social-link"
          >
            Instagram
          </a>
        </div>
        <div className="home__data">
          <h1 className="home__title">
            Andreza <b>Sousa</b>
          </h1>
          <p className="home__description">
            Desenvolvedora Frontend à dois anos e aspirante a desenvolvedora
            FullStack. Sou graduada em Gestão da Tecnologia da Informação e
            apaixonada por desenvolver e criar páginas web. Atuei em diferentes
            projetos, web e mobile, sendo nacionais e internacionais. Tendo a
            oportunidade de trabalhar e conhecer diferentes tecnologias.
          </p>
          <span className="home__phrase">“Good design is good business.”</span>
          <cite></cite>- Thomas J. Watson
          <div className="home__btns">
            <a href="/" className="buttons button--gray button--small">
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
