import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, items, linkText, linkUrl }) => {
  // Check if it's a 4-item grid or a single featured item
  const isMultiItem = Array.isArray(items) && items.length === 4;

  return (
    <div className="category-card">
      <h2 className="card-title">{title}</h2>

      {isMultiItem ? (
        /* 2x2 Grid Layout */
        <div className="card-grid-layout">
          {items.map((item, index) => (
            <div key={index} className="grid-item-wrapper">
              <div className="grid-image-box">
                <img src={item.image} alt={item.label} className="grid-image" />
              </div>
              <span className="grid-label">{item.label}</span>
            </div>
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
        <a href={'#'} className="card-link">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default CategoryCard;