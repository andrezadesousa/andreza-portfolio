import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Experience } from "../pages/experience";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/experiencia-profissional" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
