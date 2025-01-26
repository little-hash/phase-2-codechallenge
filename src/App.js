import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";
import "./styles/App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart
        cartItems={cart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;