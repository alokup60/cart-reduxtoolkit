import "./App.css";
import { useEffect } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./redux/faetures/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div>
      <Navbar />
      <Cards />
      {isOpen && <Modal />}
    </div>
  );
}

export default App;
