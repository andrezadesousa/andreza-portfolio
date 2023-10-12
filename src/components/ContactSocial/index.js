import React from "react";

export const MediaSocialContact = ({link, icon}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="contact__social-link"
      rel="noreferrer"
    >
      <i className={icon}></i>
    </a>
  );
};
