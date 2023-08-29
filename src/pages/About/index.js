/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import AboutPerfil from "../../images/image-perfil.jpeg";
import Line from "../../images/random-lines.svg";

import Button from "../../components/Button/Button";
import ButtonGhost from "../../components/Button/ButtonGhost";
import FirstTitle from "../../components/Titles/FirstTitle";

export default () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">

        <FirstTitle title="Sobre mim." />
        
        <div className="about__perfil">
          <div className="about__image">
            <img src={AboutPerfil} alt="About" className="about__img"></img>
            <div className="about__shadow"></div>
            <img src={Line} className="about__line" alt="Line"></img>
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            Apaixonada por criar <b>Páginas da Web</b> com{" "}
            <b>Interface de usuário UI/UX</b>, tenho dois anos de experiência
            entre clientes nacionais e internaxionais.
          </p>

          <ul className="about__list">
            <li className="about__item">
              <b>Minhas Skills são:</b> HTML, CSS, JavaScript, ReactJS,
              ReactNative, Angular Git, GitHub &Figma.
            </li>
          </ul>

          <div className="about__buttons">
            <Button 
              href="/contact" 
              className="ri-send-plane-line"
              title="Me contate" />

            <ButtonGhost
              href="#/"
              className="ri-linkedin-box-line" />
          </div>
        </div>
      </div>
    </section>
  );
};
