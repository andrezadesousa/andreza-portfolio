import React from "react";
import "./index.css"

export const SociaDescription = ({ FirstText, SecondText }) => {
  return (
    <div>
      <p className="contact__social-description-1">
        {FirstText}
      </p>

      <p className="contact__social-description-2">
      {SecondText}
      </p>
    </div>
  );
};
