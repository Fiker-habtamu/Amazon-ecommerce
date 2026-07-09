import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../../DataProvider/DataProvider";

const ProductCard = ({ product, flex, renderDesc,notRenderAddBtn }) => {
  const { id, title, price, description, category, image, rating } = product;

  const [state,dispatch] = useContext(DataContext)
  const handleAddToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item:{id, title, price, description, category, image, rating}
    })
  };

  return (
    <div className={`product-card ${flex ? "product_fixed" : " "}`}>
      {/* Product Image Window */}
      <Link to={`/product/${id}`}>
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
        </div>
      </Link>

      {/* Product Information Details */}
      <div className="product-details-content">
        <div className="product-info">
          <h3 className="product-title" title={title}>
            {title}
          </h3>

          {/* MUI Rating integration */}
          <div className="product-rating-container">
            <Rating
              name="product-rating"
              value={rating?.rate || 0}
              precision={0.1}
              readOnly
              size="small"
              sx={{
                color: "#faaf00", 
                fontSize: "1rem",
              }}
            />
            <span className="rating-count">{rating?.count || 0}</span>
          </div>

          {/* Conditional Description Render */}
          {renderDesc && (
            <p className="product-description">{description}</p>
          )}

          {/* Pricing Layout */}
          <div className="product-price">
            <span className="price-currency">$</span>
            <span className="price-amount">{price}</span>
          </div>
        </div>

        {/* Context Action Button Container */}
        {!notRenderAddBtn &&  <div className="product-action">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div> }
      
      </div>
    </div>
  );
};

export default ProductCard;