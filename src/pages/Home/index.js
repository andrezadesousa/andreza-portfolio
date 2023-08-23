/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css"

import Perfil from "../../images/teste2.jpeg"
import Arrow from "../../images/curved-arrow.svg"
import Line from "../../images/random-lines.svg"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';

export default () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <h1 className="home__name">Andreza Sousa </h1>

                <div className="home__perfil">
                    <div className="home__image">
                        <img src={Perfil} className="home__img" alt="Perfil"></img>

                        <div className="home__shadow"></div>

                        <img src={Arrow} className="home__arrow" alt="Perfil"></img>
                        <img src={Line} className="home__line" alt="Perfil"></img>
                    </div>

                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/sousa-andreza/" target="_blank" class="home__social-link">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/andrezadesousa" target="_blank" class="home__social-link">
                            <GitHubIcon />
                        </a>
                        <a href="https://andreza-sousa.web.app/" target="_blank" class="home__social-link">
                            <WorkIcon />
                        </a>
                    </div>
                </div>

                <div className="home__info">
                    <p className="home__description">
                        <b>Frontend Developer</b>, with knowledge in web
                        development and design, I offer the best
                        projects resulting in quality work.
                    </p>
                </div>
            </div>
        </section>
    );
};