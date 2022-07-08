import axios from "axios";
export const authLoginService = async (usuario, contrasena, dispatch, action, error, setError) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_URL + "/login", { usuario, contrasena });
    if (response.status === 200) {
      dispatch(action(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    console.log(response);
  } catch (err) {
    if (err.response.status === 400 || 401) setError({ ...error, active: true, message: err.response.data.message });
    console.log(err.response.status);
  }
};
