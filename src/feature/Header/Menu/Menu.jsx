import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { FormattedMessage } from "react-intl";
import "./Menu.css";
import { Button } from "../../../components/Button";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleOrderFormVisibility } from "../../../constants/actions";

export const Menu = ({ isMenuVisible, activeLink, setActiveLink }) => {
  const menuRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isMenuVisible) {
      menuRef.current.style.transform = "translateY(0)";
    } else {
      menuRef.current.style.transform = "translateY(-110%)";
    }
  });
  return (
    <section className="menu" ref={menuRef}>
      <div className="menu__links">
        <Link
          to={ROUTES.products}
          className="menu__link"
          onClick={() => setActiveLink(1)}
          style={{ opacity: activeLink === 1 ? "1" : "0.8" }}
        >
          <FormattedMessage id="production" />
        </Link>
        <Link
          to={ROUTES.about}
          className="menu__link"
          onClick={() => setActiveLink(2)}
          style={{ opacity: activeLink === 2 ? "1" : "0.8" }}
        >
          <FormattedMessage id="aboutUs" />
        </Link>
        <Link
          to={ROUTES.offices}
          className="menu__link"
          onClick={() => setActiveLink(3)}
          style={{ opacity: activeLink === 3 ? "1" : "0.8" }}
        >
          <FormattedMessage id="representatives" />
        </Link>
      </div>
      <div className="menu__lower">
        <div className="menu__button__container" onClick={() => dispatch(toggleOrderFormVisibility(true))}>
          <Button
            color="var(--primary)"
            background="var(--black)"
            width="250px"
            title={<FormattedMessage id="button.order" />}
          />
        </div>
      </div>
    </section>
  );
};
