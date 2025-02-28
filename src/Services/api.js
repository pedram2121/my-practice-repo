import axios from "axios";

const client = "http://localhost:8001/";
const base = axios.create({
  baseURL: client,
});

export const getProduct = async () => {
  return (await base.get("/products/")).data;
};

export const detailsProduct = async (id) => {
  const data =  await base.get(`/products/${id}`)
  return data;
};


export const getDiscount = async (code) => {
  return base(`/discount?code=${code}`).then((res) => res.data);
};