import { Container } from "../../../components/Container";
import certificateISOImage from "../../../assets/images/about/certificateISO.png";
import certificateImage from "../../../assets/images/about/certificate.png";
import "./Certificates.css";

export const Certificates = () => {
  return (
    <Container>
      <section className="certificates">
        <p className="certificates__text">
          <span className="semibold">ТОВ «Ельґраф»</span> постійно вдосконалюється і працює над утвердженням своєї
          репутації на ринку поліграфії. Отримані сертифікати- це якнайкраще підтвердження високоякісного виконання
          наших послуг.
        </p>
        <div className="certificates__row">
          <div className="certificates__column">
            <div className="certificates__image__container">
              <img src={certificateISOImage} alt="certificateISOImage" className="certificates__image" />
            </div>
            <p className="certificates__column__title">Сертифікат ISO 9001:2015</p>
            <p className="certificates__column__text">Сертифікація системи управління менеджменту якості</p>
          </div>
          <div className="certificates__column">
            <div className="certificates__image__container">
              <img src={certificateImage} alt="certificateImage" className="certificates__image" />
            </div>
            <p className="certificates__column__title">Сертифікат</p>
          </div>
        </div>
      </section>
    </Container>
  );
};
