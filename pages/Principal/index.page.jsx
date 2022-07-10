import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { Add, Button, Input, Loading, Modal, Target, Title } from "../../components/common";
import { Categoria } from "../../components/modules/principal";
import useCategory from "../../hooks/useCategory";
import useField from "../../hooks/useField";

const PrincipalPage = () => {
  const categories = useSelector((state) => state.categories.value);
  const user = useSelector((state) => state.user.value);
  const nombre = useField();
  const foto = useField();
  const [loaderCategories, setLoaderCategories] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [messageModal, setMessageModal] = useState({
    isActive: false,
    message: "",
  });
  const { getCategories, createCategory } = useCategory();
  const handleClickModal = () => {
    setIsModal(!isModal);
    setMessageModal({ isActive: false, message: "" });
  };
  useEffect(() => {
    getCategories(setLoaderCategories);
  }, [loaderCategories]);
  return (
    <Main title="Principal" description="Pagina Principal de Inventory">
      <NavBar />
      <Title>
        Bienvenido {user.nombre} {user.apellido}
      </Title>
      <section className={styles.containerTarget}>
        <Target count="20" text="Total de Productos" color="purpleDark" />
        <Target count="20" text="Total de Productos" color="purple" />
        <Target count="20" text="Total de Productos" color="purpleLigth" />
      </section>
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
      <Modal open={isModal} onClose={handleClickModal} title="Categoria" message={messageModal}>
        <Input {...nombre} placeholder="Nombre" type="text" />
        <Input {...foto} placeholder="Foto" type="text" />
        <Button onClick={() => createCategory(nombre.value, foto.value, setMessageModal, setLoaderCategories)}>Agregar</Button>
      </Modal>
    </Main>
  );
};

export default PrincipalPage;
