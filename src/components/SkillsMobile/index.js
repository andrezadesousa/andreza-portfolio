import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";

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

              <div>
                <h1 className="skills__title">Desenvolvedora Frontend</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
            </div>
          </div>

          {/*Skills 2*/}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <i class="bx bx-server skills__icon"></i>

              <div>
                <h1 className="skills__title">Desenvolvedora Backend</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node JS</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__faribase"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/*Skills 3*/}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <i class='bx bx-palette skills__icon' ></i>

              <div>
                <h1 className="skills__titles">Design</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <i class="bx bx-chevron-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Figma</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__figma"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
