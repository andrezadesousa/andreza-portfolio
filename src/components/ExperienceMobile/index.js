/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import SecondTitle from "../../components/Titles/SecondTitle";
import AritcleExperience from "../../components/ArticleExperience";

export function ExperienceMobile() {

  return (
    <section className="section" id="experience-mobile">
      <SecondTitle title="Experiência." />
      <AritcleExperience
        title="Desenvolvedora Frontend Jr"
        year="Dez 2021 - Jan 2023"
        subtitle="Certsys Tecnologia da Informação"
        description="Atuei em uma empresa de consultoria. Participando de diferentes projetos, internacionais e nacionais, como desenvolvedora web. Todos os projetos em que atuei foram com metodologia ágil Scrum e com as tecnologias"
        tech="React, React Native, Angular, DevExtreme Angular Components, NodeJS, JavaScript e TypeScript." 
        />

      <AritcleExperience
        title="Business Analyst"
        year="Ago 2021 - Dez 2021"
        subtitle="Certsys Tecnologia da Informação"
        description="Atuei como Analista de Negócios na elaboração da documentação de um projeto americano. Realizei pesquisas, analisando as operações do serviço, através de reuniões com os colaboradores, stakeholders e cliente. Ao lado dos mesmos modelei e documentei o serviço. Elaborando também o diagrama dos processos de atendimento, sempre mantendo a comunicação transparente para cumprir os prazos" />

      <AritcleExperience
        title="Desenvolvedora FullStack Jr"
        year="Mai 2021 - Dez 2021"
        subtitle="Certsys Tecnologia da Informação"
        description="Atuei como desenvolvedora backend em um projeto americano. Sendo responsável por auxiliar na manutenção de sistemas, utilizando JavaScript e Typescript como principais linguagens de programação e ferramentas como puppeteer e Git para versionamento. Além de utilizar a metodologia ágil Scrum"
        tech="Node.js, JavaScript, NPM (Gerenciador de Pacotes do Node), Git, GitLab" 
  />
    </section>
  );
}
