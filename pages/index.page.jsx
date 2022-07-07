import { useEffect, useState } from "react";
import { Main } from "../components/layouts";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Card, Input, Title } from "../components/common";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { authLoginService } from "../services/auth.service";
import { login } from "../store/authSlice";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);
  const [error, setError] = useState(false);

  const handleClickRegistrar = async () => {
    const response = await authLoginService("usuario back", "contraseña back");
    dispatch(login(response));
    localStorage.setItem("user", JSON.stringify(response));
    if (!response) setError(true);
  };

  useEffect(() => {
    if (auth?.accessToken) router.push("/Principal");
  }, [auth]);
  
  return (
    <Main title="Acceso" description="Pagina de acceso">
      <article className={styles.containerTitle}>
        <Title>Acceso</Title>
      </article>
      <Card variant="center">
        <img className={styles.images} src="/login.svg" alt="login" />
        <div className={styles.containerInput}>
          <Input placeholder="Usuario" type="text" />
          <Input placeholder="Contraseña" type="password" />
          <Button onClick={handleClickRegistrar}>Ingresar</Button>
          {error && <p className={styles.error}>Usuario y/o contraseña incorrecta</p>}
        </div>
        <p className={styles.text}>
          no tienes cuenta?
          <Link href="./registro">
            <a className={styles.text__link}> Registrar</a>
          </Link>
        </p>
      </Card>
    </Main>
  );
};

export default Index;
