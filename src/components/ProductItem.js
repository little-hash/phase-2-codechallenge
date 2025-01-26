import React from "react";

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;