import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { Add, Button, Card, Input, Loading, Modal, Target, Title } from "../../components/common";
import { Categoria } from "../../components/modules/principal";
import useCategory from "../../hooks/useCategory";

const PrincipalPage = () => {
  const categories = useSelector((state) => state.categories.value);
  const [loaderCategories, setLoaderCategories] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const { getCategories } = useCategory();
  useEffect(() => {
    getCategories(setLoaderCategories);
  }, []);
  return (
    <Main title="Principal" description="Pagina Principal de Inventory">
      <NavBar />
      <Title>Bienvenido [usuario]</Title>
      <section className={styles.containerTarget}>
        <Target count="20" text="Total de Productos" color="purpleDark" />
        <Target count="20" text="Total de Productos" color="purple" />
        <Target count="20" text="Total de Productos" color="purpleLigth" />
      </section>
      <Modal open={isModal} onClose={() => setIsModal(!isModal)}>
        <article className={styles.containerTitleModal}>
          <Title>Categoria</Title>
        </article>
        <Card center>
          <div className={styles.containerInput}>
            <Input placeholder="Usuario" type="text" />
            <Input placeholder="Usuario" type="text" />
            <Input placeholder="Usuario" type="text" />
            <Button>Agregar</Button>
          </div>
        </Card>
      </Modal>
      <div className={styles.containerSubtitle}>
        <Add onClick={() => setIsModal(true)} />
        <Title variant="subTitle">Categorias</Title>
      </div>
      <section className={styles.containerCard}>
        {loaderCategories ? (
          <Loading />
        ) : (
          categories.map((categoria) => {
            return <Categoria key={categoria.id} categoria={categoria} />;
          })
        )}
      </section>
    </Main>
  );
};

export default PrincipalPage;
