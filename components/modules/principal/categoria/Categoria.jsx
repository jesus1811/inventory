import { useRouter } from "next/router";
import useCategory from "../../../../hooks/useCategory";
import { Card, Title } from "../../../common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria }) => {
  const router = useRouter();
  const { getCategory } = useCategory();
  const handleClickRedirect = () => {
    getCategory(categoria.id);
    router.push("/producto");
  };
  return (
    <button key={categoria.id} onClick={handleClickRedirect}>
      <a>
        <Card center small>
          <img className={styles.image} src="/image.jpg" alt="image" />
          <Title variant="textMain">{categoria.nombre}</Title>
        </Card>
      </a>
    </button>
  );
};

export default Categoria;
