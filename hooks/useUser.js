import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authLoginService } from "../services/auth.service";
import { setUser } from "../store/userSlice";

const useUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClickLogin = async (usuario, password) => {
    const data = await authLoginService(usuario, password);
    if (data.message) dispatch(setUser({ message: data.message }));
    if (!data.message) {
      dispatch(setUser(data));
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/Principal");
    }
  };
  const handleClickLogut = () => {
    dispatch(setUser({}));
    localStorage.setItem("user", JSON.stringify({}));
    router.push("/");
  };
  return {
    handleClickLogin,
    handleClickLogut,
  };
};

export default useUser;
