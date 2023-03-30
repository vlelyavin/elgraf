import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Agencies } from "../../feature/Offices/Agencies";
import { OfficesInfo } from "../../feature/Offices/OfficesInfo";
import { Partnership } from "../../feature/Offices/Partnership";

export const Offices = () => {
  return (
    <>
      <Header buttonBackground="var(--primary)" buttonColor="var(--black)" />
      <OfficesInfo />
      <Partnership />
      <Agencies />
      <Footer />
    </>
  );
};
