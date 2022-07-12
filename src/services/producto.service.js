import axios from "axios";
import { expiredToken, formatToken } from "../utils";
export const productoGetService = async (token) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/producto", formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    expiredToken(err);
  }
};

export const createProductService = async (token, nombre, stock, foto, idCategoria, idUsuario) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_URL + "/producto", { nombre, stock, foto, idCategoria, idUsuario }, formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    if (err.response.status === 400) return err.response.data;
    expiredToken(err);
  }
};
export const getProductService = async (token, id) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/producto/" + id, formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    expiredToken(err);
  }
};
export const addStockService = async (token, id, stock) => {
  try {
    const resonse = await axios.put(process.env.NEXT_PUBLIC_URL + "/producto/addStock/" + id, { stock }, formatToken(token));
    if (resonse.status === 200) return resonse.data;
  } catch (err) {
    console.log(err);
    if (err.response.status === 400) return err.response.data;
    expiredToken(err);
  }
};
export const deleteStockService = async (token, id, stock) => {
  try {
    const response = await axios.put(process.env.NEXT_PUBLIC_URL + "/producto/deleteStock/" + id, { stock }, formatToken(token));
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    if (err.response.status === 400) return err.repsonse.data;
    expiredToken(err);
  }
};
