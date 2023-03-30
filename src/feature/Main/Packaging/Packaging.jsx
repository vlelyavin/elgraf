import { Container } from "../../../components/Container";
import tray from "../../../assets/images/packaging/tray.png";
import childrengoods from "../../../assets/images/packaging/childrengoods.png";
import industrialgoods from "../../../assets/images/packaging/industrialgoods.png";
import shoes from "../../../assets/images/packaging/shoes.png";
import alcoholgoods from "../../../assets/images/packaging/alcoholgoods.png";
import transporting from "../../../assets/images/packaging/transporting.png";
import exhibition from "../../../assets/images/packaging/exhibition.png";
import showboxes from "../../../assets/images/packaging/transporting.png";
import "./Packaging.css";

export const Packaging = () => {
  const items = [
    { title: "Харчових товарів (лотки)", src: tray },
    { title: "Дитячих товарів", src: childrengoods },
    { title: "Промислових товарів", src: industrialgoods },
    { title: "Взуття", src: shoes },
    { title: "Алкогольних та інших напоїв", src: alcoholgoods },
    { title: "Транспортування (bag in box)", src: transporting },
    { title: "Виставок", src: exhibition },
    { title: "Дисплеїв - show box", src: showboxes },
  ];
  return (
    <Container>
      <section className="packaging">
        <h1 className="packaging__title">Ми виготовляємо упаковки для:</h1>
        <div className="packaging__items">
          {items.map((item, id) => (
            <div className="packaging__item" key={id}>
              <div className="packaging__item__image__container">
                <img src={item.src} alt="itemImage" className="packaging__item__image" />
              </div>
              <p className="packaging__item__title">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
