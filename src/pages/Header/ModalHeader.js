import React, { useState } from "react";

export function ModalHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="##" className="nav__logo">
          {/*<span className="nav__logo-circle">A</span>*/}
          <span className="nav__logo-name">Andreza</span>
        </a>

        {modalOpen && <div setOpenModal={setModalOpen} className="nav__menu" id="nav-menu">
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">Andreza</h3>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link active link">
                Sobre mim
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link active link">
                Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link active link">
                Experiências
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link active link">
                Contato
              </a>
            </li>
          </ul>

          <div onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))} className="nav__close" id="nav-close">
            <i class="ri-eye-close-line"></i>
          </div>
        </div>}

        <div className="nav__buttons">
          <div onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))} className="nav__toggle" id="nav-toggle">
            <i class="ri-menu-5-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}