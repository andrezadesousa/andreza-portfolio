import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import About from "./pages/About"
import Qualification from "./pages/Qualification"
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home /> 
        <About />
        <Qualification />
        <Services />
        <Projects />
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
