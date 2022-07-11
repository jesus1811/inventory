import { useState } from "react";
import { Add, Button, Card, Input, Loading, Modal, Target, Title } from "../../components/common";
import { Main, NavBar } from "../../components/layouts";
import useProduct from "../../hooks/useProduct";
import styles from "./styles.module.scss";
import useField from "../../hooks/useField";
import useUser from "../../hooks/useUser";

const Producto = () => {
  const [isModalStock, setModalStock] = useState(false);
  const [product, setProduct] = useState({});
  const StorageCategory = () => {
    if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("category")) || {};
    return {};
  };
  const category = StorageCategory();
  const { user } = useUser();
  const nombre = useField();
  const stock = useField();
  const foto = useField();
  const [isModalProduct, setIsModalProduct] = useState(false);
  const { products, createProduct, loaderProducts, messageProducts, addStockProduct, deleteStockProduct } = useProduct();

  const handleClickAddProduct = () => {
    createProduct(nombre.value, stock.value, foto.value, category.id, user.id);
    nombre.setValue("");
    stock.setValue("");
  };
  const handleClickAddStock = () => {
    addStockProduct(product.id, stock.value);
    stock.setValue(null);
    stock.setValue("");
  };
  const handleClickDeleteStock = () => {
    deleteStockProduct(product.id, stock.value);
    stock.setValue(null);
    stock.setValue("");
  };
  return (
    <Main>
      <NavBar />
      <section className={styles.containerTitle}>
        <Add onClick={() => setIsModalProduct(true)} />
        <Title>{category?.nombre}</Title>
      </section>
      <section className={styles.containerSearh}>
        <Target count="20" text={"total de Bebidas"} color="purpleDark" />
        <Target count="20" text="Total de Bebidas" color="purple" />
      </section>
      <section className={styles.containerCard}>
        {loaderProducts ? (
          <Loading />
        ) : (
          products
            .filter((item) => {
              return item.idcategoria === category?.id;
            })
            .map((producto) => {
              return (
                <button
                  key={producto.id}
                  onClick={() => {
                    setModalStock(true);
                    setProduct(producto);
                  }}
                >
                  <Card center small>
                    <img className={styles.image} src="/image.jpg" alt="image" />
                    <Title variant="textMain">{producto.nombre}</Title>
                    <Title variant="text">{producto.stock}</Title>
                  </Card>
                </button>
              );
            })
        )}
      </section>
      <Modal title={category.nombre} open={isModalProduct} onClose={() => setIsModalProduct(!isModalProduct)} message={messageProducts}>
        <Input {...nombre} placeholder="Nombre" />
        <Input {...stock} placeholder="Stock" />
        <Input {...foto} placeholder="Foto" />
        <Button onClick={handleClickAddProduct}>Agregar</Button>
      </Modal>
      <Modal title={product.nombre} open={isModalStock} onClose={() => setModalStock(!isModalStock)} message={messageProducts}>
        <Input {...stock} placeholder="Stock" />
        <div className={styles.containerSearh}>
          <Button onClick={handleClickAddStock}>Agregar</Button>
          <Button onClick={handleClickDeleteStock}>Retirar</Button>
        </div>
      </Modal>
    </Main>
  );
};

export default Producto;
