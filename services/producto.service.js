import axios from "axios";
import { formatToken } from "../utils";
export const productoGetService = async (token) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/producto", formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }
};
