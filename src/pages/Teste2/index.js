/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";

export default () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="services section container">
      <SecondTitle title="Experiência." />

      <div className="services__container-desk container grid">
        {/* Services 1 */}
        <div className="services__content-desk">
          <div>
            <i className="ri-graduation-cap-line services__icon-desk"></i>
            <h3 className="services__title-desk">
              Ui/Ux <br></br> Designer
            </h3>
          </div>

          <span
            onClick={() => {
              setShowLinks(!showLinks);
            }}
            className="buttons button--flex button-small button--link services__button-desk"
          >
            View more
            <i className="ri-graduation-cap-line buttons__icon"></i>
          </span>

          <div
            className={`services__modal ${
              showLinks ? "active__modal" : "inactive__modal"
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                ui/ux <br></br> design
              </h4>
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
