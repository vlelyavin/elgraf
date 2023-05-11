import { Container } from "../../../components/Container";
import { FormattedMessage } from "react-intl";
import "./Agencies.css";

export const Agencies = () => {
  return (
    <Container>
      <section className="agencies">
        <h1 className="agencies__title">
          <FormattedMessage id="offices.agencies.title" />
          {/* Діючі представництва */}
        </h1>
        <div className="agencies__row">
          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.representative" />
              </p>
              <p className="agencies__column__block__text doublelocation">
                <FormattedMessage id="inPoland" />
              </p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.company" />
              </p>
              <p className="agencies__column__block__text company">GRAFEL Sp. z o. o.</p>
              <p className="agencies__column__block__text location">
                Mlodowice 52, 37-734 Fredropol, Польща Факс: +48 167 361 158
              </p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.contactPerson" />
              </p>
              <p className="agencies__column__block__text person">Ян Гринишин</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.phone" />
              </p>
              <p className="agencies__column__block__text phone">+48 601 454 900</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>

          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.representative" />
              </p>
              <p className="agencies__column__block__text doublelocation">
                <FormattedMessage id="inSwitzerland" />
              </p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.company" />
              </p>
              <p className="agencies__column__block__text company">PTG Paper Trading Group S.A.</p>
              <p className="agencies__column__block__text location">Place Numa-Droz 2, Neuchâtel, CH-2000, Швейцарія</p>
            </div>

            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.phone" />
              </p>
              <p className="agencies__column__block__text phone">+41 32 710 01 65</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>

          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.representative" />
              </p>
              <p className="agencies__column__block__text doublelocation">
                <FormattedMessage id="inAustria" />
              </p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.company" />
              </p>
              <p className="agencies__column__block__text company">BAMD Global e.U.</p>
              <p className="agencies__column__block__text location">MKenyongasse 23-25/509a, 1070, Wien, Австрія</p>
            </div>

            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.phone" />
              </p>
              <p className="agencies__column__block__text phone">+43 664 91 68902</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="agencies__row">
          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.representative" />
              </p>
              <p className="agencies__column__block__text doublelocation">
                <FormattedMessage id="inKyiv" />
              </p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.contactPerson" />
              </p>
              <p className="agencies__column__block__text person">Ліпсієнко Олег</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.phone" />
              </p>
              <p className="agencies__column__block__text phone">+43 664 91 68902</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">lipisiyenko@gmail.com</p>
            </div>
          </div>

          <div className="agencies__column">
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.representative" />
              </p>
              <p className="agencies__column__block__text doublelocation">
                <FormattedMessage id="inRivne" />
              </p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.contactPerson" />
              </p>
              <p className="agencies__column__block__text person">Богдан Галатин</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">
                <FormattedMessage id="offices.agencies.phone" />
              </p>
              <p className="agencies__column__block__text phone">+38 050 375 08 84</p>
            </div>
            <div className="agencies__column__block">
              <p className="agencies__column__block__title">E-mail</p>
              <p className="agencies__column__block__text mail">buchyna@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
