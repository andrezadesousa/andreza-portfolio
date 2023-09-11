import React, { useState } from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { SkillsTitleMobile } from "../../components/Titles/SkillsTitleMobile";
import { SkillsDataMobile } from "../../components/SkillsDataMobile";

import { frontEnd, backEnd, designLib } from "../../mocks/MockSkillsMobile";

export const SkillsMobile = () => {
  const [showLinksFront, setShowLinksFront] = useState(false);
  const [showLinksBack, setShowLinksBack] = useState(false);
  const [showLinksDesign, setShowLinksDesign] = useState(false);

  return (
    <section className="skills section" id="skills-mobile">
      <SecondTitle title="Minhas skills." />
      <div className="skills__container container grid">
        <div>
          {/*Skills 1*/}
          <div 
            onClick={() => {setShowLinksFront(!showLinksFront);}}
            className={`skills__content ${showLinksFront ? "skills__open" : "skills__close"}`}>
            <div className="skills__header shadow-medium">
              <i class="ri-macbook-line skills__icon"></i>
              <SkillsTitleMobile
                title="Desenvolvimento Frontend"
                subtitle="Mais de três anos"/>

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
          <div 
            onClick={() => {setShowLinksBack(!showLinksBack);}}
            className={`skills__content ${showLinksBack ? "skills__open" : "skills__close"}`}>
            <div className="skills__header shadow-medium">
              <i class="ri-code-s-slash-line skills__icon"></i>
              <SkillsTitleMobile
                title="Desenvolvimento Backend & Versionamento"
                subtitle="Mais de dois anos"/>

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
          <div 
            onClick={() => {setShowLinksDesign(!showLinksDesign);}}
            className={`skills__content ${showLinksDesign ? "skills__open" : "skills__close"}`}>
            <div className="skills__header shadow-medium">
              <i class="ri-palette-line skills__icon"></i>
              <SkillsTitleMobile
                title="Design & Componentização"
                subtitle="Mais de um ano"/>

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
