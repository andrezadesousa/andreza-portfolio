import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Experience } from "../pages/experience";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sobre-mim" element={<About />} />
        {/* <Route path="/experiencia-profissional" element={<Experience />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
