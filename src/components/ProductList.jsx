import React from "react";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;