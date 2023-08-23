import './App.css'

import Header from "./pages/Header";
import Home from "./pages/Home"

function App() {
  return (
    <body>
      <Header />
      <main className='main'>
        <Home />
        <Home />
      </main>
    </body>
  );
}

export default App;
