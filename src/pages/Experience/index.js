/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import ExperienceMobile from "../ExperienceMobile";
import { ExperienceDesktop } from "../ExperienceDesktop";

export default () => {
  return (
    <div id="experience">
      <ExperienceMobile />
      <ExperienceDesktop />
    </div>
  );
};
