/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";

export default () => {
  return (
    <section className="studies section" id="studies">
      <SecondTitle title="Educação." />
      <div className="services__container container grid"></div>
    </section>
  );
};
