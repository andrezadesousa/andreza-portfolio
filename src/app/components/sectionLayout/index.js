import React from "react";
import "./style.css";
export const SectionLayout = ({ children, id }) => {
  return (
    <section className="section" id={id}>
      <React.Fragment>{children}</React.Fragment>
    </section>
  );
};
