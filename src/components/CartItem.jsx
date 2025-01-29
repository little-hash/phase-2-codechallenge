import React from "react";

function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">${item.price}</span>
      <div className="cart-item-quantity">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
          min="1"
        />
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;