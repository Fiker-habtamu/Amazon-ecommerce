import React from 'react';
import './CategoryGrid.css';
import { categoryImage } from './categoryFullInfo';
import CategoryCard from './CategoryCard';

const CategoryGrid = () => {
  return (
    <div className="category-grid-container">
      { 
	  categoryImage.map((category,index)=>(
		<CategoryCard category={category}
          items={{ image: category.imgLink }}
          linkText="See more"/>
	  ))
      }
    </div>
  );
};

export default CategoryGrid;