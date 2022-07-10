import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Add, Button, Card, Input, Loading, Modal, Target, Title } from "../../components/common";
import { Main, NavBar } from "../../components/layouts";
import useProduct from "../../hooks/useProduct";
import styles from "./styles.module.scss";
import useField from "../../hooks/useField";

const Producto = () => {
  const category = useSelector((state) => state.category.value);
  const user = useSelector((state) => state.user.value);
  const product = useSelector((state) => state.product.value);
  const products = useSelector((state) => state.products.value);
  const [loaderProductsCategory, setLoaderProductsCategory] = useState(true);
  const [isModalStock, setModalStock] = useState(false);
  const [messageModal, setMessageModal] = useState({
    isActive: false,
    message: "",
  });
  const nombre = useField();
  const stock = useField();
  const foto = useField();
  const [isModalProduct, setIsModalProduct] = useState(false);
  const productsCategory = products.filter((item) => {
    return item.idcategoria === category.id;
  });
  const { getProducts, createProduct, getProduct, addStockProduct, deleteStockProduct } = useProduct();
  const handleClickAddProduct = () => {
    createProduct(nombre.value, stock.value, foto.value, category.id, user.id, setMessageModal, setLoaderProductsCategory);
    nombre.setValue("");
    stock.setValue("");
  };
  const handleClickAddStock = () => {
    addStockProduct(product.id, stock.value, setMessageModal, setLoaderProductsCategory);
    stock.setValue(null);
  };
  const handleClickDeleteStock = () => {
    deleteStockProduct(product.id, stock.value, setMessageModal, setLoaderProductsCategory);
    stock.setValue(null);
  };
  useEffect(() => {
    getProducts(setLoaderProductsCategory);
  }, [loaderProductsCategory]);
  return (
    <Main>
      <NavBar />
      <section className={styles.containerTitle}>
        <Add onClick={() => setIsModalProduct(true)} />
        <Title>{category?.nombre}</Title>
      </section>
      <section className={styles.containerSearh}>
        <Target count="20" text={"total de " + category.nombre} color="purpleDark" />
        <Target count="20" text="Total de Bebidas" color="purple" />
      </section>
      <section className={styles.containerCard}>
        {loaderProductsCategory ? (
          <Loading />
        ) : (
          productsCategory.map((producto) => {
            return (
              <button
                key={producto.id}
                onClick={() => {
                  getProduct(producto.id);
                  setModalStock(true);
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
      <Modal title={category.nombre} open={isModalProduct} onClose={() => setIsModalProduct(!isModalProduct)} message={messageModal}>
        <Input {...nombre} placeholder="Nombre" />
        <Input {...stock} placeholder="Stock" />
        <Input {...foto} placeholder="Foto" />
        <Button onClick={handleClickAddProduct}>Agregar</Button>
      </Modal>
      <Modal title={product.nombre} open={isModalStock} onClose={() => setModalStock(!isModalStock)} message={messageModal}>
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
