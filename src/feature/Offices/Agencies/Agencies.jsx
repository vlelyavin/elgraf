import { Container } from "../../../components/Container";
import mapImage from "../../../assets/images/offices/map.png";
import "./Agencies.css";

export const Agencies = () => {
  return (
    <Container>
      <section className="agencies">
        <h1 className="agencies__title">Діючі представництва</h1>
        <div className="agencies__row">
          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Представництво</p>
              <p className="agencies__column__block__text doublelocation">в Польщі</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Компанія</p>
              <p className="agencies__column__block__text company">GRAFEL Sp. z o. o.</p>
              <p className="agencies__column__block__text location">
                Mlodowice 52, 37-734 Fredropol, Польща Факс: +48 167 361 158
              </p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Контактна особа</p>
              <p className="agencies__column__block__text person">Ян Гринишин</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Телефон</p>
              <p className="agencies__column__block__text phone">+48 601 454 900</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>

          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Представництво</p>
              <p className="agencies__column__block__text doublelocation">м. Київ</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Компанія</p>
              <p className="agencies__column__block__text company">PTG Paper Trading Group S.A.</p>
              <p className="agencies__column__block__text location">Place Numa-Droz 2, Neuchâtel, CH-2000, Швейцарія</p>
            </div>

            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Телефон</p>
              <p className="agencies__column__block__text phone">+41 32 710 01 65</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>

          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Представництво</p>
              <p className="agencies__column__block__text doublelocation">в Польщі</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Компанія</p>
              <p className="agencies__column__block__text company">BAMD Global e.U.</p>
              <p className="agencies__column__block__text location">MKenyongasse 23-25/509a, 1070, Wien, Австрія</p>
            </div>

            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Телефон</p>
              <p className="agencies__column__block__text phone">+43 664 91 68902</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="agencies__row">
          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Представництво</p>
              <p className="agencies__column__block__text doublelocation">м. Київ</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Контактна особа</p>
              <p className="agencies__column__block__text person">Ліпсієнко Олег</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Телефон</p>
              <p className="agencies__column__block__text phone">+43 664 91 68902</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>

          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Представництво</p>
              <p className="agencies__column__block__text doublelocation">м. Рівне</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Контактна особа</p>
              <p className="agencies__column__block__text person">Богдан Галатин</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">Телефон</p>
              <p className="agencies__column__block__text phone">+38 050 375 08 84</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">buchyna@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="agencies__image__container">
          <img src={mapImage} alt="mapImage" className="agencies__image" />
        </div>
      </section>
    </Container>
  );
};
