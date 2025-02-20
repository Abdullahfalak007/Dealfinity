import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
    toast.error(`${item.title} has been removed from the cart.`);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center border-b py-2">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain mr-4"
              />
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <span className="font-semibold">{item.title}</span>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                </div>
                {/* <button
                  onClick={() => handleRemove(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full w-full hover:bg-red-600"
                > */}
                <button
                  onClick={() => handleRemove(item)}
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full w-auto hover:bg-gradient-to-l hover:from-red-600 hover:to-orange-700 transition-all"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
