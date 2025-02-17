import React from "react";
import CartItemProduct from "../CartItems/CartItemProduct";
import { useShopingContext } from "../../Components/ShopingCartContex/Shopingcontext";

function CartProduct() {
  const {cartItem} = useShopingContext();
   
 

  return (
    <>

      <div>
        {cartItem.map((item) => (
          <CartItemProduct key={item.id} {...item} />
        ))}
      </div>

    </>
  );
}

export default CartProduct;
