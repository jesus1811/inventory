import { Card, Title } from "../../../../components/common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria, onClick }) => {
  return (
    <button key={categoria.id} onClick={onClick}>
      <Card center small>
        <img className={styles.image} src={categoria.foto} alt="image" />
        <Title textMain>{categoria.nombre}</Title>
      </Card>
    </button>
  );
};

export default Categoria;
