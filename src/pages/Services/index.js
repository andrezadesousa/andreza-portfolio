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
          icon="ri-layout-4-line"
          title="Web Design"
          description="Beautiful and elegant designs with
          interfaces that are intuitive, efficient
          and pleasant to use for the user."
        />

        <ArticleService
          icon="ri-layout-4-line"
          title="Web Design"
          description="Beautiful and elegant designs with
          interfaces that are intuitive, efficient
          and pleasant to use for the user."
        />
        
        <ArticleService
          icon="ri-layout-4-line"
          title="Web Design"
          description="Beautiful and elegant designs with
          interfaces that are intuitive, efficient
          and pleasant to use for the user."
        />
      </div>
    </section>
  );
};
