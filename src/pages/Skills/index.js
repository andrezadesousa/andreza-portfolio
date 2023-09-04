/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import SkillsTitle from "../../components/Titles/SkillsTitle";
import SkillsData from "../../components/SkillsData";

import AndroidImage from "../../images/android.svg"
import AngularImage from "../../images/angular-icon-1.svg"
import AzureImage from "../../images/azure-boards.svg"
import CssImage from "../../images/css-3.svg";
import FigmaImage from "../../images/figma-1.svg";
import GitImage from "../../images/git-icon.svg";
import GithubImage from "../../images/github-icon-1.svg";
import GitlabImage from "../../images/gitlab.svg"
import HtmlImage from "../../images/html-1.svg";
import JavascriptImage from "../../images/logo-javascript.svg";
import NodeImage from "../../images/nodejs-icon.svg"
import MaterialUiImage from "../../images/material-ui-1.svg"
import PostmanImage from "../../images/postman.svg"


import ReactImage from "../../images/react-2.svg";


export default () => {
  return (
    <section className="skills section" id="skills">
      <SecondTitle title="Minhas Skills." />
      <span className="section__subtitle">Tecnologias que trabalhei e estudo</span>

      <div className="skills__container container grid section__border">
        {/*Skills 1 */}
        <div className="skills__content">
          <SkillsTitle title="Desenvolvimento Frontend e Backend" icon="ri-braces-line" />

          <div className="skills__info">
            <SkillsData image={HtmlImage} title="HTML" />
            <SkillsData image={CssImage} title="CSS" />
            <SkillsData image={JavascriptImage} title="JavScript" />
            <SkillsData image={ReactImage} title="ReactJS" />
            <SkillsData image={AngularImage} title="Angular" />
            <SkillsData image={NodeImage} title="NodeJS" />

          </div>
        </div>

        {/*Skills 2 */}
        <div className="skills__content">
          <SkillsTitle title="Design e metodologias" icon="ri-braces-line" />

          <div className="skills__info">
            <SkillsData image={FigmaImage} title="Figma" />
            <SkillsData image={MaterialUiImage} title="Material UI" />
            <SkillsData 
              image={"https://www.devexpress.com/Content/MainMenu/Logo.svg?w=152&h=36"} 
              title="DevExpress"
              className="dev__icon"/>
            <SkillsData image={AzureImage} title="Azure Board" />
          </div>
        </div>

        {/*Skills 3 */}
        <div className="skills__content">
          <SkillsTitle title="Versionamentos e Testes" icon="ri-braces-line" />

          <div className="skills__info">
            <SkillsData image={AndroidImage} title="Android SDK" />
            <SkillsData image={GitImage} title="GIT" />
            <SkillsData image={GithubImage} title="GitHub" />
            <SkillsData image={GitlabImage} title="GitLab" />
            <SkillsData image={PostmanImage} title="Postman" />
          </div>
        </div>
      </div>
    </section>
  );
};
