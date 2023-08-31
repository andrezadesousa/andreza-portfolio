import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"
import Services from './pages/Services';

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home /> 
        <Services />
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
