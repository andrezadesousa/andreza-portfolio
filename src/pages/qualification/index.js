/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import QualificatonTitle from "../../components/Titles/QualificationTitle";
import { QualificationData } from "../../components/QualificationData";

export default () => {
  return (
    <section className="qualification section" id="qualification">
      <SecondTitle title="Experiência & Educação." />

      <div className="qualification__container bd-grid">
        <div className="qualification__content">
          <QualificatonTitle icon="bx bx-briefcase-alt" title="Experiência" />

          <div className="bd-grid">
            <QualificationData
              title="Desenvolvedora Frontend Jr"
              icon="bx bx-briefcase-alt"
              description="Atuei como desenvolvedora Front-end em projetos 
              mobile e web. Utilizando as tecnologias mais conhecidas do mercado, além da metodologia scrum"
              local="Certsys - São Paulo"
              date="Dez 2021 - Jan 2023"
            />

            <QualificationData
              title="Trainee FullStack Jr"
              icon="bx bx-briefcase-alt"
              description="Atuei como desenvolvedora FullStack trainee em um projeto internacional.
              Com as tecnologias JavaScript e NodeJS, além da metodologia scrim."
              local="Certsys - São Paulo"
              date="Mai 2021 - Dez 2022"
            />
          </div>
        </div>

        <div className="qualification__content">
          <QualificatonTitle icon="bx bx-book-bookmark" title="Educação" />

          <div className="bd-grid">
            <QualificationData
              title="Gestão da Tecnologia da Informação"
              icon="bx bx-book-alt"
              description="Graduação"
              local="Faculdade de Tecnologia (FATEC) - Barueri"
              date="Ago 2018 - Ago 2021"
            />

            <QualificationData
              title="Trilha Conectar do Discover"
              icon="bx bx-book-alt"
              description="Curso"
              local="Rocketseat - Brasil"
              date="Jan 2023"
            />

            <QualificationData
              title="Ignite Lab"
              icon="bx bx-book-alt"
              description="Bootcamp"
              local="Rocketseat - Brasil"
              date="Jan 2023"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
