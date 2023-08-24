import React, { useState } from "react";

import { headerLink } from "../../mocks/MockModalHeader";

import MenuIcon from '@mui/icons-material/Menu';

export function HeaderMenu() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="nav container">
      <a href="##" className="nav__logo">
        <span className="nav__logo-name">Andreza</span>
      </a>

      {modalOpen && (
        <div setOpenModal={setModalOpen} className="nav__menu" id="nav-menu">
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
            onClick={() =>
              modalOpen ? setModalOpen(false) : setModalOpen(true)
            }
            className="nav__close"
            id="nav-close"
          >
            <i class="ri-eye-close-line"></i>
          </div>
        </div>
      )}

      <div className="nav__buttons">
        <div
          onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
          className="nav__toggle"
          id="nav-toggle"
        >
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}
