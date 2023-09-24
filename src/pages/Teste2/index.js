/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { TitleCard } from "../../components/Titles/TitleCard";
import { SubtitleCard } from "../../components/Titles/SubtitleCard";

import { ButtonCard } from "../../components/Button/ButtonCard";
import { ButtonCloseCard } from "../../components/Button/ButtonCloseCard";

export default () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="card section container">
      <SecondTitle title="Experiência." />

      <div className="card__container container grid">
        {/* card 1 */}
        <div
          className="card__content"
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <TitleCard
            icon="ri-braces-line"
            firstTitle="Desenvolvedora"
            secondTitle="Frontend Jr"
          />

          <ButtonCard />

          <div
            className={`card__modal ${
              showLinks ? "active__modal" : "inactive__modal"
            }`}
          >
            <div
              onClick={() => {
                setShowLinks(!showLinks);
              }}
              className="card__modal-content"
            >
              <SubtitleCard
                firstTitle="Desenvolvedora"
                secondTitle="Frontend Jr"
              />
              <ButtonCloseCard />
              <ul className="card__modal-card grid">
                <li className="card__modal-cards">
                  <i className="ri-graduation-cap-line card__modal-icon"></i>
                  <p>I develop the user interface</p>
                </li>
                <li className="card__modal-cards">
                  <i className="ri-graduation-cap-line card__modal-icon"></i>
                  <p>I develop the user in terface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
