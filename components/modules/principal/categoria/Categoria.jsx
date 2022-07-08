import React from "react";
import useCategory from "../../../../hooks/useCategory";
import useProduct from "../../../../hooks/useProduct";
import { Card, Title } from "../../../common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria }) => {
  const { getProductsForCategoria } = useProduct();
  const { getCategoriaId } = useCategory();
  return (
    <button
      key={categoria.id}
      onClick={() => {
        getProductsForCategoria(categoria.id);
        getCategoriaId(categoria.id);
      }}
    >
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
