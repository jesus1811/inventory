import { Card, Title } from "../../../common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria, onClick }) => {
  return (
    <button key={categoria.id} onClick={onClick}>
      <Card center small>
        <img className={styles.image} src="/image.jpg" alt="image" />
        <Title variant="textMain">{categoria.nombre}</Title>
      </Card>
    </button>
  );
};

export default Categoria;
