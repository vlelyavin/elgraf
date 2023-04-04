import { Container } from "../Container";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Menu } from "../../feature/Header/Menu";
import emailIcon from "../../assets/images/header/emailIcon.svg";
import phoneIcon from "../../assets/images/header/phoneIcon.svg";
import linkedinIcon from "../../assets/images/header/linkedinIcon.svg";
import facebookIcon from "../../assets/images/header/facebookIcon.svg";
import instagramIcon from "../../assets/images/header/instagramIcon.svg";
import largeLogo from "../../assets/images/icons/largeLogo.svg";
import logo from "../../assets/images/icons/logo.svg";
import classNames from "classnames";

import "./Header.css";
import { setLocale, toggleOrderFormVisibility } from "../../constants/actions";

export const Header = () => {
  const firstLine = useRef();
  const secondLine = useRef();
  const thirdLine = useRef();
  const [isMenuVisible, toggleMenuVisibility] = useState(false);
  const locale = useSelector((state) => state.locale);
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMenuClick = () => {
    toggleMenuVisibility(!isMenuVisible);
  };

  useEffect(() => {
    if (isMenuVisible) {
      firstLine.current.style.transform = "rotate(45deg) translate(7px, 7px)";
      secondLine.current.style.opacity = "0";
      thirdLine.current.style.transform = "rotate(-45deg) translate(7px, -7px)";
    } else {
      firstLine.current.style.transform = "rotate(0) translate(0)";
      secondLine.current.style.opacity = "1";
      thirdLine.current.style.transform = "rotate(0) translate(0)";
    }
  }, [isMenuVisible]);

  const handleValueChange = (event) => {
    dispatch(setLocale(event.target.value));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === ROUTES.products) {
      setActiveLink(1);
    } else if (location.pathname === ROUTES.about) {
      setActiveLink(2);
    } else if (location.pathname === ROUTES.offices) {
      setActiveLink(3);
    } else setActiveLink(4);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

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
              <p className="header__info__item__line__title">
                <FormattedMessage id="header.toOrder" />
              </p>
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
                <FormattedMessage id="production" />
              </Link>
              <Link
                to={ROUTES.about}
                onClick={() => setActiveLink(2)}
                className="header__nav__link"
                style={{ opacity: activeLink === 2 ? "1" : "0.8" }}
              >
                <FormattedMessage id="aboutUs" />
              </Link>
              <Link
                to={ROUTES.offices}
                onClick={() => setActiveLink(3)}
                style={{ opacity: activeLink === 3 ? "1" : "0.8" }}
                className="header__nav__link"
              >
                <FormattedMessage id="representatives" />
              </Link>
              <Link
                to={ROUTES.initial}
                onClick={() => setActiveLink(4)}
                style={{ opacity: activeLink === 4 ? "1" : "0.8" }}
                className="header__nav__link"
              >
                <div className="header__logo__container">
                  <img src={largeLogo} alt="largeLogo" className="header__logo" />
                </div>
              </Link>
            </nav>
            <div className="header__right">
              <select className="header__locales" value={locale} onChange={handleValueChange}>
                <option defaultValue className="header__locale__option" value="ua">
                  UA
                </option>
                <option defaultValue className="header__locale__option" value="ru">
                  RU
                </option>
                <option className="header__locale__option" value="us">
                  US
                </option>
              </select>

              <Button
                onClick={() => dispatch(toggleOrderFormVisibility(true))}
                title={<FormattedMessage id="button.order" />}
              />
            </div>
          </div>
        </Container>
      </header>
      <header className="header__mobile">
        <Link to={ROUTES.initial} className="header__mobile__logo__container" onClick={() => setActiveLink(4)}>
          <img src={logo} alt="logo" className="header__mobile__logo" />
        </Link>
        <div className="header__right">
          <select className="header__locales menulocale" value={locale} onChange={handleValueChange}>
            <option defaultValue className="header__locale__option" value="ua">
              UA
            </option>
            <option defaultValue className="header__locale__option" value="ru">
              RU
            </option>
            <option className="header__locale__option" value="us">
              US
            </option>
          </select>
          <div className="header__mobile__menu__container" onClick={handleMenuClick}>
            <div className="header__menu__line" ref={firstLine}></div>
            <div className="header__menu__line" ref={secondLine}></div>
            <div className="header__menu__line" ref={thirdLine}></div>
            {/* <img src={menu} alt="menu" className="header__mobile__menu" /> */}
          </div>
        </div>
      </header>
      <Menu isMenuVisible={isMenuVisible} activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  );
};
