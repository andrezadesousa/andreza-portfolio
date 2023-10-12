/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { ArticleExperienceDesktop } from "../../components/ArticleExperienceDesktop"

import { Logos } from "../../components/Logos";
import { Testimonial } from "../Testimonial/index";

export default () => {
  return (
    <section className="steps section container">
      <div className="steps__bg">
        <Logos />
        <Testimonial />
        {/*<h2 className="section__title-center steps__title">
          Steps to start your <br></br>plants off right
        </h2>*/}
        <div className="steps__container grid">
          <div className="steps__card">
            <div className="steps__card-number">01</div>
            <h3 className="steps__card-title">Choose Plant</h3>
            <p className="steps__card-description">
              We have several varieties plants you can choose from.
            </p>
          </div>

          <div className="steps__card">
            <div className="steps__card-number">01</div>
            <h3 className="steps__card-title">Choose Plant</h3>
            <p className="steps__card-description">
              We have several varieties plants you can choose from.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
