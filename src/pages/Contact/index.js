/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";
import ContactTitle from "../../components/Titles/ContactTitle";

import GeometricBox from "../../components/GeometricBox"

import MediaSocialContact from "../../components/ContactSocial";
import FirstDescription from "../../components/ContactDescription/FirstDescription";
import SecondDescription from "../../components/ContactDescription/SecondDescription";
import SocialDescrition from "../../components/ContactDescription/SociaDescription"
import ContactBox from "../../components/ContactBox";

import Curved from "../../images/curved-arrow.svg";

export default () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data">
          <SecondTitle title="Me contate." />
          <FirstDescription 
            text="Deseja falar comigo? Envie-me uma mensagem que eu entrarei em contato com você." />
          <SecondDescription
            text1="Eu preciso do seu"
            text2="mas você não receberá nada além da sua resposta"
          />
          <GeometricBox/>
        </div>

        <div className="contact__mail">
          <ContactTitle title="Envie sua mensagem" />

          <form action="" className="contact__form" id="contact-form">
            <div className="contact__group">
              <ContactBox
                type="text"
                name="user_name"
                id="name"
                placeholder="Primeiro Nome"
                to="name"
                text="Primeiro Nome"
              />
              <ContactBox
                type="email"
                name="user_email"
                id="email"
                placeholder="Seu email"
                to="email"
                text="Seu email"
              />
            </div>

            <ContactBox
              type="text"
              name="user_subject"
              id="subject"
              placeholder="Assunto"
              to="subject"
              text="Assunto"
            />

            <div class="contact__box contact__area">
              <textarea
                name="user_message"
                id="message"
                class="contact__input"
                required
                placeholder="Message"
              ></textarea>
              <label for="message" class="contact__label">
                Message
              </label>
            </div>

            <p className="contact__message" id="contact-message">
              {/*Message sent successfully ✅*/}
            </p>

            <button type="submit" className="contact__button button">
              <i className="ri-send-plane-line"></i> Send Message
            </button>
          </form>
        </div>

        <div className="contact__social">
          <img src={Curved} className="contact__social-arrow" alt="arrow"></img>

          <div className="contact__social-data">
            <SocialDescrition
            FirstText="Não deseja enviar email?"
            SecondText="Contate me através das redes sociais"
            />

            <div class="contact__social-links">
              <MediaSocialContact
                link="https://www.linkedin.com/in/sousa-andreza/"
                icon="ri-linkedin-box-fill"
              />
              <MediaSocialContact
                link="https://github.com/andrezadesousa"
                icon="ri-github-fill"
              />
              <MediaSocialContact
                link="https://www.linkedin.com/in/sousa-andreza/"
                icon="ri-instagram-line"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
