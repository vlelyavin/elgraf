import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import "./assets/styles/main.css";
import "./assets/styles/fonts.css";
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { Offices } from "./pages/Offices";
import { About } from "./pages/About";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.initial} element={<Main />} />
        <Route path={ROUTES.products} element={<Products />} />
        <Route path={ROUTES.offices} element={<Offices />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.order} element={<Products />} />
      </Routes>
    </>
  );
};
