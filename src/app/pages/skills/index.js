import React from "react";
import "./style.css";

import { CardSkills } from "../../components/cardSkills";
import { SectionLayout } from "../../components/sectionLayout";
import { skillsData } from "../../constants/skills.constants.ts";
import { TitleSectionBlack } from "../../components/title-section-black";
export const Skills = () => {
  return (
    <SectionLayout>
      <div className="skills__container">
        <TitleSectionBlack title="Minhas" subtitle="skills" />
        <div className="skills__content">
          {skillsData.map((skill) => (
            <CardSkills
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
