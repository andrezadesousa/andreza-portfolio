import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home /> 
        <Services />
        <Projects />
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
