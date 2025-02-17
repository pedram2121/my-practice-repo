import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { useShopingContext } from "../../Components/ShopingCartContex/Shopingcontext";
import { getProduct } from "../../Services/api";

function CartItemProduct({ id }) {


  const { handelIncrease, ProductQty, handleDecrease, handelDeleteProduct } = useShopingContext();
    
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct().then((products) => {
      setProduct(products.find((item) => item.id === id));
    });
  }, [id]);

  
  if (!product) return <p>در حال بارگذاری...</p>;

  return (
    <Container>
      <div className="bg-white mt-10 shadow-xl rounded-lg p-6 w-full hover:shadow-2xl transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-12 items-center gap-6 border-b pb-6">
          <div className="col-span-3 flex justify-center">
            <img
              className="w-40 h-40 object-contain rounded-lg border border-gray-200"
              src={product.img}
              alt={product.name}
            />
          </div>

          <div className="col-span-5">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
              {product.name}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handelIncrease(id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              +
            </button>
            <span className="text-lg font-semibold">{ProductQty(id)}</span>
            <button
              onClick={() => handleDecrease(id)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 transition-all"
            >
              -
            </button>
          </div>

          <div className="col-span-2 text-right">
            <span className="text-xl font-semibold text-green-600">
              ${product.price}
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => handelDeleteProduct(id)}
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg
             cursor-pointer hover:bg-yellow-600 text-sm flex items-center gap-2 transition-all">
            RemoveFromCart
          </button>
        </div>
        
      </div>
    </Container>
  );
}

export default CartItemProduct;
