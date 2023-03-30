import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainProduct } from "../../components/MainProduct";
import { ProductList } from "../../feature/Main/Products/ProductList";

export const Products = () => {
  return (
    <section
      style={{
        background: "#f6f6f6",
      }}
    >
      <Header background="#f6f6f6" buttonBackground="var(--primary)" buttonColor="var(--black)" />
      <ProductList />
      <MainProduct />
      <Footer />
    </section>
  );
};
