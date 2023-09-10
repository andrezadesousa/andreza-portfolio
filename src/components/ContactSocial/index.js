import React from "react";

const MediaSocialContact = ({link, icon}) => {
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

export default MediaSocialContact;
