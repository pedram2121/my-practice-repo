import axios from "axios";

const client = "http://localhost:8001/";
const base = axios.create({
  baseURL: client,
});

export const getProduct = async () => {
  return (await base.get("/products/")).data;
};

export const getDiscount = (code) =>
  base.get(`/discount?code=${code}`).then((res) => res.data);
