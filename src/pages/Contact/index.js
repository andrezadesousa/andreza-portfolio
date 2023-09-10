/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";

import Curved from "../../images/curved-arrow.svg";

export default () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data">
          <SecondTitle title="Me contate." />

          <p className="contact__description-1">
            I will read all emails. Send me any message you want and I'll get
            back to you.
          </p>

          <p className="contact__description-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won't
            receive anything other than your reply.
          </p>

          <div class="geometric-box"></div>
        </div>

        <div className="contact__mail">
          <h2 className="contact__title">Send Me A Message</h2>

          <form action="" className="contact__form" id="contact-form">
            <div className="contact__group">
              <div className="contact__box">
                <input
                  type="text"
                  name="user_name"
                  className="contact__input"
                  id="name"
                  required
                  placeholder="First Name"
                />
                <label for="name" className="contact__label">
                  First name
                </label>
              </div>
              <div class="contact__box">
                <input
                  type="email"
                  name="user_email"
                  className="contact__input"
                  id="email"
                  required
                  placeholder="Email Address"
                />
                <label for="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div class="contact__box">
              <input
                type="text"
                name="user_subject"
                class="contact__input"
                id="subject"
                required
                placeholder="Subject"
              />
              <label for="subject" class="contact__label">
                Subject
              </label>
            </div>

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
            <div>
              <p className="contact__social-description-1">
                Does not send emails
              </p>

              <p className="contact__social-description-2">
                Write me on my social networks
              </p>
            </div>

            <div class="contact__social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="contact__social-link"
                rel="noreferrer"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="contact__social-link"
                rel="noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="contact__social-link"
                rel="noreferrer"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
