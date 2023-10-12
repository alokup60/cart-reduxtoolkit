import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import samImg from "../images/samsung.png";

const Card = ({ title, image, price }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mx-auto">
        <div className="flex gap-4">
          <div>
            <img src={image} className="w-[3.5rem]" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-black font-semibold">{title}</h2>
            <p className="opacity-50 font-semibold">${price}</p>
            <p className="tracking-widest font-semibold opacity-50 text-blue-500">
              remove
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center ">
          <FaAngleUp />
          <p className="font-semibold">1</p>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default Card;
