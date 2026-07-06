import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './Landing/Landing'
import SignUp from './Auth/SignUp'
import Payment from './Payment/Payment'
import Orders from './Orders/Orders'
import Cart from './Cart/Cart'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;