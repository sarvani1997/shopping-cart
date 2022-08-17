import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useAppSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCard = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCard}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
