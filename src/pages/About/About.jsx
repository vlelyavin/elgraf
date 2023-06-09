import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Certificates } from "../../feature/About/Certificates";
import { General } from "../../feature/About/General";
import { Process } from "../../feature/About/Process";

export const About = () => {
  return (
    <>
      <Header />
      <General />
      <Process />
      <Certificates />
      <Footer />
    </>
  );
};
