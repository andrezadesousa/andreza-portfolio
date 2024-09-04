import React from "react";
import { Header } from "./components/header";
import "./global/style.css";
import { Home } from "./pages/home";
import RoutesApp from "./routes/routes";

export const Pages = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <RoutesApp />
      </main>
    </body>
  );
};
