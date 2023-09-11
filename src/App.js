import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Experience from "./pages/Experience"

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home />
        <AboutMe />

      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
