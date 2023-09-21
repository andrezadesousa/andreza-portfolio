/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import Perfil from "../../images/testimonial.png";

export default () => {
  return (
    <section className="testimonial section container">
      <div className="testimonial__container grid">
        <div className="swiper testimonial-swiper">
          <div className="swiper-wrapper">
            <div className="testimonial__card swiper-slide">
              <div className="testimonial__quote">
                <i className="bx bxs-quote-alt-left"></i>
              </div>
              <p className="testimonial__description">
                Andreza é uma profissional em plena ascensão e que se mostrou
                muito valiosa logo que começamos a trabalhar em conjunto.
                Recheada de soft skills apresenta uma constante sede de
                conhecimento e busca por aprendizado que a destacam como uma
                pessoa cheia de diferenciais. Sua vontade, facilidade de
                adaptação e consciência relacionada ao aprendizado contínuo,
                somado ao senso de responsabilidade e dedicação que me foi
                apresentado durante todas as nossas interações, levam-me a crer
                que em pouco tempo ela será uma profissional referência no que
                tange desenvolvimento de software.
              </p>
              <h3 className="testimonial__date">Julho de 2022</h3>

              <div className="testimonial__perfil">
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQHRyiI3bozYcA/profile-displayphoto-shrink_800_800/0/1637930541736?e=2147483647&v=beta&t=Y3JFWZAT6RyMCHxYKUIgV4fnUOu6yQnByOSYr-zZflA"
                  alt=""
                  className="testimonial__perfil-img"
                />

                <div className="testimonial__perfil-data">
                  <span className="testimonial__perfil-name">Henrique Fantini</span>
                  <span className="testimonial__perfil-detail">
                    Líder Técnico
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial__images">
          <div className="testimonial__square"></div>
          <img src={Perfil} alt="" className="testimonial__img" />
        </div>
      </div>
    </section>
  );
};
