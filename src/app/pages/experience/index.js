import React from "react";
import "./style.css";
import { TitleSection } from "../../components/titleSection";
import { testimonyData } from "../../constants/testimony.constants.ts";
import { Testimony } from "../../components/testimony";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const Experience = () => {
  return (
    <section className="section experience" id="experiencia-profissional">
      <TitleSection title="Experiência Profissional" />
      <div className="testimony__container"></div>
    </section>
  );
};
