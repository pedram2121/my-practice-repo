
import axios from "axios";


const basecreate = "http://localhost:8001/";
const base = axios.create({
  baseURL: basecreate
});

export const getProduct = async()=>{
return (await base.get("/products/")).data
}