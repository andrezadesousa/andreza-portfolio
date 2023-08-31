/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import ArticleProjects from "../../components/ArticleProjects"

import Projects from "../../images/project-1.jpg"

export default () => {
  return (
    <section className="projects section" id="projects">
      <SecondTitle title="Projetos." />

      <div className="projects__container container grid">
        <ArticleProjects
          image={Projects}
          subtitle="Website"
          title="Restaurant Website"
          description="Project that you carry out in the design
          and structure of the layout, showing the
          design at the client's request."
          link="https://github.com/"
          icon="ri-github-line" />
      </div>
    </section>
  );
};
