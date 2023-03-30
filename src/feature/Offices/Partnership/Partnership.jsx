import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import "./Partnership.css";

export const Partnership = () => {
  return (
    <Container>
      <section className="partnership">
        <h2 className="partnership__title">Як стати партнером?</h2>
        <h3 className="partnership__subtitle">
          МИ — ПОРЯД! СТАТИ БЛИЖЧИМ ДО КЛІЄНТА, ВІДКРИТИМ І БІЗНЕСОВО ДОСТУПНИМ – ЦЕ МЕТА КОМПАНІЇ «ЕЛЬґРАФ».
        </h3>
        <div className="partnership__inputs">
          <div className="partnership__inputs__column">
            <input type="text" className="partnership__input" placeholder="ПІБ" />
            <input type="text" className="partnership__input" placeholder="Назва компанії" />
          </div>
          <div className="partnership__inputs__column">
            <input type="text" className="partnership__input" placeholder="Номер телефону" />
            <input type="text" className="partnership__input" placeholder="E-mail" />
          </div>
        </div>
        <div className="partnership__button__container">
          <Button title="Надіслати" width="250px" color="var(--primary)" background="#B1D036" fontSize="1rem" />
        </div>
      </section>
    </Container>
  );
};
