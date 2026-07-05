import React from 'react';
import './CategoryGrid.css';
import { categoryImage } from './categoryFullInfo';
import CategoryCard from './CategoryCard';

const CategoryGrid = () => {
  return (
    <div className="category-grid-container">
      { 
	  categoryImage.map((category,index)=>(
		<CategoryCard title={category.title}
          items={{ image: category.imgLink }} // Passing it as an object matching your card setup
          linkText="See more"/>
	  ))
      }
      {/* <div className="mock-card">Card 1 Placeholder</div>
      <div className="mock-card">Card 2 Placeholder</div>
      <div className="mock-card">Card 3 Placeholder</div>
      <div className="mock-card">Card 4 Placeholder</div> */}
    </div>
  );
};

export default CategoryGrid;