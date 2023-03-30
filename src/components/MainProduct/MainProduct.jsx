import { Container } from "../Container";
import product from "../../assets/images/product/product.png";
import laminationImage from "../../assets/images/product/lamination.png";
import pressingImage from "../../assets/images/product/pressing.png";
import congrevImage from "../../assets/images/product/congrev.png";
import productBackground from "../../assets/images/product/productBackground.png";
import "./MainProduct.css";

export const MainProduct = () => {
  return (
    <section className="product">
      <Container>
        <div className="product__main__image__container">
          <img src={product} alt="product" className="product__main__image" />
          <div className="product__details lefttop">
            <div className="product__details__info">
              <p className="product__details__info__title">Лакування</p>
              <ul className="product__details__info__list">
                <li className="product__details__info__list__item">Захисним чи водним лаком</li>
                <li className="product__details__info__list__item">Вибіркове чи суцільне УФ лакування</li>
              </ul>
            </div>
            <div className="product__image__container">
              <img src={laminationImage} alt="laminationImage" className="product__image" />
            </div>
          </div>

          <div className="product__details leftbottom">
            <div className="product__details__info">
              <p className="product__details__info__title">Ламінування</p>
              <ul className="product__details__info__list">
                <li className="product__details__info__list__item">
                  Глянцеве —візуально покращує колір зображення, його насиченість та яскравість
                </li>
                <li className="product__details__info__list__item">Матове — усуває відблиски</li>
              </ul>
              <p className="product__details__text">*є можливість наносити додаткове оздоблення УФ лаком</p>
            </div>
            <div className="product__image__container">
              <img src={laminationImage} alt="laminationImage" className="product__image" />
            </div>
          </div>

          <div className="product__details righttop">
            <div className="product__details__info">
              <p className="product__details__info__title">Конгрев</p>

              <p className="product__details__info__list__item">Продукує рельєфне випукле зображення на пакованні</p>
            </div>
            <div className="product__image__container reverse">
              <img src={congrevImage} alt="congrevImage" className="product__image" />
            </div>
          </div>

          <div className="product__details rightbottom">
            <div className="product__details__info">
              <p className="product__details__info__title">Тиснення фольгою</p>
              <ul className="product__details__info__list">
                <li className="product__details__info__list__item">Металізованою (золотою, срібною та ін.)</li>
                <li className="product__details__info__list__item">З голографічним малюнком</li>
                <li className="product__details__info__list__item">Матовою</li>
              </ul>
              <p className="product__details__text texttransform">
                Таке оздоблення використовується для прикраси друкованого паковання, надання їй особливих рис, а також
                як засіб захисту від підробок.
              </p>
            </div>
            <div className="product__image__container reverse">
              <img src={pressingImage} alt="pressingImage" className="product__image" />
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
