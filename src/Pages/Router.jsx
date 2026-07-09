import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './Landing/Landing'
import Payment from './Payment/Payment'
import Auth from './Auth/Auth'
import Orders from './Orders/Orders'
import Cart from './Cart/Cart'
import EachCategory from './EachCategory/EachCategory'
import ProductDetail from './ProductDetail/ProductDetail'

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments " element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<EachCategory />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default Router;