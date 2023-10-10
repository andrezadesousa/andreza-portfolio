/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { TitleCard } from "../../components/Titles/TitleCard";
import { SubtitleCard } from "../../components/Titles/SubtitleCard";

import { ButtonCard } from "../../components/Button/ButtonCard";
import { ButtonCloseCard } from "../../components/Button/ButtonCloseCard";

import { FrontEnd, Trainee } from "../../mocks/MockExperience";

import { Logos } from "../../components/Logos"

import  { Testimonial } from "../Testimonial"

export default () => {
  const [showFront, setShowFront] = useState(false);
  const [showTrainee, setShowTrainee] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  return (
    <section className="card section container" id="experience-mobile">
      <SecondTitle title="Experiência." />
      <Logos />

      <div className="card__container container grid">
        {/* card 1 */}
        <div className="card__content" onClick={() => { setShowFront(!showFront);}}>
          <TitleCard
            icon="ri-braces-line"
            firstTitle="Desenvolvedora"
            secondTitle="Frontend Jr"
          />
          <ButtonCard />
          <div className={`card__modal ${showFront ? "active__modal" : "inactive__modal"}`}>
            <div onClick={() => {setShowFront(!showFront);}} className="card__modal-content">
              <SubtitleCard firstTitle="Desenvolvedora" secondTitle="Frontend Jr"/>
              <ButtonCloseCard />
              <ul className="card__modal-card grid">
                {FrontEnd.map((frontEndLinks) => {
                  return (
                    <li className="card__modal-cards">
                      <i className="ri-checkbox-circle-line card__modal-icon"></i>
                      <p>{frontEndLinks.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card__content" onClick={() => {setShowTrainee(!showTrainee);}}>
          <TitleCard
            icon="bx bx-code-alt"
            firstTitle="Desenvolvedora"
            secondTitle="FullStack Trainee"
          />
          <ButtonCard />
          <div className={`card__modal ${showTrainee ? "active__modal" : "inactive__modal"}`}>
            <div onClick={() => {setShowTrainee(!showTrainee);}}className="card__modal-content">
              <SubtitleCard firstTitle="Desenvolvedora" secondTitle="FullStack Trainee"/>
              <ButtonCloseCard />
              <ul className="card__modal-card grid">
                {Trainee.map((traineeLinks) => {
                  return (
                    <li className="card__modal-cards">
                      <i className="ri-checkbox-circle-line card__modal-icon"></i>
                      <p>{traineeLinks.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="card__content" onClick={() => {setShowBusiness(!showBusiness);}}>
          <TitleCard
            icon="bx bx-line-chart"
            firstTitle="Business"
            secondTitle="Analyst Jr"
          />
          <ButtonCard />
          <div className={`card__modal ${showBusiness ? "active__modal" : "inactive__modal"}`}>
            <div onClick={() => {setShowBusiness(!showBusiness);}} className="card__modal-content">
              <SubtitleCard firstTitle="Business" secondTitle="Analyst Jr" />
              <ButtonCloseCard />
              <ul className="card__modal-card grid">
                <li className="card__modal-cards">
                  <p>
                    Atuei como Analista de Negócios na elaboração da
                    documentação de um projeto americano. Realizei pesquisas,
                    analisando as operações do serviço, através de reuniões com
                    os colaboradores, stakeholders e cliente. Ao lado dos mesmos
                    modelei e documentei o serviço. Elaborando também o diagrama
                    dos processos de atendimento, sempre mantendo a comunicação
                    transparente para cumprir os prazos
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </section>
  );
};
