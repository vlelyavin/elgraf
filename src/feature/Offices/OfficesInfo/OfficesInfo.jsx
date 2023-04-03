import { FormattedMessage } from "react-intl";
import locationIcon from "../../../assets/images/icons/locationIcon.svg";
import { Container } from "../../../components/Container";
import "./OfficesInfo.css";

export const OfficesInfo = () => {
  return (
    <Container>
      <section className="offices">
        <h1 className="offices__title">
          <FormattedMessage id="offices.title" />
        </h1>
        <div className="offices__info">
          <div className="offices__location">
            <p className="offices__description">
              <FormattedMessage id="offices.limited" values={{ letter: "\u0490" }} />
              {/* Товариство з обмеженою відповідальністю «ЕЛЬґРАФ» */}
            </p>
            <div className="offices__location__line">
              <img src={locationIcon} alt="locationIcon" className="offices__location__line__image" />
              <p className="offices__location__text">
                <FormattedMessage id="offices.location" values={{ br: <br /> }} />
                {/* <FormattedMessage id="location" values={{ br: <br />, address: <strong>{address}</strong> }} /> */}
                {/* вул. Львівська Бічна, 15, 81130, Львівська обл., Пустомитівський р-н, с. Сокільники, Україна. */}
              </p>
            </div>
          </div>
          <div className="offices__contacts">
            <div className="offices__contacts__column">
              <p className="offices__contacts__title">
                <FormattedMessage id="reception" />
                {/* Приймальня: */}
              </p>
              <p className="offices__contacts__title">
                <FormattedMessage id="salesDepartment" />
              </p>
              <p className="offices__contacts__title">
                <FormattedMessage id="supplyDepartment" />
              </p>
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
          <div className="offices__contacts__mobile">
            <div className="offices__contacts__mobile__block">
              <p className="offices__contacts__title">
                <FormattedMessage id="reception" />
                {/* Приймальня: */}
              </p>
              <div className="offices__contacts__mobile__line">
                <p className="offices__contacts__email">info@elgrafpack.com</p>
                <p className="offices__contacts__phone">+38 (032) 245-84-44</p>
              </div>
            </div>

            <div className="offices__contacts__mobile__block">
              <p className="offices__contacts__title">
                <FormattedMessage id="salesDepartment" />
              </p>
              <div className="offices__contacts__mobile__line">
                <p className="offices__contacts__email">komerc@elgrafpack.com</p>
                <p className="offices__contacts__phone">+38 (050) 372-00-96</p>
              </div>
            </div>

            <div className="offices__contacts__mobile__block">
              <p className="offices__contacts__title">
                <FormattedMessage id="supplyDepartment" />
              </p>
              <div className="offices__contacts__mobile__line">
                <p className="offices__contacts__email">y.balukh@elgrafpack.com</p>
                <p className="offices__contacts__phone">+38 (050) 372-38-99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
