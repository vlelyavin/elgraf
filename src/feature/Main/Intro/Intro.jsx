import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import slider__first from "../../../assets/images/main/slider__first.png";
import slider__second from "../../../assets/images/main/slider__second.png";
import slider__third from "../../../assets/images/main/slider__third.png";
import cycle from "../../../assets/images/main/cycle.png";
import user from "../../../assets/images/main/user.png";
import colorfill from "../../../assets/images/main/colorfill.png";
import design from "../../../assets/images/main/design.png";
import "./Intro.css";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";

export const Intro = () => {
  const interval = 2000;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => [{ src: slider__first }, { src: slider__second }, { src: slider__third }], []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [currentSlide, interval, slides]);
  return (
    <>
      <section className="intro">
        <Container>
          <div className="intro__inner">
            <div className="intro__info">
              <p className="intro__info__title">БІЗНЕС ПОЧИНАЄТЬСЯ З ПАКОВАННЯ</p>
              <p className="intro__info__description">Поєднайте свої продукти з інноваційними рішеннями паковання.</p>
              <div className="intro__info__button__container">
                <Button title="Оформити замовлення" fontSize="1.1rem" padding="15px 40px" />
              </div>
            </div>
            <div className="intro__slider">
              {slides.map((slide, id) => (
                <img
                  key={id}
                  src={slide.src}
                  alt="sliderImage"
                  className={classNames("intro__slider__image", { active: id === currentSlide })}
                />
              ))}
            </div>
          </div>
          <div className="intro__benefits">
            <div className="intro__benefit">
              <img src={cycle} alt="cycleImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">Повний цикл виробництва</p>
            </div>
            <div className="intro__benefit">
              <img src={user} alt="userImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">Індивідуальні рішення під замовлення</p>
            </div>
            <div className="intro__benefit">
              <img src={colorfill} alt="colorfillImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">Власна лабораторія фарб</p>
            </div>
            <div className="intro__benefit">
              <img src={design} alt="designImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">Різноманітне оздоблення</p>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <p className="intro__description">
          Понад 30 років на ринку. Індивідуальні інструменти та дизайнерські послуги для створення спеціального
          унікального паковання для вашого бренду.
        </p>
      </Container>
    </>
  );
};
