import React, { useEffect } from "react";
import "./style.css";
import Spacecraft from "../../assets/images/spacecraft.png";
import Planet1 from "../../assets/images/planet-1.png";
import Planet2 from "../../assets/images/planet-2.png";
import Astronaut from "../../assets/images/astronaut.png";
import Ufo from "../../assets/images/ufo.png";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

export const Home = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".home__img-1", {
      y: -100,
      duration: 1,
    })
      .from(".home__img-2", {
        duration: 1,
        rotation: 32,
        scale: 0.5,
      })
      .to(".home__img-2", {
        duration: 1,
        rotation: 15,
        scale: 1.2,
      })
      .to(".home__img-2", {
        duration: 1,
        rotation: 0,
        scale: 1,
      })
      .from(".home__img-3", {
        duration: 1,
        x: 50,
        y: -50,
        rotation: 30,
      })
      .to(".home__img-3", {
        duration: 5,
        rotation: 360,
      })
      .from(".home__img-3", {
        duration: 1,
        x: -50,
        y: -50,
        rotation: 30,
      })
      .from(".home__img-4", {
        duration: 5,
        y: -100,
        scale: 1.3,
      })
      .from(".home__img-5", {
        duration: 3,
        y: 100,
      });
  }, []);

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

          <Link to="/sobre-mim" className="home__button">
            Sobre mim
          </Link>
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
