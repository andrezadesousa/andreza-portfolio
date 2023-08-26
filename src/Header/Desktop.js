/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export function Desktop() {

    return (
      <nav className="nav container" id="nav-desktop">
        <a href="##" className="nav__logo">
          <span className="nav__logo-name">Andreza</span>
        </a>
  
        
          <div className="nav__menu" id="nav-menu">
            <span className="nav__title">Menu</span>
            <h3 className="nav__name">Andreza</h3>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  Sobre mim
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  Projetos
                </a>
              </li>
              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  Experiências
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link nav__link-button">
                  Contato
                </a>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
  