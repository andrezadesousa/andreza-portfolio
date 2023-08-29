/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

export default ({element}) => {
  return (
      <h2 className="section__title-1">
        <span>{element}</span>
      </h2>
  );
};