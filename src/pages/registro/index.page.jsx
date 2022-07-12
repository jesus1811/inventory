import { Button, Card, Input, Title } from "../../components/common";
import { Main } from "../../components/layouts";
import styles from "./styles.module.scss";

const RegistroPage = () => {
  return (
    <Main title="Registro" description="Pagina de registro">
      <article className={styles.containerTitle}>
        <Title>Registrar</Title>
      </article>
      <Card center>
        <div className={styles.containerInput}>
          <Input placeholder="Nombre" type="text" />
          <Input placeholder="Apellido" type="password" />
          <Input placeholder="Usuario" type="text" />
          <Input placeholder="Contraseña" type="password" />
          <Input placeholder="Tipo de Usuario" type="password" />
          <Button>Registrar</Button>
        </div>
      </Card>
    </Main>
  );
};

export default RegistroPage;
