import { Container } from "../Container";
import product from "../../assets/images/product/product.png";
import laminationImage from "../../assets/images/product/lamination.png";
import pressingImage from "../../assets/images/product/pressing.png";
import congrevImage from "../../assets/images/product/congrev.png";
import productBackground from "../../assets/images/product/productBackground.png";
import "./MainProduct.css";
import { FormattedMessage } from "react-intl";

export const MainProduct = () => {
  return (
    <section className="product">
      <Container>
        <div className="product__main">
          <div className="product__main__image__container">
            <img src={product} alt="product" className="product__main__image" />
            <div className="product__details lefttop">
              <div className="product__details__info">
                <p className="product__details__info__title">
                  <FormattedMessage id="mainProduct.varnishing.title" />
                  {/* Лакування */}
                </p>
                <ul className="product__details__info__list">
                  <li className="product__details__info__list__item">
                    <FormattedMessage id="mainProduct.varnishing.text.first" />
                    {/* Захисним чи водним лаком */}
                  </li>
                  <li className="product__details__info__list__item">
                    <FormattedMessage id="mainProduct.varnishing.text.second" />
                    {/* Вибіркове чи суцільне УФ лакування */}
                  </li>
                </ul>
              </div>
              <div className="product__image__container">
                <img src={laminationImage} alt="laminationImage" className="product__image" />
              </div>
            </div>

            <div className="product__details leftbottom">
              <div className="product__details__info">
                <p className="product__details__info__title">
                  <FormattedMessage id="mainProduct.lamination.title" />
                </p>
                <ul className="product__details__info__list">
                  <li className="product__details__info__list__item">
                    {/* <span className="semibold">Глянцеве</span> — візуально покращує колір зображення, його насиченість та
                  яскравість */}
                    <FormattedMessage id="mainProduct.lamination.text.first" />
                  </li>
                  <li className="product__details__info__list__item">
                    {/* <span className="semibold">Матове</span> — усуває відблиски */}
                    <FormattedMessage id="mainProduct.lamination.text.second" />
                  </li>
                </ul>
                <p className="product__details__text">
                  <FormattedMessage id="mainProduct.lamination.text.description" />
                  {/* *є можливість наносити додаткове оздоблення УФ лаком */}
                </p>
              </div>
              <div className="product__image__container">
                <img src={laminationImage} alt="laminationImage" className="product__image" />
              </div>
            </div>

            <div className="product__details righttop">
              <div className="product__details__info">
                <p className="product__details__info__title">
                  <FormattedMessage id="mainProduct.embossing.title" />
                  {/* Конгрев */}
                </p>

                <p className="product__details__info__list__item">
                  <FormattedMessage id="mainProduct.embossing.text" />
                  {/* Продукує рельєфне випукле зображення на пакованні */}
                </p>
              </div>
              <div className="product__image__container reverse">
                <img src={congrevImage} alt="congrevImage" className="product__image" />
              </div>
            </div>

            <div className="product__details rightbottom">
              <div className="product__details__info">
                <p className="product__details__info__title">
                  <FormattedMessage id="mainProduct.foilStamping.title" />
                  {/* Тиснення фольгою */}
                </p>
                <ul className="product__details__info__list">
                  <li className="product__details__info__list__item">
                    <FormattedMessage id="mainProduct.foilStamping.text.first" />
                    {/* <span className="semibold">Металізованою</span> (золотою, срібною та ін.) */}
                  </li>
                  <li className="product__details__info__list__item">
                    <FormattedMessage id="mainProduct.foilStamping.text.second" />
                    {/* <span className="semibold">З голографічним малюнком</span> */}
                  </li>
                  <li className="product__details__info__list__item">
                    <FormattedMessage id="mainProduct.foilStamping.text.third" />
                    {/* <span className="semibold">Матовою</span> */}
                  </li>
                </ul>
                <p className="product__details__text texttransform">
                  <FormattedMessage id="mainProduct.foilStamping.text.description" />
                  {/* Таке оздоблення використовується для прикраси друкованого паковання, надання їй особливих рис, а також
                як засіб захисту від підробок. */}
                </p>
              </div>
              <div className="product__image__container reverse">
                <img src={pressingImage} alt="pressingImage" className="product__image" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="product__image__background__container">
        <img src={productBackground} alt="productBackground" className="product__image__background" />
      </div>
    </section>
  );
};
