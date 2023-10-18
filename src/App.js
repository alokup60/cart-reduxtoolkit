import "./App.css";
import { useEffect } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./redux/faetures/cartSlice";
import Loading from "./components/Loading";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <Cards />
      {isOpen && <Modal />}
    </div>
  );
}

export default App;
