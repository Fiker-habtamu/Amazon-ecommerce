import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseApi } from "../../Api/ApiEnd";
import { GridLoader } from "react-spinners";
import ProductCard from "../../components/Products/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
	let fetchData = async()=>{
		try {
			let response = await axios.get(`${baseApi}/products/${productId}`)
			setSingleProduct(response.data)
		} catch (error) {
			setError(error.message)
		}finally{
			setLoading(false)
		}
	}
	fetchData()
  },[])
  if (loading)
    return (
      <section className="h-[100px ] flex justify-center items-center">
        <span>
          <GridLoader />
        </span>
      </section>
    );
  if (error) return <section>Error: {error}</section>;
  return <div>
	<ProductCard product={singleProduct} flex={true} renderDesc= {true}/>
	</div>;
}

export default ProductDetail;
