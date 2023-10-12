import React, { useState } from "react";
import "./index.css";

import { SecondTitle } from "../../components/Titles/SecondTitle";
import { SkillsTitleMobile } from "../../components/Titles/SkillsTitleMobile";
import { SkillsDataMobile } from "../../components/SkillsDataMobile";

import {
  frontEnd,
  backEnd,
  designLib,
  dataBase,
  versioning,
  test
} from "../../mocks/MockSkillsMobile";

export const SkillsMobile = () => {
  const [showLinksFront, setShowLinksFront] = useState(false);
  const [showLinksBack, setShowLinksBack] = useState(false);
  const [showLinksDesign, setShowLinksDesign] = useState(false);
  const [showDataBase, setShowDataBase] = useState(false);
  const [showVersioning, setShowVersioning] = useState(false);
  const [showTest, setShowTest] = useState(false);

  return (
    <section className="skills section" id="skills-mobile">
      <SecondTitle title="Minhas skills." />
      <div className="skills__container container grid">
        <div>
          {/*Skills 1*/}
          <div
            onClick={() => {
              setShowLinksFront(!showLinksFront);
            }}
            className={`skills__content ${
              showLinksFront ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header shadow-medium">
              <i class="ri-macbook-line skills__icon"></i>
              <SkillsTitleMobile title="Desenvolvimento Frontend" />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {frontEnd.map((frontEndLinks) => {
                return (
                  <SkillsDataMobile
                    key={frontEndLinks.id}
                    name={frontEndLinks.name}
                    skillsName={frontEndLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>

          {/*Skills 2*/}
          <div
            onClick={() => {
              setShowLinksBack(!showLinksBack);
            }}
            className={`skills__content ${
              showLinksBack ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header shadow-medium">
              <i class="ri-code-s-slash-line skills__icon"></i>
              <SkillsTitleMobile title="Desenvolvimento Backend" />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {backEnd.map((backEndLinks) => {
                return (
                  <SkillsDataMobile
                    key={backEndLinks.id}
                    name={backEndLinks.name}
                    skillsName={backEndLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          {/*Skills 3*/}
          <div
            onClick={() => {
              setShowLinksDesign(!showLinksDesign);
            }}
            className={`skills__content ${
              showLinksDesign ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header shadow-medium">
              <i class="ri-palette-line skills__icon"></i>
              <SkillsTitleMobile title="Design & Componentização" />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {designLib.map((designLibLinks) => {
                return (
                  <SkillsDataMobile
                    key={designLibLinks.id}
                    name={designLibLinks.name}
                    skillsName={designLibLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>

          {/*Skills 4*/}
          <div
            onClick={() => {
              setShowDataBase(!showDataBase);
            }}
            className={`skills__content ${
              showDataBase ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header shadow-medium">
              <i class="bx bx-data skills__icon"></i>
              <SkillsTitleMobile title="Banco de Dados" />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {dataBase.map((dataBaseLinks) => {
                return (
                  <SkillsDataMobile
                    key={dataBaseLinks.id}
                    name={dataBaseLinks.name}
                    skillsName={dataBaseLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          {/*Skills 5*/}
          <div
            onClick={() => {
              setShowVersioning(!showVersioning);
            }}
            className={`skills__content ${
              showVersioning ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header shadow-medium">
              <i class="bx bx-git-branch skills__icon"></i>
              <SkillsTitleMobile title="Versionamento" />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {versioning.map((versioningLinks) => {
                return (
                  <SkillsDataMobile
                    key={versioningLinks.id}
                    name={versioningLinks.name}
                    skillsName={versioningLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          {/*Skills 6*/}
          <div
            onClick={() => {
              setShowTest(!showTest);
            }}
            className={`skills__content ${
              showTest ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header shadow-medium">
              <i class="bx bx-cog skills__icon"></i>
              <SkillsTitleMobile title="Testes" />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {test.map((testLinks) => {
                return (
                  <SkillsDataMobile
                    key={testLinks.id}
                    name={testLinks.name}
                    skillsName={testLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
