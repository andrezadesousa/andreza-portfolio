import React from "react";
import "./index.css";

import AngularImage from "../../images/plugger.png";

import { CertsysLogo } from "../LogosImage/Certsys";
import { PluggerLogo } from "../LogosImage/Plugger";
import { TraiveLogo } from "../LogosImage/Traive";
import { LindaLogo } from "../LogosImage/Linda";
import { MarinhaLogo } from "../LogosImage/MarinhaPortguesa";

export const Logos = () => {
  return (
    <div className="logos__container container grid">
      <CertsysLogo />
      <PluggerLogo />
      <TraiveLogo />
      <LindaLogo />
      <MarinhaLogo />
    </div>
  );
};
