import { useEffect, useState } from "react";
import { useShopingContext } from "../../ShopingCartContext/Shopingcontext";
import { getProduct } from "../../Services/api";
import axios from "axios";
import { MdShoppingCart } from "react-icons/md";
import Container from "../../Components/Container/Container";

function CartItemProduct({ id }) {
  const {
    handelIncrease,
    productQty,
    handleDecrease,
    handelDeleteProduct,
    cartItem,
  } = useShopingContext();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProduct().then((result) => {
      setProduct(result.find((item) => item.id == id));
    });
  }, [id]);

  if (!product) return <p>در حال بارگذاری...</p>;

  return (
    <Container>
      <div className="bg-white shadow-xl rounded-lg p-5 w-full hover:shadow-2xl transition-all duration-300 mt-24 ease-in-out">
        <div className="grid grid-cols-12 items-center gap-6 border-b pb-6">
          <div className="col-span-3 flex justify-center ">
            <img
              className="w-40 h-40 object-contain rounded-lg border border-gray-200"
              src={product?.img}
              alt={product?.name}
            />
          </div>
          <div className="col-span-5">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
              {product?.name}
            </h2>
          </div>
          <div className="flex col-span-2  items-center gap-4">
            <button
              onClick={() => handleDecrease(id)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 transition-all"
            >
              -
            </button>

            <span className="text-lg font-semibold">{productQty(id)}</span>

            <button
              onClick={() => handelIncrease(id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              +
            </button>
          </div>
          <div className="flex justify-center items-center col-span-2 text-right mr-10">
            <p className="mr-2 text-[16px] whitespace-nowrap">
              Price per piece:{" "}
            </p>
            <span className="text-xl font-bold text-green-600">
              ${product?.price}.00
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mx-auto">
          <div className="mt-6 justify-end">
            <button
              onClick={() => handelDeleteProduct(id)}
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg
             cursor-pointer hover:bg-red-500 hover:text-white text-sm flex items-center gap-2 transition-all"
            >
              RemoveFromCart
            </button>
          </div>

          <div className="mt-6 justify-end">
            <button
              className="bg-gray-900 text-white px-16 py-2 rounded-lg
             cursor-pointer hover:bg-green-500 text-sm flex items-center gap-2 transition-all"
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CartItemProduct;
