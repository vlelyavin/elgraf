import { Container } from "../../../components/Container";
import clientsBanner from "../../../assets/images/clients/clients.png";
import "./Clients.css";

export const Clients = () => {
  return (
    <>
      <Container>
        <section className="clients">
          <h1 className="clients__title">Наші клієнти</h1>
        </section>
      </Container>
      <div className="clients__banner__container">
        <img src={clientsBanner} alt="clientsBanner" className="clients__banner" />
      </div>
    </>
  );
};
