
 export async function getProduct (){

   const data = await fetch("http://localhost:8001/products");
   return data.json();

 }