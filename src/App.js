import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Experience from "./pages/Experience"
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from "./pages/Footer"

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home /> 
        <AboutMe />        
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
