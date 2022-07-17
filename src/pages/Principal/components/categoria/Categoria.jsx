import { Card, Title } from "../../../../components/common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria, onClick }) => {
  return (
      <Card center small key={categoria.id} onClick={onClick}>
        <img className={styles.image} src={categoria.foto} alt="image" />
        <Title textMain>{categoria.nombre}</Title>
      </Card>
  );
};

export default Categoria;
