import Link from "next/link";
import React from "react";
import { Card, Title } from "../../../common";
import styles from "./styles.module.scss";

const Categoria = ({ categoria }) => {
  return (
    <Link href="/producto" key={categoria.id}>
      <a>
        <Card center small>
          <img className={styles.image} src="/image.jpg" alt="image" />
          <Title variant="textMain">{categoria.nombre}</Title>
        </Card>
      </a>
    </Link>
  );
};

export default Categoria;
