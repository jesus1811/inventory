import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useCategory from "../../../../hooks/useCategory";
import useProduct from "../../../../hooks/useProduct";
import { productoGetService } from "../../../../services/producto.service";
import { cargar } from "../../../../store/productoForCategoriaSlice";
import { Card, Title } from "../../../common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria }) => {
  const { getProductsForCategoria } = useProduct();
  return (
    <button key={categoria.id} onClick={() => getProductsForCategoria(categoria.id)}>
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
