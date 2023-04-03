import { Container } from "../../../components/Container";
import elgrafImage from "../../../assets/images/about/elgraf.png";
import productionImage from "../../../assets/images/about/production.png";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./General.css";
import classNames from "classnames";

export const General = () => {
  const locale = useSelector((state) => state.locale);
  const [companyName, setCompanyName] = useState("ТОВ «Ельґраф»");
  useEffect(() => {
    if (locale === "us") {
      setCompanyName("«Elgraf» LLC");
    } else if (locale === "ru") {
      setCompanyName("ООО «Ельграф»");
    } else {
      setCompanyName("ТОВ «Ельґраф»");
    }
  }, [locale]);

  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          setIsVisible((prevState) => ({
            ...prevState,
            [id]: entry.isIntersecting,
          }));
        });
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    sectionRefs.forEach((sectionRef) => {
      observer.observe(sectionRef.current);
    });
  }, []);
  return (
    <Container>
      <section className="general">
        <div className="general__row">
          <div
            className={classNames("general__column", { "left-to-right": isVisible["firstItem"] })}
            id="firstItem"
            ref={sectionRefs[0]}
          >
            <h2 className="general__column__title">Elgraf</h2>
            <p className="general__column__text">
              <FormattedMessage
                id="about.general.firstRow.text"
                values={{
                  br: <br />,
                  companyName: <strong>{companyName}</strong>,
                }}
                dangerouslySetInnerHTML
              />
              {/* <span className="semibold">ТОВ «Ельґраф»</span>
              <br /> Засноване в 1992 році.
              <br /> Спеціалізація - виготовлення повноколірного паковання з картону, гофрокартону та
              мікрогофрокартону. 
              <br /> Використання технологій препрінту та каширування.  За допомогою офсетного та флексографічного друку
              Elgraf створює унікальне паковання для продукції найрізноманітніших галузей промисловості. */}
            </p>
          </div>
          <div
            className={classNames("general__column__image__container", { "right-to-left": isVisible["secondItem"] })}
            id="secondItem"
            ref={sectionRefs[1]}
          >
            <img src={elgrafImage} alt="elgrafImage" className="general__column__image" />
          </div>
        </div>

        <div className="general__row secondRow">
          <div
            className={classNames("general__column__image__container", { "left-to-right": isVisible["thirdItem"] })}
            id="thirdItem"
            ref={sectionRefs[2]}
          >
            <img src={productionImage} alt="productionImage" className="general__column__image" />
          </div>
          <div
            className={classNames("general__column", { "right-to-left": isVisible["fourthItem"] })}
            id="fourthItem"
            ref={sectionRefs[3]}
          >
            <h2 className="general__column__title">
              <FormattedMessage id="about.general.secondRow.title" />
              {/* Виробництво */}
            </h2>
            <p className="general__column__text">
              <FormattedMessage id="about.general.secondRow.text" values={{ br: <br /> }} />
              {/* Сьогодні «Ельґраф» є одним із найбільших на Заході України виробників повноколірного паковання з картону
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
              попередньо задрукованих шарів матеріалу. */}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};
