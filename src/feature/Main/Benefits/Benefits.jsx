import { FormattedMessage } from "react-intl";
import benefitsImageFirst from "../../../assets/images/benefits/benefitsFirst.png";
import benefitsImageSecond from "../../../assets/images/benefits/benefitsSecond.png";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import "./Benefits.css";
import { toggleOrderFormVisibility } from "../../../constants/actions";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export const Benefits = () => {
  const dispatch = useDispatch();
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
        threshold: 0, // 50% of the section must be visible
      }
    );

    sectionRefs.forEach((sectionRef) => {
      observer.observe(sectionRef.current);
    });
  }, []);
  return (
    <Container>
      <section className="benefits">
        <h1 className="benefits__title">
          <FormattedMessage id="benefits.title" />
          {/* Чому ми? */}
        </h1>
        <div className="benefits__row">
          <div
            className={classNames("benefits__column__image__container", {
              "left-to-right": isVisible["imageFirstRef"],
            })}
            ref={sectionRefs[0]}
            id="imageFirstRef"
          >
            <img src={benefitsImageFirst} alt="benefitsImageFirst" className="benefits__column__image" />
          </div>
          <div
            id="columnFirstRef"
            ref={sectionRefs[1]}
            className={classNames("benefits__column", {
              "right-to-left": isVisible["columnFirstRef"],
            })}
          >
            <p className="benefits__column__text">
              <FormattedMessage id="benefits.firstRowDescription" values={{ br: <br /> }} dangerouslySetInnerHTML />
              {/* Ми маємо повний цикл виробництва, використовуємо як імпортну, так і вітчизняну сировину та працюємо над
              тим, щоб на кожному етапі виробництва забезпечити нашим клієнтам якнайкращий продукт.
              <br />
              <br />
              Однією з наших ключових переваг є те, що ми використовуємо різні види друку, оздоблювання та склейки.
              <br />
              <br /> Наші технології і обладнання дозволяють нам створювати продукти різної складності і забезпечувати
              їх високу якість. */}
            </p>
          </div>
        </div>

        <div className="benefits__row second">
          <div
            id="columnSecondRef"
            ref={sectionRefs[2]}
            className={classNames("benefits__column", {
              "left-to-right": isVisible["columnSecondRef"],
            })}
          >
            <p className="benefits__column__text">
              <FormattedMessage id="benefits.secondRowDescription" values={{ br: <br /> }} dangerouslySetInnerHTML />
              {/* Особливою гордістю нашої компанії є те, що ми купили першу в Україні склейку для лотків на овочі і фрукти.
              Це означає, що ми можемо сворювати унікальну паковальну продукцію для ринку харчової промисловості і
              забезпечувати нашим клієнтам інноваційні рішення.
              <br />
              <br />
              Ми розуміємо, що наші клієнти очікують від нас тільки найкращої якості, тому ми ставимо високі стандарти
              для нашої продукції і послуг. Ми прагнемо постійно вдосконалюватися і використовувати найновіші
              технології, щоб забезпечити нашим клієнтам тільки найкраще. */}
            </p>
            <div className="benefits__button__container" onClick={() => dispatch(toggleOrderFormVisibility(true))}>
              <Button
                title={<FormattedMessage id="button.order" />}
                background="var(--secondary)"
                width="100%"
                fontSize="1.1rem"
              />
            </div>
          </div>

          <div
            id="imageSecondRef"
            ref={sectionRefs[3]}
            className={classNames("benefits__column__image__container", {
              "right-to-left": isVisible["imageSecondRef"],
            })}
          >
            <img src={benefitsImageSecond} alt="benefitsImageSecond" className="benefits__column__image" />
          </div>
        </div>
      </section>
    </Container>
  );
};
