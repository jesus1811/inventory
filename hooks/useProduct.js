import { useDispatch, useSelector } from "react-redux";
import { addStockService, createProductService, deleteStockService, getProductService, productoGetService } from "../services/producto.service";
import { setProduct } from "../store/productSlice";
import { setProducts } from "../store/productsSlice";
const useProduct = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const getProducts = async (setLoader) => {
    const data = await productoGetService(user.accessToken);
    if (data) {
      dispatch(setProducts(data));
      setLoader(false);
    }
  };

  const createProduct = async (nombre, stock, foto, idCategoria, idUsuario, setMessage, setLoader) => {
    const data = await createProductService(user.accessToken, nombre, stock, foto, idCategoria, idUsuario);
    if (data) {
      setMessage({ isActive: true, message: data.message });
      setLoader(true);
    }
  };
  const getProduct = async (id) => {
    const data = await getProductService(user.accessToken, id);
    if (data) dispatch(setProduct(data));
  };
  const addStockProduct = async (id, stock, setMessage, setLoader) => {
    const data = await addStockService(user.accessToken, id, stock);
    if (data) {
      setMessage({ message: data.message, isActive: true });
      setLoader(true);
    }
  };
  const deleteStockProduct = async (id, stock, setMessage, setLoader) => {
    const data = await deleteStockService(user.accessToken, id, stock);
    if (data) {
      setMessage({ message: data.message, isActive: true });
      setLoader(true);
    }
  };
  return {
    getProducts,
    createProduct,
    getProduct,
    addStockProduct,
    deleteStockProduct,
  };
};

export default useProduct;
