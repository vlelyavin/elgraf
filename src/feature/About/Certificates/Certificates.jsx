import { Container } from "../../../components/Container";
import certificateISOImage from "../../../assets/images/about/certificateISO.png";
import certificateImage from "../../../assets/images/about/certificate.png";
import "./Certificates.css";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";

export const Certificates = () => {
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
  return (
    <Container>
      <div className="certificates__wrapper">
        <section className="certificates">
          <p className="certificates__text">
            <FormattedMessage id="about.certificates.title" values={{ companyName: <strong>{companyName}</strong> }} />
            {/* <span className="semibold">ТОВ «Ельґраф»</span> постійно вдосконалюється і працює над утвердженням своєї
          репутації на ринку поліграфії. Отримані сертифікати- це якнайкраще підтвердження високоякісного виконання
          наших послуг. */}
          </p>
          <div className="certificates__row" ref={sectionRefs[0]} id="firstItem">
            <div className={classNames("certificates__column", { "left-to-right": isVisible["firstItem"] })}>
              <div className="certificates__image__container">
                <img src={certificateISOImage} alt="certificateISOImage" className="certificates__image" />
              </div>
              <p className="certificates__column__title">
                <FormattedMessage id="about.certificates.ISO" />
                {/* Сертифікат ISO 9001:2015 */}
              </p>
              <p className="certificates__column__text">
                <FormattedMessage id="about.certificates.ISO.description" />
                {/* Сертифікація системи управління менеджменту якості */}
              </p>
            </div>
            <div className={classNames("certificates__column", { "right-to-left": isVisible["firstItem"] })}>
              <div className="certificates__image__container">
                <img src={certificateImage} alt="certificateImage" className="certificates__image" />
              </div>
              <p className="certificates__column__title">
                <FormattedMessage id="about.certificates.default" />
                {/* Сертифікат */}
              </p>
            </div>
          </div>
        </section>
        <div className="certificates__row__mobile">
          <div className="certificates__column">
            <div className="certificates__image__container">
              <img src={certificateISOImage} alt="certificateISOImage" className="certificates__image" />
            </div>
            <p className="certificates__column__title">
              <FormattedMessage id="about.certificates.ISO" />
              {/* Сертифікат ISO 9001:2015 */}
            </p>
            <p className="certificates__column__text">
              <FormattedMessage id="about.certificates.ISO.description" />
              {/* Сертифікація системи управління менеджменту якості */}
            </p>
          </div>
          <div className="certificates__column">
            <div className="certificates__image__container">
              <img src={certificateImage} alt="certificateImage" className="certificates__image" />
            </div>
            <p className="certificates__column__title">
              <FormattedMessage id="about.certificates.default" />
              {/* Сертифікат */}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
