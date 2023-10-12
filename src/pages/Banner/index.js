/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { BannerTitle } from "../../components/Titles/BannerTitle";
import { BannerCard } from "../../components/BannerCard";

export default () => {
  return (
    <section className="banner section container">
      <div className="banner__bg">
        <BannerTitle firstTitle="Primeiro texto" secondTitle="Segundo texto" />
        <div className="banner__container grid">
          <BannerCard
            number="01"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex nunc, tempor condimentum rutrum sed, interdum at felis"
          />
          <BannerCard
            number="02"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex nunc, tempor condimentum rutrum sed, interdum at felis"
          />
          <BannerCard
            number="03"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex nunc, tempor condimentum rutrum sed, interdum at felis"
          />
        </div>
      </div>
    </section>
  );
};
