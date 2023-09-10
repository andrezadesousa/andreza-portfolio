import React from "react";
import "./index.css";

import AngularImage from "../../images/plugger.png";

import { PluggerLogo } from "../LogosImage/Plugger"
import { TraiveLogo } from "../LogosImage/Traive"
import { LindaLogo } from "../LogosImage/Linda"
import { MarinhaLogo } from "../LogosImage/MarinhaPortguesa"

export const Logos = () => {
  return (
    <section className="logos section">
      <div className="logos__container container grid">
        <PluggerLogo />
        <TraiveLogo />
        <LindaLogo />
        <MarinhaLogo />
      </div>
    </section>
  );
};
