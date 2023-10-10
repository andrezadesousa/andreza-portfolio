/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { headerLink } from "../../mocks/MockModalHeader";

export function HeaderDesktop() {

  return (
    <nav className="nav container" id="nav-desktop">
      <a href="##" className="nav__logo">
        <span className="nav__logo-name">Andreza</span>
      </a>

      <div className="nav__menu" id="nav-menu">
        <span className="nav__title">Menu</span>
        <h3 className="nav__name">Andreza</h3>
        <ul className="nav__list">
          {headerLink.map((headerLinks) => {
            return (
              <li key={headerLinks.id} className="nav__item">
                <a href={headerLinks.ref} className={headerLinks.classNav}>
                  {headerLinks.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
