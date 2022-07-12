import { useState } from "react";
import { Button, Card, Input, Title } from "../../components/common";
import { Main } from "../../components/layouts";
import { useField } from "../../hooks";
import { createUserService } from "../../services/auth.service";
import styles from "./styles.module.scss";

const RegistroPage = () => {
  const name = useField();
  const lastName = useField();
  const usuario = useField();
  const password = useField();
  const [user, setUser] = useState({});
  const handleClickRegister = async () => {
    const data = await createUserService(name.value, lastName.value, usuario.value, password.value, 1);
    if (data.message) setUser({ message: data.message });
  };
  return (
    <Main title="Registro" description="Pagina de registro">
      <article className={styles.containerTitle}>
        <Title>Registrar</Title>
      </article>
      <Card center>
        <div className={styles.containerInput}>
          <Input {...name} placeholder="Nombre" type="text" />
          <Input {...lastName} placeholder="Apellido" type="text" />
          <Input {...usuario} placeholder="Usuario" type="text" />
          <Input {...password} placeholder="Contraseña" type="password" />
          {user.message && <p>{user.message}</p>}
          <Button onClick={handleClickRegister}>Registrar</Button>
        </div>
      </Card>
    </Main>
  );
};

export default RegistroPage;
