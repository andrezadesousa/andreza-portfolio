import React from "react";
import "./index.css"

export const SecondDescription = ({ text1, text2 }) => {
  return (
    <p className="contact__description-1">
      {text1} <b>Nome</b> e <b>Email</b>, {text2}.
    </p>
  );
};
