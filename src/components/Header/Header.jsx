import { Container } from "../Container";
import emailIcon from "../../assets/images/header/emailIcon.png";
import phoneIcon from "../../assets/images/header/phoneIcon.png";
import linkedinIcon from "../../assets/images/header/linkedinIcon.png";
import facebookIcon from "../../assets/images/header/facebookIcon.png";
import instagramIcon from "../../assets/images/header/instagramIcon.png";
import logo from "../../assets/images/header/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Products } from "../../pages/Products";
import { Main } from "../../pages/Main/Main";

export const Header = () => {
  return (
    <>
      <Container>
        <div className="header__info">
          <div className="header__info__item emails">
            <div className="header__info__item__line">
              <div className="header__info__item__line__icon__container">
                <img src={emailIcon} alt="emailIcon" className="header__info__item__line__icon" />
              </div>
              <p className="header__info__item__line__text">info@elgrafpack.com</p>
            </div>
            <div className="header__info__item__line">
              <p className="header__info__item__line__title">Для замовлення:</p>
              <p className="header__info__item__line__text">info@elgrafpack.com</p>
            </div>
          </div>
          <div className="header__info__item">
            <div className="header__info__item__line__icon__container">
              <img src={phoneIcon} alt="phoneIcon" className="header__info__item__line__icon" />
            </div>
            <p className="header__info__item__line__text">+38 (032) 245-84-44 / +38 (050) 372-00-96</p>
          </div>
          <div className="header__info__item">
            <div className="header__info__item__line__icon__container">
              <img src={linkedinIcon} alt="linkedinIcon" className="header__info__item__line__icon" />
            </div>
            <div className="header__info__item__line__icon__container">
              <img src={facebookIcon} alt="facebookIcon" className="header__info__item__line__icon" />
            </div>
            <div className="header__info__item__line__icon__container">
              <img src={instagramIcon} alt="instagramIcon" className="header__info__item__line__icon" />
            </div>
          </div>
        </div>
      </Container>
      <header className="header">
        <Container>
          <nav className="header__nav">
            <Link to={ROUTES.products} element={<Products />} className="header__nav__link">
              Продукція
            </Link>
            <Link to={ROUTES.products} element={<Products />} className="header__nav__link">
              Про нас
            </Link>
            <Link to={ROUTES.products} element={<Products />} className="header__nav__link">
              Діючі представництва та як стати партнером
            </Link>
            <Link to={ROUTES.initial} element={<Main />} className="header__nav__link">
              <div className="header__logo__container">
                <img src={logo} alt="logo" className="header__logo" />
              </div>
            </Link>
          </nav>
        </Container>
      </header>
    </>
  );
};
