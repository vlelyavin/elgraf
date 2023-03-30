import { Container } from "../../../../components/Container";
import showBoxImage from "../../../../assets/images/products/showBox.png";
import bagInBoxImage from "../../../../assets/images/products/bagInBox.png";
import differentNeedsImage from "../../../../assets/images/products/differentNeeds.png";
import shoesImage from "../../../../assets/images/products/shoes.png";
import childrenGoodsImage from "../../../../assets/images/products/childrenGoods.png";
import transportingImage from "../../../../assets/images/products/transporting.png";
import alcoholGoodsImage from "../../../../assets/images/products/alcoholGoods.png";
import industrialGoodsImage from "../../../../assets/images/products/industrialGoods.png";
import { Button } from "../../../../components/Button";
import "./ProductList.css";

export const ProductList = () => {
  return (
    <section className="product__list">
      <Container>
        <div className="product__list__row">
          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={industrialGoodsImage} alt="industrialGoodsImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title">Промислових виробів</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>

          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={alcoholGoodsImage} alt="alcoholGoodsImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title">Алкогольних напоїв</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>

          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={transportingImage} alt="transportingImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title">Транспортна, лотки</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>
        </div>

        <div className="product__list__row">
          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={childrenGoodsImage} alt="childrenGoodsImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title">Дитячих товарів</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>

          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={shoesImage} alt="alcoholGoodsImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title">Взуття</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>

          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={differentNeedsImage} alt="differentNeedsImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title smaller">Товарів для найрізноманітніших потреб</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>
        </div>

        <div className="product__list__row">
          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={bagInBoxImage} alt="bagInBoxImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title">Харчових продуктів (Bag-In-Box)</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>

          <div className="product__list__column">
            <div className="product__list__column__image__container">
              <img src={showBoxImage} alt="showBoxImage" className="product__list__column__image" />
            </div>
            <p className="product__list__column__subheader">Паковання для</p>
            <h2 className="product__list__column__title">Виставкова (дисплеї), Showbox</h2>
            <div className="product__list__column__button__container">
              <Button title="Оформити замовлення" background="var(--secondary)" width="100%" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
