import axios from "axios";
import { formatToken } from "../utils";
export const categoriaGetService = async (token) => {
  try {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_URL + "/categoria", formatToken(token));
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
