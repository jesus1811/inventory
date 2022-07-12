import axios from "axios";
import { expiredToken, formatToken } from "../utils";
export const categoriaGetService = async (token) => {
  // const router = useRouter();
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/categoria", formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    expiredToken(err);
  }
};
export const categoriaIdGetService = async (token, id) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/categoria/" + id, formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    expiredToken(err);
  }
};
export const createCategoryService = async (token, nombre, foto) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_URL + "/categoria", { nombre, foto }, formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    if (err.response.status === 400) return err.response.data;
    expiredToken(err);
  }
};
