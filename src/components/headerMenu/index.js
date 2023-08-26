import React, { useState } from "react";

import { headerLink } from "../../mocks/MockModalHeader";

import MenuIcon from '@mui/icons-material/Menu';

export function HeaderMenu() {
  const [modalOpen, setModalOpen] = useState();

  return (
    <nav className="nav container">
      <a href="##" className="nav__logo">
        <span className="nav__logo-name">Andreza</span>
      </a>

      {modalOpen ||
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

          <div
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="nav__close"
            id="nav-close"
          >
            <i class="ri-eye-close-line"></i>
          </div>
        </div>
      }

      <div className="nav__buttons">
        <div
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
          className="nav__toggle"
          id="nav-toggle"
        >
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}
