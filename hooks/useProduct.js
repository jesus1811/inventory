import { useDispatch, useSelector } from "react-redux";
import { productoGetService } from "../services/producto.service";
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
  return {
    getProducts,
  };
};

export default useProduct;
