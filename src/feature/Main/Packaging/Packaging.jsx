import { Container } from "../../../components/Container";
import tray from "../../../assets/images/packaging/tray.svg";
import childrengoods from "../../../assets/images/packaging/childrengoods.svg";
import industrialgoods from "../../../assets/images/packaging/industrialgoods.svg";
import shoes from "../../../assets/images/packaging/shoes.svg";
import alcoholgoods from "../../../assets/images/packaging/alcoholgoods.svg";
import transporting from "../../../assets/images/packaging/transporting.svg";
import exhibition from "../../../assets/images/packaging/exhibition.svg";
import other from "../../../assets/images/packaging/other.svg";
import "./Packaging.css";
import { FormattedMessage } from "react-intl";
import { ROUTES } from "../../../constants/routes";
import { Link } from "react-router-dom";

export const Packaging = () => {
  const items = [
    { title: <FormattedMessage id="packaging.trays" />, src: tray, background: "#FFB919" },
    { title: <FormattedMessage id="packaging.childrenGoods" />, src: childrengoods, background: "#B1D036" },
    { title: <FormattedMessage id="packaging.industrialGoods" />, src: industrialgoods, background: "#21A7FF" },
    { title: <FormattedMessage id="packaging.shoes" />, src: shoes, background: "#366BD0" },
    { title: <FormattedMessage id="packaging.alcoholGoods" />, src: alcoholgoods, background: "#366BD0" },
    {
      title: <FormattedMessage id="packaging.other" />,
      src: other,
      background: "#6E9913",
    },
    { title: <FormattedMessage id="packaging.transport" />, src: transporting, background: "#FFB919" },
    { title: <FormattedMessage id="packaging.displays" />, src: exhibition, background: "#B1D036" },
  ];
  return (
    <Container>
      <section className="packaging">
        <h1 className="packaging__title">
          <FormattedMessage id="packaging.title" />
          {/* Ми виготовляємо упаковки для: */}
        </h1>
        <div className="packaging__items">
          {items.map((item, id) => (
            <Link to={ROUTES.products} className="packaging__item" key={id} style={{ background: item.background }}>
              <div className="packaging__item__image__container">
                <img src={item.src} alt="itemImage" className="packaging__item__image" />
              </div>
              <p className="packaging__item__title">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
};
