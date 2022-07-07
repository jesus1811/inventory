import Link from "next/link";
import { Add, Card, Target, Title } from "../../components/common";
import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";

const Producto = () => {
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
        <Link href="/producto">
          <a>
            <Card variant="center" size="small">
              <img className={styles.image} src="/image.jpg" alt="image" />
              <Title variant="textMain">Bebidas</Title>
            </Card>
          </a>
        </Link>
        <Link href="/producto">
          <a>
            <Card variant="center" size="small">
              <img className={styles.image} src="/image.jpg" alt="image" />
              <Title variant="textMain">Bebidas</Title>
            </Card>
          </a>
        </Link>
        <Link href="/producto">
          <a>
            <Card variant="center" size="small">
              <img className={styles.image} src="/image.jpg" alt="image" />
              <Title variant="textMain">Bebidas</Title>
            </Card>
          </a>
        </Link>
      </section>
    </Main>
  );
};

export default Producto;
