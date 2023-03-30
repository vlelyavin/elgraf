import logo from "../../assets/images/icons/logo.svg";
import locationIcon from "../../assets/images/icons/locationIcon.svg";
import mailIcon from "../../assets/images/icons/mailIcon.svg";
import phoneIcon from "../../assets/images/icons/phoneIcon.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import { Container } from "../Container";

export const Footer = () => {
  return (
    <Container>
      <footer className="footer">
        <div className="footer__column">
          <div className="footer__logo__container">
            <img src={logo} alt="logo" className="footer__logo" />
          </div>
          <p className="footer__logo__description">
            © 2023 Компанія <span className="semibold">«Ельґраф»</span> Усі права застережено
          </p>
          <div className="footer__description">
            Компанія «Ельґраф» - це яскраве та якісне паковання, що відповідає всім світовим стандартам. Солідна
            репутація на ринку поліграфічних послуг і цілковита довіра.
          </div>
          <div className="footer__column__location">
            <img src={locationIcon} alt="locationIcon" className="footer__column__location__icon" />
            <p className="footer__column__location__text">
              Україна, 81130, Львівська обл., Пустомитівський район,
              <span className="semibold">с. Сокільники, вул. Львівська Бічна, 15</span>
            </p>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__links">
            <Link to={ROUTES.products} className="footer__link">
              Продукція
            </Link>
            <Link to={ROUTES.about} className="footer__link">
              Про нас
            </Link>
            <Link to={ROUTES.offices} className="footer__link">
              Діючі представництва та як стати партнером
            </Link>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__contacts">
            <Button title="Оформити замовлення" background="var(--secondary)" />
            <div className="footer__contacts__block">
              <p className="footer__contacts__title">Приймальня:</p>
              <div className="footer__contacts__line">
                <img src={mailIcon} alt="mailIcon" className="footer__contacts__icon" />
                <p className="footer__contacts__line__text"> info@elgrafpack.com</p>
              </div>
              <div className="footer__contacts__line">
                <img src={phoneIcon} alt="phoneIcon" className="footer__contacts__icon" />
                <p className="footer__contacts__line__text"> +38 (032) 245-84-44</p>
              </div>
            </div>
            <div className="footer__contacts__block">
              <p className="footer__contacts__title">Відділ збуту:</p>
              <div className="footer__contacts__line">
                <img src={mailIcon} alt="mailIcon" className="footer__contacts__icon" />
                <p className="footer__contacts__line__text"> komerc@elgrafpack.com</p>
              </div>
              <div className="footer__contacts__line">
                <img src={phoneIcon} alt="phoneIcon" className="footer__contacts__icon" />
                <p className="footer__contacts__line__text"> +38 (050) 372-00-96</p>
              </div>
            </div>
            <div className="footer__contacts__block">
              <p className="footer__contacts__title">Відділ постачання:</p>
              <div className="footer__contacts__line">
                <img src={mailIcon} alt="mailIcon" className="footer__contacts__icon" />
                <p className="footer__contacts__line__text"> y.balukh@elgrafpack.com</p>
              </div>
              <div className="footer__contacts__line">
                <img src={phoneIcon} alt="phoneIcon" className="footer__contacts__icon" />
                <p className="footer__contacts__line__text"> +38 (050) 372-38-99</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};
