import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({category,items,linkText}) => {
  let {title, name} = category
  const isMultiItem = Array.isArray(items) && items.length === 4;

  return (
    <div className="category-card">
      <h2 className="card-title">{title}</h2>

      {isMultiItem ? (
        /* 2x2 Grid Layout */
        <div className="card-grid-layout">
          {items.map((item, index) => (
            <>
              <div key={index} className="grid-item-wrapper">
                <div className="grid-image-box">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="grid-image"
                  />
                </div>
                <span className="grid-label">{item.label}</span>
              </div>
            </>
          ))}
        </div>
      ) : (
        /* Single Featured Item Layout */
        <div className="card-single-layout">
          <div className="single-image-box">
            <img
              src={Array.isArray(items) ? items[0]?.image : items.image}
              alt={title}
              className="single-image"
            />
          </div>
        </div>
      )}

      {linkText && (
        <Link to={`/category/${name}`} className="card-link">
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default CategoryCard;
