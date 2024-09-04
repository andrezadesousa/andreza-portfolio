import React from "react";
import { Header } from "./components/header";
import "./global/style.css";
import { Home } from "./pages/home";
// import { About } from "./pages/about";

export const Pages = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <Home />
        {/* <About /> */}
      </main>
    </body>
  );
};
