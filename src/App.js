import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Services from './pages/Services';
import Projects from './pages/Projects';

import {Teste} from "./pages/QualificationMobile"

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home /> 
        <About />
        <Teste />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
