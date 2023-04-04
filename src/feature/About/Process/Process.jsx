import { Container } from "../../../components/Container";
import rawImage from "../../../assets/images/about/raw.png";
import stampingFormsImage from "../../../assets/images/about/stampingForms.png";
import paintLabImage from "../../../assets/images/about/paintLab.png";
import rawMobileImage from "../../../assets/images/about/rawMobile.png";
import stampingFormsMobileImage from "../../../assets/images/about/stampingFormsMobile.png";
import paintLabMobileImage from "../../../assets/images/about/paintLabMobile.png";
import { FormattedMessage } from "react-intl";
import { useEffect, useRef, useState } from "react";
import "./Process.css";

export const Process = () => {
  const rowRef = useRef();
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = [useRef(null)];

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

  useEffect(() => {
    if (isVisible["firstItem"]) {
      rowRef.current.classList.add("bottom-to-top");
    }
  }, [isVisible]);
  return (
    <Container>
      <section className="process">
        <h2 className="process__title" id="firstItem" ref={sectionRefs[0]}>
          <FormattedMessage id="about.process.title" />
          {/* Короткі відомості про процеси */}
        </h2>
        <div className="process__row" ref={rowRef}>
          <div className="process__column">
            <div className="process__column__image__container">
              <img src={rawImage} alt="rawImage" className="process__column__image" />
              <img src={rawMobileImage} alt="rawMobileImage" className="process__column__image__mobile" />
            </div>
            <h3 className="process__column__title">
              <FormattedMessage id="about.process.firstColumn.title" />
              {/* Сировина */}
            </h3>
            <p className="process__column__description">
              <FormattedMessage id="about.process.firstColumn.text" />
              {/* Матеріал для паковання (картон та папір різних видів), а також оздоблювальні матеріали (лаки, фарби,
              плівки та фольга) надходять безпосередньо від іноземних виробників Польщі, Словенії, Німеччини, Австрії та
              Угорщини.  Використовується також вітчизняна сировина. */}
            </p>
          </div>

          <div className="process__column">
            <div className="process__column__image__container">
              <img src={stampingFormsImage} alt="stampingFormsImage" className="process__column__image" />
              <img
                src={stampingFormsMobileImage}
                alt="stampingFormsMobileImage"
                className="process__column__image__mobile"
              />
            </div>
            <h3 className="process__column__title">
              <FormattedMessage id="about.process.secondColumn.title" />
              {/* Штанцформи */}
            </h3>
            <p className="process__column__description">
              <FormattedMessage id="about.process.secondColumn.text" values={{ br: <br /> }} />
              {/* Висікання – одна з найважливіших операцій у всьому технологічному процесі виготовленні паковання, тому ще
              одним важливим видом нашої діяльності є виготовлення високоякісних штампів для висікання. Для крою коробки
              на підприємстві встановлені тигельні та плосковисічні машини, що обслуговуються досвідченими
              спеціалістами, здатними виконати висікальну форму будь-якої складності та точності. Спеціальне
              устаткування дозволяє робити штанцформи різних розмірів, зокрема великих форматів. */}
            </p>
          </div>

          <div className="process__column">
            <div className="process__column__image__container">
              <img src={paintLabImage} alt="paintLabImage" className="process__column__image" />
              <img src={paintLabMobileImage} alt="paintLabMobileImage" className="process__column__image__mobile" />
            </div>
            <h3 className="process__column__title">
              <FormattedMessage id="about.process.thirdColumn.title" />
              {/* Лабораторія фарб */}
            </h3>
            <p className="process__column__description">
              <FormattedMessage id="about.process.thirdColumn.text" />
              {/* Фаховий підбір кольорів для паковання. Наші друкарські машини відповідають вимогам галузі та дозволяють
              здійснювати якісний друк різною комбінацією фарб: як за традиційною тріадною технологією CMYK, так і з
              використанням кольорів із каталогу PANTONE. */}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};
