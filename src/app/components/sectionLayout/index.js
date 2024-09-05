import React from "react";
import "./style.css";
export const SectionLayout = ({ children }) => {
  return (
    <section className="section">
      <React.Fragment>{children}</React.Fragment>
    </section>
  );
};
