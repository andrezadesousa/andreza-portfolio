import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Projects from './pages/Projects';


function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home /> 
        <About />
        <Experience />
        <Skills />
        <Qualification />
        <Projects />
        
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
