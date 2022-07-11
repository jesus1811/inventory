import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriaGetService, createCategoryService } from "../services/categoria.service";
import { setCategories } from "../store/categoriesSlice";

const useCategory = () => {
  const user = useSelector((state) => state.user.value);
  const categories = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();
  const [loaderCategories, setLoaderCategories] = useState(true);
  const [messageCategories, setMessageCategories] = useState({ message: "", isActive: false });

  const getCategories = async () => {
    const data = await categoriaGetService(user.accessToken);
    if (data) {
      dispatch(setCategories(data));
      setLoaderCategories(false);
    }
  };
  const createCategory = async (nombre, foto) => {
    const data = await createCategoryService(user.accessToken, nombre, foto);
    if (data) {
      setMessageCategories({ message: data.message, isActive: true });
      setLoaderCategories(true);
    }
  };
  useEffect(() => {
    getCategories();
  }, [loaderCategories]);
  return {
    loaderCategories,
    createCategory,
    messageCategories,
    categories,
  };
};

export default useCategory;
