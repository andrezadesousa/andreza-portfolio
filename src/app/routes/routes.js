import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About } from "../pages/about";
import { Home } from "../pages/home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sobre-mim" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
