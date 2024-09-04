import React from "react";
import "./style.css";
import Spacecraft from "../../assets/images/spacecraft.png";
import Planet1 from "../../assets/images/planet-1.png";
import Planet2 from "../../assets/images/planet-2.png";
import Astronaut from "../../assets/images/astronaut.png";
import Ufo from "../../assets/images/ufo.png";

export const Home = () => {
  return (
    <section className="home">
      <div className="home__container container">
        <div className="home__data">
          <h3 className="home__subtitle">Unknown Zone</h3>
          <h1 className="home__title">ERROR 404</h1>
          <p className="home__description">
            Olá, essa página existe sim! hahaha para conhecer mais sobre minha
            experiência em programação, veja abaixo.
          </p>
          <a href="#about" className="home__button">
            Sobre mim
          </a>
        </div>
        <div className="home__images">
          <div className="home__blob-1">
            <img src={Spacecraft} alt="Spacecraft" className="home__img-1" />
          </div>
          <div className="home__blob-2">
            <img src={Planet1} alt="Planet1" className="home__img-2" />
          </div>
          <div className="home__blob-3">
            <img src={Planet2} alt="Planet2" className="home__img-3" />
          </div>
          <div className="home__blob-4">
            <img src={Astronaut} alt="Astronaut" className="home__img-4" />
          </div>
          <img src={Ufo} alt="Ufo" className="home__img-5" />
        </div>
      </div>
    </section>
  );
};
