import '../src/global/Styles/Style.css';

import Header from './screen/header/Header';
import Home from './screen/home/Home'
import About from './screen/about/About'

function App() {
  return (
    <body>
        <Header></Header>
      <main class="main">
        <Home></Home>
        <About></About>
      </main>
      
    </body>
  );
}

export default App;
