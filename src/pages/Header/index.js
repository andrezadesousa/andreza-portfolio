/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css"

const Animation = () => {
    /*Show Menu*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    /* Menu Show*/
    /* Validate if constant exists */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    /*Menu hidden*/
    /* Validate if constant exists */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    /*Remove menu mobile*/
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*Change background header*/
    const shadowHeader = () => {
        const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, 
        //add the shadow-header class to the header tag
        this.scrollY >= 50 ? header.classList.add('shadow-header')
            : header.classList.remove('shadow-header')
    }
    window.addEventListener('scroll', shadowHeader)
}

export default () => {
    return (
        <header onClick={Animation} className="header" id="header" >
            <nav className="nav container">
                <a href="##" className="nav__logo">
                    {/*<span className="nav__logo-circle">A</span>*/}
                    <span className="nav__logo-name">Andreza</span>
                </a>

                <div className="nav__menu" id="nav-menu" onChange={Animation}>
                    <span className="nav__title">Menu</span>
                    <h3 className="nav__name">Andreza</h3>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link active link">Sobre mim</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link active link">Projetos</a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__link active link">Experiências</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link active link">Contato</a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close">
                        <i class="ri-eye-close-line"></i>
                    </div>
                </div>

                <div className="nav__buttons">
                    <div className="nav__toggle" id="nav-toggle">
                        <i class="ri-menu-5-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};