import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriaGetService, categoriaIdGetService } from "../services/categoria.service";
import { cargar } from "../store/categoriaSlice";
import { cargar as cargarId } from "../store/CategoriaidSlice";

const useCategory = () => {
  const auth = useSelector((state) => state.auth.value);
  const categorias = useSelector((state) => state.categorias.value);
  const categoria = useSelector((state) => state.categoria.value);
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
  const getCategoriaId = async (id) => {
    const response = await categoriaIdGetService(auth.accessToken, id);
    if (response) dispatch(cargarId(response));
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
    cargar,
    getCategoriaId,
    categoria,
  };
};

export default useCategory;
