/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";

import { StudiesIconMobile } from "../../components/StudiesIconMobile";
import { DataRight } from "../../components/ArticleStudiesMobile/articleRight";
import { DataLeft } from "../../components/ArticleStudiesMobile/articleLeft";

export default () => {
  return (
    <section className="qualification section" id="studies-mobile">
      <SecondTitle title="Qualificação." />

      <div className="qualification__container container">
        <StudiesIconMobile firstText="Cursos" secondText="Bootcamps" />

        <div className="qualification__section">
          {/*Qualification content 1 */}
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            {/*Qualification Left */}
            <div className="qualification__data left">
              <DataLeft
                title="Gestão da Tecnologia da Informação"
                subtitle="Faculdade de Tecnologia da Informação"
                date="2018 - 2021"
              />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*Qualification Right */}
            <div className="qualification__data right">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <DataRight
                title="Curso de JavaScript"
                subtitle="B7Web Cursos"
                date="2023 - estudando"
              />
            </div>

            {/*Qualification Left */}
            <div className="qualification__data left">
              <DataLeft
                itle="Curso de ReactJS"
                subtitle="B7Web Cursos"
                date="2023 - estudando"
              />
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>

          </div>

          {/*Qualification content 2 */}
          <div className="qualification__content" data-content id="work">
            {/*Qualification Left */}
            <div className="qualification__data left">
              <DataLeft
                title="Gestão da Tecnologia da Informação"
                subtitle="Faculdade de Tecnologia da Informação"
                date="2018 - 2021"
              />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*Qualification Right */}
            <div className="qualification__data right">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <DataRight
                title="Curso de JavaScript"
                subtitle="B7Web Cursos"
                date="2023 - estudando"
              />
            </div>

            {/*Qualification Left */}
            <div className="qualification__data left">
              <DataLeft
                itle="Curso de ReactJS"
                subtitle="B7Web Cursos"
                date="2023 - estudando"
              />
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
