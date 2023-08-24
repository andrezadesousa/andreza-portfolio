/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { HeaderMenu } from "../../components/headerMenu"

export default () => {
  return (
    <header className="header" id="header">
      <HeaderMenu />
    </header>
  );
};
