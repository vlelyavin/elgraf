import { Container } from "../../../components/Container";
import elgrafImage from "../../../assets/images/about/elgraf.png";
import productionImage from "../../../assets/images/about/production.png";
import "./General.css";

export const General = () => {
  return (
    <Container>
      <section className="general">
        <div className="general__row">
          <div className="general__column">
            <h2 className="general__column__title">Elgraf</h2>
            <p className="general__column__text">
              <span className="semibold">ТОВ «Ельґраф»</span>
              <br /> Засноване в 1992 році.
              <br /> Спеціалізація - виготовлення повноколірного паковання з картону, гофрокартону та
              мікрогофрокартону. 
              <br /> Використання технологій препрінту та каширування.  За допомогою офсетного та флексографічного друку
              Elgraf створює унікальне паковання для продукції найрізноманітніших галузей промисловості.
            </p>
          </div>
          <div className="general__column__image__container">
            <img src={elgrafImage} alt="elgrafImage" className="general__column__image" />
          </div>
        </div>

        <div className="general__row">
          <div className="general__column__image__container">
            <img src={productionImage} alt="productionImage" className="general__column__image" />
          </div>
          <div className="general__column">
            <h2 className="general__column__title">Виробництво</h2>
            <p className="general__column__text">
              Сьогодні «Ельґраф» є одним із найбільших на Заході України виробників повноколірного паковання з картону
              та гофрокартону.
              <br />
              <br />
              Чотири виробничі цехи, дільниця із виготовлення штанцформ і сучасне устаткування додрукарської підготовки
              та післядрукарської обробки, високопродуктивні машини офсетного і флексографічного друку, а також
              досвідчений колектив – це поєднання дозволяє виготовляти широкий асортимент поліграфічної продукції:
              класичне паковання з картону, кашированого мікрогофрокартону та гофрокартону, групове та сувенірне
              паковання, широкоформатну рекламно- презентаційну продукцію (дисплеї, стенди, шоубокси та ін.).
              <br />
              <br />
              Основною перевагою нашої фірми є великоформатний флексографічний друк (до 8-ми кольорів), який дозволяє у
              стислі терміни друкувати великі тиражі з високою якістю, а також подальше виготовлення гофроматеріалів із
              попередньо задрукованих шарів матеріалу.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};
