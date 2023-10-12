import React from "react";
import "./index.css";

export const ButtonGhost = ({ href, className, title }) => {
  return (
    <a 
      href={href} 
      rel="noreferrer" 
      target="_blank" 
      className="button__ghost">
      <i className={className}></i>{title}
    </a>
  );
};
