import React, { createContext, useContext, useState } from "react";

export const ShopingContextCreate = createContext({});

export const useShopingContext = () => {
  return useContext(ShopingContextCreate);
};

function Shopingcontext({ children }) {
  const [cartItem, setCartItem] = useState([]);

  const handelIncrease = (id) => {
    setCartItem((currentItems) => {
      let NotProduct = currentItems.find((item) => item.id == id) == null;
      if (NotProduct) {
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
      let LastProduct = currentItems.find((item) => item.id == id)?.qty == 1;
      if (LastProduct) {
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

  const ProductQty = (id) => {
    return cartItem.find((item) => item.id == id)?.qty || 0;
  };

  const ProductAllQty = cartItem.reduce((total, index) => {
    return total + index.qty;
  }, 0);
  return (
    <>
      <ShopingContextCreate.Provider
        value={{
          handelIncrease,
          ProductQty,
          ProductAllQty,
          handleDecrease,
          handelDeleteProduct,
          cartItem,
        }}
      >
        {children}
      </ShopingContextCreate.Provider>
    </>
  );
}

export default Shopingcontext;
