import { useState } from "react";
import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { Add, Button, Input, Loading, Modal, Target, Title } from "../../components/common";
import { Categoria } from "../../components/modules/principal";
import { useCategory, useField, useUser } from "../../hooks";

const PrincipalPage = () => {
  const router = useRouter();
  const nombre = useField();
  const foto = useField();
  const [isModal, setIsModal] = useState(false);
  const { loaderCategories, categories, createCategory, messageCategories } = useCategory();
  const { user } = useUser();
  const handleClickModal = () => {
    setIsModal(!isModal);
  };
  const handleClickCreateCategory = () => {
    createCategory(nombre.value, foto.value);
  };
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
            return (
              <Categoria
                key={categoria.id}
                categoria={categoria}
                onClick={() => {
                  localStorage.setItem("category", JSON.stringify(categoria));
                  router.push("/producto");
                }}
              />
            );
          })
        )}
      </section>
      <Modal open={isModal} onClose={handleClickModal} title="Categoria" message={messageCategories}>
        <Input {...nombre} placeholder="Nombre" type="text" />
        <Input {...foto} placeholder="Foto" type="text" />
        <Button onClick={handleClickCreateCategory}>Agregar</Button>
      </Modal>
    </Main>
  );
};

export default PrincipalPage;
