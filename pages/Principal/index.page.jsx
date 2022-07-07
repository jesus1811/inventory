import { useEffect } from "react";
import { useRouter } from "next/router";
import { Main, NavBar } from "../../components/layouts";
import styles from "./styles.module.scss";
import { Add, Card, Target, Title } from "../../components/common";
import Link from "next/link";
import { categoriaGetService } from "../../services/categoria.service";
import { useSelector, useDispatch } from "react-redux";
import { cargar } from "../../store/categoriaSlice";

const PrincipalPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state) => state.auth.value);
  const categorias = useSelector((state) => state.categorias.value);

  const getCategoria = async () => {
    const resCategoria = await categoriaGetService(auth.accessToken);
    dispatch(cargar(resCategoria));
  };

  useEffect(() => {
    if (!auth?.accessToken) router.push("/");
  }, [auth]);
  useEffect(() => {
    getCategoria();
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
        {categorias.map((categoria) => {
          return (
            <Link href="/producto" key={categoria.id}>
              <a>
                <Card center small>
                  <img className={styles.image} src="/image.jpg" alt="image" />
                  <Title variant="textMain">{categoria.nombre}</Title>
                </Card>
              </a>
            </Link>
          );
        })}
      </section>
    </Main>
  );
};

export default PrincipalPage;
