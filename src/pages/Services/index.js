/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import ArticleService from "../../components/ArticleServices";

export default () => {
  return (
    <section className="services section">
      <SecondTitle title="Serviços." />

      <div className="services__container container grid">
        <ArticleService
          icon="ri-code-box-line"
          title="Desenvolvimento Web"
          description="Desenvolvimento web personalizado, 
          adaptado as especificações, projetado para proporcionar 
          uma experiência eficiente e agradávei de usar 
          para o usuário."
        />

        <ArticleService
          icon="ri-smartphone-line"
          title="Desenvolvimento Mobile"
          description="Projetar e transformar projetos de sites em 
          aplicativos móveis para fornecer uma experiência de usuário perfeita."
        />
      </div>
    </section>
  );
};
