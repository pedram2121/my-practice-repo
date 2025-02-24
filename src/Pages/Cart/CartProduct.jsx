import React, { useEffect, useState } from "react";
import CartItemProduct from "../CartItems/CartItemProduct";
import { useShopingContext } from "../../Components/ShopingCartContex/Shopingcontext";
import { MdShoppingCart } from "react-icons/md";
import axios from "axios";
import formatNumber from "../../utiles/regularExpression";
import { RiDiscountPercentFill } from "react-icons/ri";

function CartProduct() {

  const { cartItem } = useShopingContext();
  // TotalPrice
  const [totall, setTotall] = useState([]);

  // Discount
  const [handeldiscount, setHandelDiscount] = useState("");

  const [descountedPrice, setDescountedPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const totalPrice = cartItem.reduce((total, index) => {
    let SelectedItem = totall.find((Result) => Result.id === index.id);
    return total + (SelectedItem?.price || 0) * index.qty;
  }, 0);

  useEffect(() => {
    axios.get("http://localhost:8001/products").then((Result) => {
      setTotall(Result.data);
    });
  }, []);

  const handelSubmitDiscount = () => {
    axios
      .get(`http://localhost:8001/discount?code=${handeldiscount}`)
      .then((Result) => {
        let data = Result.data;
        let descountedPrice = totalPrice * data[0].percentage /100
        let finalPrice = totalPrice - descountedPrice;
        setFinalPrice(finalPrice);
        setDescountedPrice(descountedPrice);
      });
  };

  return (
    <>
      {
      cartItem.map((item)=>
        <div>
           <CartItemProduct key={item.id} {...item}/>
        </div>
      )
      }
     

      <div className="mt-14 border-t py-10 flex flex-col md:flex-row items-center justify-between px-8 mx-auto bg-white rounded-2xl shadow-lg w-full max-w-4xl space-y-6 md:space-y-0">
        {/* قیمت کل */}
        <div className="flex items-center space-x-3">
          <MdShoppingCart className="text-blue-600 text-3xl" />
          <h1 className="text-lg font-semibold text-gray-700">Total Price:</h1>
          <span className="text-2xl font-bold text-green-600">
            ${formatNumber(totalPrice)}
          </span>
        </div>

        {/* کد تخفیف */}
        <div className="relative w-full max-w-[280px]">
          <label className="block text-gray-700 font-medium mb-2">
            Enter Discount Code:
          </label>
          <div className="relative">
            <input
              className="border border-gray-300 rounded-lg w-full h-10 pl-4 pr-10 text-[15px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Discount code..."
              onChange={(e) => setHandelDiscount(e.target.value)}
            />
            <RiDiscountPercentFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <button
            onClick={handelSubmitDiscount}
            className="px-6 py-2 rounded-lg bg-blue-500 mt-3 w-full text-white font-medium hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </div>

        {/* سود و قیمت نهایی */}
        <div className="text-center md:text-right">
          <h1 className="text-lg font-semibold text-gray-700">
            Your Profit: {descountedPrice}.00 $
          </h1>
          <h2 className="text-lg font-semibold text-gray-700">
            Final Price:{finalPrice}.00 $
          </h2>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
