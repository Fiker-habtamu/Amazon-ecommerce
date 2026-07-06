import React, { useEffect, useState } from "react";
import axios from "axios";
import { DotLoader, GridLoader } from "react-spinners";
import ProductCard from "./ProductCard";
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
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
        <span>
          <GridLoader />
        </span>
      </section>
    );
  if (error) return <section>Error: {error}</section>;
  return (
    <section className="products-section-container">
      <div className="products-grid">
        {products.map((eachProducts) => {
          return <ProductCard product={eachProducts} key={eachProducts.id} />;
        })}
      </div>
    </section>
  );
}

export default Products;
