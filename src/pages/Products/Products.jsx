import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainProduct } from "../../components/MainProduct";
import { OrderForm } from "../../feature/Order/OrderForm";
import { ProductList } from "../../feature/Products/ProductList";
export const Products = () => {
  return (
    <section
      style={{
        background: "#f6f6f6",
      }}
    >
      <Header background="#f6f6f6" />
      <ProductList />
      <MainProduct />
      <Footer />
      <OrderForm />
    </section>
  );
};
