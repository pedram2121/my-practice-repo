
import axios from "axios";


const baseurll = "http://localhost:8001/";
const basee = axios.create({
  baseURL:baseurll
})


 export async function getProduct (){

return (await (basee.get("products"))).data

}
