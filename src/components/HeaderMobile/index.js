/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { headerLink } from "../../mocks/MockModalHeader";

export function HeaderMobile() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="nav container" id="nav-mobile">
      <a href="/" className="nav__logo">
        <span className="nav__logo-name">Andreza</span>
      </a>

      {showLinks && (
        <div setShowLinks={setShowLinks} className="nav__menu" id="nav-menu">
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">Andreza</h3>
          <ul className="nav__list">
            {headerLink.map((headerLinks) => {
              return (
                <li key={headerLinks.id} className="nav__item">
                  <a href={headerLinks.ref} to={headerLinks.ref} className={headerLinks.classNav}>
                    {headerLinks.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            onClick={() => setShowLinks(!showLinks)}
            className="nav__close"
            id="nav-close"
          >
            <i class="ri-eye-close-line"></i>
          </div>
        </div>
      )}

      <div className="nav__buttons">
        <div
          onClick={() => setShowLinks(!showLinks)}
          className="nav__toggle"
          id="nav-toggle"
        >
          <i class="ri-menu-5-line"></i>
        </div>
      </div>
    </nav>
  );
}
