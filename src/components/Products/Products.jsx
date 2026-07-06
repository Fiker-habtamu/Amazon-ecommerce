import React, { useEffect, useState } from "react";
import axios from "axios";
import { DotLoader, GridLoader } from "react-spinners";

function Products() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          "https://fakestoreapi.noksha.dev/api/products",
        );
        setProducts(response.data);
        console.log(loading);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return(
    <section className="h-[100px ] flex justify-center items-center"><span><GridLoader /></span></section>)
  if (Error) return(<section>Error: {Error}</section>)
  return(
  <section className="h-[300px ]">Products</section>
)
}

export default Products;
