import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productoGetService } from "../../../../services/producto.service";
import { cargar } from "../../../../store/productoForCategoriaSlice";
import { Card, Title } from "../../../common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);
  const redirect = async () => {
    router.push("/producto");
    const response = await productoGetService(auth.accessToken);
    if (response) dispatch(cargar({ data: response, id: categoria.id }));
  };
  return (
    <button key={categoria.id} onClick={redirect}>
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
