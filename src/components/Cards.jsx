import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../redux/faetures/modalSlice";
import Card from "./Card";

const Cards = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="w-full">
      {!amount ? (
        <div className="w-6/12 flex flex-col justify-center items-center mx-auto gap-4 my-[8rem]">
          <h2 className="tracking-wider text-2xl font-bold mt-[4rem]">
            YOUR BAG
          </h2>
          <h4 className="font-semibold tracking-widest opacity-50">
            is currently empty!
          </h4>
        </div>
      ) : (
        <div className="w-6/12 flex flex-col justify-center items-center mx-auto">
          <h2 className="tracking-wider text-2xl font-bold mt-[2rem]">
            YOUR BAGS
          </h2>
          <div className="w-full flex flex-col gap-8 justify-between items-center mx-auto">
            {cartItems.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </div>
          <div className="border w-full justify-center mx-auto mt-[2rem]"></div>
          <div className="w-full justify-between items-center flex mx-auto">
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
