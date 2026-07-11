import React, { useContext, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";
import ProductCard from "../../components/Products/ProductCard";
import { DataContext } from "../../DataProvider/DataProvider";

const Payment = () => {
  const [{user,basket},dispatch] = useContext(DataContext)

  const totalItems = basket?.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);
  const totalPrice = basket.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
  };

  return (
    <div className="payment-page">
      {/* Page Header */}
      <div className="payment-header">
        <h1>Checkout (<Link to="/cart">{totalItems} items</Link>)</h1>
      </div>

      <div className="payment-content-container">
        
        {/* SECTION 1: DELIVERY ADDRESS */}
        <div className="payment-section">
          <div className="section-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="section-data">
            <p className="user-email">{user.email}</p>
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>

        {/* SECTION 2: REVIEW ITEMS */}
        <div className="payment-section">
          <div className="section-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="section-data products-review-list">
            {basket.map((item) => (
				<ProductCard key={item.id} product={item} flex={true} notRenderAddBtn={true} className="checkout-mini-product-card"/>
            //   <div  className="checkout-mini-product-card">
            //     <div className="mini-image-box">
            //       <img src={item.image} alt={item.title} />
            //     </div>
            //     <div className="mini-product-details">
            //       <h4>{item.title}</h4>
            //       <div className="mini-rating-row">
            //         <Rating 
            //           value={item.rating.rate} 
            //           precision={0.1} 
            //           readOnly 
            //           size="small" 
            //           sx={{ color: "#faaf00" }} 
            //         />
            //         <span className="count-label">{item.rating.count}</span>
            //       </div>
            //       <p className="mini-price">${item.price.toFixed(2)}</p>
            //     </div>
            //   </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: PAYMENT DETAILS */}
        <div className="payment-section">
          <div className="section-title">
            <h3>Payment methods</h3>
          </div>
          <div className="section-data payment-gateway-box">
            <form onSubmit={handleSubmitPayment}>
              
              {/* Stripe Dynamic Secure Card Input */}
              <div className="stripe-input-wrapper">
                <CardElement 
                  options={{
                    style: {
                      base: {
                        fontSize: "15px",
                        color: "#424770",
                        "::placeholder": { color: "#aab7c4" },
                      },
                      invalid: { color: "#9e2146" },
                    },
                  }}
                />
              </div>

              {/* Order total output display */}
              <div className="payment-order-summary">
                <p>Total Order | <strong>${totalPrice}</strong></p>
              </div>

              {error && <div className="payment-error-alert">{error}</div>}

              <button 
                type="submit" 
                className="payment-submit-btn" 
                disabled={processing || !stripe || !elements}
              >
                {processing ? "Processing Transaction..." : "Pay Now"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;