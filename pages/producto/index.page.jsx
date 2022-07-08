import Link from "next/link";
import { Add, Card, Target, Title } from "../../components/common";
import { Main, NavBar } from "../../components/layouts";
import useProduct from "../../hooks/useProduct";
import styles from "./styles.module.scss";

const Producto = () => {
  const { productosForCategory } = useProduct();
  return (
    <Main>
      <NavBar />
      <section className={styles.containerTitle}>
        <Add />
        <Title>Bebidas</Title>
      </section>
      <section className={styles.containerSearh}>
        <Target count="20" text="Total de Bebidas" color="purpleDark" />
        <Target count="20" text="Total de Bebidas" color="purple" />
      </section>
      <section className={styles.containerCard}>
        {productosForCategory.map((producto) => {
          return (
            <Link href="/producto" key={producto.id}>
              <a>
                <Card center small>
                  <img className={styles.image} src="/image.jpg" alt="image" />
                  <Title variant="textMain">{producto.nombre}</Title>
                  <Title variant="text">{producto.stock}</Title>
                </Card>
              </a>
            </Link>
          );
        })}
      </section>
    </Main>
  );
};

export default Producto;
