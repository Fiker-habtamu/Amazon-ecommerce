import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import "./Order.css";
import ProductCard from "../../components/Products/ProductCard";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../Utility/fireBase";

function Orders() {
  const [ordersList, setOrderList] = useState([]);
  const [{ user, basket }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user?.uid) {
      setOrderList([]);
      return;
    }

    const ordersCollectionRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersCollectionRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrderList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });

    // Clean up the listener when user logs out or leaves page
    return () => unsubscribe();
  }, []);
  return (
    <div className="orders-container">
      <div className="orders-inner">
        <h2 className="orders-title">Your Orders</h2>
		{ordersList?.length === 0 && (<p className="p-[20px ]">You don't have orders yet</p>)}
        {ordersList.map((order) => (
          <div key={order.id} className="order-card">
            {/* Displaying the Stripe Payment Intent ID */}
            <p className="order-id">Order ID: {order.id}</p>

            <div className="order-items-list">
              {order.data.basket.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  flex={true}
                  notRenderAddBtn={true}
                  RenderAmount={true}
                  className="orders-mini-product-card"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
