import React from "react";
import "./App.css";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import { Skills } from "./pages/Skills";
import { Studies } from "./pages/Studies";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

import Teste from "./pages/Teste";

function App() {
  return (
    <React.StrictMode>
      <body>
        <Header />
        <main className="main">
          <Home />
          <Experience />
          <Skills />
          <Studies />
          <Projects />
          <Footer />
        </main>
      </body>
    </React.StrictMode>
  );
}

export default App;
