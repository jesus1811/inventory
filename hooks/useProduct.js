import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStockService, createProductService, deleteStockService, productoGetService } from "../services/producto.service";
import { setProducts } from "../store/productsSlice";
const useProduct = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);
  const [loaderProducts, setLoaderProducts] = useState(true);
  const [messageProducts, setMessageProducts] = useState({ message: "", isActive: false });

  const getProducts = async () => {
    const data = await productoGetService(user.accessToken);
    if (data) {
      dispatch(setProducts(data));
      setLoaderProducts(false);
    }
  };

  const createProduct = async (nombre, stock, foto, idCategoria, idUsuario) => {
    const data = await createProductService(user.accessToken, nombre, stock, foto, idCategoria, idUsuario);
    if (data) {
      setMessageProducts({ isActive: true, message: data.message });
      setLoaderProducts(true);
    }
  };
  const addStockProduct = async (id, stock) => {
    const data = await addStockService(user.accessToken, id, stock);
    if (data) {
      setMessageProducts({ message: data.message, isActive: true });
      setLoaderProducts(true);
    }
  };
  const deleteStockProduct = async (id, stock) => {
    const data = await deleteStockService(user.accessToken, id, stock);
    if (data) {
      setMessageProducts({ message: data.message, isActive: true });
      setLoaderProducts(true);
    }
  };
  useEffect(() => {
    getProducts();
  }, [loaderProducts]);
  return {
    loaderProducts,
    products,
    createProduct,
    messageProducts,
    addStockProduct,
    deleteStockProduct,
  };
};

export default useProduct;
