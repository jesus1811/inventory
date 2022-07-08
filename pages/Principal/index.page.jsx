import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { Add, Loading, Target, Title } from "../../components/common";
import { categoriaGetService } from "../../services/categoria.service";
import { useSelector, useDispatch } from "react-redux";
import { cargar } from "../../store/categoriaSlice";
import { Categoria } from "../../components/modules/principal";

const PrincipalPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state) => state.auth.value);
  const categorias = useSelector((state) => state.categorias.value);
  const [loaderCategorias, setLoaderCategorias] = useState(true);
  const getCategorias = async () => {
    const response = await categoriaGetService(auth.accessToken);
    if (response) {
      dispatch(cargar(response));
      setLoaderCategorias(false);
    }
  };
  useEffect(() => {
    if (!auth?.accessToken) router.push("/");
  }, [auth]);
  useEffect(() => {
    getCategorias();
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
