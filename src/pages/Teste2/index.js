/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { TitleCard } from "../../components/Titles/TitleCard";
import { SubtitleCard } from "../../components/Titles/SubtitleCard";

import { ButtonCard } from "../../components/Button/ButtonCard";
import { ButtonCloseCard } from "../../components/Button/ButtonCloseCard";

import { CardModal } from "../../components/CardModal"

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
              <CardModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
