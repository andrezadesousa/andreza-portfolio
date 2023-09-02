/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { HeaderDesktop } from "../../components/HeaderDesktop"
import { HeaderMobile } from "../../components/HeaderMobile";

export default () => {
  return (
    <header className="header" id="header">
      <HeaderDesktop/>
      <HeaderMobile/>
    </header>
  );
};
