import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import Payment from "./Payment/Payment";
import Auth from "./Auth/Auth";
import Orders from "./Orders/Orders";
import Cart from "./Cart/Cart";
import EachCategory from "./EachCategory/EachCategory";
import ProductDetail from "./ProductDetail/ProductDetail";

// Make sure it looks exactly like this line:
import { Elements } from "@stripe/react-stripe-js"; 
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Q3gIHDl8SpKXVAJDELtDDexChfqgtA2zGk01zU9mdNj6NyCZW3Go1TNeL8kfQJjD7oGtaJCaUGzRfCIkMKVFw0H000EpaKidD"
);

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      
      <Route 
        path="/payments" 
        element={
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        } 
      />
      
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<EachCategory />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;