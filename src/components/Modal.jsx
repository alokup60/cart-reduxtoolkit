import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/faetures/cartSlice";
import { closeModal } from "../redux/faetures/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="modal relative">
        <div className="overlay"></div>
        <div className="modal-content flex flex-col gap-4 py-4 px-2 rounded-md">
          <h2 className="font-semibold tracking-widest">
            Remove all items from your shopping cart ?
          </h2>
          <div className="flex justify-between">
            <button
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
              className="border rounded-md border-blue-500 tracking-widest px-2 py-1 text-blue-500 hover:bg-blue-500 hover:text-white transition-all delay-100 ease-in"
            >
              CONFIRM
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              className="border rounded-md border-red-500 tracking-widest px-2 py-1 text-red-500 hover:bg-red-500 hover:text-white transition-all delay-100 ease-in"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
