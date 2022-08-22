import '../src/global/style/Style.css';

import Header from './screen/header/Header';
import Home from './screen/home/Home'

function App() {
  return (
    <body>
        <Header></Header>
      <main class="main">
        <Home></Home>
      </main>
      
    </body>
  );
}

export default App;
