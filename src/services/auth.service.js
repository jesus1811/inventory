import axios from "axios";
export const authLoginService = async (usuario, contrasena) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/login`, { usuario, contrasena });
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    if (err.response.status === 400 || 401) return err.response.data;
  }
};
export const createUserService = async (nombre, apellido, usuario, contrasena, idTipoUsuario) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/usuario`, { nombre, apellido, usuario, contrasena, idTipoUsuario });
    if (response) return response.data;
  } catch (err) {
    console.log(err);
  }
};
