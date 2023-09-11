/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import ArticleStudies from "../../components/ArticleStudies";

export default () => {
  return (
    <section className="studies section" id="studies">
      <SecondTitle title="Educação." />
      <div className="studies__container container grid">
        <ArticleStudies
          icon="ri-graduation-cap-line"
          title="Gestão da Tecnologia da Informação"
          subtitle="Fatec Barueri | Graduação"
          description="Sou graduada no curso de Gestão da Tecnologia a Informação"
          date="Ago 2018 - Ago 2021"
        />
        <ArticleStudies
          icon="ri-javascript-line"
          title="JavaScript"
          subtitle="B7Web | Curso"
          description="Atualmente, estou estudando o curso de JavaScript na plataforma de cursos B7Web, assim, posso aprimorar e adquirir novos conhecimentos."
          date="Ago 2023 - "
        />
        <ArticleStudies
          icon="bx bx-code-alt"
          title="Trilha Conectar do Discover"
          subtitle="Rocketseat | Curso"
          date="Jan 2023"
        />
        <ArticleStudies
          icon="bx bxl-react"
          title="Ignite Lab | ReactJs"
          subtitle="Rocketseat | Bootcamp"
          description="Bootcamp da Rocketseat onde foi desenvolvido um projeto página de login, utilizando Tailwind Css e ReactJs"
          date="Jan 2022"
        />
        <ArticleStudies
          icon="bx bxl-react"
          title="Next Level Week Together 6 | ReactJs"
          subtitle="Rocketseat | Bootcamp"
          description="Bootcamp da Rocketseat onde foi desenvolvido um projeto de Sala virtual Q&A."
          date="Jan 2022"
        />

<i class=''></i>

      </div>
    </section>
  );
};
