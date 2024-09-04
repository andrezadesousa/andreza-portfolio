import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About } from "../pages/about";
import { Home } from "../pages/home";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
