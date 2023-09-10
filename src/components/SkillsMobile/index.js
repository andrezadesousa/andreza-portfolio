import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { SkillsTitleMobile } from "../../components/Titles/SkillsTitleMobile";
import { SkillsDataMobile } from "../../components/SkillsDataMobile";

import { frontEnd, backEnd, designLib } from "../../mocks/MockSkillsMobile";

export const SkillsMobile = () => {
  return (
    <section className="skills section" id="skills">
      <SecondTitle title="Minhas skills." />
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {/*Skills 1*/}
          <div className="skills__content skills__open">
            <div className="skills__header">
              <i class="bx bx-code-curly skills__icon"></i>

              <SkillsTitleMobile
                title="Desenvolvedora Frontend"
                subtitle="More than 4 years"
              />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              {frontEnd.map((frontEndLinks) => {
                return (
                  <SkillsDataMobile
                    key={frontEndLinks.id}
                    name={frontEndLinks.name}
                    number={frontEndLinks.number}
                    skillsName={frontEndLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>

          {/*Skills 2*/}
          <div className="skills__content skills__open">
            <div className="skills__header">
              <i class="bx bx-code-curly skills__icon"></i>

              <SkillsTitleMobile
                title="Desenvolvimento Backend & Versionamento"
                subtitle="More than 4 years"
              />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              {backEnd.map((backEndLinks) => {
                return (
                  <SkillsDataMobile
                    key={backEndLinks.id}
                    name={backEndLinks.name}
                    number={backEndLinks.number}
                    skillsName={backEndLinks.skillsClass}
                  />
                );
              })}
            </div>
          </div>

          {/*Skills 3*/}
          <div className="skills__content skills__open">
            <div className="skills__header">
              <i class="bx bx-code-curly skills__icon"></i>

              <SkillsTitleMobile
                title="Desenvolvimento Backend"
                subtitle="More than 4 years"
              />

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              {designLib.map((designLibLinks) => {
                return (
                  <SkillsDataMobile
                    key={designLibLinks.id}
                    name={designLibLinks.name}
                    number={designLibLinks.number}
                    skillsName={designLibLinks.skillsClass}
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
