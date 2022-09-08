import React from "react";
import "./Style.css";
import { HomeTitle, HomeSubtitle, HomeDescription, HomeData, HomeImg, HomeShadow } from "../../components/StyleComponent/HomeStyle";
import { HomeSocial } from "../../components/MediaSocial/HomeSocial";
import { ScrollButton } from "../../components/Buttons/ScrollButton/index";
import {Button} from '../../components/Buttons/Button/index';
import GhostImg from "../../assets/image/ghost-img.png";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
          <HomeData>
            <HomeSubtitle>Booh! Error 404 </HomeSubtitle>
            <HomeTitle>Hey, I'm Andreza</HomeTitle>
            <HomeSubtitle>Frontend Developer </HomeSubtitle>
            <HomeDescription>
              This is the official website of my portfolio to show all my work
              related to web development
              <br></br>“Good design is good business.”
              <cite></cite>- Thomas J. Watson
            </HomeDescription>
            <p></p>
            <HomeSocial></HomeSocial>
            <Button href="#contact">
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
