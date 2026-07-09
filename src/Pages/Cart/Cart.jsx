import React, { useContext } from "react";
import "./Card.css";
import ProductCard from "../../components/Products/ProductCard";
import { DataContext } from "../../DataProvider/DataProvider";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  let total = basket.reduce((amount,item)=>{
	return  amount + item.price * item.amount
  },0)
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
          {basket.length == 0 ? (
            <p className="empty-cart-msg">Your Shopping Basket is empty.</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  flex={true}
                  renderDesc={true}
                  notRenderAddBtn={true}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Right Column: Checkout Subtotal Panel Widget */}
      {basket?.length !== 0 && (
        <div className="cart-right-column">
          <div className="subtotal-box">
            <p className="subtotal-text">
              Subtotal ({basket?.length} item{basket?.length !== 1 ? "s" : ""}):{" "}
              <strong>${total}</strong>
            </p>
            <div className="gift-checkbox-wrapper">
              <input type="checkbox" id="gift-check" />
              <label htmlFor="gift-check">This order contains a gift</label>
            </div>
            <Link to={"/payments"}>
              <button className="checkout-btn">Continue to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
