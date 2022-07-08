import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginService } from "../services/auth.service";
import { login, logut } from "../store/authSlice";

const useUser = () => {
  const auth = useSelector((state) => state.auth.value);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClickLogin = async (usuario, password) => {
    const data = await authLoginService(usuario, password);
    if (data.message) dispatch(login({ message: data.message }));
    dispatch(login(data));
    router.push("/Principal")
  };
  const handleClickLogut = () => {
    dispatch(logut());
    localStorage.setItem("user", JSON.stringify({}));
    router.push("/");
  };
  useEffect(() => {
    if (!auth?.accessToken) router.push("/");
  }, [auth]);
  return {
    handleClickLogin,
    handleClickLogut,
    auth,
  };
};

export default useUser;
