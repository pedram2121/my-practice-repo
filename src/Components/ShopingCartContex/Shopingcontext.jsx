import React, { createContext, useContext, useState } from "react";

export const ShopingContextCreate = createContext({});

export const useShopingContext = () => {
  return useContext(ShopingContextCreate);
};

function Shopingcontext({children}) {

  const [cartItem, setCartItem] = useState([]);

  const handelIncrease = (id) => {
    setCartItem((currentItem) => {
      let NotProduct = currentItem.find((item) => item.id == id) == null;
      if (NotProduct) {
        return [...currentItem, { id , qty: 1 }];
      } else {
       return currentItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const ProductQty = (id) =>{
    return cartItem.find ((item)=> item.id == id)?.qty
  }

  return (
    <>
      <ShopingContextCreate.Provider value={{ handelIncrease, ProductQty }}>
        {children}
      </ShopingContextCreate.Provider>
    </>
  );
}

export default Shopingcontext;
