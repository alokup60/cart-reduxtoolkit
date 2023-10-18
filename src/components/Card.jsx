import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { removeItems, increase, decrease } from "../redux/faetures/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ img, title, id, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mx-auto">
        <div className="flex gap-4">
          <div>
            <img src={img} className="w-[3.5rem]" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-black font-semibold">{title}</h2>
            <p className="opacity-50 font-semibold">${price}</p>
            <button
              className="tracking-widest font-semibold opacity-50 text-blue-500"
              onClick={() => dispatch(removeItems(id))}
            >
              remove
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center ">
          <button onClick={() => dispatch(increase(id))}>
            <FaAngleUp />
          </button>

          <p className="font-semibold">{amount}</p>
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItems(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <FaAngleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
