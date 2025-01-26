import React from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={onRemoveFromCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;