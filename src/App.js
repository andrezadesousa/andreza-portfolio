import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Testimonial from './pages/Testimonial';
import { Skills } from "./pages/Skills"
import { Studies } from './pages/Studies'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home />
        <Experience />
        <Testimonial />
        <Skills/>
        <Studies/>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
