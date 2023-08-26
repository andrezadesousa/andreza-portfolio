import React from 'react';
import './App.css'

import Header from './pages/Header';
import Home from "./pages/Home"

function App() {
  return (
    <React.StrictMode>
      <body>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </body>
    </React.StrictMode>
  );
}

export default App;
