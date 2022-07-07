import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { Add, Card, Target, Title } from "../../components/common";
import Link from "next/link";

const PrincipalPage = () => {
  return (
    <Main title="Principal" description="Pagina Principal de Inventory">
      <NavBar />
      <Title>Bienvenido [usuario]</Title>
      <section className={styles.containerTarget}>
        <Target count="20" text="Total de Productos" color="purpleDark" />
        <Target count="20" text="Total de Productos" color="purple" />
        <Target count="20" text="Total de Productos" color="purpleLigth" />
      </section>
      <div className={styles.containerSubtitle}>
        <Add />
        <Title variant="subTitle">Categorias</Title>
      </div>
      <section className={styles.containerCard}>
        <Link href="/producto">
          <a>
            <Card variant="center" size="small">
              <img className={styles.image} src="/image.jpg" alt="image" />
              <Title variant="textMain">Bebidas</Title>
            </Card>
          </a>
        </Link>
        <Card variant="center" size="small">
          <img className={styles.image} src="/image.jpg" alt="image" />
          <Title variant="textMain">Bebidas</Title>
        </Card>
        <Card variant="center" size="small">
          <img className={styles.image} src="/image.jpg" alt="image" />
          <Title variant="textMain">Bebidas</Title>
        </Card>
        <Card variant="center" size="small">
          <img className={styles.image} src="/image.jpg" alt="image" />
          <Title variant="textMain">Bebidas</Title>
        </Card>
        <Card variant="center" size="small">
          <img className={styles.image} src="/image.jpg" alt="image" />
          <Title variant="textMain">Bebidas</Title>
        </Card>
        <Card variant="center" size="small">
          <img className={styles.image} src="/image.jpg" alt="image" />
          <Title variant="textMain">Bebidas</Title>
        </Card>
      </section>
    </Main>
  );
};

export default PrincipalPage;
