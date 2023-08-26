/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";
import './index.css'

export function Header() {


  return (
    <header className="header" id="header">
      
      <Mobile/>
      <Desktop/>
    </header>
  );
}
