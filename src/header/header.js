import React, { useState } from "react";
import { ModalHeader } from "./ModalHeader";
import "./index.css";

export function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="##" className="nav__logo">
          {/*<span className="nav__logo-circle">A</span>*/}
          <span className="nav__logo-name">Andreza</span>
        </a>

       <ModalHeader />

        {/*<div className="nav__buttons">
          <div 
            className="nav__toggle" 
            id="nav-toggle"
            onClick={() => 
              (modalOpen 
                ? setModalOpen(false) 
                : setModalOpen(true))}>
            <i class="ri-menu-5-line"></i>
          </div>
              </div>*/}
      </nav>
    </header>
  );
}
