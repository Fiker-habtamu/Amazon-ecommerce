import React from "react";
import Rating from "@mui/material/Rating";
import "./ProductCard.css";
import {Link} from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;

  const handleAddToCart = () => {
    console.log(`Added "${title}" to cart.`);
    // Advanced integration: dispatch an action or update state context here
  };

  return (
    <div className="product-card">
      {/* Product Image Window */}
      <Link to={`/product/${id}`}>
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
        </div>
      </Link>

      {/* Product Information Details */}
      <div className="product-info">
        <h3 className="product-title" title={title}>
          {title}
        </h3>

        {/* MUI Rating integration */}
        <div className="product-rating-container">
          <Rating
            name="product-rating"
            value={rating.rate}
            precision={0.1}
            readOnly
            size="small"
            sx={{
              color: "#faaf00", // Amazon iconic gold star color
              fontSize: "1rem",
            }}
          />
          <span className="rating-count">{rating.count}</span>
        </div>

        {/* Pricing Layout */}
        <div className="product-price">
          <span className="price-currency">$</span>
          <span className="price-amount">{price}</span>
        </div>
      </div>

      {/* Context Action Button Container */}
      <div className="product-action">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
