import React from "react";
import { Header } from "./components/header";
import "./global/style.css";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Experience } from "./pages/experience";

export const Pages = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
      </main>
    </body>
  );
};
