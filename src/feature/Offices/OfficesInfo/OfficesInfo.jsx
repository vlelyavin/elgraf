import locationIcon from "../../../assets/images/icons/locationIcon.svg";
import { Container } from "../../../components/Container";
import "./OfficesInfo.css";

export const OfficesInfo = () => {
  return (
    <Container>
      <section className="offices">
        <h1 className="offices__title">Головний офіс</h1>
        <div className="offices__info">
          <div className="offices__location">
            <p className="offices__description">Товариство з обмеженою відповідальністю «ЕЛЬґРАФ»</p>
            <div className="offices__location__line">
              <img src={locationIcon} alt="locationIcon" className="offices__location__line__image" />
              <p className="offices__location__text">
                вул. Львівська Бічна, 15, 81130, Львівська обл., Пустомитівський р-н, с. Сокільники, Україна.
              </p>
            </div>
          </div>
          <div className="offices__contacts">
            <div className="offices__contacts__column">
              <p className="offices__contacts__title">Приймальня:</p>
              <p className="offices__contacts__title">Відділ збуту:</p>
              <p className="offices__contacts__title">Відділ постачання::</p>
            </div>
            <div className="offices__contacts__column">
              <p className="offices__contacts__email">info@elgrafpack.com</p>
              <p className="offices__contacts__email">komerc@elgrafpack.com</p>
              <p className="offices__contacts__email">y.balukh@elgrafpack.com</p>
            </div>
            <div className="offices__contacts__column">
              <p className="offices__contacts__phone">+38 (032) 245-84-44</p>
              <p className="offices__contacts__phone">+38 (050) 372-00-96</p>
              <p className="offices__contacts__phone">+38 (050) 372-38-99</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
