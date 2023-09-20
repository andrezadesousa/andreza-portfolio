/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { ArticleExperienceDesktop } from "../../components/ArticleExperienceDesktop";
import { Logos } from "../../components/Logos"

import { Experience } from "../../mocks/MockExperienceDesktop";

export const ExperienceDesktop = () => {
  return (
    <section className="experience section" id="experience-desktop">
      <SecondTitle title="Experiência." />
      <Logos />

      <div className="experience__container container grid">
        {Experience.map((experienceLinks) => {
          return (
            <ArticleExperienceDesktop
              key={experienceLinks.id}
              image={experienceLinks.image}
              subtitle={experienceLinks.subtitle}
              title={experienceLinks.title}
              description={experienceLinks.description}
            />
          );
        })}
      </div>
    </section>
  );
};
