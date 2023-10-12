import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const amount = useSelector((store) => store.cart.amount);
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="w-full bg-blue-600">
      <div className="w-6/12 flex justify-between items-center mx-auto text-white font-semibold py-4">
        <h2 className="text-2xl">Redux Toolkit</h2>
        <div className="flex items-center relative">
          <AiOutlineShoppingCart className="text-3xl" />
          <span className="absolute right-[-1rem] -top-3 bg-gray-400 rounded-full px-2">
            {amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
