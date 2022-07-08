import axios from "axios";
export const authLoginService = async (usuario, contrasena) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_URL + "/login", { usuario, contrasena });
    if (response.status === 200) return response.data;
  } catch (err) {
    if (err.response.status === 400 || 401) return err.response.data;
  }
};
