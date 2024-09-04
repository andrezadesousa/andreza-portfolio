import React from "react";
import { Header } from "./components/header";
import "./global/style.css";
import { About } from "./pages/about";

export const Pages = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <About />
      </main>
    </body>
  );
};
