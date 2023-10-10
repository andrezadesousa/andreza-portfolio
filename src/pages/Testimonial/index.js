import React from "react";
import "./index.css";

export const Testimonial = () => {
  return (
      <div className="testimonial__container container">
        <div>
          {/*Testimonial 1*/}
          <div className="testimonial__content">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQHRyiI3bozYcA/profile-displayphoto-shrink_800_800/0/1637930541736?e=2147483647&v=beta&t=Y3JFWZAT6RyMCHxYKUIgV4fnUOu6yQnByOSYr-zZflA"
                  className="testimonial__img"
                  alt="testimonial"
                ></img>

                <div>
                  <h3 className="testimonial__name">Henrique Fantini</h3>
                  <span className="testimonial__client">
                    Líder Técnico | Desenvolvedor Fullstack Sênior
                  </span>
                </div>
              </div>
            </div>

            <p className="testimonial__description">
              "Andreza é uma profissional em plena ascensão e que se mostrou
              muito valiosa logo que começamos a trabalhar em conjunto. Recheada
              de soft skills apresenta uma constante sede de conhecimento e
              busca por aprendizado que a destacam como uma pessoa cheia de
              diferenciais. Sua vontade, facilidade de adaptação e consciência
              relacionada ao aprendizado contínuo, somado ao senso de
              responsabilidade e dedicação que me foi apresentado durante todas
              as nossas interações, levam-me a crer que em pouco tempo ela será
              uma profissional referência no que tange desenvolvimento de
              software. Foi uma imensa honra trabalhar junto de você!"
            </p>
          </div>
        </div>
      </div>
  );
};
