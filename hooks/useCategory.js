import { useDispatch, useSelector } from "react-redux";
import { categoriaGetService, categoriaIdGetService } from "../services/categoria.service";
import { setCategories } from "../store/categoriesSlice";
import { setCategory } from "../store/categorySlice";

const useCategory = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const getCategories = async (setLoader) => {
    const data = await categoriaGetService(user.accessToken);
    if (data) {
      dispatch(setCategories(data));
      setLoader(false);
    }
  };
  const getCategory = async (id) => {
    const data = await categoriaIdGetService(user.accessToken, id);
    if (data) dispatch(setCategory(data));
  };
  return {
    getCategories,
    getCategory,
  };
};

export default useCategory;
