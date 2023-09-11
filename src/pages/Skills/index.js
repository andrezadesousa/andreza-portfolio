import React from "react";
import './index.css'

import SkillsDesktop from "../SkillsDesktop";
import { SkillsMobile } from "../SkillsMobile";

export const Skills = () => {
  return (
    <>
      <SkillsDesktop />
      <SkillsMobile />
    </>
  );
};
