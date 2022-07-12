import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add, Button, Card, File, Input, Loading, Modal, Target, Title } from "../../components/common";
import { Main, NavBar } from "../../components/layouts";
import { useField, useUser } from "../../hooks";
import useProduct from "../../hooks/useProduct";
import { app } from "../../services/firebase.service";
import { setProducts } from "../../store/productsSlice";
import styles from "./styles.module.scss";

const Producto = () => {
  const [isModalStock, setModalStock] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const StorageCategory = () => {
    if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("category")) || {};
    return {};
  };
  const category = StorageCategory();
  const { user } = useUser();
  const nombre = useField();
  const stock = useField();
  const [search, setSearch] = useState("");
  const [foto, setFoto] = useState({});
  const [isModalProduct, setIsModalProduct] = useState(false);
  const { products, createProduct, loaderProducts, messageProducts, tableProducts, addStockProduct, deleteStockProduct, setCleanMessage } =
    useProduct();

  const handleClickAddProduct = async () => {
    if (foto.name) {
      const path = app.storage().ref().child(foto.name);
      await path.put(foto);
    }
    createProduct(nombre.value, stock.value, foto.name, category.id, user.id);
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
  const handleClickModalProduct = () => {
    setIsModalProduct(!isModalProduct);
    nombre.setValue("");
    stock.setValue(null);
    setFoto({});
    setCleanMessage();
  };
  const handleChangeBusqueda = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };
  const filter = (termino) => {
    let result = tableProducts.filter((item) => {
      if (item.nombre.toString().toLowerCase().includes(termino.toLowerCase())) {
        return item;
      }
    });
    dispatch(setProducts(result));
  };
  return (
    <Main>
      <NavBar />
      <section className={styles.containerTitle}>
        <Add onClick={() => setIsModalProduct(true)} />
        <Title>{category?.nombre}</Title>
      </section>
      <section className={styles.containerSearh}>
        <Target
          count={
            products.filter((item) => {
              return item.idcategoria === category?.id;
            }).length
          }
          text={`Total de ${category?.nombre}`}
          color="purpleDark"
        />
        <Input placeholder={`Buscar ${category?.nombre}`} onChange={handleChangeBusqueda} />
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
                    <img className={styles.image} src={producto.foto} alt="image" />
                    <Title textMain>{producto.nombre}</Title>
                    <Title text>{producto.stock}</Title>
                  </Card>
                </button>
              );
            })
        )}
      </section>
      <Modal title={category.nombre} open={isModalProduct} onClose={handleClickModalProduct} message={messageProducts}>
        <Input {...nombre} placeholder="Nombre" />
        <Input {...stock} placeholder="Stock" />
        <File {...foto} onChange={(e) => setFoto(e.target.files[0])}>
          Foto
        </File>
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
