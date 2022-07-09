import Link from "next/link";
import { Main } from "../components/layouts";
import { Button, Card, Input, Modal, Title } from "../components/common";
import styles from "./styles.module.scss";
import useField from "../hooks/useField";
import useUser from "../hooks/useUser";

const Index = () => {
  const { handleClickLogin, auth } = useUser();
  const usuario = useField();
  const password = useField();
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
          {auth.message && <p>{auth.message}</p>}
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
