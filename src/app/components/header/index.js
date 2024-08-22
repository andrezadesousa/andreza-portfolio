import React from "react";
import "./style.css";

export const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-name">Andreza</span>
        </a>

        <div className="nav__menu" id="nav-menu">
          <span className="nav__title">Menu</span>

          <h3 className="nav__name">Andreza</h3>

          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Sobre mim
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link">
                Experiência Profissional
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link nav__link-button">
                Contato
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
