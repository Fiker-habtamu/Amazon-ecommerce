import React, { useContext } from "react";
import "./Card.css";
import ProductCard from "../../components/Products/ProductCard";
import { DataContext } from "../../DataProvider/DataProvider";

function Cart() {
	const [{basket},dispatch] = useContext(DataContext)
  return (
    <div className="cart-page-container">
      {/* Left Column: Basket Summary Listing */}
      <div className="cart-left-column">
        <div className="cart-greeting">
          <h1>Hello</h1>
          <h2>Your shopping basket</h2>
        </div>

        <hr className="cart-divider" />
        <div>
			{basket.length==0?(<p className="empty-cart-msg">Your Shopping Basket is empty.</p>):(
				basket?.map((item,i)=>{
					return <ProductCard key={i} product={item} flex={true} renderDesc={true}/>
				})
			)}
        </div>
      </div>

      {/* Right Column: Checkout Subtotal Panel Widget */}
      <div className="cart-right-column">
        <div className="subtotal-box">
          <p className="subtotal-text">
            10$ <strong>0</strong>
          </p>
          <div className="gift-checkbox-wrapper">
            <input type="checkbox" id="gift-check" />
            <label htmlFor="gift-check">This order contains a gift</label>
          </div>
          <button className="checkout-btn">Continue to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
