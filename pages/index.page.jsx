import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Main } from "../components/layouts";
import { useRouter } from "next/router";
import { Button, Card, Input, Title } from "../components/common";
import styles from "./styles.module.scss";
import { authLoginService } from "../services/auth.service";
import { login } from "../store/authSlice";
import useField from "../hooks/useField";

const Index = () => {
  const usuario = useField();
  const password = useField();
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);
  const [error, setError] = useState({ message: "", active: false });

  const handleClickRegistrar = async () => {
    const data = await authLoginService(usuario.value, password.value);
    if (data.message) setError({ message: data.message, active: true });
    dispatch(login(data));
  };

  useEffect(() => {
    if (auth?.accessToken) router.push("/Principal");
  }, [auth]);

  return (
    <Main title="Acceso" description="Pagina de acceso">
      <article className={styles.containerTitle}>
        <Title>Acceso</Title>
      </article>
      <Card center>
        <img className={styles.images} src="/login.svg" alt="login" />
        <div className={styles.containerInput}>
          <Input {...usuario} placeholder="Usuario" type="text" />
          <Input {...password} placeholder="Contraseña" type="password" />
          <Button onClick={handleClickRegistrar}>Ingresar</Button>
          {error.active && <p>{error.message}</p>}
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
