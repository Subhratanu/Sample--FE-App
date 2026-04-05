import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.images[currentImageIndex]}
          alt={product.title}
          className="product-image"
        />
        {product.images.length > 1 && (
          <>
            <button className="nav-button prev" onClick={handlePrevImage}>
              ❮
            </button>
            <button className="nav-button next" onClick={handleNextImage}>
              ❯
            </button>
            <div className="image-counter">
              {currentImageIndex + 1} / {product.images.length}
            </div>
          </>
        )}
      </div>

      <div className="product-details">
        <div className="category-badge">{product.category.name}</div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
