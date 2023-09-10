import React from "react";
import "./index.css";

export const FooterLinks = ({link, title}) => {
  return (
    <li>
      <a href={link} class="footer__link">
        {title}
      </a>
    </li>
  );
};
