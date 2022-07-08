import axios from "axios";
import { formatToken } from "../utils";
export const categoriaGetService = async (token, dispatch, action, setLoader) => {
  try {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_URL + "/categoria", formatToken(token));
    dispatch(action(data));
    setLoader();
  } catch (err) {
    console.log(err);
    return [];
  }
};
