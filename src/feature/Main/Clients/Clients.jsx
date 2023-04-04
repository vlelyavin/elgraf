import { Container } from "../../../components/Container";
import clientsBanner from "../../../assets/images/clients/clients.png";
import "./Clients.css";
import { FormattedMessage } from "react-intl";
import { useEffect, useRef } from "react";

export const Clients = () => {
  return (
    <>
      <Container>
        <section className="clients">
          <h1 className="clients__title">
            <FormattedMessage id="clients.title" />
            {/* Наші клієнти */}
          </h1>
        </section>
      </Container>
      <div className="clients__banner__container">
        <img src={clientsBanner} alt="clientsBanner" className="clients__banner clients-animation" />
      </div>
    </>
  );
};
