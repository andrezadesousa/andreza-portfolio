/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import SectionSubtitle from "../../components/Titles/SectionSubtitle";
import QualificatonTitle from "../../components/Titles/QualificationTitle";
import { QualificationData } from "../../components/QualificationData";

export default () => {
  return (
    <section className="qualification section bd-container" id="qualification">
      <SectionSubtitle title="Experiência & Educação" />
      <SecondTitle title="Qualificação." />

      <div className="qualification__container bd-grid">
        <div className="qualification__content">
          <QualificatonTitle icon="bx bx-briefcase-alt" title="Experiência" />

          <div className="bd-grid">
            <QualificationData
              title="Desenvolvedora Frontend Jr"
              icon="bx bx-briefcase-alt"
              local="Certsys - São Paulo"
              date="Dez 2021 - Jan 2023"
            />

            <QualificationData
              title="Trainee FullStack Jr"
              icon="bx bx-briefcase-alt"
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
              local="Faculdade de Tecnologia (FATEC) - Barueri"
              date="Ago 2018 - Ago 2021"
            />

            <QualificationData
              title="Trilha Conectar do Discover"
              icon="bx bx-book-alt"
              local="Rocketseat - Brasil"
              date="Jan 2023"
            />

            <QualificationData
              title="Ignite Lab | Bootcamp"
              icon="bx bx-book-alt"
              local="Rocketseat - Brasil"
              date="Jan 2023"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
