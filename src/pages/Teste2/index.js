/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import { TitleModal } from "../../components/Titles/TitleModal";
import { SubtitleModal } from "../../components/Titles/SubtitleModal";

export default () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="services section container">
      <SecondTitle title="Experiência." />

      <div className="services__container-desk container grid">
        {/* Services 1 */}
        <div className="services__content-desk">
          <TitleModal
            icon="ri-braces-line"
            subtitle="Desenvolvedora"
            secondSubtitle="Frontend Jr"
          />

          <span
            onClick={() => {
              setShowLinks(!showLinks);
            }}
            className="buttons button--flex button-small button--link services__button-desk"
          >
            View more
            <i className="ri-arrow-right-line buttons__icon"></i>
          </span>

          <div
            className={`services__modal ${
              showLinks ? "active__modal" : "inactive__modal"
            }`}
          >
            <div className="services__modal-content">
              <SubtitleModal
                firstTitle="Desenvolvedora"
                secondTitle="Frontend Jr"
              />
              <i
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
                className="ri-graduation-cap-line services__modal-close"
              ></i>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="ri-graduation-cap-line services__modal-icon"></i>
                  <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="ri-graduation-cap-line services__modal-icon"></i>
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
