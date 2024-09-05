import React from "react";
import "./style.css";

import { SectionLayout } from "../../components/sectionLayout";
import { CardSocialMedia } from "../../components/cardSocialMedia";
import { socialMediaData } from "../../constants/social-media.constants.ts";
import { Skills } from "../skills";

import Girl from "../../assets/images/girl.png";

export const About = () => {
  return (
    <>
      <SectionLayout>
        <div className="about__container">
          <div className="about__content">
            <p className="about__title">
              Olá, eu sou <b>Andreza.</b> Desenvolvedora <b>Frontend</b>,
              morando no <b>Brasil</b>.
            </p>
            <p className="about__text">
              Sou graduada em Gestão da Tecnologia da Informação e apaixonada
              por desenvolver e criar páginas web. Atuei em diferentes projetos,
              web e mobile, sendo eles nacionais e internacionais. Tendo a
              oportunidade de trabalhar e conhecer diferentes tecnologias.
            </p>
            <div className="about__social-media">
              {socialMediaData.map((socialMedia) => (
                <CardSocialMedia
                  key={socialMedia.url}
                  url={socialMedia.url}
                  icon={socialMedia.icon}
                />
              ))}
            </div>
          </div>
          <img src={Girl} alt="girl" className="about__img" />
        </div>
      </SectionLayout>
      <Skills />
    </>
  );
};
