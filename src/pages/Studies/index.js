/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { SecondTitle } from "../../components/Titles/SecondTitle";

import { DataRight } from "../../components/ArticleStudies/articleRight";
import { DataLeft } from "../../components/ArticleStudies/articleLeft";
import { RounderLine } from "../../components/RounderLine/Rounder";
import { Line } from "../../components/RounderLine/Line";
import { Espace } from "../../components/RounderLine/Espace";

export default () => {
  return (
    <section className="qualification section shadow-medium" id="studies">
      <SecondTitle title="Estudos." />

      <div className="qualification__container container">
        <div className="qualification__section">
          {/*Qualification content 1 */}
          <div
            className="qualification__content"
            id="education"
          >
            <div className="qualification__data left">
              <DataLeft
                title="Gestão da Tecnologia da Informação"
                subtitle="Faculdade de Tecnologia da Informação"
                date="2018 - 2021"
              />
              <RounderLine />
            </div>

            <div className="qualification__data right">
              <Espace />
              <RounderLine />
              <DataRight
                title="Curso de JavaScript"
                subtitle="B7Web Cursos"
                date="2023 - estudando"
              />
            </div>

            <div className="qualification__data left">
              <DataLeft
                title="Curso PHP"
                subtitle="B7Web Cursos | Curso"
                date="2023 - estudando"
              />
              <RounderLine />
            </div>

            <div className="qualification__data right">
              <Espace />
              <RounderLine />
              <DataRight
                title="Curso de ReactJS"
                subtitle="B7Web Cursos"
                date="2023 - estudando"
              />
            </div>

            <div className="qualification__data left">
              <DataLeft
                title="Trilha Conectar do Discover"
                subtitle="Rocketseat | Curso"
                date="2023 - 2023"
              />
              <RounderLine />
            </div>

            <div className="qualification__data right">
              <Espace />
              <RounderLine />
              <DataRight
                title="Ignite Lab | ReactJs"
                subtitle="Rocketseat | Bootcamp"
                date="2022 - 2022"
              />
            </div>

            <div className="qualification__data left">
              <DataLeft
                title="Next Level Week Together 6 | ReactJs"
                subtitle="Rocketseat | Bootcamp"
                date="2022 - 2022"
              />
              <RounderLine />
            </div>
                    
          </div>
        </div>
      </div>
    </section>
  );
};

