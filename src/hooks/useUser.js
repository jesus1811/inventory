import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginService, createUserService } from "../services/auth.service";
import { setUser } from "../store/userSlice";

const useUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleClickLogin = async (usuario, password) => {
    const data = await authLoginService(usuario, password);
    if (data.message) dispatch(setUser({ message: data.message }));
    if (!data.message) {
      dispatch(setUser(data));
      router.push("/home");
    }
  };
  const handleClickLogut = () => {
    dispatch(setUser({}));
  };
  
  useEffect(() => {
    if (!user.accessToken) router.push("/");
  }, [user]);
  return {
    handleClickLogin,
    user,
    handleClickLogut,
  };
};

export default useUser;
