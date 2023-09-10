/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";
import { FooterLinks } from "../../components/FooterLink";

export default () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <FooterLinks link="#home" title="Home" />
          <FooterLinks link="#about" title="Sobre mim" />
          <FooterLinks link="#projects" title="Projetos" />

          <span class="footer__copy">
            &#169; All Rights Reserved By
            <a href="/"> Andreza.</a>
          </span>
        </ul>
      </div>
    </footer>
  );
};
