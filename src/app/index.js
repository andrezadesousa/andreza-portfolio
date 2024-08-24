import React from "react";
import { Header } from "./components/header";
import "./global/style.css";
import { Home } from "./pages/home";

export const Pages = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <Home />
      </main>
    </body>
  );
};
