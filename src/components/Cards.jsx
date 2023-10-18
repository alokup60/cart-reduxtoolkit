import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../redux/faetures/modalSlice";
import { getCartItems, isLoading } from "../redux/faetures/cartSlice";
import Card from "./Card";
import Loading from "./Loading";
import "./Cards.css";

const Cards = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  return (
    <div className="w-full">
      {!amount ? (
        <div className="w-6/12 flex flex-col justify-center items-center text-center mx-auto gap-4 my-[8rem]">
          <h2 className="tracking-wider text-2xl font-bold mt-[4rem]">
            YOUR BAG
          </h2>
          <h4 className="font-semibold tracking-widest opacity-50">
            is currently empty!
          </h4>
          <button
            onClick={() => dispatch(getCartItems())}
            className="border rounded-md border-violet-500 px-3 py-1 font-semibold text-lg text-violet-500 hover:bg-violet-500 hover:text-white transition-all duration-100 ease-in"
          >
            Refresh
          </button>
        </div>
      ) : (
        <div className="w-6/12 flex flex-col justify-center items-center mx-auto main-div mb-4">
          <h2 className="tracking-wider text-2xl font-bold mb-4 mt-4">
            YOUR BAGS
          </h2>
          <div className="w-full flex flex-col gap-8 justify-between items-center mx-auto sub-div">
            {cartItems.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </div>
          <div className="border w-full justify-center mx-auto mt-[2rem] border-style"></div>
          <div className="w-full justify-between items-center flex mx-auto total-style">
            <p className="font-semibold tracking-widest">Total</p>
            <p className="font-semibold tracking-widest">${total.toFixed(2)}</p>
          </div>
          <button
            className="tracking-wider border-red-800 mt-4 border-2 rounded-md px-3 py-1 text-red-800 font-bold hover:bg-red-800 hover:text-white transition-all delay-150 ease-in-out"
            onClick={() => dispatch(openModal())}
          >
            CLEAR CART
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
