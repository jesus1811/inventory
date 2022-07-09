import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { Main } from "../components/layouts";
import { Button, Card, Input, Title } from "../components/common";
import styles from "./styles.module.scss";
import useField from "../hooks/useField";
import useUser from "../hooks/useUser";

const Index = () => {
  const user = useSelector((state) => state.user.value);
  const router = useRouter();
  const usuario = useField();
  const password = useField();
  const { handleClickLogin } = useUser();
  useEffect(() => {
    if (!user?.accessToken) router.push("/");
  }, [user]);
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
          <Button onClick={() => handleClickLogin(usuario.value, password.value)}>Ingresar</Button>
          {user.message && <p>{user.message}</p>}
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
