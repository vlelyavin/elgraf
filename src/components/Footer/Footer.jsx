import largeLogo from "../../assets/images/icons/largeLogo.svg";
import locationIcon from "../../assets/images/icons/locationIcon.svg";
import mailIcon from "../../assets/images/icons/mailIcon.svg";
import phoneIcon from "../../assets/images/icons/phoneIcon.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import { Container } from "../Container";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Footer = () => {
  const locale = useSelector((state) => state.locale);
  const [address, setAddress] = useState("с. Сокільники, вул. Львівська Бічна, 15");
  useEffect(() => {
    if (locale === "us") {
      setAddress("c. Sokolnyky, str. Lvivska Bichna, 15");
    } else if (locale === "ru") {
      setAddress("с. Сокольники, ул. Львовская Боковая, 15");
    } else {
      setAddress("с. Сокільники, вул. Львівська Бічна, 15");
    }
  }, [locale]);
  return (
    <Container>
      <footer className="footer">
        <div className="footer__column">
          <div className="footer__logo__container">
            <img src={largeLogo} alt="largeLogo" className="footer__logo" />
          </div>
          <p className="footer__logo__description">
            <FormattedMessage id="footer.license" />
          </p>
          <div className="footer__description">
            {/* Компанія «Ельґраф» - це яскраве та якісне паковання, що відповідає всім світовим стандартам. Солідна
            репутація на ринку поліграфічних послуг і цілковита довіра. */}
            <FormattedMessage id="footer.description" />
          </div>
          <div className="footer__column__location">
            <img src={locationIcon} alt="locationIcon" className="footer__column__location__icon" />
            <p className="footer__column__location__text">
              <FormattedMessage id="location" values={{ address: <strong>{address}</strong> }} />
              {/* Україна, 81130, Львівська обл., Пустомитівський район,
              <span className="bold"> с. Сокільники, вул. Львівська Бічна, 15</span> */}
            </p>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__links">
            <Link to={ROUTES.products} className="footer__link">
              {/* Продукція */}
              <FormattedMessage id="production" />
            </Link>
            <Link to={ROUTES.about} className="footer__link">
              <FormattedMessage id="aboutUs" />
              {/* Про нас */}
            </Link>
            <Link to={ROUTES.offices} className="footer__link">
              <FormattedMessage id="representatives" />
              {/* Діючі представництва та як стати партнером */}
            </Link>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__contacts">
            <Link to={ROUTES.order} className="footer__button__container">
              <Button title={<FormattedMessage id="button.order" />} background="var(--secondary)" />
            </Link>
            <div className="footer__contacts__block">
              <p className="footer__contacts__title">
                <FormattedMessage id="reception" />
                {/* Приймальня: */}
              </p>
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
              <p className="footer__contacts__title">
                <FormattedMessage id="salesDepartment" />
                {/* Відділ збуту: */}
              </p>
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
              <p className="footer__contacts__title">
                <FormattedMessage id="supplyDepartment" />
                {/* Відділ постачання: */}
              </p>
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
