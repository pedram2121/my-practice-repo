import React, { useEffect, useState } from "react";
import CartItemProduct from "../CartItems/CartItemProduct";
import { useShopingContext } from "../../ShopingCartContext/Shopingcontext";
import { MdShoppingCart } from "react-icons/md";
import formatNumber from "../../utiles/regularExpression";
import { RiDiscountPercentFill } from "react-icons/ri";
import { getDiscount, getProduct } from "../../Services/api";
import Container from "../../Components/Container/Container";

function CartProduct() {
  const { cartItem } = useShopingContext();

  const [codediscount, setCodeDescount] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    async function getProduvtData() {
      const data = await getProduct();
      setTotal(data);
    }
    getProduvtData();
  }, []);

  const totalPrice = cartItem.reduce((item, index) => {
    const selectedItem = total.find((result) => result.id === index.id);
    return item + (selectedItem?.price || 0) * index.qty;
  }, 0);

  const handleSubmitDiscount = async () => {
    const dataDiscount = await getDiscount(codediscount);
    let discountPrice = (totalPrice * dataDiscount[0].percentage) / 100;
    let finalPrice = totalPrice - discountPrice;
    setDiscountPrice(discountPrice);
    setFinalPrice(finalPrice);
  };

  return (
    <Container>
      <>
        {cartItem.map((item) => (
          <div>
            <CartItemProduct key={item.id} {...item} />
          </div>
        ))}

        <div className="mt-14 border-t py-10 flex flex-col md:flex-row items-center justify-between px-8 mx-auto bg-white rounded-2xl shadow-lg w-full max-w-4xl space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <MdShoppingCart className="text-blue-600 text-3xl" />
            <h1 className="text-lg font-semibold text-gray-700">
              Total Price:
            </h1>
            <span className="text-2xl font-bold text-green-600">
              ${formatNumber(totalPrice)}
            </span>
          </div>

          <div className="relative w-full max-w-[280px]">
            <label className="block text-gray-700 font-medium mb-2">
              Enter Discount Code:
            </label>
            <div className="relative">
              <input
                className="border border-gray-300 rounded-lg w-full h-10 pl-4 pr-10 text-[15px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Discount code..."
                onChange={(e) => setCodeDescount(e.target.value)}
              />
              <RiDiscountPercentFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </div>
            <button
              onClick={handleSubmitDiscount}
              className="px-6 py-2 rounded-lg bg-blue-500 mt-3 w-full text-white font-medium hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>

          <div className="text-center md:text-right">
            <h1 className="text-lg font-semibold text-gray-700">
              Your Profit: {discountPrice}.00 $
            </h1>
            <h2 className="text-lg font-semibold text-gray-700">
              Final Price:{finalPrice}.00 $
            </h2>
          </div>
        </div>
      </>
    </Container>
  );
}

export default CartProduct;
