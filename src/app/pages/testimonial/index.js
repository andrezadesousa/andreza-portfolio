import React from "react";
import "./style.css";

import { SectionLayout } from "../../components/sectionLayout";
import { TitleSectionBlack } from "../../components/title-section-black";
import { testimonyData } from "../../constants/testimony.constants";

export const Testimonial = () => {
  return (
    <SectionLayout id="depoimentos">
      <TitleSectionBlack title="O que falam" subtitle="Sobre mim" />
      <div className="testimonial__container">
        {testimonyData.map((testimony) => (
          <a href="#" className="testimonial__box" key={testimony.name}>
            <img src={testimony.image} className="testimonial__img" />
            <p className="testimonial__text">{testimony.text}</p>
            <div className="line"></div>
            <p className="testimonial__name">{testimony.name}</p>
            <p className="testimonial__position">{testimony.position}</p>
          </a>
        ))}
      </div>
    </SectionLayout>
  );
};
