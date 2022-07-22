import { Card, Title } from "../../../../components/common";
import styles from "./styles.module.scss";

const Category = ({ category, onClick }) => {
  return (
      <Card center small key={category.id} onClick={onClick}>
        <img className={styles.image} src={category.foto} alt="image" />
        <Title textMain>{category.nombre}</Title>
      </Card>
  );
};

export default Category;
