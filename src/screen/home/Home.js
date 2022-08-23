import React from "react";
import "./Style.css";
import {
  HomeData,
  HomeSubtitle,
  HomeTitle,
  HomeDescription,
  HomeImg,
  HomeShadow,
} from "../../components/HomeStyle";
import { HomeSocial } from "../../components/HomeSocial";
import { Button, ScrollButton } from "../../components/Buttons";
import GhostImg from "../../assets/image/ghost-img.png";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
          <HomeData>
            <HomeSubtitle>Booh! Error 404 </HomeSubtitle>
            <HomeTitle>Hey, I'm Andreza </HomeTitle>
            <HomeSubtitle>Frontend Developer </HomeSubtitle>
            <HomeDescription>
              This is the official website of my portfolio to show all my work
              related to web development
              <br></br>“Good design is good business.”
              <cite></cite>- Thomas J. Watson
            </HomeDescription>
            <p></p>
            <HomeSocial></HomeSocial>
            <Button href="#contact" className="button--flex">
              Contact Me
              <i class="uil uil-message button__icon"></i>
            </Button>
          </HomeData>

          <HomeImg>
            <a href="#about">
              <img src={GhostImg} alt="" href="#about"></img>
              <HomeShadow></HomeShadow>
            </a>
          </HomeImg>

        <div className="home__scroll">
          <ScrollButton href="#about" className="button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
          </ScrollButton>
        </div>
      </div>
    </section>
  );
};

export default Home;
