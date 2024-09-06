import React from "react";
import "./style.css";

import { SectionLayout } from "../../components/sectionLayout";
import { TitleSectionWhite } from "../../components/title-section-white";
import { experienceData } from "../../constants/experience.constants";

export const Experience = () => {
  return (
    <SectionLayout id="experiencia-profissional">
      <TitleSectionWhite title="Experiência " subtitle="Profissional" />
      <div className="experience__container">
        {experienceData.map((experience) => (
          <div className="experience__box">
            <div className="experience__header">
              <div className="experience__titles">
                <img
                  src={experience.image}
                  className="experience__img"
                  alt="Image experience"
                />
                <div className="experience__wrapper">
                  <h1 className="experience__title">{experience.title}</h1>
                  <h2 className="experience__subtitle">
                    {experience.subtitle}
                  </h2>
                </div>
              </div>
              <p className="experience__date">{experience.date}</p>
            </div>

            <p className="experience__description">{experience.description}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
