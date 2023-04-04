import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import slider__first from "../../../assets/images/main/slider__first.png";
import slider__second from "../../../assets/images/main/slider__second.png";
import slider__third from "../../../assets/images/main/slider__third.png";
import cycle from "../../../assets/images/main/cycle.svg";
import user from "../../../assets/images/main/user.svg";
import colorfill from "../../../assets/images/main/colorfill.svg";
import design from "../../../assets/images/main/design.svg";
import "./Intro.css";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { toggleOrderFormVisibility } from "../../../constants/actions";

export const Intro = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();
  const titleRefMobile = useRef();
  const descriptionRefMobile = useRef();
  const buttonRefMobile = useRef();
  const dispatch = useDispatch();
  const interval = 2000;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => [{ src: slider__first }, { src: slider__second }, { src: slider__third }], []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [currentSlide, interval, slides]);
  const locale = useSelector((state) => state.locale);
  const [title, setTitle] = useState("ПАКУВАННЯ");
  useEffect(() => {
    if (locale === "us") {
      setTitle("PACKAGING");
    } else if (locale === "ru") {
      setTitle("УПАКОВКИ");
    } else if (locale === "ua") {
      setTitle("ПАКОВАННЯ");
    }
  }, [locale]);

  useEffect(() => {
    const title = titleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;

    const titleMobile = titleRefMobile.current;
    const descriptionMobile = descriptionRefMobile.current;
    const buttonMobile = buttonRefMobile.current;

    title.classList.add("left-to-right");
    setTimeout(() => {
      description.classList.add("left-to-right");
    }, 300);
    setTimeout(() => {
      button.classList.add("left-to-right");
    }, 600);

    titleMobile.classList.add("left-to-right");
    setTimeout(() => {
      descriptionMobile.classList.add("left-to-right");
    }, 300);
    setTimeout(() => {
      buttonMobile.classList.add("left-to-right");
    }, 600);
  }, []);

  return (
    <>
      <section className="intro">
        <Container>
          <div className="intro__inner">
            <div className="intro__info">
              <p className="intro__info__title" ref={titleRef}>
                <FormattedMessage
                  id="main.intro.title"
                  values={{ title: <span style={{ color: "#FFB800" }}>{title}</span> }}
                  dangerouslySetInnerHTML
                />
              </p>
              <p className="intro__info__description" ref={descriptionRef}>
                <FormattedMessage id="main.intro.text" />
                {/* Поєднайте свої продукти з інноваційними рішеннями паковання. */}
              </p>
              <div
                className="intro__info__button__container"
                ref={buttonRef}
                onClick={() => dispatch(toggleOrderFormVisibility(true))}
              >
                <Button
                  title={<FormattedMessage id="button.order" />}
                  fontSize="1.1rem"
                  padding="15px 40px"
                  width="100%"
                />
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
        </Container>
        <div className="intro__benefits">
          <div className="intro__benefit">
            <img src={cycle} alt="cycleImage" className="intro__benefit__image" />
            <p className="intro__benefit__title">
              <FormattedMessage id="main.benefits.cycle" />
              {/* Повний цикл виробництва */}
            </p>
          </div>
          <div className="intro__benefit">
            <img src={user} alt="userImage" className="intro__benefit__image" />
            <p className="intro__benefit__title">
              <FormattedMessage id="main.benefits.solutions" />
              {/* Індивідуальні рішення під замовлення */}
            </p>
          </div>
          <div className="intro__benefit">
            <img src={colorfill} alt="colorfillImage" className="intro__benefit__image" />
            <p className="intro__benefit__title">
              <FormattedMessage id="main.benefits.paintLab" />
              {/* Власна лабораторія фарб */}
            </p>
          </div>
          <div className="intro__benefit">
            <img src={design} alt="designImage" className="intro__benefit__image" />
            <p className="intro__benefit__title">
              <FormattedMessage id="main.benefits.finishes" />
              {/* Різноманітне оздоблення */}
            </p>
          </div>
        </div>
      </section>
      <section className="intro__mobile">
        <Container>
          <div className="intro__mobile__innner">
            <div className="intro__slider__container">
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

            <div className="intro__info">
              <p className="intro__info__title" ref={titleRefMobile}>
                <FormattedMessage
                  id="main.intro.title"
                  values={{ title: <span style={{ color: "#FFB800" }}>{title}</span> }}
                  dangerouslySetInnerHTML
                />
              </p>
              <p className="intro__info__description" ref={descriptionRefMobile}>
                <FormattedMessage id="main.intro.text" />
                {/* Поєднайте свої продукти з інноваційними рішеннями паковання. */}
              </p>
              <div className="intro__info__button__container" ref={buttonRefMobile}>
                <Button
                  title={<FormattedMessage id="button.order" />}
                  fontSize="1.1rem"
                  padding="15px 40px"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="intro__benefits">
            <div className="intro__benefit">
              <img src={cycle} alt="cycleImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">
                <FormattedMessage id="main.benefits.cycle" />
                {/* Повний цикл виробництва */}
              </p>
            </div>
            <div className="intro__benefit">
              <img src={user} alt="userImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">
                <FormattedMessage id="main.benefits.solutions" />
                {/* Індивідуальні рішення під замовлення */}
              </p>
            </div>
            <div className="intro__benefit">
              <img src={colorfill} alt="colorfillImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">
                <FormattedMessage id="main.benefits.paintLab" />
                {/* Власна лабораторія фарб */}
              </p>
            </div>
            <div className="intro__benefit">
              <img src={design} alt="designImage" className="intro__benefit__image" />
              <p className="intro__benefit__title">
                <FormattedMessage id="main.benefits.finishes" />
                {/* Різноманітне оздоблення */}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <p className="intro__description">
          <FormattedMessage id="main.benefits.text" />
          {/* Понад 30 років на ринку. Індивідуальні інструменти та дизайнерські послуги для створення спеціального
          унікального паковання для вашого бренду. */}
        </p>
      </Container>
    </>
  );
};
