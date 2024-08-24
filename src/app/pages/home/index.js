import React from "react";
import "./style.css";
import { TitleSection } from "../../components/titleSection";

export const Home = () => {
  return (
    <section className="home section " id="home">
      <div className="home__container grid">
        <img
          className="home__image"
          src="https://media.licdn.com/dms/image/v2/D4D03AQE3rLLjfQ4YBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724525257776?e=1729728000&v=beta&t=kniZ3j3Y_2c9OSa8RVGFzvAdoOopJ3r5P9csz_Sc3EQ"
        />
        <div className="home__content">
          <TitleSection title="Sobre mim" />
          <p className="home__text">
            Olá, me chamo <strong>Andreza Sousa</strong> e atuo como
            desenvolvedora Front-end há dois anos.
          </p>
          <p className="home__text">
            Sou graduada em Gestão da Tecnologia da Informação e apaixonada por
            desenvolver e criar páginas web. Atuei em diferentes projetos, web e
            mobile, sendo eles nacionais e internacionais. Tendo a oportunidade
            de trabalhar e conhecer diferentes tecnologias.
          </p>
          <div className="home__phrase">
            <p>“Good design is good business.”</p>
            <p className="home__phrase-name">- Thomas J. Watson</p>
          </div>
        </div>
      </div>
    </section>
  );
};