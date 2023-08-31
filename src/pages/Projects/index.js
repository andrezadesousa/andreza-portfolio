/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import ArticleProjects from "../../components/ArticleProjects"

import { Projects } from "../../mocks/MockProjects";

import Project1 from "../../images/project-1.png"

export default () => {
  return (
    <section className="projects section" id="projects">
      <SecondTitle title="Projetos." />

      <div className="projects__container container grid">
        {Projects.map((projectsLinks) => {
          return(
            <ArticleProjects
            key={projectsLinks.id}
            image={projectsLinks.image}
            subtitle={projectsLinks.subtitle}
            title={projectsLinks.title}
            description={projectsLinks.description}
            link={projectsLinks.link}
            icon="ri-github-line" 
          />
          )
        })}
       
      </div>
    </section>
  );
};
