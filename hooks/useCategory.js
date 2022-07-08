import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriaGetService } from "../services/categoria.service";
import { cargar } from "../store/categoriaSlice";

const useCategory = () => {
  const auth = useSelector((state) => state.auth.value);
  const categorias = useSelector((state) => state.categorias.value);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loaderCategorias, setLoaderCategorias] = useState(true);

  const getCategorias = async () => {
    const response = await categoriaGetService(auth.accessToken);
    if (response) {
      dispatch(cargar(response));
      setLoaderCategorias(false);
    }
  };

  useEffect(() => {
    if (!auth?.accessToken) router.push("/");
  }, [auth]);
  useEffect(() => {
    getCategorias();
  }, []);
  return {
    auth,
    loaderCategorias,
    categorias,
  };
};

export default useCategory;
