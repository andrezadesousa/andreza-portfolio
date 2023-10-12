/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { SecondTitle } from "../../components/Titles/SecondTitle";
import { ArticleProjects } from "../../components/ArticleProjects";

import { Projects } from "../../mocks/MockProjects";

export default () => {
  return (
    <section className="projects section" id="projects">
      <SecondTitle title="Projetos." />

      <div className="projects__container container grid">
        {Projects.map((projectsLinks) => {
          return (
            <ArticleProjects
              key={projectsLinks.id}
              image={projectsLinks.image}
              subtitle={projectsLinks.subtitle}
              title={projectsLinks.title}
              description={projectsLinks.description}
              link={projectsLinks.link}
              iconTec1={projectsLinks.iconTec1}
              textIcon1={projectsLinks.textIcon1}
              iconTec2={projectsLinks.iconTec2}
              textIcon2={projectsLinks.textIcon2}
              iconTec3={projectsLinks.iconTec3}
              textIcon3={projectsLinks.textIcon3}
              iconTec4={projectsLinks.iconTec4}
              textIcon4={projectsLinks.textIcon4}
            />
          );
        })}
      </div>
    </section>
  );
};
