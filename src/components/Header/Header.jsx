import { Container } from "../Container";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import emailIcon from "../../assets/images/header/emailIcon.svg";
import phoneIcon from "../../assets/images/header/phoneIcon.svg";
import linkedinIcon from "../../assets/images/header/linkedinIcon.svg";
import facebookIcon from "../../assets/images/header/facebookIcon.svg";
import instagramIcon from "../../assets/images/header/instagramIcon.svg";
import logo from "../../assets/images/header/logo.svg";
import classNames from "classnames";
import "./Header.css";

export const Header = ({ background, buttonBackground, buttonColor }) => {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    if (location.pathname === ROUTES.products) {
      setActiveLink(1);
    } else if (location.pathname === ROUTES.about) {
      setActiveLink(2);
    } else if (location.pathname === ROUTES.offices) {
      setActiveLink(3);
    } else setActiveLink(4);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <>
      <Container>
        <div className="header__info" style={{ background: background }}>
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
      <header className={classNames("header", { stickToTop: scrollPosition > 0 ? true : false })}>
        <Container>
          <div className="header__inner">
            <nav className="header__nav">
              <Link
                to={ROUTES.products}
                onClick={() => setActiveLink(1)}
                className="header__nav__link"
                style={{ opacity: activeLink === 1 ? "1" : "0.8" }}
              >
                Продукція
              </Link>
              <Link
                to={ROUTES.about}
                onClick={() => setActiveLink(2)}
                className="header__nav__link"
                style={{ opacity: activeLink === 2 ? "1" : "0.8" }}
              >
                Про нас
              </Link>
              <Link
                to={ROUTES.offices}
                onClick={() => setActiveLink(3)}
                style={{ opacity: activeLink === 3 ? "1" : "0.8" }}
                className="header__nav__link"
              >
                Діючі представництва та як стати партнером
              </Link>
              <Link
                to={ROUTES.initial}
                onClick={() => setActiveLink(4)}
                style={{ opacity: activeLink === 4 ? "1" : "0.8" }}
                className="header__nav__link"
              >
                <div className="header__logo__container">
                  <img src={logo} alt="logo" className="header__logo" />
                </div>
              </Link>
            </nav>
            <div className="header__right">
              <div className="header__locales">UA</div>
              <Button title="Оформити замовлення" background={buttonBackground} color={buttonColor} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
