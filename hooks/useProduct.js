import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productoGetService } from "../services/producto.service";
import { cargar } from "../store/productoForCategoriaSlice";

const useProduct = () => {
  const auth = useSelector((state) => state.auth.value);
  const router = useRouter();
  const dispatch = useDispatch();
  const productosForCategory = useSelector((state) => state.productoForCategoria.value);

  const getProductsForCategoria = async (id) => {
    const response = await productoGetService(auth.accessToken);
    if (response) dispatch(cargar({ data: response, id: id }));
    router.push("/producto");
  };

  const getProducts = async () => {
    const response = await productoGetService(auth.accessToken);
  };

  useEffect(() => {}, []);
  return {
    productosForCategory,
    getProducts,
    getProductsForCategoria,
  };
};

export default useProduct;
