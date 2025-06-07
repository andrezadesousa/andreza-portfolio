import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "./app/context/ThemeContext";
import GlobalStyles from "./app/styles/GlobalStyles";
import Header from "./app/components/Header";
import Hero from "./app/components/Hero";
import Journey from "./app/components/Journey";
import Skills from "./app/components/Skills";
import Education from "./app/components/Education";
import Testimonials from "./app/components/Testimonials";
import Projects from "./app/components/Projects";
import Footer from "./app/components/Footer";

function App() {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Router>
          <GlobalStyles />
          <Header />
          <Hero />
          <Journey />
          <Education />
          <Testimonials />
          <Projects />
          <Footer />
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
