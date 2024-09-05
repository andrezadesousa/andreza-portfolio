import React from "react";
import "./style.css";

import { SectionLayout } from "../../components/sectionLayout";
import { CardSocialMedia } from "../../components/cardSocialMedia";
import { socialMediaData } from "../../constants/social-media.constants.ts";

import Girl from "../../assets/images/girl.png";
import { About } from "../about";

export const Home = () => {
  return (
    <>
      <SectionLayout>
        <div className="home__container">
          <div className="home__content">
            <p className="home__title">
              Olá, eu sou <b>Andreza.</b> Desenvolvedora <b>Frontend</b>,
              morando no <b>Brasil</b>.
            </p>
            <p className="home__text">
              Sou graduada em Gestão da Tecnologia da Informação e apaixonada
              por desenvolver e criar páginas web. Atuei em diferentes projetos,
              web e mobile, sendo eles nacionais e internacionais. Tendo a
              oportunidade de trabalhar e conhecer diferentes tecnologias.
            </p>
            <div className="home__social-media">
              {socialMediaData.map((socialMedia) => (
                <CardSocialMedia
                  key={socialMedia.url}
                  url={socialMedia.url}
                  icon={socialMedia.icon}
                />
              ))}
            </div>
          </div>
          <img src={Girl} alt="girl" className="home__img" />
        </div>
      </SectionLayout>
      <About />
    </>
  );
};
