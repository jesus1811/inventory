import axios from "axios";
export const authLoginService = async (usuario, contrasena) => {
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_URL + "/login", { usuario, contrasena });
    return data;
  } catch (err) {
    console.log(err);
  }
};
