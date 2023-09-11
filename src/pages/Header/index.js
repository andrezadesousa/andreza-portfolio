/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { HeaderDesktop } from "../HeaderDesktop"
import { HeaderMobile } from "../HeaderMobile";

export default () => {
  return (
    <header className="header" id="header">
      <HeaderDesktop/>
      <HeaderMobile/>
    </header>
  );
};
