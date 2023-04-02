import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { Offices } from "./pages/Offices";
import { About } from "./pages/About";
import { Order } from "./pages/Order";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import messages_us from "./messages/us.json";
import messages_ru from "./messages/ru.json";
import messages_ua from "./messages/ua.json";
import "./assets/styles/main.css";
import "./assets/styles/fonts.css";

export const App = () => {
  const locale = useSelector((state) => state.locale);
  const messages = {
    ru: messages_ru,
    us: messages_us,
    ua: messages_ua,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Routes>
        <Route path={ROUTES.initial} element={<Main />} />
        <Route path={ROUTES.products} element={<Products />} />
        <Route path={ROUTES.offices} element={<Offices />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.order} element={<Order />} />
      </Routes>
    </IntlProvider>
  );
};
