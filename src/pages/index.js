/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import Header from "./Header";
import Home from "./Home";
import Experience from "./Experience";
import Studies from "./Studies";
import Projects from "./Projects";
import Footer from "./Footer";
import { Skills } from "./Skills";

export const Pages = () => {
  return (
    <React.StrictMode>
      <body>
        <Header />
        <main className="main">
          <Home />
          <Studies />
          <Experience />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </body>
    </React.StrictMode>
  );
};
