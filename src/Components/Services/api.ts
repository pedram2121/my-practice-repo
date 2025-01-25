
 export async function getProduct (){

   const data = await fetch("http://localhost:8002/products");
   return data.json();

 }