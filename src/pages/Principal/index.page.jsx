import { useState } from "react";
import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import {
  Add,
  Button,
  File,
  Input,
  Loading,
  Modal,
  Target,
  Title,
} from "../../components/common";
import { useCategory, useField, useProduct, useUser } from "../../hooks";
import { Categoria } from "./components";
import { app } from "../../services/firebase.service";

const PrincipalPage = () => {
  const router = useRouter();
  const nombre = useField();
  const [foto, setFoto] = useState({});
  const [isModal, setIsModal] = useState(false);
  const {
    loaderCategories,
    categories,
    createCategory,
    messageCategories,
    setCleanMessage,
  } = useCategory();
  const { products } = useProduct();
  const { user } = useUser();
  const handleClickModal = () => {
    setIsModal(!isModal);
    nombre.setValue("");
    setFoto({});
    setCleanMessage();
  };
  const handleClickCreateCategory = async () => {
    if (foto.name) {
      const path = app.storage().ref().child(foto.name);
      await path.put(foto);
    }
    createCategory(nombre.value, foto.name);
  };
  const handleRedirectProducts = (categoria) => {
    localStorage.setItem("category", JSON.stringify(categoria.id));
    router.push(`/Categoria/${categoria.nombre}`);
  };
  return (
    <Main title="Principal" description="Pagina Principal de Inventory">
      <NavBar />
      <Title>
        Bienvenid@ {user.nombre} {user.apellido}
      </Title>
      <section className={styles.containerTarget}>
        <Target
          count={products.length}
          text="Total de Productos"
          color="purpleDark"
        />
        <Target
          count={categories.length}
          text="Total de Categorias"
          color="purpleLigth"
        />
      </section>
      <div className={styles.containerSubtitle}>
        <Add onClick={() => setIsModal(true)} />
        <Title subTile>Categorias</Title>
      </div>
      <section className={styles.containerCard}>
        {loaderCategories ? (
          <Loading />
        ) : (
          categories.map((categoria) => {
            return (
              <Categoria
                key={categoria.id}
                categoria={categoria}
                onClick={() => handleRedirectProducts(categoria)}
              />
            );
          })
        )}
      </section>
      <Modal
        open={isModal}
        onClose={handleClickModal}
        title="Categoria"
        message={messageCategories}
      >
        <Input {...nombre} placeholder="Nombre" type="text" />
        <File onChange={(e) => setFoto(e.target.files[0])}>Foto</File>
        <Button onClick={handleClickCreateCategory}>Agregar</Button>
      </Modal>
    </Main>
  );
};

export default PrincipalPage;
