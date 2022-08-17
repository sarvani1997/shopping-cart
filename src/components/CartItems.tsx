import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useAppSelector } from "../store";

const CartItems = () => {
  const cartItems = useAppSelector((state) => state.cart.itemsList);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <CartItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
