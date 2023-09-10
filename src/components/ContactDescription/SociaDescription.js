import React from "react";
import "./index.css"

const SociaDescription = ({ FirstText, SecondText }) => {
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

export default SociaDescription;
