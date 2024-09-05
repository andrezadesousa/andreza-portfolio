import React from "react";
import "./style.css";

import { SectionLayout } from "../../components/sectionLayout";
import { TitleSectionWhite } from "../../components/title-section-white";

export const About = () => {
  return (
    <SectionLayout id="about">
      <div className="about__container">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQE3rLLjfQ4YBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724525257776?e=1730937600&v=beta&t=hPMx0hJzMyy_610ypErHrJEjy6n1HJGdnxOey9m_jjo" />
        <div className="about__content">
          <TitleSectionWhite title="Sobre" subtitle="Mim" />
          <p className="about__text">
            Sou desenvolvedora Frontend apaixonada por dar vida aos aspectos
            técnicos e visuais de produtos digitais. Possuindo experiência em
            figma e tecnologias para desenvolvimento web e mobile, sempre com
            código claro, legível e de alto desempenho que são importantes para
            mim.
          </p>
          <p className="about__text">
            Comecei minha jornada como desenvolvedora trainee em 2021 e, desde
            então, continuei a crescer e evoluir como na área, assumindo novos
            desafios e aprendendo as últimas tecnologias ao longo do caminho.
            Agora, após começar minha jornada de desenvolvimento web, estou
            construindo aplicativos web usando tecnologias modernas como
            TypeScript, ReactJs, React Native, Angular e muito mais.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};
