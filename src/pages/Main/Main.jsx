import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainProduct } from "../../components/MainProduct";
import { Benefits } from "../../feature/Main/Benefits";
import { Clients } from "../../feature/Main/Clients";
import { Intro } from "../../feature/Main/Intro";
import { Packaging } from "../../feature/Main/Packaging";

export const Main = () => {
  return (
    <>
      <Header />
      <Intro />
      <Packaging />
      <Clients />
      <Benefits />
      <MainProduct />
      <Footer />
    </>
  );
};
