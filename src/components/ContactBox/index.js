import React from "react";

export const ContactBox = ({ type, name, id, placeholder, to, text }) => {
  return (
    <div className="contact__box">
      <input
        type={type}
        name={name}
        className="contact__input"
        id={id}
        required
        placeholder={placeholder}
      />
      <label for={to} className="contact__label">
        {text}
      </label>
    </div>
  );
};
