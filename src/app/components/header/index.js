import React, { useState } from "react";
import "./style.css";

export const Header = () => {
  // const navToggle = () => {
  //   const navMenu = document.getElementById("nav-menu");
  //   navMenu.classList.toggle("show-menu");
  // };

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-name">Andreza</span>
        </a>

        <div
          className={`nav__menu ${showMenu ? "active" : "inactive"}`}
          id="nav-menu"
        >
          <span className="nav__title">Menu</span>

          <h3 className="nav__name">Andreza</h3>

          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="/"
                className="nav__link"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/sobre-mim"
                className="nav__link"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Sobre mim
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#experiencia-profissional"
                className="nav__link"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Experiência Profissional
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link nav__link-button">
                Contato
              </a>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div
          className="nav__buttons"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
