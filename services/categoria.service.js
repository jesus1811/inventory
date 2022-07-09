import axios from "axios";
import { formatToken } from "../utils";
export const categoriaGetService = async (token) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/categoria", formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const categoriaIdGetService = async (token, id) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/categoria/" + id, formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }
};