import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import About from './pages/About';

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
