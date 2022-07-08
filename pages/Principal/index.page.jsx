import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { Add, Loading, Target, Title } from "../../components/common";
import { Categoria } from "../../components/modules/principal";
import useCategory from "../../hooks/useCategory";

const PrincipalPage = () => {
  const { loaderCategorias, categorias } = useCategory();
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
        {loaderCategorias ? (
          <Loading />
        ) : (
          categorias.map((categoria) => {
            return <Categoria key={categoria.id} categoria={categoria} />;
          })
        )}
      </section>
    </Main>
  );
};

export default PrincipalPage;
