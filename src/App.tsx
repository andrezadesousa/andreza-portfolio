"use client";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./app/styles/GlobalStyles";
import { lightTheme, darkTheme } from "./app/styles/theme";
import Header from "./app/components/Header";
import Hero from "./app/components/Hero";
import SkillsSection from "./app/components/SkillsSection";
import ProjectsSection from "./app/components/ProjectsSection";
import Footer from "./app/components/Footer";
import { ThemeContext } from "./app/context/ThemeContext";
import AboutSection from "./app/components/AboutSection";
import CareerSection from "./app/components/CarrerSection";

function App() {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router>
          <GlobalStyles />
          <Header />
          <main>
            <Hero />
            <AboutSection />
            <CareerSection />
            <SkillsSection />
            <ProjectsSection />
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
