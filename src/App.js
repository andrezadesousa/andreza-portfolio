import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Studies from './pages/Studies';
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
        <About />
        <Experience />
        <Studies />
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
