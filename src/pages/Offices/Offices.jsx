import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Agencies } from "../../feature/Offices/Agencies";
import { Map } from "../../feature/Offices/Map";
import { OfficesInfo } from "../../feature/Offices/OfficesInfo";
import { Partnership } from "../../feature/Offices/Partnership";

export const Offices = () => {
  return (
    <>
      <Header />
      <OfficesInfo />
      <Partnership />
      <Agencies />
      <Map />
      <Footer />
    </>
  );
};
