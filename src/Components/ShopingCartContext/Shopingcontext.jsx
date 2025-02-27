import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorag";

export const shopingContextCreate = createContext({});

export const useShopingContext = () => {
  return useContext(shopingContextCreate);
};

function Shopingcontext({ children }) {
  const [cartItem, setCartItem] = useLocalStorage("cart",[]);

  const handelIncrease = (id) => {
    setCartItem((currentItems) => {
      let notProduct = currentItems.find((item) => item.id == id) == null;
      if (notProduct) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecrease = (id) => {
    setCartItem((currentItems) => {
      let lastProduct = currentItems.find((item) => item.id == id)?.qty == 1;
      if (lastProduct) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelDeleteProduct = (id) => {
    setCartItem((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const productQty = (id) => {
    return cartItem.find((item) => item.id == id)?.qty || 0;
  };

  const productTotalQty = cartItem.reduce((total, index) => {
    return total + index.qty;
  }, 0);
  return (
    <>
      <shopingContextCreate.Provider
        value={{
          handelIncrease,
          productQty,
          productTotalQty,
          handleDecrease,
          handelDeleteProduct,
          cartItem,
        }}
      >
        {children}
      </shopingContextCreate.Provider>
    </>
  );
}

export default Shopingcontext;
