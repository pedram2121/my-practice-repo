import React, { useEffect, useState } from "react";
import CartItemProduct from "../CartItems/CartItemProduct";
import { useShopingContext } from "../../Components/ShopingCartContex/Shopingcontext";
import { MdShoppingCart } from "react-icons/md";
import axios from "axios";

function CartProduct() {

 const {cartItem} = useShopingContext();

//TotalPrice

const [totall, setTotall] = useState([])

useEffect(() => {
  axios.get("http://localhost:8001/products").then((Result)=>{
    const FinalyData = Result;
    setTotall(FinalyData.data)
  })
}, [])



 
   
 

  return (
    <>
      <div>
        {cartItem.map((item) => (
          <CartItemProduct key={item.id} {...item} />
        ))}
      </div>

      <div className="mt-14 border-t py-12">
        <div className="flex px-10 items-center justify-center mx-auto bg-gray-100 rounded-xl p-4 shadow-md w-fit">
          <MdShoppingCart className="text-blue-600 text-2xl mr-2" />
          <h1 className="text-lg font-medium text-gray-700 whitespace-nowrap mr-3">
            Total Price:
          </h1>
          <span className="text-2xl font-bold text-green-600 ml-2">
            $
            {cartItem.reduce((total, index) => {
              let SelectedProduct = totall.find((Result) => Result.id == index.id);
              return (total + (SelectedProduct?.price || 0)) * index.qty;
            }, 0)}
            
          </span>
        </div>


      </div>
    </>
  );
}

export default CartProduct;
