import React from "react";
import "./index.css";

export const Button = ({ href, className, title}) => {
  return (
    <a href={href} className="button">
      <i className={className}></i>{title}
    </a>
  );
};
