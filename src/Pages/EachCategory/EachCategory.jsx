import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { baseApi } from "../../Api/ApiEnd";
import ProductCard from "../../components/Products/ProductCard";

function EachCategory() {
  const { categoryName } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`${baseApi}/products/category/${categoryName}`);
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading)
    return (
      <section className="h-[100px ] flex justify-center items-center">
        <span className="mt-[50px ]">
          <GridLoader />
        </span>
      </section>
    );
  if (error) return <section>Error: {error}</section>;
  return (
    <section className="products-section-container">
      <h3 className="category_name">Category / {categoryName}</h3>
      <div className="products-grid">
        {product.map((eachProducts) => {
          return <ProductCard product={eachProducts} key={eachProducts.id} />;
        })}
      </div>
    </section>
  );
}

export default EachCategory;
