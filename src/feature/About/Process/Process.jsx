import { Container } from "../../../components/Container";
import rawImage from "../../../assets/images/about/raw.png";
import stampingFormsImage from "../../../assets/images/about/stampingForms.png";
import paintLabImage from "../../../assets/images/about/paintLab.png";
import "./Process.css";

export const Process = () => {
  return (
    <Container>
      <section className="process">
        <h2 className="process__title">Короткі відомості про процеси</h2>
        <div className="process__row">
          <div className="process__column">
            <div className="process__column__image__container">
              <img src={rawImage} alt="rawImage" className="process__column__image" />
            </div>
            <h3 className="process__column__title">Сировина</h3>
            <p className="process__column__description">
              Матеріал для паковання (картон та папір різних видів), а також оздоблювальні матеріали (лаки, фарби,
              плівки та фольга) надходять безпосередньо від іноземних виробників Польщі, Словенії, Німеччини, Австрії та
              Угорщини.  Використовується також вітчизняна сировина.
            </p>
          </div>

          <div className="process__column">
            <div className="process__column__image__container">
              <img src={stampingFormsImage} alt="stampingFormsImage" className="process__column__image" />
            </div>
            <h3 className="process__column__title">Штанцформи</h3>
            <p className="process__column__description">
              Висікання – одна з найважливіших операцій у всьому технологічному процесі виготовленні паковання, тому ще
              одним важливим видом нашої діяльності є виготовлення високоякісних штампів для висікання. Для крою коробки
              на підприємстві встановлені тигельні та плосковисічні машини, що обслуговуються досвідченими
              спеціалістами, здатними виконати висікальну форму будь-якої складності та точності. Спеціальне
              устаткування дозволяє робити штанцформи різних розмірів, зокрема великих форматів.
            </p>
          </div>

          <div className="process__column">
            <div className="process__column__image__container">
              <img src={paintLabImage} alt="paintLabImage" className="process__column__image" />
            </div>
            <h3 className="process__column__title">Лабораторія фарб</h3>
            <p className="process__column__description">
              Фаховий підбір кольорів для паковання. Наші друкарські машини відповідають вимогам галузі та дозволяють
              здійснювати якісний друк різною комбінацією фарб: як за традиційною тріадною технологією CMYK, так і з
              використанням кольорів із каталогу PANTONE.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};
